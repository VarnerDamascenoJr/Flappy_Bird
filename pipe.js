function Pipe(){
	this.top = random(height/2); //todos os retangulos criados randomicamente.
	this.bottom = random(height/2);
	this.x = width;
    this.w = 20;
    this.speed = 2;
	this.show(){
		fill(255);
		rect(this.x, 0, 20, this.w, this.top);  // Aqui para a criacao de retangulos superiores 
		rect(this.x, height - this.bottom,  this.w, this.bottom);// Aqui para a criacao de retangulos inferiores

	}

	this.update = function(){
		this.x -= this.speed;
	}

	this.offscreen = function(){
		if (this.x < -this.w) {
			return true;
		}else{
			return false;
		}
	}
}