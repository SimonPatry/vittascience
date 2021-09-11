let i = 0;

/*  changeHerotext is using the same intervall
    as the animation keyframe in css, you need to update both */

function changeHeroText()
{
    /* "looping" with setInterval + incrementation/reset */
    list = ['Développeur','Gamer','Inévitable..'];
    document.querySelector(".hero-text").innerHTML = list[i];
    i++;
    if(i == 3)
        i = 0;
}

document.addEventListener("DOMContentLoaded",function(){
    changeHeroText();
    setInterval(changeHeroText, 3000);
});
