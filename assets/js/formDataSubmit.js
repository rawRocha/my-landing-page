//seleciona o formulario
const form = document.querySelector(".contact-form");

//escuta o evento de submissão
form.addEventListener("submit", function (e) {
  e.preventDefault(); //impede o comportamento padrão de envio do formulário

  //captura os valores dos campos do formulario
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  //cria um objeto com os dados do formulario
  const formData = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    mensagem: mensagem,
  };

  //Envia os dados para a api
  fetch("http://localhost:4000/submit-form", {
    method: "POST", //metodo post para enviar os dados
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), //converte os dados do obj para json
  })
    .then((response) => response.json()) //processa a resposta da API
    .then((data) => {
      //mostra uma mensagem ao usuario sobre o resultado
      alert(data.message);
      form.reset(); //limpa o formulário apos o envio
    })
    .catch((error) => {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados. Tente Novamente.");
    });
});
