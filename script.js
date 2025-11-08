// Modal functions
function openProviderModal(type) {
    const modal = document.getElementById('providerModal');
    modal.classList.add('active');
    
    if (type) {
    showRegisterView();
    document.getElementById('serviceType').value = type;
    } else {
    showLoginView();
    }
}

function closeProviderModal() {
    const modal = document.getElementById('providerModal');
    modal.classList.remove('active');
}

function showLoginView() {
    document.getElementById('loginView').style.display = 'block';
    document.getElementById('registerView').style.display = 'none';
}

function showRegisterView() {
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('registerView').style.display = 'block';
}

// Form handlers
function handleProviderLogin(event) {
    event.preventDefault();
    alert('Función de login de prueba. Gracias por probar nuestra Landing Page :)');
    return false;
}

function handleProviderRegister(event) {
    event.preventDefault();
    const serviceType = document.getElementById('serviceType').value;
    const cuit = document.getElementById('registerCuit').value;
    
    alert(`Registro exitoso!\n\nTipo: ${serviceType}\nCUIT: ${cuit}\n\nSe enviará un email de verificación y se validará el CUIT con AFIP.`);
    closeProviderModal();
    return false;
}

function handleLeadForm(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`¡Gracias! Enviamos la guía a ${email}\n\nTambién incluimos tu cupón de descuento de USD 40 para tu primera mudanza.`);
    event.target.reset();
    window.location.href = "mudit_guide.html"
    return false;
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('providerModal');
    if (event.target === modal) {
    closeProviderModal();
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && !this.hasAttribute('onclick')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    });
});