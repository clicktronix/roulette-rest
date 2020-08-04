(this["webpackJsonpsimple-rest-spa"]=this["webpackJsonpsimple-rest-spa"]||[]).push([[0],{129:function(e,t,n){"use strict";var r=n(192);n.d(t,"LocalStorage",(function(){return r.a}));var a=n(193);n.d(t,"MemoryStorage",(function(){return a.a}));n(194)},130:function(e,t,n){e.exports={Wrapper:"ChatMessage_Wrapper__3RCRO",OwnMessage:"ChatMessage_OwnMessage__2XSB5",SenderName:"ChatMessage_SenderName__3UReH"}},131:function(e,t,n){e.exports={Wrapper:"Layout_Wrapper__3uO9p",Content:"Layout_Content__1FFbA",Footer:"Layout_Footer__20rqT"}},132:function(e,t,n){e.exports={Button:"Header_Button__HX-KD"}},168:function(e,t,n){e.exports={SignUpForm:"SignUpUser_SignUpForm__3Od4a",SubmitButton:"SignUpUser_SubmitButton__823qS"}},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(11),a=n(13),o=function(){function e(){Object(r.a)(this,e),this.isLocalStorageAvailable=null,this.isLocalStorageAvailable=e.checkAvailability()}return Object(a.a)(e,null,[{key:"checkAvailability",value:function(){try{return localStorage.setItem("__test__","__test-value__"),localStorage.removeItem("__test__"),!0}catch(e){return console.error(e),!1}}}]),Object(a.a)(e,[{key:"set",value:function(e,t){this.isLocalStorageAvailable&&localStorage.setItem(e,JSON.stringify(t))}},{key:"get",value:function(e,t){var n=t;if(!this.isLocalStorageAvailable)return n;var r=localStorage.getItem(e);try{n=r?JSON.parse(r):t}catch(a){console.error(a)}return n}},{key:"del",value:function(e){this.isLocalStorageAvailable&&localStorage.removeItem(e)}}]),e}()},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(11),a=n(13),o=function(){function e(){Object(r.a)(this,e),this.data={}}return Object(a.a)(e,[{key:"set",value:function(e,t){this.data[e]=JSON.stringify(t)}},{key:"get",value:function(e,t){var n=this.data[e]||null;return n?JSON.parse(n):t}},{key:"del",value:function(e){delete this.data[e]}}]),e}()},194:function(e,t){},238:function(e,t,n){e.exports={UsersWrapper:"ManageUsers_UsersWrapper__3LuPT"}},251:function(e,t,n){e.exports=n.p+"static/media/arrow.1748438e.png"},252:function(e,t,n){e.exports={Wrapper:"MainLayout_Wrapper__3_gRT"}},253:function(e,t,n){e.exports={SignInForm:"SignInUser_SignInForm__3yhMI"}},255:function(e,t,n){e.exports={Wrapper:"UnauthorizedLayout_Wrapper__3d0om"}},256:function(e,t,n){e.exports={Wrapper:"LogoutLayout_Wrapper__2AK3s"}},257:function(e,t,n){e.exports={ProfileForm:"Profile_ProfileForm__1Yh2v"}},258:function(e,t,n){e.exports={Wrapper:"AuthChecker_Wrapper__30FrR"}},263:function(e,t,n){e.exports=n(519)},314:function(e,t){},46:function(e,t,n){e.exports={Window:"Chat_Window__2UqRv",Header:"Chat_Header__2AJs4",Content:"Chat_Content__1oWoC",Messages:"Chat_Messages__DpKke",InputWrapper:"Chat_InputWrapper__P0-h6",Arrow:"Chat_Arrow__3lavz",RotatedArrow:"Chat_RotatedArrow__2BFUb",SendButton:"Chat_SendButton__1YU2r",SlideUp:"Chat_SlideUp__30-Tx",closeChat:"Chat_closeChat__3YjoI",SlideDown:"Chat_SlideDown__1NjUx",openChat:"Chat_openChat__1xc0r"}},518:function(e,t,n){},519:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"MAIN",(function(){return j}));var a={};n.r(a),n.d(a,"USERS",(function(){return E}));var o={};n.r(o),n.d(o,"SIGN_UP",(function(){return k})),n.d(o,"SIGN_IN",(function(){return w})),n.d(o,"AUTH_ERROR",(function(){return _})),n.d(o,"LOGOUT",(function(){return x}));var c={};n.r(c),n.d(c,"PROFILE",(function(){return I}));var s={};n.r(s),n.d(s,"UsersModule",(function(){return Ye})),n.d(s,"MainModule",(function(){return Qe})),n.d(s,"AuthModule",(function(){return gt})),n.d(s,"ProfileModule",(function(){return _t}));var u=n(0),i=n.n(u),l=n(5),p=n.n(l),m=n(37),d=n(20),f=n(11),h=n(13),v=n(24),b=n(19),O=n(23),g=function e(){Object(f.a)(this,e)},y=n(48),j="/",E="/users",k="/sign-up",w="/sign-in",_="/auth-error",x="/logout",I="/profile",S={mainRoutes:r,userRoutes:a,authRoutes:o,profileRoutes:c},U=n(3),R=n.n(U),C=n(12),T=n(6),N=n(226),F=n(527);n(223).config();var A="https://mysterious-cove-46705.herokuapp.com",M=n(50),L=n(224),P=n.n(L),W=function(){function e(t,n){Object(f.a)(this,e),this.request=void 0,this.isRefreshing=!1,this.request=P.a.create({baseURL:t,headers:n,withCredentials:!1})}return Object(h.a)(e,[{key:"get",value:function(e){var t=e.url,n=e.data,r=e.options,a=Object(M.a)({data:n},r);return this.request.get(t,a)}},{key:"post",value:function(e){var t=e.url,n=e.data,r=e.options;return this.request.post(t,n,r)}},{key:"patch",value:function(e){var t=e.url,n=e.data,r=e.options;return this.request.patch(t,n,r)}},{key:"del",value:function(e){var t=e.url,n=e.data,r=e.options,a=Object(M.a)({url:t,data:n},r);return this.request.delete(t,a)}},{key:"put",value:function(e){var t=e.url,n=e.data,r=e.options;return this.request.put(t,n,Object(M.a)({},r))}},{key:"initInterceptors",value:function(e){var t=this,n=e.refreshTokenInterceptor;this.request.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status||t.isRefreshing||(t.isRefreshing=!0,n().catch((function(e){return e})).finally((function(){t.isRefreshing=!1}))),e}))}}]),e}(),D=n(31),q=n(32);var B,H=n(262),G=function(e){function t(e){var n;Object(f.a)(this,t);var r=e.config,a=e.status,o=e.request,c=e.response;return(n=Object(v.a)(this,Object(b.a)(t).call(this,c.data.message))).config=void 0,n.status=void 0,n.request=void 0,n.response=void 0,n.config=r,n.status=a,n.request=o,n.response=c,n}return Object(O.a)(t,e),t}(Object(H.a)(Error)),J=function(){function e(t,n){Object(f.a)(this,e),this.actions=void 0,this.storage=void 0,this.actions=t,this.storage=n}return Object(h.a)(e,[{key:"token",get:function(){return this.storage.get("token",null)},set:function(e){this.storage.set("token",e)}},{key:"refreshToken",get:function(){return this.storage.get("refreshToken",null)},set:function(e){this.storage.set("refreshToken",e)}}]),Object(h.a)(e,[{key:"setHeaders",value:function(){return{headers:{Authorization:this.token}}}}],[{key:"handleResponse",value:function(e,t){var n=function(){return t=e.data,Boolean(t.data)?e.data.data:e.data;var t}();if(function(e){return e>=400&&e<=503}(e.status)){var r=e.config,a=e.status,o=e.request;throw new G({config:r,status:a,request:o,response:e})}return t?t(n):n}}]),e}();function z(e){var t=e.user;return{id:t._id,name:t.name,surname:t.surname,email:t.email}}function K(e){return e.users.map((function(e){return z({user:e})}))}var Y,X=(B=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"getUsers",value:function(){var e=Object(C.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/users",options:this.setHeaders()});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,K));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(C.a)(R.a.mark((function e(n){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/users/".concat(n),options:this.setHeaders()});case 2:return r=e.sent,e.abrupt("return",t.handleResponse(r,z));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(C.a)(R.a.mark((function e(n,r){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.put({url:"/users/".concat(n),data:r,options:this.setHeaders()});case 2:return a=e.sent,e.abrupt("return",t.handleResponse(a,z));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(C.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.del({url:"/users/".concat(t),options:this.setHeaders()});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),t}(J),Object(D.a)(B.prototype,"getUsers",[q.a],Object.getOwnPropertyDescriptor(B.prototype,"getUsers"),B.prototype),Object(D.a)(B.prototype,"getUser",[q.a],Object.getOwnPropertyDescriptor(B.prototype,"getUser"),B.prototype),Object(D.a)(B.prototype,"updateUser",[q.a],Object.getOwnPropertyDescriptor(B.prototype,"updateUser"),B.prototype),Object(D.a)(B.prototype,"deleteUser",[q.a],Object.getOwnPropertyDescriptor(B.prototype,"deleteUser"),B.prototype),B);function V(e){var t=e.user,n=e.token;return{data:{id:t._id,name:t.name,surname:t.surname,email:t.email},tokens:{accessToken:n.accessToken,refreshToken:n.refreshToken}}}var $,Q=(Y=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"signUp",value:function(){var e=Object(C.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.post({url:"/register",data:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signIn",value:function(){var e=Object(C.a)(R.a.mark((function e(n){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.post({url:"/authenticate",data:n});case 2:return r=e.sent,e.abrupt("return",t.handleResponse(r,V));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"signInByToken",value:function(){var e=Object(C.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/token-authenticate",options:this.setHeaders()});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,V));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateTokens",value:function(){var e=Object(C.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.post({url:"/authenticate/refresh",options:this.setHeaders(),data:{refreshToken:this.refreshToken}});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,(function(e){return e.token})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(C.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actions.get({url:"/logout",options:this.setHeaders()});case 2:return n=e.sent,e.abrupt("return",t.handleResponse(n,(function(e){return e.success})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(J),Object(D.a)(Y.prototype,"signUp",[q.a],Object.getOwnPropertyDescriptor(Y.prototype,"signUp"),Y.prototype),Object(D.a)(Y.prototype,"signIn",[q.a],Object.getOwnPropertyDescriptor(Y.prototype,"signIn"),Y.prototype),Object(D.a)(Y.prototype,"signInByToken",[q.a],Object.getOwnPropertyDescriptor(Y.prototype,"signInByToken"),Y.prototype),Object(D.a)(Y.prototype,"updateTokens",[q.a],Object.getOwnPropertyDescriptor(Y.prototype,"updateTokens"),Y.prototype),Object(D.a)(Y.prototype,"logout",[q.a],Object.getOwnPropertyDescriptor(Y.prototype,"logout"),Y.prototype),Y),Z=n(225),ee=n.n(Z),te=n(522),ne=($=function(){function e(){Object(f.a)(this,e),this.io=void 0,this.io=ee.a.connect(A,{transports:["websocket"]}),this.io.on("connect",(function(){return console.info("Socket connected")})),this.io.on("disconnect",(function(){return console.info("Socket disconnected")}))}return Object(h.a)(e,[{key:"sendMessage",value:function(e){this.io.emit("message",e)}},{key:"onMessage",value:function(){return Object(te.a)(this.io,"message")}},{key:"disconnect",value:function(){this.io.disconnect()}}]),e}(),Object(D.a)($.prototype,"sendMessage",[q.a],Object.getOwnPropertyDescriptor($.prototype,"sendMessage"),$.prototype),Object(D.a)($.prototype,"onMessage",[q.a],Object.getOwnPropertyDescriptor($.prototype,"onMessage"),$.prototype),Object(D.a)($.prototype,"disconnect",[q.a],Object.getOwnPropertyDescriptor($.prototype,"disconnect"),$.prototype),$),re=function(){function e(t){Object(f.a)(this,e),this.storage=t,this.socket=void 0,this.users=void 0,this.auth=void 0,this.actions=void 0,this.headers={},this.actions=new W(A,this.headers),this.socket=new ne,this.users=new X(this.actions,t),this.auth=new Q(this.actions,t)}return Object(h.a)(e,[{key:"initAuthInterceptors",value:function(e){this.actions.initInterceptors(e)}}]),e}(),ae=n(129),oe=i.a.createContext(null),ce=function(e){var t=e.children,n=ae.LocalStorage.checkAvailability()?new ae.LocalStorage:new ae.MemoryStorage,r=new re(n);return i.a.createElement(oe.Provider,{value:r},t)};function se(){var e=Object(u.useContext)(oe);if(!e)throw new Error("Api React Context is not defined");return e}function ue(e,t){var n=Object(u.useState)(t),r=Object(T.a)(n,2),a=r[0],o=r[1];return[a,Object(u.useCallback)((function(t){e()&&o(t)}),[e])]}var ie=i.a.createContext(null),le=function(e){var t,n=e.children,r=se(),a=(t=r.storage,{getToken:function(){return t.get("token",null)},setToken:function(e,n){t.set("token",e),t.set("refreshToken",n)},resetToken:function(){t.del("token"),t.del("refreshToken")}}),o=a.getToken,c=a.setToken,s=a.resetToken,u=Object(N.a)(),l=ue(u,Boolean(o())),p=Object(T.a)(l,2),m=p[0],d=p[1],f=ue(u,""),h=Object(T.a)(f,2)[1],v=ue(u,null),b=Object(T.a)(v,2),O=b[0],g=b[1],y=function(){var e=Object(C.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o()){e.next=20;break}return e.prev=1,d(!0),e.next=5,r.auth.updateTokens();case 5:return t=e.sent,c(t.accessToken,t.refreshToken),e.next=9,r.auth.signInByToken();case 9:n=e.sent,g(n.data),h(""),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),h(e.t0.message);case 17:return e.prev=17,d(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(F.a)(Object(C.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.initAuthInterceptors({refreshTokenInterceptor:y}),O||!o()){e.next=18;break}return e.prev=2,d(!0),e.next=6,r.auth.signInByToken();case 6:t=e.sent,g(t.data),c(t.tokens.accessToken,t.tokens.refreshToken),h(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),h(e.t0.message);case 15:return e.prev=15,d(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})))),i.a.createElement(ie.Provider,{value:{user:O,setAuth:function(e,t,n){g(e),c(t,n)},resetAuth:function(){g(null),s()},isLoading:m}},n)},pe=function(e){var t=e.component,n=e.location,r=Object(y.a)(e,["component","location"]),a=Object(u.useContext)(ie),o=void 0!==t?t:function(){return null};return i.a.createElement(d.b,Object.assign({key:null===n||void 0===n?void 0:n.pathname},r,{render:function(){return i.a.createElement(i.a.Fragment,null,(null===a||void 0===a?void 0:a.user)?i.a.createElement(o,null):i.a.createElement(d.a,{to:S.authRoutes.AUTH_ERROR}))}}))},me=n(524),de=n(521),fe=n(526),he=me.a.Text,ve=function(e){var t=e.error,n=e.password,r=Object(y.a)(e,["error","password"]);return i.a.createElement(i.a.Fragment,null,n?i.a.createElement(fe.a.Password,r):i.a.createElement(fe.a,r),t&&i.a.createElement(he,{type:"danger"},t))},be=n(42);var Oe=n(238),ge=n.n(Oe),ye=n(525),je=function(e){var t=e.title,n=e.visible,r=e.children,a=e.onOk,o=e.onCancel;return i.a.createElement(ye.a,{title:t,visible:n,onOk:a,onCancel:o},r)},Ee=function(e){var t=e.onDelete,n=e.onCancel,r=e.isShowModal;return i.a.createElement(je,{title:"Delete user",visible:r,onOk:t,onCancel:n},"Are you sure you want to delete this user?")},ke=me.a.Text,we=function(){var e=Object(d.g)(),t=Object(N.a)(),n=function(){var e=se(),t=Object(N.a)(),n=ue(t,""),r=Object(T.a)(n,2),a=r[0],o=r[1],c=ue(t,[]),s=Object(T.a)(c,2),i=s[0],l=s[1],p=ue(t,!1),m=Object(T.a)(p,2),d=m[0],f=m[1],h=Object(u.useCallback)(Object(C.a)(R.a.mark((function t(){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,e.users.getUsers();case 4:n=t.sent,l(n.map((function(e,t){return Object(M.a)({},e,{key:t})}))),o(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o(t.t0.message);case 12:return t.prev=12,f(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])}))),[e.users,o,f,l]);return Object(u.useEffect)((function(){h()}),[h]),{users:i,isLoading:d,fetchUsersError:a,fetchUsers:h}}(),r=n.users,a=n.isLoading,o=n.fetchUsersError,c=n.fetchUsers,s=function(){var e=se(),t=Object(N.a)(),n=ue(t,""),r=Object(T.a)(n,2),a=r[0],o=r[1],c=ue(t,!1),s=Object(T.a)(c,2),i=s[0],l=s[1];return{deleteUser:Object(u.useCallback)(function(){var t=Object(C.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,e.users.deleteUser(n);case 4:o(""),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o(t.t0.message);case 10:return t.prev=10,l(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}(),[e.users,o,l]),isDeleting:i,deleteUserError:a}}(),l=s.deleteUser,p=s.isDeleting,m=s.deleteUserError,f=ue(t,!1),h=Object(T.a)(f,2),v=h[0],b=h[1],O=ue(t,""),g=Object(T.a)(O,2),y=g[0],j=g[1],E=o||m,k=function(){b(!1)},w=function(e){return Object(C.a)(R.a.mark((function t(){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(e),b(!0);case 2:case"end":return t.stop()}}),t)})))},_=[{title:"ID",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Surname",dataIndex:"surname",key:"surname"},{title:"Email",dataIndex:"email",key:"email"},{title:"Actions",dataIndex:"",key:"x",render:function(t,n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(be.a,{type:"link",onClick:(r=n.id,function(){e.push("".concat(S.profileRoutes.PROFILE,"/").concat(r))})},"Edit"),i.a.createElement(be.a,{type:"link",onClick:w(n.id)},"Delete"));var r}}];return i.a.createElement("div",{className:ge.a.UsersWrapper},i.a.createElement(de.a,{dataSource:r,columns:_,loading:a||p,bordered:!0}),E&&i.a.createElement(ke,{type:"danger"},E),i.a.createElement(Ee,{onDelete:function(){l(y).then((function(){return c()})),k()},onCancel:k,isShowModal:v}))},_e=n(18),xe=n(16),Ie=n(1),Se=n.n(Ie),Ue=n(49);var Re=function(e,t){var n=function(n){return i.a.createElement(Ue.a,Object.assign({type:t},n,{component:e}))};return n.displayName="FieldWithComponent(".concat(e.displayName||e.name||"Component",")"),n}((function(e){var t=e.input,n=e.meta,r=Object(y.a)(e,["input","meta"]),a=n.touched&&r.error||n.touched&&n.error?n.error:void 0;return i.a.createElement(ve,Object.assign({},t,{error:a},r))})),Ce=n(46),Te=n.n(Ce),Ne=n(251),Fe=n.n(Ne),Ae=n(130),Me=n.n(Ae),Le=function(e){var t,n=e.message,r=Object(u.useContext)(ie),a=Object(d.g)();return i.a.createElement("div",{className:Se()(Me.a.Wrapper,Object(_e.a)({},Me.a.OwnMessage,Boolean(n.sender.email===(null===r||void 0===r||null===(t=r.user)||void 0===t?void 0:t.email))))},i.a.createElement("span",{className:Me.a.SenderName,onClick:function(){a.push("".concat(S.profileRoutes.PROFILE,"/").concat(n.sender.id))}},n.sender.name),n.content)},Pe=function(e){var t=e.isHidden,n=se(),r=Object(u.useContext)(ie),a=Object(N.a)(),o=Object(u.useState)(t||!1),c=Object(T.a)(o,2),s=c[0],l=c[1],p=ue(a,[]),m=Object(T.a)(p,2),d=m[0],f=m[1];Object(u.useEffect)((function(){n.socket.onMessage().subscribe((function(e){f((function(t){return[e].concat(Object(xe.a)(t))}))}))}),[n.socket,f]);return i.a.createElement("div",{className:Te.a.Window},i.a.createElement("div",{className:Te.a.Header,onClick:function(){l((function(e){return!e}))}},i.a.createElement("img",{src:Fe.a,className:Se()(Te.a.Arrow,Object(_e.a)({},Te.a.RotatedArrow,s)),alt:"arrow"})),i.a.createElement(Ue.b,{onSubmit:function(e){(null===r||void 0===r?void 0:r.user)&&n.socket.sendMessage({content:e.message,sender:r.user})},render:function(e){var t,n=e.form,a=e.handleSubmit;return i.a.createElement("form",{onSubmit:function(e){a(e),n.reset()},autoComplete:"off"},i.a.createElement("div",{className:Se()(Te.a.Content,(t={},Object(_e.a)(t,Te.a.SlideUp,s),Object(_e.a)(t,Te.a.SlideDown,!s),t))},(null===r||void 0===r?void 0:r.user)&&i.a.createElement("div",{className:Se()(Te.a.InputWrapper)},i.a.createElement(Re,{name:"message",placeholder:"Enter your message"}),i.a.createElement(be.a,{type:"primary",htmlType:"submit",className:Te.a.SendButton},"Send")),i.a.createElement("div",{className:Te.a.Messages},d.map((function(e,t){return i.a.createElement(Le,{key:"".concat(e.sender.email,"_").concat(t),message:e})})))))},subscription:{}}))},We=n(131),De=n.n(We),qe=n(80),Be=n(132),He=n.n(Be),Ge=[{route:S.mainRoutes.MAIN,title:"Main"},{route:S.userRoutes.USERS,title:"Users"}],Je=function(){var e=Object(u.useContext)(ie),t=Object(d.h)(),n=Object(u.useState)(t.pathname),r=Object(T.a)(n,2),a=r[0],o=r[1];return i.a.createElement("header",null,i.a.createElement(qe.a,{onClick:function(e){o(e.key)},selectedKeys:[a],mode:"horizontal"},Ge.map((function(e){var t=e.route,n=e.title;return i.a.createElement(qe.a.Item,{key:t},i.a.createElement(m.b,{to:t,key:t},n))})),(null===e||void 0===e?void 0:e.user)?i.a.createElement(qe.a.SubMenu,{title:e.user.email,key:S.profileRoutes.PROFILE,className:He.a.Button},i.a.createElement(qe.a.Item,null,i.a.createElement(m.b,{to:"".concat(S.profileRoutes.PROFILE,"/").concat(e.user.id)},"Profile")),i.a.createElement(qe.a.Item,null,i.a.createElement(m.b,{to:S.authRoutes.LOGOUT},"Logout"))):i.a.createElement(qe.a.Item,{key:S.authRoutes.SIGN_IN,className:He.a.Button},i.a.createElement(m.b,{to:S.authRoutes.SIGN_IN},"Sign In")),!(null===e||void 0===e?void 0:e.user)&&i.a.createElement(qe.a.Item,{key:S.authRoutes.SIGN_UP,className:He.a.Button},i.a.createElement(m.b,{to:S.authRoutes.SIGN_UP},"Sign Up"))))},ze=function(e){var t=e.withFooter,n=e.children;return i.a.createElement("div",{className:De.a.Wrapper},i.a.createElement(Je,null),i.a.createElement("main",{className:De.a.Content},n),t&&i.a.createElement("footer",{className:De.a.Footer},"clicktronix@hotmail.com"))},Ke=function(){return i.a.createElement(ze,{withFooter:!0},i.a.createElement(we,null),i.a.createElement(Pe,{isHidden:!0}))},Ye=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(pe,{path:E,component:Ke,exact:!0})]}}]),t}(g),Xe=n(252),Ve=n.n(Xe),$e=function(){return i.a.createElement(ze,{withFooter:!0},i.a.createElement("div",{className:Ve.a.Wrapper},i.a.createElement("h1",null,"Main page"),i.a.createElement(Pe,null)))},Qe=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(d.b,{path:j,component:$e,exact:!0})]}}]),t}(g),Ze=n(523);function et(e){return function(t){return t?void 0:e}}function tt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}var nt=n(253),rt=n.n(nt);var at=me.a.Text,ot=function(){var e=function(){var e=se(),t=Object(d.g)(),n=Object(N.a)(),r=Object(u.useContext)(ie),a=ue(n,!1),o=Object(T.a)(a,2),c=o[0],s=o[1],i=ue(n,""),l=Object(T.a)(i,2),p=l[0],m=l[1];return{signIn:function(){var n=Object(C.a)(R.a.mark((function n(a){var o,c,u;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,e.auth.signIn(a);case 4:o=n.sent,c=o.data,u=o.tokens,null===r||void 0===r||r.setAuth(c,u.accessToken,u.refreshToken),t.push(S.mainRoutes.MAIN),m(""),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),m(n.t0.message);case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e){return n.apply(this,arguments)}}(),error:p,isLoading:c}}(),t=e.signIn,n=e.error,r=e.isLoading;return i.a.createElement(Ue.b,{onSubmit:function(e){return t(e)},render:function(e){var t=e.handleSubmit;return i.a.createElement("div",{className:rt.a.SignInForm},i.a.createElement("h1",null,"Sign In"),i.a.createElement(Ze.a,{onFinish:t},i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"email",placeholder:"Enter your email",validate:tt(et("Field required"))})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"password",placeholder:"Enter your password",validate:tt(et("Field required")),password:!0})),i.a.createElement(Ze.a.Item,null,i.a.createElement(be.a,{type:"primary",htmlType:"submit",loading:r},"Sign In")),n&&i.a.createElement(at,{type:"danger"},n)))},subscription:{}})},ct=function(){return i.a.createElement(ze,{withFooter:!0},i.a.createElement(ot,null))},st=n(168),ut=n.n(st);var it=me.a.Text,lt=function(){var e=function(){var e=se(),t=Object(N.a)(),n=ue(t,!1),r=Object(T.a)(n,2),a=r[0],o=r[1],c=ue(t,""),s=Object(T.a)(c,2),u=s[0],i=s[1],l=ue(t,""),p=Object(T.a)(l,2),m=p[0],d=p[1];return{signUp:function(){var t=Object(C.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(!0),t.next=4,e.auth.signUp(n);case 4:d("User successfully registered."),i(""),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),d(""),i(t.t0.message);case 12:return t.prev=12,o(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(e){return t.apply(this,arguments)}}(),isLoading:a,success:m,error:u}}(),t=e.signUp,n=e.isLoading,r=e.success,a=e.error;return i.a.createElement(Ue.b,{onSubmit:function(e){return t(e)},render:function(e){var t=e.handleSubmit;return i.a.createElement("div",{className:ut.a.SignUpForm},i.a.createElement("h1",null,"Sign Up"),i.a.createElement(Ze.a,{onFinish:t,className:ut.a.SignInForm},i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"name",placeholder:"Enter your name",validate:tt(et("Field required"))})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"surname",placeholder:"Enter your surname",validate:tt(et("Field required"))})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"email",placeholder:"Enter your email",validate:tt(et("Field required"))})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"password",placeholder:"Enter your password",validate:tt(et("Field required")),password:!0})),i.a.createElement(Ze.a.Item,null,i.a.createElement(be.a,{type:"primary",htmlType:"submit",loading:n},"Sign Up")),a&&i.a.createElement(it,{type:"danger"},a),r&&i.a.createElement(it,{type:"secondary"},r)))},subscription:{}})},pt=function(){return i.a.createElement(ze,{withFooter:!0},i.a.createElement(lt,null))},mt=n(255),dt=n.n(mt),ft=function(){return i.a.createElement(ze,{withFooter:!0},i.a.createElement("div",{className:dt.a.Wrapper},"Sorry, but you need to"," ",i.a.createElement(m.b,{to:S.authRoutes.SIGN_IN},"sign in")," ","to view this page."))},ht=n(249),vt=n(256),bt=n.n(vt),Ot=function(){var e=Object(u.useContext)(oe),t=Object(u.useContext)(ie),n=Object(d.g)(),r=Object(N.a)(),a=ue(r,!1),o=Object(T.a)(a,2),c=o[0],s=o[1],l=ue(r,""),p=Object(T.a)(l,2),m=p[0],f=p[1],h=Object(u.useCallback)(Object(C.a)(R.a.mark((function r(){return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s(!0),r.next=4,null===e||void 0===e?void 0:e.auth.logout();case 4:n.push(S.mainRoutes.MAIN),null===t||void 0===t||t.resetAuth(),f(""),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),f(r.t0.message);case 12:return r.prev=12,s(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])}))),[e,t,n,f,s]);return Object(u.useEffect)((function(){h()}),[h]),i.a.createElement(ze,{withFooter:!0},i.a.createElement("div",{className:bt.a.Wrapper},c&&i.a.createElement(ht.a,{size:"large"}),m&&i.a.createElement(me.a.Text,{type:"danger"},m)))},gt=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(d.b,{exact:!0,key:w,path:w,component:ct}),u.createElement(d.b,{exact:!0,key:k,path:k,component:pt}),u.createElement(d.b,{exact:!0,key:_,path:_,component:ft}),u.createElement(d.b,{exact:!0,key:x,path:x,component:Ot})]}}]),t}(g),yt=n(257),jt=n.n(yt);var Et=me.a.Text,kt=function(){var e,t=Object(u.useContext)(ie),n=Object(d.i)().userId,r=function(e,t){var n=se(),r=Object(N.a)(),a=ue(r,""),o=Object(T.a)(a,2),c=o[0],s=o[1],i=ue(r,t),l=Object(T.a)(i,2),p=l[0],m=l[1],d=ue(r,!1),f=Object(T.a)(d,2),h=f[0],v=f[1],b=Object(u.useCallback)(Object(C.a)(R.a.mark((function t(){var r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=16;break}return t.prev=1,v(!0),t.next=5,n.users.getUser(e);case 5:r=t.sent,m((function(e){return Object(M.a)({},e,{},r)})),s(""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s(t.t0.message);case 13:return t.prev=13,v(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])}))),[n.users,s,v,m,e]);return Object(u.useEffect)((function(){b()}),[b]),{user:p,isLoading:h,fetchUserError:c}}(n||"",{name:"",surname:"",email:"",password:"",newPassword:""}),a=r.user,o=r.fetchUserError,c=r.isLoading,s=function(e){var t=se(),n=Object(N.a)(),r=ue(n,""),a=Object(T.a)(r,2),o=a[0],c=a[1],s=ue(n,!1),u=Object(T.a)(s,2),i=u[0],l=u[1];return{updateProfile:function(){var n=Object(C.a)(R.a.mark((function n(r){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,l(!0),n.t0=e,!n.t0){n.next=6;break}return n.next=6,t.users.updateUser(e,Object(M.a)({},r,{id:e}));case 6:c(""),n.next=12;break;case 9:n.prev=9,n.t1=n.catch(0),c(n.t1.message);case 12:return n.prev=12,l(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}(),isUpdating:i,updateError:o}}(n||""),l=s.updateProfile,p=s.updateError,m=s.isUpdating,f=n===(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id),h=o||p;return i.a.createElement(Ue.b,{onSubmit:function(e){return l(e)},render:function(e){var t=e.handleSubmit;return i.a.createElement("div",{className:jt.a.ProfileForm},i.a.createElement("h1",null,"Edit"," ",null===a||void 0===a?void 0:a.name,"'s ","profile"),i.a.createElement(Ze.a,{onFinish:t},i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"name",placeholder:"Enter your name"})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"surname",placeholder:"Enter your surname"})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"email",placeholder:"Enter your email"})),f&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"password",placeholder:"Enter your current password",password:!0})),i.a.createElement(Ze.a.Item,null,i.a.createElement(Re,{name:"newPassword",placeholder:"Enter your new password",password:!0}))),i.a.createElement(Ze.a.Item,null,i.a.createElement(be.a,{type:"primary",htmlType:"submit",loading:c||m},"Save")),h&&i.a.createElement(Et,{type:"danger"},h)))},initialValues:a,subscription:{}})},wt=function(){return i.a.createElement(ze,{withFooter:!0},i.a.createElement(kt,null))},_t=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,null,[{key:"getRoutes",value:function(){return[u.createElement(pe,{path:"".concat(I,"/:userId"),component:wt,exact:!0})]}}]),t}(g),xt=n(164),It=n.n(xt),St=(n(499),function(e){var t=e.children;return i.a.createElement(It.a,null,i.a.createElement(ce,null,i.a.createElement(le,null,t)))}),Ut=n(258),Rt=n.n(Ut),Ct=function(e){var t=e.children,n=Object(u.useContext)(ie);return i.a.createElement(i.a.Fragment,null,(null===n||void 0===n?void 0:n.isLoading)?i.a.createElement(ze,{withFooter:!0},i.a.createElement("div",{className:Rt.a.Wrapper},i.a.createElement(ht.a,{size:"large"}))):t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(518);p.a.render(i.a.createElement((function(){return i.a.createElement(m.a,null,i.a.createElement(St,null,i.a.createElement(Ct,null,i.a.createElement(d.b,{path:"/"},i.a.createElement(d.d,null,Object.values(s).map((function(e){return e.getRoutes()})),i.a.createElement(d.a,{to:S.mainRoutes.MAIN}))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[263,1,2]]]);
//# sourceMappingURL=main.e5a15ebf.chunk.js.map