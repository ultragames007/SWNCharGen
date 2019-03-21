let h1;
let inputBox;
let boton;
let titulo;
let intro;

let i;
let diceRoll;
let hp;
let copia=1;
let maxcopias;
let rol1,rol2,rol3;
let str,dex,wis,con,inte,cha;
let beststr,bestdex,bestwis,bestcon,bestinte,bestcha;
let claseelegida;   //1= psiquico 2=experto 3=guerrero
// Parte de skills
let artist=-1,athletics=-1,bureaucracy=-1,business=-1,comenergy=-1,comgunnery=-1,comprimitiv=-1,comproject=-1,compsitech=-1,comunarmed=-1,computer=-1,culalien=-1,culcriminal=-1,culspacer=-1,cultraveler=-1,culworld=-1,exosuit=-1;
let gambling=-1,history=-1,instructor=-1,language=-1,leadership=-1,navigation=-1,perception=-1,persuade=-1,profession=-1,religion=-1,science=-1,security=-1,stealth=-1,survival=-1,tactics=-1,techastro=-1,techmaltech=-1,techmedical=-1;
let techpostech=-1,techpretech=-1,techpsitech=-1,vehicleair=-1,vehiclegrav=-1,vehicleland=-1,vehiclespace=-1,vehiclewater=-1,steward=-1;
let anyskill=0,proffessionany=0,techany=0,combatany=0,culany=0,any2but=0,vehicleany=0;
let backgroundpackforce=0,unlucky=0;


function setup() {
  //h1 = createElement("h1", "Texto creado x mi desde Sketch."); // CON ESTE ELEMNTO PODEMOS CREAR cualquiera de html. muy util.
 // h1= select("#unicorn");
    titulo = createElement("h1","Stars Without Number Character Generator v1");
    intro = createElement("p","Enter the number of character you would like to create:");
    inputBox = createInput("50");
    boton = createButton("Generate");
    boton.mousePressed(setMaxCopies);
}



function rolldado(caras){
//	int caras;
		diceRoll = floor(random(1,caras+1));
	//	printf("%d ,",diceRoll);

	return 0;
}
function statroll(){
	rolldado(6);
	rol1=diceRoll;
	rolldado(6);
	rol2=diceRoll;
	rolldado(6);
	rol3=diceRoll;
	diceRoll = rol1+rol2+rol3;
	return 0;
}

function clase(){
	let a=[];
	let greatest;
	let b;
	//Guardar los 6 atributos en un array
    a[1]=str;
    a[2]=dex;
    a[3]=con;
    a[4]=inte;
    a[5]=cha;
    a[0]=wis;
    //Assume that a[0] is greatest
    greatest = a[0];
    for (b = 0; b < 6; b++)
	{
		if (a[b] > greatest) 
		{
		greatest = a[b];
   	 	}
    }
 //   printf("Greatest of six numbers is %d \n", greatest);  // Debug para ver el mayor numero
 //	 printf("Greatest attribute/s is/are: ");
    if(a[1]==greatest)   // Esta parte imprime el atributo mas grande :/
    {
    //	printf("STR ");
    	beststr=1;
	} else {beststr=0;}
	if(a[2]==greatest)
    {
    //	printf("DEX ");
    	bestdex=1;
	} else {bestdex=0;}
	 if(a[3]==greatest)
    {
    //	printf("CON ");
    	bestcon=1;
	} else {bestcon=0;}
	if(a[4]==greatest)
    {
    //	printf("INT ");
    	bestinte=1;
	} else {bestinte=0;}
	if(a[5]==greatest)
    {
    //	printf("CHA ");
    	bestcha=1;
	} else {bestcha=0;}
	if(a[0]==greatest)
    {
    //	printf("WIS ");
    	bestwis=1;
	} else {bestwis=0;}
	print(" \n");
//	printf("STR=%d DEX=%d CON=%d WIS=%d INT=%d CHA=%d \n",beststr,bestdex,bestcon,bestwis,bestinte,bestcha); // DEBUUUUUUUG

	/////// LA PARTE DONDE TE ELIJE UNA CLASE ///////
	if (bestwis==1||bestcon==1)
	{
	print("Clase: Psiquico \n");
	claseelegida=1;
	}
	else
		{	
		if (bestinte==1||bestcha==1)
			{print("Clase: Experto \n");
			claseelegida=2;
			}
		else
			{
			if (beststr==1||bestdex==1)
				{print("Clase: Guerrero \n");
				claseelegida=3;
				}	
			}
		}
    return 0;
  }
  
