function BuscarGit(){

  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/gutoffline",
    success: (function(dados){
        let nome = dados.name
        let twiter = dados.twitter_username
        let nacionalidade = dados.location
        document.getElementById("informacoes").innerHTML = `nome : ${nome} <br> twitter : ${twiter} <br> nacionalidade : ${nacionalidade}`
    })
})
}
document.getElementById("pesquisar").addEventListener("click", function(){
  BuscarGit()
})