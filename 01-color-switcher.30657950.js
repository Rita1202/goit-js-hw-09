const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(t){t.target.disabled=!0,n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}));let n=null;e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.30657950.js.map