function swapto14(){
	if(claseelegida==1) //Psiquico
	{
		if(bestwis==1&&bestcon==1&&wis>=14){
//			printf("**Perfect Class Stats**\n");	//DEBUGGGGG				
		}
		else{		
			if(bestwis==1){
			con=14;
		}
		else{
			wis=14;
		}
	}
}
	if(claseelegida==2) //Experto
	{
		if(bestinte==1&&bestcha==1&&inte>=14){
//			printf("**Perfect Class Stats**\n");	//DEBUGGGGG			
		}
		else{		
		if(bestinte==1){
			cha=14;
		}
		else{
			inte=14;
		}
	}
}
	if(claseelegida==3) //Guerrero
	{
		if(beststr==1&&bestdex==1&&str>=14){
//			printf("**Perfect Class Stats** \n");	//DEBUGGGGG		
		}
		else{		
		if(beststr==1){
			dex=14;
		}
		else{
			str=14;
		}
	}
}
	return 0;
}

function characterhp(){
	if (claseelegida==1) //Psiquicos 
	{
		rolldado(4); //1d4
		hp=diceRoll;
	}
	if (claseelegida==2) //Experto 
	{
		rolldado(6); //1d6
		hp=diceRoll;
	}
	if (claseelegida==3) //Guerreros
	{
		rolldado(8); //1d8
		hp=diceRoll;
	}
	print("HP: %d \n",hp);
//	printf("%d valor de clase elegida\n",claseelegida); //DEBUUUUUUG
	return 0;
}

function salvaciones(){
	print("Salvaciones: ");
	if(claseelegida==1) //Psiquico
	{
		print("AB:0 PHYS:13 MENT:12 EVADE:15 TECH:16 LUCK:14\n");
	}
	if(claseelegida==2) //Experto
	{
		print("AB:0 PHYS:16 MENT:15 EVADE:12 TECH:11 LUCK:14\n");
	}
	if(claseelegida==3) //Guerrero
	{
		print("AB:1 PHYS:12 MENT:15 EVADE:14 TECH:16 LUCK:13\n");
	}
	
	return 0;
}

function subclase(){ //Para elegir Disciplina
	if (claseelegida==1) 
	{
		rolldado(6);
		print("Disciplina: ");
		switch(diceRoll){
			case 1:
				print("Biopsionics \n");
				break;
			case 2:
				print("Metapsiones \n");
				break;
			case 3:
				print("Precognition \n");
				break;
			case 4:
				print("Telekinesis \n");
				break;
			case 5:
				print("Telepathy \n");
				break;
			case 6:
				print("Teleportation \n");
				break;
			default:
				print("ERROR \n");
				break;
		}
	}
	if (claseelegida==2){
		print("Class SKill: Once per in-game hour, you can reroll a failed skill check. \n");
	}
	if (claseelegida==3){
		print("Class SKill: Once per combat, you may negate a successful attack made against you. \n");	
	}
	return 0;
}

function backgroundpack(){
	print("BACKGROUND: ");
		rolldado(24);
		switch(diceRoll){
		case 1:
			print("Adventurer \n");
			culworld++;
			culspacer++;
			anyskill=anyskill+2;
			break;
		case 2:
			print("Armsman \n");
			comprimitiv++;
			comunarmed++;
			culworld++;
			tactics++;
			break;
		case 3:
			print("Astrogators Mate \n");
			culspacer++;
			navigation++;
			science++;
			vehiclespace++;
			break;
		case 4:
			print("Bandit \n");
			comprimitiv++;
			culworld++;
			stealth++;
			survival++;
			break;
		case 5:
			print("Biotech Crew \n");
			culspacer++;
			science++;
			techastro++;
			techmedical++;
			backgroundpackforce=1;
			break;
		case 6:
			print("Comm Crew \n");
			computer++;
			culspacer++;
			persuade++;
			techpostech++;
			break;
		case 7:
			print("Con Artist \n");
			culcriminal++;
			culworld++;
			persuade++;
			stealth++;
			break;
		case 8:
			print("Deck Crew \n");
			athletics++;
			comunarmed++;
			culspacer++;
			gambling++;
			break;
		case 9:
			print("Engine Crew \n");
			culspacer++;
			exosuit++;
			gambling++;
			techpostech++;
			break;
		case 10:
			print("Gunnery Crew \n");
			comgunnery++;
			culspacer++;
			computer++;
			tactics++;
			break;
		case 11:
			print("Hermit \n");
			culworld++;
			perception++;
			survival++;
			stealth++;
			break;
		case 12:
			print("Noble \n");
			comprimitiv++;
			culworld++;
			leadership++;
			persuade++;
			break;
		case 13:
			print("Peasant \n");
			culworld++;
			proffessionany++;
			steward++;
			survival++;
			break;																											
		case 14:
			print("Politician \n");
			culworld++;
			leadership++;
			persuade++;
			steward++;
			break;
		case 15:
			print("Priest \n");
			culworld++;
			leadership++;
			persuade++;
			religion++;
			break;
		case 16:
			print("Researcher \n");
			culworld++;
			perception++;
			science++;
			techany++;
			break;
		case 17:
			print("Scholar \n");
			culworld++;
			history++;
			instructor++;
			science++;
			break;
		case 18:
			print("Security Crew \n");
			combatany++;
			culspacer++;
			security++;
			tactics++;
			break;
		case 19:
			print("Soldier \n");
			comproject++;
			comunarmed++;
			culworld++;
			tactics++;
			break;
		case 20:
			print("Technician \n");
			culworld++;
			exosuit++;
			any2but=any2but+2;
			break;
		case 21:
			print("Transport Specialist \n");
			comgunnery++;
			culworld++;
			navigation++;
			vehicleany++;
			break;
		case 22:
			print("Tribesman \n");
			comprimitiv++;
			comunarmed++;
			culworld++;
			survival++;
			break;
		case 23:
			print("Urchin \n");
			culworld++;
			culcriminal++;
			stealth++;
			survival++;
			break;
		case 24:
			print("Worker \n");
			culworld++;
			proffessionany++;
			vehicleany++;
			anyskill++;
			break;
		default:
			print("ERROR \n");
			break;																																													
		}
		
	return 0;
}

