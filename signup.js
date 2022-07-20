document.querySelector("form").addEventListener("submit",signupcall);
let arr=JSON.parse(localStorage.getItem("detail"))||[]
 function signupcall(event){
    event.preventDefault()
    let obj={
      name:document.querySelector("#name").value,
      email:document.querySelector("#email").value,
      pass:document.querySelector("#password").value,
    }
    arr.push(obj)
     localStorage.setItem("detail",JSON.stringify(arr))
     window.location.href="login.html"

 }
