let btn = document.getElementById("wheelBtn");
let wheel = document.getElementById("wheel");
let pointer = document.getElementById("pointer");
let css = document.documentElement;

function rotateWheel(){
    let deg = (Math.floor(Math.random() * 6) )+ 1;
    deg *= 60;
    var style = document.createElement('style');
    style.type = 'text/css';


    /* wheel rotation */
    css.style.setProperty('--starting-deg', 0 + "deg");
    css.style.setProperty('--mid-deg', 360 + deg + 20 + "deg");
    css.style.setProperty('--ending-deg', 360 + deg + "deg");

    /* pointer rotation */
    css.style.setProperty('--pstarting-deg', 0 + "deg");
    css.style.setProperty('--pmid-deg', -20 + "deg");
    css.style.setProperty('--pmid2-deg', 20 + "deg");
    css.style.setProperty('--pending-deg', 0 + "deg");

    /* update html style */
    document.getElementById('wheel').classList.add('wheelSpin');
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementById('pointer').classList.add('pointerSpin');
    document.getElementsByTagName('head')[0].appendChild(style);
    
    /* timer to replace wheel after animation + reset loop */
    setTimeout(function(){
        document.getElementById('wheel').style.transform = 'rotate(0deg)';
        document.getElementById('wheel').style.transform = 'rotate('+deg+'deg)';
        document.getElementById('wheel').classList.remove('wheelSpin');
        document.getElementById('pointer').classList.remove('pointerSpin');
        let i = 1;
        while(i < 7){
            if (deg / 60 == i){
                document.getElementById(i).style.display = "block";
            }
            else{
                document.getElementById(i).style.display = "none";
            }
            i++;
        }
    }, 3000);
}


document.addEventListener("DOMContentLoaded",function(){
    btn.addEventListener('click', rotateWheel);
});