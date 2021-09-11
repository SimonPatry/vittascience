let renderer;
let mousePressed = false;
let x = 0;
let y = 0;

/* transition mouse on page / css rotation */

function turnPage(event)
{
    if (mousePressed)
    {
        let start = document.querySelector('nav').clientWidth;
        let percent = (x - start) / this.clientWidth * 100;
        let value = 90 * percent / 100;
        value = 90 - value;
        this.style.transform = `rotateY(${value}deg)`;
    }
}

/* Mouse stat controller */

function down(){
    mousePressed = true;
}
function up(){
    mousePressed = false;
}

/* mouse position controller */

function mousePos(event){
    x = event.clientX;
    y = event.clientY;
    document.getElementById('pos').innerHTML = `${x} - ${y} - mouse: ${mousePressed}`;
}

document.addEventListener("DOMContentLoaded",function(){
    document.addEventListener('mousemove', mousePos);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);
    document.querySelectorAll('.page').forEach(page => {
        page.addEventListener('mousemove', turnPage)});
});


/*
            Pages drag and drop controller
    
    the animation is based on two mouse event:
        - a pressed/released controller on left clic to controle the drag/drop state
        - a mousemove applied on each pages to get the mouse postion
    
    the function is called while the mouse is pressed and tanslate the mouse
    position from pixels in screen to percentage in the block then to degrees
    from 0 to 90 wich is applied to the css rotate of the page 

*/