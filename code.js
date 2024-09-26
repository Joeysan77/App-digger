var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
  } else {
    document.getElementById("header").style.top = "-53px";
  }
  prevScrollpos = currentScrollPos;
}

function bod() {
      heade = document.getElementById("header")
      bodyy = document.getElementById("bodyy")
      body = document.getElementById("body")
      blk = document.getElementById("dark")
    if (heade.style.top == "0px") {
        bodyy.style.paddingTop = "120px"
    }
    else {
        bodyy.style.paddingTop = "80px"
    }
    if (blk.style.display == "block") {
        body.style.overflowY = "hidden"
    }
    else {
        body.style.overflowY = ""
    }
}

function bogg() {
    setInterval(bod , 1)
}
setTimeout(bogg , 1000)
function dak() {
    dark = document.getElementById("dark")
    dark.style.display = "block"
    
    function dark6() {
        dark.style.backdropFilter = "blur(9px)"
    dark.style.background = "rgba(0,0,0,0.8)"
    }
    setTimeout(dark6 , 10)
    
}
function darke() {
    dark = document.getElementById("dark")
            dark.style.backdropFilter = "blur(0px)"
    dark.style.background = "transparent"
   
    function darked() {
dark.style.display = "none"
    }
    setTimeout(darked , 500)
    
}
function seach() {
    document.getElementById("sead").style.display = "block"
    function se() {
        document.getElementById("sead").style.opacity = "1"
    }
    setTimeout(se , 0)
}
 
function seach1() {
    document.getElementById("sead").style.opacity = "0"
    function se1() {
        document.getElementById("sead").style.display = "none"
    }
    setTimeout(se1 , 500)
}
function sig() {
    document.getElementById("sign").style.display = "block"
    function si() {
        document.getElementById("sign").style.opacity = "1"
    }
    setTimeout(si , 1)
}
function sig1() {
    
    document.getElementById("sign").style.opacity = "0"
    function si1() {
        document.getElementById("sign").style.display = "none"
    }
    setTimeout(si1 , 500)
}

function work() {
    ema = document.getElementById("email")
    pas = document.getElementById("pass")
    em = document.getElementById("env")
    pa = document.getElementById("pas")
    if (pas.value.length <= 7) {
        pas.style.borderColor = "#c73a31"
        pa.style.color =  "#c73a31"
    }
    if (ema.value == "") {
        ema.style.borderColor = "#c73a31"
        em.style.color =  "#c73a31"
    }
}
function emai() {
    ema = document.getElementById("email")
    em = document.getElementById("env")
    ema.style.borderColor = "grey"
    em.style.color =  "white"
}
function pass() {
    pas = document.getElementById("pass")
    pa = document.getElementById("pas")
    pas.style.borderColor = "grey"
    pa.style.color =  "white"
}
function pss() {
    pas = document.getElementById("pass")
    pa = document.getElementById("pas")
}
function menu() {
   men = document.getElementById("menu")
   men.style.display = "block"
   function mi() {
       men.style.left = "0"
       men.style.opacity = "1"
   }
   setTimeout(mi , 0)
}
function menu1() {
    men = document.getElementById("menu")
    men.style.opacity = "0"
    
    function mm() {
        men.style.left = "-100%"
        
        function nn() {
            men.style.display = "none"
        }
        setTimeout(nn , 400)
    }
        setTimeout(mm , 100)
}
function darkmode() {
    che = document.getElementById("cheb")
    if(che.checked == true) {
        document.getElementById("header").style.background = "#272727"
        document.getElementById("body").style.background = "black"
        document.getElementById("f1").style.color = "white"
        document.getElementById("f2").style.color = "white"
        document.getElementById("b2").style.color = "white"
        document.getElementById("b1").style.color = "white"
        document.getElementById("b3").style.color = "white"
        document.getElementById("b4").style.color = "white"
        document.getElementById("b1").style.background = "#5b6268"
  document.getElementById("b2").style.backgroundColor = "#5b6268"
  document.getElementById("b3").style.backgroundColor = "#5b6268"
  document.getElementById("b4").style.backgroundColor = "#5b6268"
    }
    else {
        document.getElementById("header").style.background = "#f3f3f3"
        document.getElementById("body").style.background = "white"
        document.getElementById("f1").style.color = "black"
        document.getElementById("f2").style.color = "black"
        document.getElementById("b2").style.color = "black"
        document.getElementById("b1").style.color = "black"
        document.getElementById("b3").style.color = "black"
        document.getElementById("b4").style.color = "black"
        document.getElementById("b1").style.background = "#e3eaf0"
  document.getElementById("b2").style.backgroundColor = "#e3eaf0"
  document.getElementById("b3").style.backgroundColor = "#e3eaf0"
  document.getElementById("b4").style.backgroundColor = "#e3eaf0"
    }
}
function sett() {
    set = document.getElementById("settings")
    daj = document.getElementById("darkk")
    set.style.display = "block"
    daj.style.display = "block"
        document.getElementById("menu").style.overflow = "hidden"
    function sett1() {
        set.style.opacity = "1"
        daj.style.background = "rgba(0,0,0,.2)"
        
    }
    setTimeout(sett1 , 1)
}
function segg() {
    set = document.getElementById("settings")
    daj = document.getElementById("darkk")
        document.getElementById("menu").style.overflow = ""
    set.style.opacity = "0"
    daj.style.background = "transparent"
    function segg1() {
        set.style.display = "none"
        daj.style.display = "none"
        
    }
    setTimeout(segg1 , 500)
}
function signup() {
    sigg = document.getElementById("signp1").innerHTML = "sign in to " + "today"
    document.getElementById("simg").src = "b_logo.png"
}