var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  document.addEventListener("keydown", dibujarTeclado);
  var cuadrito = document.getElementById("area_de_dibujo");
  var color = document.getElementById("color_lineas");
  var borrar = document.getElementById("borrador");
  var papel = cuadrito.getContext("2d");
  var x = 150;
  var y = 150;

  borrar.addEventListener("click", borrarDibujo);
  
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
  
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 20;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

  
  function dibujarTeclado(evento)
  {
    var colorcito = color.value;
    var movimiento = 5;
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }
  function borrarDibujo()
  {
      papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
  }