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

// function to set a given theme/color-scheme
   function setTheme(themeName) {
       localStorage.setItem('theme', themeName);
       document.documentElement.className = themeName;
   }

   // function to toggle between light and dark theme
   function toggleTheme() {
       if (localStorage.getItem('theme') === 'theme-dark') {
           setTheme('theme-light');
       } else {
           setTheme('theme-dark');
       }
   }

   // Immediately invoked function to set the theme on initial load
   (function () {
       if (localStorage.getItem('theme') === 'theme-dark') {
           setTheme('theme-dark');
           document.getElementById('checkBoxTheme').checked = true;
       } else {
           setTheme('theme-light');
         document.getElementById('checkBoxTheme').checked = false;
       }
   })();
