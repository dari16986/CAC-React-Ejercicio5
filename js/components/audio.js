class Audio {

    // Params:
    // Texto: Cadena texto en formato string.
    // Color: Cadena texto de color en formato hexadecimal sin numeral.
    constructor(fuente) {
        this.fuente = fuente;
    }

    render() {
        let myHTML = `<audio controls>
                        <source src="${this.fuente}" type="audio/ogg">
                      </audio>`;
        return myHTML;
    }

}


export default Audio;



