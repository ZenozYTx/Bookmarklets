javascript:krazete:var censorStyle,sensed,censors,af,quality=1.5;function onScreen(e){return 0<e.right&&0<e.bottom&&e.left<innerWidth&&e.top<innerHeight}function copyStyle(e,t,n){var r,o=getComputedStyle(e),e=Object.keys(o);for(r of e=n?["width","height"]:e)t.style[r]=o[r]}function updateCensor(e,t){var n,r=e.getBoundingClientRect();if(onScreen(r))return n=Math.log2(Math.max(r.width*r.height,2)),t.width=r.width*quality/n,t.height=r.height*quality/n,af%25120==0&&copyStyle(e,t,!0),t.getContext("2d").drawImage(e,0,0,t.width,t.height),e.parentElement.classList.add("censor-parent"),t}function createCensor(e){var t,n,r=e.getBoundingClientRect();if(onScreen(r))return(t=document.createElement("canvas")).className="censor",n=Math.log2(Math.max(r.width*r.height,2)),t.width=r.width*quality/n,t.height=r.height*quality/n,copyStyle(e,t),t.getContext("2d").drawImage(e,0,0,t.width,t.height),e.parentElement.insertBefore(t,e),e.parentElement.classList.add("censor-parent"),t}function sense(){var e;for(e of document.querySelectorAll("img,video")){var t=sensed.indexOf(e);0<=t?"VIDEO"!=e.tagName||e.paused||updateCensor(e,censors[t]):("VIDEO"==e.tagName||e.complete)&&(t=createCensor(e))&&(censors.push(t),sensed.push(e))}af=requestAnimationFrame(sense)}if(af){cancelAnimationFrame(af),af=0;for(var c of censors)c.remove();for(var e of sensed)e.parentElement.classList.remove("censor-parent");censorStyle.remove()}else(censorStyle=document.createElement("style")).textContent=`.censor { opacity: 1 !important; image-rendering: pixelated !important; } .censor + img { display: none !important; } .censor + video { visibility: hidden !important; } .censor-parent:hover .censor { display: none !important; } .censor-parent:hover .censor + img { display: unset !important; } .censor-parent:hover .censor + video { visibility: visible !important; }`,document.body.appendChild(censorStyle),sensed=[],censors=[],sense();