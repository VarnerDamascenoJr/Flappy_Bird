var bird;
var pipes = [];
function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {

 background(0);
 bird.update();
 bird.show();


if (frameCount % 100 == 0) {
	pipes.push(new Pipe()); //a cada intervalo de frames sera adicionado uma nova coluna
}




 for (var i = pipes.length -1; i>= 0; i--) {
 	pipes[i].show();
 	pipes[i].update();
 }
 if (pipes[i].offcreen()) {
 	pipes.splice(i, 1);
 }

}

function keyPressed(){
	if (key == ' ') {
		bird.up(); //Cada vez que eu pressionar a barra, entao, o objeto será atualizado
	}
}
