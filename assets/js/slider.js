
let images;

function nextImage(){
    images = document.querySelectorAll(`.gall${this.dataset.id}`);
    console.log(images);
    for(let i = 0; i < images.length; i++)
    {
        let image = getComputedStyle(images[i]);
        if (image.display != "none")
        {
            images[i].classList.add("slideHide");
            images[i].classList.remove("slideShow");
            setTimeout(function(){
                images[i].style.display = "none";
                if (i == images.length - 1)
                {
                    images[0].classList.remove("slideHide");
                    images[0].classList.add("slideShow");
                    images[0].style.display = "block";
                }
                else
                {
                    images[i + 1].classList.remove("slideHide");
                    images[i + 1].classList.add("slideShow");
                    images[i + 1].style.display = "block";
                }
            }, 1000);
        }
    }
}

function previousImage(){
    images = document.querySelectorAll(`.gall${this.dataset.id}`);
    for(let i = 0; i < images.length; i++)
    {
        let image = getComputedStyle(images[i]);
        if (image.display != "none")
        {
            images[i].classList.add("slideHide")
            images[i].classList.remove("slideShow");
            setTimeout(function(){
                images[i].style.display = "none";
                if (i == 0)
                {
                    images[images.length - 1].classList.remove("slideHide");
                    images[images.length - 1].classList.add("slideShow");
                    images[images.length - 1].style.display = "block";
                }
                else
                {
                    images[i - 1].classList.remove("slideHide");
                    images[i - 1].classList.add("slideShow");
                    images[i - 1].style.display = "block";
                }
                
                
            }, 1000);
        }
    }
}

document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll('.next').forEach((btn)=>{
        btn.addEventListener('click', nextImage);
    });
    document.querySelectorAll('.previous').forEach((btn)=>{
        btn.addEventListener('click', previousImage);
    });
});