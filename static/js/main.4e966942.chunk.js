(this["webpackJsonptorque-games"]=this["webpackJsonptorque-games"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var i,o,r,a,c,s=n(10),l=n.n(s),u=n(13),p=n.n(u),d=(n(19),n(20),n(8)),h=n.n(d),m=n(11),g=n(5),f=n(14),x=n(6),b=0,j=0,w=new f.a,y=performance.now();function v(){var t=performance.now(),e=.001*(t-y);y=t,requestAnimationFrame(v),a.position.x+=b*e,a.position.y+=j*e,a.position.x=Math.max(-20,Math.min(a.position.x,20)),a.position.y=Math.max(-10,Math.min(a.position.y,10)),c.up=a.position,r.render(i,o)}function z(t){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=new g.q).background=new g.b("rgb(0,0,0,00)"),o=new g.n(75,e.clientWidth/e.clientHeight),(r=new g.s).setSize(e.clientWidth,e.clientHeight),t.next=7,w.loadAsync("./torquelogo.obj");case 7:return c=t.sent,console.log(c),c.children[0].material=new g.m({color:"aaa",roughness:.2,metalness:.7}),c.rotation.x=.5*Math.PI,i.add(c),(a=new g.c("white",1)).target=c,a.position.x=10,a.position.y=10,a.position.z=20,i.add(a),o.position.z=2,t.abrupt("return",r.domElement);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return Object(s.useEffect)((function(){(function(){var t=Object(m.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e=document.getElementById("Render")).children.length){t.next=7;break}return t.next=4,z({clientWidth:e.clientWidth,clientHeight:e.clientHeight});case 4:n=t.sent,e.appendChild(n),v();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(){}))})),Object(x.jsx)("div",{id:"Render",style:{"background-color":"black",top:"10px",position:"absolute",width:"25%",height:"25%",transform:"translate(150%)"},onMouseMove:function(t){b=t.movementX,j=t.movementY}})}function M(t){var e=t.data,n=e.imageUrl,i=e.tittle,o=e.url;return Object(x.jsxs)("div",{style:{padding:"20px",display:"grid"},children:[Object(x.jsxs)("div",{style:{color:"white",fontSize:"300%","font-family":"'Yanone Kaffeesatz', sans-serif",padding:"10px"},children:[" ",i]}),Object(x.jsx)("img",{src:n,alt:" -- ",style:{transform:"translate(-50%)",position:"relative",maxWidth:"625px",left:"50%",maxHeight:"264px",borderRadius:"5px"}}),Object(x.jsx)("button",{style:{color:"white",backgroundColor:"black",margin:"solid  white",padding:"3px",borderRadius:"30px"},onClick:function(){window.open(o,"_blank")},children:" Download "})]})}var q=[{tittle:"Paper Protect",imageUrl:"https://img.itch.zone/aW1nLzMxNzgzMzUucG5n/original/%2BJk2Lt.png",url:"https://torquegames.itch.io/paper-protect"},{tittle:"One Rebel Army (demo)",imageUrl:"https://img.itch.zone/aW1hZ2UvNTkxNDY0LzMxMjYzOTkucG5n/original/4Lc73c.png",url:"https://torquegames.itch.io/one-rebel-army"},{tittle:"Polarize",imageUrl:"https://img.itch.zone/aW1nLzI2NzU4NjUucG5n/315x250%23c/fAZJi5.png",url:"https://torquegames.itch.io/polarize"}];var U=function(){return Object(x.jsxs)("div",{className:"appMain",children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{style:{position:"absolute",display:"flex",columnCount:2,top:"30%"},children:q.map((function(t){return Object(x.jsx)(M,{data:t})}))})]})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),o(t),r(t),a(t)}))};p.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),W()}},[[23,1,2]]]);
//# sourceMappingURL=main.4e966942.chunk.js.map