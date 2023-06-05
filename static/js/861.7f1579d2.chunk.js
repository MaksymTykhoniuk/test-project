"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[861],{938:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(791),i=t(433),c=t(439),s=t(874),a=(t(713),t(184)),l=["\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0456\u043d\u0435","\u0442\u043e\u043d\u043a\u0435"],o=function(e){var n=e.item,t=n.imageUrl,i=n.title,o=n.types,u=n.sizes,h=n.price,d=n.ingredients,x=(0,r.useState)(0),f=(0,c.Z)(x,2),m=f[0],j=f[1],p=(0,r.useState)(26),v=(0,c.Z)(p,2),C=v[0],g=v[1],z=(0,r.useState)(!1),_=(0,c.Z)(z,2),w=_[0],b=_[1];return(0,a.jsx)("div",{className:"pizza-block-wrapper",children:(0,a.jsxs)("li",{className:"pizza-block",children:[(0,a.jsxs)("div",{className:"pizza-block__image-wrapper",children:[(0,a.jsx)(s.LazyLoadImage,{className:"pizza-block__image",src:t,width:260,height:260,effect:"blur",alt:"Pizza"}),(0,a.jsx)("button",{onClick:function(){return b((function(e){return!e}))},className:"pizza-block__info",type:"button",children:"i"}),w&&(0,a.jsx)("div",{className:"pizza-block__overlay",children:(0,a.jsxs)("p",{className:"pizza-block__overlay-desc",children:["\u0421\u043a\u043b\u0430\u0434: ",d]})})]}),(0,a.jsx)("h4",{className:"pizza-block__title",children:i}),(0,a.jsxs)("div",{className:"pizza-block__selector",children:[(0,a.jsx)("ul",{children:o.map((function(e){return(0,a.jsx)("li",{onClick:function(){return function(e){return j(e)}(e)},className:m===e?"active":"",children:l[e]},e)}))}),(0,a.jsx)("ul",{children:u.map((function(e){return(0,a.jsxs)("li",{onClick:function(){return g(e)},className:C===e?"active":"",children:[e," \u0441\u043c"]},e)}))})]}),(0,a.jsxs)("div",{className:"pizza-block__bottom",children:[(0,a.jsx)("div",{className:"pizza-block__price",children:"".concat(30===C?Math.round(1.2*h):40===C?Math.round(1.35*h):h," \u20b4")}),(0,a.jsxs)("button",{className:"button button--outline button--add",children:[(0,a.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),(0,a.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"}),(0,a.jsx)("i",{children:"0"})]})]})]})})},u=t(175),h=function(){return(0,a.jsxs)(u.ZP,{className:"pizza-block",speed:2,width:280,height:500,viewBox:"0 0 280 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,a.jsx)("circle",{cx:"134",cy:"136",r:"125"}),(0,a.jsx)("rect",{x:"0",y:"279",rx:"10",ry:"10",width:"280",height:"23"}),(0,a.jsx)("rect",{x:"0",y:"326",rx:"10",ry:"10",width:"280",height:"88"}),(0,a.jsx)("rect",{x:"0",y:"436",rx:"10",ry:"10",width:"95",height:"30"}),(0,a.jsx)("rect",{x:"125",y:"427",rx:"24",ry:"24",width:"152",height:"45"})]})},d=["\u0423\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0411\u0435\u0437 \u043c'\u044f\u0441\u0430","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456"],x=function(e){var n=e.value,t=e.onChangeCategory;return(0,a.jsx)("div",{className:"categories",children:(0,a.jsx)("ul",{children:d.map((function(e,r){return(0,a.jsx)("li",{onClick:function(){return t(r)},className:n===r?"active":"",children:e},r)}))})})},f=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0456",value:"rating"},{name:"\u0446\u0456\u043d\u0456 \u2b07",value:"-price"},{name:"\u0446\u0456\u043d\u0456 \u2b06",value:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443",value:"title"}],m=function(e){var n=e.value,t=e.onChangeSort,i=(0,r.useState)(!1),s=(0,c.Z)(i,2),l=s[0],o=s[1];return(0,a.jsxs)("div",{className:"sort",children:[(0,a.jsxs)("div",{className:"sort__label",children:[(0,a.jsx)("svg",{className:l?"sort__svg--active":"sort__svg",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),(0,a.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e:"}),(0,a.jsx)("span",{onClick:function(){return o((function(e){return!e}))},children:n.name})]}),l&&(0,a.jsx)("div",{className:"sort__popup",children:(0,a.jsx)("ul",{children:f.map((function(e,r){return(0,a.jsx)("li",{onClick:function(){return function(e){t(e),o((function(e){return!e}))}(e)},className:n.name===e.name?"active":"",children:e.name},r)}))})})]})},j=t(711),p=t(434),v=t(509),C=["\u0423\u0441\u0456","\u041c'\u044f\u0441\u043d\u0456","\u0411\u0435\u0437 \u043c'\u044f\u0441\u0430","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456"],g=function(){var e=(0,p.I0)(),n=(0,p.v9)((function(e){return e.filter.categoryId})),t=(0,p.v9)((function(e){return e.filter.sort})),s=(0,r.useContext)(j.J).searchQuery,l=(0,r.useState)([]),u=(0,c.Z)(l,2),d=u[0],f=u[1],g=(0,r.useState)(!0),z=(0,c.Z)(g,2),_=z[0],w=z[1];(0,r.useEffect)((function(){var e=n>0?"category=".concat(n):"",r=t.value.includes("-")?"desc":"asc",i="sortBy=".concat(t.value.replace("-",""),"&order=").concat(r);w(!0),fetch("https://644fc5e0ba9f39c6ab6c0206.mockapi.io/items?".concat(e,"&").concat(i)).then((function(e){return e.json()})).then((function(e){f(e),w(!1)})).catch((function(e){throw new Error(e)})),window.scroll(0,0)}),[n,t]);var b=s.toLowerCase(),N=(0,i.Z)(new Array(6)).map((function(e,n){return(0,a.jsx)(h,{},n)})),k=d.filter((function(e){return e.title.toLowerCase().includes(b)})).map((function(e){return(0,a.jsx)(o,{item:e},e.id)})),y=k.length;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"content__top",children:[(0,a.jsx)(x,{value:n,onChangeCategory:function(n){return function(n){return e((0,v.qj)(n))}(n)}}),(0,a.jsx)(m,{value:t,onChangeSort:function(n){return function(n){return e((0,v.ni)(n))}(n)}})]}),(0,a.jsxs)("h2",{className:"content__title",children:[C[n]," \u043f\u0456\u0446\u0438"]}),(0,a.jsx)("ul",{className:"content__items",children:_?N:k}),0===y&&(0,a.jsx)("h1",{children:"Sorry, but there are no results for your query"})]})},z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g,{})})}}}]);
//# sourceMappingURL=861.7f1579d2.chunk.js.map