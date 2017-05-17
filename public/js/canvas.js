export function runCanvas(){
  var CLOUD_NUMBER = 6;
  var CLOUD_SPEED = 1;
  var CLOUD_WIDTH = 200;
  var CLOUD_HEIGHT = 100;
  var ZEP_WIDTH = 250;
  var ZEP_HEIGHT = 150;
  var ZEP_SPEED = 2;

  window.onload = function(){

    var canvas = document.getElementById("maincanvas");
    canvas.width = 500;
    canvas.height = 500;
    var c = canvas.getContext("2d");

    var background = new Image();
    background.src = "res/clipbac.png";

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var Cloud = function(){
      var cloud = new Image();
      cloud.src = "res/cloud.png";
      this.image = cloud;
      this.x = getRandomArbitrary(canvas.width,canvas.width+800);
      this.y = getRandomArbitrary(0,canvas.height);


      this.move = function(){
        this.x = this.x - CLOUD_SPEED;
      }

      this.show = function(){
        if(this.x<0-CLOUD_WIDTH){
          this.x = getRandomArbitrary(canvas.width,canvas.width+300);
        }
        c.drawImage(this.image,this.x,this.y,CLOUD_WIDTH,CLOUD_HEIGHT);
      }
    }

    var Zep = function(){
      this.x = canvas.width;
      this.y = canvas.height/3;
      var zep = new Image();
      zep.src = "res/zep.png";
      this.image = zep;

      this.move = function(){
        this.x = this.x - ZEP_SPEED;
      }

      this.show = function(){
        if(this.x<0-ZEP_WIDTH){
          this.x = getRandomArbitrary(canvas.width,canvas.width+300);
        }
        c.drawImage(this.image,this.x,this.y,ZEP_WIDTH,ZEP_HEIGHT);
      }

    }

    var clouds = [];
    for(var i = 0;i < CLOUD_NUMBER; i++){
      clouds[i] = new Cloud();
    }

    var zep = new Zep();

    function draw(){

      c.drawImage(background,0,0);

      for(var i = 0;i < CLOUD_NUMBER; i++){
        clouds[i].show();
        clouds[i].move();
      }

      zep.show();
      zep.move();

      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }
}
