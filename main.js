let inp = document.getElementById("email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{5,}$/;
const api = "https://649c26020480757192378cd2.mockapi.io/api/v1/datas";

class MyForm {
  constructor() {
    this.data = inp.value;
  }

  async sendData() {
    const email = this.data.trim();

    if (emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (email.length === 0) {
      alert("Email field is empty");
      return;
    }

    try {
      const response = await fetch(api, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Email was sent successfully");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

const myForm = new MyForm();

document.getElementById("bttn").addEventListener("click", () => {
  myForm.sendData();
});
var cl = document.getElementById("close");
var btn = document.getElementById("burger");
var div_menu = document.getElementById("menu");
btn.onclick = function () {
  div_menu.classList.toggle("dps");
  cl.style.display = "block";
  btn.style.display = "none";
};
cl.onclick = function () {
  div_menu.classList.toggle("dps");
  cl.style.display = "none";
  btn.style.display = "block";
};



 

