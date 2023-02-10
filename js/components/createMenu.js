import { getUserName } from "../utils/storage.js";
import logOut from "./logout.js";

export default function createMenu() {
    const menuContainer = document.querySelector("#container-menu");

    console.log(document.location.pathname);
    const { pathname } = document.location;

    const username = getUserName();
    console.log(username);

    let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

    if(username) {
        authLink = `<button class="logout" id="logout">Logout ${username}</button>`;
    }

    menuContainer.innerHTML = `<div class="menu">
                                    <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                                    ${authLink}
                            </div>`;

    logOut();
}