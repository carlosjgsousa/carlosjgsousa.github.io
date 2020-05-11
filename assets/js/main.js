$(document).ready(function () {
    window.sr=ScrollReveal();
    sr.reveal('.reveal',{easing:'ease-in-out',distance:'40px',scale:1,delay:0,mobile:false,useDelay:'onload'});
    count = 0;
    wordsArray = ["Olá", "Hello", "Hola", "Ciao", "你好", "Bonjour", "Hallo", "こんにちは"];
    setInterval(function () {
      count++;
      $("#greet").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 3000);
});
