(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{35:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n,r,a=c(1),s=c.n(a),i=c(28),l=c.n(i),j=(c(35),c(8)),o=c(0),b=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg navbar-1",children:[Object(o.jsx)("div",{className:"navbar-brand",children:"Github \u041f\u043e\u0438\u0441\u043a"}),Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.c,{exact:!0,to:"/",className:"nav-link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(j.c,{to:"/about",className:"nav-link",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})},d=function(e){var t=e.user;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:t.avatar_url,alt:t.login,className:"card-img-top"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:t.login}),Object(o.jsx)(j.b,{to:"/profile/"+t.login,className:"btn btn-primary",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"})]})]})},u=c(10),O=Object(a.createContext)(),h=Object(a.createContext)(),x=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(O),s=Object(a.useContext)(h);return Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f...",value:c,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(s.clearUsers(),c.trim()?(r.hide(),s.search(c.trim())):r.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f!"))}})})},p=function(){var e=Object(a.useContext)(h),t=e.loading,c=e.users;return Object(o.jsx)("div",{children:Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(x,{}),Object(o.jsx)("div",{className:"row",children:t?Object(o.jsx)("p",{className:"text-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):c.map((function(e){return Object(o.jsx)("div",{className:"col-sm-4 mb-4",children:Object(o.jsx)(d,{user:e})},e.id)}))})]})})},m=function(){return Object(o.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"display-4",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(o.jsxs)("p",{className:"lead",children:["\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: ",Object(o.jsx)("b",{children:"1.0.0"})]})]})})},f=function(e){var t=e.repos;return Object(o.jsx)(s.a.Fragment,{children:t.map((function(e){return Object(o.jsx)("div",{className:"card mb-3",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("h5",{children:Object(o.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:e.name})})})},e.id)}))})},v=function(e){var t=e.match,c=Object(a.useContext)(h),n=c.getUser,r=c.getRepos,s=c.loading,i=c.user,l=c.repos,b=t.params.name;if(Object(a.useEffect)((function(){n(b),r(b)}),[]),s)return Object(o.jsx)("p",{className:"text-center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."});var d=i.name,u=i.company,O=i.avatar_url,x=i.location,p=i.bio,m=i.blog,v=i.login,g=i.html_url,N=i.followers,y=i.following,E=i.public_repos,_=i.public_gists;return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(j.b,{to:"/",className:"btn btn-link",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),Object(o.jsx)("div",{className:"card mb-4",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(o.jsx)("img",{src:O,alt:d,style:{width:"150px"}}),Object(o.jsx)("h1",{children:d}),x&&Object(o.jsxs)("p",{children:["\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",x]})]}),Object(o.jsxs)("div",{className:"col",children:[p&&Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("h3",{children:"BIO"}),Object(o.jsx)("p",{children:p})]}),Object(o.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(o.jsxs)("ul",{children:[v&&Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Username: "})," ",v]}),u&&Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: "})," ",u]}),m&&Object(o.jsxs)("li",{children:[Object(o.jsx)("strong",{children:"Website: "})," ",m]})]}),Object(o.jsxs)("div",{className:"badge badge-pill badge-primary",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438: ",N]}),Object(o.jsxs)("div",{className:"badge badge-success",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d: ",y]}),Object(o.jsxs)("div",{className:"badge badge-info",children:["\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438: ",E]}),Object(o.jsxs)("div",{className:"badge badge-dark",children:["Gists: ",_]})]})]})})}),Object(o.jsx)(f,{repos:l})]})},g=c(2),N=function(){var e=Object(a.useContext)(O),t=e.alert,c=e.hide;return t?Object(o.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(o.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:c,children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},y="SHOW_ALERT",E="HIDE_ALERT",_="CLEAR_USERS",k="GET_REPOS",w="GET_USER",C="SEARCH_USERS",F="SET_LOADING",R=c(6),S=(n={},Object(R.a)(n,y,(function(e,t){return t.payload})),Object(R.a)(n,E,(function(){return null})),Object(R.a)(n,"DEFAULT",(function(e){return e})),n),T=function(e,t){return(S[t.type]||S.DEFAULT)(e,t)},U=function(e){var t=e.children,c=Object(a.useReducer)(T,null),n=Object(u.a)(c,2),r=n[0],s=n[1];return Object(o.jsx)(O.Provider,{value:{hide:function(){return s({type:E})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";s({type:y,payload:{type:t,text:e}})},alert:r},children:t})},L=c(9),A=c.n(L),D=c(14),P=c(15),G=c.n(P),I=c(7),B=(r={},Object(R.a)(r,C,(function(e,t){var c=t.payload;return Object(I.a)(Object(I.a)({},e),{},{users:c,loading:!1})})),Object(R.a)(r,k,(function(e,t){var c=t.payload;return Object(I.a)(Object(I.a)({},e),{},{repos:c,loading:!1})})),Object(R.a)(r,w,(function(e,t){var c=t.payload;return Object(I.a)(Object(I.a)({},e),{},{user:c,loading:!1})})),Object(R.a)(r,F,(function(e){return Object(I.a)(Object(I.a)({},e),{},{loading:!0})})),Object(R.a)(r,_,(function(e){return Object(I.a)(Object(I.a)({},e),{},{users:[]})})),Object(R.a)(r,"DEFAULT",(function(e){return e})),r),H=function(e,t){return(B[t.type]||B.DEFAULT)(e,t)},J=function(e){return"".concat(e,"client_id=").concat("0fc2f791f9b714969bac","&client_secret=").concat("851092cce18efd660baa50056441549c2953e126")},W=function(e){var t=e.children,c=Object(a.useReducer)(H,{user:{},users:[],loading:!1,repos:[]}),n=Object(u.a)(c,2),r=n[0],s=n[1],i=function(){var e=Object(D.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,G.a.get(J("https://api.github.com/search/users?q=".concat(t,"&")));case 3:c=e.sent,s({type:C,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(D.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,G.a.get(J("https://api.github.com/users/".concat(t,"?")));case 3:c=e.sent,s({type:w,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(D.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,G.a.get(J("https://api.github.com/users/".concat(t,"/repos?per_page=5&")));case 3:c=e.sent,s({type:k,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return s({type:F})},d=r.user,O=r.users,x=r.repos,p=r.loading;return Object(o.jsx)(h.Provider,{value:{setLoading:b,search:i,getUser:l,getRepos:j,clearUsers:function(){return s({type:_})},user:d,users:O,repos:x,loading:p},children:t})};var q=function(){return Object(o.jsx)(W,{children:Object(o.jsx)(U,{children:Object(o.jsxs)(j.a,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"container pt-4",children:[Object(o.jsx)(N,{alert:{text:"Test alert"}}),Object(o.jsxs)(g.c,{children:[Object(o.jsx)(g.a,{path:"/",exact:!0,component:p}),Object(o.jsx)(g.a,{path:"/about",component:m}),Object(o.jsx)(g.a,{path:"/profile/:name",component:v})]})]})]})})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(q,{})}),document.getElementById("root")),K()}},[[64,1,2]]]);
//# sourceMappingURL=main.881c7cb6.chunk.js.map