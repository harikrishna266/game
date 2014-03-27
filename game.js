var Q	= Quintus()
		.include('Sprites,Anim')
		.setup({width:600,height:300});



Q.Sprite.extend('Player',{
	init:function(p){
		this._super(p,{
			sprite:'player',
			sheet:'player',
			x: Q.el.width/2,
			y: Q.el.height - 65,
			type:Q.SPRITE_FRIENDLY,
			speed:10
		});
		this.add('animation');
		this.play('default');		



	}

 });


 Q.load(['background.jpg','monsterSpriteSheet.png','player.json'],function(){

 	Q.compileSheets('monsterSpriteSheet.png','player.json');
 	Q.animations("player",{default:{frames:[0,1,2],rate:1/4}});
 	var background 	=  	new Q.Sprite({asset:'background.jpg',x:Q.el.width/2,y:Q.el.height/2,type:Q.SPRITE_NONE})
 	var player 		=	new Q.Player();	
 	Q.gameLoop(function(dt){
 		Q.clear();

 		background.render(Q.ctx);
 		player.update(dt);
 		player.render(Q.ctx);
 	})



 });