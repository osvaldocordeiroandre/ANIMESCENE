for (i of document.querySelectorAll('[search]')) {
    try {
        busca(i, document.querySelector("#" + i.getAttribute('search')))
    } catch (e) { }
}

function busca(input_field, div) {
    input_field.onkeyup = function (e) {
        for (di of div.children) {
            r = new RegExp(this.value.toLowerCase(), "g")
            if (di.getAttribute("nome").toLowerCase().match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}

var redirectTime = 3600000;

setTimeout(function(){
    window.location.href = 'index.html';
}, redirectTime);

var startTime = new Date();

setInterval(function(){
   var currentTime = new Date();
   var timePassed = currentTime - startTime;
   if (timePassed >= 360000 ) {
      window.location.href = 'index.html';
   }
}, 1000);


function buttonUpper(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function definirBotao(){
    if (window.scrollY === 0){
        document.querySelector('.button-upper').style.display = 'none';
    } else {
        document.querySelector('.button-upper').style.display = 'block';
    }
}

window.addEventListener('scroll', definirBotao);