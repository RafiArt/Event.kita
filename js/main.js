
$(function () {
    /*=======================
                UI Slider Range JS
    =========================*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 5000000,
        values: [ 10, 5000000],
        slide: function (event, ui) {
            $("#amount").val("IDR " + ui.values[0] + " - IDR " + ui.values[1]);
        }
    });
    $("#amount").val("IDR " + $("#slider-range").slider("values", 0) +
        " - IDR " + $("#slider-range").slider("values", 1));
});
