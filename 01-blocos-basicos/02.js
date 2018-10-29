// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(unformatted) {
    let clearRg = unformatted.replace(/\D/g, "");
    let rg = `${clearRg.substr(0, 2)}.${clearRg.substr(2, 3)}.${clearRg.substr(5, 3)}-${clearRg.substr(8, 1)}`; 
    return rg;
}

console.log(formatRG(("293 93 233  232")));