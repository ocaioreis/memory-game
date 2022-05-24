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


//Depois de muito custo, aqui consigo embaralhar as cartas ao recarregar a página
document.querySelectorAll(".cartas").forEach(function(element, index){
    element.addEventListener("click", function(event){
      this.classList.remove("cartas");
      this.classList.add("virado");
      document.createElement("img");
      this.innerHTML =  `<img src="${cards[Math.floor(Math.random() * cards.length)]}"img>`; //Graças a essa linha em específico, dá pra inserir as imagens aleatórias
      
      
      console.log(this.innerHTML);
      
    });
  });
cardboard.addEventListener("click", match());
//Tentativa de validar as cartas iguais, ainda em desenvolvimento
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