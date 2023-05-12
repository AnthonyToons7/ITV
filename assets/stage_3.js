let parlock=0;
let stunlock=0;
let bleedtimer=0;
let ybleedtimer=0;
let burntimer=0;
let oppburntimer=0;
let exploCounter=0;
// spellbook!
function spellbookI() {
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = ymanai.dataset.ymanai;
        if (ymanaiF < 135){
            const spell__styling = [
                {clnaam:'.spells__dmg', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.spells__heal', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.spells__glitch', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.spells__item', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.spells__mana', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.cast__dmg', css:[{prop:'display', val:'none'}]},
                {clnaam:'.cast__heal', css:[{prop:'display', val:'none'},]},
                {clnaam:'.cast__glitch', css:[{prop:'display', val:'none'},]},
                {clnaam:'.cast__item', css:[{prop:'display', val:'none'},]},
                {clnaam:'.cast__mana', css:[{prop:'display', val:'none'},]}
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        let divs = document.querySelectorAll('hlfont'), i;
        for (i = 0; i < divs.length; ++i) {
            divs[i].style.color = "#730000";
        }
    }
    const spell__styling = [
        {clnaam:'#spells', css:[{prop:'display', val:'block'}]},
        {clnaam:'.spellx', css:[{prop:'display', val:'block'}]},
        {clnaam:'#bookactive', css:[{prop:'display', val:'block'}]},
        {clnaam:'.spellsI', css:[{prop:'display', val:'flex'},]}
    ];
    spell__styling.forEach(spell__styling2 => {
        const els = document.querySelectorAll(spell__styling2.clnaam);
        for(const el of els){
            spell__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    if (document.querySelector(".shockeff").style.display === "block" && parlock < 2){
        let divs = document.querySelectorAll('hlfont'), i;
        for (i = 0; i < divs.length; ++i) {
            divs[i].style.color = "#730000";
        }
        if (ymanaiF >= 35) {
            const spell__styling = [
                {clnaam:'.spells__item', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'}]},
                {clnaam:'.cast__item', css:[{prop:'display', val:'block'},]},
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (ymanaiF >= 40) {
            const spell__styling = [
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.spells__mana', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.cast__mana', css:[{prop:'display', val:'block'},]}
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (ymanaiF >= 65) {
            const spell__styling = [
                {clnaam:'.spells__heal', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'}]},
                {clnaam:'.cast__heal', css:[{prop:'display', val:'block'},]}
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
    }
    else{
        // options not available when mana is low
        if (ymanaiF >= 30) {
            const spell__styling = [
                {clnaam:'.spells__item', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'}]},
                {clnaam:'.cast__item', css:[{prop:'display', val:'block'},]},
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (ymanaiF >= 40) {
            const spell__styling = [
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.spells__mana', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.cast__mana', css:[{prop:'display', val:'block'},]}
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (ymanaiF >= 65) {
            const spell__styling = [
                {clnaam:'.spells__heal', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'}]},
                {clnaam:'.cast__heal', css:[{prop:'display', val:'block'},]}
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (ymanaiF >= 55) {
            const spell__styling = [
                {clnaam:'.spells__dmg', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'}]},
                {clnaam:'.cast__dmg', css:[{prop:'display', val:'block'},]}
            ];
            spell__styling.forEach(spell__styling2 => {
                const els = document.querySelectorAll(spell__styling2.clnaam);
                for(const el of els){
                    spell__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (ymanaiF >= 135) {
            const styling = [
                {clnaam:'.cast__glitch', css:[{prop:'display', val:'block'},]},
                {clnaam:'.spells__glitch', css:[{prop:'color', val:'#fff'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
    }
    // spell cost
        // heal spell
        document.querySelector(".manaContainerI").style.display="flex";
        const manacosthp = document.querySelector(".spells__heal");
        let manacostheal = manacosthp.dataset.manacosthp;
        document.querySelector(".spells__heal").innerHTML = ' ' + manacostheal + ' mana';
        // damage spell
        const manacostdmg = document.querySelector(".spells__dmg");
        let manacostdamage = manacostdmg.dataset.manacostdmg;
        document.querySelector(".spells__dmg").innerHTML = ' ' + manacostdamage + ' mana';
        // overclock
        const manacostglitch = document.querySelector(".spells__glitch");
        let manacostglitching = manacostglitch.dataset.manacostglitch;
        document.querySelector(".spells__glitch").innerHTML = ' ' + manacostglitching + ' mana';
        // item spell
        const manacostitem = document.querySelector(".spells__item");
        let manacostitems = manacostitem.dataset.manacostitem;
        document.querySelector(".spells__item").innerHTML = ' ' + manacostitems + ' mana';
        // mana spell
        const manacostmana = document.querySelector(".spells__mana");
        let manacostmanaa = manacostmana.dataset.manacostmana;
        document.querySelector(".spells__mana").innerHTML = ' ' + manacostmanaa + ' mana';
}
function healSpell(){
    document.querySelector(".progress__bar").value += 7.5;
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellsI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#bookactive', css:[{prop:'display', val:'none'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const yhpi = document.querySelector(".yhpI");
    const determination = Math.floor(Math.random() * 100) + 1;
    const manacosthp = document.querySelector(".spells__heal");
    let manacostheal = manacosthp.dataset.manacosthp;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) - manacostheal;
    document.querySelector(".yManaI").innerHTML = ymanaiF;
    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;
    if (determination <= 75){
        let healing = 170;
        let healthgain = Number(yhpi.dataset.yhpi) + healing;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', healthgain);
        yhpi.innerHTML = healthgain;
        document.querySelector(".healSpellAmt").innerHTML = '+' + healing;
        document.querySelector(".healeff").style.display="block";
        document.querySelector(".healSpellAmt").style.display="block";
        setTimeout(() => {
                document.querySelector(".healeff").style.display="none";
                document.querySelector(".healSpellAmt").style.display="none";
            }, 1000)
    }
    if (determination > 75){
        const punishdmg = 55;
        let healthloss = Number(yhpi.dataset.yhpi) - punishdmg;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', healthloss);
        document.querySelector(".yhpI").innerHTML = healthloss;
        document.querySelector(".punishdmg").innerHTML = '-' + punishdmg;
        document.querySelector(".punishdmg").style.display="block";
        document.querySelector(".spell__result").style.display="block";
        document.querySelector(".spell__result").innerHTML = 'Spell failed...';
    }
    const health = yhpi.dataset.yhpi
    if (health < 1 ) {
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
            {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        return;
    }
    setTimeout(oppAtk, 1200);
}
function dmgSpell(){
    document.querySelector(".progress__bar").value += 9;
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellsI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#bookactive', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spell__result', css:[{prop:'display', val:'block'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const determination = Math.floor(Math.random() * 100) + 1;
    const manacostdmg = document.querySelector(".spells__dmg");
    const manacostdamage = manacostdmg.dataset.manacostdmg;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) - manacostdamage;

    document.querySelector(".yManaI").innerHTML = ymanaiF;
    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;
    if (determination <= 55){
        document.querySelector(".dmgContaineri").style.opacity="1";
        let spell__dmg = 300;
        const hpi = document.querySelector(".hpI");
        let health = hpi.dataset.hpi - spell__dmg;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + spell__dmg + '<br>';
        document.querySelector("body").classList.add("active");
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    if (determination > 35){
        const punishdmg = 75;
        const yhpi = document.querySelector(".yhpI");
        let healthloss = Number(yhpi.dataset.yhpi) - punishdmg;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', healthloss);
        document.querySelector(".yhpI").innerHTML = healthloss;
        document.querySelector(".punishdmg").innerHTML = '-' + punishdmg;
        document.querySelector(".punishdmg").style.display="block";
        document.querySelector(".spell__result").innerHTML = 'Spell failed...';
    }
    setTimeout(oppAtk, 1200);
}
function overclockSpell() {
    document.querySelector(".progress__bar").value += 20;
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellsI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#bookactive', css:[{prop:'display', val:'none'},]},
        {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'block'},]},
        {clnaam:'.spell__result', css:[{prop:'display', val:'block'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });

    const yhpi = document.querySelector(".yhpI");
    let sacrifice = 100;
    document.querySelector(".sacrificeAmt").innerHTML = '-' + sacrifice + '<br>';
    let health = yhpi.dataset.yhpi - sacrifice;
    yhpi.removeAttribute('data-yhpI');
    yhpi.setAttribute('data-yhpI', health);

    const manacostglitch = document.querySelector(".spells__glitch");
    const manacostoverclock = manacostglitch.dataset.manacostglitch;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) - manacostoverclock;

    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;

    const determination = Math.floor(Math.random() * 100) + 1;
    if (determination <= 15) {
        let spell__dmg = 800;
        const hpi = document.querySelector(".hpI");
        let health = hpi.dataset.hpi - spell__dmg;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + spell__dmg + '<br>';
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    if (determination > 10){
        document.querySelector(".spell__result").innerHTML = 'Spell failed...';
    }
    setTimeout(oppAtk, 1200);
}
function itemSpell() {
    document.querySelector(".progress__bar").value += 5.5;
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#bookactive', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spell__result', css:[{prop:'display', val:'block'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });

    const manacostitem = document.querySelector(".spells__item");
    const manacostitems = manacostitem.dataset.manacostitem;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) - manacostitems;
    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;

    const determination = Math.floor(Math.random() * 100) + 1;
    if (determination <= 70) {
        const spellselect = Math.floor(Math.random() * 100) + 1;
        if (spellselect <= 25) {
            const hppotion = document.querySelector(".hpotions");
            const hppotionamt = Number(hppotion.dataset.hppotion) + 1;
            hppotion.removeAttribute('data-hppotion');
            hppotion.setAttribute('data-hppotion', hppotionamt);
            document.querySelector(".hpotions").innerHTML = 'x' + hppotionamt;
            document.querySelector(".spell__result").innerHTML = 'recieved x1 health potion!';
        }
        else if (spellselect > 25 && spellselect <= 50) {
            const dmgpotion = document.querySelector(".dmgpotions");
            const dmgpotionamt = Number(dmgpotion.dataset.dmgpotion) + 1;
            dmgpotion.removeAttribute('data-dmgpotion');
            dmgpotion.setAttribute('data-dmgpotion', dmgpotionamt);
            document.querySelector(".dmgpotions").innerHTML = 'x' + dmgpotionamt;
            document.querySelector(".spell__result").innerHTML = 'recieved x1 damage potion!';
        }
        else if (spellselect > 50 && spellselect <= 75){
            const luckycharm = document.querySelector(".luckycharms");
            const charmamt = Number(luckycharm.dataset.luckycharm) + 1;
            luckycharm.removeAttribute('data-luckycharm');
            luckycharm.setAttribute('data-luckycharm', charmamt);
            document.querySelector(".luckycharms").innerHTML = 'x' + charmamt;
            document.querySelector(".spell__result").innerHTML = 'recieved x1 lucky charm!';
        }
        else if (spellselect > 75 && spellselect <= 100){
            const sppotion = document.querySelector(".sppotions");
            const sppotionamt = Number(sppotion.dataset.sppotion) + 1;
            sppotion.removeAttribute('data-sppotion');
            sppotion.setAttribute('data-sppotion', sppotionamt);
            document.querySelector(".sppotions").innerHTML = 'x' + sppotionamt;
            document.querySelector(".spell__result").innerHTML = 'recieved x1 SP potion!';
        }
    }
    else {
        const selector = [".rngI", ".itemsI", ".spellbookI", ".specialmoves__impossible"];
        selector.forEach(selectors => document.querySelector(selectors).style.display="inline-block");
        document.querySelector(".spell__result").innerHTML = 'Spell failed...';
    }
    setTimeout(oppAtk, 1200);
}
function manaSpell(){
    document.querySelector(".progress__bar").value += 6;
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#bookactive', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spell__result', css:[{prop:'display', val:'block'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });

    const manacostmana = document.querySelector(".spells__mana");
    const manacostmanaa = manacostmana.dataset.manacostmana;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) - manacostmanaa;
    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;
    const determination = Math.floor(Math.random() * 100) + 1;
    if (determination <= 90) {
        let managain = Math.floor(Math.random() * 20) + 50;
        const ymanai = document.querySelector(".yManaI");
        let ymanaiF = Number(ymanai.dataset.ymanai) + managain;
        ymanai.removeAttribute('data-yManaI');
        ymanai.setAttribute('data-yManaI', ymanaiF);
        document.querySelector(".yManaI").innerHTML = ymanaiF;
        document.querySelector(".spell__result").innerHTML = 'Recieved +' + managain + ' mana!';
    }
    if (determination > 90){
        const ymanai = document.querySelector(".yManaI");
        let ymanaiF = 0;
        ymanai.removeAttribute('data-yManaI');
        ymanai.setAttribute('data-yManaI', ymanaiF);
        document.querySelector(".yManaI").innerHTML = ymanaiF;
        document.querySelector(".spell__result").innerHTML = 'Spell failed...';
    }
    setTimeout(oppAtk, 1200);
}
// items!
function itemsI() {
    document.querySelector(".itemx").style.display="block";
    const menubg = document.querySelector("#menu__active");
    const menu = document.querySelector(".item__Menu__Impossible");
    const inven = document.querySelector("#inven");
    menubg.style.display="block";
    menu.style.display="flex";
    inven.style.display="block";
    // health potions amount and out of stock
    const hppotion = document.querySelector(".hpotions");
    const hppotionamt = hppotion.dataset.hppotion;
    hppotion.removeAttribute('data-hppotion');
    hppotion.setAttribute('data-hppotion', hppotionamt);
    document.querySelector(".hpotions").innerHTML = 'x' + hppotionamt;
    if (hppotionamt < 1){
        const potions = document.querySelector("#healUse");
        potions.style.display="none";
    }
    else if(hppotionamt >= 1){
        const potions = document.querySelector("#healUse");
        potions.style.display="block";
    }
    // dmg potions
    const dmgpotion = document.querySelector(".dmgpotions");
    const dmgpotionamt = dmgpotion.dataset.dmgpotion;
    dmgpotion.removeAttribute('data-dmgpotion');
    dmgpotion.setAttribute('data-dmgpotion', dmgpotionamt);
    document.querySelector(".dmgpotions").innerHTML = 'x' + dmgpotionamt;
    if (dmgpotionamt < 1){
        const potions = document.querySelector("#dmgUse");
        potions.style.display="none";
    }
    else if(dmgpotionamt >= 1){
        const potions = document.querySelector("#dmgUse");
        potions.style.display="block";
    }
    // lucky charms
    const luckycharm = document.querySelector(".luckycharms");
    const luckycharmamt = luckycharm.dataset.luckycharm;
    luckycharm.removeAttribute('data-luckycharm');
    luckycharm.setAttribute('data-luckycharm', luckycharmamt);
    document.querySelector(".luckycharms").innerHTML = 'x' + luckycharmamt;
    if (luckycharmamt < 1){
        const charms = document.querySelector("#charmUse");
        charms.style.display="none";
    }
    else if(luckycharmamt >= 1){
        const charms = document.querySelector("#charmUse");
        charms.style.display="block";
    }
    // special point potions
    const sppotion = document.querySelector(".sppotions");
    const sppotionamt = sppotion.dataset.sppotion;
    sppotion.removeAttribute('data-sppotion');
    sppotion.setAttribute('data-sppotion', sppotionamt);
    document.querySelector(".sppotions").innerHTML = 'x' + sppotionamt;
    if (sppotionamt < 1){
        const potions = document.querySelector("#spUse");
        potions.style.display="none";
    }
    else if(sppotionamt >= 1){
        const potions = document.querySelector("#spUse");
        potions.style.display="block";
    }
    // anti crit
    const cshield = document.querySelector(".critshields");
    const cshieldamt = cshield.dataset.cshield;
    cshield.removeAttribute('data-cshield');
    cshield.setAttribute('data-cshield', cshieldamt);
    document.querySelector(".critshields").innerHTML = 'x' + cshieldamt;
    if (cshieldamt < 1){
        const shields = document.querySelector("#critUse");
        shields.style.display="none";
    }
}
function healI() {
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#menu__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.item__Menu__Impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.healeff', css:[{prop:'display', val:'block'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const yhpi = document.querySelector(".yhpI");
    // random heal amount
    const healing = Math.floor(Math.random() * 45) + 180;
    const healthgain = Number(yhpi.dataset.yhpi) + healing;
    yhpi.removeAttribute('data-yhpI');
    yhpi.setAttribute('data-yhpI', healthgain);
    console.log(healing);
    // health potions amount
    const hppotion = document.querySelector(".hpotions");
    let hppotionamt = hppotion.dataset.hppotion - 1;
    hppotion.removeAttribute('data-hppotion');
    hppotion.setAttribute('data-hppotion', hppotionamt);
    document.querySelector(".hpotions").innerHTML = 'Health potions x' + hppotionamt;
    document.querySelector(".healAmt").innerHTML = '+' + healing;
    document.querySelector(".healAmt").style.display="block";
    setTimeout(() => {
        const selector = [".healeff", ".healAmt"];
        selector.forEach(selectors => document.querySelector(selectors).style.display="none");
        }, 1000)
// OPPONENT ATTACK AFTER HEAL!!
setTimeout(function() {
    document.querySelector(".dmg__Container__opp__impossible").style.opacity="1";
    setTimeout(oppAtk, 1200);
})};
function dmgI() {
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#menu__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.item__Menu__Impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgeff', css:[{prop:'display', val:'block'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    // dmg potion amount
    const dmgpotion = document.querySelector(".dmgpotions");
    let dmgpotionamt = dmgpotion.dataset.dmgpotion - 1;
    dmgpotion.removeAttribute('data-dmgpotion');
    dmgpotion.setAttribute('data-dmgpotion', dmgpotionamt);
    document.querySelector(".dmgpotions").innerHTML = 'Damage potions x' + dmgpotionamt;
// OPPONENT ATTACK AFTER BOOST!!
    const delayInMilliseconds = 1200;
    setTimeout(function() {
    document.querySelector(".dmg__Container__opp__impossible").style.opacity="1";
        // YOUR HEALTH, OPPONENT DMG
        let x = Math.floor(Math.random() * 31) + 20;
        document.querySelector(".dmgI").innerHTML = x;
        let crit = Math.floor(Math.random() * 100) + 1;
        const yhpi = document.querySelector(".yhpI");
        const yhealth = document.querySelector(".yhpI");
        if (!yhealth.classList.contains('active')){
            yhealth.classList.add('active');
        }
        setTimeout(() => {
        yhealth.classList.remove('active')
        }, 500)
    
        if (crit <= 20) {
            document.querySelector(".crit2").style.display="block";
            const audio = document.querySelector(".critsfx");
            audio.play();
            console.log("Crit!")
            let mult = 2;
            let critical = x * mult;
            document.querySelector(".dmgI").innerHTML = '-' + critical + '<br>';
            let health = yhpi.dataset.yhpi - critical;
            yhpi.removeAttribute('data-yhpI');
            yhpi.setAttribute('data-yhpI', health);
        }
        else {
            document.querySelector(".crit2").style.display="none";
            document.querySelector(".dmgI").innerHTML = '-' + x + '<br>';
            let health = yhpi.dataset.yhpi - x;
            yhpi.removeAttribute('data-yhpI');
            yhpi.setAttribute('data-yhpI', health);
        }
        let health = yhpi.dataset.yhpi;
        document.querySelector(".yhpI").innerHTML = health;
        if (health <= 50) {
            const border = document.querySelector(".inner-border");
            border.style.borderColor="#8b0000";
        }
        if (health < 1 ) {
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
        const selector = [".boostedatk", ".spellbookI", ".itemsI", ".specialmoves__impossible"];
        selector.forEach(selectors => document.querySelector(selectors).style.display="inline-block");
        }, delayInMilliseconds);
        setTimeout(gain__mana, 1000)
}
function attackIB() {
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.item__Menu__Impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.boostedatk', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const container = document.querySelector(".ydmgI");
    let x = Math.floor(Math.random() * 61) + 180;
    document.querySelector(".ydmgI").innerHTML = x;
    if (!container.classList.contains('active')){
        container.classList.add('active');
    }
    setTimeout(() => {
    container.classList.remove('active')
    }, 500)
    const hpi = document.querySelector(".hpI");
    let health = hpi.dataset.hpi - x;
    hpi.removeAttribute('data-hpi');
    hpi.setAttribute('data-hpi', health);
    document.querySelector(".hpI").innerHTML = health;
    document.querySelector(".ydmgI").innerHTML = '-' + x + '<br>';
    if (health < 1 ) {
        const innerborder = document.querySelector(".inner-border"); 
        let btn = document.createElement("button");
        btn.innerHTML = "Continuing...";
        btn.type = "submit";
        btn.classList.add("btns");
        btn.classList.add("continue");
        btn.onclick = setTimeout(proceed, 2000);
        innerborder.appendChild(btn);
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
            {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        return;
    }
    setTimeout(oppAtk, 1200);
}
function charmI(){
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#menu__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.item__Menu__Impossible', css:[{prop:'display', val:'none'},]},
        // anti status effects
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.shockeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'#flexbleed', css:[{prop:'display', val:'none'},]},
        {clnaam:'.boostedatk', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    // charm amount
    const luckycharm = document.querySelector(".luckycharms");
    let charmamt = luckycharm.dataset.luckycharm - 1;
    luckycharm.removeAttribute('data-luckycharm');
    luckycharm.setAttribute('data-luckycharm', charmamt);
    document.querySelector(".luckycharms").innerHTML = 'x' + charmamt;
    setTimeout(oppAtk, 1200);
}
function sppotionUse(){
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#menu__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.item__Menu__Impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spgain', css:[{prop:'display', val:'block'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'opacity', val:'1'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    // sp potion amount
    const sppotion = document.querySelector(".sppotions");
    let sppotionamt = sppotion.dataset.sppotion - 1;
    sppotion.removeAttribute('data-sppotion');
    sppotion.setAttribute('data-sppotion', sppotionamt);
    document.querySelector(".sppotions").innerHTML = 'x' + sppotionamt;

    let spgain = 105;
    const yspi = document.querySelector(".ySPI");
    let yspiF = Number(yspi.dataset.yspi) + spgain;
    yspi.removeAttribute('data-yspi');
    yspi.setAttribute('data-yspi', yspiF);
    document.querySelector(".ySPI").innerHTML = yspiF;
    document.querySelector(".spgain").innerHTML = '+' + spgain;
    document.querySelector(".specialmoves__impossible").innerHTML = "Special moves";
    setTimeout(oppAtk, 1200);
}
function shieldUse(){
    const styling = [
        {clnaam:'.shieldeff', css:[{prop:'display', val:'block'},]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#menu__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.item__Menu__Impossible', css:[{prop:'display', val:'none'},]},
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    // sp potion amount
    const cshield = document.querySelector(".critshields");
    let cshieldamt = cshield.dataset.cshield - 1;
    cshield.removeAttribute('data-cshield');
    cshield.setAttribute('data-cshield', cshieldamt);
    document.querySelector(".critshields").innerHTML = 'x' + cshieldamt;
    setTimeout(oppNoCrit, 1200);
}
// special moves
function specialmovesI(){
    const special__styling = [
        {clnaam:'.special__moves__impossible', css:[{prop:'display', val:'flex'}]},
        {clnaam:'.specialx', css:[{prop:'display', val:'block'},]},
        {clnaam:'#moves__active', css:[{prop:'display', val:'block'}]},
        {clnaam:'#special__moves', css:[{prop:'display', val:'block'},]}
    ];
    special__styling.forEach(special__styling2 => {
        const els = document.querySelectorAll(special__styling2.clnaam);
        for(const el of els){
            special__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    if (document.querySelector(".shockeff").style.display === "block" && parlock < 2) {
        const special__styling = [
            {clnaam:'.specials__blood', css:[{prop:'color', val:'#fff'},]},
            {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'},]},
            {clnaam:'.use__blood', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specials__crash', css:[{prop:'color', val:'#fff'},]},
            {clnaam:'.use__crash', css:[{prop:'display', val:'none'},]}
        ];
        special__styling.forEach(special__styling2 => {
            const els = document.querySelectorAll(special__styling2.clnaam);
            for(const el of els){
                special__styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    else {
        const spell__styling = [
            {clnaam:'.specials__blood', css:[{prop:'color', val:'#fff'},]},
            {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'},]},
            {clnaam:'.use__blood', css:[{prop:'display', val:'block'},]},
            {clnaam:'.specials__crash', css:[{prop:'color', val:'#fff'},]},
            {clnaam:'.use__crash', css:[{prop:'display', val:'block'},]}
        ];
        spell__styling.forEach(spell__styling2 => {
            const els = document.querySelectorAll(spell__styling2.clnaam);
            for(const el of els){
                spell__styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        
        const yspi = document.querySelector(".ySPI");
        let specialpoints_ = yspi.dataset.yspi;
        if (specialpoints_ >= 40){
            const special__styling = [
                {clnaam:'.hlfont', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.specials__blood', css:[{prop:'color', val:'#fff'},]},
                {clnaam:'.use__blood', css:[{prop:'display', val:'block'},]}
            ];
            special__styling.forEach(special__styling2 => {
                const els = document.querySelectorAll(special__styling2.clnaam);
                for(const el of els){
                    special__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            let divs = document.querySelectorAll('hlfont'), i;
            for (i = 0; i < divs.length; ++i) {
                divs[i].style.color = "#fff";
            }
        }
        if (specialpoints_ < 40){
            const special__styling = [
                {clnaam:'.hlfont', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.specials__blood', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.use__blood', css:[{prop:'display', val:'none'},]}
            ];
            special__styling.forEach(special__styling2 => {
                const els = document.querySelectorAll(special__styling2.clnaam);
                for(const el of els){
                    special__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            let divs = document.querySelectorAll('hlfont'), i;
            for (i = 0; i < divs.length; ++i) {
                divs[i].style.color = "#730000";
            }
        }
        if (specialpoints_ < 50){
            const special__styling = [
                {clnaam:'.hlfont', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.specials__crash', css:[{prop:'color', val:'#730000'},]},
                {clnaam:'.use__crash', css:[{prop:'display', val:'none'},]}
            ];
            special__styling.forEach(special__styling2 => {
                const els = document.querySelectorAll(special__styling2.clnaam);
                for(const el of els){
                    special__styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        let divs = document.querySelectorAll('hlfont'), i;
        for (i = 0; i < divs.length; ++i) {
            divs[i].style.color = "#730000";
        }
        };
        // cost specials
        const crashcost = document.querySelector(".specials__crash");
        let crashcosts = crashcost.dataset.crashcost;
        document.querySelector(".specials__crash").innerHTML = ' ' + crashcosts + ' SP'; 

        const bloodcost = document.querySelector(".specials__blood");
        let bloodcosts = bloodcost.dataset.bloodcost;
        document.querySelector(".specials__blood").innerHTML = ' ' + bloodcosts + ' SP';
    }
    const yspi = document.querySelector(".ySPI");
    let specialpoints_ = yspi.dataset.yspi;
    if (specialpoints_ < 40) {
        const overlay__styling = [
            {clnaam:'.special__moves__impossible', css:[{prop:'display', val:'none'},]},
            {clnaam:'#special__moves', css:[{prop:'display', val:'none'},]},
            {clnaam:'#moves__active', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialx', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'opacity', val:'0.2'},]}
        ];
        overlay__styling.forEach(overlay__styling2 => {
            const els = document.querySelectorAll(overlay__styling2.clnaam);
            for(const el of els){
                overlay__styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        document.querySelector(".specialmoves__impossible").innerHTML = "Out of SP";
        console.log("Out of SP!!!");
    }
    else if (specialpoints_ >= 40) {
        const overlay__styling = [
            {clnaam:'.special__moves__impossible', css:[{prop:'display', val:'flex'},]},
            {clnaam:'#special__moves', css:[{prop:'display', val:'block'},]},
            {clnaam:'#moves__active', css:[{prop:'display', val:'block'},]},
            {clnaam:'.specialx', css:[{prop:'display', val:'block'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'opacity', val:'1'},]}
        ];
        overlay__styling.forEach(overlay__styling2 => {
            const els = document.querySelectorAll(overlay__styling2.clnaam);
            for(const el of els){
                overlay__styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        document.querySelector(".specialmoves__impossible").innerHTML = "Special moves";
    }
}
function crashBusterI(){
    const styling = [
        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#moves__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.special__moves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const container = document.querySelector(".ydmgI");
    let x = Math.floor(Math.random() * 36) + 200;
    let crit = Math.floor(Math.random() * 100) + 1;

    const crashcost = document.querySelector(".specials__crash");
    const crashcosts = crashcost.dataset.crashcost;
    const yspi = document.querySelector(".ySPI");
    let yspiF = Number(yspi.dataset.yspi) - crashcosts;

    yspi.removeAttribute('data-yspi');
    yspi.setAttribute('data-yspi', yspiF);
    document.querySelector(".ySPI").innerHTML = yspiF;
    if (!container.classList.contains('active')){
        container.classList.add('active');
    }
    setTimeout(() => {
    container.classList.remove('active')
    }, 500);

    if (crit > 99) {
        document.querySelector("#crit").style.display="block";
        const audio = document.querySelector(".critsfx");
        audio.play();
        console.log("Crit!");
        let mult = 2;
        let critical = x * mult;
        const hpi = document.querySelector(".hpI");
        let health = hpi.dataset.hpi - critical;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + critical + '<br>';
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    if (crit <= 99){
        const hpi = document.querySelector(".hpI");
        let health = hpi.dataset.hpi - x;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + x + '<br>';
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    setTimeout(oppAtk, 1200);
}
function bloodshotI(){
    const styling = [
        {clnaam:'#opp__flexbleed', css:[{prop:'display', val:'flex'},]},
        {clnaam:'.opp__bleed', css:[{prop:'display', val:'block'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.special__moves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'#moves__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const container = document.querySelector(".ydmgI");
    const bloodcost = document.querySelector(".specials__blood");
    const bloodcosts = bloodcost.dataset.bloodcost;
    const yspi = document.querySelector(".ySPI");
    let yspiF = Number(yspi.dataset.yspi) - bloodcosts;

    yspi.removeAttribute('data-yspi');
    yspi.setAttribute('data-yspi', yspiF);
    document.querySelector(".ySPI").innerHTML = yspiF;
    if (!container.classList.contains('active')){
        container.classList.add('active');
    }
    setTimeout(() => {
    container.classList.remove('active')
    }, 500);

    let x = Math.floor(Math.random() * 15) + 100;
    const hpi = document.querySelector(".hpI");
    let health = Number(hpi.dataset.hpi) - x;
    hpi.removeAttribute('data-hpi');
    hpi.setAttribute('data-hpi', health);
    document.querySelector(".hpI").innerHTML = health;
    document.querySelector(".ydmgI").innerHTML = '-' + x + '<br>';
    if (health < 1 ) {
        const innerborder = document.querySelector(".inner-border"); 
        let btn = document.createElement("button");
        btn.innerHTML = "Continuing...";
        btn.type = "submit";
        btn.classList.add("btns");
        btn.classList.add("continue");
        btn.onclick = setTimeout(proceed, 2000);
        innerborder.appendChild(btn);
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
            {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        return;
    }
    setTimeout(oppAtk, 1200);
    bleedtimer = 0;
}
function eOverdrive(){
    const btn__styling = [
        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.explosive__overdrive', css:[{prop:'display', val:'none'},]},
        {clnaam:'.normal__void', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crazed__void', css:[{prop:'display', val:'block'},]},
        {clnaam:'.crazedcresteff', css:[{prop:'display', val:'block'},]},
        {clnaam:'.explosive__atk', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.opp__buff', css:[{prop:'display', val:'block'},]}
    ];
    btn__styling.forEach(btn__styling2 => {
        const els = document.querySelectorAll(btn__styling2.clnaam);
        for(const el of els){
            btn__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    document.querySelector(".progress__bar").classList.add("progress-red");
}
function explosiveAtk(){
    document.querySelector(".progress__bar").value -= 33.33;
    const btn__styling = [
        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]},
        {clnaam:'.explosive__atk', css:[{prop:'display', val:'none'},]},
        {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'block'},]}
    ];
    btn__styling.forEach(btn__styling2 => {
        const els = document.querySelectorAll(btn__styling2.clnaam);
        for(const el of els){
            btn__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    document.querySelector("body").classList.remove("active")
    const container = document.querySelector(".ydmgI");
    if (!container.classList.contains('active')){
        container.classList.add('active');
    }
    setTimeout(() => {
    container.classList.remove('active')
    }, 500)
    let burn = Math.floor(Math.random() * 100) + 1;
    let crit = Math.floor(Math.random() * 100) + 1;
    if (crit <= 20){
        document.getElementById("crit").style.display="block";
        let x = Math.floor(Math.random() * 100) + 180;
        document.querySelector(".ydmgI").innerHTML = x;
        const hpi = document.querySelector(".hpI");
        let critdmg = x * 2;
        let health = hpi.dataset.hpi - critdmg;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + critdmg + '<br>';
    }
    else if (crit > 20) {
        let x = Math.floor(Math.random() * 100) + 160;
        document.querySelector(".ydmgI").innerHTML = x;
        const hpi = document.querySelector(".hpI");
        let health = hpi.dataset.hpi - x;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + x + '<br>';
    }
    let corrupt_resist=20;
    const yhpi = document.querySelector(".yhpI");
    let yhealth = yhpi.dataset.yhpi - corrupt_resist;
    yhpi.removeAttribute('data-yhpi');
    yhpi.setAttribute('data-yhpi', yhealth);
    document.querySelector(".yhpI").innerHTML = yhealth;
    document.querySelector(".sacrificeAmt").innerHTML = '-' + corrupt_resist + '<br>';
    if (burn >= 50){
        const styling = [
            {clnaam:'#flexburn', css:[{prop:'display', val:'flex'},]},
            {clnaam:'.burneff', css:[{prop:'display', val:'block'},]},
            {clnaam:'burncont', css:[{prop:'display', val:'block'},]},
            {clnaam:'#opp__flexburn', css:[{prop:'display', val:'flex'},]},
            {clnaam:'.opp__burn', css:[{prop:'display', val:'block'},]},
            {clnaam:'opp__burncont', css:[{prop:'display', val:'block'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    else;
    const hpi = document.querySelector(".hpI");
    let health = hpi.dataset.hpi;
    if (health < 1 ) {
        const innerborder = document.querySelector(".inner-border"); 
        let btn = document.createElement("button");
        btn.innerHTML = "Continuing...";
        btn.type = "submit";
        btn.classList.add("btns");
        btn.classList.add("continue");
        btn.onclick = setTimeout(proceed, 2000);
        innerborder.appendChild(btn);
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
            {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        return;
    }
    exploCounter++;
    console.log(exploCounter);
    setTimeout(SPoppAtk, 1200);
}
function SPoppAtk() {
    if (document.querySelector(".shieldeff").style.display === "block"){
        setTimeout(oppNoCrit, 100);}
    else {
        if (document.querySelector(".progress__bar").value >= 100 && !document.querySelector(".progress__bar").classList.contains("progress-red")){
            document.querySelector(".explosive__overdrive").style.display="inline-block";
        }
        if (exploCounter < 3){
            const styling = [
                {clnaam:'.explosive__atk', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.dmg__Container__opp__impossible', css:[{prop:'opacity', val:'1'},]},
                {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'none'},]},
                {clnaam:'.punishdmg', css:[{prop:'display', val:'none'},]},
                {clnaam:'.spell__result', css:[{prop:'display', val:'none'},]},
                {clnaam:'.spgain', css:[{prop:'display', val:'none'},]},
                {clnaam:'#crit', css:[{prop:'display', val:'none'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        if (exploCounter >= 3) {
            const styling = [
                {clnaam:'.dmg__Container__opp__impossible', css:[{prop:'opacity', val:'1'},]},
                {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'none'},]},
                {clnaam:'.punishdmg', css:[{prop:'display', val:'none'},]},
                {clnaam:'.spell__result', css:[{prop:'display', val:'none'},]},
                {clnaam:'.spgain', css:[{prop:'display', val:'none'},]},
                {clnaam:'#crit', css:[{prop:'display', val:'none'},]},

                {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.skip', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.explosive__atk', css:[{prop:'display', val:'none'},]},
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
        }
        let atkoption = Math.floor(Math.random() * 100) + 1;
        if (atkoption > 85){
            const hpi = document.querySelector('.hpI');
            const healing = Math.floor(Math.random() * 81) + 100;
            const healthgain = Number(hpi.dataset.hpi) + healing;
            const healcontainer = document.querySelector('.opp__heal__amt');
            document.querySelector(".dmg__Container__opp__impossible").style.opacity="0";
            hpi.removeAttribute('data-hpI');
            hpi.setAttribute('data-hpI', healthgain);
            healcontainer.innerHTML = '+' + healing;
            setTimeout(function (){healcontainer.style.display = "block"}, 1000);
        }
        if (atkoption <= 85){
            const yhpi = document.querySelector(".yhpI");
            let x = Math.floor(Math.random() * 40) + 50;
            document.querySelector(".dmgI").innerHTML = x;
            const crit = Math.floor(Math.random() * 100) + 1;
            const bleed = Math.floor(Math.random() * 100) + 1;
            const yhealth = document.querySelector(".yhpI");
            if (!yhealth.classList.contains('active')){
                yhealth.classList.add('active');
            }
            setTimeout(()=> {yhealth.classList.remove('active'), 500});
            // crit
            if (crit <= 35) {
                document.querySelector(".crit2").style.display="block";
                const audio = document.querySelector(".critsfx");
                audio.play();
                console.log("Crit!");
                let mult = 4;
                let critical = x * mult;
                document.querySelector(".dmgI").innerHTML = '-' + critical + '<br>';
                let health = yhpi.dataset.yhpi - critical;
                yhpi.removeAttribute('data-yhpI');
                yhpi.setAttribute('data-yhpI', health);
            }
            else {
                document.querySelector(".crit2").style.display="none";
                document.querySelector(".dmgI").innerHTML = '-' + x + '<br>';
                let health = yhpi.dataset.yhpi - x;
                yhpi.removeAttribute('data-yhpI');
                yhpi.setAttribute('data-yhpI', health);
            }
            let health = yhpi.dataset.yhpi;
            document.querySelector(".yhpI").innerHTML = health;
            if (health < 1 ) {
                const styling = [
                    {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                    {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.skip', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.explosive__atk', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.boostedatk', css:[{prop:'display', val:'none'},]},
                    {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
                ];
                styling.forEach(styling2 => {
                    const els = document.querySelectorAll(styling2.clnaam);
                    for(const el of els){
                        styling2.css.forEach(cssprop => {
                            el.style[cssprop.prop] = cssprop.val;
                        });
                    }
                });
                return;
            }
            if (bleed <= 10) {
                const bleedeff = document.querySelector(".bleed__gif");
                bleedeff.style.display = "block";   
                document.querySelector("#flexbleed").style.display="flex";
                ybleedtimer = 0;
            }
        }
        setTimeout(gain__mana, 1000);
        setTimeout(turnoffhealth, 2000);
        // bleeding chance
        if (document.querySelector(".bleed__gif").style.display === "block"){
            const lambda = () => {
                setTimeout(bleeddamage, 1000);
            };   
            lambda();
        }
        if (document.querySelector(".opp__bleed").style.display === "block"){
            const lambda = () => {
                setTimeout(oppBleed, 1000);
            };   
            lambda();
        }
        if (document.querySelector(".burneff").style.display === "block"){
            const lambda = () => {
                setTimeout(burndamage, 1000);
            };   
            lambda();
        }
        if (document.querySelector(".opp__burn").style.display === "block"){
            const lambda = () => {
                setTimeout(oppburn, 1000);
            };   
            lambda();
        }
    }  
    checkSchock();
    checkStun();
    parlock++;
    stunlock++;
    document.querySelector(".spell__result").innerHTML = ' ';
}
// overlay units
function overlaymenu(){
    const overlay__styling = [
        {clnaam:'.overlay__units', css:[{prop:'display', val:'flex'},]},
        {clnaam:'#overlay__unit', css:[{prop:'display', val:'block'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'block'},]},
        {clnaam:'.overlayx', css:[{prop:'display', val:'block'},]},
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "0.4" && unit2.style.opacity === "0.4") {
        const overlay__styling = [
            {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
            {clnaam:'#overlay__unit', css:[{prop:'display', val:'none'},]},
            {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
            {clnaam:'.overlayx', css:[{prop:'display', val:'none'},]},
            {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]}
        ];
        overlay__styling.forEach(overlay__styling2 => {
            const els = document.querySelectorAll(overlay__styling2.clnaam);
            for(const el of els){
                overlay__styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        document.querySelector(".overlay__units__impossible").innerHTML = "Out of overlay units";
    }
    if (document.querySelector(".overlay__units__impossible").style.opacity === "0.2") {
        const overlay__styling = [
            {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
            {clnaam:'#overlay__unit', css:[{prop:'display', val:'none'},]},
            {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
            {clnaam:'.overlayx', css:[{prop:'display', val:'none'},]},
        ];
        overlay__styling.forEach(overlay__styling2 => {
            const els = document.querySelectorAll(overlay__styling2.clnaam);
            for(const el of els){
                overlay__styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    if (document.querySelector(".overlay__units__impossible").style.opacity === "1") {
        document.querySelector(".overlay__units__impossible").innerHTML = "Overlay units";
    }
}
function treason_discharge() {
    document.querySelector(".overlay__units__impossible").innerHTML = "Once per turn!";
    const overlay__styling = [
        {clnaam:'.use__discharge', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "1") {
        unit1.style.opacity = "0.4";
    }
    else if (unit1.style.opacity === "0.4" && unit2.style.opacity === "1"){
        unit2.style.opacity = "0.4";
    }
    document.querySelector("body").classList.remove("active")
    const container = document.querySelector(".ydmgI");
    if (!container.classList.contains('active')){
        container.classList.add('active');
    }
    setTimeout(() => {
    container.classList.remove('active')
    }, 500)
    let x = Math.floor(Math.random() * 57) + 50;
    let buffedatk = Number(x) + 65;
    document.querySelector(".ydmgI").innerHTML = buffedatk;
    const hpi = document.querySelector(".hpI");
    let health = hpi.dataset.hpi - x;
    hpi.removeAttribute('data-hpi');
    hpi.setAttribute('data-hpi', health);
    document.querySelector(".hpI").innerHTML = health;
    document.querySelector(".ydmgI").innerHTML = '-' + buffedatk + '<br>';
    if (health < 1 ) {
        const innerborder = document.querySelector(".inner-border"); 
        let btn = document.createElement("button");
        btn.innerHTML = "Continuing...";
        btn.type = "submit";
        btn.classList.add("btns");
        btn.classList.add("continue");
        btn.onclick = setTimeout(proceed, 2000);
        innerborder.appendChild(btn);
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
            {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
        return;
    }
    halvedOpp();
}
function regen_alpha() {
    document.querySelector(".overlay__units__impossible").innerHTML = "Once per turn!";
    const overlay__styling = [
        {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.use__alpha', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]}
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "1") {
        unit1.style.opacity = "0.4";
    }
    else if (unit1.style.opacity === "0.4" && unit2.style.opacity === "1"){
        unit2.style.opacity = "0.4";
    }
    const yhpi = document.querySelector(".yhpI");
    let healing = 1000;
    let healthgain = Number(yhpi.dataset.yhpi) + healing;
    yhpi.removeAttribute('data-yhpI');
    yhpi.setAttribute('data-yhpI', healthgain);
    yhpi.innerHTML = healthgain;
    document.querySelector(".healSpellAmt").innerHTML = '+' + healing;
    document.querySelector(".healeff").style.display="block";
    document.querySelector(".healSpellAmt").style.display="block";
    setTimeout(() => {
            document.querySelector(".healeff").style.display="none";
            document.querySelector(".healSpellAmt").style.display="none";
        }, 1000);
}
function regen_beta() {
    document.querySelector(".overlay__units__impossible").innerHTML = "Once per turn!";
    const overlay__styling = [
        {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]},
        {clnaam:'.use__beta', css:[{prop:'display', val:'none'},]}
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "1") {
        unit1.style.opacity = "0.4";
    }
    else if (unit1.style.opacity === "0.4" && unit2.style.opacity === "1"){
        unit2.style.opacity = "0.4";
    }
    let mr = 200;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) + mr;
    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;
}
function regen_gamma() {
    document.querySelector(".overlay__units__impossible").innerHTML = "Once per turn!";
    const overlay__styling = [
        {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]},
        {clnaam:'.use__gamma', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spgain', css:[{prop:'display', val:'block'},]}
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "1") {
        unit1.style.opacity = "0.4";
    }
    else if (unit1.style.opacity === "0.4" && unit2.style.opacity === "1"){
        unit2.style.opacity = "0.4";
    }
    let spgain = 250;
    const yspi = document.querySelector(".ySPI");
    let yspiF = Number(yspi.dataset.yspi) + spgain;
    yspi.removeAttribute('data-yspi');
    yspi.setAttribute('data-yspi', yspiF);
    document.querySelector(".ySPI").innerHTML = yspiF;
    document.querySelector(".spgain").innerHTML = '+' + spgain;
    document.querySelector(".specialmoves__impossible").innerHTML = "Special moves";
    setTimeout(function(){document.querySelector(".spgain").style.display="none";}, 1000)
}
function deadly_sac() {
    document.querySelector(".overlay__units__impossible").innerHTML = "Once per turn!";
    const overlay__styling = [
        {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]},
        {clnaam:'.use__sacrifice', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.dmg__Container__opp__impossible', css:[{prop:'opacity', val:'1'},]},
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "1") {
        unit1.style.opacity = "0.4";
    }
    else if (unit1.style.opacity === "0.4" && unit2.style.opacity === "1"){
        unit2.style.opacity = "0.4";
    }
    let nuke = 1500;
    const hpi = document.querySelector(".hpI");
    let health = hpi.dataset.hpi - nuke;
    hpi.removeAttribute('data-hpi');
    hpi.setAttribute('data-hpi', health);
    document.querySelector(".hpI").innerHTML = health;
    document.querySelector(".ydmgI").innerHTML = '-' + nuke + '<br>';
    const yhpi = document.querySelector(".yhpI");
    let yhealth = yhpi.dataset.yhpi - nuke;
    yhpi.removeAttribute('data-yhpi');
    yhpi.setAttribute('data-yhpi', yhealth);
    document.querySelector(".yhpI").innerHTML = yhealth;
    document.querySelector(".dmgI").innerHTML = '-' + nuke + '<br>';
}
function bleed_omega() {
    document.querySelector(".overlay__units__impossible").innerHTML = "Once per turn!";
    const overlay__styling = [
        {clnaam:'.overlay__units', css:[{prop:'display', val:'none'},]},
        {clnaam:'#overlay__active', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'0.2'},]},
        {clnaam:'.use__bleed__omega', css:[{prop:'display', val:'none'},]},
        {clnaam:'#opp__flexbleed__heavy', css:[{prop:'display', val:'flex'},]},
        {clnaam:'.opp__bleed__heavy', css:[{prop:'display', val:'block'},]},
        {clnaam:'.opp__bleedcont__heavy', css:[{prop:'display', val:'block'},]},
    ];
    overlay__styling.forEach(overlay__styling2 => {
        const els = document.querySelectorAll(overlay__styling2.clnaam);
        for(const el of els){
            overlay__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    const unit1 = document.querySelector(".overlay__icon1");
    const unit2 = document.querySelector(".overlay__icon2");
    if (unit1.style.opacity === "1") {
        unit1.style.opacity = "0.4";
    }
    else if (unit1.style.opacity === "0.4" && unit2.style.opacity === "1"){
        unit2.style.opacity = "0.4";
    }
}
function halvedOpp(){
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.skip', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.dmg__Container__opp__impossible', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'none'},]},
        {clnaam:'.punishdmg', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spell__result', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spgain', css:[{prop:'display', val:'none'},]},
        {clnaam:'#crit', css:[{prop:'display', val:'none'},]},
        {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'1'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    let atkoption = Math.floor(Math.random() * 100) + 1;
    if (atkoption > 85){
        const hpi = document.querySelector('.hpI');
        const healing = Math.floor(Math.random() * 50) + 85;
        const healthgain = Number(hpi.dataset.hpi) + healing;
        const healcontainer = document.querySelector('.opp__heal__amt');
        document.querySelector(".dmg__Container__opp__impossible").style.opacity="0";
        hpi.removeAttribute('data-hpI');
        hpi.setAttribute('data-hpI', healthgain);
        healcontainer.innerHTML = '+' + healing;
        setTimeout(function (){healcontainer.style.display = "block"}, 1000);
    }
    if (atkoption <= 85){
        const yhpi = document.querySelector(".yhpI");
        let x = Math.floor(Math.random() * 30) + 45;
        document.querySelector(".dmgI").innerHTML = x;
        const paralyse = Math.floor(Math.random() * 100) + 1;
        const stun = Math.floor(Math.random() * 100) + 1;
        const bleed = Math.floor(Math.random() * 100) + 1;
        const yhealth = document.querySelector(".yhpI");
        if (!yhealth.classList.contains('active')){
            yhealth.classList.add('active');
        }
        setTimeout(()=> {yhealth.classList.remove('active'), 500});
        // crit
        document.querySelector(".crit2").style.display="none";
        document.querySelector(".dmgI").innerHTML = '-' + x + '<br>';
        let health = yhpi.dataset.yhpi - x;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', health);
        document.querySelector(".yhpI").innerHTML = health;
        if (health < 1 ) {
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
        if (bleed <= 8) {
            const bleedeff = document.querySelector(".bleed__gif");
            bleedeff.style.display = "block";   
            document.querySelector("#flexbleed").style.display="flex";
            ybleedtimer = 0;
        }
        if (paralyse <= 2){
            const shockeff = document.querySelector(".shockeff");
            shockeff.style.display = "block";  
            parlock = 0;
        }
        if (stun <= 2){
            const stuneff = document.querySelector(".stuneff");
            stuneff.style.display = "block";  
            const skip = document.querySelector(".skip");
            skip.style.display = "inline-block";  
            stunlock = 0;
        }
    }
    setTimeout(gain__mana, 1000);
    setTimeout(turnoffhealth, 2000);
    // bleeding chance
    if (document.querySelector(".bleed__gif").style.display === "block"){
        const lambda = () => {
            setTimeout(bleeddamage, 1000);
        };   
        lambda();
    }
    if (document.querySelector(".opp__bleed").style.display === "block"){
        const lambda = () => {
            setTimeout(oppBleed, 1000);
        };   
        lambda();
    }
    checkSchock();
    checkStun();
    parlock++;
    stunlock++;
    document.querySelector(".spell__result").innerHTML = ' ';
}
function oppBleed_omega(){
    if (bleedtimer_omega < 6){
        let bleeding = 43;
        document.querySelector(".opp__bleedcont__heavy").innerHTML = ' -' + bleeding;
        document.querySelector("#opp__flexbleed__heavy").style.display="flex";
        const hpi = document.querySelector(".hpI");
        let health = Number(hpi.dataset.hpi) - bleeding;
        hpi.removeAttribute('data-hpI');
        hpi.setAttribute('data-hpI', health);
        document.querySelector(".hpI").innerHTML = health;
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    else if (bleedtimer_omega >= 6){
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'#opp__flexbleed__heavy', css:[{prop:'display', val:'none'},]},
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    bleedtimer_omega++;
}
// YOUR DAMAGE OPPONENT HEALTH
function attackI() {
    const btn__styling = [
        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
        {clnaam:'.dmgContaineri', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.shieldeff', css:[{prop:'display', val:'none'},]}
    ];
    btn__styling.forEach(btn__styling2 => {
        const els = document.querySelectorAll(btn__styling2.clnaam);
        for(const el of els){
            btn__styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    document.querySelector("body").classList.remove("active")
    const container = document.querySelector(".ydmgI");
    let pressure = Math.floor(Math.random() * 100) + 1;
    if (pressure >= 45) {
        if (!container.classList.contains('active')){
            container.classList.add('active');
        }
        setTimeout(() => {
        container.classList.remove('active')
        }, 500)
        let x = Math.floor(Math.random() * 77) + 80;
        document.querySelector(".ydmgI").innerHTML = x;
        const hpi = document.querySelector(".hpI");
        let health = hpi.dataset.hpi - x;
        hpi.removeAttribute('data-hpi');
        hpi.setAttribute('data-hpi', health);
        document.querySelector(".hpI").innerHTML = health;
        document.querySelector(".ydmgI").innerHTML = '-' + x + '<br>';
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    else if (pressure < 45){
        document.querySelector(".spell__result").style.display="block";
        document.querySelector(".spell__result").innerHTML = 'Miss...';
    };
    setTimeout(oppAtk, 1200);
}
// YOUR HEALTH, OPPONENT DMG
function oppAtk(){
    if (document.querySelector(".shieldeff").style.display === "block"){
        setTimeout(oppNoCrit, 100);}
    else {
        if (document.querySelector(".crazedcresteff").style.display === "block"){
            setTimeout(SPoppAtk, 100);}
        else {
            const styling = [
                {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'}]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.skip', css:[{prop:'display', val:'inline-block'},]},
                {clnaam:'.dmg__Container__opp__impossible', css:[{prop:'opacity', val:'1'},]},
                {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'none'},]},
                {clnaam:'.punishdmg', css:[{prop:'display', val:'none'},]},
                {clnaam:'.spell__result', css:[{prop:'display', val:'none'},]},
                {clnaam:'.spgain', css:[{prop:'display', val:'none'},]},
                {clnaam:'#crit', css:[{prop:'display', val:'none'},]},
                {clnaam:'.overlay__units__impossible', css:[{prop:'opacity', val:'1'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            if (document.querySelector(".progress__bar").value >= 100 && !document.querySelector(".progress__bar").classList.contains("progress-red")){
                document.querySelector(".explosive__overdrive").style.display="inline-block";
                const styling = [
                    {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                    {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'}]},
                    {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
                    {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                ];
                styling.forEach(styling2 => {
                    const els = document.querySelectorAll(styling2.clnaam);
                    for(const el of els){
                        styling2.css.forEach(cssprop => {
                            el.style[cssprop.prop] = cssprop.val;
                        });
                    }
                });
            }
            let atkoption = Math.floor(Math.random() * 100) + 1;
            if (atkoption > 85){
                const hpi = document.querySelector('.hpI');
                const healing = Math.floor(Math.random() * 81) + 100;
                const healthgain = Number(hpi.dataset.hpi) + healing;
                const healcontainer = document.querySelector('.opp__heal__amt');
                document.querySelector(".dmg__Container__opp__impossible").style.opacity="0";
                hpi.removeAttribute('data-hpI');
                hpi.setAttribute('data-hpI', healthgain);
                healcontainer.innerHTML = '+' + healing;
                setTimeout(function (){healcontainer.style.display = "block"}, 1000);
            }
            if (atkoption <= 85){
                const yhpi = document.querySelector(".yhpI");
                let x = Math.floor(Math.random() * 81) + 50;
                document.querySelector(".dmgI").innerHTML = x;
                const crit = Math.floor(Math.random() * 100) + 1;
                const paralyse = Math.floor(Math.random() * 100) + 1;
                const stun = Math.floor(Math.random() * 100) + 1;
                const bleed = Math.floor(Math.random() * 100) + 1;
                const yhealth = document.querySelector(".yhpI");
                if (!yhealth.classList.contains('active')){
                    yhealth.classList.add('active');
                }
                setTimeout(()=> {yhealth.classList.remove('active'), 500});
                // crit
                if (crit <= 23) {
                    document.querySelector(".crit2").style.display="block";
                    const audio = document.querySelector(".critsfx");
                    audio.play();
                    console.log("Crit!");
                    let mult = 3;
                    let critical = x * mult;
                    document.querySelector(".dmgI").innerHTML = '-' + critical + '<br>';
                    let health = yhpi.dataset.yhpi - critical;
                    yhpi.removeAttribute('data-yhpI');
                    yhpi.setAttribute('data-yhpI', health);
                }
                else {
                    document.querySelector(".crit2").style.display="none";
                    document.querySelector(".dmgI").innerHTML = '-' + x + '<br>';
                    let health = yhpi.dataset.yhpi - x;
                    yhpi.removeAttribute('data-yhpI');
                    yhpi.setAttribute('data-yhpI', health);
                }
                let health = yhpi.dataset.yhpi;
                document.querySelector(".yhpI").innerHTML = health;
                if (health < 1 ) {
                    const styling = [
                        {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                        {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                        {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                        {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                        {clnaam:'.skip', css:[{prop:'display', val:'none'},]},
                        {clnaam:'.boostedatk', css:[{prop:'display', val:'none'},]},
                        {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
                    ];
                    styling.forEach(styling2 => {
                        const els = document.querySelectorAll(styling2.clnaam);
                        for(const el of els){
                            styling2.css.forEach(cssprop => {
                                el.style[cssprop.prop] = cssprop.val;
                            });
                        }
                    });
                    return;
                }
                if (bleed <= 7) {
                    const bleedeff = document.querySelector(".bleed__gif");
                    bleedeff.style.display = "block";   
                    document.querySelector("#flexbleed").style.display="flex";
                    ybleedtimer = 0;
                }
                if (paralyse <= 2){
                    const shockeff = document.querySelector(".shockeff");
                    shockeff.style.display = "block";  
                    parlock = 0;
                }
                if (stun <= 9){
                    const stuneff = document.querySelector(".stuneff");
                    stuneff.style.display = "block";  
                    const skip = document.querySelector(".skip");
                    skip.style.display = "inline-block";  
                    stunlock = 0;
                }
            }
            setTimeout(gain__mana, 1000);
            setTimeout(turnoffhealth, 2000);
            // bleeding chance
            if (document.querySelector(".bleed__gif").style.display === "block"){
                const lambda = () => {
                    setTimeout(bleeddamage, 1000);
                };   
                lambda();
            }
            if (document.querySelector(".opp__bleed").style.display === "block"){
                const lambda = () => {
                    setTimeout(oppBleed, 1000);
                };   
                lambda();
            }
            if (document.querySelector(".opp__bleed__heavy").style.display === "block"){
                const lambda = () => {
                    setTimeout(oppBleed_omega, 1000);
                };   
                lambda();
            }
        }  
    }
    checkSchock();
    checkStun();
    parlock++;
    stunlock++;
    document.querySelector(".spell__result").innerHTML = ' ';
}
function turnoffhealth(){
    document.querySelector('.opp__heal__amt').style.display="none";
}
function gain__mana() {
    // mana at end of turn
    let sus = 13;
    const ymanai = document.querySelector(".yManaI");
    let ymanaiF = Number(ymanai.dataset.ymanai) + sus;
    ymanai.removeAttribute('data-yManaI');
    ymanai.setAttribute('data-yManaI', ymanaiF);
    document.querySelector(".yManaI").innerHTML = ymanaiF;
}
function bleeddamage(){
    if (ybleedtimer < 2) {
        let bleeding = 20;
        document.querySelector(".bleedcont").innerHTML = ' -' + bleeding;
        document.querySelector("#flexbleed").style.display="flex";
        const yhpi = document.querySelector(".yhpI");
        let health = yhpi.dataset.yhpi - bleeding;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', health);
        document.querySelector(".yhpI").innerHTML = health;
        if (health < 1 ) {
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    else if (ybleedtimer >= 3){
        const styling = [
            {clnaam:'#flexbleed', css:[{prop:'display', val:'none'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    };
    ybleedtimer++
}
function oppBleed(){
    if (bleedtimer < 2){
        let bleeding = 34;
        document.querySelector(".opp__bleedcont").innerHTML = ' -' + bleeding;
        document.querySelector("#opp__flexbleed").style.display="flex";
        const hpi = document.querySelector(".hpI");
        let health = Number(hpi.dataset.hpi) - bleeding;
        hpi.removeAttribute('data-hpI');
        hpi.setAttribute('data-hpI', health);
        document.querySelector(".hpI").innerHTML = health;
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    else if (bleedtimer >= 2){
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'#opp__flexbleed', css:[{prop:'display', val:'none'},]},
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    bleedtimer++;
}
function burndamage(){
    if (burntimer < 7) {
        console.log("test");
        let burning = 20;
        document.querySelector(".burncont").innerHTML = ' -' + burning;
        document.querySelector("#flexburn").style.display="flex";
        const yhpi = document.querySelector(".yhpI");
        let health = yhpi.dataset.yhpi - burning;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', health);
        document.querySelector(".yhpI").innerHTML = health;
        if (health < 1 ) {
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    else if (burntimer >= 7){
        const styling = [
            {clnaam:'#flexbleed', css:[{prop:'display', val:'none'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    };
    burntimer++
}
function oppburn(){
    if (oppburntimer < 7){
        let burning = 20;
        document.querySelector(".opp__burncont").innerHTML = ' -' + burning;
        document.querySelector("#opp__flexburn").style.display="flex";
        const hpi = document.querySelector(".hpI");
        let health = Number(hpi.dataset.hpi) - burning;
        hpi.removeAttribute('data-hpI');
        hpi.setAttribute('data-hpI', health);
        document.querySelector(".hpI").innerHTML = health;
        if (health < 1 ) {
            const innerborder = document.querySelector(".inner-border"); 
            let btn = document.createElement("button");
            btn.innerHTML = "Continuing...";
            btn.type = "submit";
            btn.classList.add("btns");
            btn.classList.add("continue");
            btn.onclick = setTimeout(proceed, 2000);
            innerborder.appendChild(btn);
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#victory', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
    }
    else if (oppburntimer >= 7){
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
            {clnaam:'#opp__flexbleed', css:[{prop:'display', val:'none'},]},
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    oppburntimer++;
}
function oppNoCrit(){
    const styling = [
        {clnaam:'.spellbookI', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.rngI', css:[{prop:'display', val:'inline-block'}]},
        {clnaam:'.itemsI', css:[{prop:'display', val:'inline-block'}]},
        {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'inline-block'},]},
        {clnaam:'.dmg__Container__opp__impossible', css:[{prop:'opacity', val:'1'},]},
        {clnaam:'.sacrificeAmt', css:[{prop:'display', val:'none'},]},
        {clnaam:'.punishdmg', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spell__result', css:[{prop:'display', val:'none'},]},
        {clnaam:'.spgain', css:[{prop:'display', val:'none'},]},
        {clnaam:'#crit', css:[{prop:'display', val:'none'},]}
    ];
    styling.forEach(styling2 => {
        const els = document.querySelectorAll(styling2.clnaam);
        for(const el of els){
            styling2.css.forEach(cssprop => {
                el.style[cssprop.prop] = cssprop.val;
            });
        }
    });
    let atkoption = Math.floor(Math.random() * 100) + 1;
    if (atkoption > 85){
        const hpi = document.querySelector('.hpI');
        const healing = Math.floor(Math.random() * 30) + 50;
        const healthgain = Number(hpi.dataset.hpi) + healing;
        const healcontainer = document.querySelector('.opp__heal__amt');
        hpi.removeAttribute('data-hpI');
        hpi.setAttribute('data-hpI', healthgain);
        healcontainer.innerHTML = '+' + healing;
        healcontainer.style.display = "block";
    }
    if (atkoption <= 85){
        const yhpi = document.querySelector(".yhpI");
        let x = Math.floor(Math.random() * 31) + 20;
        document.querySelector(".dmgI").innerHTML = x;
        const bleed = Math.floor(Math.random() * 100) + 1;
        const paralyse = Math.floor(Math.random() * 100) + 1;
        const stun = Math.floor(Math.random() * 100) + 1;
        const yhealth = document.querySelector(".yhpI");
        if (!yhealth.classList.contains('active')){
            yhealth.classList.add('active');
        }
        setTimeout(()=> {yhealth.classList.remove('active'), 500});
        // crit
        document.querySelector(".crit2").style.display="none";
        document.querySelector(".dmgI").innerHTML = '-' + x + '<br>';
        let health = yhpi.dataset.yhpi - x;
        yhpi.removeAttribute('data-yhpI');
        yhpi.setAttribute('data-yhpI', health);
        document.querySelector(".yhpI").innerHTML = health;
        if (health < 1 ) {
            const styling = [
                {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.crit2', css:[{prop:'display', val:'none'},]},
                {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
                {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
                {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]},
                {clnaam:'#game-over', css:[{prop:'display', val:'block'},]}
            ];
            styling.forEach(styling2 => {
                const els = document.querySelectorAll(styling2.clnaam);
                for(const el of els){
                    styling2.css.forEach(cssprop => {
                        el.style[cssprop.prop] = cssprop.val;
                    });
                }
            });
            return;
        }
        if (bleed <= 5) {
            const bleedeff = document.querySelector(".bleed__gif");
            bleedeff.style.display = "block";   
        }
        if (paralyse <= 5){
            const shockeff = document.querySelector(".shockeff");
            shockeff.style.display = "block";  
        }
        if (stun <= 7.7){
            const stuneff = document.querySelector(".stuneff");
            stuneff.style.display = "block";  
            const skip = document.querySelector(".skip");
            skip.style.display = "inline-block";  
        }
    }
    setTimeout(gain__mana, 1000);
    setTimeout(turnoffhealth, 2000);
    // bleeding chance
    if (document.querySelector(".bleed__gif").style.display === "block"){
        const lambda = () => {
            setTimeout(bleeddamage, 1000);
          };   
          lambda();
    }
    if (document.querySelector(".opp__bleed").style.display === "block"){
        const lambda = () => {
            setTimeout(oppBleed, 1000);
        };   
        lambda();
    }
    parlock++;
    stunlock++;
    checkSchock();
    checkStun();
}
function checkSchock(){
    if (document.querySelector(".shockeff").style.display === "block" && parlock < 2) {
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.cast__glitch', css:[{prop:'display', val:'none'}]},
            {clnaam:'.cast__dmg', css:[{prop:'display', val:'none'}]},
            {clnaam:'.use__crash', css:[{prop:'display', val:'none'},]},
            {clnaam:'.use__blood', css:[{prop:'display', val:'none'},]},
            {clnaam:'.boostedatk', css:[{prop:'display', val:'none'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    else {
        document.querySelector(".shockeff").style.display = "none";
        parlock = 0;
    }
}
function checkStun(){
    if (document.querySelector(".stuneff").style.display === "block" && stunlock < 1) {
        const styling = [
            {clnaam:'.rngI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.boostedatk', css:[{prop:'display', val:'none'}]},
            {clnaam:'.itemsI', css:[{prop:'display', val:'none'}]},
            {clnaam:'.spellbookI', css:[{prop:'display', val:'none'},]},
            {clnaam:'.specialmoves__impossible', css:[{prop:'display', val:'none'},]}
        ];
        styling.forEach(styling2 => {
            const els = document.querySelectorAll(styling2.clnaam);
            for(const el of els){
                styling2.css.forEach(cssprop => {
                    el.style[cssprop.prop] = cssprop.val;
                });
            }
        });
    }
    else {
        document.querySelector(".stuneff").style.display = "none";
        document.querySelector(".skip").style.display = "none";
        stunlock = 0;
    }
}
function proceed(){
    const array = ["Automatically continuing.", "Automatically continuing..", "Automatically continuing..."];
    const cont = document.querySelector('.continue');
    cont.innerHTML = array[0];
    for (var x=0;x<=2;x++) {
            setTimeout(function() {cont.innerHTML = array[0];}, 500);
            setTimeout(function() {cont.innerHTML = array[1];}, 1000);
            setTimeout(function() {cont.innerHTML = array[2];}, 1500);
            setTimeout(function() {cont.innerHTML = array[0];}, 2000);
            setTimeout(function() {cont.innerHTML = array[1];}, 2500);
    };
    setTimeout(function() {location.replace('https://anthonyschuurmans.nl/1Mastery_Test_RPG_port_ver/story_pages/story_4.html')}, 3000);
}