function trainingpack(){
	print("TRAINING PACK: ");
	if (claseelegida==1)
	{
		rolldado(8);  //Psychic
		switch(diceRoll){
		case 1:
			print("Adventuring Psychic \n");
			anyskill++;
			proffessionany++;
			break;
		case 2:
			print("Academy Graduate \n");
			compsitech++;
			persuade++;
			techmedical++;
			techpsitech++;
			break;
		case 3:
			print("Criminal Mind \n");
			culcriminal++;
			persuade++;
			security++;
			stealth++;
			break;
		case 4:
			print("Healer \n");
			culany++;
			perception++;
			techpsitech++;
			techmedical++;
			break;
		case 5:
			print("Military Psychic \n");
			combatany++;
			compsitech++;
			stealth++;
			tactics++;
			break;
		case 6:
			print("Psychic Researcher  \n");
			bureaucracy++;
			history++;
			science++;
			techpsitech++;
			break;
		case 7:
			print("Rogue Psychic  \n");
			combatany++;
			culany++;
			persuade++;
			stealth++;
			break;
		case 8:
			print("Tribal Shaman  \n");
			artist++;
			culany++;
			persuade++;
			religion++;
			break;
		default:
			print("ERROR \n");
			break;																																													
		}
	}
	
	if (claseelegida==2) // Experto
	{
	rolldado(8); 
		switch(diceRoll){
		case 1:
			print("Adventuring Expert \n");
			proffessionany=proffessionany+4;
			anyskill=anyskill+2;
			break;
		case 2:
			print("Bounty Hunter  \n");
			combatany++;
			culany++;
			navigation++;
			persuade++;
			stealth++;
			survival++;
			tactics++;
			vehicleany++;
			break;
		case 3:
			print("Criminal   \n");
			business++;
			comprimitiv++;
			culcriminal++;
			gambling++;
			perception++;
			persuade++;
			security++;
			stealth++;
			break;
		case 4:
			print("Explorer  \n");
			athletics++;
			combatany++;
			navigation++;
			perception++;
			persuade++;
			techpostech++;
			vehicleany++;
			break;
		case 5:
			print("Pilot  \n");
			comgunnery++;
			culspacer++;
			exosuit++;
			navigation++;
			techastro++;
			techpostech++;
			vehicleany++;
			vehiclespace++;
			break;
		case 6:
			print("Preceptor Adept  \n");
			bureaucracy++;
			culany++;
			history++;
			persuade++;
			science++;
			techmedical++;
			techpostech++;
			break;
		case 7:
			print("Scientist  \n");
			bureaucracy++;
			culany++;
			perception++;
			science++;
			techpostech++;
			techpretech++;
			techany++;
			vehicleany++;
			break;
		case 8:
			print("Xenoarchaeologist  \n");
			combatany++;
			culany++;
			history++;
			language++;
			perception++;
			science++;
			techany++;
			vehicleany++;
			break;
		default:
			print("ERROR \n");
			break;																																													
		}		
	}
	
	if (claseelegida==3) // Warrior
	{
	rolldado(8); 
		switch(diceRoll){
		case 1:
			print("Adventuring Warrior \n");
			anyskill=anyskill+2;
			proffessionany=proffessionany+2;
			break;
		case 2:
			print("Assassin  \n");
			athletics++;
			combatany++;
			culcriminal++;
			security++;
			stealth++;
			tactics++;
			break;
		case 3:
			print("Commando    \n");
			athletics++;
			culany++;
			combatany++;
			stealth++;
			survival++;
			tactics++;
			break;
		case 4:
			print("Exchange Enforcer   \n");
			business++;
			combatany++;
			culany++;
			persuade++;
			security++;
			tactics++;
			break;
		case 5:
			print("Ground Forces   \n");
			athletics++;
			combatany++;
			comproject++;
			leadership++;
			tactics++;
			vehicleany++;
			break;
		case 6:
			print("Mercenary   \n");
			business++;
			combatany++;
			comproject++;
			culany++;
			perception++;
			tactics++;
			break;
		case 7:
			print("Space Marine   \n");
			comenergy++;
			comprimitiv++;
			culspacer++;
			exosuit++;
			tactics++;
			techastro++;
			break;
		case 8:
			print("Templar   \n");
			combatany++;
			culany++;
			perception++;
			religion++;
			stealth++;
			tactics++;
			break;
		default:
			print("ERROR \n");
			break;																																													
		}		
	}	
	
	return 0;
}

