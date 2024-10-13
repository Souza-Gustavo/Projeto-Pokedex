/*
  Objetivo - quando clicar no pokedex da listagem temos que esconder o cartao pokedex aberto e mostrar o cartao correspondente ao que foi selecionado na listagem.

  Passo 1 - precisamos criar uma variavel no JS para trabalhar com a listagem de pokedex.
  Passo 2 - Identificar o evento de clique no elemento da listagem.
  Passo 3 - Remover a classe aberto só do cartao que ta aberto.
  Passo 4 - ao clicar em um pokedex da listagem pegamos o id desse pokedex pra saber qual carao abrir.
  Passo 5 - Remover a classe ativo que marca o pokedex selecionado na listagem.
  Passo 6 - Adicionar a classe ativo no pokedex seleionado na listagem.

  */


const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");


listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokedevNaListagem();

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
