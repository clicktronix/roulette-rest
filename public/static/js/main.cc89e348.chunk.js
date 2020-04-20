(this["webpackJsonpsimple-rest-spa"]=this["webpackJsonpsimple-rest-spa"]||[]).push([[0],{124:function(e,t,n){"use strict";var r=n(183);n.d(t,"LocalStorage",(function(){return r.a}));var a=n(184);n.d(t,"MemoryStorage",(function(){return a.a}));n(185)},125:function(e,t,n){e.exports={Wrapper:"Layout_Wrapper__3uO9p",Content:"Layout_Content__1FFbA",Footer:"Layout_Footer__20rqT"}},126:function(e,t,n){e.exports={Button:"Header_Button__HX-KD"}},158:function(e,t,n){e.exports={SignUpForm:"SignUpUser_SignUpForm__3Od4a",SubmitButton:"SignUpUser_SubmitButton__823qS"}},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(6),a=n(10),o=function(){function e(){Object(r.a)(this,e),this.isLocalStorageAvailable=null,this.isLocalStorageAvailable=e.checkAvailability()}return Object(a.a)(e,null,[{key:"checkAvailability",value:function(){try{return localStorage.setItem("__test__","__test-value__"),localStorage.removeItem("__test__"),!0}catch(e){return console.error(e),!1}}}]),Object(a.a)(e,[{key:"set",value:function(e,t){this.isLocalStorageAvailable&&localStorage.setItem(e,JSON.stringify(t))}},{key:"get",value:function(e,t){var n=t;if(!this.isLocalStorageAvailable)return n;var r=localStorage.getItem(e);try{n=r?JSON.parse(r):t}catch(a){console.error(a)}return n}},{key:"del",value:function(e){this.isLocalStorageAvailable&&localStorage.removeItem(e)}}]),e}()},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(6),a=n(10),o=function(){function e(){Object(r.a)(this,e),this.data={}}return Object(a.a)(e,[{key:"set",value:function(e,t){this.data[e]=JSON.stringify(t)}},{key:"get",value:function(e,t){var n=this.data[e]||null;return n?JSON.parse(n):t}},{key:"del",value:function(e){delete this.data[e]}}]),e}()},185:function(e,t){},220:function(e,t,n){e.exports={UsersWrapper:"ManageUsers_UsersWrapper__3LuPT"}},243:function(e,t,n){e.exports={Wrapper:"ChatMessage_Wrapper__3RCRO"}},244:function(e,t,n){e.exports={Wrapper:"MainLayout_Wrapper__3_gRT"}},245:function(e,t,n){e.exports={SignInForm:"SignInUser_SignInForm__3yhMI"}},247:function(e,t,n){e.exports={Wrapper:"UnauthorizedLayout_Wrapper__3d0om"}},248:function(e,t,n){e.exports={ProfileForm:"Profile_ProfileForm__1Yh2v"}},250:function(e,t,n){e.exports={Wrapper:"AuthChecker_Wrapper__30FrR"}},254:function(e,t,n){e.exports=n(514)},305:function(e,t){},513:function(e,t,n){},514:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"MAIN",(function(){return g}));var a={};n.r(a),n.d(a,"USERS",(function(){return k}));var o={};n.r(o),n.d(o,"SIGN_UP",(function(){return E})),n.d(o,"SIGN_IN",(function(){return w})),n.d(o,"AUTH_ERROR",(function(){return S}));var c={};n.r(c),n.d(c,"PROFILE",(function(){return x}));var s={};n.r(s),n.d(s,"UsersModule",(function(){return xe})),n.d(s,"MainModule",(function(){return Ke})),n.d(s,"AuthModule",(function(){return it})),n.d(s,"ProfileModule",(function(){return ht}));var u=n(0),i=n.n(u),l=n(9),p=n.n(l),m=n(36),d=n(32),f=n(6),h=n(10),b=n(23),v=n(19),O=n(22),y=function e(){Object(f.a)(this,e)},j=n(43),g="/",k="/users",E="/sign-up",w="/sign-in",S="/auth-error",x="/profile",_={mainRoutes:r,userRoutes:a,authRoutes:o,profileRoutes:c},I=n(3),T=n.n(I),U=n(14),R=n(13),N=n(217),F=n(522);n(214).config();var C={baseUrl:"https://mysterious-cove-46705.herokuapp.com",socketsPort:Object({NODE_ENV:"production",PUBLIC_URL:"https://mysterious-cove-46705.herokuapp.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SOCKETS_PORT||"8081"},P=n(53),W=n(215),A=n.n(W),M=function(){function e(t,n){Object(f.a)(this,e),this.request=void 0,this.isRefreshing=!1,this.request=A.a.create({baseURL:t,headers:n,withCredentials:!1})}return Object(h.a)(e,[{key:"get",value:function(e){var t=e.url,n=e.data,r=e.options,a=Object(P.a)({data:n},r);return this.request.get(t,a)}},{key:"post",value:function(e){var t=e.url,n=e.data,r=e.options;return this.request.post(t,n,r)}},{key:"patch",value:function(e){var t=e.url,n=e.data,r=e.options;return this.request.patch(t,n,r)}},{key:"del",value:function(e){var t=e.url,n=e.data,r=e.options,a=Object(P.a)({url:t,data:n},r);return this.request.delete(t,a)}},{key:"put",value:function(e){var t=e.url,n=e.data,r=e.options;return this.request.put(t,n,Object(P.a)({},r))}},{key:"initInterceptors",value:function(e){var t=this,n=e.refreshTokenInterceptor;this.request.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status||t.isRefreshing||(t.isRefreshing=!0,n().catch((function(e){return e})).finally((function(){t.isRefreshing=!1}))),e}))}}]),e}(),D=n(29),L=n(30);var q,B=n(253),H=function(e){function t(e){var n;Object(f.a)(this,t);var r=e.config,a=e.status,o=e.request,c=e.response;return(n=Object(b.a)(this,Object(v.a)(t).call(this,c.data.message))).config=void 0,n.status=void 0,n.request=void 0,n.response=void 0,n.config=r,n.status=a,n.request=o,n.response=c,n}return Object(O.a)(t,e),t}(Object(B.a)(Error)),G=function(){function e(t,n){Object(f.a)(this,e),this.actions=void 0,this.storage=void 0,this.actions=t,this.storage=n}return Object(h.a)(e,[{key:"token",get:function(){return this.storage.get("token",null)},set:function(e){this.storage.set("token",e)}},{key:"refreshToken",get:function(){return this.storage.get("refreshToken",null)},set:function(e){this.storage.set("refreshToken",e)}}]),Object(h.a)(e,[{key:"setHeaders",value:function(){return{headers:{Authorization:this.token}}}}],[{key:"handleResponse",value:function(e,t){var n=function(){return t=e.data,Boolean(t.data)?e.data.data:e.data;var t}();if(function(e){return e>=400&&e<=503}(e.status)){var r=e.config,a=e.status,o=e.request;throw new H({config:r,status:a,request:o,response:e})}return t?t(n):n}}]),e}();function J(e){var t=e.user;return{id:t._id,name:t.name,surname:t.surname,email:t.email}}function K(e){return e.users.map((function(e){return J({user:e})}))}var z,V=(q=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"getUsers",value:function(){var e=Object(U.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/users",options:this.setHeaders()});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,K));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(U.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/users/".concat(n),options:this.setHeaders()});case 2:return r=e.sent,e.abrupt("return",t.handleResponse(r,J));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(U.a)(T.a.mark((function e(n,r){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.put({url:"/users/".concat(n),data:r,options:this.setHeaders()});case 2:return a=e.sent,e.abrupt("return",t.handleResponse(a,J));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(U.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.del({url:"/users/".concat(n),options:this.setHeaders()});case 2:return r=e.sent,e.abrupt("return",t.handleResponse(r,J));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),t}(G),Object(D.a)(q.prototype,"getUsers",[L.a],Object.getOwnPropertyDescriptor(q.prototype,"getUsers"),q.prototype),Object(D.a)(q.prototype,"getUser",[L.a],Object.getOwnPropertyDescriptor(q.prototype,"getUser"),q.prototype),Object(D.a)(q.prototype,"updateUser",[L.a],Object.getOwnPropertyDescriptor(q.prototype,"updateUser"),q.prototype),Object(D.a)(q.prototype,"deleteUser",[L.a],Object.getOwnPropertyDescriptor(q.prototype,"deleteUser"),q.prototype),q);function X(e){var t=e.user,n=e.token;return{data:{id:t._id,name:t.name,surname:t.surname,email:t.email},tokens:{accessToken:n.accessToken,refreshToken:n.refreshToken}}}var Y,$=(z=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"signUp",value:function(){var e=Object(U.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.post({url:"/register",data:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signIn",value:function(){var e=Object(U.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.post({url:"/authenticate",data:n});case 2:return r=e.sent,e.abrupt("return",t.handleResponse(r,X));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signInByToken",value:function(){var e=Object(U.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/token-authenticate",options:this.setHeaders()});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,X));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateTokens",value:function(){var e=Object(U.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.post({url:"/authenticate/refresh",options:this.setHeaders(),data:{refreshToken:this.refreshToken}});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,(function(e){return e.token})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(G),Object(D.a)(z.prototype,"signUp",[L.a],Object.getOwnPropertyDescriptor(z.prototype,"signUp"),z.prototype),Object(D.a)(z.prototype,"signIn",[L.a],Object.getOwnPropertyDescriptor(z.prototype,"signIn"),z.prototype),Object(D.a)(z.prototype,"signInByToken",[L.a],Object.getOwnPropertyDescriptor(z.prototype,"signInByToken"),z.prototype),Object(D.a)(z.prototype,"updateTokens",[L.a],Object.getOwnPropertyDescriptor(z.prototype,"updateTokens"),z.prototype),z),Q=n(216),Z=n.n(Q),ee=n(518),te=(Y=function(){function e(){Object(f.a)(this,e),this.io={}}return Object(h.a)(e,[{key:"init",value:function(){this.io=Z.a.connect(C.baseUrl,{transports:["websocket"],port:C.socketsPort}),this.io.on("connect",(function(){return console.info("Socket connected")})),this.io.on("disconnect",(function(){return console.info("Socket disconnected")}))}},{key:"sendMessage",value:function(e){this.io.emit("message",e)}},{key:"onMessage",value:function(){return Object(ee.a)(this.io,"message")}},{key:"disconnect",value:function(){this.io.disconnect()}}]),e}(),Object(D.a)(Y.prototype,"init",[L.a],Object.getOwnPropertyDescriptor(Y.prototype,"init"),Y.prototype),Object(D.a)(Y.prototype,"sendMessage",[L.a],Object.getOwnPropertyDescriptor(Y.prototype,"sendMessage"),Y.prototype),Object(D.a)(Y.prototype,"onMessage",[L.a],Object.getOwnPropertyDescriptor(Y.prototype,"onMessage"),Y.prototype),Object(D.a)(Y.prototype,"disconnect",[L.a],Object.getOwnPropertyDescriptor(Y.prototype,"disconnect"),Y.prototype),Y),ne=function(){function e(t){Object(f.a)(this,e),this.storage=t,this.actions=void 0,this.headers={},this.socket=void 0,this.users=void 0,this.auth=void 0,this.actions=new M(C.baseUrl,this.headers),this.socket=new te,this.users=new V(this.actions,t),this.auth=new $(this.actions,t)}return Object(h.a)(e,[{key:"initAuthInterceptors",value:function(e){this.actions.initInterceptors(e)}}]),e}(),re=n(124),ae=i.a.createContext(null),oe=function(e){var t=e.children,n=re.LocalStorage.checkAvailability()?new re.LocalStorage:new re.MemoryStorage,r=new ne(n);return i.a.createElement(ae.Provider,{value:r},t)};function ce(){var e=Object(u.useContext)(ae);if(!e)throw new Error("Api React Context is not defined");return e}var se=i.a.createContext(null),ue=function(e){var t,n=e.children,r=ce(),a=(t=r.storage,{getToken:function(){return t.get("token",null)},setToken:function(e,n){t.set("token",e),t.set("refreshToken",n)},resetToken:function(){t.del("token"),t.del("refreshToken")}}),o=a.getToken,c=a.setToken,s=a.resetToken,l=Object(N.a)(),p=Boolean(o()),m=Object(u.useState)(p),d=Object(R.a)(m,2),f=d[0],h=d[1],b=Object(u.useState)(""),v=Object(R.a)(b,2)[1],O=Object(u.useState)(null),y=Object(R.a)(O,2),j=y[0],g=y[1],k=function(){var e=Object(U.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,r.auth.updateTokens();case 4:return t=e.sent,l()&&c(t.accessToken,t.refreshToken),e.next=8,r.auth.signInByToken();case 8:n=e.sent,l()&&g(n.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),l()&&v(e.t0.message);case 15:return e.prev=15,l()&&h(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();return Object(F.a)(Object(U.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.initAuthInterceptors({refreshTokenInterceptor:k}),j||!o()){e.next=17;break}return e.prev=2,h(!0),e.next=6,r.auth.signInByToken();case 6:t=e.sent,l()&&g(t.data),l()&&c(t.tokens.accessToken,t.tokens.refreshToken),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),l()&&v(e.t0.message);case 14:return e.prev=14,l()&&h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})))),i.a.createElement(se.Provider,{value:{user:j,setAuth:function(e,t,n){g(e),c(t,n)},resetAuth:function(){g(null),s()},isLoading:f}},n)},ie=function(e){var t=e.component,n=e.location,r=Object(j.a)(e,["component","location"]),a=Object(u.useContext)(se),o=void 0!==t?t:function(){return null};return i.a.createElement(d.b,Object.assign({key:null===n||void 0===n?void 0:n.pathname},r,{render:function(){return i.a.createElement(i.a.Fragment,null,(null===a||void 0===a?void 0:a.user)?i.a.createElement(o,null):i.a.createElement(d.a,{to:_.authRoutes.AUTH_ERROR}))}}))},le=n(520),pe=n(77),me=n(517),de=n(220),fe=n.n(de),he=le.a.Text,be=function(){var e=ce(),t=Object(d.g)(),n=Object(N.a)(),r=Object(u.useState)(!1),a=Object(R.a)(r,2),o=a[0],c=a[1],s=Object(u.useState)(""),l=Object(R.a)(s,2),p=l[0],m=l[1],f=Object(u.useState)([]),h=Object(R.a)(f,2),b=h[0],v=h[1],O=Object(u.useCallback)(Object(U.a)(T.a.mark((function t(){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,e.users.getUsers();case 4:r=t.sent,n()&&v(r.map((function(e,t){return Object(P.a)({},e,{key:t})}))),n()&&m(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n()&&m(t.t0.message);case 12:return t.prev=12,n()&&c(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])}))),[e.users,n]),y=function(){var t=Object(U.a)(T.a.mark((function t(r){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,e.users.deleteUser(r);case 4:n()&&m(""),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n()&&m(t.t0.message);case 10:return t.prev=10,n()&&c(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}(),j=function(e){return Object(U.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:return t.next=4,O();case 4:case"end":return t.stop()}}),t)})))},g=[{title:"ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Surname",dataIndex:"surname",key:"surname"},{title:"Email",dataIndex:"email",key:"email"},{title:"Actions",dataIndex:"",key:"x",render:function(e,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(pe.a,{type:"link",onClick:(r=n.id,function(){t.push("".concat(_.profileRoutes.PROFILE,"/").concat(r))})},"Edit"),i.a.createElement(pe.a,{type:"link",onClick:j(n.id)},"Delete"));var r}}];return Object(u.useEffect)((function(){O()}),[O]),i.a.createElement("div",{className:fe.a.UsersWrapper},i.a.createElement(me.a,{dataSource:b,columns:g,loading:o,bordered:!0}),p&&i.a.createElement(he,{type:"danger"},p))},ve=n(125),Oe=n.n(ve),ye=n(76),je=n(126),ge=n.n(je),ke=[{route:_.mainRoutes.MAIN,title:"Main"},{route:_.userRoutes.USERS,title:"Users"}],Ee=function(){var e=Object(u.useContext)(se),t=Object(d.h)(),n=Object(u.useState)(t.pathname),r=Object(R.a)(n,2),a=r[0],o=r[1];return i.a.createElement("header",null,i.a.createElement(ye.a,{onClick:function(e){o(e.key)},selectedKeys:[a],mode:"horizontal"},ke.map((function(e){var t=e.route,n=e.title;return i.a.createElement(ye.a.Item,{key:t},i.a.createElement(m.b,{to:t,key:t},n))})),(null===e||void 0===e?void 0:e.user)?i.a.createElement(ye.a.Item,{key:_.profileRoutes.PROFILE,className:ge.a.Button},i.a.createElement(m.b,{to:"".concat(_.profileRoutes.PROFILE,"/").concat(e.user.id)},e.user.email)):i.a.createElement(ye.a.Item,{key:_.authRoutes.SIGN_IN,className:ge.a.Button},i.a.createElement(m.b,{to:_.authRoutes.SIGN_IN},"Sign In")),!(null===e||void 0===e?void 0:e.user)&&i.a.createElement(ye.a.Item,{key:_.authRoutes.SIGN_UP,className:ge.a.Button},i.a.createElement(m.b,{to:_.authRoutes.SIGN_UP},"Sign Up"))))},we=function(e){var t=e.withFooter,n=e.children;return i.a.createElement("div",{className:Oe.a.Wrapper},i.a.createElement(Ee,null),i.a.createElement("main",{className:Oe.a.Content},n),t&&i.a.createElement("footer",{className:Oe.a.Footer},"clicktronix@hotmail.com"))},Se=function(){return i.a.createElement(we,{withFooter:!0},i.a.createElement(be,null))},xe=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(ie,{path:k,component:Se,exact:!0})]}}]),t}(y),_e=n(18),Ie=n(15),Te=n(1),Ue=n.n(Te),Re=n(46);var Ne=n(521),Fe=le.a.Text,Ce=function(e){var t=e.error,n=e.password,r=Object(j.a)(e,["error","password"]);return i.a.createElement(i.a.Fragment,null,n?i.a.createElement(Ne.a.Password,r):i.a.createElement(Ne.a,r),t&&i.a.createElement(Fe,{type:"danger"},t))};var Pe=function(e,t){var n=function(n){return i.a.createElement(Re.a,Object.assign({type:t},n,{component:e}))};return n.displayName="FieldWithComponent(".concat(e.displayName||e.name||"Component",")"),n}((function(e){var t=e.input,n=e.meta,r=Object(j.a)(e,["input","meta"]),a=n.touched&&r.error||n.touched&&n.error?n.error:void 0;return i.a.createElement(Ce,Object.assign({},t,{error:a},r))})),We=n(55),Ae=n.n(We),Me=n(243),De=n.n(Me),Le=function(e){var t=e.children;return i.a.createElement("div",{className:De.a.Wrapper},t)},qe=le.a.Text,Be=function(){var e=ce(),t=Object(u.useContext)(se),n=Object(u.useState)(!1),r=Object(R.a)(n,2),a=r[0],o=r[1],c=Object(u.useState)(!1),s=Object(R.a)(c,1)[0],l=Object(u.useState)(""),p=Object(R.a)(l,1)[0],m=Object(u.useState)([]),d=Object(R.a)(m,2),f=d[0],h=d[1];Object(u.useEffect)((function(){return e.socket.init(),e.socket.onMessage().subscribe((function(e){h((function(t){return[].concat(Object(Ie.a)(t),[e])}))})),function(){return e.socket.disconnect()}}));return i.a.createElement("div",{className:Ae.a.Window},i.a.createElement("div",{className:Ae.a.Header,onClick:function(){o((function(e){return!e}))}},"Chat"),i.a.createElement(Re.b,{onSubmit:function(n){(null===t||void 0===t?void 0:t.user)&&e.socket.sendMessage({content:n.message,sender:t.user})},render:function(e){var n,r,o=e.handleSubmit;return i.a.createElement("form",{onSubmit:o,autoComplete:"off"},i.a.createElement("div",{className:Ue()(Ae.a.Content,(n={},Object(_e.a)(n,Ae.a.SlideUp,a),Object(_e.a)(n,Ae.a.SlideDown,!a),n))},f.map((function(e,t){return i.a.createElement(Le,{key:t},e)}))),(null===t||void 0===t?void 0:t.user)&&i.a.createElement("div",{className:Ue()(Ae.a.InputWrapper,(r={},Object(_e.a)(r,Ae.a.SlideUp,a),Object(_e.a)(r,Ae.a.SlideDown,!a),r))},i.a.createElement(Pe,{name:"message",placeholder:"Enter your message"}),i.a.createElement(pe.a,{type:"primary",htmlType:"submit",loading:s},"Send")),p&&i.a.createElement(qe,{type:"danger"},p))},subscription:{}}))},He=n(244),Ge=n.n(He),Je=function(){return i.a.createElement(we,{withFooter:!0},i.a.createElement("div",{className:Ge.a.Wrapper},i.a.createElement("h1",null,"Main page"),i.a.createElement(Be,null)))},Ke=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(d.b,{path:g,component:Je,exact:!0})]}}]),t}(y),ze=n(519);function Ve(e){return function(t){return t?void 0:e}}function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}var Ye=n(245),$e=n.n(Ye),Qe=le.a.Text,Ze=function(){var e=ce(),t=Object(d.g)(),n=Object(N.a)(),r=Object(u.useContext)(se),a=Object(u.useState)(!1),o=Object(R.a)(a,2),c=o[0],s=o[1],l=Object(u.useState)(""),p=Object(R.a)(l,2),m=p[0],f=p[1],h=function(){var a=Object(U.a)(T.a.mark((function a(o){var c,u,i;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s(!0),a.next=4,e.auth.signIn(o);case 4:c=a.sent,u=c.data,i=c.tokens,null===r||void 0===r||r.setAuth(u,i.accessToken,i.refreshToken),n&&t.push(_.mainRoutes.MAIN),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n&&f(a.t0.message);case 14:return a.prev=14,n&&s(!1),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[0,11,14,17]])})));return function(e){return a.apply(this,arguments)}}();return i.a.createElement(Re.b,{onSubmit:function(e){return h(e)},render:function(e){var t=e.handleSubmit;return i.a.createElement("div",{className:$e.a.SignInForm},i.a.createElement("h1",null,"Sign In"),i.a.createElement(ze.a,{onFinish:t},i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"email",placeholder:"Enter your email",validate:Xe(Ve("Field required"))})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"password",placeholder:"Enter your password",validate:Xe(Ve("Field required")),password:!0})),i.a.createElement(ze.a.Item,null,i.a.createElement(pe.a,{type:"primary",htmlType:"submit",loading:c},"Sign In")),m&&i.a.createElement(Qe,{type:"danger"},m)))},subscription:{}})},et=function(){return i.a.createElement(we,{withFooter:!0},i.a.createElement(Ze,null))},tt=n(158),nt=n.n(tt),rt=le.a.Text,at=function(){var e=ce(),t=Object(N.a)(),n=Object(u.useState)(!1),r=Object(R.a)(n,2),a=r[0],o=r[1],c=Object(u.useState)(""),s=Object(R.a)(c,2),l=s[0],p=s[1],m=function(){var n=Object(U.a)(T.a.mark((function n(r){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,e.auth.signUp(r);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),t&&p(n.t0.message);case 9:return n.prev=9,t&&o(!1),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})));return function(e){return n.apply(this,arguments)}}();return i.a.createElement(Re.b,{onSubmit:function(e){return m(e)},render:function(e){var t=e.handleSubmit;return i.a.createElement("div",{className:nt.a.SignUpForm},i.a.createElement("h1",null,"Sign Up"),i.a.createElement(ze.a,{onFinish:t,className:nt.a.SignInForm},i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"name",placeholder:"Enter your name",validate:Xe(Ve("Field required"))})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"surname",placeholder:"Enter your surname",validate:Xe(Ve("Field required"))})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"email",placeholder:"Enter your email",validate:Xe(Ve("Field required"))})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"password",placeholder:"Enter your password",validate:Xe(Ve("Field required")),password:!0})),i.a.createElement(ze.a.Item,null,i.a.createElement(pe.a,{type:"primary",htmlType:"submit",loading:a},"Sign Up")),l&&i.a.createElement(rt,{type:"danger"},l)))},subscription:{}})},ot=function(){return i.a.createElement(we,{withFooter:!0},i.a.createElement(at,null))},ct=n(247),st=n.n(ct),ut=function(){return i.a.createElement(we,{withFooter:!0},i.a.createElement("div",{className:st.a.Wrapper},"Sorry, but you need to"," ",i.a.createElement(m.b,{to:_.authRoutes.SIGN_IN},"sign in")," ","to view this page."))},it=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(d.b,{exact:!0,key:w,path:w,component:et}),u.createElement(d.b,{exact:!0,key:E,path:E,component:ot}),u.createElement(d.b,{exact:!0,key:S,path:S,component:ut})]}}]),t}(y),lt=n(248),pt=n.n(lt),mt=le.a.Text,dt=function(){var e,t=ce(),n=Object(u.useContext)(se),r=Object(d.i)().userId,a=Object(N.a)(),o=Object(u.useState)(""),c=Object(R.a)(o,2),s=c[0],l=c[1],p=Object(u.useState)({name:"",surname:"",email:"",password:"",newPassword:""}),m=Object(R.a)(p,2),f=m[0],h=m[1],b=Object(u.useState)(!1),v=Object(R.a)(b,2),O=v[0],y=v[1],j=r===(null===n||void 0===n||null===(e=n.user)||void 0===e?void 0:e.id),g=Object(u.useCallback)(Object(U.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=16;break}return e.prev=1,y(!0),e.next=5,t.users.getUser(r);case 5:n=e.sent,a()&&h((function(e){return Object(P.a)({},e,{},n)})),a()&&l(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a()&&l(e.t0.message);case 13:return e.prev=13,a()&&y(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])}))),[t.users,a,r]),k=function(){var e=Object(U.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,y(!0),e.t0=r,!e.t0){e.next=6;break}return e.next=6,t.users.updateUser(r,Object(P.a)({},n,{id:r}));case 6:a()&&l(""),e.next=12;break;case 9:e.prev=9,e.t1=e.catch(0),a()&&l(e.t1.message);case 12:return e.prev=12,a()&&y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){g()}),[g]);return i.a.createElement(Re.b,{onSubmit:function(e){return k(e)},render:function(e){var t=e.handleSubmit;return i.a.createElement("div",{className:pt.a.ProfileForm},i.a.createElement("h1",null,"Edit"," ",null===f||void 0===f?void 0:f.name,"'s ","profile"),i.a.createElement(ze.a,{onFinish:t},i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"name",placeholder:"Enter your name"})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"surname",placeholder:"Enter your surname"})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"email",placeholder:"Enter your email"})),j&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"password",placeholder:"Enter your current password",password:!0})),i.a.createElement(ze.a.Item,null,i.a.createElement(Pe,{name:"newPassword",placeholder:"Enter your new password",password:!0}))),i.a.createElement(ze.a.Item,null,i.a.createElement(pe.a,{type:"primary",htmlType:"submit",loading:O},"Save")),s&&i.a.createElement(mt,{type:"danger"},s)))},initialValues:f,subscription:{}})},ft=function(){return i.a.createElement(we,{withFooter:!0},i.a.createElement(dt,null))},ht=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(ie,{path:"".concat(x,"/:userId"),component:ft,exact:!0})]}}]),t}(y),bt=n(155),vt=n.n(bt),Ot=(n(482),function(e){var t=e.children;return i.a.createElement(vt.a,null,i.a.createElement(oe,null,i.a.createElement(ue,null,t)))}),yt=n(239),jt=n(250),gt=n.n(jt),kt=function(e){var t=e.children,n=Object(u.useContext)(se);return i.a.createElement(i.a.Fragment,null,(null===n||void 0===n?void 0:n.isLoading)?i.a.createElement(we,{withFooter:!0},i.a.createElement("div",{className:gt.a.Wrapper},i.a.createElement(yt.a,{size:"large"}))):t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(513);p.a.render(i.a.createElement((function(){return i.a.createElement(m.a,null,i.a.createElement(Ot,null,i.a.createElement(kt,null,i.a.createElement(d.b,{path:"/"},i.a.createElement(d.d,null,Object.values(s).map((function(e){return e.getRoutes()})),i.a.createElement(d.a,{to:_.mainRoutes.MAIN}))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,n){e.exports={Window:"Chat_Window__2UqRv",Header:"Chat_Header__2AJs4",Content:"Chat_Content__1oWoC",InputWrapper:"Chat_InputWrapper__P0-h6",SlideUp:"Chat_SlideUp__30-Tx",SlideDown:"Chat_SlideDown__1NjUx"}}},[[254,1,2]]]);
//# sourceMappingURL=main.cc89e348.chunk.js.map