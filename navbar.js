
    document.querySelector(".sign").addEventListener("click",signcall)
    function signcall(event){
        event.preventDefault()
      window.location.href="signup.html"
    }
    document.querySelector("#log").addEventListener("click",logcall)
    function logcall(e){
        e.preventDefault()
        window.location.href="login.html"
    }
 document.querySelector("#sign").addEventListener("click",sigcall)
 function sigcall(e){
 event.preventDefault()
 window.location.href="signup.html"
 }

  document.querySelector("#explore").addEventListener("click",explore)
  function explore(e){
    e.preventDefault()
    window.location.href="explorefeatures.html"
    
  }


  document.querySelector("#enterprise").addEventListener("click",enterprise)
  function enterprise(event){
    event.preventDefault()
   window.location.href="enterprise.html"
  }

document.querySelector("#Me").addEventListener("click",Me)
function Me(event){
    event.preventDefault()
    window.location.href="navbar.html"
}