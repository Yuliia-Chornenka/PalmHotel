class Form {
    constructor(id = '') {
        this._id = id;
    }

    render(container) {
        const form = document.createElement("form");
        form.id = this._id;
        container.appendChild(form);
    }
}


class registerForm {
    render() {
        const emailInput = new Input('email', 'Enter your email*', "email", "", 'true', 'email-input-register', 'input');
        const passwordInput = new Input('password', 'Enter password*', "password", "", 'true', 'password-input-register', 'input');
        const nameInput = new Input('text', 'Enter your name*', "userName", "", 'true', 'name-input-register', 'input');
        const submitBtn = new Input('submit', '', "", "Submit", '', 'register-btn', 'submit-btn');

        const emailExist = document.createElement('p');
        emailExist.id = 'email-exist-error';
        emailExist.classList.add('form-error-message');
        emailExist.innerText = "This email address is already registered";

        const shortPassword = document.createElement('p');
        shortPassword.id = 'short-password-error';
        shortPassword.classList.add('form-error-message');
        shortPassword.innerText = "Password must be at least 6 characters long";

        const errorRegister = document.createElement('p');
        errorRegister.id = 'error-registration';
        errorRegister.classList.add('form-error-message');
        errorRegister.innerText = "We can't sign you in right now. Please try again later";

        const registrationForm = document.getElementById('register-form');
        emailInput.render(registrationForm);
        registrationForm.appendChild(emailExist);
        passwordInput.render(registrationForm);
        registrationForm.appendChild(shortPassword);
        nameInput.render(registrationForm);
        registrationForm.appendChild(errorRegister);
        submitBtn.render(registrationForm);
    }
}

class loginForm {
    render() {
        const emailInput = new Input('email', 'Enter your email*', "email", "", 'true', 'email-input-login', 'input');
        const passwordInput = new Input('password', 'Enter password*', "password", "", 'true', 'password-input-login', 'input');
        const submitBtn = new Input('submit', '', "", "Submit", '', 'login-btn', 'submit-btn');

        const incorrectData = document.createElement('p');
        incorrectData.id = 'error-login-data';
        incorrectData.classList.add('form-error-message');
        incorrectData.innerText = "Incorrect email or password";

        const errorLogin = document.createElement('p');
        errorLogin.id = 'error-login';
        errorLogin.classList.add('form-error-message');
        errorLogin.innerText = "Sorry, we can't log you in. Please try again later";

        const loginForm = document.getElementById('login-form');
        emailInput.render(loginForm);
        passwordInput.render(loginForm);
        loginForm.appendChild(incorrectData);
        loginForm.appendChild(errorLogin);
        submitBtn.render(loginForm);
    }
}


class addReviewForm {
    render() {
        const selection = document.createElement('select');
        selection.id = 'review-selection';
        selection.classList.add('input');

        const textarea = document.createElement('textarea');
        textarea.id = 'review-textarea';
        textarea.classList.add('input');
        textarea.classList.add('review-textarea');
        textarea.placeholder = 'Write your review here';
        textarea.required = true;
        textarea.maxLength = 280;
        textarea.minLength = 50;

        const errorAddReview = document.createElement('p');
        errorAddReview.id = 'error-review';
        errorAddReview.classList.add('form-error-message');
        errorAddReview.innerText = "Sorry, we can't post your review. Please try again later.";

        const nameInput = new Input('text', 'Enter your name*', "name", "", 'true', 'name-input-review', 'input');
        const submitBtn = new Input('submit', '', "", "Submit", '', 'review-submit-btn', 'submit-btn');

        const loginForm = document.getElementById('review-form');
        loginForm.appendChild(selection);
        nameInput.render(loginForm);
        loginForm.appendChild(textarea);
        loginForm.appendChild(errorAddReview);
        submitBtn.render(loginForm);

        const reviewSelection = document.getElementById('review-selection');
        const options = [ 'Excellent: 5★', 'Great: 4★', 'Average: 3★', 'Poor: 2★', 'Bad: 1★' ];
        options.forEach(function (element, key) {
            reviewSelection[key] = new Option(element, element);
        });
    }
}