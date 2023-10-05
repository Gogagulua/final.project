let inp = document.getElementById("email");
let btn1 = document.getElementById("bttn");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;


btn1.addEventListener('click',(event)=> {
    
   event.preventDefault()
    if (inp.value == "") {
        console.log("its empty");
      }
      else if (emailPattern.test(inp)) {
        console.log("Valid email address");
      } else {
        console.log("Invalid email address");
      }
  })


  var cl = document.getElementById("close");
  var btn = document.getElementById('burger')
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
