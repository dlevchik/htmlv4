const courseSlider = $(".course-items-slider");
let courseSliderIsLive = false;
const courseSliderSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 500,
    // fade: true,
    dots: true,
    draggable: true,
    infinite: true,
    cssEase: 'linear',
    slidesToShow: 3,

    responsive: [
        {
          breakpoint: 600,
          settings:{
            slidesToShow: 1,
          }
        },
        {
            breakpoint: 850,
            settings:{
              slidesToShow: 2,
            }
          },
    ],
};

const commentsSlider = $(".comments-slider");
const commentsSliderSettings = {
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    speed: 500,
    fade: true,
    dots: true,
    draggable: true,
    infinite: true,
    cssEase: 'linear',
};

const mentorsSlider = $(".mentors-slider");
const mentorsSliderSettings = {
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    speed: 500,
    fade: true,
    dots: true,
    draggable: true,
    infinite: true,
    cssEase: 'linear',
};


$(document).ready(()=>{
    if (window.innerWidth < 850 || $('.course-items-slider').children(".course-item").length > 3) { 
        courseSlider.slick(courseSliderSettings); 
        courseSliderIsLive = true; 
    }

    $(window).on("resize", ()=> {
        if (window.innerWidth >= 850 && ($('.course-item').length <= 3) && courseSliderIsLive) { 
            courseSlider.slick('unslick');
            courseSliderIsLive = false; 
        } else if ((window.innerWidth < 850 || $('.course-item').length > 3) && !courseSliderIsLive) { 
            courseSlider.slick(courseSliderSettings); 
            courseSliderIsLive = true; 
        } 
    });

    commentsSlider.slick(commentsSliderSettings);
    mentorsSlider.slick(mentorsSliderSettings);
});