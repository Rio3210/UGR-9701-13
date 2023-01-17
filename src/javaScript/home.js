const sliderleft=document.getElementById('slider-left');
const sliderright=document.getElementById('slider-right');
const slidercontainer=document.getElementById('slider--container');
const slide=document.querySelectorAll('.wrapper__inner');





const dragging = (e) => {
    if(!scrolling) return;
    slidercontainer.classList.add("dragging");
    slidercontainer.scrollLeft -= e.movementX;
    scroll__image(slidercontainer.scrollLeft)
}


let curSlide = 0;
// maximum number of slides
let maxSlide = slide.length - 1;

slide.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 20}%)`;
  });


sliderleft.addEventListener("click",()=>{
    if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }
    
      //   move slide by 100%
      slide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${20 * (indx - curSlide)}%)`;
      });
});

sliderright.addEventListener("click",()=>{
    if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
    
    //   move slide by -100%
      slide.forEach((slide, indx) => {
        slide.style.transform = `translateX(${20 * (indx - curSlide)}%)`;
      });
});