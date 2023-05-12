// do not post memes in general
function battle(){
    const eyes = document.querySelector(".eyes__Container");
    const gamemodes = document.querySelector(".gamemode");
    const patchbtn = document.querySelector(".patch__btn");
    const wiki = document.querySelector(".wiki");
    wiki.style.display = "none";
    patchbtn.style.display = "none";
    eyes.style.display="none";
    gamemodes.style.display="block";
};
function load(){
    // X cross
    const cross = document.querySelector(".itemx");
    cross.addEventListener('click', ()=>{
        const menu = document.querySelector(".item__Menu__Impossible");
        menu.style.display = "none";
        const menubg = document.querySelector("#menu__active");
        menubg.style.display="none";
    })
    // X cross spells
    const scross = document.querySelector(".spellx");
    scross.addEventListener('click', ()=>{
        const book = document.querySelector(".spellsI");
        book.style.display = "none";
        const spellbg = document.querySelector("#bookactive");
        spellbg.style.display="none";
    });
    // X cross specials
    const mcross = document.querySelector(".specialx");
    mcross.addEventListener('click', ()=>{
        const specials = document.querySelector(".special__moves__impossible");
        specials.style.display = "none";
        const specialbg = document.querySelector("#moves__active");
        specialbg.style.display="none";
    });
    // X cross patch
    const pcross = document.querySelector(".patch__cross");
    pcross.addEventListener('click', ()=>{
        const patch = document.querySelector(".patch__notes");
        patch.style.display = "none";
    });
    const patchbtn = document.querySelector(".patch__btn");
    patchbtn.addEventListener('click', ()=>{
        pcross.style.display="block";
        document.querySelector(".patch__notes").style.display="block";
    });
}