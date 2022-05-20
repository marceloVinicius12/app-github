function BuscarGit(){

  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/gutoffline",
    success: (function(dados){
        let nome = dados.name
        let twiter = dados.twitter_username
        let imagem = dados.avatar_url
        let nacionalidade = dados.location
        document.getElementById("informacoes").innerHTML = `<img src=${imagem} width=250px> <br> nome : ${nome} <br> twitter : ${twiter} <br> nacionalidade : ${nacionalidade}`
    })
})
}
document.getElementById("pesquisar").addEventListener("click", function(){
  BuscarGit()
})