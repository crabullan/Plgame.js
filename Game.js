var gamePl = document.querySelector("#StartCanvas");
let IntervalPlgame
var board = gamePl.getContext('2d');
var gamePlHeight = gamePl.height
var gamePlWidth = gamePl.width

function karakterPlgame(){
    kuda = new property(0,0)
}

function playPlgame(){
    background = new property(0, 0, 1200, 600, "lol.png", "background")
    playRunning()
}
function playRunning(){
    IntervalPlgame = setInterval(contentPlgame, 10)
}
function property(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.goesX = 0
    this.goesY = 0
    this.width = width
    this.height = height
    this.color = color
    this.type = type;
    if(type == "image" || type == "background") {
        this.image = new Image()
        this.image.src = color ;
    }
    this.update = function(){
        ctx = board
    if (type == "image" || type == "background") {
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
            if(type == "background") {
                ctx.drawImage(this.image,
                    this.x + this.width,
                    this.y,
                    this.width,this.height);
            }

    }else{
        ctx.fillStyle = color;
        ctx.fillrect(this.x, this.y, this.width, this.height)
    }
    }
    
}
this.movement = function(){
    this.x += this.goesX
    this.y += this.goesY
    this.hitTop();
    this.hitBottom();
    this.hitRight();
    this.hitLeft();
}
this.hitTop = function(){
    var rocktop = this.height - this.height
    if(this.y < rocktop){
        this.y = rocktop
    }
}
this.hitBottom = function(){
    var rockbottom = 600 - this.height;
    if (this.y > rockbottom){
        this.y = rockbottom
    }
}
this.hitLeft = function(){
    var rockLeft = 1200 - this.width 
    if (this.x > rockLeft ){
        this.x = rockLeft
    }
}
this.hitRight = function(){
    var rockRight = this.width - this.width
    if (this.x > rockRight){
        this.x = rockRight
    }
}
function clearPlgame(){
    board.clearRect(0, 0, gamePlWidth, gamePlHeight)
}
function contentPlgame(){
    clearPlgame()
    background.update()
}

