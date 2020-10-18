(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(8),s=t.n(l),o=(t(104),t(105),t(24)),i=t(12),c=t(27),u=t.n(c),d=function(){return n.a.createElement("nav",{className:u.a.nav},n.a.createElement(o.b,{exact:!0,activeClassName:u.a.linkIsActive,className:u.a.link,to:"/"},"Profile"),n.a.createElement(o.b,{activeClassName:u.a.linkIsActive,className:u.a.link,to:"/login"},"Login"),n.a.createElement(o.b,{activeClassName:u.a.linkIsActive,className:u.a.link,to:"/registration"},"Registration"),n.a.createElement(o.b,{activeClassName:u.a.linkIsActive,className:u.a.link,to:"/passwordChange"},"Change Password"))},m=t(59),p=t.n(m),E=t(26),g=function(){var e=Object(E.c)((function(e){return e.profile})),a=e.name;e.avatar;return n.a.createElement("div",{className:p.a.mainBlock},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:p.a.title},"Main page"),n.a.createElement("h3",null,a)))},b=t(77),v=t.n(b),w=t(53),f=t(62),h=t.n(f),O=t(80),S=t(23),P=t(81),y=t.n(P).a.create(Object(S.a)({baseURL:"https://neko-back.herokuapp.com/2.0/"},{withCredentials:!0})),_=function(e){return y.post("auth/login",e)},I=function(e){return y.post("auth/register",e)},N={isLoggedIn:!1,error:null,loaderStatus:"idle"},j=function(e){return{type:"SET-ERROR-REGISTRATION",error:e}},A=function(e){return{type:"SET-REQUEST-STATUS",loaderStatus:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-IS-LOGGED-IN":return Object(S.a)({},e,{isLoggedIn:!0});case"SET-ERROR-REGISTRATION":return Object(S.a)({},e,{error:a.error});case"SET-REQUEST-STATUS":return Object(S.a)({},e,{loaderStatus:a.loaderStatus});default:return e}},k=t(166),T=t(158),L=t(169),F=function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password?e.password.length<7?a.password="Password must be 8 characters or more":e.repeatPassword?e.repeatPassword!==e.password&&(a.password="Your passwords are not equal"):a.password="Please repeat you password":a.password="Enter you password",a},x=function(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.registration})),t=a.isLoggedIn,r=a.error,l=a.loaderStatus,s=Object(w.a)({initialValues:{email:"",password:"",repeatPassword:""},validate:F,onSubmit:function(a){var t,r=a.email,n=a.password;e((t={email:r,password:n},function(){var e=Object(O.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(A("loading")),e.prev=1,e.next=4,I(t);case 4:a({type:"SET-IS-LOGGED-IN"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a(j(e.t0.response.data.error));case 10:return e.prev=10,a(A("idle")),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(a){return e.apply(this,arguments)}}()))}}),o=null!==r;return t?n.a.createElement(i.a,{to:"/login"}):n.a.createElement(n.a.Fragment,null,"loading"===l&&n.a.createElement(T.a,null),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:v.a.title},"Registration"),n.a.createElement("form",{onSubmit:s.handleSubmit},n.a.createElement("div",null,n.a.createElement("input",Object.assign({name:"email",placeholder:"Email"},s.getFieldProps("email"))),s.errors.email&&s.touched.email?n.a.createElement("div",{style:{color:"red"}},s.errors.email):null),n.a.createElement("div",null,n.a.createElement("input",Object.assign({type:"password",name:"password",placeholder:"Password"},s.getFieldProps("password")))),n.a.createElement("div",null,n.a.createElement("input",Object.assign({placeholder:"Repeat Password",name:"repeatPassword"},s.getFieldProps("repeatPassword"))),s.errors.password&&s.touched.password?n.a.createElement("div",{style:{color:"red"}},s.errors.password):null),n.a.createElement("button",{type:"submit",disabled:"loading"===l},"Send")),n.a.createElement("div",null,n.a.createElement(L.a,{open:o,autoHideDuration:5e3,onClose:function(a,t){"clickaway"!==t&&e(j(null))}},n.a.createElement(k.a,{variant:"filled",severity:"error"},r)))))},C=t(85),D=t.n(C),G=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:D.a.title},"Change password"))},Z=t(165),q=function(e,a){var t=Object.assign({},a);return n.a.createElement(Z.a,Object.assign({type:e.type,id:"outlined-basic",label:e.label,variant:"outlined",placeholder:e.placeholder},t))},M=t(86),U=t.n(M),H=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:U.a.title},"Forgot Password"),n.a.createElement(q,{placeholder:"password",label:"password"}))},B=t(87),Q=t.n(B),J=t(170),V=t(171),$=t(167),K=t(164),Y={_id:"",email:"",name:"",avatar:"",isAdmin:!1,rememberMe:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-PROFILE-DATA":return Object(S.a)({},e,{},a.userData);default:return e}},W={isAuth:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"login/SET-IS-LOGGED-IN":return Object(S.a)({},e,{isAuth:a.value});default:return e}},ee=function(){var e=Object(E.b)(),a=Object(E.c)((function(e){return e.login.isAuth})),t=Object(w.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password?e.password.length<7&&(a.password="Password > 7 symbols"):a.password="Required",a},onSubmit:function(a){var t;e((t=a,function(e){_(t).then((function(a){e({type:"login/SET-IS-LOGGED-IN",value:!0}),e({type:"SET-PROFILE-DATA",userData:a.data})})).catch((function(e){e.response?e.response.data.error:e.message,console.log("Error",Object(S.a)({},e))}))}))}});return a?n.a.createElement(i.a,{to:"/"}):n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:Q.a.title},"Login"),n.a.createElement("form",{onSubmit:t.handleSubmit},n.a.createElement(J.a,null,n.a.createElement(Z.a,Object.assign({label:"Email",margin:"normal",variant:"outlined"},t.getFieldProps("email"))),t.errors.email?n.a.createElement("div",{style:{color:"red"}},t.errors.email):null,n.a.createElement("br",null),n.a.createElement(Z.a,Object.assign({type:"password",label:"Password",margin:"normal",variant:"outlined"},t.getFieldProps("password"))),t.errors.password?n.a.createElement("div",{style:{color:"red"}},t.errors.password):null,n.a.createElement("br",null),n.a.createElement(V.a,{label:"Remember me",control:n.a.createElement($.a,t.getFieldProps("rememberMe"))}),n.a.createElement("br",null),n.a.createElement(K.a,{type:"submit",variant:"outlined",color:"primary"},"Login"))),n.a.createElement(o.b,{to:"/forgotPassword"},"Forgot Password"))},ae=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a,null,n.a.createElement(d,null),n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/",render:function(){return n.a.createElement(g,null)}}),n.a.createElement(i.b,{path:"/login",render:function(){return n.a.createElement(ee,null)}}),n.a.createElement(i.b,{path:"/registration",render:function(){return n.a.createElement(x,null)}}),n.a.createElement(i.b,{path:"/passwordChange",render:function(){return n.a.createElement(G,null)}}),n.a.createElement(i.b,{path:"/forgotPassword",render:function(){return n.a.createElement(H,null)}}))))},te=t(40),re=t(88),ne={},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"changePassword":default:return e}},se=Object(te.c)({profile:z,login:X,registration:R,changePassword:le}),oe=Object(te.d)(se,Object(te.a)(re.a));window.store=oe,s.a.render(n.a.createElement(E.a,{store:oe},n.a.createElement(ae,null)),document.getElementById("root"))},27:function(e,a,t){e.exports={nav:"Header_nav__3Lhrs",link:"Header_link__3bFcN",linkIsActive:"Header_linkIsActive__1jpq9"}},59:function(e,a,t){e.exports={title:"MainBlock_title__3IOeA"}},77:function(e,a,t){e.exports={title:"Registration_title__3Pq9E"}},85:function(e,a,t){e.exports={title:"PasswordChange_title__3ld7Z"}},86:function(e,a,t){e.exports={title:"ForgotPassword_title___De8Q"}},87:function(e,a,t){e.exports={title:"Login_title__38KSR"}},99:function(e,a,t){e.exports=t(129)}},[[99,1,2]]]);
//# sourceMappingURL=main.0ede003d.chunk.js.map