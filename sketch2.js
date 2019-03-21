var h1;
var h2;
function setup() {
  createCanvas(400, 400);
  h1 = createElement("h1", "Numeritos para ti."); // CON ESTE ELEMNTO PODEMOS CREAR cualquiera de html. muy util.
  h2 = createElement("p1", " Este texto cambia ni bien typeas en la caja de abajo ");
}

function draw() {
    background(0);
    fill(255,0,0);
    stroke(0,0,255);
    rectMode(CENTER);
    rect(200,200,50,50);  
}

