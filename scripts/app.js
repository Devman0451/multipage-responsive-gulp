let image = document.querySelector('.content-img');
let productBox = document.querySelector('.product-info');

let index = 0;

let imgURLs = [
    "img/lg-product1.jpeg",
    "img/lg-product2.jpg",
    "img/lg-product3.jpeg",
]

let seconds = 4;

function imageCycle() {
    window.clearTimeout();
    
    image.style.backgroundImage = `url(${imgURLs[index]})`;
    
    index++;
    if(index >= imgURLs.length) index = 0;

    setTimeout( function() {
        imageCycle();
        fadeInEffect(productBox);
    }, 7000);
    
}



function fadeInEffect(fadeTarget) {
    var op = 0.1;  
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        fadeTarget.style.opacity = op;
        op += 0.1;
    }, 100);
}


imageCycle();


