// Модаль ашу
function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
}

// Модаль жабу
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

// Форма тексеру
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name.length < 2) {
        document.getElementById("message").innerText = "Атыңыз кемінде 2 әріп болуы керек.";
        return;
    }

    if (!email.includes("@") || email.length < 6) {
        document.getElementById("message").innerText = "Email дұрыс емес.";
        return;
    }

    document.getElementById("message").innerText = "Сәтті жіберілді!";
    showModal();
});
