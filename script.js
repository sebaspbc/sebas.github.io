$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(redirect, 5000); 
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }

    function redirect() {
        window.location.href = "https://sebaspbc.github.io/sebaspb.github.io/";
    }
});