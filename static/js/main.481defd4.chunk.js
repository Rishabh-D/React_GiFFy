(this["webpackJsonpreact-giffyy"]=this["webpackJsonpreact-giffyy"]||[]).push([[0],{21:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(14),i=n.n(a),r=(n(21),n(5)),s=n.n(r),o=n(15),j=n(3),u=n(16),f=n.n(u),d="https://api.giphy.com/v1/gifs/random?api_key=".concat("5COtQj9IINekq4bMbSocOgYpt1XNWXV7"),b=function(t){var e=Object(c.useState)(""),n=Object(j.a)(e,2),a=n[0],i=n[1],r=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,c,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(e?"".concat(d,"&tag=").concat(e):d);case 2:n=t.sent,c=n.data,a=c.data.images.downsized_large.url,i(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r(t)}),[t]),{gif:a,fetchGif:r}},h=n(0),l=function(){var t=b(),e=t.gif,n=t.fetchGif;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"Random"}),Object(h.jsx)("img",{width:"100%",src:e,alt:"Totally Random"}),Object(h.jsx)("button",{onClick:n,children:"Click Me Now!"})]})},O=function(){var t=Object(c.useState)("dogs"),e=Object(j.a)(t,2),n=e[0],a=e[1],i=b(n),r=i.gif,s=i.fetchGif;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{children:["Random ",n," Gif"]}),Object(h.jsx)("img",{width:"100%",src:r,alt:"Random Gif"}),Object(h.jsx)("input",{value:n,onChange:function(t){return a(t.target.value)}}),Object(h.jsx)("button",{onClick:function(){return s(n)},children:"CLICK FOR NEW"})]})},g=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Random Giffy"}),Object(h.jsxs)("div",{className:"main-container",children:[Object(h.jsx)(l,{}),Object(h.jsx)(O,{})]})]})};i.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.481defd4.chunk.js.map