/*console.log("Olá Mundo") //acessa o console do navegador . da uma mensagem

FORMAS DE CRIAR UMA PALAVRA

palavra reservada para criar variaveis.Pode mudar o valor a qualquer momento
let numero = 10
let num = 20

console.log(num)
console.log(numero)
console.log(num + numero)

cria uma variavel que não tem alteração no futuro 
const constante = 50*/

// SELECIONANDO A LISTA (UL) DO HTML
//                 acessando documento   selecione um elemento com essa class   
const listaFilme = document.querySelector (".ListaFilmes")

// DECLARANDO FUNÇÃO QUE VAI LISTAR OS FILMES
function listarFilmes(colecaoFilmes){

    // LIMPAR VITRINE HTML
    listaFilme.innerHTML = ""
    //1 ACESSAR OS FILMES
    //2 LOOP PARA ENCONTRAR OS FILMES
    //3 MONTAR UM TEMPLATE(LI)
    //4 MOSTRA NA TELA

    // ACESSANDO A COLEÇÃO DE FILMES (ARRAY) -> PASSANDO PARA FUNÇÃO TEMPLATE 
    colecaoFilmes.forEach(function(filmes){ // vai pegando um por um 
        
        //PASSANDO CADA UM DOS FILMES => CRIAR O TEMPLATE PARA CADA FILME
        const template = criarTemplate(filmes)
        
        //ADICIONANDO O FILME DE UMA FORMA VISUAL NO HTML
        listaFilme.appendChild(template)

    })
}

//CHAMANDO PARA EXECULTAR OS PASSOS 
listarFilmes(filmes)

// FUNÇÃO QUE CRIA UM TEMPLATE (LI)
function criarTemplate(filmes){
    //1 - FILME
        //NOMEs
        //IMAGEM
    //2 - CRIAR UM LI
    //3 - RETORNAR ESSE TEMPLATE COM O FILME*/
    // filmes.nome
    //filmes.url

    //  CRIANDO UM TEMPLATE DE TIPO HTML
    const li = document.createElement("li")

    //ADICIONANDO UMA ESTRUTURA HTML PARA DENTRO DO (LI)
    // vai acessar as propriedades desse li
    li.innerHTML  = ` 
        <figure>
            <img src="${filmes.url}" alt="${filmes.nome}"/>
        </figure>
        <h2>${filmes.nome}</h2>
    `
    return li      
}

// FILTRAR FILME POR CATEGORIA 
function filtrarFilmes(filtroCategoria){

    // LOOP PARA FILTRAR OS FILMES 
    const filmesFiltrados = filmes.filter(function(filmes){

        // SE A CATEGORIA BUSCADA FOR === A DO FILME ATUAL MOSTRE O FILME / OU RETORNE O FILME 
        if(filtroCategoria == filmes.categoria){
        // SE FOR VERDADE RETORNE O FILME 
        return filmes 
        }

    })

    listarFilmes(filmesFiltrados)
}

//SELECIONALDO MENU
const secaoCategorias = document.querySelector(".secaoCategorias")

// ADICIONANDO UM INTERCEPTADOR DE EVENTO 
secaoCategorias.addEventListener("click",function(event){

    //CANCELAR EVENTO DO LINK => NÃO RECARREGAR A TELA
    event.preventDefault()
    
    //ONDE FOI CLICADO
    const categoriaSelecionada = event.target.text
    
    //VERIFICANDO PARA MOSTRAR TOFDAS
    if(categoriaSelecionada == "Mostrar todos"){
    
        listarFilmes(filmes)
    }else{

        filtrarFilmes(categoriaSelecionada)
    }

})