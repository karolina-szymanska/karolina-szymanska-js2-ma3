import { clearStorage } from "../utils/storage.js";

export default function logOut() {
    const logoutButton = document.querySelector("#logout");

    if(logoutButton) {

        logoutButton.addEventListener("click", doLogOut);
        
        function doLogOut() {
            clearStorage();
            location.href = "/";
        }
    }
}