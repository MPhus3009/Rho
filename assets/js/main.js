$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#header-home').addClass('change-color');
    } else {
        $('#header-home').removeClass('change-color');
    }
});
function showMen() {
    window.location.href = "men.html"
}
function showWomen() {
    window.location.href = "women.html"
}
function showAbout() {
    window.location.href = "about.html"
}
function goHome() {
    window.location.href = "index.html"
}

const app=Vue.createApp({
    template: '<h2> helloooooooo </h2>'
});
app.mount("#app")