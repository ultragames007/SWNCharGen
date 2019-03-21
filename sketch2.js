function setMaxCopies(){
    maxcopias = inputBox.value() ;
    print("Valor de Copias =",maxcopias);
    comenzar();
}

function comenzar(){
    for (i=0; i<maxcopias;i++) // Bucle Principal
	{
        print("------------------%d----------------- \n",copia);
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
	   print("STR: %d  ",str);
        print("INT: %d \n",inte);
	   print("DEX: %d  ",dex);
	   print("WIS: %d \n",wis);
	   print("CON: %d  ",con);
	   print("CHA: %d \n",cha);
       characterhp(); // Genera la hp dependiendo de la clase
        print("HOMEWORLD: ? \n");
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