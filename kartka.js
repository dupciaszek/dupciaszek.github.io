

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","kartkaweihnachten.png")
loadSprite("mikolaj","mikolaj.png")

loadSound("muzyka","gdyslicznapanna.mp3")

add([
    sprite("kartka")
])

const mikolaj= add([
    sprite("mikolaj"),
    pos(50,150)
])
let wprawo=true
mikolaj.onUpdate(() => {
    
    if(wprawo && mikolaj.pos.x<470){
        mikolaj.pos.x += 1
        debug.log(wprawo)
    }
    
        
    
     else if(!wprawo && mikolaj.pos.x > 50){
        mikolaj.pos.x -= 1
        debug.log(wprawo)
     }

    else wprawo ^=true
})

onMouseRelease(()=>play("muzyka"))