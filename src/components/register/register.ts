import { Register } from "../../api/fetchAuth.ts";

export function renderRegister() {
    const registerContainer = document.createElement('div');
    registerContainer.className = 'register-container';

    const form = document.createElement('form');
    form.className = 'form-group';

    const labelUsername = document.createElement('label');
    labelUsername.htmlFor = 'username';
    labelUsername.textContent = 'Nome:';

    const inputUsername = document.createElement('input');
    inputUsername.type = 'text';
    inputUsername.name = 'username';
    inputUsername.placeholder = 'Insira seu nome de usuário';
    inputUsername.required = true;

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

    const labelConfirmPassword = document.createElement('label');
    labelConfirmPassword.htmlFor = 'confirmPassword';
    labelConfirmPassword.textContent = 'Confirmação de senha:';

    const inputConfirmPassword = document.createElement('input');
    inputConfirmPassword.type = 'password';
    inputConfirmPassword.name = 'confirmPassword';
    inputConfirmPassword.placeholder = 'Insira sua senha novamente';
    inputConfirmPassword.required = true;

    const submitButton = document.createElement('button');
    submitButton.className = 'btn-secondary';
    submitButton.id = 'submit-btn';
    submitButton.type = 'submit';
    submitButton.textContent = 'Criar conta';

    form.appendChild(labelUsername);
    form.appendChild(inputUsername);

    form.appendChild(labelEmail);
    form.appendChild(inputEmail);

    form.appendChild(labelPassword);
    form.appendChild(inputPassword);

    form.appendChild(labelConfirmPassword);
    form.appendChild(inputConfirmPassword);

    form.appendChild(submitButton);
    registerContainer.appendChild(form);

    async function handleRegisterSubmit(event: Event) {
        event.preventDefault()

        const username: string = inputUsername.value;
        const email: string = inputEmail.value;
        const password: string = inputPassword.value;
        const passwordConfirmation: string = inputConfirmPassword.value;

        try {
            const response = await Register(username, email, password, passwordConfirmation);
            console.log(response);
            window.history.pushState({}, '', '/');
            window.location.reload();
        }
        catch (error) {
            console.error('Erro ao fazer o registro:', error);
        }
    }
    form.addEventListener('submit', handleRegisterSubmit)

    return registerContainer
}
