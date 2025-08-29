import {Login} from "../../api/fetchAuth.ts";

export function renderLogin() {
    const loginContainer = document.createElement('div');
    loginContainer.className = 'login-container';

    const form = document.createElement('form');
    form.className = 'form-group';
    // form.action

    const labelEmail = document.createElement('label');
    labelEmail.htmlFor = 'email';
    labelEmail.textContent = 'Email:';

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'Insira seu email';
    inputEmail.required = true;

    const labelPassword = document.createElement('label');
    labelPassword.htmlFor = 'password';
    labelPassword.textContent = 'Senha:';

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Insira sua senha';
    inputPassword.required = true;


    const submitButton = document.createElement('button');
    submitButton.className = 'btn-secondary';
    submitButton.id = 'submit-btn';
    submitButton.type = 'submit';
    submitButton.textContent = 'Entrar';

    form.appendChild(labelEmail);
    form.appendChild(inputEmail);

    form.appendChild(labelPassword);
    form.appendChild(inputPassword);

    form.appendChild(submitButton);
    loginContainer.appendChild(form);

    async function handleLoginSubmit(event: Event) {
        event.preventDefault();

        const email = inputEmail.value;
        const password = inputPassword.value;

        try {
            const response = await Login(email, password);
            localStorage.setItem("userId", response.id);
            localStorage.setItem("accessToken", response.access);
            localStorage.setItem("refreshToken", response.refresh);

            window.location.href = '/profile';
        }
        catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    }

    form.addEventListener('submit', handleLoginSubmit);

    return loginContainer
}
