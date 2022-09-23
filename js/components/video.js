 class Video {

    // Params:
    // Texto: Cadena texto en formato string.
    // Color: Cadena texto de color en formato hexadecimal sin numeral.
    constructor(fuente) {
        this.fuente = fuente;
    }

    render() {
        let myHTML = `<video width="400" controls>
                           <source src="${this.fuente}">
                           Your browser does not support HTML video.
                      </video>`;
        return myHTML;
    }

}

export default Video;