document.addEventListener('DOMContentLoaded', function () {
    let fontSizeControl = document.getElementById('font-size');
    let fontColorControl = document.getElementById('font-color');
    let backgroundColorControl = document.getElementById('background-color');

    // @ts-ignore
    fontSizeControl.addEventListener('input', function () {
        // @ts-ignore
        document.documentElement.style.setProperty('--font-size', this.value + 'px');
    });

    // @ts-ignore
    fontColorControl.addEventListener('input', function () {
        // @ts-ignore
        document.documentElement.style.setProperty('--font-color', this.value);
    });

    // @ts-ignore
    backgroundColorControl.addEventListener('input', function () {
        // @ts-ignore
        document.documentElement.style.setProperty('--background-color', this.value);
    });
});
