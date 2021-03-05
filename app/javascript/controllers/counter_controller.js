import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ]
  connect() {
    setInterval(this.refresh, 3000);
  }

  refresh = () => {
    // Fetch the data, from our app
    console.log("Counter is about to refresh!")
    fetch("/teachers", { headers: { accept: "application/json" } })
      .then((response) => response.json())
      .then((data) => {
        this.countTarget.innerHTML = data.teachers.length;
      });
    // Modify the dom
  }
}
