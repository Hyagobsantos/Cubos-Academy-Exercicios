function solucao(texto) {
    // Seu codigo aqui
    
    console.log(texto.trim().split(" ").filter(x => x != "").length);
}

texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer"
solucao(texto)
