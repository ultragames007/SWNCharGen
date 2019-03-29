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
var t= document.createElement('p');  ///////////////////////


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
	document.write(" \n");
//	printf("STR=%d DEX=%d CON=%d WIS=%d INT=%d CHA=%d \n",beststr,bestdex,bestcon,bestwis,bestinte,bestcha); // DEBUUUUUUUG

	/////// LA PARTE DONDE TE ELIJE UNA CLASE ///////
	if (bestwis==1||bestcon==1)
	{
	document.write("Clase: Psiquico \n");  
    linebreak(1);
	claseelegida=1;
	}
	else
		{	
		if (bestinte==1||bestcha==1)
			{document.write("Clase: Experto \n");
             linebreak(1);
			claseelegida=2;
			}
		else
			{
			if (beststr==1||bestdex==1)
				{document.write("Clase: Guerrero \n");
                 linebreak(1);
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
	document.write("HP: "+hp+" ");
    linebreak(1);
//	printf("%d valor de clase elegida\n",claseelegida); //DEBUUUUUUG
	return 0;
}

function salvaciones(){
	document.write("Salvaciones: ");
	if(claseelegida==1) //Psiquico
	{
		document.write("AB:0 PHYS:13 MENT:12 EVADE:15 TECH:16 LUCK:14\n");
        linebreak(1);
	}
	if(claseelegida==2) //Experto
	{
		document.write("AB:0 PHYS:16 MENT:15 EVADE:12 TECH:11 LUCK:14\n");
        linebreak(1);
	}
	if(claseelegida==3) //Guerrero
	{
		document.write("AB:1 PHYS:12 MENT:15 EVADE:14 TECH:16 LUCK:13\n");
        linebreak(1);
	}
	
	return 0;
}

function subclase(){ //Para elegir Disciplina
	if (claseelegida==1) 
	{
		rolldado(6);
		document.write("Disciplina: ");
		switch(diceRoll){
			case 1:
				document.write("Biopsionics \n");
                linebreak(1);
				break;
			case 2:
				document.write("Metapsiones \n");
                linebreak(1);
				break;
			case 3:
				document.write("Precognition \n");
                linebreak(1);
				break;
			case 4:
				document.write("Telekinesis \n");
                linebreak(1);
				break;
			case 5:
				document.write("Telepathy \n");
                linebreak(1);
				break;
			case 6:
				document.write("Teleportation \n");
                linebreak(1);
				break;
			default:
				document.write("ERROR \n");
                linebreak(1);
				break;
		}
	}
	if (claseelegida==2){
		document.write("Class SKill: Once per in-game hour, you can reroll a failed skill check. \n");
        linebreak(1);
	}
	if (claseelegida==3){
		document.write("Class SKill: Once per combat, you may negate a successful attack made against you. \n");
        linebreak(1);
	}
	return 0;
}

function backgroundpack(){
	document.write("BACKGROUND: ");
		rolldado(24);
		switch(diceRoll){
		case 1:
			document.write("Adventurer \n");
            linebreak(1);    
			culworld++;
			culspacer++;
			anyskill=anyskill+2;
			break;
		case 2:
			document.write("Armsman \n");
            linebreak(1);    
			comprimitiv++;
			comunarmed++;
			culworld++;
			tactics++;
			break;
		case 3:
			document.write("Astrogators Mate \n");
            linebreak(1);    
			culspacer++;
			navigation++;
			science++;
			vehiclespace++;
			break;
		case 4:
			document.write("Bandit \n");
                linebreak(1);
			comprimitiv++;
			culworld++;
			stealth++;
			survival++;
			break;
		case 5:
			document.write("Biotech Crew \n");
                linebreak(1);
			culspacer++;
			science++;
			techastro++;
			techmedical++;
			backgroundpackforce=1;
			break;
		case 6:
			document.write("Comm Crew \n");
                linebreak(1);
			computer++;
			culspacer++;
			persuade++;
			techpostech++;
			break;
		case 7:
			document.write("Con Artist \n");
                linebreak(1);
			culcriminal++;
			culworld++;
			persuade++;
			stealth++;
			break;
		case 8:
			document.write("Deck Crew \n");
                linebreak(1);
			athletics++;
			comunarmed++;
			culspacer++;
			gambling++;
			break;
		case 9:
			document.write("Engine Crew \n");
                linebreak(1);
			culspacer++;
			exosuit++;
			gambling++;
			techpostech++;
			break;
		case 10:
			document.write("Gunnery Crew \n");
                linebreak(1);
			comgunnery++;
			culspacer++;
			computer++;
			tactics++;
			break;
		case 11:
			document.write("Hermit \n");
                linebreak(1);
			culworld++;
			perception++;
			survival++;
			stealth++;
			break;
		case 12:
			document.write("Noble \n");
                linebreak(1);
			comprimitiv++;
			culworld++;
			leadership++;
			persuade++;
			break;
		case 13:
			document.write("Peasant \n");
                linebreak(1);
			culworld++;
			proffessionany++;
			steward++;
			survival++;
			break;																											
		case 14:
			document.write("Politician \n");
                linebreak(1);
			culworld++;
			leadership++;
			persuade++;
			steward++;
			break;
		case 15:
			document.write("Priest \n");
                linebreak(1);
			culworld++;
			leadership++;
			persuade++;
			religion++;
			break;
		case 16:
			document.write("Researcher \n");
                linebreak(1);
			culworld++;
			perception++;
			science++;
			techany++;
			break;
		case 17:
			document.write("Scholar \n");
                linebreak(1);
			culworld++;
			history++;
			instructor++;
			science++;
			break;
		case 18:
			document.write("Security Crew \n");
                linebreak(1);
			combatany++;
			culspacer++;
			security++;
			tactics++;
			break;
		case 19:
			document.write("Soldier \n");
                linebreak(1);
			comproject++;
			comunarmed++;
			culworld++;
			tactics++;
			break;
		case 20:
			document.write("Technician \n");
                linebreak(1);
			culworld++;
			exosuit++;
			any2but=any2but+2;
			break;
		case 21:
			document.write("Transport Specialist \n");
                linebreak(1);
			comgunnery++;
			culworld++;
			navigation++;
			vehicleany++;
			break;
		case 22:
			document.write("Tribesman \n");
                linebreak(1);
			comprimitiv++;
			comunarmed++;
			culworld++;
			survival++;
			break;
		case 23:
			document.write("Urchin \n");
                linebreak(1);
			culworld++;
			culcriminal++;
			stealth++;
			survival++;
			break;
		case 24:
			document.write("Worker \n");
                linebreak(1);
			culworld++;
			proffessionany++;
			vehicleany++;
			anyskill++;
			break;
		default:
			document.write("ERROR \n");
                linebreak(1);
			break;																																													
		}
		
	return 0;
}

function trainingpack(){
	document.write("TRAINING PACK: ");
	if (claseelegida==1)
	{
		rolldado(8);  //Psychic
		switch(diceRoll){
		case 1:
			document.write("Adventuring Psychic \n");
                linebreak(1);
			anyskill++;
			proffessionany++;
			break;
		case 2:
			document.write("Academy Graduate \n");
                linebreak(1);
			compsitech++;
			persuade++;
			techmedical++;
			techpsitech++;
			break;
		case 3:
			document.write("Criminal Mind \n");
                linebreak(1);
			culcriminal++;
			persuade++;
			security++;
			stealth++;
			break;
		case 4:
			document.write("Healer \n");
                linebreak(1);
			culany++;
			perception++;
			techpsitech++;
			techmedical++;
			break;
		case 5:
			document.write("Military Psychic \n");
                linebreak(1);
			combatany++;
			compsitech++;
			stealth++;
			tactics++;
			break;
		case 6:
			document.write("Psychic Researcher  \n");
                linebreak(1);
			bureaucracy++;
			history++;
			science++;
			techpsitech++;
			break;
		case 7:
			document.write("Rogue Psychic  \n");
                linebreak(1);
			combatany++;
			culany++;
			persuade++;
			stealth++;
			break;
		case 8:
			document.write("Tribal Shaman  \n");
                linebreak(1);
			artist++;
			culany++;
			persuade++;
			religion++;
			break;
		default:
			document.write("ERROR \n");
                linebreak(1);
			break;																																													
		}
	}
	
	if (claseelegida==2) // Experto
	{
	rolldado(8); 
		switch(diceRoll){
		case 1:
			document.write("Adventuring Expert \n");
                linebreak(1);
			proffessionany=proffessionany+4;
			anyskill=anyskill+2;
			break;
		case 2:
			document.write("Bounty Hunter  \n");
                linebreak(1);
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
			document.write("Criminal   \n");
                linebreak(1);
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
			document.write("Explorer  \n");
                linebreak(1);
			athletics++;
			combatany++;
			navigation++;
			perception++;
			persuade++;
			techpostech++;
			vehicleany++;
			break;
		case 5:
			document.write("Pilot  \n");
                linebreak(1);
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
			document.write("Preceptor Adept  \n");
                linebreak(1);
			bureaucracy++;
			culany++;
			history++;
			persuade++;
			science++;
			techmedical++;
			techpostech++;
			break;
		case 7:
			document.write("Scientist  \n");
                linebreak(1);
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
			document.write("Xenoarchaeologist  \n");
                linebreak(1);
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
			document.write("ERROR \n");
                linebreak(1);
			break;																																													
		}		
	}
	
	if (claseelegida==3) // Warrior
	{
	rolldado(8); 
		switch(diceRoll){
		case 1:
			document.write("Adventuring Warrior \n");
                linebreak(1);
			anyskill=anyskill+2;
			proffessionany=proffessionany+2;
			break;
		case 2:
			document.write("Assassin  \n");
                linebreak(1);
			athletics++;
			combatany++;
			culcriminal++;
			security++;
			stealth++;
			tactics++;
			break;
		case 3:
			document.write("Commando    \n");
                linebreak(1);
			athletics++;
			culany++;
			combatany++;
			stealth++;
			survival++;
			tactics++;
			break;
		case 4:
			document.write("Exchange Enforcer   \n");
                linebreak(1);
			business++;
			combatany++;
			culany++;
			persuade++;
			security++;
			tactics++;
			break;
		case 5:
			document.write("Ground Forces   \n");
                linebreak(1);
			athletics++;
			combatany++;
			comproject++;
			leadership++;
			tactics++;
			vehicleany++;
			break;
		case 6:
			document.write("Mercenary   \n");
                linebreak(1);
			business++;
			combatany++;
			comproject++;
			culany++;
			perception++;
			tactics++;
			break;
		case 7:
			document.write("Space Marine   \n");
                linebreak(1);
			comenergy++;
			comprimitiv++;
			culspacer++;
			exosuit++;
			tactics++;
			techastro++;
			break;
		case 8:
			document.write("Templar   \n");
                linebreak(1);
			combatany++;
			culany++;
			perception++;
			religion++;
			stealth++;
			tactics++;
			break;
		default:
			document.write("ERROR \n");
                linebreak(1);
			break;																																													
		}		
	}	
	
	return 0;
}

function startinggearkit(){
	document.write("STARTING PACK: ");
	// Lineas para forzar tener mejores medicos
	if(backgroundpackforce==1) //Biotech Crew
	{
		rolldado(3);
		switch(diceRoll){
			case 1:
				document.write("Biotech Crew \n");
                linebreak(1);
				document.write("*Incluye: Vaccsuit, Bioscanner, Backpack (Lazarus Patch, Medkit, Rations 5) \n");
                linebreak(1);
				break;
			case 2:
				document.write("Biotech Crew \n");
                linebreak(1);
				document.write("*Incluye: Vaccsuit, Bioscanner, Backpack (Lazarus Patch, Medkit, Rations 5) \n");
                linebreak(1);
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
			document.write("Biotech Crew \n");
            linebreak(1);
			document.write("*Incluye: Vaccsuit, Bioscanner, Backpack (Lazarus Patch, Medkit, Rations 5) \n");
            linebreak(1);
			break;
		case 2:
			document.write("Engine Crew \n");
            linebreak(1);
			document.write("*Incluye: Vaccsuit, Toolkit/Postech, Monoblade, Backpack (Glowbugs 2, Powecell Type A 4, Instapanel) \n");
            linebreak(1);
			break;
		case 3:
			document.write("Comm Crew \n");
            linebreak(1);
			document.write("*Incluye: Vaccsuit, Dataslab, Translator Torc \n");	
            linebreak(1);
			break;
		case 4:
			document.write("Gunnery Crew \n");
            linebreak(1);
			document.write("*Incluye: Vaccsuit, Compad, Binoculars, Grenades 4, Power Cell Type B \n");
            linebreak(1);
			break;
		case 5:
			document.write("Deck Crew \n");
            linebreak(1);
			document.write("*Incluye: Vaccsuit, Atmofilter, Metatool, Stun Baton, Backpack (Thermal Flare 4, Lazarus Patch, Power Cell Type A 5) \n");
            linebreak(1);
			break;
		case 6:
			document.write("Security Crew \n");
            linebreak(1);
			document.write("*Incluye: Vaccsuit, Shield, Thermal Pistol, Power Cell Type A 5, PortaBox \n");
            linebreak(1);
			break;	
	}											
	}
	return 0;
}

function readskills(){
	document.write("\n");
    linebreak(1);
	document.write("SKILLS: "); // Ejemplo de cada skill
	if(artist>=0)
	{document.write("Artist("+artist+"), ");} //
	if(athletics>=0)
	{document.write("Athletics("+athletics+"), ");} //
	if(bureaucracy>=0)
	{document.write("Bureaucracy("+bureaucracy+"), ");} //
	if(business>=0)
	{document.write("Business("+business+"), ");} //
	if(comenergy>=0)
	{document.write("Combat/Energy("+comenergy+"), ");} //
	if(comgunnery>=0)
	{document.write("Combat/Gunnery("+comgunnery+"), ");} //
	if(comprimitiv>=0)
	{document.write("Combat/Primitive("+comprimitiv+"), ");} //
	if(comproject>=0)
	{document.write("Combat/Projectile("+comproject+"), ");} //
	if(compsitech>=0)
	{document.write("Combat/Psitech("+compsitech+"), ");} //
	if(comunarmed>=0)
	{document.write("Combat/Unarmed("+comunarmed+"), ");} //
	if(computer>=0)
	{document.write("Computers("+computer+"), ");} //
	if(culalien>=0)
	{document.write("Culture/Alien("+culalien+"), ");} //
	if(culcriminal>=0)
	{document.write("Culture/Criminal("+culcriminal+"), ");}//
	if(culspacer>=0)
	{document.write("Culture/Spacer("+culspacer+"), ");}//
	if(cultraveler>=0)
	{document.write("Culture/Traveler("+cultraveler+"), ");}//
	if(culworld>=0)
	{document.write("Culture/World("+culworld+"), ");}//
	if(exosuit>=0)
	{document.write("Exosuit("+exosuit+"), ");}//
	if(gambling>=0)
	{document.write("Gambling("+gambling+"), ");}//
	if(history>=0)
	{document.write("History("+history+"), ");} //
	if(instructor>=0)
	{document.write("Instructor("+instructor+"), ");} //
	if(language>=0)
	{document.write("Language("+language+"), ");} //
	if(leadership>=0)
	{document.write("Leadership("+leadership+"), ");} //
	if(navigation>=0)
	{document.write("Navigation("+navigation+"), ");} //
	if(perception>=0)
	{document.write("Perception("+perception+"), ");} //
	if(persuade>=0)
	{document.write("Persuade("+persuade+"), ");} //
	if(profession>=0)
	{document.write("Profession("+profession+"), ");} //
	if(religion>=0)
	{document.write("Religion("+religion+"), ");} //
	if(science>=0)
	{document.write("Science("+science+"), ");} //
	if(security>=0)
	{document.write("Security("+security+"), ");} //
	if(stealth>=0)
	{document.write("Stealth("+stealth+"), ");} //
	if(survival>=0)
	{document.write("Survival("+survival+"), ");} //
	if(tactics>=0)
	{document.write("Tactics("+tactics+"), ");} //
	if(techastro>=0)
	{document.write("Tech/Astronautics("+techastro+"), ");} //
	if(techmaltech>=0)
	{document.write("Tech/Maltech("+techmaltech+"), ");} //
	if(techmedical>=0)
	{document.write("Tech/Medical("+techmedical+"), ");} //
	if(techpostech>=0)
	{document.write("Tech/Postech("+techpostech+"), ");} //
	if(techpretech>=0)
	{document.write("Tech/Pretech("+techpretech+"), ");} //
	if(techpsitech>=0)
	{document.write("Tech/Psitech("+techpsitech+"), ");} //
	if(vehicleair>=0)
	{document.write("Vehicle/Air("+vehicleair+"), ");} //
	if(vehiclegrav>=0)
	{document.write("Vehicle/Grav("+vehiclegrav+"), ");} //
	if(vehicleland>=0)
	{document.write("Vehicle/Land("+vehicleland+"), ");} //
	if(vehiclespace>=0)
	{document.write("Vehicle/Space("+vehiclespace+"), ");} //
	if(vehiclewater>=0)
	{document.write("Vehicle/Water("+vehiclewater+"), ");} //
	if(steward>=0)
	{document.write("Steward("+steward+"), ");} //
	if(anyskill>=1)
	{document.write("Any Skill x"+anyskill+", ");} //
	if(proffessionany>=1)
	{document.write("Any Proffesion Skillx"+proffessionany+", ");} //
	if(techany>=1)
	{document.write("Tech/Any x"+techany+", ");} //
	if(combatany>=1)
	{document.write("Combat/Anyx"+combatany+", ");} //
	if(culany>=1)
	{document.write("Culture/Any x"+culany+", ");} //
	if(any2but>=1)
	{document.write("Any skill except Maltech or Psitech x"+any2but+", ");} //
	if(vehicleany>=1)
	{document.write("Vehicle/Any x"+vehicleany+", ");} //
	document.write("\n"); // para que pase bien a la linea que sigue
     linebreak(1);
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