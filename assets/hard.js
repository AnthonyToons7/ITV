// Hard
function playHrd(){
    document.querySelector(".left").style.display="flex";
    document.querySelector(".right").style.display="flex";
    document.querySelector(".flexbox__Left__hard").style.display="flex";
    document.querySelector(".flexbox__Right__hard").style.display="flex";
    document.querySelector(".your__health__Container__hard").style.display="flex";

    const rngH = document.querySelector(".rngH");
    const sprite = document.querySelector(".yspriteHrd");
    const oppsprite = document.querySelector(".opp__sprite__hard");
    if (sprite.style.display = "none"){
        sprite.style.display="flex";
        oppsprite.style.display="flex";
        rngH.style.display="inline-block"
    }
    const options = document.querySelector(".gamemode");
    options.style.display="none";
    document.querySelector(".battle").style.display="none";
}
// YOUR DAMAGE OPPONENT HEALTH
function attackH() {
    document.querySelector(".dmgContainerh").style.opacity="1";
    let x = Math.floor(Math.random() * 10) + 10;
    document.querySelector(".ydmgH").innerHTML = x;
    const container = document.querySelector(".ydmgH");
    if (!container.classList.contains('active')){
        container.classList.add('active');
    }
    setTimeout(() => {
    container.classList.remove('active')
    }, 500)

    document.querySelector(".rngH").style.display="none";
    const hph = document.querySelector(".hpH");
    let health = hph.dataset.hph - x;
    hph.removeAttribute('data-hph');
    hph.setAttribute('data-hph', health);
    document.querySelector(".hpH").innerHTML = health;
    document.querySelector(".ydmgH").innerHTML = '-' + x + '<br>';
    if (health < 1 ) {
        const vic = document.getElementById("victory");
        vic.style.display=("block");
        document.querySelector(".rngH").style.display="none";
        return;
    }
    const delayInMilliseconds = 1200;

    setTimeout(function() {
        // YOUR HEALTH, OPPONENT DMG
        document.querySelector(".your__dmg__Container__hard").style.opacity="1";
        x = Math.floor(Math.random() * 15) + 5;
        document.querySelector(".dmgH").innerHTML = x;

        let crit = Math.floor(Math.random() * 100) + 1;

        const yhealth = document.querySelector(".your__hp__hard");
        if (!yhealth.classList.contains('active')){
            yhealth.classList.add('active');
        }
        setTimeout(() => {
        yhealth.classList.remove('active')
        }, 500)

        if (crit <= 10) {
            const audio = document.querySelector(".critsfx");
            audio.play();
            console.log("Crit!")
            let mult = 2;
            document.querySelector(".crit").style.display="block";
            let critical = x * mult;
            document.querySelector(".dmgH").innerHTML = '-' + critical + '<br>';

            const yhph = document.querySelector(".your__hp__hard");
            health = yhph.dataset.yhph - critical;
            yhph.removeAttribute('data-yhph');
            yhph.setAttribute('data-yhph', health);
        }

        else {
            document.querySelector(".dmgH").innerHTML = '-' + x + '<br>';
            const yhph = document.querySelector(".your__hp__hard");
            health = yhph.dataset.yhph - x;
            yhph.removeAttribute('data-yhph');
            yhph.setAttribute('data-yhph', health);
            document.querySelector(".crit").style.display="none";
        }
        document.querySelector(".your__hp__hard").innerHTML = health;
        if (health <= 50) {document.querySelector(".inner-border").style.borderColor="#8b0000";}
        if (health < 1 ) {
            const go = document.querySelector("#game-over");
            go.style.display=("block");
            document.querySelector(".rngH").style.display="none";
            return;
        }
        document.querySelector(".rngH").style.display="inline-block";
    }, delayInMilliseconds);
    document.querySelector(".crit").style.display="none";
}
