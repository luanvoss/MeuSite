const produto1 = document.querySelector("#produto1");
console.log(produto1);
const produto2 = document.querySelector("#produto2");
console.log(produto2);
const produto3 = document.querySelector("#produto3");
console.log(produto3)
const btnMensagem = document.querySelector("#btn-mensagem");
const mensagem = document.querySelector("#mensagem");
btnMensagem.addEventListener("click", function() {
    mensagem.textContent = "Obrigado por escolher o Armazém da Água!";
});
console.log(mensagem)
const tema = document.querySelector("#tema");
tema.addEventListener("click", function(){
    document.body.classList.toggle("ativo");
})
console.log(tema)
const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function() {
    menu.classList.toggle("ativo");
});
console.log(menu)
const produto12 = document.querySelector("#produto1");
produto1.addEventListener("mouseenter", function() {
    produto1.classList.add("destaque");
});
produto1.addEventListener("mouseleave", function() {
    produto1.classList.remove("destaque");
});
console.log(produto12);
const produto13 = document.querySelector("#produto2");
produto2.addEventListener("mouseenter", function() {
    produto2.classList.add("destaque");
});
produto2.addEventListener("mouseleave", function() {
    produto2.classList.remove("destaque");
});
console.log(produto13);
const produto14 = document.querySelector("#produto3");
produto3.addEventListener("mouseenter", function() {
    produto3.classList.add("destaque");
});
produto3.addEventListener("mouseleave", function() {
    produto3.classList.remove("destaque");
});
console.log(produto14);
const btnFavoritar1 = document.querySelector("#btn-favoritar-1");
btnFavoritar1.addEventListener("click", function() {
    btnFavoritar1.classList.toggle("ativo");
});
console.log(btnFavoritar1);
const btnFavoritar2 = document.querySelector("#btn-favoritar-2");
btnFavoritar2.addEventListener("click", function() {
    btnFavoritar2.classList.toggle("ativo");
});
console.log(btnFavoritar2);
const btnFavoritar3 = document.querySelector("#btn-favoritar-3");
btnFavoritar3.addEventListener("click", function() {
    btnFavoritar3.classList.toggle("ativo");
});
console.log(btnFavoritar3);
const botoesFavoritar = [
    document.getElementById("btn-favoritar-1"),
    document.getElementById("btn-favoritar-2"),
    document.getElementById("btn-favoritar-3")
];
const produtos = [
    {
        id: 1,
        nome: "Água Sem gás",
    },
    {
        id: 2,
        nome: "Água com gás",
    },
    {
        id: 3,
        nome: "Água saborizada",
    }
];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
botoesFavoritar.forEach((botao, indice) => {
    if (!botao) return;
    const produto = produtos[indice];
    atualizarBotao(botao, produto.id);
    botao.addEventListener("click", function () {
        const jaFavoritado = favoritos.some(
            item => item.id === produto.id
        );
        if (jaFavoritado) {
            favoritos = favoritos.filter(
                item => item.id !== produto.id
            );

        } else {
            favoritos.push(produto);
        }
        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );
        atualizarBotao(botao, produto.id);
    });
});
function atualizarBotao(botao, idProduto) {
    const favoritado = favoritos.some(
        item => item.id === idProduto
    );
    if (favoritado) {
        botao.textContent = "♥ Favoritado";
    } else {
        botao.textContent = "♡ Favoritar";
    }
}
