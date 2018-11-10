"use strict";var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],i=!0,n=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(i=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);i=!0);}catch(e){n=!0,r=e}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}!function(){var a={piece:{palette:[88,80,3,3],shadow:[64,96,14,14],symbols:{shield:[80,88,8,8],bow:[88,56,8,8],dagger:[80,80,8,8],axe:[80,56,8,8],hat:[32,180,8,8]},base:[128,16,16,16]},tiles:{"shadow-corner":[170,164,16,16],black:[128,0,16,16],"wall-base":[144,0,16,16],floor:[64,80,16,16],"shadow-edge":[96,64,16,16],grass:[32,164,16,16],wall:[128,48,16,16]},ui:{cursor:[0,164,32,16],box:[80,0,48,48],squares:[64,64,32,16],arrows:[0,64,64,64],"enemy-phase":[0,146,170,18],healthbar:[80,48,48,8],symbols:{dragon:[96,80,8,8],shield:[112,64,8,8],bow:[0,180,8,8],boot:[48,164,8,8],dagger:[128,64,8,8],sword:[144,48,8,8],next:[170,180,8,8],eye:[128,32,8,8],clock:[144,16,8,8],axe:[160,0,8,8],hat:[64,110,8,8],enemy:[78,96,8,8],lance:[8,180,8,8]},"player-phase":[0,128,188,18],typeface:[0,0,80,64],swords:[170,146,16,18]}};function h(e,t,a,i,n){var r=document.createElement("canvas"),l=r.getContext("2d");return r.width=i,r.height=n,l.drawImage(e,-t,-a),r}var z={get:function(e,t,a){var i=4*(a*e.width+t),n=e.data[i],r=e.data[i+1],l=e.data[i+2],o=e.data[i+3];return[n,r,l,o]},set:function(e,t,a,i){var n=4*(a*e.width+t);e.data[n+0]=i[0],e.data[n+1]=i[1],e.data[n+2]=i[2],e.data[n+3]=i[3]},replace:function(e,t,a){for(var i=0;i<e.data.length;i+=4){for(var n=0;n<4&&e.data[i+n]===t[n];n++);if(4===n)for(var n=0;n<4;n++)e.data[i+n]=a[n]}}};function Ya(e,t){var a=document.createElement("canvas");return a.width=e,a.height=t,a.getContext("2d")}var c={warrior:"axe",knight:"shield",rogue:"dagger",mage:"hat"};function l(e){var t=function e(t,a){var i={};for(var n in a)if(Array.isArray(a[n])){var r=_slicedToArray(a[n],4),l=r[0],o=r[1],s=r[2],c=r[3];i[n]=h(t,l,o,s,c)}else i[n]=e(t,a[n]);return i}(e,a);return{tiles:t.tiles,pieces:function(e){var t={player:{},enemy:{},ally:{},done:{player:{},enemy:{},ally:{}},flashing:null,symbols:e.symbols,shadow:e.shadow},a=e.palette.getContext("2d").getImageData(0,0,3,3),i={black:[0,0,0,255],white:[255,255,255,255],cyan:z.get(a,0,0),blue:z.get(a,1,0),navy:z.get(a,2,0),pink:z.get(a,0,1),red:z.get(a,1,1),purple:z.get(a,2,1),lime:z.get(a,0,2),green:z.get(a,1,2),teal:z.get(a,2,2)},n={player:[i.cyan,i.blue,i.navy],enemy:[i.pink,i.red,i.purple],ally:[i.lime,i.green,i.teal]};for(var r in n){var l=n[r];for(var o in e.symbols){var s=e.symbols[o],c=Ya(s.width,s.height);c.drawImage(s,0,0);var u=e.base.getContext("2d").getImageData(0,0,16,16);z.replace(u,i.white,l[1]),z.replace(u,i.black,l[2]);var f=Ya(u.width,u.height);f.putImageData(u,0,0);var h=c.getImageData(0,0,s.width,s.height);z.replace(h,i.white,l[0]),c.putImageData(h,0,0),f.drawImage(c.canvas,4,4),z.replace(h,l[0],l[2]),c.putImageData(h,0,0),f.drawImage(c.canvas,4,3),t[r][o]=f.canvas}}for(var p in n){var g=n[p];for(var d in e.symbols){var m=e.symbols[d],v=Ya(m.width,m.height);v.drawImage(m,0,0);var y=e.base.getContext("2d").getImageData(0,0,16,16);z.replace(y,i.white,g[2]);var w=Ya(y.width,y.height);w.putImageData(y,0,0);var b=v.getImageData(0,0,m.width,m.height);z.replace(b,i.white,g[1]),v.putImageData(b,0,0),w.drawImage(v.canvas,4,4),z.replace(b,g[1],i.black),v.putImageData(b,0,0),w.drawImage(v.canvas,4,3),t.done[p][d]=w.canvas}}var x=e.base.getContext("2d").getImageData(0,0,16,16);z.replace(x,i.black,i.white);var k=Ya(x.width,x.height);return k.putImageData(x,0,0),t.flashing=k.canvas,t}(t.piece),ui:function(e){var v={symbols:e.symbols,swords:e.swords,cursor:function(e){for(var t=e.width/16,a=new Array(t),i=0;i<t;i++)a[i]=h(e,16*i,0,16,16);return a}(e.cursor),typeface:function(e){for(var t=e.width/8,a=e.height/8,i={},n=0,r=0;r<a;r++)for(var l=0;l<t;l++){var o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?abcdefghijklmnopqrstuvwxyz'\"/\\()        "[n++];i[o]=h(e,8*l,8*r,8,8)}return i}(e.typeface),healthbar:e.healthbar,phases:{player:e["player-phase"],enemy:e["enemy-phase"]},box:{topLeft:h(e.box,0,0,16,16),top:h(e.box,16,0,16,16),topRight:h(e.box,32,0,16,16),left:h(e.box,0,16,16,16),center:h(e.box,16,16,16,16),right:h(e.box,32,16,16,16),bottomLeft:h(e.box,0,32,16,16),bottom:h(e.box,16,32,16,16),bottomRight:h(e.box,32,32,16,16)},squares:{move:h(e.squares,0,0,16,16),attack:h(e.squares,16,0,16,16)},arrows:{left:h(e.arrows,0,0,16,16),right:h(e.arrows,16,0,16,16),up:h(e.arrows,32,0,16,16),down:h(e.arrows,48,0,16,16),leftStub:h(e.arrows,0,16,16,16),rightStub:h(e.arrows,16,16,16,16),upStub:h(e.arrows,32,16,16,16),downStub:h(e.arrows,48,16,16,16),upLeft:h(e.arrows,0,32,16,16),upRight:h(e.arrows,16,32,16,16),downLeft:h(e.arrows,32,32,16,16),downRight:h(e.arrows,48,32,16,16),horiz:h(e.arrows,0,48,16,16),vert:h(e.arrows,16,48,16,16)}};return v.Text=u,v.Box=f,v.TextBox=function(e){var t=0,a=0,i=null;if(Array.isArray(e)){i=e.map(function(e){return u(e)});var n=e.map(function(e){return e.width}),r=Math.max.apply(Math,_toConsumableArray(n));t=r,a=8*e.length}else i=u(e),t=i.width,a=8;var l=f(t+16,a+16),o=Ya(t,a);if(Array.isArray(e))for(var s=0;s<i.length;s++){var c=i[s];o.drawImage(c,0,8*s)}else o.drawImage(i,0,0);return o.canvas.width&&l.getContext("2d").drawImage(o.canvas,8,8),l},v.HealthBar=s,v.UnitDetails=function(e){var t=v.symbols[c[e.type]],a=u(e.name),i=f(a.width+t.width+20,24),n=i.getContext("2d");n.drawImage(t,8,8),n.drawImage(a,20,8);var r=f(84,24),l=s(e.hp/3,e.faction),o=u("HP");return(n=r.getContext("2d")).drawImage(o,8,8),n.drawImage(l,28,8),{name:i,hp:r}},v.Arrow=function(e){for(var t=[],a=0;a<e.length;a++){var i=_slicedToArray(e[a],2),n=i[0],r=i[1],l=!1,o=!1,s=!1,c=!1,u=e[a-1];if(u){var f=n-u[0],h=r-u[1];1===f?l=!0:-1===f&&(o=!0),1===h?s=!0:-1===h&&(c=!0)}var p=e[a+1];if(p){var g=p[0]-n,d=p[1]-r;-1===g?l=!0:1===g&&(o=!0),-1===d?s=!0:1===d&&(c=!0)}if(l||o||s||c){var m=null;l&&o?m="horiz":s&&c?m="vert":s&&l?m="upLeft":s&&o?m="upRight":c&&l?m="downLeft":c&&o?m="downRight":l&&!a?m="leftStub":o&&!a?m="rightStub":s&&!a?m="upStub":c&&!a?m="downStub":l?m="left":o?m="right":s?m="up":c&&(m="down"),m&&t.push({image:v.arrows[m],position:[n,r]})}}return t},v;function u(e){for(var t=0,a=0;a<e.length;a++){var i=e[a];t+=" "===i?4:8}var n=document.createElement("canvas");n.width=t,n.height=8;for(var r=n.getContext("2d"),l=0,o=0;l<e.length;l++){var s=e[l];if(" "===s)o+=4;else{var c=v.typeface[s];r.drawImage(c,o,0),o+=8}}return n}function f(e,t){var a=Math.ceil(e/16),i=Math.ceil(t/16),n=document.createElement("canvas"),r=n.getContext("2d");n.width=e,n.height=t;for(var l=1;l<a-1;l++)r.drawImage(v.box.top,16*l,0),r.drawImage(v.box.bottom,16*l,t-16);for(var o=1;o<i-1;o++){for(var s=1;s<a-1;s++)r.drawImage(v.box.center,16*s,16*o);r.drawImage(v.box.left,0,16*o),r.drawImage(v.box.right,e-16,16*o)}return r.drawImage(v.box.topLeft,0,0),r.drawImage(v.box.topRight,n.width-16,0),r.drawImage(v.box.bottomLeft,0,n.height-16),r.drawImage(v.box.bottomRight,n.width-16,n.height-16),n}function s(e,t){var a=Ya(48,8);return a.drawImage(v.healthbar,0,0),a.fillStyle={player:"rgb(144, 224, 232)",enemy:"rgb(248, 192, 224)",ally:"rgb(200, 224, 255)"}[t],a.fillRect(3,3,Math.floor(42*e),2),a.canvas}}(t.ui)}}var t={name:"grass",solid:!1},i={name:"wall",solid:!0},n={name:"floor",solid:!1};"##########################      ##.......##      ##      ##.......##      ##      ##.......##      ##      ####...####      ##      ####...####      ##      ##.......##      ##    ####.......####    ##    ####.......####    ##    ...............    ##    ####.......####    ##    ####.......####    ##      ##.......##      ##      ###########      ##      ###########      ##                       ##                       ##      ##       ##      ##      ##       ##      ##########       ##################       #########                                                                                                    ".split("").map(function(e){switch(e){case" ":return t;case"#":return i;case".":return n}});var r={name:"grass",solid:!1},o={name:"floor",solid:!1},s={name:"wall",solid:!0},e={layout:{size:[20,20],data:["           #########","       ##  #......##"," #     ##  ##......#"," #         ##....###","            ###..###","          #####...##","      ##  ###.#...# ","      ##  #.......# ","          ....##### ","#         #...##### ","#    #    #####     ","     #    #####     ","                    ","                    ","        ##    #     ","        ##    #     "," #               ## "," ##    #         ## "," ##    #            ","                    "].join("").split("").map(function(e){switch(e){case" ":return r;case".":return o;case"#":return s}})},units:[["MAGE","mage","player",!1,[4,13]],["KNIGHT","knight","player",!1,[6,14]],["WARRIOR","warrior","player",!1,[5,16]],["ROGUE","rogue","player",!1,[3,15]],["DARK MAGE","mage","enemy","defend",[15,1]],["TROLL","knight","enemy","defend",[15,4]],["TROLL","knight","enemy","defend",[16,4]],["ORC","warrior","enemy","wait",[16,6]],["TROLL","knight","enemy","defend",[10,8]],["GOBLIN","rogue","enemy","attack",[9,12]],["GOBLIN","rogue","enemy","attack",[8,6]],["ORC","warrior","enemy","attack",[7,12]]]};function Za(e,t){return Math.abs(t[0]-e[0])+Math.abs(t[1]-e[1])}function u(e){return e[0]}function f(e){return e[1]}function $a(e,t){return u(e)===u(t)&&f(e)===f(t)}function ei(e,t){t||(t=1);for(var a=[{steps:0,cell:e}],i=[];a.length;)for(var n=a.shift(),r=[[u(n.cell)-1,f(n.cell)],[u(n.cell)+1,f(n.cell)],[u(n.cell),f(n.cell)-1],[u(n.cell),f(n.cell)+1]],l=0;l<r.length;l++){var o=r[l];if(!$a(e,o)){for(var s=0;s<i.length;s++){if($a(o,i[s]))break}s<i.length||(i.push(o),n.steps+1<t&&a.push({steps:n.steps+1,cell:o}))}}return i}function ti(e){return e.layout.size[0]}function ai(e){return e.layout.size[1]}function ii(e,t){return e.layout.data[f(t)*ti(e)+u(t)]}function ni(e,t){for(var a=0;a<e.units.length;a++){var i=e.units[a];if($a(t,i.cell))return i}}function ri(e,t){return 0<=u(t)&&u(t)<ti(e)&&0<=f(t)&&f(t)<ai(e)}function li(e,t){return e.faction===t.faction||"player"===e.faction&&"ally"===t.faction||"ally"===e.faction&&"player"===t.faction}function G(e,t,a){e.cell=t}function oi(e,t){var a,i,n,r;if((r=(n=e).equipment.weapon,n.stats.agi+(r?r.acc:0)-(i=(a=t).equipment.armor,a.stats.agi-(i?i.wt:0)))<0)return 0;if("warrior"===e.type)switch(t.type){case"warrior":case"knight":return 2;case"rogue":return 0;case"mage":return 3}else if("knight"===e.type)switch(t.type){case"warrior":return 2;case"knight":return 1;case"rogue":case"mage":return 2}else if("rogue"===e.type)switch(t.type){case"warrior":return 2;case"knight":return 0;case"rogue":return 1;case"mage":return 2}else if("mage"===e.type)switch(t.type){case"warrior":return 2;case"knight":case"rogue":case"mage":return 1}}function si(e){if("defend"===e.ai)return 0;var t=e.equipment.armor;return 5-(t?t.wt:0)+Math.floor(e.stats.agi/2)}var p={warrior:{str:2,int:0,agi:1},knight:{str:1,int:0,agi:0},rogue:{str:1,int:1,agi:2},mage:{str:1,int:1,agi:1}},g={axe:{target:"str",atk:2,acc:0,rng:1},lance:{target:"str",atk:3,acc:2,rng:1},dagger:{target:"str",atk:2,acc:1,rng:1},tome:{target:"int",atk:1,acc:1,rng:2}},d={warrior:{weapon:g.axe,armor:null},knight:{weapon:g.lance,armor:{def:2,wt:1}},rogue:{weapon:g.dagger,armor:null},mage:{weapon:g.tome,armor:null}};function ci(e,t){var a=e.phase.pending;a.splice(a.indexOf(t),1),a.length||ui(e)}function ui(e){var t=e.map,a=e.phase;a.faction="player"===a.faction?"enemy":"player",a.pending=t.units.filter(function(e){return e.faction===a.faction}),a.pending.length||ui(e)}function fi(e,t){return{options:e,index:t||0,done:!1}}function m(e,t){t?--e.index<0&&(e.index=e.options.length-1):++e.index>=e.options.length&&(e.index=0)}function hi(e,t,a){for(var i=[],n=[t],r={},l={},o={},s={},c={},u=0;u<e.length;u++){s[h=e[u]]=1/0,c[h]=1/0}for(s[t]=0,c[t]=Za(t,a);n.length;){var f={score:1/0,index:-1,cell:null};for(u=0;u<n.length;u++){(m=c[h=n[u]])<f.score&&(f.score=m,f.index=u,f.cell=h)}var h;if($a(h=f.cell,a)){for(;!$a(h,t);)i.unshift(h),h=o[h];return i.unshift(h),i}n.splice(f.index,1),r[h]=!1,l[h]=!0;var p=ei(h);for(u=0;u<p.length;u++){var g=p[u];if(!l[g]){for(var d=0;d<e.length;d++){if($a(e[d],g))break}var m;if(d!==e.length)r[g]||(r[g]=!0,n.push(g)),(m=s[h]+1)>=s[g]||(o[g]=h,s[g]=m,c[g]=m+Za(g,a))}}}}function v(){return{height:0,time:0,floating:!1}}v.update=function(e){if(!e.done){var t=e.data;if(t.time++,e.floating){var a=t.time%120/120;t.height=4+Math.sin(2*Math.PI*a)}else 4==++t.height&&(e.floating=!0)}};var y=Object.freeze({default:v});function w(e){return{height:Math.round(e||4)}}w.update=function(e){e.done||--e.data.height||(e.done=!0)};var b=Object.freeze({default:w});function x(e){return{path:e,cell:e[0].slice(),time:0}}x.update=function(e){if(e.done)return!1;var t=e.data,a=Math.floor(t.time/4),i=t.time%4*.25,n=t.path[a],r=t.path[a+1];return r?t.cell=[n[0]+(r[0]-n[0])*i,n[1]+(r[1]-n[1])*i]:(t.cell=n.slice(),e.done=!0),t.time++,!0};var k=Object.freeze({default:x});function I(e,t){var a=[t[0]-e[0],t[1]-e[1]],i=Math.sqrt(a[0]*a[0]+a[1]*a[1]);return{src:e,norm:[a[0]/i,a[1]/i],cell:e.slice(),time:0}}I.update=function(e){if(!e.done){var t=e.data,a=t.time<=7?t.time:7-(t.time-7);t.cell[0]=t.src[0]+t.norm[0]/8*a,t.cell[1]=t.src[1]+t.norm[1]/8*a,15==++t.time&&(e.done=!0)}};var M=Object.freeze({default:I});function S(){return{time:0,flashing:!1}}S.update=function(e){if(!e.done){var t=e.data;t.flashing=!t.flashing,15==++t.time&&(e.done=!0)}};var A=Object.freeze({default:S});function q(){return{time:0,visible:!0}}q.update=function(e){if(!e.done){var t=e.data;t.visible=!t.visible,30==++t.time&&(e.done=!0)}};var O=Object.freeze({default:q});function C(){return{time:0,state:"enter",text:{x:0},bg:{x:0,width:0,height:0}}}C.update=function(e){if(!e.done){var t=e.data,a=t.time,i=t.text,n=t.bg;if(10<a&&a<=30){t.state="enter";var r=(a-10)/20,l=Math.sin(Math.PI/2*r);i.x=l}else if(30<a&&a<=45)t.state="pass",i.x=(a-30)/15;else if(45<a&&a<=65){t.state="exit";var o=(a-45)/20,s=1-Math.sin(Math.PI/2+Math.PI/2*o);i.x=s}a<=45?n.width<1?n.width+=1/16:n.height<1&&(n.height+=.1):0<n.height?n.height-=.1:n.x<1&&(n.x+=1/16),65==++t.time&&(e.done=!0)}};var R=Object.freeze({default:C}),pi={lift:y&&v||y,drop:b&&w||b,move:k&&x||k,attack:M&&I||M,flinch:A&&S||A,fade:O&&q||O,phase:R&&C||R};function gi(e,t,a){return{type:e,target:t,data:a,done:!1}}var di="rgb(80, 120, 248)",mi="rgb(208, 0, 88)",vi={warrior:"axe",knight:"shield",rogue:"dagger",mage:"hat"};function T(e,t){var a=e.context,i=e.sprites,n=e.cache,r=e.state,l=r.time,o=r.cursor,s=r.viewport,c=r.anims,u=r.dialogs,f=t.map,h=a.canvas,p=c[0],g=u[0],d=["floors","squares","shadows","walls","pieces","arrows","cursor","selection","damage","ui"],m={},v=!0,y=!1,w=void 0;try{for(var b,x=d[Symbol.iterator]();!(v=(b=x.next()).done);v=!0){m[b.value]=[]}}catch(e){y=!0,w=e}finally{try{!v&&x.return&&x.return()}finally{if(y)throw w}}if(a.beginPath(),a.fillStyle="black",a.fillRect(0,0,h.width,h.height),n.units||(n.units=f.units.map(function(e){return Object.assign({original:e},e)})),n.map||(n.map=function(e,t){for(var a=ti(e),i=ai(e),n=Ya(16*a,16*i),r=Ya(16*a,16*i),l=0;l<i;l++)for(var o=0;o<a;o++){var s=16*o,c=16*l,u=ii(e,[o,l]),f=null;if("wall"===u.name)f=l+1<i&&"wall"!==ii(e,[o,l+1]).name?t["wall-base"]:t.wall,r.drawImage(f,s,c);else{var h=null;0<=o-1&&"wall"===ii(e,[o-1,l]).name&&0<=l-1&&"wall"!==ii(e,[o-1,l-1]).name?h=t["shadow-corner"]:0<=o-1&&"wall"===ii(e,[o-1,l]).name&&(h=t["shadow-edge"]),f=t[u.name],n.drawImage(f,s,c),h&&n.drawImage(h,s,c)}}return{floors:n.canvas,walls:r.canvas}}(f,i.tiles)),m.floors.push({image:n.map.floors,position:[0,0]}),m.walls.push({image:n.map.walls,position:[0,0]}),!o.cell){var k=f.units.find(function(e){return"player"===e.faction});o.cell=k.cell.slice(),o.prev=o.cell.slice()}var z=g&&"actions"===g.type&&g,I=g&&"forecast"===g.type&&g,M=g&&"pause"===g.type&&g,S=p&&"phase"===p.type,A=null;if(!S||!s.target)if(p&&"fade"===p.type)A=p.target.cell;else if(n.attack)A=n.attack.target.cell;else if(I&&!n.moved){A=g.options[g.index].cell}else o.selection&&t.phase.pending.includes(o.selection.unit)&&!n.moved?o.selection&&t.phase.pending.includes(o.selection.unit)&&(A=o.selection.unit.cell):A=o.cell;if(s.target||(s.target=[]),A){var q=I||n.attack||p&&"fade"===p.type,O=16*ti(f);if(O>s.size[0]||q){if(s.target[0]=16*A[0]+8-s.size[0]/2,!q){var C=O-s.size[0];O>s.size[0]&&(s.target[0]<0?s.target[0]=0:s.target[0]>C&&(s.target[0]=C))}}else s.target[0]=O/2-s.size[0]/2;var R=16*ai(f);if(R>s.size[1]||q){if(s.target[1]=16*A[1]+8-s.size[1]/2,!q){var T=R-s.size[1];R>s.size[1]&&(s.target[1]<0?s.target[1]=0:s.target[1]>T&&(s.target[1]=T))}}else s.target[1]=R/2-s.size[1]/2}if(s.position?(s.position[0]+=(s.target[0]-s.position[0])/16,s.position[1]+=(s.target[1]-s.position[1])/16):s.position=s.target.slice(),p&&"attack"===p.type&&7===p.data.time&&(s.shake=30),s.shake){s.shake--;var D=n.attack.power,L=1-s.shake%5/5;s.offset[1]=Math.sin(2*L*Math.PI)*D*s.shake/30}else s.offset[1]=0;var E=o.selection||n.selection;if(E){var j=E.unit,_=E.time,B=f.units.indexOf(j),P=n.units[B],U=n.ranges[B];U||(U=n.ranges[B]=function(e,t){var a={move:[t.cell],attack:[]},i=si(t),n=[{steps:0,cell:t.cell}];for(i||(n.length=0);n.length;)for(var r=n.shift(),l=ei(r.cell),o=0;o<l.length;o++)if(ri(e,c=l[o])&&!ii(e,c).solid){for(var s=0;s<a.move.length&&!$a(c,a.move[s]);s++);if(!(s<a.move.length)){if((u=ni(e,c))||a.move.push(c),u&&!li(t,u)){for(s=0;s<a.attack.length&&!$a(a.attack[s],c);s++);s===a.attack.length&&a.attack.push(c)}r.steps<i-1&&(!u||li(t,u))&&n.push({steps:r.steps+1,cell:c})}}for(o=0;o<a.move.length;o++)for(l=ei(a.move[o],t.equipment.weapon.rng),s=0;s<l.length;s++){var c,u;if(ri(e,c=l[s])&&!ii(e,c).solid&&!$a(t.cell,c)&&(!(u=ni(e,c))||!li(t,u))){for(var f=0;f<a.attack.length&&!$a(a.attack[f],c);f++);f===a.attack.length&&a.attack.push(c)}}return a}(f,j));var G=n.squares[B];if(!G){var K=!0,F=!(n.squares[B]=G=[]),H=void 0;try{for(var N,W=U.move[Symbol.iterator]();!(K=(N=W.next()).done);K=!0){var J=N.value;G.push({sprite:i.ui.squares.move,cell:J})}}catch(e){F=!0,H=e}finally{try{!K&&W.return&&W.return()}finally{if(F)throw H}}var V=!0,Q=!1,X=void 0;try{for(var Y,Z=U.attack[Symbol.iterator]();!(V=(Y=Z.next()).done);V=!0){var $=Y.value,ee=!0,te=!0,ae=!1,ie=void 0;try{for(var ne,re=U.move[Symbol.iterator]();!(te=(ne=re.next()).done);te=!0){if($a($,ne.value)){ee=!1;break}}}catch(e){ae=!0,ie=e}finally{try{!te&&re.return&&re.return()}finally{if(ae)throw ie}}ee&&G.push({sprite:i.ui.squares.attack,cell:$})}}catch(e){Q=!0,X=e}finally{try{!V&&Z.return&&Z.return()}finally{if(Q)throw X}}}o.selection&&n.selection!==o.selection&&(n.selection=E,n.path=null),o.selection&&!c.find(function(e){return e.target===P})&&c.push(gi("lift",P,pi.lift())),n.selection&&n.selection!==o.selection&&(n.moved=!1,p&&"lift"===p.type&&(p.done=!0,c.push(gi("drop",p.target,pi.drop(p.data.height))),n.selection.time=0));var le=p&&"move"===p.type&&p.target===P,oe=p&&"attack"===p.type&&p.target===P;if(!n.moved&&le&&(n.moved=!0),!n.moved){var se=0;if(o.selection)se=E.time;else{var ce=0,ue=!0,fe=!1,he=void 0;try{for(var pe,ge=G[Symbol.iterator]();!(ue=(pe=ge.next()).done);ue=!0){var de=pe.value,me=Za(j.cell,de.cell);ce<me&&(ce=me)}}catch(e){fe=!0,he=e}finally{try{!ue&&ge.return&&ge.return()}finally{if(fe)throw he}}se=Math.max(0,ce-E.time)}se&&(G=G.filter(function(e){return Za(j.cell,e.cell)<=se}),function(e,t,a){var i=!0,n=!1,r=void 0;try{for(var l,o=a[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var s=l.value,c=s.sprite,u=16*s.cell[0],f=16*s.cell[1];e.squares.push({image:c,position:[u,f]})}}catch(e){n=!0,r=e}finally{try{!i&&o.return&&o.return()}finally{if(n)throw r}}}(m,i.ui.squares,G))}var ve=n.path,ye=ni(f,o.cell);if($a(o.cell,j.cell))ve&&(ve.length=1);else if(t.phase.pending.includes(j)&&o.selection){var we=U.move.slice(),be=f.units.filter(function(e){return li(j,e)}),xe=!0,ke=!1,ze=void 0;try{for(var Ie,Me=be[Symbol.iterator]();!(xe=(Ie=Me.next()).done);xe=!0){var Se=Ie.value;we.push(Se.cell)}}catch(e){ke=!0,ze=e}finally{try{!xe&&Me.return&&Me.return()}finally{if(ke)throw ze}}var Ae=j.cell;if(ve&&ve.length&&(Ae=ve[ve.length-1]),U.move.find(function(e){return $a(o.cell,e)}))if(ve){for(var qe=0;qe<ve.length;qe++){var Oe=ve[qe];if($a(o.cell,Oe))break}if(qe<ve.length-1)ve.splice(qe+1,ve.length-qe-1);else{var Ce,Re=hi(we.filter(function(t){return!ve.find(function(e){return $a(t,e)})}),ve[ve.length-1],o.cell);if(Re&&ve.length+Re.length-2<=si(j))Re.shift(),(Ce=ve).push.apply(Ce,_toConsumableArray(Re));else ve=n.path=hi(we,j.cell,o.cell)}}else ve=n.path=hi(we,j.cell,o.cell);else if(ye&&!li(j,ye)&&Za(Ae,ye.cell)>j.equipment.weapon.rng){var Te=ei(ye.cell,j.equipment.weapon.rng);if(ve){var De=function(){var t=ve[qe];if(ye&&Te.find(function(e){return $a(t,e)}))return ve.splice(qe+1,ve.length-qe-1),"break"};for(qe=ve.length;qe--;){if("break"===De())break}}if(!ve||-1===qe){for(var Le=null,Ee=function(e){var t=U.move[e];if(Te.find(function(e){return $a(t,e)}))return Le=t,"break"},je=0;je<U.move.length;je++){if("break"===Ee(je))break}ve=n.path=hi(we,j.cell,Le)}}}if(ve&&(o.selection&&!n.moved||le&&_%2)){var _e,Be=i.ui.Arrow(ve);(_e=m.arrows).push.apply(_e,_toConsumableArray(Be.map(function(e){return{image:e.image,position:[16*e.position[0],16*e.position[1]]}})))}if(n.moved&&!le&&!oe&&!u.length){var Pe=null,Ue=ei(P.cell,P.equipment.weapon.rng),Ge=[],Ke=!0,Fe=!1,He=void 0;try{for(var Ne,We=Ue[Symbol.iterator]();!(Ke=(Ne=We.next()).done);Ke=!0){var Je=ni(f,Ne.value);Je&&!li(j,Je)&&Ge.push(Je)}}catch(e){Fe=!0,He=e}finally{try{!Ke&&We.return&&We.return()}finally{if(Fe)throw He}}if(Pe=(n.enemies=Ge).length?["attack","wait"]:["wait"],u.push({type:"actions",menu:fi(Pe)}),n.target){var Ve=n.target.unit,Qe=Ge.indexOf(Ve);u.unshift({type:"forecast",menu:fi(Ge,Qe)}),o.cell=Ve.cell.slice(),o.prev=Ve.cell.slice()}}}if(e.state.paused)if(u.length){var Xe=M.menu;if(Xe.done)"end turn"===Xe.options[Xe.index]&&ui(t),e.state.paused=!1,u.shift()}else u.push({type:"pause",menu:fi(["end turn"])});var Ye=16*o.cell[1]+8-s.target[1]>=s.size[1]/2,Ze=o.selection||n.attack&&n.attack.attacker||p&&"fade"===p.type&&n.selected||o.under,$e=n.dialogs.selection;if(!Ze||n.selected&&Ze!==n.selected||S||M||I&&$e&&8===$e.name.position[1]||!(!$e||I||n.attack||p&&"fade"===p.type)&&(Ye&&!I&&$e&&8!==$e.name.position[1]||!Ye&&$e&&8===$e.name.position[1])){if(n.selected){n.selected.unit;var et=n.dialogs.selection;et.name.position[0]>-et.name.image.width||et.hp.position[0]>-et.hp.image.width?(et.name.position[0]-=16,et.hp.position[0]-=16):(n.dialogs.selection=null,n.selected=null),m.ui.push(et.name,et.hp)}}else{n.selected||(n.selected=Ze);var tt=Ze.unit;if(!n.dialogs.selection){var at=s.size[1]-68;Ye&&!I&&(at=0);var it=i.ui.UnitDetails(tt);n.dialogs.selection={name:{image:it.name,position:[-it.name.width,at+8]},hp:{image:it.hp,position:[-it.hp.width,at+36]}}}var nt=n.dialogs.selection;Ze&&(12<=Ze.time&&(nt.name.position[0]+=(8-nt.name.position[0])/8),16<=Ze.time&&(nt.hp.position[0]+=(8-nt.hp.position[0])/8)),m.ui.push(nt.name,nt.hp)}var rt=null,lt=n.dialogs.target;if(I){var ot=I.menu;rt=ot.options[ot.index],rt=n.target?n.target.unit!==rt?{unit:rt,time:0}:n.target:n.target={unit:rt,time:0},o.cell=rt.unit.cell.slice()}else n.attack||p&&"fade"===p.type?rt=n.target:o.selection&&o.under&&o.selection!==o.under&&!li(o.selection.unit,o.under.unit)&&(rt=o.under);if(!rt||n.target&&rt!==n.target||z||I&&lt&&8===lt.name.position[1]||I&&lt&&8===lt.name.position[1]){if(n.target){n.target.unit;var st=n.dialogs.target;st.name.position[0]<s.size[0]||st.hp.position[0]<s.size[0]?(st.name.position[0]+=16,st.hp.position[0]+=16):(n.dialogs.target=null,n.target=null),m.ui.push(st.name,st.hp)}}else{n.target||(n.target=rt);var ct=rt.unit;if(!n.dialogs.target){var ut=s.size[1]-68;Ye&&!I&&(ut=0);var ft=i.ui.UnitDetails(ct);n.dialogs.target={name:{image:ft.name,position:[s.size[0],ut+8]},hp:{image:ft.hp,position:[s.size[0],ut+36]}}}var ht=n.dialogs.target;if(rt){if(12<=rt.time){var pt=ht.name;pt.position[0]+=(s.size[0]-pt.image.width-8-pt.position[0])/8}if(16<=rt.time){var gt=ht.hp;gt.position[0]+=(s.size[0]-gt.image.width-8-gt.position[0])/8}}m.ui.push(ht.name,ht.hp)}if(n.attack){var dt=n.attack.attacker.unit,mt=n.attack.target.unit,vt=n.attack.damage,yt=n.attack.power,wt=n.attack.time;if(wt>=n.attack.duration){if(n.attack=null,!mt.hp){var bt=f.units.indexOf(mt);f.units.splice(bt,1)}ci(t,dt),o.cell=dt.cell.slice(),o.prev=o.cell.slice()}else if(7<=wt){var xt,kt=n.dialogs.target.hp.image.getContext("2d"),zt=0;wt<=22?(zt=(wt-7)/15,kt.fillStyle=mi):37<=wt&&wt<=52&&(zt=(n.attack.time-7-30)/15,kt.fillStyle="black"),xt=Math.ceil(14*vt*zt),kt.fillRect(31+14*(mt.hp+vt)-xt,11,xt,2);var It=n.attack.value;if(It)It.offset+=It.velocity,It.velocity+=.25,0<It.offset&&(It.offset=0,It.velocity*=-1/3);else{var Mt=yt.toString();0===yt?Mt="Miss!":3===yt&&(Mt="3!!"),It=n.attack.value={offset:0,velocity:-2,image:i.ui.Text(Mt)}}m.damage.push({image:It.image,position:[16*mt.cell[0]+8-It.image.width/2,16*mt.cell[1]-12+It.offset]})}}if(z){var St=z.menu;if(St.done){var At=St.options[St.index];if("wait"===At){var qt=o.selection.unit,Ot=f.units.indexOf(qt),Ct=n.units[Ot];qt.cell=Ct.cell,o.selection=null,n.selection=null,n.squares.length=0,n.ranges.length=0,n.moved=!1,p.done=!0,c.push(gi("drop",p.target,pi.drop(p.data.height))),ci(t,qt),o.cell=qt.cell.slice(),o.prev=qt.cell.slice(),u.shift()}else"attack"===At&&u.unshift({type:"forecast",menu:fi(n.enemies)})}}var Rt,Tt,Dt=e.state.menu;if(M||z||I&&1<I.menu.options.length){var Lt=null;M?Lt=M.menu:I?Lt=I.menu:z&&(Lt=z.menu),Dt||(Dt=e.state.menu={data:Lt,box:{size:[0,0],targetSize:null,element:{image:null,position:[144,48]}},cursor:null});var Et=Dt.box;if(Dt.data!==Lt||!Et.targetSize){n.menu.labels.length=0,Dt.cursor=null;var jt=(Dt.data=Lt).options;I&&(jt=jt.map(function(e){return e.name}));var _t=null,Bt=!0,Pt=!1,Ut=void 0;try{for(var Gt,Kt=jt[Symbol.iterator]();!(Bt=(Gt=Kt.next()).done);Bt=!0){var Ft=Gt.value,Ht=i.ui.Text(Ft.toUpperCase());(!_t||Ht.width>_t.width)&&(_t=Ht),n.menu.labels.push(Ht)}}catch(e){Pt=!0,Ut=e}finally{try{!Bt&&Kt.return&&Kt.return()}finally{if(Pt)throw Ut}}Et.size=[0,0],Et.targetSize=[_t.width+36,16*Dt.data.options.length+16]}Et.size[0]+=(Et.targetSize[0]-Et.size[0])/4,Et.size[1]+=(Et.targetSize[1]-Et.size[1])/4}else if(Dt){var Nt=Dt.box;Nt.size[0]&&(Nt.size[0]-=Math.min(Nt.size[0],Nt.targetSize[0]/5),Nt.size[1]-=Math.min(Nt.size[1],Nt.targetSize[1]/5))}if(Dt){var Wt=Dt.box;if(Wt.size[0]&&Wt.size[1]){var Jt,Vt=Wt.targetSize[0]-Wt.size[0];if(Wt.element.image=(Jt=i.ui).Box.apply(Jt,_toConsumableArray(Wt.size.map(Math.round))),n.menu.box=Wt.element.image,Vt<4){for(var Qt=Wt.element.image.getContext("2d"),Xt=0;Xt<n.menu.labels.length;Xt++){var Yt=n.menu.labels[Xt];Qt.drawImage(Yt,24,12+16*Xt)}var Zt=null,$t=Dt.data.options[Dt.data.index];if("attack"===$t?Zt=i.ui.symbols.sword:"wait"===$t?Zt=i.ui.symbols.clock:"end turn"===$t?Zt=i.ui.symbols.next:I&&(Zt=i.ui.symbols.sword),Zt){var ea=l%180/180,ta=Math.sin(2*Math.PI*ea*2),aa=12+16*Dt.data.index-ta;null===Dt.cursor?Dt.cursor=aa:Dt.cursor+=(aa-Dt.cursor)/2,Qt.drawImage(Zt,12,Dt.cursor)}}m.ui.push(Wt.element)}}if(I){var ia=I.menu,na=ia.options[ia.index];if(!n.dialogs.forecast){var ra=i.ui.Text("COMBAT FORECAST"),la=i.ui.Box(ra.width+28,24),oa=la.getContext("2d"),sa=i.ui.symbols.eye;oa.drawImage(sa,8,8),oa.drawImage(ra,20,8),n.dialogs.forecast={title:{image:la,position:[-la.width,8]}}}var ca=n.dialogs.forecast.title;ca.position[0]+=(8-ca.position[0])/8,m.ui.push(ca);var ua=o.selection.unit,fa=f.units.indexOf(ua),ha=e.cache.units[fa],pa=ei(ha.cell,ua.equipment.weapon.rng),ga=!0,da=!1,ma=void 0;try{for(var va,ya=pa[Symbol.iterator]();!(ga=(va=ya.next()).done);ga=!0){var wa=va.value;m.squares.push({image:i.ui.squares.attack,position:[16*wa[0],16*wa[1]]})}}catch(e){da=!0,ma=e}finally{try{!ga&&ya.return&&ya.return()}finally{if(da)throw ma}}void 0===g.time?g.time=0:g.time++;var ba=Math.floor(14),xa=255*Math.sin(g.time%60/60*Math.PI),ka=Za(ha.cell,na.cell),za=!1,Ia=n.dialogs.target;if(Ia){var Ma=Math.min(na.hp,ka<=ua.equipment.weapon.rng?oi(ua,na):0);if(Ma){na.hp-Ma<=0&&(za=!0);var Sa=Ya(Ma*ba,2);Sa.fillStyle="rgb("+xa+", "+xa+", "+xa+")",Sa.fillRect(0,0,Sa.canvas.width,Sa.canvas.height),m.ui.push({image:Sa.canvas,position:[Ia.hp.position[0]+31+(na.hp-Ma)*ba,Ia.hp.position[1]+11]})}}if(!za){var Aa=n.dialogs.selection;if(Aa){var qa=Math.min(ua.hp,ka<=na.equipment.weapon.rng?oi(na,ua):0);if(qa){var Oa=Ya(qa*ba,2);Oa.fillStyle="rgb("+xa+", "+xa+", "+xa+")",Oa.fillRect(0,0,Oa.canvas.width,Oa.canvas.height),m.ui.push({image:Oa.canvas,position:[Aa.hp.position[0]+31+(ua.hp-qa)*ba,Aa.hp.position[1]+11]})}}}if(ia.done){var Ca=oi(ua,na),Ra=Math.min(na.hp,Ca);n.attack={attacker:n.selected,target:n.target,power:Ca,damage:Ra,value:null,time:0,duration:60},ua.cell=ha.cell,Tt=oi(ua,Rt=na),Rt.hp-=Math.min(Rt.hp,Tt),n.squares.length=0,n.ranges.length=0,n.moved=!1,o.selection=null,n.selection=null,u.length=0,p.done=!0,c.push(gi("attack",ha,pi.attack(ua.cell,na.cell)))}}else{var Ta=n.dialogs.forecast;if(Ta){var Da=Ta.title;Da.position[0]>-Da.image.width?(Da.position[0]-=Math.max(16,-Da.image.width-Da.position[0]),m.ui.push(Da)):n.dialogs.forecast=null}}var La=n.dialogs.objective;if(!La){var Ea=i.ui.TextBox("OBJECTIVE"),ja=i.ui.TextBox("Defeat all enemies");La=n.dialogs.objective={lastUpdate:null,time:0,title:{image:Ea,position:[s.size[0],s.size[1]-Ea.height-36]},body:{image:ja,position:[s.size[0],s.size[1]-ja.height-8]}}}if(f.units.length!==La.lastUpdate){var _a=f.units.filter(function(e){return"enemy"===e.faction}),Ba=_a.length;La.body.image=i.ui.TextBox("Defeat ("+Ba+") enem"+(1===Ba?"y":"ies")),La.lastUpdate=_a.length}var Pa=La,Ua=Pa.title,Ga=Pa.body;o.selection||o.under||n.attack||M||!(Za(o.cell,o.prev)<.001)||Ye!==(8===Ua.position[1])&&(Ua.position[0]!==s.size[0]||Ga.position[0]!==s.size[0])?La.time=0:La.time||(La.time=1);if(La.time&&(Ua.position[0]===s.size[0]&&(Ye?(Ua.position[1]=8,Ga.position[1]=36):(Ua.position[1]=s.size[1]-Ua.image.height-36,Ga.position[1]=s.size[1]-Ga.image.height-8)),90<=++La.time&&(Ua.position[0]+=(s.size[0]-Ua.image.width-8-Ua.position[0])/8),94<=La.time&&(Ga.position[0]+=(s.size[0]-Ga.image.width-8-Ga.position[0])/8)),La.time<90&&(Ua.position[0]<s.size[0]||Ga.position[0]<s.size[0])&&(Ua.position[0]+=Math.min(16,s.size[0]-Ua.position[0]),Ga.position[0]+=Math.min(16,s.size[0]-Ga.position[0]),La.time=0),m.ui.push(Ua,Ga),S){var Ka=0,Fa=p.data,Ha=i.ui.phases[p.target];if("enter"===Fa.state){var Na=-Ha.width,Wa=s.size[0]/2-Ha.width/2-3;Ka=Fa.text.x*(Wa-Na)+Na}else if("pass"===Fa.state){var Ja=s.size[0]/2-Ha.width/2-3;Ka=6*Fa.text.x+Ja}else if("exit"===Fa.state){var Va=s.size[0]/2-Ha.width/2+3,Qa=s.size[0];Ka=Fa.text.x*(Qa-Va)+Va}var Xa=Ya(256*(Fa.bg.width-Fa.bg.x),2+10*Fa.bg.height);Xa.fillStyle="player"===p.target?di:mi,Xa.fillRect(0,0,Xa.canvas.width,Xa.canvas.height),Xa.canvas.width&&m.ui.push({image:Xa.canvas,position:[256*Fa.bg.x,s.size[1]/2-Xa.canvas.height/2]}),m.ui.push({image:Ha,position:[Ka,s.size[1]/2-Ha.height/2]})}n.attack&&3===n.attack.power&&7===n.attack.time?(a.fillStyle="white",a.fillRect(0,0,a.canvas.width,a.canvas.height)):(n.attack||S||(z||n.moved)&&!I||function(e,t,a,i){var n=i.state.time,r=(i.cache,a.cell[0]-a.prev[0]),l=a.cell[1]-a.prev[1],o=Math.abs(r)+Math.abs(l);a.prev[0]+=r/4,a.prev[1]+=l/4;var s=0;a.selection&&!i.state.dialogs.length?s=1:o<.001&&(s=Math.floor(n/30)%2);var c=16*a.prev[0],u=16*a.prev[1],f=t[s];e.cursor.push({image:f,position:[c,u]})}(m,i.ui.cursor,o,e),function(e,t,a,i){for(var n=a.map,r=(a.phase,i.cache),l=i.state.anims,o=l[0],s=0;s<r.units.length;s++){var c=r.units[s],u=c.original,f=c.cell,h=16*f[0],p=16*f[1],g=0,d=t[c.faction][vi[c.type]];if(!r.phase.pending||r.phase.pending.includes(u)||r.phase.faction!==c.faction||o&&o.target===c&&("move"===o.type||"attack"===o.type)||(d=t.done[c.faction][vi[c.type]]),n.units[s]===u?$a(c.cell,u.cell)||r.moved||(o.done=!0,o=l[0]=gi("move",c,pi.move(r.path))):l.length||(o&&(o.done=!0),o=l[0]=gi("fade",c,pi.fade())),o&&o.target===c){if("lift"===o.type||"drop"===o.type)g=o.data.height;else if("move"===o.type||"attack"===o.type)h=16*o.data.cell[0],p=16*o.data.cell[1];else if("fade"===o.type){if(o.done){r.units.splice(s--,1);continue}if(!o.data.visible)continue}e.selection.push({image:d,position:[h,p-g]})}else{if(i.cache.attack){var m=i.cache.attack;m.target.unit===u&&m.damage&&7<=m.time&&m.time%2&&(d=t.flashing)}e.pieces.push({image:d,position:[h,p]})}e.shadows.push({image:t.shadow,position:[h+1,p+4]})}}(m,i.pieces,t,e),function(e,t,a,i){var n=!0,r=!1,l=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value,u=e[c];"ui"!==c&&u.sort(function(e,t){return e.position[1]-t.position[1]});var f=!0,h=!1,p=void 0;try{for(var g,d=u[Symbol.iterator]();!(f=(g=d.next()).done);f=!0){var m=g.value,v=Math.round(m.position[0]),y=Math.round(m.position[1]-(m.position[2]||0));"ui"!==c&&(v-=a.position[0]+a.offset[0],y-=a.position[1]+a.offset[1]),i.drawImage(m.image,v,y)}}catch(e){h=!0,p=e}finally{try{!f&&d.return&&d.return()}finally{if(h)throw p}}}}catch(e){r=!0,l=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw l}}}(m,d,s,a)),c.length&&n.phase.pending||(n.phase.faction!==t.phase.faction&&(o.cell=t.phase.pending[0].cell.slice(),c.push(gi("phase",t.phase.faction,pi.phase()))),n.phase={pending:t.phase.pending.slice(),faction:t.phase.faction})}var K=15,F=3;function D(t,e,a,i){var n=e.held,r=e.prev,l=a.map,o=a.phase;if(n.confirm&&!r.confirm)if(t.selection){var s=t.selection.unit;if(o.pending.includes(s)){var c=l.units.indexOf(s),u=i.cache.units[c],f=i.cache.ranges[c];if(f){var h=i.cache.path;if(h&&h.length){var p=h[h.length-1].slice();if(f.move.find(function(e){return $a(e,t.cell)}))G(u,p);else if(f.attack.find(function(e){return $a(e,t.cell)})&&(G(u,p),!i.cache.target)){var g=ni(l,t.cell);i.cache.target={unit:g,time:0}}}else i.cache.moved=!0}}else H(t)}else t.under&&(t.selection=t.under,t.selection.time=0);if(n.mod&&t.selection&&o.pending.includes(t.selection.unit)){var d=t.selection.unit,m=l.units.indexOf(d),v=i.cache.ranges[m],y=_slicedToArray(t.cell,2);y[0],y[1];if(!n.left||r.left||n.right){if(n.right&&!r.right&&!n.left){for(var w=_slicedToArray(t.cell,2),b=w[0],x=w[1],k=0;k<v.move.length;k++){var z=v.move[k];z[1]===x&&z[0]>b&&(b=z[0])}t.cell[0]=b}}else{for(var I=_slicedToArray(t.cell,2),M=I[0],S=I[1],A=0;A<v.move.length;A++){var q=v.move[A];q[1]===S&&q[0]<M&&(M=q[0])}t.cell[0]=M}if(!n.up||r.up||n.down){if(n.down&&!r.down&&!n.up){for(var O=_slicedToArray(t.cell,2),C=O[0],R=O[1],T=0;T<v.move.length;T++){var D=v.move[T];D[0]===C&&D[1]>R&&(R=D[1])}t.cell[1]=R}}else{for(var L=_slicedToArray(t.cell,2),E=L[0],j=L[1],_=0;_<v.move.length;_++){var B=v.move[_];B[0]===E&&B[1]<j&&(j=B[1])}t.cell[1]=j}}else(n.left&&!r.left||n.left>K&&!(n.left%F))&&!n.right?N(t,"left",l):(n.right&&!r.right||n.right>K&&!(n.right%F))&&!n.left&&N(t,"right",l),(n.up&&!r.up||n.up>K&&!(n.up%F))&&!n.down?N(t,"up",l):(n.down&&!r.down||n.down>K&&!(n.down%F))&&!n.up&&N(t,"down",l);var P=ni(l,t.cell);if(P?t.under&&P===t.under.unit?t.under.time++:!t.under&&i.cache.selected&&i.cache.selected.unit===P?t.under=i.cache.selected:t.under={unit:P,time:0}:t.under=null,!t.selection&&n.select&&!r.select){var U=n.mod;!function(e,t,a){var i=t.map,n=t.phase,r=ni(i,e.cell);if(!r)return(r=n.pending.find(function(e){return e.faction===n.faction}))&&(e.cell=r.cell.slice());var l=r.faction===n.faction?n.pending:i.units.filter(function(e){return e.faction===r.faction}),o=l.indexOf(r),s=null;s=a?0<=o-1?l[o-1]:l[l.length-1]:o+1<l.length?l[o+1]:l[0];s&&(e.cell=s.cell.slice())}(t,a,U)}}function H(e){e.selection=null}function N(e,t,a){var i=a.layout.size;"left"===t?--e.cell[0]<0&&(e.cell[0]=0):"right"===t?++e.cell[0]>=i[0]&&(e.cell[0]=i[0]-1):"up"===t?--e.cell[1]<0&&(e.cell[1]=0):"down"===t&&++e.cell[1]>=i[1]&&(e.cell[1]=i[1]-1)}var L,E={left:["KeyA","ArrowLeft"],up:["KeyW","ArrowUp"],right:["KeyD","ArrowRight"],down:["KeyS","ArrowDown"],confirm:["Space"],cancel:["Escape"],select:["Tab"],mod:["ShiftLeft"]};(L="sprites.png",new Promise(function(e,t){var a=new Image;a.src=L,a.onload=function(){e(a)},a.onerror=function(){t(new Error("Failed to load image `"+L+"`"))}})).then(function(e){var d=(a=256,i=240,n=l(e),r=document.createElement("canvas"),r.width=a,r.height=i,{sprites:n,context:r.getContext("2d"),state:{time:0,anims:[gi("phase","player",pi.phase())],cursor:{cell:null,prev:null,selection:null,under:null},viewport:{size:[a,i],position:null,offset:[0,0],target:null,shake:0},menu:null,paused:!1,dialogs:[]},cache:{map:null,selection:null,selected:null,target:null,moved:!1,attack:null,phase:{pending:null,faction:"player"},units:null,ranges:[],squares:[],menu:{box:null,labels:[]},dialogs:{objective:null,selection:null,target:null}}}),t=d.context.canvas;var a,i,n,r;document.querySelector("main").appendChild(t),function e(){T(d,B);!function(e){var t=e.cache,a=e.state;a.time++;var i=a.cursor;i.selection?i.selection.time++:t.selection&&t.selection.time++,t.target&&t.target.time++,t.attack&&t.attack.time++;var n=e.state.anims,r=n[0];r&&(r.done?n.shift():pi[r.type].update(r))}(d);var t=P.held,a=P.prev;var i=d.state.cursor;var n=d.state.anims;var r=d.state.dialogs;var l=r[0];l?(o=l.menu,c=(s=P).held,u=s.prev,c.confirm&&!u.confirm&&(o.done=!0),o.done||(c.select&&!u.select?m(o,c.mod):!c.up||u.up||c.down?!c.down||u.down||c.up||m(o):m(o,!0))):d.cache.attack||d.cache.moved||n.length&&"phase"===n[0].type||n.length&&"fade"===n[0].type||D(i,P,B,d);var o,s,c,u;if(t.cancel&&!a.cancel){var f=d.state.anims[0];if(!f||"move"!==f.type)if(l){if("pause"===l.type)d.state.paused=!1;else if("actions"===l.type){var h=d.state.cursor.selection.unit,p=B.map.units.indexOf(h);d.cache.units[p].cell=h.cell,d.cache.moved=null}r.shift(),r.length&&"actions"===(l=r[0]).type&&(l.menu.done=!1)}else i.selection?H(i):f&&"phase"===f.type||(d.state.paused=!0)}g=P,Object.assign(g.prev,g.held);var g;requestAnimationFrame(e)}()});var j,_,B=(_=(j=e).units.map(function(e){return function(e,t,a,i,n){return{name:e,type:t,faction:a,ai:i,cell:n,hp:3,stats:p[t],equipment:d[t]}}.apply(void 0,_toConsumableArray(e))}),{map:{layout:j.layout,units:_},phase:{faction:"player",pending:_.filter(function(e){return"player"===e.faction})}}),P={held:function(e,i){var n={},r=!1;function t(e){var t=null;if(i)for(var t in i){for(var a=0;a<i[t].length&&i[t][a]!==e.code;a++);if(a<i[t].length)break;t=null}t||(t=e.code),"keydown"===e.type?n[t]||(n[t]=1):"keyup"===e.type&&(n[t]=0),r||(r=!0,requestAnimationFrame(l))}function l(){for(var e in n)n[e]&&n[e]++;requestAnimationFrame(l)}return e.addEventListener("keydown",t),e.addEventListener("keyup",t),n}(window,E),prev:{}};window.addEventListener("keydown",function(e){"Tab"===e.code&&e.preventDefault()})}();