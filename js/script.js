
window.onload = function(){
    var divColor = document.querySelector("#divColor");
    var titulo = document.querySelector("#titulo");
    var ranges = document.querySelectorAll("input[type=range]");
    var body = document.querySelector("body");
    var valores = {red:0,green:0,blue:0};
    var valor1 = 15;
    var valor2 = 50;

    function retornarCorInversa(nome){
        return ((255-valores[nome])>200?200:(255-valores[nome]));
    }

    for(var range of ranges){
        range.addEventListener("input",function(ev){
            var elem = ev.target;
            valores[elem.name] = elem.value;
            var inputText = elem.parentElement.parentElement.parentElement.querySelector("#text"+elem.name);
            inputText.value = elem.value;
            divColor.style.backgroundColor = 'rgb('+valores['red']+','+valores['green']+','+valores['blue']+')';
            titulo.style.color = 'rgb('+retornarCorInversa('red')+','
            +retornarCorInversa('green')+','
            +retornarCorInversa('blue')+')';
            body.style.background = 'radial-gradient(circle, '+'rgb('
            +(valores['red'])+','
            +(valores['green'])+','
            +(valores['blue'])+')'
            +' 0%, '+'rgb('
            +(valores['red']>valor1?valores['red']-valor1:valores['red'])+','
            +(valores['green']>valor1?valores['green']-valor1:valores['green'])+','
            +(valores['blue']>valor1?valores['blue']-valor1:valores['blue'])+')'
            +' 50%, '+'rgb('
            +(valores['red']>valor2?valores['red']-valor2:valores['red'])+','
            +(valores['green']>valor2?valores['green']-valor2:valores['green'])+','
            +(valores['blue']>valor2?valores['blue']-valor2:valores['blue'])+')'
            +' 100%)';

            console.log('radial-gradient(circle, '+'rgb('
            +(valores['red'])+','
            +(valores['green'])+','
            +(valores['blue'])+')'
            +' 0%, '+'rgb('
            +(valores['red']>valor1?valores['red']-valor1:valores['red'])+','
            +(valores['green']>valor1?valores['green']-valor1:valores['green'])+','
            +(valores['blue']>valor1?valores['blue']-valor1:valores['blue'])+')'
            +' 35%, '+'rgb('
            +(valores['red']>valor2?valores['red']-valor2:valores['red'])+','
            +(valores['green']>valor2?valores['green']-valor2:valores['green'])+','
            +(valores['blue']>valor2?valores['blue']-valor2:valores['blue'])+')'
            +' 100%)');
            
        });
    }
}
