(()=>{"use strict";var t={426:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Permanent+Marker&display=swap);"]),a.push([t.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  font-family: "Cinzel", "serif";\r\n}\r\n.project-name-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.project-name-container > h1 {\r\n  font-family: "Permanent Marker", "cursive";\r\n}\r\n#main {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  justify-content: space-between;\r\n  height: 75vh;\r\n}\r\n.board-container {\r\n  width: 48vw;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n  border-top: 1px solid black;\r\n  border-left: 1px solid black;\r\n}\r\n.seperator {\r\n  height: 100%;\r\n  background-color: darkgray;\r\n  width: 4vw;\r\n}\r\n.board-container h2 {\r\n  text-align: center;\r\n  width: 100%;\r\n  height: 5%;\r\n}\r\n.battle-info {\r\n  width: 100%;\r\n  height: 7%;\r\n  border: 1px solid yellow;\r\n}\r\n.player-board,\r\n.enemy-board {\r\n  width: 100%;\r\n  height: 87%;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 0);\r\n}\r\n.cell {\r\n  border-bottom: 1px solid black;\r\n  border-right: 1px solid black;\r\n}\r\n#shot {\r\n  background-color: yellow;\r\n}\r\n',""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],s=0;s<t.length;s++){var u=t[s],c=n.base?u[0]+n.base:u[0],l=i[c]||0,f="".concat(c," ").concat(l);i[c]=l+1;var h=r(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var d=o(p,n);n.byIndex=s,e.splice(s,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var u=n(t,o),c=0;c<i.length;c++){var l=r(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const e=function(){function e(t,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.length=t,this.hits=[],this.position=[],this.sunk=!1,this.name=r,this.health=t}var r,n;return r=e,(n=[{key:"hit",value:function(t){this.hits.push(t),this.health--,this.isSunk()}},{key:"isSunk",value:function(){return this.health<=0&&(this.sunk=!0),this.sunk}},{key:"getLength",value:function(){return this.length}},{key:"getPosition",value:function(){return this.position}},{key:"getName",value:function(){return this.name}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={carrier:new e(5,"carrier"),battleship:new e(4,"battleship"),destroyer:new e(3,"destroyer"),submarine:new e(3,"submarine"),patrolboat:new e(2,"patrolboat")},a={carrier1:new e(5,"carrier1"),battleship1:new e(4,"battleship1"),destroyer1:new e(3,"destroyer1"),submarine1:new e(3,"submarine1"),patrolboat1:new e(2,"patrolboat1")},s=i.destroyer,u=i.submarine,c=i.patrolboat,l=a.destroyer1,f=a.submarine1,h=a.patrolboat1,p=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"generateVars",(function(){return{y:Math.floor(10*Math.random()),x:Math.floor(10*Math.random()),direction:0===Math.floor(2*Math.random())?"v":"h"}})),o(this,"randomPlaceShip",(function(t){var r=e.generateVars(),n=r.y,o=r.x,i=r.direction;!1===e.placeShip(n,o,t,i)&&e.randomPlaceShip(t)})),o(this,"shipsAlive",(function(){e.aliveShips.forEach((function(t){if(t.sunk){var r=e.aliveShips.indexOf(t);e.aliveShips.splice(r,1),e.sunkShips.push(t)}}))})),o(this,"lifeInit",(function(){return e.aliveShips.forEach((function(t){e.life+=t.health})),e.life})),this.missedShots=[],this.hitShots=[],this.gameboardArr=this.createGameboard(),this.allShips=[s,u,c],this.aiShips=[l,f,h],this.aliveShips=[],this.sunkShips=[],this.life=0}var e,r;return e=t,r=[{key:"createGameboard",value:function(){for(var t=[],e=[],r=0;r<10;r++){for(var n=0;n<10;n++)e.push({shipName:void 0,shipIndex:void 0});t.push(e),e=[]}return t}},{key:"getGameboard",value:function(){return this.gameboardArr}},{key:"validPlacement",value:function(t,e,r,n){if("v"==n){if(e>10||e<0||t>10||t<0||t+r>10)return!1;for(var o=t;o<t+r;o++)if(null!=this.gameboardArr[o][e].shipName)return!1;return!0}if("h"==n){if(e>10||e<0||t>10||t<0||e+r>10)return!1;for(var i=e;i<e+r;i++)if(null!=this.gameboardArr[t][i].shipName)return!1;return!0}}},{key:"placeShip",value:function(t,e,r,n){var o;if("v"==n){if(this.validPlacement(t,e,r.getLength(),n)){for(var i=0;i<r.getLength();i++)this.gameboardArr[t+i][e].shipName=r.getName(),this.gameboardArr[t+i][e].shipIndex=i,r.position.push([t+i,e]);this.aliveShips.push(r),o=!0}else o=!1;return o}if("h"==n){var a;if(this.validPlacement(t,e,r.getLength(),n)){for(var s=0;s<r.getLength();s++)this.gameboardArr[t][e+s].shipName=r.getName(),this.gameboardArr[t][e+s].shipIndex=s,r.position.push([t,e+s]);this.aliveShips.push(r),a=!0}else a=!1;return this.lifeInit(),a}}},{key:"receiveAttack",value:function(t,e){var r,n=this.gameboardArr[t][e].shipName,o=JSON.stringify(this.missedShots),i=JSON.stringify(this.hitShots);if(o.includes([JSON.stringify(t),JSON.stringify(e)])||i.includes([JSON.stringify(t),JSON.stringify(e)]))r=!1,alert("already shot");else{if(null==n)this.missedShots.push([t,e]),r=!0;else{var a=this.aliveShips.filter((function(t){return t.name===n}))[0];alert("hit"),a.hit([t,e]),this.hitShots.push([t,e]),this.life-=1,r=!0,console.log(this.life)}this.shipsAlive()}return r}},{key:"getMissedShots",value:function(){return this.missedShots}}],r&&n(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const d=p;function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.board=new d,this.turn=!0}var e,r;return e=t,(r=[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(t){this.name=t}},{key:"getTurn",value:function(){return this.turn}},{key:"startTurn",value:function(){return!1===this.turn&&(this.turn=!0),this.turn}},{key:"endTurn",value:function(t){!0===this.turn&&(this.turn=!1,t.startTurn())}},{key:"attack",value:function(t,e,r){var n;return this.getTurn()&&(r.board.receiveAttack(t,e)?(this.endTurn(r),n=!0):n=!1),n}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function w(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}const k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return w(this,t)});function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this)).name="A.I",t.turn=!1,t.allShots=[],t}return e=a,(r=[{key:"aiAttack",value:function(t){var e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());if(this.getTurn())return this.allShots.includes({x:r,y:e})?this.aiAttack(t):(t.board.receiveAttack(e,r),this.allShots.push({x:r,y:e}),this.endTurn(t)),{aiY:e,aiX:r}}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(b);var x,A,O,E,P,j=r(379),T=r.n(j),M=r(795),N=r.n(M),C=r(569),L=r.n(C),I=r(565),_=r.n(I),R=r(216),q=r.n(R),J=r(589),G=r.n(J),Z=r(426),z={};z.styleTagTransform=G(),z.setAttributes=_(),z.insert=L().bind(null,"head"),z.domAPI=N(),z.insertStyleElement=q(),T()(Z.Z,z),Z.Z&&Z.Z.locals&&Z.Z.locals,x=document.querySelector(".player-board"),A=document.querySelector(".enemy-board"),O=function(){var t=new b("Kilo"),e=new k;return t.board.allShips.forEach((function(e){return t.board.randomPlaceShip(e)})),e.board.aiShips.forEach((function(t){return e.board.randomPlaceShip(t)})),{player:t,enemy:e}}(),E=O.player,P=O.enemy,E.board.getGameboard().forEach((function(t,e){t.forEach((function(t,r){var n=document.createElement("div");n.classList.add("cell"),n.classList.add("player"),n.setAttribute("data-y",e),n.setAttribute("data-x",r),x.appendChild(n)}))})),P.board.getGameboard().forEach((function(t,e){t.forEach((function(t,r){var n=document.createElement("div");n.classList.add("cell"),n.classList.add("enemy"),n.setAttribute("data-y",e),n.setAttribute("data-x",r),A.appendChild(n)}))})),E.board.aliveShips.forEach((function(t){t.position.forEach((function(t){var e=document.querySelectorAll(".player"),r=t[0],n=t[1];e.forEach((function(t){t.getAttribute("data-y")==r&&t.getAttribute("data-x")==n&&(t.style.backgroundColor="red")}))}))})),P.board.aliveShips.forEach((function(t){t.position.forEach((function(t){var e=document.querySelectorAll(".enemy"),r=t[0],n=t[1];e.forEach((function(t){t.getAttribute("data-y")==r&&t.getAttribute("data-x")==n&&(t.style.backgroundColor="blue")}))}))})),document.querySelectorAll(".enemy").forEach((function(t){t.addEventListener("click",(function(){var e=t.getAttribute("data-y"),r=t.getAttribute("data-x");if(E.attack(e,r,P)){t.setAttribute("id","shot"),console.log(P.board.missedShots);var n=P.aiAttack(E),o=n.aiY,i=n.aiX;console.log(E.board.missedShots),console.log(o,i),document.querySelectorAll(".player").forEach((function(t){var e=t.getAttribute("data-y"),r=t.getAttribute("data-x");e==o&&r==i&&t.setAttribute("id","shot")}))}}))}))})()})();