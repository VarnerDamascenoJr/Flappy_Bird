function Pipe(){
	this.top = random(height/2); //todos os retangulos criados randomicamente.
	this.bottom = random(height/2);
	this.x = width;
    this.w = 20;
    this.speed = 2;
   this.highlight = false;
	
	this.show = function(){
		fill(255);
		if (this.highlight) { fill(255, 0, 0);}
		rect(this.x, 0, 20, this.w, this.top);  // Aqui para a criacao de retangulos superiores 
		rect(this.x, height - this.bottom,  this.w, this.bottom);// Aqui para a criacao de retangulos inferiores

	}

	this.hits = function(bird){ //verificara se o objeto toca nas colunas
        if (bird.y < this.top || bird.y > height - this.bottom) {
          if (bird.x > this.x && bird.x < this.x + this.w) {
          	this.highlight = true;

          	return true;
          }
           }
           this.highlight = false;
           return false;
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
