script

function corrigir() {
    document.querySelector(".hide").style.display = "block";
    let camText = document.getElementById("texto").value;
    document.getElementById("nome").innerHTML = "Nome: " + camText;
    let camSel = document.getElementById("selecao").value;
    document.getElementById("turma").innerHTML = "Turma: " + camSel;
    let camTextArea = document.getElementById("texto2").value;
    document.getElementById("questao1").innerHTML = "Questão 1 R: " + camTextArea;
  
    let camCheckOct = document.getElementById("check1");
    let camCheckBin = document.getElementById("check2");
    let camCheckDec = document.getElementById("check3");
    let camCheckHex = document.getElementById("check4");
  
    if (camCheckOct.checked) {
      document.getElementById("questao2.1").innerHTML = "Questão 2 R: Octal";
    }
    if (camCheckBin.checked) {
      document.getElementById("questao2.2").innerHTML = "Questão 2 R: Binário";
    }
    if (camCheckDec.checked) {
      document.getElementById("questao2.3").innerHTML = "Questão 2 R: Decimal";
    }
    if (camCheckHex.checked) {
      document.getElementById("questao2.4").innerHTML = "Questão 2 R: Hexadecimal";
    }
  
    if (document.getElementById("iso").checked) {
      document.getElementById("questao3").innerHTML = "Questão 3 R: Álcool Isopropílico";
    } else if (document.getElementById("con").checked) {
      document.getElementById("questao3").innerHTML = "Questão 3 R: Limpa Contato";
    } else if (document.getElementById("alc").checked) {
      document.getElementById("questao 3").innerHTML = "Questão 3 R: Álcool 70%";
    } else if (document.getElementById("agu").checked) {
      document.getElementById("questao3").innerHTML = "Questã o3 R: Água";
    }
    if (document.getElementById("ver").checked) {
      document.getElementById("questao4").innerHTML = "Questão4 R: Verdadeira";
    } else if (document.getElementById("fal").checked) {
      document.getElementById("questao4").innerHTML = "Questão 4 R: Falsa";
    }
  }