function startinggearkit(){
	print("STARTING PACK: ");
	// Lineas para forzar tener mejores medicos
	if(backgroundpackforce==1) //Biotech Crew
	{
		rolldado(3);
		switch(diceRoll){
			case 1:
				print("Biotech Crew \n");
				print("*Incluye: Vaccsuit, Bioscanner, Backpack (Lazarus Patch, Medkit, Rations 5) \n");
				break;
			case 2:
				print("Biotech Crew \n");
				print("*Incluye: Vaccsuit, Bioscanner, Backpack (Lazarus Patch, Medkit, Rations 5) \n");
				break;
			case 3:
				unlucky=1;
				break;
		}
	}
	if(backgroundpackforce==0||unlucky==1){
	//
	rolldado(6); 
		switch(diceRoll){
		case 1:
			print("Biotech Crew \n");
			print("*Incluye: Vaccsuit, Bioscanner, Backpack (Lazarus Patch, Medkit, Rations 5) \n");
			break;
		case 2:
			print("Engine Crew \n");
			print("*Incluye: Vaccsuit, Toolkit/Postech, Monoblade, Backpack (Glowbugs 2, Powecell Type A 4, Instapanel) \n");
			break;
		case 3:
			print("Comm Crew \n");
			print("*Incluye: Vaccsuit, Dataslab, Translator Torc \n");			
			break;
		case 4:
			print("Gunnery Crew \n");
			print("*Incluye: Vaccsuit, Compad, Binoculars, Grenades 4, Power Cell Type B \n");
			break;
		case 5:
			print("Deck Crew \n");
			print("*Incluye: Vaccsuit, Atmofilter, Metatool, Stun Baton, Backpack (Thermal Flare 4, Lazarus Patch, Power Cell Type A 5) \n");
			break;
		case 6:
			print("Security Crew \n");
			print("*Incluye: Vaccsuit, Shield, Thermal Pistol, Power Cell Type A 5, PortaBox \n");
			break;	
	}											
	}
	return 0;
}

