class ListaDeElementos {

    // Params:
    // Texto: Cadena texto en formato string.
    // Color: Cadena texto de color en formato hexadecimal sin numeral.
    constructor(cantidadDeElementos) {
        this.cantidadDeElementos = cantidadDeElementos;
    }

    render() {
        let lista = "";
        for (let index = 0; index < this.cantidadDeElementos; index++) {
            lista += `<li> Elemento ${index + 1}</li>`;
        }

        let myHTML = `<ul>
                        ${lista}
                     </ul>`;
        return myHTML;
    }

}

export default ListaDeElementos;