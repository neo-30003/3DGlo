(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),c=e=>1===String(e).length?"0"+e:String(e),n=()=>{let e=(()=>{let e=(new Date("12 august 2024").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),o=Math.floor(e/60%60),r=Math.floor(e%60);return t=c(t),o=c(o),r=c(r),{timeRemaining:e,hours:t,minutes:o,seconds:r}})();t.textContent=e.hours,o.textContent=e.minutes,r.textContent=e.seconds,e.timeRemaining<=0&&(clearInterval(),t.textContent="00",o.textContent="00",r.textContent="00")};setInterval(n,1e3),n()})(),(()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")};document.addEventListener("click",(o=>{o.target.closest(".close-btn")&&t(),o.target.closest(".active-menu")&&o.target.hasAttribute("href")&&t(),(!o.target.closest("menu")&&e.classList.contains("active-menu")||o.target.closest(".menu"))&&t()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close"),r=window.matchMedia("(min-width: 768px)");let c,n=0;if(r.matches){const r=()=>{n+=5,c=requestAnimationFrame(r),e.style.display="block",n<100?e.style.opacity=n+"%":cancelAnimationFrame(c)},a=()=>{n-=5,c=requestAnimationFrame(a),n>0?e.style.opacity=n+"%":(cancelAnimationFrame(c),e.style.display="none")};t.forEach((e=>{e.addEventListener("click",r)})),o.addEventListener("click",a)}else t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))}));e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains(".popup-close")||(e.style.display="none")}))})(),[...document.querySelector("menu").querySelectorAll("ul>li>a"),document.querySelector("main>a")].forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),r=document.getElementById(o);r&&r.scrollIntoView({block:"start",behavior:"smooth"})}))})),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),a=document.getElementById("total");document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))}));t.addEventListener("input",(t=>{t.target!==o&&t.target!==r&&t.target!==c&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,l=r.value;let i=0,s=1,u=1;c.value>1&&(s+=+c.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),i=o.value&&r.value?e*t*l*s*u:0,0!==i&&((e,t)=>{let o=0;const r=Math.round(5/(e/1)),c=setInterval((()=>{o+=1,o==e&&clearInterval(c),a.textContent=o}),r)})(i)})()}))})(100),(()=>{const e=document.querySelectorAll("input[placeholder='Ваше имя']"),t=document.querySelectorAll("input[placeholder='Ваше сообщение']"),o=document.querySelectorAll("input[type='email']"),r=document.querySelectorAll("input[type='tel']");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я -]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я -]/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@-_.!~*']/gi,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/g,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o)=>{if(!document.querySelector(e))return;if(!document.querySelectorAll(t))return;if(!document.querySelectorAll(o))return;const r=document.querySelector(e),c=document.querySelectorAll(t),n=document.querySelector(".portfolio-dots");let a,l=0;c.forEach((()=>{n.insertAdjacentHTML("beforeend",'<li class="dot"></li>')}));const i=document.querySelectorAll(o),s=(e,t,o)=>{e[t].classList.remove(o)},u=(e,t,o)=>{e[t].classList.add(o)},d=()=>{s(c,l,"portfolio-item-active"),s(i,l,"dot-active"),l++,l>=c.length&&(l=0),u(c,l,"portfolio-item-active"),u(i,l,"dot-active")},m=(e=1500)=>{a=setInterval(d,e)};r.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(s(c,l,"portfolio-item-active"),s(i,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&i.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=c.length&&(l=0),l<0&&(l=c.length-1),u(c,l,"portfolio-item-active"),u(i,l,"dot-active"))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&m(2e3)}),!0),m(2e3)})(".portfolio-content",".portfolio-item",".dot")})();