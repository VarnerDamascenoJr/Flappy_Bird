

function Bird(){
	this.y = width/2;
	this.x = 25;
	this.gravity = 0.5;  //A gravidade será o peso exercido sobre o objeto
	this.lift = -15; //variavel que sera usada para controle da gravidade
	this.velocity = 0; //
    
	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}
	this.up = function(){
		this.velocity += this.lift; // assim que eu aperto na barra, entao, o valor de lift sera usado para 
		                            //dar a medida exata do quanto o objeto ira subir ou descer
	}
	this.update = function(){
		this.velocity += this.gravity; // a mudança da velociade
		this.velocity*=0.9;
        this.y += this.velocity;

        if (this.y > height) {
        	this.y = height;
        	this.velocity = 0;
        }
        if (this.y < height) {
        	this.y = 0;
        	this.velocity = 0;
        }
	}
}
