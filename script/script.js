//Оповещение на пустые ссылки
$(".empty-link").click(function(){
    alert("Красивая кнопка, которая никуда не ведёт ;)");
});

//Плавный скролл
$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

//Вывод галерей
if ($(window).width() < 1022) {
    var display = 'block';
} else {
    var display = 'grid';
}

$(".pets__cat-button").click(function(){
    $(".pets__block-image").css('display', 'none'); 
    $(".pets__cat-button").removeClass('pets__cat-button--active');
    $(this).addClass('pets__cat-button--active');
    if($(this).attr("class").indexOf('cat-m') !== -1) {
        $(".pets__block-image--cat-m").css('display', display);
    } else if($(this).attr("class").indexOf('cat-w') !== -1) {
        $(".pets__block-image--cat-w").css('display', display);
    } else if($(this).attr("class").indexOf('kitty') !== -1) {
        $(".pets__block-image--kitty").css('display', display);
    }
});

//Слайдер сотрудников
let peopleSlider = $(".team__people-slider");
let peopleTextSlider = $(".team__people-text-slider");

peopleSlider.slick({
    slidesToShow: 1,
    arrows: true,
    fade: true,
    asNavFor: peopleTextSlider,
    adaptiveHeight: true
});

peopleTextSlider.slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: peopleSlider,
    adaptiveHeight: true
});

//Анимация вопрос-ответа
$(".question-answer__wrapper").click(function (){
    $(this).next(".question-answer__text-wrapper").slideToggle();
    $(this).children(".question-answer__button").toggleClass('question-answer__button--active');
    $(this).children(".question-answer__button").toggleClass('question-answer__button--disabled');
});