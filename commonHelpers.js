import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const e={input:document.querySelector("#datetime-picker"),start:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),mins:document.querySelector("span[data-minutes]"),secs:document.querySelector("span[data-seconds]")};let u=null,o=null;e.start.disabled=!0;e.input.disabled=!1;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(o=t[0],console.log(t[0]),t[0]<new Date){e.start.disabled=!0,f.error({title:"Error",message:"Please choose a date in the future"});return}else e.start.disabled=!1}};m("#datetime-picker",h);e.start.addEventListener("click",()=>{o&&(u=setInterval(()=>{const t=o-new Date;if(t<=0){clearInterval(u),e.input.disabled=!1;return}const n=y(t);p(n)},1e3),e.start.disabled=!0,e.input.disabled=!0)});function p({days:t,hours:n,minutes:a,seconds:s}){e.days.textContent=`${t}`,e.hours.textContent=`${n}`,e.mins.textContent=`${a}`,e.secs.textContent=`${s}`}function r(t){return String(t).padStart(2,"0")}function y(t){const i=r(Math.floor(t/864e5)),d=r(Math.floor(t%864e5/36e5)),c=r(Math.floor(t%864e5%36e5/6e4)),l=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:i,hours:d,minutes:c,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
