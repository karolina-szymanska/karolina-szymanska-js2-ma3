import createMenu from "./components/createMenu.js";
import { baseUrl } from "./settings/api.js";
import { saveToken, saveUser } from "./utils/storage.js";
import displayMessage from "./components/displayMessage.js";

const form = document.querySelector("#contactForm");
const messageContainer = document.querySelector(".container-message");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

createMenu();

function validateForm(event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue.length > 4) {
        usernameError.style.display = "none";
    }
    else {
        usernameError.style.display = "block";
    }

    if(validatePassword(passwordValue) === true) {
        passwordError.style.display = "none";
    }
    else {
        passwordError.style.display = "block";
    }

    if((usernameValue.length > 4) && (validatePassword(passwordValue) === true)) {
        username.value = "";
        password.value = "";
    }

    logIn(usernameValue, passwordValue);
}

form.addEventListener("submit", validateForm);


function validatePassword(password) {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    const patternMatches = regEx.test(password);
    return patternMatches;
}

async function logIn(username, password) {
    const logInUrl = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(logInUrl, options);
        const result = await response.json();
        console.log(result);

        messageContainer.innerHTML = "";

        if (result.user) {
            saveToken(result.jwt);
            saveUser(result.user);
            location.href = "/";
        }

        if (result.error) {
            return displayMessage("warning", "Login unsuccessful. Try again, please", ".container-message");
            
        }
    }

    catch(error) {
        console.log(error);
    }
}