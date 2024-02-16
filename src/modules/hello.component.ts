export class HelloComponent {
  // Deklaration der Komponenteneigenschaften
  public message: string = "Hallo Welt 2!";

  // Konstruktor (optional)
  constructor() {}

  // Methode zur Aktualisierung der Nachricht
  public updateMessage(newMessage: string): void {
    this.message = newMessage;
  }

  render() {
    return undefined;
  }
}
