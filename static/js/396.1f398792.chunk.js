"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[396],{396:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return b}});var s=r(861),o=r(439),c=r(757),u=r.n(c),l=r(791),p=r(689),v=r(87),f=r(955);function h(e){var t=e.map((function(e){return e.name}));return t.length||t.push("Other"),t.join(" ")}var d="GoBackBtn_btn__S5ROr",m=r(184),g=function(e){var t=e.to,r=e.children;return(0,m.jsx)("button",{className:d,type:"button",children:(0,m.jsx)(v.rU,{to:t,children:r})})},_={section:"MovieDetails_section__CCh0q",movieDetails:"MovieDetails_movieDetails__EbgQo",movieDetailsPoster:"MovieDetails_movieDetailsPoster__c5TGk",movieDetailsDescription:"MovieDetails_movieDetailsDescription__3eq2P",movieDetailsInformTitle:"MovieDetails_movieDetailsInformTitle__NruqO",movieDetailsInformList:"MovieDetails_movieDetailsInformList__E-N8I"},b=function(){var e,t,r=(0,p.UO)().movieId,n=(0,l.useState)(null),i=(0,o.Z)(n,2),c=i[0],d=i[1],b=(0,p.TH)();if((0,l.useEffect)((function(){function e(){return(e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.getMovieDetails(Number(r));case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return");case 6:d(a({},t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[0,9,12,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),!c)return null;var j,x=c.poster_path,w=c.original_title,y=c.vote_average,D=c.overview,O=c.genres,k=c.release_date,Z=new Date(k).getFullYear(),M=Math.round(10*y),P=null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,m.jsxs)("section",{className:_.section,children:[(0,m.jsx)(g,{to:P,children:"Go back"}),(0,m.jsxs)("div",{className:_.movieDetails,children:[(0,m.jsx)("img",{className:_.movieDetailsPoster,src:(j=x,null==j?"https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg":"https://image.tmdb.org/t/p/w500".concat(j)),alt:w}),(0,m.jsxs)("div",{className:_.movieDetailsDescription,children:[(0,m.jsxs)("h2",{children:[w," (",Z,")"]}),(0,m.jsxs)("p",{children:["User Score: ",M," %"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:D}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:h(O)})]})]}),(0,m.jsxs)("div",{className:_.movieDetailsInform,children:[(0,m.jsx)("h3",{className:_.movieDetailsInformTitle,children:"Additional information"}),(0,m.jsxs)("ul",{className:_.movieDetailsInformList,children:[(0,m.jsx)("li",{children:(0,m.jsx)(v.OL,{to:"cast",state:{from:P},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(v.OL,{to:"reviews",state:{from:P},children:"Reviews"})})]}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading ..."}),children:(0,m.jsx)(p.j3,{})})]})]})}},955:function(e,t,r){var n=r(861),i=r(757),a=r.n(i),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="2c7fa2f5061d9d01a218953668620cef";function c(){return c=(0,n.Z)(a().mark((function e(){var t,r,n,i,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,r="trending/movie/day?api_key=".concat(o,"&page=").concat(t),e.next=4,s.Z.get(r);case 4:return n=e.sent,i=n.data,e.abrupt("return",i.results.map((function(e){return{title:e.title,id:e.id}})));case 7:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(){return(u=(0,n.Z)(a().mark((function e(t){var r,n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(o,"&language=en-US&query==").concat(t),e.next=3,s.Z.get(r);case 3:return n=e.sent,i=n.data,e.abrupt("return",i.results.map((function(e){return{title:e.title,id:e.id}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(t){var r,n,i,c,u,l,p,v,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"?api_key=").concat(o),e.next=3,s.Z.get(r);case 3:return n=e.sent,i=n.data,c=i.poster_path,u=i.original_title,l=i.vote_average,p=i.overview,v=i.genres,f=i.release_date,e.abrupt("return",{poster_path:c,original_title:u,vote_average:l,overview:p,genres:v,release_date:f});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(a().mark((function e(t){var r,n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits?api_key=").concat(o),e.next=3,s.Z.get(r);case 3:return n=e.sent,i=n.data,e.abrupt("return",i.cast.map((function(e){return{profile_path:e.profile_path,name:e.name,character:e.character}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(a().mark((function e(t){var r,n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews?api_key=").concat(o),e.next=3,s.Z.get(r);case 3:return n=e.sent,i=n.data,e.abrupt("return",i.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={getTrendMovies:function(){return c.apply(this,arguments)},searchMovies:function(e){return u.apply(this,arguments)},getMovieDetails:function(e){return l.apply(this,arguments)},getMovieCredits:function(e){return p.apply(this,arguments)},getMovieReviews:function(e){return v.apply(this,arguments)}};t.Z=f}}]);
//# sourceMappingURL=396.1f398792.chunk.js.map