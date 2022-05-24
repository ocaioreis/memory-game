const cards = [
    
     'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
     
     'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif'
]
cards.sort()
const cardboard = document.querySelector("#d1")

let selectedCards = [];
const pontuacao = document.querySelector("#pontuacao");
let pontos = 0;
var divs = document.querySelectorAll('.cartas');





document.querySelectorAll(".cartas").forEach(function(element, index){
    element.addEventListener("click", function(event){
      this.classList.remove("cartas");
      this.classList.add("virado");
      document.createElement("img");
      this.innerHTML =  `<img src="${cards[Math.floor(Math.random() * cards.length)]}"img>`;
      /* this.innerHTML = cards[Math.floor(Math.random() * cards.length)]; */
      
      console.log(this.innerHTML);
      
    });
  });
cardboard.addEventListener("click", match());

    function match(){
        let viradas = document.querySelectorAll('.virado');
        viradas.length == 2;
        
        

            let carta1 = viradas[0];
            let carta2 = viradas[1];
            if (carta1.className === carta2.className){
            carta1.innerHTML = `<img src=https://img.pokemondb.net/sprites/silver/normal/xatu.png"img>`;
            carta2.innerHTML = `<img src=https://img.pokemondb.net/sprites/silver/normal/xatu.png"img>`;
            carta1.removeEventListener("click", match);
            carta2.removeEventListener("click", match);}
            console.log(match);

            
        
    }  
  
    
    
    
  


    /* $("button").click(function() {
        var fired_button = $(this).val();
        alert(fired_button);
    }); */



/* var divs = document.querySelectorAll('.cartas');
function vira(){
Array.prototype.forEach.call(divs, function(elemento) {
       elemento.classList.add('virado');
       Array.prototype.forEach.call(divs, function(elemento) {
        elemento.classList.remove('cartas');       
})})};

let carta1 = document.querySelector("#c1");

let index = -1;

function viraoo(){
    if (carta1.classList.add("virado")){}}
 */
























//função ff é pra virar as cartas só com a parte de trás de maluco

/* function ff() 
{ index ++
     if (cartasUnit[index].classList.contains("cartas")){
        return cartasUnit[index].classList.add("virado")}; 
    
     
      //nesse for ele funciona com todos de uma vez  
     /* for ([index = 0];[cartasUnit[index].classList.contains("cartas")];[cartasUnit[index].classList.add("virado"),index ++]); */ 
/* }
function brasil(a,b){
    const resultado = a+b
    return resultado;
}
 */






/* let backwards;
backwards = document.createElement("img")
backwards.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLP1y592fRQ4QQ0Km9nNYXNaWK4nZwuXWpAg&usqp=CAU" */



/* function embaralhar(){
    let carta1 = Object.assign(cards[0]);
    let carta2 = Object.assign(cards[1]);
    let carta3 = Object.assign(cards[2]);
    let carta4 = Object.assign(cards[3]);
    let carta5 = Object.assign(cards[4]);
    let carta6 = Object.assign(cards[5]);
    let carta7 = Object.assign(cards[6]);
    let carta8 = Object.assign(cards[7]);
    let carta9 = Object.assign(cards[8]);
    let carta10 = Object.assign(cards[9]);
    
} */