class Button {

    // Params:
    // Texto: Cadena texto en formato string.
    // Color: Cadena texto de color en formato hexadecimal sin numeral.
    constructor(texto, css_class) {
        this.texto = texto;
        this.css_class = css_class;
    }

    render() {
        let myHTML = `<button type="button" class="${this.css_class}";>${this.texto}</button>`;
        return myHTML;
    }

}


export default Button;