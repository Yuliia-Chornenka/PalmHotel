/*Local Storage userName*/
window.addEventListener("load", function () {
    if (window.localStorage.userName) {
        const userGreeting = document.getElementsByClassName('user-greeting')[0];
        const userGreetingName = document.getElementsByClassName('user-greeting-name')[0];
        userGreeting.style.display = 'block';
        userGreetingName.innerText = window.localStorage.userName;
        const headerLoginWrapper = document.getElementsByClassName('header-login-wrapper')[0];
        headerLoginWrapper.style.visibility = 'hidden';
        document.getElementsByClassName('review-add-btn')[0].style.visibility = 'visible';
    }
});


/*Delete Local Storage userName*/
const userGreetingSignOut = document.getElementsByClassName('user-greeting-sign-out')[0];
userGreetingSignOut.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem('userName');
    const userGreeting = document.getElementsByClassName('user-greeting')[0];
    userGreeting.style.display = 'none';
    const headerLoginWrapper = document.getElementsByClassName('header-login-wrapper')[0];
    headerLoginWrapper.style.visibility = 'visible';
    document.getElementsByClassName('review-add-btn')[0].style.visibility = 'hidden';
});


/*Registration form*/
const formRegistrationWrapper = new Form('register-form');
formRegistrationWrapper.render(modalWindowRegister);

const formRegistration = new registerForm();
formRegistration.render();

const registrationFormSubmit = document.getElementById('register-form');
registrationFormSubmit.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email-input-register').value;
    let name = document.getElementById('name-input-register').value;
    let password = document.getElementById('password-input-register').value;


    const emailExistValidation = {
        method: 'GET',
        url: `http://localhost:3000/users`,
        headers: {'Content-Type': 'application/json'}
    };

    axios(emailExistValidation)
        .then(function (response) {
            if (response.status === 200) {

                for (let i = 0; i < response.data.length; i++) {
                    const emailExist = document.getElementById('email-exist-error');
                    if (response.data[i].email === email) {
                        emailExist.style.visibility = 'visible';
                        return;
                    } else {
                        emailExist.style.visibility = 'hidden';
                    }
                }

                if (password.length <= 5) {
                    const shortPassword = document.getElementById('short-password-error');
                    shortPassword.style.visibility = 'visible';
                    return;
                }

                const userRegister = {
                    email,
                    name,
                    password
                };

                const registerOptions = {
                    method: 'POST',
                    url: 'http://localhost:3000/users',
                    data: JSON.stringify(userRegister),
                    headers: {'Content-Type': 'application/json'}
                };

                axios(registerOptions)
                    .then(function (response) {
                        if (response.status === 201) {
                            document.getElementById('register-form').reset();
                            modalWindowRegister.close();
                            const userGreeting = document.getElementsByClassName('user-greeting')[0];
                            const userGreetingName = document.getElementsByClassName('user-greeting-name')[0];
                            userGreeting.style.display = 'block';
                            userGreetingName.innerText = response.data.name;
                            window.localStorage.userName = response.data.name;

                            const headerLoginWrapper = document.getElementsByClassName('header-login-wrapper')[0];
                            headerLoginWrapper.style.visibility = 'hidden';

                            document.getElementsByClassName('review-add-btn')[0].style.visibility = 'visible';
                        }
                    })
                    .catch(function (error) {
                        const errorRegistration = document.getElementById('error-registration');
                        errorRegistration.style.visibility = 'visible';
                    });
            }
        })
        .catch(function (error) {
            const errorRegistration = document.getElementById('error-registration');
            errorRegistration.style.visibility = 'visible';
        });
});




/*Login form*/
const formLoginWrapper = new Form('login-form');
formLoginWrapper.render(modalWindowLogin);

const formLogin = new loginForm();
formLogin.render();

const loginFormSubmit = document.getElementById('login-form');
loginFormSubmit.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email-input-login').value;
    let password = document.getElementById('password-input-login').value;

    const registerOptions = {
        method: 'GET',
        url: `http://localhost:3000/users?email=${email}&password=${password}`,
        headers: {'Content-Type': 'application/json'}
    };

    axios(registerOptions)
        .then(function (response) {
            if (response.status === 200 && response.data.length === 1) {
                document.getElementById('login-form').reset();
                modalWindowLogin.close();
                const userGreeting = document.getElementsByClassName('user-greeting')[0];
                const userGreetingName = document.getElementsByClassName('user-greeting-name')[0];
                userGreeting.style.display = 'block';
                userGreetingName.innerText = response.data[0].name;
                window.localStorage.userName = response.data[0].name;

                const headerLoginWrapper = document.getElementsByClassName('header-login-wrapper')[0];
                headerLoginWrapper.style.visibility = 'hidden';

                document.getElementsByClassName('review-add-btn')[0].style.visibility = 'visible';

            } else if (response.status === 200 && response.data.length === 0) {
                const errorLogin = document.getElementById('error-login-data');
                errorLogin.style.visibility = 'visible';
            }
        })
        .catch(function (error) {
            const errorLogin = document.getElementById('error-login');
            errorLogin.style.visibility = 'visible';
        });
});
