<script>
// Obtém o formulário e o campo de email
var meuFormulario = document.getElementById("meuFormulario");
var emailInput = document.getElementById("form-field-email");

// URL do seu webhook da RequestBin
var webhookURL = "https://eow4x3v70bfcmxq.m.pipedream.net";

// Evento de envio do formulário
meuFormulario.addEventListener("submit", function(event) {
    var erroEmail = document.getElementById("erroEmail");
    erroEmail.textContent = ""; // Limpa a mensagem de erro

    // Expressão regular para validar o formato do email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailInput.value.match(emailRegex)) {
        erroEmail.textContent = "Por favor, insira um email válido.";
        event.preventDefault(); // Impede o envio do formulário
    } else {
        // Dados a serem enviados para o webhook
        var dadosWebhook = {
            email: emailInput.value
            // Você pode adicionar mais campos aqui, se necessário
        };

        // Envia a solicitação POST para o webhook
        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosWebhook)
        })
        .then(response => response.text())
        .then(data => {
            console.log("Resposta do webhook:", data);
            alert("Webhook enviado com sucesso!");
            // Redirecione para a página de destino
            window.location.href = "pagina_destino.html"; // Substitua pelo URL da página de destino
        })
        .catch(error => {
            console.error("Erro ao enviar o webhook:", error);
            alert("Erro ao enviar o webhook.");
        });
    }
});
</script>
