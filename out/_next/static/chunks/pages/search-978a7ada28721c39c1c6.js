_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"19J2":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return a("eOhz")}])},"9XeL":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("nKUr"),r=a("q1tI"),i=a("nOHt"),o=a("JnuR"),c=a("VnCb"),s=a("r9w1"),d=a("Qi1R");function l(e){var t=e.data,a=e.name,i=Object(r.useContext)(c.a),o=i.state,l=i.send,u=Object(d.a)(o,l).changeHandler,p=t.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}));return Object(n.jsxs)(s.a,{name:a,select:!0,SelectProps:{native:!0},placeholder:a,label:a,size:"small",fullWidth:!0,value:o.context.filter[a],variant:"outlined",onChange:function(e){return u(e,a)},children:[Object(n.jsx)("option",{}),p]})}function u(){var e=Object(r.useContext)(c.a),t=e.state,a=e.send,s=Object(i.useRouter)();return Object(r.useEffect)((function(){"/"!==s.route&&(!t.context.filter.brand&&s.query.brand&&s.query.brand!==t.context.filter.brand||!t.context.filter.color&&s.query.color&&s.query.color!==t.context.filter.color||!t.context.filter.minYear&&s.query.minYear&&s.query.minYear!==t.context.filter.minYear||!t.context.filter.maxYear&&s.query.maxYear&&s.query.maxYear!==t.context.filter.maxYear||!t.context.filter.minPrice&&s.query.minPrice&&s.query.minPrice!==t.context.filter.minPrice||!t.context.filter.maxPrice&&s.query.maxPrice&&s.query.maxPrice!==t.context.filter.maxPrice||!t.context.filter.searchText&&s.query.searchText&&s.query.searchText!==t.context.filter.searchText||!t.context.currentPage&&s.query.page&&s.query.page!==t.context.currentPage)&&a({type:"SET_FILTERS",filter:{brand:s.query.brand,color:s.query.color,minYear:s.query.minYear,maxYear:s.query.maxYear,minPrice:s.query.minPrice,maxPrice:s.query.maxPrice,searchText:s.query.searchText},currentPage:s.query.page})}),[]),Object(r.useEffect)((function(){"/"===s.route&&a({type:"CLEAR_FILTER"}),a({type:"SET_CURRENT_PAGE",currentPage:s.query.page})}),[]),Object(n.jsxs)("div",{style:{padding:"2rem",width:"100%",display:"grid",gap:"1rem",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gridTemplateRows:"auto"},children:[Object(n.jsx)(l,{data:o.a,name:"brand"}),Object(n.jsx)(l,{data:o.d,name:"color"}),Object(n.jsx)(l,{data:o.f,name:"minYear"}),Object(n.jsx)(l,{data:o.f,name:"maxYear"}),Object(n.jsx)(l,{data:o.e,name:"minPrice"}),Object(n.jsx)(l,{data:o.e,name:"maxPrice"})]})}},I28E:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("nKUr"),r=(a("q1tI"),a("tRbT")),i=a("ofer"),o=a("30+C"),c=a("Z3vd"),s=a("YFqc"),d=a.n(s),l=(0,a("TTf+").makeStyles)((function(e){return{root:{flexGrow:1},mainContainer:{height:"12vw","@media (max-width:2560px)":{height:"9vw"},"@media (max-width:1980px)":{height:"12vw"},"@media (max-width:1440px)":{height:"16vw"},"@media (max-width:1024px)":{height:"auto"}},imageContainer:{alignSelf:"center",justifyContent:"center",height:"100%","@media (max-width:959px)":{height:"30vw"},"@media (max-width:500px)":{height:"100%"}},image:{height:"100%",width:"100%",padding:"8px 0 8px 8px","@media (max-width:959px)":{height:"30vw",padding:0},"@media (max-width:500px)":{height:"60vw"}},title:{fontSize:"1.1rem"},textContainer:{height:"100%",padding:"8px","@media (max-width:959px)":{height:"auto"}},titleDiv:{height:"50%","@media (max-width:959px)":{height:"10vw"}},price:{color:"green",fontWeight:700},buttonContainer:{alignSelf:"flex-end",justifyContent:"flex-end"}}}));function u(e){var t=e._id,a=e.brand,s=e.model,u=e.price,p=e.year,m=e.photo,b=l();return Object(n.jsx)(o.a,{elevation:3,children:Object(n.jsxs)(r.a,{container:!0,className:b.mainContainer,children:[Object(n.jsx)(r.a,{item:!0,md:6,lg:6,className:b.imageContainer,children:Object(n.jsx)("img",{alt:s,className:b.image,src:m})}),Object(n.jsxs)(r.a,{container:!0,md:6,lg:6,className:b.textContainer,children:[Object(n.jsxs)(r.a,{item:!0,md:12,children:[Object(n.jsx)(r.a,{item:!0,md:12,className:b.titleDiv,children:Object(n.jsxs)(i.a,{className:b.title,children:[a," ",s]})}),Object(n.jsxs)(r.a,{item:!0,md:12,children:[Object(n.jsxs)(i.a,{variant:"h6",children:["Price: ",Object(n.jsx)("span",{className:b.price,children:"$ ".concat(u)})]}),Object(n.jsxs)(i.a,{children:["Year:",p]})]})]}),Object(n.jsx)(r.a,{container:!0,md:12,children:Object(n.jsx)(r.a,{container:!0,md:12,className:b.buttonContainer,children:Object(n.jsx)(r.a,{item:!0,children:Object(n.jsx)(d.a,{href:"/car/:id",as:"/car/".concat(t),children:Object(n.jsx)("a",{children:Object(n.jsx)(c.a,{"aria-label":"show car details",color:"primary",variant:"contained",children:"show more"})})})})})})]})]})})}},ZucI:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("nKUr"),r=a("iae6");function i(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"10rem",width:"95%"},children:Object(n.jsx)(r.a,{disableShrink:!0,size:50})})}},eOhz:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a("o0o1"),r=a.n(n),i=a("HaE+"),o=a("nKUr"),c=a("rePB"),s=a("30+C"),d=a("q1tI"),l=a("wx14"),u=a("Ff2n"),p=(a("17x9"),a("iuhU")),m=a("H2TA"),b=a("KQm4"),h=a("ODXe"),x=a("yCxk");var g=a("ye/S"),j=a("tr08"),f=a("VD++"),O=a("5AJ6"),y=Object(O.a)(d.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),v=Object(O.a)(d.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),w=Object(O.a)(d.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),C=Object(O.a)(d.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),P=a("NqtD"),N=d.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.color,i=void 0===r?"standard":r,o=e.component,c=e.disabled,s=void 0!==c&&c,m=e.page,b=e.selected,h=void 0!==b&&b,x=e.shape,g=void 0===x?"round":x,O=e.size,N=void 0===O?"medium":O,E=e.type,k=void 0===E?"page":E,q=e.variant,T=void 0===q?"text":q,R=Object(u.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),z=("rtl"===Object(j.a)().direction?{previous:C,next:w,last:y,first:v}:{previous:w,next:C,first:y,last:v})[k];return"start-ellipsis"===k||"end-ellipsis"===k?d.createElement("div",{ref:t,className:Object(p.a)(a.root,a.ellipsis,s&&a.disabled,"medium"!==N&&a["size".concat(Object(P.a)(N))])},"\u2026"):d.createElement(f.a,Object(l.a)({ref:t,component:o,disabled:s,focusVisibleClassName:a.focusVisible,className:Object(p.a)(a.root,a.page,a[T],a[g],n,"standard"!==i&&a["".concat(T).concat(Object(P.a)(i))],s&&a.disabled,h&&a.selected,"medium"!==N&&a["size".concat(Object(P.a)(N))])},R),"page"===k&&m,z?d.createElement(z,{className:a.icon}):null)})),E=Object(m.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(g.d)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(g.d)(e.palette.primary.main,.5)),backgroundColor:Object(g.d)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(g.d)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(g.d)(e.palette.secondary.main,.5)),backgroundColor:Object(g.d)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(g.d)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(N);function k(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var q=d.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,r=e.color,i=void 0===r?"standard":r,o=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),c=void 0===o?k:o,s=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),m=void 0===s?function(e){return d.createElement(E,e)}:s,g=e.shape,j=void 0===g?"round":g,f=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),O=void 0===f?"medium":f,y=e.variant,v=void 0===y?"text":y,w=Object(u.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,r=void 0===n?"usePagination":n,i=e.count,o=void 0===i?1:i,c=e.defaultPage,s=void 0===c?1:c,d=e.disabled,p=void 0!==d&&d,m=e.hideNextButton,g=void 0!==m&&m,j=e.hidePrevButton,f=void 0!==j&&j,O=e.onChange,y=e.page,v=e.showFirstButton,w=void 0!==v&&v,C=e.showLastButton,P=void 0!==C&&C,N=e.siblingCount,E=void 0===N?1:N,k=Object(u.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),q=Object(x.a)({controlled:y,default:s,name:r,state:"page"}),T=Object(h.a)(q,2),R=T[0],z=T[1],L=function(e,t){y||z(t),O&&O(e,t)},S=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},$=S(1,Math.min(a,o)),B=S(Math.max(o-a+1,a+1),o),_=Math.max(Math.min(R-E,o-a-2*E-1),a+2),I=Math.min(Math.max(R+E,a+2*E+2),B[0]-2),Y=[].concat(Object(b.a)(w?["first"]:[]),Object(b.a)(f?[]:["previous"]),Object(b.a)($),Object(b.a)(_>a+2?["start-ellipsis"]:a+1<o-a?[a+1]:[]),Object(b.a)(S(_,I)),Object(b.a)(I<o-a-1?["end-ellipsis"]:o-a>a?[o-a]:[]),Object(b.a)(B),Object(b.a)(g?[]:["next"]),Object(b.a)(P?["last"]:[])),M=function(e){switch(e){case"first":return 1;case"previous":return R-1;case"next":return R+1;case"last":return o;default:return null}},V=Y.map((function(e){return"number"===typeof e?{onClick:function(t){L(t,e)},type:"page",page:e,selected:e===R,disabled:p,"aria-current":e===R?"true":void 0}:{onClick:function(t){L(t,M(e))},type:e,page:M(e),selected:!1,disabled:p||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?R>=o:R<=1)}}));return Object(l.a)({items:V},k)}(Object(l.a)({},e,{componentName:"Pagination"})).items;return d.createElement("nav",Object(l.a)({"aria-label":"pagination navigation",className:Object(p.a)(a.root,n),ref:t},w),d.createElement("ul",{className:a.ul},C.map((function(e,t){return d.createElement("li",{key:t},m(Object(l.a)({},e,{color:i,"aria-label":c(e.type,e.page,e.selected),shape:j,size:O,variant:v})))}))))})),T=Object(m.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(q),R=a("9XeL"),z=a("I28E"),L=a("23GE"),S=a("vRNQ"),$=a.n(S),B=a("N61Y"),_=a("VnCb"),I=a("ZucI"),Y=a("Qi1R"),M=a("JnuR");function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){var t=e.cars,a=void 0===t?[]:t,n=e.count,r=Object(d.useContext)(_.a),i=r.state,l=r.send,u=Object(Y.a)(i,l).fetchData;Object(d.useEffect)((function(){l({type:"SET_LOADING",loading:!1})}),[a]);var p=a.map((function(e){return Object(o.jsx)(z.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e),e._id)}));return Object(o.jsxs)(L.a,{children:[Object(o.jsx)(R.a,{}),i.context.loading?Object(o.jsx)(I.a,{}):a&&Object(o.jsx)(s.a,{className:$.a.cars,children:p}),Object(o.jsx)(T,{style:{marginTop:"1rem"},color:"primary",count:Math.round(n/M.b),page:+i.context.currentPage,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){l({type:"SET_CURRENT_PAGE",currentPage:t}),u()}})]})}D.getInitialProps=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query.page,e.next=3,Object(B.d)(t.query,(a-1)*M.b,M.b);case 3:return n=e.sent,i=n.cars,o=n.count,e.abrupt("return",{cars:i,count:o});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},[["19J2",0,2,1,3,4,5]]]);