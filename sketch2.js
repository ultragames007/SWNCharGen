function setMaxCopies(){
    maxcopias = inputBox.value() ;
    //print("Valor de Copias =",maxcopias);
    comenzar();
    }

function comenzar(){
    for (i=0; i<maxcopias;i++) // Bucle Principal
	{
        document.write("------------------"+copia+"----------------- \n");       
        linebreak(1);
	   //////////////////////////////STATS////////////////////////////////////
	   statroll();
	   str=diceRoll; //STR
	   statroll(); //INT
	   inte=diceRoll;
	   statroll(); //DEX
	   dex=diceRoll;
	   statroll(); //WIS
	   wis=diceRoll;
	   statroll(); //CON
	   con=diceRoll;
	   statroll(); //CHA
	   cha=diceRoll;	
        
       clase(); // Elije la clase basado en los atributos
	   swapto14(); // Cambia el atributo mas bajo de la clase a 14
	   // Imprimimos los atributos listos ya
	   document.write("STR: "+str+" ");
       document.write("INT: "+inte+" ");
        linebreak(1);
	   document.write("DEX: "+dex+" ");
	   document.write("WIS: "+wis+" ");
        linebreak(1);
	   document.write("CON: "+con+" ");
	   document.write("CHA: "+cha+" ");
        linebreak(1);
       characterhp(); // Genera la hp dependiendo de la clase
        document.write("HOMEWORLD: ? \n");
        linebreak(1);
        salvaciones(); //Printea la salvaciones dependiendo de la clase
        subclase(); // Para psiquicos y poderes de clase
        backgroundpack(); //El pack de background
        trainingpack(); // El pack varia segun la clase TRAINING
        startinggearkit(); // Te da el gear de Duamn
        readskills(); //Imprime al final q skills tenes
        resetskill();
	   copia++;
        }
}

function linebreak(espacio){ 
    for (let i=0;i<espacio;i++)
        {
          document.body.appendChild(document.createElement("BR")); // ESPACIO
        }
}

function agregaraHTML(){
    document.body.appendChild(t);
}


