export default class Beach {

    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    render () {
        return `<div class="beach" style="background-image:url(http://localhost:1337${this.image})">
                    <h5>${this.name}</h5>
                </div>`;
    }
}