$(document).ready(function(){
        var num = 3;
        var start ="";
        var map =[];
        var red = 0;
        var blue = 0;
        var turn;
        var start = Math.floor(Math.random() * 2) + 1;
        

    $("#start-button").click(function(num){
        if(start == 1 || turn =="Blue"){
            turn = "Blue";
            document.getElementById('page').style ='background: linear-gradient(to bottom right, rgba(255, 0, 0, 0.405), blue); '
            document.getElementById('full').style ='background: linear-gradient(to bottom right, rgba(255, 0, 0, 0.405), blue); '
          
        }else if(start == 2 || turn =="Red"){
            turn ="Red";
            document.getElementById('page').style ='background: linear-gradient(to bottom right, red, rgba(0, 0, 255, 0.405)); '
            document.getElementById('full').style ='background: linear-gradient(to bottom right, red, rgba(0, 0, 255, 0.405)); '
        }
        var val = document.getElementById('image-number');
        num = val.options[val.selectedIndex].value;
        $("#start").hide();
        var temp = (Math.random() <= 0.5) ? 1 : 2;
        // if (temp == 1){
        //     start ="red";
        //     document.getElementById('backgrond').style = "background-color: red;"
        //     $('#background').animate({width: 'toggle'});
        // }
        // else{
        //     start ="blue";
        //     document.getElementById('backgrond').style = "background-color: blue;"
        //     $('#background').animate({width: 'toggle'});
        // }
        $("#game").slideToggle("slow", function(){});
        document.getElementById("game").style= "display:inline-block;"
        function shuffleArray(arr){
            var currentIndex = arr.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a random remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = arr[currentIndex];
                arr[currentIndex] = arr[randomIndex];
                arr[randomIndex] = temporaryValue;
            }
            return arr;
        }
        if(num == 3){
            map = ['gold','gold-el','silver','silver-el','nickel','nickel-el']
            map = shuffleArray(map);
        }else if(num == 6){
            map = [ 1,2,3,4,1,2,3,4,6,6,5,5]
            map = shuffleArray(map);
        }else{
            map = [1,2,3,4,5,6,1,2,3,4,5,6,12,11,10,9,8,7,12,11,10,9,8,7]
            map = shuffleArray(map);
        }
        for(var i=0; i < map.length; i++){
            document.getElementById("cards").innerHTML += 
            "<div class='er"+ num+"'><div class='front'> <img style ='width: 70%; height: auto;' src ='imgs/play.jpg'></div> <div class='back'><img style ='height:45%; width:40%;' class = 'img' alt='"+map[i]+"' src='imgs/gameCards/"+ map[i]+".jpg'><h1>"+ map[i]+"</h1></div></div>"
            if(num == 3 && i+1 == map.length/2){
                document.getElementById("cards").innerHTML += "</br>"
            }
            if(num == 6 && (i == 3 || i == 7)){
                console.log(num)
                document.getElementById("cards").innerHTML += "</br>"
            }
            if(num == 12 && (i == 5 || i == 11 || i == 17)){
                
                document.getElementById("cards").innerHTML += "</br>"
            }
        }
        var flipped = 0;
        var choices =[];
        $(".er3").flip();
        $(".er3").click(function(){
            $(this).flip(true)
            var img = this.getElementsByClassName('img')
            for (var i = 0; i < img.length; i+= 1) {
                choices[flipped] = img[i].alt;
            }
            console.log(choices)
            
            flipped++
            console.log(flipped)
            if(flipped >= 2){
                if(choices[0].includes(choices[1]) || choices[1].includes(choices[0])){
                    console.log("Winner")
                    if(turn =="Red"){
                        red++;
                        document.getElementById('red-board').innerHTML = red;
                    }else{
                        blue++;
                        document.getElementById('blue-board').innerHTML = blue;
                    }
                }
                function time(){
                    flipped = 0;
                    console.log('hello')
                    $(".er3").flip(false)
                    if(turn =="Red"){
                        turn = "Blue";
                        document.getElementById('page').style ='background: linear-gradient(to bottom right, rgba(255, 0, 0, 0.405), blue); '
                        document.getElementById('full').style ='background: linear-gradient(to bottom right, rgba(255, 0, 0, 0.405), blue); '
                    }else{
                        turn = "Red";
                        document.getElementById('page').style ='background: linear-gradient(to bottom right, red, rgba(0, 0, 255, 0.405)); '
                        document.getElementById('full').style ='background: linear-gradient(to bottom right, red, rgba(0, 0, 255, 0.405)); '
                 
                    }
                }
                setTimeout(time, 1000)
            }
        });

        
    });

})