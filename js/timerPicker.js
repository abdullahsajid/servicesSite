document.addEventListener("DOMContentLoaded", function() {
    const DOMElement = document.querySelector(".timepicker-ui");
    const options = {mobile: true};
    const newTimepicker = new tui.TimepickerUI(DOMElement, options);

    newTimepicker.create();
});