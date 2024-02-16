import { HelloComponent } from "./modules/hello.component";

console.log("TypeScript-Anwendung läuft!");

const element = document.getElementById("app");

if(element) {
  element.innerHTML = "<h1>Hallo Welt!</h1>";
}
