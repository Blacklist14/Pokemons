'use strict';
//A API ORDENA OS POKEMONS PELO OFFSET,E VAI INDO DE 0 A SEI LA QNTS.
//ENTÃO FIZ UMA VARIAVEL QUE FICARA NA OFFSET QUE IRA INCREMENTA +1 QND CLICADO NO NEXT
var next_page = 0

const api_chamada = async() =>{
    const api = `https://pokeapi.co/api/v2/pokemon?offset=${next_page}}&limit=20`
    const requi = await fetch(api)
    const jsoaun = await requi.json()

    document.querySelector("#poke_number").innerHTML = `numeros de pokemons: ${jsoaun.count}`
// A VARIAVEL CAIXA E PARA COLOCAR NOS P CERTOS OS POKEMONS.
    var caixa_main = 0
//COMO QUERIA APENAS 20 POKEMONS, CRIEI 20 TAGS P E FIZ UM WHILE PARA COLOCARR CADA POKEMON
//ACHEI MAIS SIMPLES E MENOS VERBOSO NO JS
    while(caixa_main < 20){
        caixa_main++
        document.querySelector(`#poke${caixa_main}`).innerHTML = `${jsoaun.results[caixa_main].name}`
    }
} 
api_chamada()

//FAZ O BUTTON NEXT PULAR OS POKEMONS
document.querySelector("#next_pokemons").addEventListener("click",()=>{
    next_page = next_page + 20
    api_chamada()
})
//FAZ O BUTTON RETURN RETORNA OS POKEMONS
document.querySelector("#return_pokemons").addEventListener("click",()=>{
    next_page = next_page - 20
    if(next_page < 0){
        next_page = 0
    }
    api_chamada()
})
