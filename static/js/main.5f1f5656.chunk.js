(this.webpackJsonpshapesort=this.webpackJsonpshapesort||[]).push([[0],[,function(e,a,t){},,,function(e,a,t){e.exports=t(10)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),s=t.n(o);t(9),t(1);var c=function(e){return r.a.createElement("div",{className:e.shape+"board",onDrop:function(e){var a=e.dataTransfer.getData("thelot"),t=document.getElementById(a);e.target.appendChild(t),e.dataTransfer.getData("check")+"board"===e.target.className?t.style.border="#92c142 5px solid":t.style.border="red 5px solid",e.dataTransfer.clearData()},onDragOver:function(e){e.preventDefault()}},r.a.createElement("div",null,e.shape))};var l=function(e){function a(e){e.dataTransfer.setData("thelot",e.target.id),e.dataTransfer.setData("check",e.target.className)}function t(e){e.stopPropagation()}return r.a.createElement("div",{className:"shapes-box"},function(e){function n(e){return 3===e?"diamond":2===e?"square":"triangle"}for(var o,s,c=[],l=0;l<e;l++){var i=n((o=1,s=3,Math.floor(Math.random()*(s-o+1))+o));c.push(r.a.createElement("div",{className:i,key:l,id:"move"+l,draggable:!0,onDragStart:a,onDragOver:t},i))}return c}(e.numberShapes))};var i=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"explanation"},r.a.createElement("h1",null,"Shape Sort"),r.a.createElement("p",null,"Sort until all items have a green border"),r.a.createElement(l,{numberShapes:12})),r.a.createElement(c,{shape:"triangle"}),r.a.createElement(c,{shape:"square"}),r.a.createElement(c,{shape:"diamond"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.5f1f5656.chunk.js.map