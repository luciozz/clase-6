export default class Imagen {
    constructor(imagen) {
        this.imagen = imagen;
    }

    render() {
        return `<img src="${this.imagen}">`;
    }
}