window.onload = function() {
    const styling = [
        {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.yhpI', css:[{prop:'display', val:'block'},]},
        {clnaam:'.yManaI', css:[{prop:'display', val:'block'},]},
        {clnaam:'.ySPI', css:[{prop:'display', val:'block'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.overlay__icon1', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.overlay__icon2', css:[{prop:'opacity', val:'1'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    document.querySelector(".manaContainerI").style.display="flex";
    const ymanai = document.querySelector(".yManaI");
    const ymanaiT = ymanai.dataset.ymanai;
    document.querySelector(".yManaI").innerHTML = ymanaiT;

    document.querySelector(".special__points__container").style.display="flex";
    const yspi = document.querySelector(".ySPI");
    const yspiT = yspi.dataset.yspi;
    document.querySelector(".ySPI").innerHTML = yspiT;
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
    const ocross = document.querySelector(".overlayx");
    ocross.addEventListener('click', ()=>{
        const menu = document.querySelector(".overlay__units");
        menu.style.display = "none";
        const bg = document.querySelector("#overlay__active");
        bg.style.display = "none";
    });
}
