function insert(num) {
  // num diz que o que está vindo para a função é um número.
  var elemento = document.getElementById("resultado");
  var texto = elemento.innerHTML;

  var operadores = ["+", "-", "*", "/"]; // verifica se tem algum desses operadores repetidos.
  if (operadores.includes(num)) {
    if (texto === "" || operadores.includes(texto.slice(-1))) {
      // Onde ele pode ser colocado.
      return;
    }
  }

  elemento.innerHTML = texto + num;
}

function delet() {
  var elemento = document.getElementById("resultado");
  // Pega o conteúdo atual
  var texto = elemento.innerHTML;
  // Remove o último caractere
  elemento.innerHTML = texto.slice(0, -1);
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  }
}
