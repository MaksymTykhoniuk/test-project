"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[861],{2199:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var c=t(2791),i=t(3433),r=t(9439),s=t(9434),a=t(6351),l=t(1243),o=t(7087),u=(t(9713),t(5528)),d=t(184),h=["\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0456\u043d\u0435","\u0442\u043e\u043d\u043a\u0435"],x=function(e){var n=e.item,t=(0,s.I0)(),i=n.id,a=n.imageUrl,l=n.title,x=n.types,f=n.sizes,m=n.price,j=n.ingredients,p=(0,c.useState)(0),v=(0,r.Z)(p,2),w=v[0],z=v[1],C=(0,c.useState)(26),b=(0,r.Z)(C,2),_=b[0],g=b[1],k=(0,c.useState)(!1),N=(0,r.Z)(k,2),y=N[0],Z=N[1],L=function(){return"".concat(30===_?Math.round(1.2*m):40===_?Math.round(1.35*m):m," \u20b4")};return(0,d.jsx)("div",{className:"pizza-block-wrapper",children:(0,d.jsxs)("li",{className:"pizza-block",children:[(0,d.jsxs)("div",{className:"pizza-block__image-wrapper",children:[(0,d.jsx)(o.LazyLoadImage,{className:"pizza-block__image",src:a,width:260,height:260,effect:"blur",alt:"Pizza"}),(0,d.jsx)("button",{onClick:function(){return Z((function(e){return!e}))},className:"pizza-block__info",type:"button",children:"i"}),y&&(0,d.jsx)("div",{className:"pizza-block__overlay",children:(0,d.jsxs)("p",{className:"pizza-block__overlay-desc",children:["\u0421\u043a\u043b\u0430\u0434: ",j]})})]}),(0,d.jsx)("h4",{className:"pizza-block__title",children:l}),(0,d.jsxs)("div",{className:"pizza-block__selector",children:[(0,d.jsx)("ul",{children:x.map((function(e){return(0,d.jsx)("li",{onClick:function(){return function(e){return z(e)}(e)},className:w===e?"active":"",children:h[e]},e)}))}),(0,d.jsx)("ul",{children:f.map((function(e){return(0,d.jsxs)("li",{onClick:function(){return g(e)},className:_===e?"active":"",children:[e," \u0441\u043c"]},e)}))})]}),(0,d.jsxs)("div",{className:"pizza-block__bottom",children:[(0,d.jsx)("div",{className:"pizza-block__price",children:L()}),(0,d.jsxs)("button",{onClick:function(){var e={id:i,title:l,price:L(),imageUrl:a,type:w,size:_};t((0,u.jX)(e))},className:"button button--outline button--add",children:[(0,d.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),(0,d.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"}),(0,d.jsx)("i",{children:"0"})]})]})]})})},f=t(8175),m=function(){return(0,d.jsxs)(f.ZP,{className:"pizza-block",speed:2,width:280,height:500,viewBox:"0 0 280 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,d.jsx)("circle",{cx:"134",cy:"136",r:"125"}),(0,d.jsx)("rect",{x:"0",y:"279",rx:"10",ry:"10",width:"280",height:"23"}),(0,d.jsx)("rect",{x:"0",y:"326",rx:"10",ry:"10",width:"280",height:"88"}),(0,d.jsx)("rect",{x:"0",y:"436",rx:"10",ry:"10",width:"95",height:"30"}),(0,d.jsx)("rect",{x:"125",y:"427",rx:"24",ry:"24",width:"152",height:"45"})]})},j=t(1509),p=["\u0423\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0411\u0435\u0437 \u043c'\u044f\u0441\u0430","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456"],v=function(){var e=(0,s.I0)(),n=(0,s.v9)(a.ZI);return(0,d.jsx)("div",{className:"categories",children:(0,d.jsx)("ul",{children:p.map((function(t,c){return(0,d.jsx)("li",{onClick:function(){return n=c,e((0,j.qj)(n));var n},className:n===c?"active":"",children:t},c)}))})})},w=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0456",value:"rating"},{name:"\u0446\u0456\u043d\u0456 \u2b07",value:"-price"},{name:"\u0446\u0456\u043d\u0456 \u2b06",value:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443",value:"title"}],z=function(){var e=(0,s.I0)(),n=(0,c.useRef)(),t=(0,s.v9)(a.wJ),i=(0,c.useState)(!1),l=(0,r.Z)(i,2),o=l[0],u=l[1],h=function(n){var t;t=n,e((0,j.ni)(t)),u((function(e){return!e}))},x=function(e){e.composedPath().includes(n.current)||u(!1)};return(0,c.useEffect)((function(){return document.body.addEventListener("click",x),function(){document.body.removeEventListener("click",x)}}),[]),(0,d.jsxs)("div",{ref:n,className:"sort",children:[(0,d.jsxs)("div",{className:"sort__label",children:[(0,d.jsx)("svg",{className:o?"sort__svg--active":"sort__svg",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),(0,d.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:"}),(0,d.jsx)("span",{onClick:function(){return u((function(e){return!e}))},children:t.name})]}),o&&(0,d.jsx)("div",{className:"sort__popup",children:(0,d.jsx)("ul",{children:w.map((function(e,n){return(0,d.jsx)("li",{onClick:function(){return h(e)},className:t.name===e.name?"active":"",children:e.name},n)}))})})]})},C=["\u0423\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0411\u0435\u0437 \u043c'\u044f\u0441\u0430","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456"],b=function(){var e=(0,s.v9)(a.ZI),n=(0,s.v9)(a.wJ),t=(0,s.v9)(a.sh),o=(0,c.useState)([]),u=(0,r.Z)(o,2),h=u[0],f=u[1],j=(0,c.useState)(!0),p=(0,r.Z)(j,2),w=p[0],b=p[1];(0,c.useEffect)((function(){var t=e>0?"category=".concat(e):"",c=n.value.includes("-")?"desc":"asc",i="sortBy=".concat(n.value.replace("-",""),"&order=").concat(c);b(!0),l.Z.get("https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items?".concat(t,"&").concat(i)).then((function(e){f(e.data),b(!1)})).catch((function(e){throw new Error(e)})),window.scroll(0,0)}),[e,n]);var _=t.toLowerCase(),g=(0,i.Z)(new Array(6)).map((function(e,n){return(0,d.jsx)(m,{},n)})),k=h.filter((function(e){return e.title.toLowerCase().includes(_)})).map((function(e){return(0,d.jsx)(x,{item:e},e.id)})),N=k.length,y="\u041f\u0456\u0446\u0438 ".concat(C[e].toLocaleLowerCase());return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"content__top",children:[(0,d.jsx)(v,{}),(0,d.jsx)(z,{})]}),(0,d.jsx)("h2",{className:"content__title",children:2===e?y:"".concat(C[e]," \u043f\u0456\u0446\u0438")}),(0,d.jsx)("ul",{className:"content__items",children:w?g:k}),0===N&&(0,d.jsx)("h1",{children:"Sorry, but there are no results for your query"})]})},_=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(b,{})})}}}]);
//# sourceMappingURL=861.a19d766f.chunk.js.map