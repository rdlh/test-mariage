$("#slider").on("input change", e => {
    const sliderPos = e.target.value / 10;
    $('.foreground-img').css('width', `${sliderPos}%`);
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`);
});

$('.nav a').on('click', e => {
    e.preventDefault();
    
    $('.nav a.selected').removeClass('selected');
    $(e.target).addClass('selected');

    const id = $(e.target).attr('id');

    $('.background-img').css('background-image', `url(./images/${id}.jpg)`);
})