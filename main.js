console.log("el documento está listo!!! :D")

function(){
  var Form = $('#progressive-validation');
  Form.on('keyup',function(){
    $('input:valid ~ input').attr('disabled',false);
    $('input:invalid ~ input').attr('disabled',true);
    alert("hola");
  }



// function suma_dos_numeros() {
//   resultado = num1 + num2;
//   alert("El resultado es: " + resultado);
// }

// var resultado;

// var num1 = 20;
// var num2 = 25;

// suma_dos_numeros();
