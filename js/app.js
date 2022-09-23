import Button from "./components/buttons.js";
import Audio from "./components/audio.js";
import Video from "./components/video.js";
import ListaDeElementos from "./components/listaDeElementos.js";
import Input from "./components/input.js";

const myApp = document.getElementById("myApp");

let myButton = new Button("Enviar", "btn btn-success");

let myAudio = new Audio("./audio/efecto-de-sonido-golpe.mp3");

let myVideo = new Video("./video/background_video.mp4");

let myInput = new Input();

let myListaDeElementos = new ListaDeElementos(3);


myApp.innerHTML = myButton.render() + `<br/>` + myAudio.render() + `<br/>` + myVideo.render() + `<br/>` + myListaDeElementos.render() + `<br/>` + myInput.render() ;

myInput.evaluate();
