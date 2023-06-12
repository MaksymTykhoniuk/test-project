"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[861],{2199:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var c=t(2791),i=t(3433),r=t(9439),s=t(9434),a=t(6351),l=t(1243),o=t(8820),u=t(7087),d=(t(9713),t(5528)),h=t(184),x=["\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0456\u043d\u0435","\u0442\u043e\u043d\u043a\u0435"],f=function(e){var n=e.item,t=(0,s.I0)(),i=n.id,a=n.imageUrl,l=n.title,f=n.types,m=n.sizes,j=n.price,p=n.ingredients,v=(0,c.useState)(0),z=(0,r.Z)(v,2),b=z[0],_=z[1],w=(0,c.useState)(26),g=(0,r.Z)(w,2),k=g[0],N=g[1],C=(0,c.useState)(!1),y=(0,r.Z)(C,2),Z=y[0],L=y[1],S=(0,c.useState)(!1),I=(0,r.Z)(S,2),E=I[0],B=I[1],M=function(){return 30===k?Math.round(1.2*j):40===k?Math.round(1.35*j):j};return(0,h.jsx)("div",{className:"pizza-block-wrapper",children:(0,h.jsxs)("li",{className:"pizza-block",children:[(0,h.jsxs)("div",{className:"pizza-block__image-wrapper",children:[(0,h.jsx)(u.LazyLoadImage,{className:"pizza-block__image",src:a,width:260,height:260,effect:"blur",alt:"Pizza"}),(0,h.jsx)("button",{onClick:function(){return L((function(e){return!e}))},className:"pizza-block__info",type:"button",children:"i"}),Z&&(0,h.jsx)("div",{className:"pizza-block__overlay",children:(0,h.jsxs)("p",{className:"pizza-block__overlay-desc",children:["\u0421\u043a\u043b\u0430\u0434: ",p]})})]}),(0,h.jsx)("h4",{className:"pizza-block__title",children:l}),(0,h.jsxs)("div",{className:"pizza-block__selector",children:[(0,h.jsx)("ul",{children:f.map((function(e){return(0,h.jsx)("li",{onClick:function(){return function(e){return _(e)}(e)},className:b===e?"active":"",children:x[e]},e)}))}),(0,h.jsx)("ul",{children:m.map((function(e){return(0,h.jsxs)("li",{onClick:function(){return N(e)},className:k===e?"active":"",children:[e," \u0441\u043c"]},e)}))})]}),(0,h.jsxs)("div",{className:"pizza-block__bottom",children:[(0,h.jsx)("div",{className:"pizza-block__price",children:"".concat(M(),"\u20b4")}),E?(0,h.jsxs)("button",{className:"button--added ",children:[(0,h.jsx)(o.bzc,{size:20,fill:"white"}),(0,h.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u043d\u043e"})]}):(0,h.jsxs)("button",{onClick:function(){var e={id:i,title:l,price:M(),imageUrl:a,type:b,size:k,count:1};B(!0),setTimeout((function(){B(!1)}),2e3),t((0,d.jX)(e))},className:"button button--outline button--add",children:[(0,h.jsx)(o.Lfi,{size:20}),(0,h.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})]})})},m=t(8175),j=function(){return(0,h.jsxs)(m.ZP,{className:"pizza-block",speed:2,width:280,height:500,viewBox:"0 0 280 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,h.jsx)("circle",{cx:"134",cy:"136",r:"125"}),(0,h.jsx)("rect",{x:"0",y:"279",rx:"10",ry:"10",width:"280",height:"23"}),(0,h.jsx)("rect",{x:"0",y:"326",rx:"10",ry:"10",width:"280",height:"88"}),(0,h.jsx)("rect",{x:"0",y:"436",rx:"10",ry:"10",width:"95",height:"30"}),(0,h.jsx)("rect",{x:"125",y:"427",rx:"24",ry:"24",width:"152",height:"45"})]})},p=t(1509),v=["\u0423\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0411\u0435\u0437 \u043c'\u044f\u0441\u0430","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456"],z=function(){var e=(0,s.I0)(),n=(0,s.v9)(a.ZI);return(0,h.jsx)("div",{className:"categories",children:(0,h.jsx)("ul",{children:v.map((function(t,c){return(0,h.jsx)("li",{onClick:function(){return n=c,e((0,p.qj)(n));var n},className:n===c?"active":"",children:t},c)}))})})},b=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0456",value:"rating"},{name:"\u0446\u0456\u043d\u0456 \u2b07",value:"-price"},{name:"\u0446\u0456\u043d\u0456 \u2b06",value:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443",value:"title"}],_=function(){var e=(0,s.I0)(),n=(0,c.useRef)(),t=(0,s.v9)(a.wJ),i=(0,c.useState)(!1),l=(0,r.Z)(i,2),o=l[0],u=l[1],d=function(n){var t;t=n,e((0,p.ni)(t)),u((function(e){return!e}))},x=function(e){e.composedPath().includes(n.current)||u(!1)};return(0,c.useEffect)((function(){return document.body.addEventListener("click",x),function(){document.body.removeEventListener("click",x)}}),[]),(0,h.jsxs)("div",{ref:n,className:"sort",children:[(0,h.jsxs)("div",{className:"sort__label",children:[(0,h.jsx)("svg",{className:o?"sort__svg--active":"sort__svg",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),(0,h.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:"}),(0,h.jsx)("span",{onClick:function(){return u((function(e){return!e}))},children:t.name})]}),o&&(0,h.jsx)("div",{className:"sort__popup",children:(0,h.jsx)("ul",{children:b.map((function(e,n){return(0,h.jsx)("li",{onClick:function(){return d(e)},className:t.name===e.name?"active":"",children:e.name},n)}))})})]})},w=["\u0423\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0411\u0435\u0437 \u043c'\u044f\u0441\u0430","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456"],g=function(){var e=(0,s.v9)(a.ZI),n=(0,s.v9)(a.wJ),t=(0,s.v9)(a.sh),o=(0,c.useState)([]),u=(0,r.Z)(o,2),d=u[0],x=u[1],m=(0,c.useState)(!0),p=(0,r.Z)(m,2),v=p[0],b=p[1];(0,c.useEffect)((function(){var t=e>0?"category=".concat(e):"",c=n.value.includes("-")?"desc":"asc",i="sortBy=".concat(n.value.replace("-",""),"&order=").concat(c);b(!0),l.Z.get("https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items?".concat(t,"&").concat(i)).then((function(e){x(e.data),b(!1)})).catch((function(e){throw new Error(e)})),window.scroll(0,0)}),[e,n]);var g=t.toLowerCase(),k=(0,i.Z)(new Array(6)).map((function(e,n){return(0,h.jsx)(j,{},n)})),N=d.filter((function(e){return e.title.toLowerCase().includes(g)})).map((function(e){return(0,h.jsx)(f,{item:e},e.id)})),C=N.length,y="\u041f\u0456\u0446\u0438 ".concat(w[e].toLocaleLowerCase());return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"content__top",children:[(0,h.jsx)(z,{}),(0,h.jsx)(_,{})]}),(0,h.jsx)("h2",{className:"content__title",children:2===e?y:"".concat(w[e]," \u043f\u0456\u0446\u0438")}),(0,h.jsx)("ul",{className:"content__items",children:v?k:N}),0===C&&(0,h.jsx)("h1",{children:"Sorry, but there are no results for your query"})]})},k=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(g,{})})}}}]);
//# sourceMappingURL=861.7909b810.chunk.js.map