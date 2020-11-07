(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),c=(a(17),a(1)),o=function(){var e=Object(c.b)(),t=function(t){e({type:t.target.value})},a=function(t){"on"===t.target.value?e({type:"windOn",payload:!0}):"off"===t.target.value&&e({type:"windOff",payload:!1})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"side"},r.a.createElement("div",null,r.a.createElement("label",{className:"lable-line",htmlFor:"title"},"Title"),r.a.createElement("input",{className:"input-text",onChange:function(t){e({type:"title",payload:t.target.value})},type:"text",id:"title",name:"title",placeholder:"Title of Widget"})),r.a.createElement("div",null,r.a.createElement("p",null,"Temperature"),r.a.createElement("input",{onClick:t,type:"radio",id:"celsius",name:"temp",value:"celsius",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"celsius"},"\u2103"),r.a.createElement("input",{className:"padme",onClick:t,type:"radio",id:"fahrenheit",name:"temp",value:"fahrenheit"}),r.a.createElement("label",{htmlFor:"fahrenheit"},"\u2109")),r.a.createElement("div",null,r.a.createElement("p",null,"Wind"),r.a.createElement("input",{onClick:a,type:"radio",id:"on",name:"wind",value:"on",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"on"},"On"),r.a.createElement("input",{className:"padme",onClick:a,type:"radio",id:"off",name:"wind",value:"off"}),r.a.createElement("label",{htmlFor:"off"},"Off"))))},d=a(7),s=a.n(d),u=a(10),m=a(11),p=function(e){var t=e.celsiusDegree,a=Object(c.c)((function(e){return e.temperature}));return r.a.createElement("p",{className:"big-temp"},a?t.toFixed(0):(9*t/5+32).toFixed(0),"\xb0")},h={degree:0,city:"Sydney",windSpeed:0,windDirection:"N",weatherImageIcon:""},f=function(e,t){return"updateWeather"===t.type?{degree:t.payload.degree-273.15,city:t.payload.city,windSpeed:(1.609*t.payload.windSpeed).toFixed(0),windDirection:(a=t.payload.windDeg,a<11.25?"N":["NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"][parseInt((a-11.25)/22.5)]),weatherImageIcon:t.payload.weatherImageIcon}:e;var a},w=function(){var e=Object(n.useReducer)(f,h),t=Object(m.a)(e,2),a=t[0],i=t[1],l=Object(c.c)((function(e){return e.title})),o=Object(c.c)((function(e){return e.wind}));return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&appid=9d17ef1b2ff64e1404e9ebca2d6a0018"),{method:"GET",headers:{Accept:"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,i({type:"updateWeather",payload:{degree:n.main.temp,city:n.name,windSpeed:n.wind.speed,windDeg:n.wind.deg,weatherImageIcon:n.weather[0].icon}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement("div",{className:"side"},r.a.createElement("div",{className:"shadow"},r.a.createElement("header",null,r.a.createElement("h2",{className:"title"},l||"Title of Widget")),r.a.createElement("div",{className:"weather-content"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a.weatherImageIcon,"@4x.png"),alt:"Loading",width:"120",height:"112"}),r.a.createElement("div",{className:"weather-info"},r.a.createElement("p",{className:"city"},a.city),r.a.createElement(p,{celsiusDegree:a.degree}),o&&r.a.createElement("p",{className:"wind"},r.a.createElement("strong",null,"Wind")," ",a.windDirection," ",a.windSpeed,"km/h")))))};var E=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"Wether-Container"},r.a.createElement(o,null),r.a.createElement("div",{className:"vl"}),r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(2),v=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"celsius":return!0;case"fahrenheit":return!1;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Title of Widget",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"title":return t.payload||"Title of Widget";default:return e}},N=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"windOn":case"windOff":return t.payload;default:return e}},b=Object(g.b)({temperature:v,title:y,wind:N}),O=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),S=Object(g.c)(b,O);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:S},r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.e6329c82.chunk.js.map