function readskills(){
	print("\n");
	print("SKILLS: "); // Ejemplo de cada skill
	if(artist>=0)
	{print("Artist(%d), ",artist);} //
	if(athletics>=0)
	{print("Athletics(%d), ",athletics);} //
	if(bureaucracy>=0)
	{print("Bureaucracy(%d), ",bureaucracy);} //
	if(business>=0)
	{print("Business(%d), ",business);} //
	if(comenergy>=0)
	{print("Combat/Energy(%d), ",comenergy);} //
	if(comgunnery>=0)
	{print("Combat/Gunnery(%d), ",comgunnery);} //
	if(comprimitiv>=0)
	{print("Combat/Primitive(%d), ",comprimitiv);} //
	if(comproject>=0)
	{print("Combat/Projectile(%d), ",comproject);} //
	if(compsitech>=0)
	{print("Combat/Psitech(%d), ",compsitech);} //
	if(comunarmed>=0)
	{print("Combat/Unarmed(%d), ",comunarmed);} //
	if(computer>=0)
	{print("Computers(%d), ",computer);} //
	if(culalien>=0)
	{print("Culture/Alien(%d), ",culalien);} //
	if(culcriminal>=0)
	{print("Culture/Criminal(%d), ",culcriminal);}//
	if(culspacer>=0)
	{print("Culture/Spacer(%d), ",culspacer);}//
	if(cultraveler>=0)
	{print("Culture/Traveler(%d), ",cultraveler);}//
	if(culworld>=0)
	{print("Culture/World(%d), ",culworld);}//
	if(exosuit>=0)
	{print("Exosuit(%d), ",exosuit);}//
	if(gambling>=0)
	{print("Gambling(%d), ",gambling);}//
	if(history>=0)
	{print("History(%d), ",history);} //
	if(instructor>=0)
	{print("Instructor(%d), ",instructor);} //
	if(language>=0)
	{print("Language(%d), ",language);} //
	if(leadership>=0)
	{print("Leadership(%d), ",leadership);} //
	if(navigation>=0)
	{print("Navigation(%d), ",navigation);} //
	if(perception>=0)
	{print("Perception(%d), ",perception);} //
	if(persuade>=0)
	{print("Persuade(%d), ",persuade);} //
	if(profession>=0)
	{print("Profession(%d), ",profession);} //
	if(religion>=0)
	{print("Religion(%d), ",religion);} //
	if(science>=0)
	{print("Science(%d), ",science);} //
	if(security>=0)
	{print("Security(%d), ",security);} //
	if(stealth>=0)
	{print("Stealth(%d), ",stealth);} //
	if(survival>=0)
	{print("Survival(%d), ",survival);} //
	if(tactics>=0)
	{print("Tactics(%d), ",tactics);} //
	if(techastro>=0)
	{print("Tech/Astronautics(%d), ",techastro);} //
	if(techmaltech>=0)
	{print("Tech/Maltech(%d), ",techmaltech);} //
	if(techmedical>=0)
	{print("Tech/Medical(%d), ",techmedical);} //
	if(techpostech>=0)
	{print("Tech/Postech(%d), ",techpostech);} //
	if(techpretech>=0)
	{print("Tech/Pretech(%d), ",techpretech);} //
	if(techpsitech>=0)
	{print("Tech/Psitech(%d), ",techpsitech);} //
	if(vehicleair>=0)
	{print("Vehicle/Air(%d), ",vehicleair);} //
	if(vehiclegrav>=0)
	{print("Vehicle/Grav(%d), ",vehiclegrav);} //
	if(vehicleland>=0)
	{print("Vehicle/Land(%d), ",vehicleland);} //
	if(vehiclespace>=0)
	{print("Vehicle/Space(%d), ",vehiclespace);} //
	if(vehiclewater>=0)
	{print("Vehicle/Water(%d), ",vehiclewater);} //
	if(steward>=0)
	{print("Steward(%d), ",steward);} //
	if(anyskill>=1)
	{print("Any Skill x%d, ",anyskill);} //
	if(proffessionany>=1)
	{print("Any Proffesion Skillx%d, ",proffessionany);} //
	if(techany>=1)
	{print("Tech/Any x%d, ",techany);} //
	if(combatany>=1)
	{print("Combat/Anyx%d, ",combatany);} //
	if(culany>=1)
	{print("Culture/Any x%d, ",culany);} //
	if(any2but>=1)
	{print("Any skill except Maltech or Psitech x%d, ",any2but);} //
	if(vehicleany>=1)
	{print("Vehicle/Any x%d, ",vehicleany);} //
	print("\n"); // para que pase bien a la linea que sigue
	return 0;
}

function resetskill()
{
	
artist=-1,athletics=-1,bureaucracy=-1,business=-1,comenergy=-1,comgunnery=-1,comprimitiv=-1,comproject=-1,compsitech=-1,comunarmed=-1,computer=-1,culalien=-1,culcriminal=-1,culspacer=-1,cultraveler=-1,culworld=-1,exosuit=-1;
gambling=-1,history=-1,instructor=-1,language=-1,leadership=-1,navigation=-1,perception=-1,persuade=-1,profession=-1,religion=-1,science=-1,security=-1,stealth=-1,survival=-1,tactics=-1,techastro=-1,techmaltech=-1,techmedical=-1;
techpostech=-1,techpretech=-1,techpsitech=-1,vehicleair=-1,vehiclegrav=-1,vehicleland=-1,vehiclespace=-1,vehiclewater=-1,steward=-1;
anyskill=0,proffessionany=0,techany=0,combatany=0,culany=0,any2but=0,vehicleany=0;	
unlucky=0,backgroundpackforce=0;
	return 0;
}

function draw()
{
        
}