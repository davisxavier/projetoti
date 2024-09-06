function pesquisar(){
//console.log(dados);
//console.log(dados [0].descricao);//
let section = document.getElementById("resultados-pesquisa");
let campoPesquisa = document.getElementById("campo-pesquisa").value


if (campoPesquisa == "") {
    section.innerHTML= "<p>Nada foi encontrado<p> "
    return
} 

campoPesquisa = campoPesquisa.toLowerCase()
    
//console.log(dado.titulo.includes(campoPesquisa))
//console.log(campoPesquisa);
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
            <p class="link"><a href="${dado.link}" target="_blank"></a></p>               
        </div>`}
    //    <div class="item-resultado">
    //        <h2>História da Internet</h2>
    //        <p class="descricao-meta">Este vídeo eu assiti enquanto buscava aprimoramento além do meu curso de tecnologia da informação, achei super interessante e por o responsável pedir sempre que divulgue seus serviços, achei legal colocar este iframe em meu site.</p>
    //        <p class="link"><a href="https://davisxavier.github.io/projetoti/histinter.html" target="_blank">História da internet</a></p>
    //    </div>
    //    <div class="item-resultado">
    //        <h2>Loja de Semijoias</h2>
    //        <p class="link">Brilhe Todos os Dias com Nossas Semijoias Exclusivas!</p>
    
    //        <p class="descricao-meta">    Descubra a coleção que vai transformar o seu look! Nossas semijoias combinam elegância, qualidade e preços acessíveis, perfeitas para todas as ocasiões.</p>
    //        <p class="link"><a href="https://davisxavier.github.io/projetoti/fotos.html" target="_blank" rel="noopener noreferrer">Loja de Jóias (consignados)</a></p>
    //    </div>
    //    <div class="item-resultado">
    //        <h2>Arthur <br>
    //            📸 Amante da Fotografia</h2>
    //        <p class="descricao-meta">🌲 Escoteiro desde 08/22 | Cordão Verde e Amarelo 06/24 <br>
    //
    //            🌟 Explorando o mundo através da lente e da vida escoteira!</p>
    //        <p class="link"><a href="https://davisxavier.github.io/projetoti/arthur.html" target="_blank" rel="noopener noreferrer">Página sobre fotografia</a></p>                
    //    </div>
    //    <div class="item-resultado">
    //        <h2>Mostrador de horário</h2>
    //        <p class="descricao-meta">Conforme o horário do dia ele deve mudar a imagem como exibido nas opções abaixo. <br>
    //
    //            Nas opções abaixo, aplico outros aprendizados, como um menu criado com listas e efeitos, onde, ao passar o mouse sobre os tópicos no computador, os efeitos devem ser exibidos.</p>
    //<p class="link"><a href="https://davisxavier.github.io/projetoti/mostrador.html" target="_blank"><br>Mostrador <br></a></p>
    //    </div>
    //    <div class="item-resultado">
    //        <h2>Contato</h2>
    //        <p class="descricao-meta">Se você não está familiarizado com o Git, mas gostaria de compartilhar sua opinião, fazer um elogio, ou entrar em contato por qualquer motivo (parceria, encontro, ou apenas testes), clique no link para acessar o meu formulário.</p>
    //        <p class="link"><a href="https://docs.google.com/forms/d/e/1FAIpQLSes2leFtJYoQl27JLNvGJuZ1pTRk1_Ff8iAMpWxWCh6vO7lPA/viewform?usp=sf_link" target="_blank">Formulário</a></p>
    //    </div>
    //`
    //}
    section.innerHTML=resultados
    }
    }

    
    