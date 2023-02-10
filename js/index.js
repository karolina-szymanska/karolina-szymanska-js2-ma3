import { baseUrl } from "./settings/api.js";
import Beach from "./Beach.js";
import createMenu from "./components/createMenu.js";
import displayMessage from "./components/displayMessage.js";

const beachesUrl = baseUrl + "beaches?populate=*";
createMenu();

(async function() {
    const container = document.querySelector(".container-beaches");

    try {
        const response = await fetch(beachesUrl);
        const result = await response.json();
        const beaches = result.data;
        console.log(beaches);

        container.innerHTML = "";

        beaches.forEach(function(beach) {
            const createdBeaches = new Beach(beach.attributes.name, beach.attributes.image.data.attributes.url);
            container.innerHTML += createdBeaches.render();
        });

    }

    catch(error) {
        console.log(error);
        displayMessage("error", error, ".container-beaches");
    }

})();