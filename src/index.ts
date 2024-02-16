import { HelloComponent } from "./modules/hello.component";

console.log("TypeScript-Anwendung läuft 2!");

const element = document.getElementById("app");
const helloWorldComponent = new HelloComponent();

if(element) {
  // element.innerHTML = "<h1>Hallo Welt!</h1>";
  element.innerHTML = helloWorldComponent.message;
}
