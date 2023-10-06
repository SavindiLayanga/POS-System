document.querySelectorAll('a[href^="#"]').forEach(anchor => {anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function addTelephone() {
    const telephoneInputs = document.querySelector(".telephone-inputs");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "telephone";
    newInput.required = true;
    newInput.placeholder = "Enter telephone number";
    telephoneInputs.appendChild(newInput);
}
