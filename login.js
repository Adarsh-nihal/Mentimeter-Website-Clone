
document.querySelector("form").addEventListener("submit",logincall);

let signup=JSON.parse(localStorage.getItem("detail"))||[];
function logincall(e){
    e.preventDefault()
    if(signup.length===0){
        alert("No user till Now");
        return;
    }
    let obj={
        email:document.querySelector("#email").value,
        pass:document.querySelector("#password").value

    }
    signup.forEach(function(ele){
        if(ele.email===obj.email && ele.pass===obj.pass){
            localStorage.setItem("detail",JSON.stringify(ele))
            alert("logged in succesfull");
            window.location.href="navbar.html"
        }
        else{
            alert("wrong data")
        }
    })

}

