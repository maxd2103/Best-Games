let KEY_SPACE = false;                          // Tastennummer 32
        let KEY_UP = false;                             // Tastennummer 38
        let KEY_DOWN = false;                           // Tastennummer 40
        let canvas;                                    
        let ctx;
        let backgroundImage = new Image();


        let rocket = {
            x: 50,
            y: 200,
            width: 90,
            height: 50,
            src: 'img-sp/rocket.png' 
        };

        let ufos = [];                                
        let shots = [];                                


        document.onkeydown = function(e) { //KeyListener
            if (e.keyCode == 32) {                      // Leertaste ist gedrückt
                KEY_SPACE = true;                       // Prüfen ob die Taste gedrückt ist oder nicht 
            }

            if (e.keyCode == 38) {                      // Taste nach Oben ist gedrückt
                KEY_UP = true;                          // Prüfen ob die Taste gedrückt ist oder nicht 
            }

            if (e.keyCode == 40) {                    
                KEY_DOWN = true;                      
            }
        }


        document.onkeyup = function(e) {                //KeyListener
            if (e.keyCode == 32) {                      // Leertaste ist losgelassen
                KEY_SPACE = false;
            }
            
            if (e.keyCode == 38) {                     // Taste nach Oben ist losgelassen
                KEY_UP = false; 
            }

            if (e.keyCode == 40) {                   
                KEY_DOWN = false; 
            }
        }

        function startGame() {
            canvas = document.getElementById('canvas');
            ctx = canvas.getContext('2d');             
            loadImages();                            
            setInterval(update, 1000 / 25);             
            setInterval (createUfos, 2000);
            setInterval(checkForCollions, 1000 / 25);   
            setInterval(checkForShoot, 1000 / 10);      
            draw();                                     
        }                                               
 
        function checkForCollions(){
            ufos.forEach(function(ufo) {
                if (rocket.x + rocket.width > ufo.x && 
                    rocket.y + rocket.height > ufo.y &&            
                    rocket.x < ufo.x && 
                    rocket.y < ufo.y + ufo.height
                )   {
                    rocket.img.src = 'img-sp/explosion.png';
                    console.log('Collion!!!');
                    ufos = ufos.filter(u => u != ufo);           
                    massage ();
                }
                
                function massage() {
                setTimeout(function(){ if(!alert('Game Over')){window.location.reload();} }, 500);
                }  

            shots.forEach(function(shot) {
                if (shot.x + shot.width > ufo.x && 
                    shot.y + shot.height > ufo.y &&               
                    shot.x < ufo.x && 
                    shot.y < ufo.y + ufo.height
                ) {
                    ufo.hit = true;
                    ufo.img.src = 'img-sp/explosion.png';
                    console.log('Collion!!!');
                    
                    setTimeout(() => {
                        ufos = ufos.filter (u => u != ufo);
                    }, 1000);
                    }
                });
            });   
        }


        function loadImages(){
            backgroundImage.src = 'img-sp/background.jpg';
            rocket.img = new Image();
            rocket.img.src = rocket.src;                         
            
        }
        
        function createUfos(){
            let ufo = {
                x: 800,
                y: Math.random() * 500,
                width: 100,
                height: 40,
                src: 'img-sp/ufo.png',
                img: new Image()
            };
            ufo.img.src = ufo.src;                               
            ufos.push(ufo);
        }

        function checkForShoot(){
           if (KEY_SPACE) {
            let shot = {
                x: rocket.x + 88,
                y: rocket.y -4 ,
                width: 30,
                height: 60,
                src: 'img-sp/shot.png',
                img: new Image()
            };
            shot.img.src = shot.src;                            

            shots.push(shot);
        }
    }

        function update(){
            if(KEY_UP) {
                rocket.y -= 5;  
            }

            if(KEY_DOWN) {
                rocket.y += 5;  
            }

            ufos.forEach(function(ufo) {
               if (!ufo.hit) {
                ufo.x -= 5;
               }
            });

            shots.forEach(function(shot) {
                shot.x += 15;
            });

        }

        function draw (){
            ctx.drawImage(backgroundImage, 0, 0);
            ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);
       
            ufos.forEach(function(ufo) {
                ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
            });

            shots.forEach(function(shot) {
                ctx.drawImage(shot.img, shot.x, shot.y, shot.width, shot.height);
            });

            requestAnimationFrame(draw);
        }