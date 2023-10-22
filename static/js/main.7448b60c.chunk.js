(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{34:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},49:function(e,t,s){},59:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var c=s(22),a=s.n(c),n=(s(44),s(1)),r=s(6),i=s(3),l=(s(45),s(46),s(0)),o=function(){return Object(l.jsx)(r.b,{to:"/",className:"logo",children:Object(l.jsx)("img",{src:"images/Logo.svg",alt:"Logo",className:"logo__img"})})},d=s(5),j=s.n(d),u=s(7),b=s(4),h=s(27),m=s.n(h),_=function(e,t){return m()(e,t)},O=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},x=function(e,t){return e.some((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},g=function(e,t,s){var c=Object(i.n)(),a=Object(i.p)(),r=new URLSearchParams(c.search),l=r.get("sort")||t,o=parseInt(r.get("page")||"1",10),d=parseInt(r.get("perPage")||String(s),10),h=Object(n.useState)([]),m=Object(b.a)(h,2),_=m[0],O=m[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),p=g[0],v=g[1],f=Object(n.useState)(l),N=Object(b.a)(f,2),y=N[0],S=N[1],C=Object(n.useState)(o),k=Object(b.a)(C,2),w=k[0],P=k[1],A=Object(n.useState)(d),I=Object(b.a)(A,2),F=I[0],B=I[1],L=_.length,T=function(){var t=Object(u.a)(j.a.mark((function t(){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,e();case 4:s=t.sent,t.t0=y,t.next="name"===t.t0?8:"price"===t.t0?10:12;break;case 8:return s.sort((function(e,t){return e.name.localeCompare(t.name)})),t.abrupt("break",14);case 10:return s.sort((function(e,t){return e.price-e.price/100*e.discount-(t.price-t.price/100*t.discount)})),t.abrupt("break",14);case 12:return s.sort((function(e,t){return t.age-e.age})),t.abrupt("break",14);case 14:return t.abrupt("return",s);case 15:return t.prev=15,v(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,,15,18]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e,t,s;e=y,t=w,s=F,r.set("sort",e),r.set("page",String(t)),r.set("perPage",String(s)),a({search:r.toString()}),T().then(O)}),[y,w,F]),{products:_,isLoading:p,sortingOption:y,currentPage:w,perPage:F,totalItems:L,handlePerPageChange:function(e){var t=e.target.value;if("all"===t)B(_.length);else{var s=parseInt(t,10);B(s)}P(1)},setSortingOption:S,setCurrentPage:P}},p=s(10),v=s(9),f=Object(n.createContext)(void 0);function N(e,t){var s=Object(n.useState)((function(){try{var s=localStorage.getItem(e);return s?JSON.parse(s):t}catch(c){return t}})),c=Object(b.a)(s,2),a=c[0],r=c[1];return[a,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]}var y=function(e){var t=e.children,s=N("cart",[]),c=Object(b.a)(s,2),a=c[0],r=c[1],i=N("productQuantities",{}),o=Object(b.a)(i,2),d=o[0],j=o[1],u=a.reduce((function(e,t){return e+(d[t.id]||0)}),0),h=function(e){return(d[e.id]||0)*(e.price-e.price*(e.discount/100))},m=a?a.reduce((function(e,t){return e+h(t)}),0):0,_=Object(n.useState)(m),O=Object(b.a)(_,2),x=O[0],g=O[1],y=Object(n.useState)({}),S=Object(b.a)(y,2),C=S[0],k=S[1];return Object(l.jsx)(f.Provider,{value:{cart:a,addToCart:function(e){var t=Object(v.a)(a),s=Object(p.a)({},d);-1!==t.findIndex((function(t){return t.id===e.id}))?s[e.id]+=1:(t.push(e),s[e.id]=1),r(t),j(s),g((function(t){return t+e.price-e.price*(e.discount/100)}))},removeFromCart:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)},getProductQuantity:function(e){return d[e]||0},totalItems:u,handleDecrement:function(e){if(d[e.id]>0){var t=Object(p.a)({},d);t[e.id]-=1,j(t),g((function(t){return t-e.price+e.price*(e.discount/100)}))}},handleIncrement:function(e){var t=Object(p.a)({},d);t[e.id]=(t[e.id]||0)+1,j(t),g((function(t){return t+e.price-e.price*(e.discount/100)}))},productQuantities:d,productPrice:h,sum:x,setSum:g,buttonStates:C,setButtonStates:k},children:t})},S=function(){var e=Object(n.useContext)(f);if(void 0===e)throw new Error("useCart must be used within a CartProvider");return e},C=Object(n.createContext)(void 0);function k(e,t){var s=Object(n.useState)((function(){try{var s=localStorage.getItem(e);return s?JSON.parse(s):t}catch(c){return t}})),c=Object(b.a)(s,2),a=c[0],r=c[1];return[a,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]}var w=function(e){var t=e.children,s=k("favProducts",[]),c=Object(b.a)(s,2),a=c[0],r=c[1],i=k("quantity",0),o=Object(b.a)(i,2),d=o[0],j=o[1],u=Object(n.useState)({}),h=Object(b.a)(u,2),m=h[0],_=h[1],O=Object(n.useState)(!0),x=Object(b.a)(O,2),g=x[0],p=x[1];Object(n.useEffect)((function(){setTimeout((function(){p(!1)}),2e3)}),[]);return Object(l.jsx)(C.Provider,{value:{products:a,toggleFav:function(e){if(m[e.id]){var t=a.filter((function(t){return t.id!==e.id}));r(t),j(t.length)}else{var s=[].concat(Object(v.a)(a),[e]);r(s),j(s.length)}},quantity:d,favStates:m,setFavStates:_,isLoading:g},children:t})},P=function(){var e=Object(n.useContext)(C);if(void 0===e)throw new Error("useFav must be used within a CartProvider");return e},A=s(38),I=s.n(A),F=(s(49),Object(n.createContext)(void 0)),B=function(e){var t=e.children,s=Object(n.useState)(""),c=Object(b.a)(s,2),a=c[0],r=c[1];return Object(l.jsx)(F.Provider,{value:{searchQuery:a,setSearchQuery:r},children:t})},L=function(){var e=Object(n.useContext)(F);if(void 0===e)throw new Error("useSearch must be used within a CartProvider");return e},T=function(){var e=L(),t=e.searchQuery,s=e.setSearchQuery,c=Object(n.useState)(""),a=Object(b.a)(c,2),r=a[0],o=a[1],d=Object(i.n)(),j=Object(i.p)(),u="/favourites"===d.pathname,h="/phones"===d.pathname,m="/tablets"===d.pathname,_="/accessories"===d.pathname;Object(n.useEffect)((function(){var e=new URLSearchParams(d.search).get("query")||"";switch(s(e),!0){case u:o("Search in favorites");break;case h:o("Search in phones");break;case m:o("Search in tablets");break;case _:o("Search in accessories");break;default:o("Search in products")}}),[u,h,m,_,d.search,s]);var O=I()((function(e){s(e);var t=new URLSearchParams(d.search);t.set("query",e),j("?".concat(t.toString()))}));return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{className:"search__input",type:"text",placeholder:r,value:t,onChange:function(e){var t=e.target.value;O(t)}}),t?Object(l.jsx)("button",{type:"button",onClick:function(){s("");var e=new URLSearchParams(d.search);e.delete("query"),j("?".concat(e.toString()))},onKeyDown:function(e){if("Enter"===e.key||"Space"===e.key){s("");var t=new URLSearchParams(d.search);t.delete("query"),j("?".concat(t.toString()))}},className:"search__icon search__icon--close","data-cy":"searchDelete",children:Object(l.jsx)("img",{src:"images/Close.svg",alt:"Delete the item"})}):Object(l.jsx)("button",{type:"button",className:"search__icon search__icon--search",children:Object(l.jsx)("img",{src:"images/Search.svg",alt:"Find the item"})})]})},E=function(e){var t=e.isActive;return _("header__navbar-item",{"header__navbar-item--active":t})},D=function(e){var t=e.isActive;return _("header__link",{"header__link--active":t})},H=function(){var e=S().totalItems,t=P().quantity,s=Object(i.n)(),c="/cart"===s.pathname,a="/favourites"===s.pathname||"/phones"===s.pathname||"/tablets"===s.pathname||"/accessories"===s.pathname;return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{className:"header__nav",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)(o,{}),!c&&Object(l.jsxs)("div",{className:"header__navbar",children:[Object(l.jsx)(r.c,{to:"/",className:E,children:"Home"}),Object(l.jsx)(r.c,{to:"/phones",className:E,children:"Phones"}),Object(l.jsx)(r.c,{to:"/tablets",className:E,children:"Tablets"}),Object(l.jsx)(r.c,{to:"/accessories",className:E,children:"Accessories"})]})]}),Object(l.jsxs)("div",{className:"header__icons",children:[a&&Object(l.jsx)(T,{}),!c&&Object(l.jsxs)(r.c,{to:"/favourites",className:D,children:[Object(l.jsx)("img",{src:"images/Favourites.svg",alt:"Favourites"}),t>0&&Object(l.jsx)("div",{className:"header__item-count header__item-count--fav",children:Object(l.jsx)("span",{className:"header__count-number",children:t})})]}),Object(l.jsxs)(r.c,{to:"/cart",className:D,children:[Object(l.jsx)("img",{src:"images/Cart.svg",alt:"Cart"}),e>0&&Object(l.jsx)("div",{className:"header__item-count",children:Object(l.jsx)("span",{className:"header__count-number",children:e})})]})]})]})})},q=(s(34),s(39)),M=(s(59),function(e){var t=e.isActive;return _("footer__nav-link",{"footer__nav-link--active":t})}),Q=function(){var e="/cart"===Object(i.n)().pathname;return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"container footer__content",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"footer__nav",children:[Object(l.jsx)(r.c,{to:"https://HannaVasylieva.github.io/react_phone-catalog/",className:M,target:"_blank",children:"Github"}),Object(l.jsx)(r.c,{to:"https://HannaVasylieva.github.io/react_phone-catalog/",className:M,children:"Contacts"}),Object(l.jsx)(r.c,{to:"https://HannaVasylieva.github.io/react_phone-catalog/",className:M,children:"Rights"})]}),!e&&Object(l.jsxs)("div",{className:"footer__back",children:[Object(l.jsx)("span",{className:"footer__text",children:"Back to top"}),Object(l.jsx)("button",{type:"button",className:"footer__back-btn",onClick:function(){q.animateScroll.scrollToTop({duration:500,smooth:"easeInOutQuart"})},children:Object(l.jsx)("img",{src:"images/TopBtn.svg",alt:"BackToTop"})})]})]})})},R=(s(60),s(61),"https://mate-academy.github.io/react_phone-catalog/api/");function J(e){return new Promise((function(t){return setTimeout(t,e)}))}function U(){return J(500).then((function(){return fetch("".concat(R,"products.json"))})).then((function(e){return e.json()}))}function $(){return U().then((function(e){return e.filter((function(e){return"phone"===e.type}))}))}function z(){return U().then((function(e){return e.filter((function(e){return"tablet"===e.type}))}))}function G(){return U().then((function(e){return e.filter((function(e){return"accessory"===e.type}))}))}s(62);var V=function(e){var t=e.currentIndex,s=e.setCurrentIndex,c=e.products,a=Object(n.useState)(!1),r=Object(b.a)(a,2),i=r[0],o=r[1],d=Object(n.useState)(!1),j=Object(b.a)(d,2),u=j[0],h=j[1];return Object(n.useEffect)((function(){o(0===t);var e=c.length-(t+4);h(e<=0)}),[t,c.length]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"slider",children:[Object(l.jsx)("button",{type:"button",className:"slider__btn slider__btn-left","aria-label":"Scroll to the left",onClick:function(){s(Math.max(t-4,0))},disabled:i,children:i?Object(l.jsx)("img",{src:"images/ArrowLeft.svg",alt:"Can't scroll to the left"}):Object(l.jsx)("img",{src:"images/ArrowBlack.svg",alt:"Scroll to the left"})}),Object(l.jsx)("button",{type:"button",className:"slider__btn slider__btn-right","aria-label":"Scroll to the right",onClick:function(){s(Math.min(t+4,c.length-1))},disabled:u,children:u?Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Can't scroll to the right"}):Object(l.jsx)("img",{src:"images/ArrowRight.svg",alt:"Scroll to the right"})})]})})},W=(s(63),function(e){var t=e.products,s=S(),c=s.addToCart,a=s.setButtonStates,i=s.buttonStates,o=P(),d=o.toggleFav,j=o.favStates,u=o.setFavStates;Object(n.useEffect)((function(){var e=localStorage.getItem("buttonStates");null!==e&&a(JSON.parse(e))}),[]),Object(n.useEffect)((function(){var e=localStorage.getItem("favStates");e&&u(JSON.parse(e))}),[]);return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsxs)("div",{className:"home__product",children:[Object(l.jsxs)(r.b,{to:"/product/".concat(e.id),className:"product",children:[Object(l.jsx)("img",{className:"product__image",src:e.imageUrl,alt:e.name}),Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)("p",{className:"product__name",children:e.name}),Object(l.jsx)("div",{className:"product__prices",children:0===e.discount?Object(l.jsxs)("p",{className:"product__discount",children:["$",e.price]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"product__discount",children:["$",e.price-e.price*(e.discount/100)]}),Object(l.jsxs)("p",{className:"product__price",children:["$",e.price]})]})}),Object(l.jsx)("hr",{className:"product__separator"}),Object(l.jsxs)("div",{className:"product__data",children:[Object(l.jsx)("p",{className:"product__data-text",children:"Screen"}),Object(l.jsx)("p",{className:"product__data-number",children:e.screen})]}),Object(l.jsxs)("div",{className:"product__data",children:[Object(l.jsx)("p",{className:"product__data-text",children:"Capacity"}),Object(l.jsx)("p",{className:"product__data-number",children:e.capacity})]}),Object(l.jsxs)("div",{className:"product__data",children:[Object(l.jsx)("p",{className:"product__data-text",children:"RAM"}),Object(l.jsx)("p",{className:"product__data-number",children:e.ram})]})]})]}),Object(l.jsxs)("div",{className:"product__buttons",children:[Object(l.jsx)("button",{type:"button",className:i[e.id]?"product__button-added":"product__button-card",onClick:function(){return function(e){c(e);var t=Object(p.a)({},i);t[e.id]=!0,a(t),localStorage.setItem("buttonStates",JSON.stringify(t))}(e)},children:i[e.id]?"Added to cart":"Add to cart"}),Object(l.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:"product__button-fav",onClick:function(){return function(e){d(e);var t=Object(p.a)({},j);t[e.id]=!t[e.id],u(t),localStorage.setItem("favStates",JSON.stringify(t))}(e)},children:j[e.id]?Object(l.jsx)("img",{src:"images/FilledHeart.svg",alt:"Favourites"}):Object(l.jsx)("img",{src:"images/Favourites.svg",alt:"Favourites"})})]})]},e.id)}))})});s(64);var K=["images/banner-phones.png","images/banner-tablets.png","images/banner-accessories.png"],Y=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),s=t[0],c=t[1],a=function(e){var t=e.filter((function(e){return e.discount>0}));return t.sort((function(e,t){var s=e.price*(e.discount/100);return t.price*(t.discount/100)-s})),t}(s),i=Object(n.useState)(0),o=Object(b.a)(i,2),d=o[0],j=o[1],u=function(e){var t=e.filter((function(e){return 0===e.discount}));return t.sort((function(e,t){return t.price-e.price})),t}(s),h=Object(n.useState)(0),m=Object(b.a)(h,2),_=m[0],O=m[1],x=Object(n.useState)(0),g=Object(b.a)(x,2),p=g[0],v=g[1],f=Object(n.useState)(0),N=Object(b.a)(f,2),y=N[0],S=N[1],C=function(){v((p+1)%K.length)};Object(n.useEffect)((function(){U().then(c)}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){C()}),5e3);return function(){clearInterval(e)}}),[p]),Object(n.useEffect)((function(){S(p)}),[p]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"home",children:[Object(l.jsxs)("div",{className:"home__banner",children:[Object(l.jsx)("button",{type:"button",className:"home__btn",onClick:function(){v((p-1+K.length)%K.length)},children:Object(l.jsx)("img",{src:"images/ArrowBlack.svg",alt:"Scroll to the left"})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"home__banner-img",src:K[p],alt:"Slide ".concat(p)})}),Object(l.jsx)("button",{type:"button",className:"home__btn",onClick:C,children:Object(l.jsx)("img",{src:"images/ArrowRight.svg",alt:"Scroll to the right"})})]}),Object(l.jsx)("div",{className:"home__dots",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"24",viewBox:"0 0 80 24",fill:"none",children:K.map((function(e,t){return Object(l.jsx)("rect",{className:"home__dot",x:5+28*t,y:"10",width:"14",height:"4",fill:t===y?"#313237":"#e2e6e9",role:"button",onClick:function(){return function(e){v(e)}(t)}},t)}))})})]}),Object(l.jsxs)("section",{className:"home",children:[Object(l.jsxs)("div",{className:"home__slider",children:[Object(l.jsx)("h1",{className:"home__title",children:"Hot prices"}),Object(l.jsx)(V,{currentIndex:d,setCurrentIndex:j,products:a})]}),Object(l.jsx)("div",{className:"home__products","data-cy":"cardsContainer",children:Object(l.jsx)(W,{products:a.slice(d,d+4)})})]}),Object(l.jsxs)("section",{className:"home",children:[Object(l.jsx)("div",{className:"home__top",children:Object(l.jsx)("h1",{className:"home__title",children:"Shop by category"})}),Object(l.jsxs)("div",{className:"home__categories","data-cy":"categoryLinksContainer",children:[Object(l.jsx)(r.b,{className:"home__link",to:"/phones",children:Object(l.jsxs)("div",{className:"home__category",children:[Object(l.jsx)("div",{className:"home__bcg home__bcg--pink",children:Object(l.jsx)("img",{src:"images/category-phones.png",alt:"Mobile phones category",className:"home__img"})}),Object(l.jsx)("p",{className:"home__link-name",children:" Mobile phones"}),Object(l.jsxs)("p",{className:"home__quantity",children:[s.filter((function(e){return"phone"===e.type})).length,"\xa0models"]})]})}),Object(l.jsx)(r.b,{className:"home__link",to:"/tablets",children:Object(l.jsxs)("div",{className:"home__category",children:[Object(l.jsx)("div",{className:"home__bcg home__bcg--gray",children:Object(l.jsx)("img",{src:"images/category-tablets.png",alt:"Tablets category",className:"home__img home__img--gray"})}),Object(l.jsx)("p",{className:"home__link-name",children:"Tablets"}),Object(l.jsxs)("p",{className:"home__quantity",children:[s.filter((function(e){return"tablet"===e.type})).length,"\xa0models"]})]})}),Object(l.jsx)(r.b,{className:"home__link",to:"/accessories",children:Object(l.jsxs)("div",{className:"home__category",children:[Object(l.jsx)("div",{className:"home__bcg home__bcg--fuchsia",children:Object(l.jsx)("img",{src:"images/category-accessories.png",alt:"Accessories category",className:"home__img home__img--fuchsia"})}),Object(l.jsx)("p",{className:"home__link-name",children:"Accessories"}),Object(l.jsxs)("p",{className:"home__quantity",children:[s.filter((function(e){return"accessory"===e.type})).length,"\xa0models"]})]})})]})]}),Object(l.jsxs)("section",{className:"home",children:[Object(l.jsxs)("div",{className:"home__slider",children:[Object(l.jsx)("h1",{className:"home__title",children:"Brand new models"}),Object(l.jsx)(V,{currentIndex:_,setCurrentIndex:O,products:u})]}),Object(l.jsx)("div",{className:"home__products","data-cy":"cardsContainer",children:Object(l.jsx)(W,{products:u.slice(_,_+4)})})]})]})},X=(s(65),function(e){var t=e.products;return Object(l.jsx)("div",{className:"product-list product-list--margin","data-cy":"productList",children:Object(l.jsx)(W,{products:t})})}),Z=(s(66),s(67),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),ee=(s(68),function(e){var t=e.total,s=e.perPage,c=e.currentPage,a=void 0===c?1:c,i=e.onPageChange,o=Math.ceil(t/s),d=function(e){i(e)},j=Object(n.useState)(!1),u=Object(b.a)(j,2),h=u[0],_=u[1],O=Object(n.useState)(!1),x=Object(b.a)(O,2),g=x[0],p=x[1];return Object(n.useEffect)((function(){_(1===a),p(a===o)}),[a,o]),Object(l.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(l.jsx)("button",{type:"button",className:"pagination__item pagination__btn-left",disabled:h,onClick:function(){a>1&&d(a-1)},children:h?Object(l.jsx)("img",{"data-cy":"paginationLeft",className:"pagination__arrow",src:"images/ArrowLeft.svg",alt:"Can't scroll to the left"}):Object(l.jsx)("img",{"data-cy":"paginationLeft",className:"pagination__arrow",src:"images/ArrowBlack.svg",alt:"Scroll to the left"})}),Object(v.a)(Array(o)).map((function(e,t){return Object(l.jsx)("div",{className:"pagination__item",children:Object(l.jsx)(r.b,{className:m()("pagination__number",{active:a===t+1}),to:"?page=".concat(t+1),onClick:function(){return d(t+1)},children:t+1})},"page-".concat(t+1))})),Object(l.jsx)("button",{type:"button",className:"pagination__item pagination__btn-right",disabled:g,onClick:function(){a<o&&d(a+1)},children:g?Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Can't scroll to the right"}):Object(l.jsx)("img",{"data-cy":"paginationRight",className:"pagination__arrow",src:"images/ArrowRight.svg",alt:"Scroll to the right"})})]})}),te=(s(69),function(){return Object(l.jsx)("p",{className:"no-result",children:"No search results"})}),se=function(){var e=g($,"age",4),t=e.products,s=e.isLoading,c=e.sortingOption,a=e.currentPage,n=e.perPage,i=e.totalItems,o=e.handlePerPageChange,d=e.setSortingOption,j=e.setCurrentPage,u=L().searchQuery,b=O(t,u),h=x(t,u),m=null;return m=""===u||h?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(X,{products:b.slice((a-1)*n,a*n)}),Object(l.jsx)(ee,{total:i,perPage:n,currentPage:a,onPageChange:j})]}):Object(l.jsx)(te,{}),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"phone",children:[Object(l.jsxs)("div",{className:"phone__links",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"images/Home.svg",alt:"HomeIcon",className:"phone__icon"})}),Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Arrow",className:"phone__icon"}),Object(l.jsx)("p",{className:"phone__string",children:"Phones"})]}),Object(l.jsx)("h1",{className:"phone__title",children:"Mobile phones"}),Object(l.jsxs)("p",{className:"phone__quantity",children:[t.length,"\xa0models"]}),Object(l.jsxs)("div",{className:"phone__dropdowns",children:[Object(l.jsxs)("label",{className:"phone__label phone__string",children:["Sort by",Object(l.jsxs)("select",{value:c,onChange:function(e){return d(e.target.value)},className:"phone__sorting",children:[Object(l.jsx)("option",{value:"age",children:"Newest"}),Object(l.jsx)("option",{value:"name",children:"Alphabetically"}),Object(l.jsx)("option",{value:"price",children:"Cheapest"})]})]}),Object(l.jsxs)("label",{className:"phone__label phone__string",children:["Items on page",Object(l.jsxs)("select",{value:n,onChange:o,className:"phone__sorting phone__sorting--small",children:[Object(l.jsx)("option",{value:"all",children:"all"},"all"),Object(l.jsx)("option",{value:"4",children:"4"},"4"),Object(l.jsx)("option",{value:"8",children:"8"},"8"),Object(l.jsx)("option",{value:"16",children:"16"},"16")]})]})]}),s?Object(l.jsx)(Z,{}):m]})})},ce=(s(70),function(){var e=g(z,"age",4),t=e.products,s=e.isLoading,c=e.sortingOption,a=e.currentPage,n=e.perPage,i=e.totalItems,o=e.handlePerPageChange,d=e.setSortingOption,j=e.setCurrentPage,u=L().searchQuery,b=O(t,u),h=x(t,u),m=null;return m=""===u||h?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(X,{products:b.slice((a-1)*n,a*n)}),Object(l.jsx)(ee,{total:i,perPage:n,currentPage:a,onPageChange:j})]}):Object(l.jsx)(te,{}),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"tablets",children:[Object(l.jsxs)("div",{className:"tablets__links",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"images/Home.svg",alt:"HomeIcon",className:"tablets__icon"})}),Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Arrow",className:"tablets__icon"}),Object(l.jsx)("p",{className:"tablets__string",children:"Tablets"})]}),Object(l.jsx)("h1",{className:"tablets__title",children:"Tablets"}),Object(l.jsxs)("p",{className:"tablets__quantity",children:[t.length,"\xa0models"]}),Object(l.jsxs)("div",{className:"tablets__dropdowns",children:[Object(l.jsxs)("label",{className:"tablets__label tablets__string",children:["Sort by",Object(l.jsxs)("select",{value:c,onChange:function(e){return d(e.target.value)},className:"tablets__sorting",children:[Object(l.jsx)("option",{value:"age",children:"Newest"}),Object(l.jsx)("option",{value:"name",children:"Alphabetically"}),Object(l.jsx)("option",{value:"price",children:"Cheapest"})]})]}),Object(l.jsxs)("label",{className:"tablets__label tablets__string",children:["Items on page",Object(l.jsxs)("select",{value:n,onChange:o,className:"tablets__sorting tablets__sorting--small",children:[Object(l.jsx)("option",{value:"all",children:"all"},"all"),Object(l.jsx)("option",{value:"4",children:"4"},"4"),Object(l.jsx)("option",{value:"8",children:"8"},"8"),Object(l.jsx)("option",{value:"16",children:"16"},"16")]})]})]}),s?Object(l.jsx)(Z,{}):m]})})}),ae=(s(71),s(72),function(e){var t=e.category;return Object(l.jsxs)("p",{className:"noresults",children:[t,"\xa0not found"]})}),ne=function(){var e=g(G,"age",4),t=e.products,s=e.isLoading,c=e.sortingOption,a=e.currentPage,n=e.perPage,i=e.totalItems,o=e.handlePerPageChange,d=e.setSortingOption,j=e.setCurrentPage,u=L().searchQuery,b=O(t,u);return Object(l.jsx)(l.Fragment,{children:0===t.length?Object(l.jsx)(ae,{category:"Accessories"}):Object(l.jsxs)("section",{className:"accessories",children:[Object(l.jsxs)("div",{className:"accessories__links",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"images/Home.svg",alt:"HomeIcon",className:"accessories__icon"})}),Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Arrow",className:"accessories__icon"}),Object(l.jsx)("p",{className:"accessories__string",children:"Accessories"})]}),Object(l.jsx)("h1",{className:"accessories__title",children:"Accessories"}),Object(l.jsxs)("p",{className:"accessories__quantity",children:[t.length,"\xa0models"]}),Object(l.jsxs)("div",{className:"accessories__dropdowns",children:[Object(l.jsxs)("label",{className:"accessories__label accessories__string",children:["Sort by",Object(l.jsxs)("select",{value:c,onChange:function(e){return d(e.target.value)},className:"accessories__sorting",children:[Object(l.jsx)("option",{value:"age",children:"Newest"}),Object(l.jsx)("option",{value:"name",children:"Alphabetically"}),Object(l.jsx)("option",{value:"price",children:"Cheapest"})]})]}),Object(l.jsxs)("label",{className:"accessories__label accessories__string",children:["Items on page",Object(l.jsxs)("select",{value:n,onChange:o,className:"accessories__sorting",children:[Object(l.jsx)("option",{value:"all",children:"all"},"all"),Object(l.jsx)("option",{value:"4",children:"4"},"4"),Object(l.jsx)("option",{value:"8",children:"8"},"8"),Object(l.jsx)("option",{value:"16",children:"16"},"16")]})]})]}),s?Object(l.jsx)(Z,{}):Object(l.jsx)(X,{products:b.slice((a-1)*n,a*n)}),Object(l.jsx)(ee,{total:i,perPage:n,currentPage:a,onPageChange:j})]})})};s(73);function re(e){return function(e){for(var t=Object(v.a)(e),s=t.length-1;s>0;s--){var c=Math.floor(Math.random()*(s+1)),a=[t[c],t[s]];t[s]=a[0],t[c]=a[1]}return t}(e)}var ie=function(){var e=Object(i.r)().productId,t=Object(n.useState)(null),s=Object(b.a)(t,2),c=s[0],a=s[1],o=Object(n.useState)([]),d=Object(b.a)(o,2),j=d[0],u=d[1],h=Object(n.useState)(!0),m=Object(b.a)(h,2),_=m[0],O=m[1],x=Object(i.p)(),g=Object(n.useState)(0),v=Object(b.a)(g,2),f=v[0],N=v[1],y=re(j),C=Object(n.useState)(0),k=Object(b.a)(C,2),w=k[0],A=k[1],I=S(),F=I.addToCart,B=I.setButtonStates,L=I.buttonStates,T=P(),E=T.toggleFav,D=T.favStates,H=T.setFavStates;Object(n.useEffect)((function(){U().then(u)}),[]),Object(n.useEffect)((function(){e&&function(e){return J(500).then((function(){return fetch("".concat(R,"products/").concat(e,".json"))})).then((function(e){return e.json()}))}(e).then((function(e){a(e),O(!1)})).finally((function(){O(!1)}))}),[e]);var q=j.find((function(t){return t.id===e})),M=null;if(q)if(0===q.discount)M=Object(l.jsxs)("p",{className:"details__discount",children:["$",q.price]});else{var Q=q.price-q.discount/100*q.price;M=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"details__discount",children:["$",Q]}),Object(l.jsxs)("p",{className:"details__price",children:["$",q.price]})]})}return Object(l.jsx)(l.Fragment,{children:_?Object(l.jsx)(Z,{}):Object(l.jsxs)("section",{className:"details",children:[Object(l.jsxs)("div",{className:"details__top","data-cy":"breadCrumbs",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"images/Home.svg",alt:"HomeIcon",className:"details__icon"})}),Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Arrow",className:"details__icon"}),Object(l.jsx)(r.b,{to:"phone"===(null===q||void 0===q?void 0:q.type)?"/phones":"/tablets",className:"details__string details__string--active",children:"phone"===(null===q||void 0===q?void 0:q.type)?"Phones":"Tablets"}),Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Arrow",className:"details__icon"}),Object(l.jsx)("p",{className:"details__string",children:null===q||void 0===q?void 0:q.name})]}),Object(l.jsx)("button",{type:"button","data-cy":"backButton",onClick:function(){x(-1)},className:"details__back-btn",children:Object(l.jsxs)("div",{className:"details__button-content",children:[Object(l.jsx)("img",{src:"images/ArrowBlack.svg",alt:"GoBack",className:"details__back-img"}),Object(l.jsx)("p",{className:"details__string",children:"Back"})]})}),Object(l.jsx)("h1",{className:"details__title details__title--margin",children:null===q||void 0===q?void 0:q.name}),Object(l.jsxs)("div",{className:"details__main",children:[Object(l.jsxs)("div",{className:"details__photo-container",children:[Object(l.jsx)("div",{className:"details__photos",children:null===c||void 0===c?void 0:c.images.map((function(e,t){return Object(l.jsx)("button",{type:"button",onClick:function(){return A(t)},onKeyDown:function(e){return function(e,t){"Enter"!==e.key&&" "!==e.key||A(t)}(e,t)},className:"details__img-button",tabIndex:0,children:Object(l.jsx)("img",{src:e,alt:"Product img",className:"details__img"})},e)}))}),Object(l.jsx)("div",{className:"details__photo",children:Object(l.jsx)("img",{src:null===c||void 0===c?void 0:c.images[w],alt:"Product img",className:"details__main-img"})})]}),Object(l.jsxs)("div",{className:"details__info",children:[Object(l.jsx)("div",{className:"details__prices",children:M}),Object(l.jsxs)("div",{className:"details__buttons",children:[Object(l.jsx)("button",{type:"button",className:q&&L[q.id]?"details__button-added":"details__button-card",onClick:function(){return q&&function(e){F(e);var t=Object(p.a)({},L);t[e.id]=!0,B(t),localStorage.setItem("buttonStates",JSON.stringify(t))}(q)},children:q&&L[q.id]?"Added to cart":"Add to cart"}),Object(l.jsx)("button",{type:"button",className:"details__button-fav",onClick:function(){return q&&function(e){E(e);var t=Object(p.a)({},D);t[e.id]=!t[e.id],H(t),localStorage.setItem("favStates",JSON.stringify(t))}(q)},children:q&&D[q.id]?Object(l.jsx)("img",{src:"images/FilledHeart.svg",alt:"Favourites"}):Object(l.jsx)("img",{src:"images/Favourites.svg",alt:"Favourites"})})]}),Object(l.jsxs)("div",{className:"details__data",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Battery"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.battery.standbyTime})]}),Object(l.jsxs)("div",{className:"details__data",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Resolution"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.display.screenResolution})]}),Object(l.jsxs)("div",{className:"details__data",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Processor"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.android.os})]}),Object(l.jsxs)("div",{className:"details__data",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Camera"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.camera.primary})]})]})]}),Object(l.jsxs)("div",{className:"details__about","data-cy":"productDescription",children:[Object(l.jsxs)("div",{className:"details__description",children:[Object(l.jsx)("h2",{className:"details__header",children:"About"}),Object(l.jsx)("hr",{className:"details__separator"}),Object(l.jsx)("p",{className:"details__text",children:null===c||void 0===c?void 0:c.description})]}),Object(l.jsxs)("div",{className:"details__tech",children:[Object(l.jsx)("h2",{className:"details__header",children:"Tech specs"}),Object(l.jsx)("hr",{className:"details__separator"}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Screen size"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.display.screenSize})]}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Bluetooth"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.connectivity.bluetooth})]}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"USB"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.hardware.usb})]}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Flash"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.storage.flash})]}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"RAM"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.storage.ram})]}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Availability"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.availability})]}),Object(l.jsxs)("div",{className:"details__data details__data--tech",children:[Object(l.jsx)("p",{className:"details__data-text",children:"Weight"}),Object(l.jsx)("p",{className:"details__data-number",children:null===c||void 0===c?void 0:c.sizeAndWeight.weight})]})]})]}),Object(l.jsxs)("div",{className:"details__like",children:[Object(l.jsxs)("div",{className:"details__slider",children:[Object(l.jsx)("h1",{className:"details__title",children:"You may also like"}),Object(l.jsx)(V,{currentIndex:f,setCurrentIndex:N,products:y})]}),Object(l.jsx)("div",{className:"details__products","data-cy":"cardsContainer",children:Object(l.jsx)(W,{products:y.slice(f,f+4)})})]})]})})},le=(s(74),function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),s=t[0],c=t[1],a=Object(i.p)(),r=S(),o=r.cart,d=r.removeFromCart,j=r.productQuantities,u=r.totalItems,h=r.handleDecrement,m=r.handleIncrement,_=r.productPrice,O=r.sum,x=r.setSum,g=r.buttonStates,v=r.setButtonStates;return Object(n.useEffect)((function(){if(s){var e=setTimeout((function(){c(!1)}),2e3);return function(){clearTimeout(e)}}}),[s]),o?0===o.length?Object(l.jsx)("p",{className:"cart__warning",children:"Your cart is empty"}):Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsx)("button",{type:"button","data-cy":"backButton",onClick:function(){a(-1)},className:"cart__back-btn",children:Object(l.jsxs)("div",{className:"cart__button-content",children:[Object(l.jsx)("img",{src:"images/ArrowBlack.svg",alt:"GoBack",className:"cart__back-img"}),Object(l.jsx)("p",{className:"cart__string",children:"Back"})]})}),Object(l.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(l.jsxs)("div",{className:"cart__content",children:[Object(l.jsx)("ul",{className:"cart__items",children:o.map((function(e){return Object(l.jsxs)("div",{className:"cart__container",children:[Object(l.jsx)("button",{type:"button",className:"cart__btn cart__btn--delete","data-cy":"cartDeleteButton",onClick:function(){return function(e){d(e.id),x((function(t){return t-_(e)}));var t=Object(p.a)({},g);t[e.id]=!1,v(t),localStorage.setItem("buttonStates",JSON.stringify(t))}(e)},children:Object(l.jsx)("img",{src:"images/Close.svg",alt:"Delete the item"})}),Object(l.jsxs)("li",{className:"cart__item",children:[Object(l.jsx)("img",{src:e.imageUrl,alt:"Product",className:"cart__img"}),Object(l.jsx)("p",{className:"cart__text",children:e.name})]}),Object(l.jsxs)("div",{className:"cart__buttons",children:[Object(l.jsx)("button",{type:"button",className:"cart__btn cart__btn--minus",onClick:function(){return h(e)},disabled:j[e.id]<=1,children:j[e.id]<=1?Object(l.jsx)("img",{src:"images/MinusDisabled.svg",alt:"Minus product"}):Object(l.jsx)("img",{src:"images/Minus.svg",alt:"Minus product"})}),Object(l.jsx)("span",{className:"cart__text cart__text--number",children:j[e.id]||1}),Object(l.jsx)("button",{type:"button",className:"cart__btn cart__btn--add",onClick:function(){return m(e)},children:Object(l.jsx)("img",{src:"images/Plus.svg",alt:"Add product"})})]}),Object(l.jsxs)("p",{className:"cart__item-price",children:["$",_(e)]})]},e.id)}))}),Object(l.jsxs)("div",{className:"cart__total",children:[Object(l.jsxs)("p",{className:"cart__sum",children:["$",O]}),Object(l.jsxs)("p",{className:"cart__quantity","data-cy":"productQauntity",children:["Total for"," ",u," ",1===u?"item":"items"]}),Object(l.jsx)("hr",{className:"cart__line"}),Object(l.jsx)("button",{type:"button",className:"cart__checkout",onClick:function(){c(!0)},children:"Checkout"}),Object(l.jsx)("div",{className:"cart__message-container ".concat(s?"cart__message-container--visible":""),children:Object(l.jsx)("p",{className:"cart__message",children:"We are sorry, but this feature is not implemented yet"})})]})]})]}):Object(l.jsx)(Z,{})}),oe=(s(75),function(){var e=P(),t=e.products,s=e.quantity,c=e.isLoading,a=L().searchQuery,n=O(t,a),i=x(t,a),o=null;return o=c?Object(l.jsx)(Z,{}):""===a||i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"favourites__quantity",children:[s," ","items"]}),Object(l.jsx)(X,{products:n})]}):Object(l.jsx)(te,{}),Object(l.jsxs)("div",{className:"favourites",children:[Object(l.jsxs)("div",{className:"favourites__top",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"images/Home.svg",alt:"HomeIcon",className:"favourites__icon"})}),Object(l.jsx)("img",{src:"images/DisabledArrow.svg",alt:"Arrow",className:"favourites__icon"}),Object(l.jsx)("p",{className:"favourites__string",children:"Favourites"})]}),Object(l.jsx)("h1",{className:"favourites__title",children:"Favourites"}),o]})}),de=function(){return Object(l.jsx)(y,{children:Object(l.jsx)(B,{children:Object(l.jsx)(w,{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(H,{}),Object(l.jsx)("main",{className:"app__main",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(i.a,{})}),Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(Y,{})}),Object(l.jsx)(i.b,{path:"phones",element:Object(l.jsx)(se,{})}),Object(l.jsx)(i.b,{path:"tablets",element:Object(l.jsx)(ce,{})}),Object(l.jsx)(i.b,{path:"accessories",element:Object(l.jsx)(ne,{})}),Object(l.jsx)(i.b,{path:"product/:productId",element:Object(l.jsx)(ie,{})}),Object(l.jsx)(i.b,{path:"cart",element:Object(l.jsx)(le,{})}),Object(l.jsx)(i.b,{path:"favourites",element:Object(l.jsx)(oe,{})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})}),Object(l.jsx)(Q,{})]})})})})})},je=document.getElementById("root");a.a.render(Object(l.jsx)(de,{}),je)}},[[76,1,2]]]);
//# sourceMappingURL=main.7448b60c.chunk.js.map