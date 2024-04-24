let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));

if (nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10 ||
    nota4 < 0 || nota4 > 10) {
    alert("Digite somente notas entre 0 e 10.");
    
    }
    else
    {
    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

    if (media >= 6 && media <= 10)
    {
        alert("Você ficou com média: " + media + ". Resultado: Aprovado(a)");
    }

    else if (media >= 5 && media < 6)
    {
        alert("Você ficou com média: " + media + ". Resultado: Em recuperação");
    }

    else if (media >= 0 && media < 5)
    {
        alert("Você ficou com média: " + media + ". Resultado: Reprovado(a)");
    }
}