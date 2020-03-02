class Input {
    constructor(type = 'text', placeholder = '', name = '', value = '', required, id = '', ...classArr) {
        this._type = type;
        this._placeholder = placeholder;
        this._name = name;
        this._value = value;
        this._required = required;
        this._id = id;
        this._classArr = classArr;
    }

    render(container) {
        const input = document.createElement("input");
        input.id = this._id;
        input.className = this._classArr.join(" ");
        input.placeholder = this._placeholder;
        input.type = this._type;
        input.name = this._name;
        input.value = this._value;
        input.required = this._required;
        container.appendChild(input);
    }
}


const registerButton = new Input('button', '', "", "Sign up", '', 'register-btn', 'btn header-btn');
const loginButton = new Input('button', '', "", "Sign in", '', 'login-btn', 'btn header-btn');
const headerSignUp = document.getElementsByClassName('header-sign-up')[0];
const headerSignIn = document.getElementsByClassName('header-sign-in')[0];
registerButton.render(headerSignUp);
loginButton.render(headerSignIn);

const searchForm = document.getElementsByClassName('search-form')[0];
const searchButton = new Input('button', '', "", "Search", '', 'search-btn', 'btn search-form-btn');
searchButton.render(searchForm);
