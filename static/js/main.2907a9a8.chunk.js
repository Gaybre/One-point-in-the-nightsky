(this["webpackJsonpone-point-in-the-sky"]=this["webpackJsonpone-point-in-the-sky"]||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),i=n.n(a),o=n(16),c=n.n(o),r=n(4),u=n(2),l=(n(23),n(8)),d=n.p+"static/media/sobre-cohete.8087f3bd.png",p=n.p+"static/media/skywatcher.6d72cece.png",j=function(e){var t=e.typeStyle,n=e.title,a=e.animation,i=e.onClick,o=t?"btn--".concat(t):"btn--normal";return Object(s.jsx)("button",{className:"".concat(o," ").concat(a),onClick:i,children:n||"ACEPTAR"})},m=function(){var e=Object(u.f)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("div",{className:"home__entry",children:Object(s.jsxs)(l.b,{children:[Object(s.jsx)("h2",{children:"\xbfViste algo en el cielo y no sabes qu\xe9 es?"}),Object(s.jsx)(l.a,{getPace:function(e){return" "===e?600:40},children:Object(s.jsxs)("h1",{children:["Tranquilo, ",Object(s.jsx)("span",{children:"\xa1Averigu\xe9moslo!"})]})}),Object(s.jsx)(j,{animation:"fadeIn",onClick:function(){return function(){var t=document.querySelector(".home__image"),n=document.querySelector(".home__entry");t.classList.remove("floating"),t.classList.add("astronautFadeOut"),n.classList.add("flash"),setTimeout((function(){document.querySelector(".home").style.display="none",e.push("/has-movement")}),2800)}()},typeStyle:"outline",title:"Empezar"})]})}),Object(s.jsx)("figure",{className:"home__image",children:Object(s.jsx)("img",{className:"floating",src:d,alt:"astronauta-meditando"})})]}),Object(s.jsx)("img",{className:"sky-watchers",src:p,alt:"skyWatchers"})]})},h=i.a.createContext(null),b=n.p+"static/media/nightsky-1.115f0a4d.jpg",A=n.p+"static/media/star.913bd5c4.png",x=function(e){var t=e.type,n=e.onClick,a=e.animation,i="S\xed"===t?"succes":"warning";return Object(s.jsxs)("section",{className:"card--".concat(i),onClick:n,children:[Object(s.jsx)("img",{src:b,alt:"Nightsky-img"}),Object(s.jsx)("img",{src:A,alt:"object-in-the-Nightsky",className:"".concat(a," object-in-the-Nightsky")}),Object(s.jsx)("h2",{children:t||"No"})]})},f=function(e){var t=e.data,n=e.yes,a=e.no;return Object(s.jsxs)("section",{className:"question",children:[Object(s.jsx)("h1",{children:Object(s.jsx)("span",{children:Object(s.jsx)(l.b,{children:t.question||"\xbfQu\xe9 es una pregunta?"})})}),Object(s.jsxs)("div",{className:"question__cards",children:[Object(s.jsx)(x,{animation:t.animationYes,type:"S\xed",onClick:n}),Object(s.jsx)(x,{animation:t.animationNo,type:"No",onClick:a})]})]})},g=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.hasMovement,yes:function(){return t.response.push("Se mueve"),void e.push("/is-fast")},no:function(){return t.response.push("Es un punto est\xe1tico"),void e.push("/is-diffuse")}})},O=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.isFast,yes:function(){return t.response.push("r\xe1p\xeddo"),void e.push("/is-so-fast")},no:function(){return t.response.push("lento"),void e.push("/blinks")}})},v=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.isDiffuse,yes:function(){return t.response.push("difuso, d\xe9bil"),void e.push("/has-tail")},no:function(){return t.response.push("claro a simple vista"),void e.push("/flicker")}})},y=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.isSoFast,yes:function(){return t.response.pop(),t.response.push("muy r\xe1pido"),void e.push("/brightness-increase")},no:function(){return t.response.push("."),t.text="Es un sat\xe9lite o el ingreso de basura espacial",t.finalResult=t.answers.satelites,void e.push("/result")}})},B=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.blinks,yes:function(){return t.response.push("y parpadea"),t.text="Es un avion",t.finalResult=t.answers.plane,void e.push("/result")},no:function(){return t.response.push("y no parpadea"),t.text="Es un sat\xe9lite o la Estaci\xf3n Espacial Internacional",t.finalResult=t.answers.ISS,void e.push("/result")}})},S=n.p+"static/media/astronauta-sobre-luna.98049d78.png",N=n.p+"static/media/lectura.ba176dfa.png",k=n.p+"static/media/luna-globo.bc0dd366.png",C=n.p+"static/media/luna-y-notas.e39af88e.png",q=n.p+"static/media/nube.ed79c263.png",w=function(){var e=Object(a.useContext)(h),t=e.finalResult;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"result",children:[Object(s.jsx)("img",{className:"result__image-result",src:""!==t?t:S,alt:"resultado-final"}),Object(s.jsx)("h3",{className:"result__text",children:e.text||"Esto es lo que viste en el cielo"}),Object(s.jsx)(r.b,{className:"result__button",to:"#",children:Object(s.jsx)(j,{title:"Necesito m\xe1s informaci\xf3n",typeStyle:"outline"})})]}),Object(s.jsx)("img",{className:"result__random-character floating",src:function(){var e=Math.ceil(10*Math.random());return e<=2?S:3===e||4===e?N:5===e||6===e?k:7===e||8===e?C:9===e||10===e?q:void 0}(),alt:"random-character"})]})},E=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.brightnessIncrease,yes:function(){return t.response.push("y aument\xf3 su brillo tras desaparecer"),t.text="Es un volido",t.finalResult=t.answers.bolido,void e.push("/result")},no:function(){return t.response.push("y mantuvo el mismo brillo"),t.text="Es un meteoro o una estrella fug\xe1z",t.finalResult=t.answers.meteoro,void e.push("/result")}})},M=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.hasTail,yes:function(){return t.response.push("y tiene cola"),t.text="Es un cometa",t.finalResult=t.answers.comet,void e.push("/result")},no:function(){return t.response.push("y no tiene cola"),t.text="Es un objeto del cielo profundo: Galaxia || C\xfamulo",t.finalResult=t.answers.galaxy,void e.push("/result")}})},F=function(){var e=Object(u.f)(),t=Object(a.useContext)(h);return Object(s.jsx)(f,{data:t.questions.flicker,yes:function(){return t.response.push("y titila"),t.text="Es una estrella",t.finalResult=t.answers.star,void e.push("/result")},no:function(){return t.response.push("y no titila"),t.text="Es un planeta",t.finalResult=t.answers.planet,void e.push("/result")}})},H=n.p+"static/media/guitarra.edaa3511.png",R=function(){var e=Object(u.f)();return Object(s.jsxs)("section",{children:[Object(s.jsx)("img",{src:H,alt:"ruta-perdida"}),Object(s.jsx)("h2",{children:"No encontramos la ruta que estas buscando"}),Object(s.jsx)(j,{title:"Ir al inicio",typeStyle:"normal",onClick:function(){return e.push("/")}})]})},W=function(e){var t=e.icons,n=Object(u.f)(),i=Object(a.useContext)(h);document.getElementById("body").addEventListener("onload",(function(){alert("no-back")}));var o=function(){i.response=[],n.push("./")},c=function(){i.response.includes("muy r\xe1pido")&&i.response.length<3?(i.response.pop(),i.response.push("r\xe1pido")):i.response.pop(),n.goBack()};return t?Object(s.jsxs)("div",{className:"buttons-nav",children:[Object(s.jsx)(j,{typeStyle:"text",title:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALQSURBVHic7ZpPqBVlGIef13/4JzGIBElEcWEgIunGhYtSkCB130LcRRhWIKFgoGIKhUiBotCijbSqVaSoi1wIipkECeFCMBAR4i4sqouQj4tzDxzjnm/m2pn57jn3e5Yz78w872/OnPnm44NCoVAoFAozlagqUANYDSxpXmdgjAMPI2KsqjAZgLoTOAssG5BY2/wOfAeci4gfJivoG4C6EbgOzGnGrXUuAe9HxJ3ejbMSB+xldJoH2Ab8qO7o3ZgKYFWzPllYDHyrvt7dkArgduM6eZgLfKMuh3QAnwF/tKLUPi8Bn0D1W2AdcBrYXFU7hDwBXq3VlDoPWNSsz0B5EdgCHAeWJuoOtKOTCXWl+sj+XEn9Bww9EXEPOJEoWTnSAUxwM7Fv2UwI4HFi37yZEECSEkBugdyUAHIL5KYEkFsgNyWAqRSr89UN6itNCbVN7QDUd+hMMv4E3FcvqMM6WTo11CN9vqauqtP6MVK3Jr4GrXOCQ6kTqK+10MdzUxVA8u6pB4HDFddYMTDbDPQNQD3AxLxZAoFfBmo0HVA/qvjZdzmb27UK9a2E/z+THbCvZvMX1fkZepoS6qeJHu7+t/jDms1fVhdk6qk26np1PHUTo6d4L/AF1dPft4G3gb8bdP+/LAHeBD4GFibqPggAdQ9witGb+0/xGFg9S32Dmdc8wJmIuB/qNWBTbpuW+Q3YGBFjof4JvJDbqEX+AjZHxM/QGQjdy6rTLg+ALd3moRPAyXw+rfEv8BWwISJu9O7ovgXOAO9mEGuSceAOnTVCX0fEr5MVdZfA7KGT0ns1TnwL2DVxgenKozorxJ5BDfXzmiPBi8MwEnwu1OM1Q7iijubbQz1WM4Qvc7s2humvqC5P1FFcTdah5uOwPbdno6hHKwJYm9uxcdT9fZo/n9utNdTd6ljPs/+9+nJur1ZRZ6tr1GFaOl8oFAqFQqEwKU8BJlVDscfHFzkAAAAASUVORK5CYII=",alt:"Ir atr\xe1s"}),onClick:function(){return c()}}),Object(s.jsx)(j,{typeStyle:"text",title:Object(s.jsx)("img",{src:"data:image/png;base64,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",alt:"Reiniciar"}),onClick:function(){return o()}})]}):Object(s.jsxs)("div",{className:"buttons-nav",children:[Object(s.jsx)(j,{typeStyle:"text",title:"Reiniciar",onClick:function(){return o()}}),Object(s.jsx)(j,{typeStyle:"text",title:"Ir atr\xe1s",onClick:function(){return c()}})]})},D=function(){return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h3",{children:"\xbfQu\xe9 es lo que v\xed en el cielo?"}),Object(s.jsx)("nav",{className:"header__nav",children:Object(s.jsx)(W,{})})]})},I=function(e){var t=e.children,n=Object(a.useContext)(h).response.join(" ");return Object(s.jsxs)("main",{className:"main",children:[Object(s.jsx)(D,{}),Object(s.jsx)("h4",{children:Object(s.jsx)("span",{children:Object(s.jsx)(l.b,{children:n})})}),t,Object(s.jsx)("div",{className:"main__buttons",children:Object(s.jsx)(W,{icons:!0})})]})},Y=function(){return Object(s.jsx)(r.a,{basename:"/One-point-in-the-nightsky",children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",component:m}),Object(s.jsxs)(I,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/has-movement",component:g}),Object(s.jsx)(u.a,{exact:!0,path:"/is-fast",component:O}),Object(s.jsx)(u.a,{exact:!0,path:"/is-diffuse",component:v}),Object(s.jsx)(u.a,{exact:!0,path:"/is-so-fast",component:y}),Object(s.jsx)(u.a,{exact:!0,path:"/blinks",component:B}),Object(s.jsx)(u.a,{exact:!0,path:"/brightness-increase",component:E}),Object(s.jsx)(u.a,{exact:!0,path:"/has-tail",component:M}),Object(s.jsx)(u.a,{exact:!0,path:"/flicker",component:F}),Object(s.jsx)(u.a,{exact:!0,path:"/result",component:w})]}),Object(s.jsx)(u.a,{component:R})]})})},G={text:"llegaste al resultado",response:[],questions:{hasMovement:{question:"\xbfSe mueve?",animationYes:"hasMovement",animationNo:""},isDiffuse:{question:"\xbfEs difuso y d\xe9bil?",animationYes:"difuse",animationNo:""},flicker:{question:"\xbfTitila?",animationYes:"blinks",animationNo:""},hasTail:{question:"\xbfTiene cola?",animationYes:"difuse hasTail",animationNo:"difuse"},isFast:{question:"\xbfR\xe1pido?",animationYes:"hasFastMovement",animationNo:"hasMovement"},blinks:{question:"\xbfParpadea?",animationYes:"hasFastMovementBlink",animationNo:"hasMovement"},isSoFast:{question:"\xbfTanto que casi no te da tiempo de verlo?",animationYes:"hasVeryFastMovement",animationNo:"hasFastMovement"},brightnessIncrease:{question:"\xbfAument\xf3 de brillo antes de desaparecer?",animationYes:"brightnessIncrease",animationNo:"hasVeryFastMovement"}},answers:{planet:"https://media.giphy.com/media/mFqPsiBhLZ0wo/giphy.gif",star:"https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif",comet:"https://media.giphy.com/media/xUn3CdoxxuzV5J6X5u/giphy.gif",galaxy:"https://media.giphy.com/media/2UxWBIttMvvIJ55hTe/giphy.gif",ISS:"https://media.giphy.com/media/WtfrF8owsyz6alCkyg/giphy.gif",satelites:"https://media.giphy.com/media/ncsEqTn98T1GHVq62k/giphy.gif",plane:"https://media.giphy.com/media/TgJ0KKEY8HByASy6Jt/giphy.gif",meteoro:"https://media.giphy.com/media/pWhWtKdqwOAco/giphy.gif",bolido:"https://media.giphy.com/media/Ndce8XyW32MCI/giphy.gif"},finalResult:""};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(h.Provider,{value:G,children:Object(s.jsx)(Y,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.2907a9a8.chunk.js.map