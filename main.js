var canvas = new fabric.Canvas('myCanvas');

player_x = 10;

player_y = 10;

block_image_width = 30;

block_image_height = 30;

var player_object = " ";

var block_image_object = " ";

function player_update() {

    fabric.Image.fromURL("player.png" , function(Img) {
    
        player_object = Img;
        player_object.scaleTowidth(150);
        player_object.scaleToheight(150);
        player_object.set({
        top:player_y,
        left:player_x
        }
        );

        canvas.add(player_object);
    }
    );
}

function new_image(get_image) {
    
    fabric.Image.fromURL(get_image , function(Img) {

        block_image_object = Img;
        block_image_object.scaleTowidth(block_image_width);
        block_image_object.scaleToheight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        }
        );

        canvas.add(block_image_object);
    }
    );
    
    if(e.shiftKey == true && keyPressed == '80'){

        console.log("p and shift pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
    
        console.log("m and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    
    if(keyPressed == '66'){
        new_image('ironman_body.png');
        console.log("b");
    }
    if(keyPressed == '70'){
        new_image('hulk_face.png');
        console.log("f");
    }
    if(keyPressed == '76'){
        new_image('spiderman_legs.png');
        console.log("l");
    }
    if(keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
}

function up() {
    if(player_y >=0)   { 

       player_y = player_y - block_image_height;
  
       console.log("block image height = " + block_image_height);
    
       console.log("When up arrow is pressed, X = " + player_x + " | Y = " + player_y);

       canvas.remove(player_object);

       player_update();
       
    } 

   }
   function down() { 
       
       if(player_y <=500) { 
           
        player_y = player_y - block_image_height;
  
        console.log("block image height = " + block_image_height);
     
        console.log("When down arrow is pressed, X = " + player_x + " | Y = " + player_y);
 
        canvas.remove(player_object);
 
        player_update();

           } 
       }

   function left() {
       
    if(player_x >= 0) { 
        
        player_x = player_x - block_image_height;
  
        console.log("block image height = " + block_image_height);
     
        console.log("When left arrow is pressed, X = " + player_x + " | Y = " + player_y);
 
        canvas.remove(player_object);
 
        player_update();

       
       }
       
   }
function right() { 

if(player_x <= 850) { 
    
    player_x = player_x - block_image_height;
  
    console.log("block image height = " + block_image_height);
 
    console.log("When right arrow is pressed, X = " + player_x + " | Y = " + player_y);

    canvas.remove(player_object);

    player_update();


}
}
