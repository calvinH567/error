class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
    }
    car1 = createSprite(100,300);
    car2 = createSprite(300,300);
    car3 = createSprite(500,300);
    car4 = createSprite(700,300);
    Car = [car1,car2,car3,car4];
  }

  play(){
    
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      var i = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        i  = i + 1;
        x = x  + 200;
        //y = displayHeight - allPlayers[plr].distance;;
        y = allPlayers[plr].distance;
        console.log(Car[1].x);
        Car[i-1].x = x;
        Car[i-1].y = y;
        if (i ==player.index){;
          Car[i-1].shapeColor="red";
          camera .position.x = displayWidth/2;
          camera .position.y = Car[i-1].y;
        };
      }
  }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      player.update();
    }
  }
}
