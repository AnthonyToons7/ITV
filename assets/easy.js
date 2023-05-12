// easy
function playEs(){
    const selector = [".left", ".right", ".flexbox__Left", ".flexbox__Right", ".your__health__Container"];
    selector.forEach(selectors => document.querySelector(selectors).style.display="flex");

    const rng = document.querySelector(".rng");
    const sprite = document.querySelector(".yspriteEs");
    const oppsprite = document.querySelector(".opp__sprite__easy");
    if (sprite.style.display = "none"){
        sprite.style.display="flex";
        oppsprite.style.display="flex";
        rng.style.display="inline-block"
    }
    document.querySelector(".gamemode").style.display="none";
    document.querySelector(".battle").style.display="none";
}
    // YOUR DAMAGE OPPONENT HEALTH
    function attack() {  
        document.querySelector(".dmg__Container__easy").style.opacity="1";
        const x = Math.floor(Math.random() * 11);
        document.querySelector(".your__dmg__easy").innerHTML = x;
        const container = document.querySelector(".your__dmg__easy");
        if (!container.classList.contains('active')){
            container.classList.add('active');
        } 
        setTimeout(() => {
        container.classList.remove('active')
        }, 500)
    
        document.querySelector(".rng").style.display="none";
        const hp = document.querySelector(".opp__hp");
        let health = hp.dataset.hp - x;
        hp.removeAttribute('data-hp');
        hp.setAttribute('data-hp', health);
        document.querySelector(".opp__hp").innerHTML = health;
        document.querySelector(".your__dmg__easy").innerHTML = '-' + x;
        if (health < 1 ) {
            const vic = document.getElementById("victory");
            vic.style.display=("block");
            document.querySelector(".rng").style.display="none";
            return;
        }
        const delayInMilliseconds = 1200;
    
        setTimeout(function() {
            // YOUR HEALTH, OPPONENT DMG
            document.querySelector(".dmg__Container").style.opacity="1";
            let counter__atk = Math.floor(Math.random() * 11);
            document.querySelector(".opp__dmg").innerHTML = counter__atk;
            
            const yhealth = document.querySelector(".your__hp");
            if (!yhealth.classList.contains('active')){
                yhealth.classList.add('active');
            }
            setTimeout(() => {
            yhealth.classList.remove('active')
            }, 500)
    
            const yhp = document.querySelector(".your__hp");
            health = yhp.dataset.yhp - counter__atk;
            yhp.removeAttribute('data-yhp');
            yhp.setAttribute('data-yhp', health);
            document.querySelector(".your__hp").innerHTML = health;
            document.querySelector(".opp__dmg").innerHTML = '-' + counter__atk;
            document.querySelector(".rng").style.display="inline-block";

            if (health <= 10) {document.querySelector(".inner-border").style.borderColor="#8b0000";}

            if (health < 1 ) {
                document.getElementById("game-over").style.display=("block");
                document.querySelector(".rng").style.display="none";
            }
        }, delayInMilliseconds);
    }
