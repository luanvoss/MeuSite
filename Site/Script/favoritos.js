const listaFavoritos = document.getElementById("lista-favoritos");
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
if (favoritos.length === 0) {

    listaFavoritos.innerHTML = `
        <p>Você ainda não possui produtos favoritos.</p>
    `;
} else {
    favoritos.forEach(produto => {

        const card = document.createElement("div");
        card.classList.add("card-favorito");

        card.innerHTML = `
            <h2>${produto.nome}</h2>
            <button onclick="removerFavorito(${produto.id})">
                Remover dos favoritos
            </button>
            <hr>
            <button class="btn-comprar">
              Comprar
            </button>
        `;
        listaFavoritos.appendChild(card);
    });
}
function removerFavorito(id) {
    favoritos = favoritos.filter(
        produto => produto.id !== id
    );
    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );
    location.reload();
}