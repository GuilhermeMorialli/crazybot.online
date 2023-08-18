<script>
document.getElementById("meuBotao").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário por padrão

    var emailInput = document.getElementById("form-field-email");
    var erroEmail = document.getElementById("erroEmail");

    // Expressão regular para validar o formato do email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailInput.value.match(emailRegex)) {
        erroEmail.textContent = "Por favor, insira um email válido.";
    } else {
        // Se o email for válido, envie o formulário
        erroEmail.textContent = ""; // Limpa a mensagem de erro
        document.getElementById("meuFormulario").submit(); // Envie o formulário
    }
});
</script>
