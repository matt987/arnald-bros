
// Copyright 2011 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var WM = (function() {

  
  
  exampleFull = (function() {
           
    var canvas,
      context,
      canvasWidth = 450,
      canvasHeight = 200,
      images = {},
      frameInterval,
      fps = 30,
      drawing = false,
      fpsInterval,
      numFramesDrawn = 0,
      curFPS = 0,
      level = 1,
      maxLevel = 10,
      speed = 15,
      curLoadResNum = 0,
      totalLoadResources = 9,
      displayList = [],
      ball,
      hero,
      background,
    
      Hero = function() {
        
        var x = 400,
             y = 0,  
          jumping = false,
          blinking = false,
          blinkUpdateTime = 100,
          blinkTimer = setInterval(updateBlink, blinkUpdateTime),
          
          breathInc = 0.1,
          breathDir = 1,
          breathAmt = 0,
          breathMax = 2,
          blinkInterval,
          eyeOpenTime = 0,
          timeBtwBlinks = 4000,
          maxEyeHeight = 14,
          curEyeHeight = maxEyeHeight;
        
        function updateBlink()
        { 
          eyeOpenTime += blinkUpdateTime;
          
          if(eyeOpenTime >= timeBtwBlinks){
            blink();
          }
        }
        function blink()
        {
          if(blinking == false)
          {
            blinking = true;
            blinkLoop();
          }
          
        }
        function blinkLoop()
        {
          --curEyeHeight;
          if(curEyeHeight <=0){
            curEyeHeight = maxEyeHeight;
            eyeOpenTime = 0;
            blinking = false;
          }else{
            setTimeout(blinkLoop, 10);
          }
        }
        function jump() {
          if(jumping === false) {
            jumping = true;
            y -= 45;
            setTimeout(land, 500);
          }
        }
        function land() {
          if(jumping === true) {
            y += 45;
            jumping = false;
          }
        }

        function draw(context) {
          
          
          
          if (jumping) {
            context.drawImage(images["leftArm-jump"], x + 40, y - 42 - breathAmt);
            context.drawImage(images["legs-jump"], x, y - 6);
          } else {
            context.drawImage(images["leftArm"], x + 40, y - 42 - breathAmt);
            context.drawImage(images["legs"], x, y);
          }
          context.drawImage(images["torso"], x, y - 50);
          context.drawImage(images["head"], x - 10, y - 125 - breathAmt);
          context.drawImage(images["hair"], x - 37, y - 138 - breathAmt);
          if(jumping){
            context.drawImage(images["rightArm-jump"], x - 35, y - 42 - breathAmt);
          }else{
            context.drawImage(images["rightArm"], x - 15, y - 42 - breathAmt);
          }
          
          drawEye(x + 47, y - 68 - breathAmt);
          drawEye(x + 58, y - 68 - breathAmt);
        }
        function drawEye(centerX, centerY)
        { 
          var height = curEyeHeight,
            width = 8;
          
          context.beginPath();
          context.moveTo(centerX,centerY - height/2);
        
          context.bezierCurveTo(centerX-width/2,centerY-height/2,
                      centerX-width/2,centerY+height/2,
                      centerX,centerY+height/2);
        
          context.bezierCurveTo(centerX+width/2,centerY+height/2,
                      centerX+width/2,centerY-height/2,
                      centerX,centerY-height/2);
         
          context.fillStyle = "#000000";
          context.fill();
          context.closePath();
        }
        
        function getX() {
          return x; 
        }
        function setX(pX) {
          x = pX; 
        }
        function getY() {
          return y; 
        }
        function setY(pY) {
          y = pY; 
        }
        function getJumping() {
          return jumping;
        }
        return {
          getX:getX,
          setX:setX,
          getY:getY,
          setY:setY,
          getJumping:getJumping,
          jump:jump,
          blink:blink,
          draw:draw
        }
      },
      Ball = function() {
        
        var x = 0,
          y = 0,
          speed = 0, 
          direction = 1, 
          rollTimer, 
          dirty = false, 
          diameter = 20, 
          color = "#DD3333",
          highlightColor = "#fa6565";
          
        rollTimer = setInterval(updateRoll, 1000/25);
          
        function roll(pSpeed, pDirection){
          speed = pSpeed;
          if(pDirection){
            direction = pDirection;
          }
          
        }
        function stop() {
          speed = 0;
        }
        function updateRoll() {
          x += direction * speed;
        }
        function draw(context) {
          
          var centerX = x,
            centerY = y + (diameter + 10)/2 - 2,
            width = (diameter + 30),
            height = 6;
            
          context.beginPath();
          context.moveTo(centerX, centerY);
          context.bezierCurveTo(centerX-width/2,centerY-height/2,
                    centerX-width/2,centerY+height/2,
                    centerX,centerY+height/2);
          context.bezierCurveTo(centerX+width/2,centerY+height/2,
                    centerX+width/2,centerY-height/2,
                    centerX,centerY-height/2);
          context.fillStyle = "#000000";
          context.fill();
          context.closePath();
        
          context.beginPath();
          context.moveTo(x, y - (diameter + 10)/2);
          context.arc(x,y,(diameter + 10)/2,0,2*Math.PI,false);
          context.fillStyle = "#000000";
          context.fill();
          context.closePath();
          
          context.beginPath();
          context.moveTo(x, y - diameter/2);
          context.arc(x,y,diameter/2,0,2*Math.PI,false);
          context.fillStyle = color;
          context.fill();
          context.closePath();
          
          centerX = x + 3;
          centerY = y - 3;
          context.beginPath();
          context.moveTo(centerX, centerY);
          context.arc(centerX,centerY,diameter/3/2,0,2*Math.PI,false);
          context.fillStyle = highlightColor;
          context.fill();
          context.closePath();
        }
        function getX(){
          return x; 
        }
        function setX(pX){
          x = pX; 
        }
        function getY(){
          return y; 
        }
        function setY(pY){
          y = pY; 
        }
        return {
          getX:getX,
          setX:setX,
          getY:getY,
          setY:setY,
          roll:roll,
          draw:draw,
          stop:stop
        };
      },
      Background = function() {
        
        function draw(context) {
          //context.drawImage(images["background"], 0, 0);
        }
        return {
          draw:draw
        }
      }
    
      function throwBall() { 
        ball.roll(speed, -1);
      }
      function start() {
        frameInterval = setInterval(update, 1000/fps);
        fpsInterval = setInterval(updateFPS, 1000);
      }
      function resourceLoaded()
      {
        if(++curLoadResNum == totalLoadResources) {
          
          start();
        }
      }
      function loadImage(name) {
        
        images[name] = new Image();
        images[name].onload = function() { resourceLoaded(); }
        images[name].src = "images-hero/" + name + ".png";
      }
      function prepareCanvas(gameDiv, pCanvasWidth, pCanvasHeight) {
        
        canvasWidth = pCanvasWidth;
        canvasHeight = pCanvasHeight;
        
        // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
        canvas.setAttribute('id', 'canvas');
        gameDiv.appendChild(canvas);
        
        if(typeof G_vmlCanvasManager != 'undefined') {
          canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d"); // Grab the 2d canvas context
        // Note: The above code is a workaround for IE 8 and lower. Otherwise we could have used:
        //     context = document.getElementById('canvas').getContext("2d");
        
        context.font = 'bold 32px "Reenie Beanie"';
        try {
          context.fillText("loading...", 40, 140);
        } catch (ex) {
          
        }
        
        // Load images
        loadImage("legs");
        loadImage("torso");
        loadImage("head");
        loadImage("hair");
        loadImage("leftArm");
        loadImage("rightArm");
        loadImage("leftArm-jump");
        loadImage("legs-jump");
        loadImage("rightArm-jump");

        
        //background = new Background();
        //displayList.push(background);
        
        hero = new Hero();
        hero.setX(200);
        hero.setY(185);
        displayList.push(hero);
        
        ball = new Ball();
        ball.setX(canvasWidth);
        ball.setY(200);
        ball.roll(speed, -1);
        displayList.push(ball);
      }
      function clearCanvas() {
        canvas.width = canvas.width; // clears the canvas 
      }
      function update() {
        
        ++numFramesDrawn;
        
        if(level < maxLevel) {
      
          if(ball.getX() < 0) {
            
            speed += 2;
            level += 1;
            
            if (level > maxLevel) {
              ball.stop();
              ball.setX(2000);  
            } else {
              ball.stop();
              ball.setX(canvasWidth + 20);
              setTimeout(throwBall, Math.random() * 3000);
            }
          } else if (ball.getX() > canvasWidth + 30) {
            ball.roll(speed, -1);
          }else if (ball.getX() > hero.getX() && ball.getX() < hero.getX() + 110 && !hero.getJumping()) {
            ball.roll(speed * 2, 1);
          }
        } else {
          ball.stop();
          ball.setX(2000);
        }
        
        redraw();   
      }
      function redraw() {
        
        var i;
        
        clearCanvas();
        
        for(i = 0; i < displayList.length; i++)
        {
          displayList[i].draw(context); 
        }
        
        context.fillStyle = "#000000";
        context.font = 'bold 32px "Reenie Beanie"';
        try {
          if(level < maxLevel){
            context.fillText("Level: " + level + " of " + maxLevel, 300, 40);
          }else{
            context.fillText("You Win!", 300, 100);
          }
        } catch (ex) {
          
        }
      }
      function updateFPS()
      {
        curFPS = numFramesDrawn;
        numFramesDrawn = 0;
      }
      function jump() {
        hero.jump();  
      }
      function blink() {
        hero.blink(); 
      }
      return {
        prepareCanvas: prepareCanvas,
        jump:jump,
        blink:blink
      }
    }());

      return {
      
      exampleFull:exampleFull
      }        
  }());

$(document).ready(function() {


  var exampleFullDiv = $('#exampleFullDiv');
  WM.exampleFull.prepareCanvas(exampleFullDiv[0], exampleFullDiv.width(), exampleFullDiv.height());
  
  document.getElementById("exampleFullDiv").onmousedown = function() { 
     WM.exampleFull.jump(); }
  
});