(this["webpackJsonppinterest-clone"]=this["webpackJsonppinterest-clone"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),s=n(32),r=n.n(s),i=(n(38),n(13)),o=n.n(i),l=n(17),u=n(11),j=(n(40),n(18)),d=n(2),h=function(e){var t=e.createNewAccount,n=e.signInExistingAccount,a=Object(c.useState)(),s=Object(u.a)(a,2),r=s[0],i=s[1],o=Object(c.useState)(),l=Object(u.a)(o,2),j=l[0],h=l[1],b=Object(c.useState)(),p=Object(u.a)(b,2),m=p[0],O=p[1],f=function(e){e.preventDefault(),i(e.target.value)},g=function(e){e.preventDefault(),h(e.target.value)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!0===e?t("random","password12345",!0):n(r,j)};return Object(d.jsx)("div",{className:"input",children:Object(d.jsxs)("div",{className:"signInScreen",children:[Object(d.jsx)("h5",{children:"Create New Account"}),Object(d.jsx)("input",{type:"text",onChange:f,placeholder:"Email"}),Object(d.jsx)("input",{type:"text",onChange:g,placeholder:"Password"}),Object(d.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),O(e.target.value)},placeholder:"Confirm Password"}),Object(d.jsx)("button",{className:"continue",onClick:function(){return j!==m?(alert("Please make sure the passwords match."),null):t(r,j)},children:"Create New Account"}),Object(d.jsx)("h5",{children:"Sign In"}),Object(d.jsx)("input",{type:"text",onChange:f,placeholder:"Email"}),Object(d.jsx)("input",{type:"text",onChange:g,placeholder:"Password"}),Object(d.jsx)("button",{className:"continue",onClick:x,children:"Sign In"}),Object(d.jsx)("h5",{children:"Use Demo Account"}),Object(d.jsx)("button",{className:"continue",onClick:function(){x(!0)},children:"Use Demo Account"})]})})},b=n(23);n(46);b.a.initializeApp({apiKey:"AIzaSyCHPSB1S58MWb5E5gVXccN1p8DXgFNNuVw",authDomain:"pinterest-clone-843c8.firebaseapp.com",projectId:"pinterest-clone-843c8",storageBucket:"pinterest-clone-843c8.appspot.com",messagingSenderId:"1013112040906",appId:"1:1013112040906:web:bd97504bf14e75434d3333",measurementId:"G-W8VETWB8RF"});var p=b.a.auth(),m=b.a.firestore(),O=p,f=function(e){var t=e.setimageArray,n=e.searchTerm,a=e.setsearchTerm,s=e.signIn,r=e.setsignIn,i=Object(c.useState)(!1),b=Object(u.a)(i,2),p=b[0],m=b[1],f=Object(c.useState)("none"),g=Object(u.a)(f,2),x=g[0],v=g[1];Object(c.useEffect)((function(){O.onAuthStateChanged((function(e){e?m(e):console.log("No current User")}))}),[]);var w=function(){var e=Object(l.a)(o.a.mark((function e(){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=".concat(n,"&per_page=50"));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,t(a.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("i",{className:"fab fa-pinterest-square"}),Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("button",{children:"Home"})}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("i",{onClick:w,className:"fas fa-search"})}),Object(d.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"Search"})]}),Object(d.jsx)("i",{onClick:function(){if(s)return r(!1);r(!0)},className:"fas fa-circle ".concat(p?"green":"grey")}),Object(d.jsx)("i",{onClick:function(){return v("none"===x?"flex":"none")},className:"fas fa-sort-down"}),Object(d.jsxs)("div",{style:{display:x},className:"selectionBox",children:[Object(d.jsx)(j.b,{to:p?"/UserPage":"#",style:{color:"grey"},children:Object(d.jsx)("button",{children:"Collection"})}),Object(d.jsx)("button",{onClick:function(){m(null),O.signOut().then((function(){console.log("Signed Out")}),(function(e){console.error("Sign Out Error",e)}))},children:"Sign Out"})]}),s?Object(d.jsx)(h,{createNewAccount:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(!1),O.signInWithEmailAndPassword(e,t).then((function(e){console.log(0)})).catch((function(c){if(!0===n){for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s="",r=0;r<10;r++)s+=a.charAt(Math.floor(Math.random()*a.length));e="".concat(s,"@website.com"),t="password12345"}return O.createUserWithEmailAndPassword(e,t).then((function(e){})).catch((function(e){switch(e.code){case"auth/email-already-in-use":alert("Email address already in use.");break;case"auth/invalid-email":alert("Email address  is invalid.");break;case"auth/operation-not-allowed":alert("Error during sign up.");break;case"auth/weak-password":alert("Password is not strong enough. Add additional characters including special characters and numbers.");break;default:alert(e.message)}})),O.onAuthStateChanged((function(e){m(e)}))}));var c=O.onAuthStateChanged((function(e){m(e)}));return c},signInExistingAccount:function(e,t){return r(!1),O.signInWithEmailAndPassword(e,t).then((function(e){e.user})).catch((function(e){alert(e.message)})),O.onAuthStateChanged((function(e){m(e)}))}}):""]})},g=n(9),x=function(e){var t=e.item,n=e.setsignIn,c=Object(g.e)(),a=t.user.portfolio_url,s=t.user.portfolio_url;null!==a?a.match(/https?:\/\//)&&(a=a.replace(/https?:\/\//,"")):(a=t.user.instagram_username,s="https://www.instagram.com/".concat(t.user.instagram_username));var r=t.id,i={pathname:"/shop/".concat(r),state:t,newUrl:a,linkPage:s},u=function(){var e=Object(l.a)(o.a.mark((function e(){var c,a,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==O.currentUser){e.next=3;break}return n(!0),e.abrupt("return",null);case 3:return c=O.currentUser.uid,a=m.collection("users").doc(c),e.next=7,a.get();case 7:if((s=e.sent).exists){e.next=14;break}return(r=[]).push({0:t.urls.small,1:t.urls.regular}),e.abrupt("return",m.collection("users").doc(c).set({name:"name",photoArray:r}));case 14:return(i=s.data().photoArray).push({0:t.urls.small,1:t.urls.regular}),e.abrupt("return",m.collection("users").doc(c).update({name:"name",photoArray:i}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"shell",children:[Object(d.jsx)("div",{className:"popup-background"}),Object(d.jsxs)("div",{className:"saveButton",children:[Object(d.jsx)("button",{className:"view",onClick:function(){return c.push(i)},children:"View"}),Object(d.jsx)("button",{onClick:u,children:"Save"})]}),Object(d.jsx)("img",{src:t.urls.small,alt:""}),Object(d.jsx)("div",{className:"buttonBox",children:a?Object(d.jsx)("button",{onClick:function(){window.open(s)},className:"one",children:a}):""})]})})},v=function(e){var t=e.imageArray,n=e.setsignIn;return Object(d.jsx)("div",{className:"gallery",children:Object(d.jsx)("div",{className:"imageContainer",children:t.map((function(e,t){return Object(d.jsx)(x,{setsignIn:n,item:e},t)}))})})},w=function(e){var t=e.searchTerm,n=Object(c.useState)([]),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(g.f)(),j=i.linkPage;return null==i.linkPage?console.log("Null"):j=i.linkPage,Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=".concat(t,"&per_page=30"));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(d.jsxs)("div",{className:"ImagePage",children:[Object(d.jsxs)("div",{className:"doubleView",children:[Object(d.jsx)("div",{className:"imageLeft",children:Object(d.jsx)("div",{className:"shell",children:Object(d.jsx)("img",{src:i.state.urls.small,alt:""})})}),Object(d.jsxs)("div",{className:"imageDetails",children:[Object(d.jsxs)("div",{className:"des",children:[Object(d.jsx)("h2",{children:i.state.alt_description}),Object(d.jsx)("div",{className:"PageLink",onClick:function(){window.open(j)},children:i.linkPage})]}),Object(d.jsx)("div",{className:"profileDetails",children:Object(d.jsxs)("div",{className:"blockOne",children:[Object(d.jsx)("img",{src:i.state.user.profile_image.large,alt:""}),Object(d.jsxs)("div",{className:"ptag",children:[Object(d.jsx)("p",{children:i.state.user.name}),Object(d.jsx)("p",{children:i.state.user.location})]})]})})]})]}),Object(d.jsx)("h2",{children:"More Like This"}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"mapData",children:s.map((function(e,t){return Object(d.jsx)(x,{item:e},t)}))})})]})},N=function(e){var t=e.item,n=e.getArray,a=Object(c.useState)("none"),s=Object(u.a)(a,2),r=s[0],i=s[1],o=Object(c.useState)("inline-block"),l=Object(u.a)(o,2),j=l[0],h=l[1],b=function(){return i("none"===r?"flex":"none")};return Object(d.jsxs)("div",{style:{display:j},className:"card",children:[Object(d.jsx)("div",{onClick:b,style:{display:r},className:"centerImage",children:Object(d.jsx)("img",{src:t[1],alt:""})}),Object(d.jsxs)("div",{className:"shell",children:[Object(d.jsxs)("div",{className:"editButton",children:[Object(d.jsx)("button",{onClick:function(){return h("none"),n(!0,t[0])},className:"view",children:"Remove"}),Object(d.jsx)("button",{onClick:b,children:"Expand"})]}),Object(d.jsx)("div",{className:"popup-background"}),Object(d.jsx)("img",{src:t[0],alt:""})]})]})},y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}for(s=O.currentUser.uid,r=0;r<n.length;r++)n[r][0]===c&&n.splice(r,1);return i=n,m.collection("users").doc(s).update({name:"name",photoArray:i}),e.abrupt("return",a(i));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=O.currentUser.uid,n=m.collection("users").doc(t),e.next=5,n.get();case 5:return c=e.sent,e.abrupt("return",a(c.data().photoArray));case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsx)("div",{className:"gallery",children:Object(d.jsx)("div",{className:"imageContainer",children:n.map((function(e,t){return Object(d.jsx)(N,{item:e,getArray:s},t)}))})})};var k=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("puppy"),r=Object(u.a)(s,2),i=r[0],h=r[1],b=Object(c.useState)(!1),p=Object(u.a)(b,2),m=p[0],O=p[1];return Object(c.useEffect)((function(){return function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/search/photos/?client_id=yARgx04JGwM7P8THJFN-9KUkZgAG3yDeRiOKRDgTg7g&query=".concat(i,"&per_page=30"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),Object(d.jsx)(j.a,{basename:"/",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{setimageArray:a,searchTerm:i,setsearchTerm:h,signIn:m,setsignIn:O}),Object(d.jsx)(g.a,{exact:!0,path:"/",children:Object(d.jsx)(v,{imageArray:n,setsignIn:O})}),Object(d.jsx)(g.a,{exact:!0,path:"/shop/:subId",children:Object(d.jsx)(w,{searchTerm:i})}),Object(d.jsx)(g.a,{exact:!0,path:"/UserPage",children:Object(d.jsx)(y,{})})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),A()}},[[51,1,2]]]);
//# sourceMappingURL=main.7e000225.chunk.js.map