function pesquisar(){
let section = document.getElementById("resultados-pesquisa");
let campoPesquisa = document.getElementById("campo-pesquisa").value
if (campoPesquisa == "") {
    section.innerHTML= "<p>Nada foi encontrado<p> "
    return
} 
campoPesquisa = campoPesquisa.toLowerCase()
let  resultados = "";
let titulo = "";
let descricao = "";
let link = "";
//para cada dado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    link = dado.link.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="link"><a href="${dado.link}" target="_blank">${dado.linkn}</a></p>               
        </div>`}
    section.innerHTML=resultados
    }
    }

    
    