/* 
    o que precisamos fazer ? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro.

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a class modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem da lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pagar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe pra mudar pro modo-claro e mudar a imagem pra sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/


const botaoMudarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoMudarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    // o toggle vai altenar entre as opções ou seja, ele vai fazer o mesmo que o add. ou remove. pois como os dois estão fazendo a mesma coisa nesse codigo, podemos substituir pelo toggle.

    if (modoEscuroEstaAtivo) {
        //  body.classList.remove("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
    } else {
        //  body.classList.add("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
    }
})