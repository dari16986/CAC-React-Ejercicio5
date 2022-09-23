class Input {

    // Params:
    // Texto: Cadena texto en formato string.
    // Color: Cadena texto de color en formato hexadecimal sin numeral.
    constructor(width) {
        this.width = width;
    }

    render() {
        
        let myHTML = `<form">
                        <p>Ingrese la respuesta correcta:</p>
                        <label for="suma">2 + 6 = </label>
                        <input type="text" id="suma" name="suma"><span id="checkIcon" hidden>✔</span><br><br>
                      </form>`;


        return myHTML;

    }

    evaluate() {
        let valor = document.getElementById("suma");
        valor.addEventListener("keyup", (e) => {
            parseInt(valor.value) == 8 ? (valor.style.backgroundColor = "green" , document.getElementById("checkIcon").removeAttribute("hidden")) : (valor.style.backgroundColor = "red", document.getElementById("checkIcon").setAttribute("hidden", true));
        })

    }
}

//, document.getElementById("checkIcon").style.visibility = visible

export default Input;