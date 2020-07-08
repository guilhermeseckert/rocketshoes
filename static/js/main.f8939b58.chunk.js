(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),c=e(17),o=e.n(c),u=e(19),i=e(13),l=e(26),s=e(11),d=e(12),p=(e(76),e(56)),m=e.n(p);function b(){var n=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n  *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px, Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n\n  }\n  button {\n    cursor: pointer;\n  }\n"]);return b=function(){return n},n}var f=Object(d.a)(b(),m.a),g=(e(77),e(89),e(90),e(21)),x=e(18);function E(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return E=function(){return n},n}function v(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n"]);return v=function(){return n},n}var O=d.b.header(v()),h=Object(d.b)(g.a)(E()),y=e(60),j=e.n(y);function k(){var n=Object(i.c)((function(n){return n.cart.length}));return r.a.createElement(O,null,r.a.createElement(g.a,{to:"/"},r.a.createElement("img",{src:j.a,alt:"rocketshoes"})),r.a.createElement(h,{to:"/cart"},r.a.createElement("div",null,r.a.createElement("strong",null,"Meu Carrinho"),r.a.createElement("span",null," ",n," Itens")),r.a.createElement(x.e,{size:36,color:"#fff"})))}var w=e(14),S=e.n(w),U=e(22),A=e(63),C=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format,R=e(61),D=e.n(R).a.create({baseURL:"http://localhost:3333"}),T=e(32);function z(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"]);return z=function(){return n},n}var _=d.b.ul(z(),Object(T.a)(.03,"#7159c1"));function I(n,t){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:t}}function M(n,t){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:t}}function N(){var n=Object(a.useState)([]),t=Object(A.a)(n,2),e=t[0],c=t[1],o=Object(i.c)((function(n){return n.cart.reduce((function(n,t){return n[t.id]=t.amount,n}),{})})),u=Object(i.b)();return Object(a.useEffect)((function(){!function(){var n,t;S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.awrap(D.get("products"));case 2:n=e.sent,t=n.data.map((function(n){return Object(U.a)({},n,{priceFormatted:C(n.price)})})),c(t);case 5:case"end":return e.stop()}}))}()}),[]),r.a.createElement(_,null,e.map((function(n){return r.a.createElement("li",{key:n.id},r.a.createElement("img",{src:n.image,alt:n.title}),r.a.createElement("strong",null,n.title),r.a.createElement("span",null,n.priceFormatted),r.a.createElement("button",{type:"button",onClick:function(){return t=n.id,void u(function(n){return{type:"@cart/ADD_REQUEST",id:n}}(t));var t}},r.a.createElement("div",null,r.a.createElement(x.b,{size:16,color:"#fff"})," ",o[n.id]||0),r.a.createElement("span",null,"ADICIONAR AO CARRINHO")))})))}function F(){var n=Object(s.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]);return F=function(){return n},n}function Q(){var n=Object(s.a)(["\n  width: 100%;\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n  img {\n    height: 100px;\n  }\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n  }\n"]);return Q=function(){return n},n}function L(){var n=Object(s.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return L=function(){return n},n}var P=d.b.div(L(),Object(T.a)(.03,"#7159c1")),q=d.b.table(Q()),B=d.b.div(F());function J(){var n=Object(i.c)((function(n){return C(n.cart.reduce((function(n,t){return n+t.price*t.amount}),0))})),t=Object(i.c)((function(n){return n.cart.map((function(n){return Object(U.a)({},n,{subtotal:C(n.price*n.amount)})}))})),e=Object(i.b)();return r.a.createElement(P,null,r.a.createElement(q,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"produto"),r.a.createElement("th",null,"qtd"),r.a.createElement("th",null,"subtotal"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(n){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:n.image,alt:n.title})),r.a.createElement("td",null,r.a.createElement("strong",null,n.title),r.a.createElement("span",null,n.priceFormatted)),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return function(n){e(I(n.id,n.amount-1))}(n)}},r.a.createElement(x.d,{Size:20,color:"#7159c1"})),r.a.createElement("input",{type:"number",readOnly:!0,value:n.amount}),r.a.createElement("button",{type:"button",onClick:function(){return function(n){e(I(n.id,n.amount+1))}(n)}},r.a.createElement(x.a,{size:20,color:"#7159c1"})))),r.a.createElement("td",null,r.a.createElement("strong",null,n.subtotal," ")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",onClick:function(){return e({type:"@cart/REMOVE",id:n.id})}},r.a.createElement(x.c,{size:20,color:"#7159c1"}))))})))),r.a.createElement("footer",null,r.a.createElement("button",{type:"button"}," Finalizar pedido"),r.a.createElement(B,null,r.a.createElement("span",null," Total"),r.a.createElement("strong",null,n))))}function V(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:N}),r.a.createElement(u.a,{path:"/cart",exact:!0,component:J}))}var H=e(15),G=e(64),K=e(33);var W=Object(H.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@cart/ADD_SUCCESS":return Object(K.a)(n,(function(n){var e=t.product;n.push(e)}));case"@cart/REMOVE":return Object(K.a)(n,(function(n){var e=n.findIndex((function(n){return n.id===t.id}));e>=0&&n.splice(e,1)}));case"@cart/UPDATE_AMOUNT_SUCCESS":return Object(K.a)(n,(function(n){var e=n.findIndex((function(n){return n.id===t.id}));e>=0&&(n[e].amount=Number(t.amount))}));default:return n}}}),X=e(9),Y=e(62),Z=Object(Y.a)(),$=S.a.mark(tn),nn=S.a.mark(en);function tn(n){var t,e,a,r,c,o,u,i;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=n.id,s.next=3,Object(X.select)((function(n){return n.cart.find((function(n){return n.id===t}))}));case 3:return e=s.sent,s.next=6,Object(X.call)(D.get,"/stock/".concat(t));case 6:if(a=s.sent,r=a.data.amount,c=e?e.amount:0,!((o=c+1)>r)){s.next=13;break}return l.b.error("Quantidade solicitada fora de estoque"),s.abrupt("return");case 13:if(!e){s.next=18;break}return s.next=16,Object(X.put)(M(t,o));case 16:s.next=25;break;case 18:return s.next=20,Object(X.call)(D.get,"/products/".concat(t));case 20:return u=s.sent,i=Object(U.a)({},u.data,{amount:1,priceFromatted:C(u.data.price)}),s.next=24,Object(X.put)({type:"@cart/ADD_SUCCESS",product:i});case 24:Z.push("/cart");case 25:case"end":return s.stop()}}),$)}function en(n){var t,e,a,r;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(t=n.id,!((e=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object(X.call)(D.get,"/stock/".concat(t));case 5:if(a=c.sent,r=a.data.amount,!(e>r)){c.next=10;break}return l.b.error("Quantidade solicitada fora de estoque"),c.abrupt("return");case 10:return c.next=12,Object(X.put)(M(t,e));case 12:case"end":return c.stop()}}),nn)}var an=Object(X.all)([Object(X.takeLatest)("@cart/ADD_REQUEST",tn),Object(X.takeLatest)("@cart/UPDATE_AMOUNT_REQUEST",en)]),rn=S.a.mark(cn);function cn(){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(X.all)([an]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),rn)}var on=Object(G.a)({sagaMonitor:null}),un=Object(H.a)(on),ln=Object(H.e)(W,un);on.run(cn);var sn=ln;var dn=function(){return r.a.createElement(i.a,{store:sn},r.a.createElement(u.b,{history:Z},r.a.createElement(k,null),r.a.createElement(V,null),r.a.createElement(f,null),r.a.createElement(l.a,{autoClose:3e3})))};o.a.render(r.a.createElement(dn,null),document.getElementById("root"))},56:function(n,t,e){n.exports=e.p+"static/media/background.3c9a1ce5.svg"},60:function(n,t,e){n.exports=e.p+"static/media/logo.879557c5.svg"},67:function(n,t,e){n.exports=e(109)}},[[67,1,2]]]);
//# sourceMappingURL=main.f8939b58.chunk.js.map