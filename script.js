function slideLeft() {
    //Only cycle the slide backwards by 1 space if i is positive
    if (i > 0) {
        //Make current dot inactive by removing active class from it
        sliderDotContainer.children[i].classList.remove('slider-dot-active')

        i = (i - 1) % slides.length;
        //if the current slide has content, assign content to slide
        if(slides[i].content){
            sliderContent.innerHTML = slides[i].content;
        }
        //else clear out sliderContent
        else{
            sliderContent.innerHTML = '';
        }
        //Make next dot active by adding the active class to it
        sliderDotContainer.children[i].classList.add('slider-dot-active')

        //Move to previous slide
        sliderContainer.style.backgroundImage = `url("${slides[i].image}")`
    }
}
function slideRight() {
    //Make current dot inactive by removing active class from it
    sliderDotContainer.children[i].classList.remove('slider-dot-active')
    
    i = (i + 1) % slides.length;
    if(slides[i].content){
        sliderContent.innerHTML = slides[i].content;
    }
    else{
        sliderContent.innerHTML = '';
    }
    //Make next dot active by adding the active class to it
    sliderDotContainer.children[i].classList.add('slider-dot-active')

    //Advance Slide
    sliderContainer.style.backgroundImage = `url("${slides[i].image}")`
}

const sliderContainer = document.querySelector('.slider-container');
const sliderOverlay = document.querySelector('.slider-overlay');
const sliderBtnRight = document.querySelector('.slider-btn-right');
const sliderBtnLeft = document.querySelector('.slider-btn-left');
const sliderDotContainer = document.querySelector('.slider-dot-container')
const sliderContent = document.querySelector('.slider-content');
const slides = [
    {
        image: './slider-bg-2.jpg',
        content: `<h1>Slide Header 1</h1><p>Slide copy text</p>`
    },
    {
        image: './slider-bg-3.jpg'
    },
    {
        image: './slider-bg-4.jpg',
        content: `<h1>Slide Header 3</h1><p>Lorem ipsum aksdhsajk hdjakshd asdg jka</p>`
    }
]
//Dynamically generate a dot for each slide, and make the first dot the active one by default
for (var slideIndex = 0; slideIndex < slides.length; slideIndex++) {
    var newDot = document.createElement('div');
    if (slideIndex == 0) {
        newDot.classList.add('slider-dot-active');
        newDot.classList.add('slider-dot');
    }
    else {
        newDot.classList.add('slider-dot');
    }
    sliderDotContainer.appendChild(newDot);
}
//Set default image as first one in array
var i = 0;
sliderContainer.style.backgroundImage = `url("${slides[0].image}")`
if(slides[i].content){
    sliderContent.innerHTML = slides[i].content;
}
//Have left button wait until click, on click cycle the slide backwards by 1 space
sliderBtnLeft.addEventListener('click', slideLeft);

//Have right button wait until click, on click cycle the slide forwards by 1 space
sliderBtnRight.addEventListener('click', slideRight);


