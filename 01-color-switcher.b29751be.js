!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(t){t.target.disabled=!0,intervalId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(intervalId),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.b29751be.js.map
