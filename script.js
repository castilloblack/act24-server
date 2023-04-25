    function mayorNum() {
    var numero01 = parseInt (document.getElementById("numero01").value);
    var numero02 = parseInt (document.getElementById("numero02").value);
   if(numero01>=numero02){
        document.write("el numero mayor es:" +numero01 + "(numero01)");
  }
  else{
    document.write("el numero mayor es :" +numero02 + "(numero02)");
  }
}