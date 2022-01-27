// conrdinates
let hero_cordinates_y = 500;
let hero_cordinates_x = 100;


const hero = document.querySelector('.hero');
hero.style.top = `${hero_cordinates_y}px`;
hero.style.left = `${hero_cordinates_x}px`;

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';

// -- // Add a keyboard event for WASD buttons
// Adding a functino that will move them to the right path
// if the hero touches the ghost he suppose to die
// if he touches the treasure he supposed to win


// function responsible for the y axis
const moving_y = (key) => {
    if(key === "w" && hero_cordinates_y > 0){
        hero_cordinates_y -= 100 ;    
    } else if(key === "s" && hero_cordinates_y < 500) {
        hero_cordinates_y += 100 ;    
    }
    hero.style.top = `${hero_cordinates_y}px`;
    console.log(hero.style.top);
}

// function responsible for the x axis
const moving_x = (key) => {
    if(key === "d"  && hero_cordinates_x <= 600){
        hero_cordinates_x += 100;
        console.log(hero_cordinates_x);
        console.log(key);
    } else if(key === "a" && hero_cordinates_x >= 100){
        hero_cordinates_x -= 100;
        console.log(hero_cordinates_x);
    }
    hero.style.left = `${hero_cordinates_x}px`;
}

// Main dunction which will define the structure of the program
const movingHero = event => {
        if(event.key.toLowerCase() === "w" || event.key.toLowerCase()  === "s"){
            console.log(event);
            moving_y(event.key.toLowerCase());
        } else if(event.key.toLowerCase() === "d" || event.key.toLowerCase()  === "a") {
            moving_x(event.key.toLowerCase());
      
        }
}



const winningOrLosing = () => {
    console.log("-------------------");
    if(hero_cordinates_y === 0 && hero_cordinates_x === 400){
        setTimeout(function(){alert("You are a fucking winner!!");}, 100);
    } else if (hero_cordinates_y === 200 && hero_cordinates_x === 600) {
        setTimeout(function(){alert("Go home you are embarrassing!");}, 100)
        
    }
}


// Listener of key press in the dom 
document.addEventListener("keypress", event => {
    movingHero(event);
    winningOrLosing();
});



