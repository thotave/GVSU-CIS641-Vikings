(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3/x0":function(e,t,n){"use strict";n.r(t),n.d(t,"AuthenticationModule",function(){return U});var r=n("ofXK"),o=n("tyNb"),i=n("3Pt+"),a=n("vkgz"),s=n("JIr8"),l=n("fXoL"),d=n("cp0P"),m=n("1jr2"),c=n("tk/3");let p=(()=>{class e{constructor(e,t){this.restRequest=e,this.http=t}AdminTaxilogin(e){let t=this.restRequest.post("Adminlogin",e),n=this.restRequest.post("Taxi_user_login",e);return Object(d.a)([t,n])}Adminlogout(e){return this.restRequest.post("Adminlogout",e)}resetpassword(e){return this.restRequest.post("Adminresetpassword",e)}forgetpassword(){return this.restRequest.get("adminforgetpassword")}Taxilogin(e){return this.restRequest.post("Taxi_user_login",e)}Adminlogin(e){return this.restRequest.post("Adminlogin",e)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275inject"](m.a),l["\u0275\u0275inject"](c.b))},e.\u0275prov=l["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=n("NCLd");function u(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Please enter email address "),l["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",26),l["\u0275\u0275template"](1,u,2,0,"div",27),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.email.errors.required)}}function h(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Please enter password "),l["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Password must be at 8 to 16 characters in length "),l["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," The password should have minimum 6 characters with at least 1 capital letter, 1 lower case letter, 1 special character and 1 number "),l["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",28),l["\u0275\u0275template"](1,h,2,0,"div",27),l["\u0275\u0275template"](2,v,2,0,"div",27),l["\u0275\u0275template"](3,b,2,0,"div",27),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.minlength),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.pattern)}}function w(e,t){1&e&&l["\u0275\u0275element"](0,"img",29)}const y=function(e){return{"is-invalid":e}};let I=(()=>{class e{constructor(e,t,n,r,o,i,a){this.router=e,this.activatedRoute=t,this.formBuilder=n,this.loginservice=r,this.restRequest=o,this.http=i,this.commonService=a,this.submitted=!1}ngOnInit(){this.loader=!1,this.show_password=!1,this.signinForm=this.formBuilder.group({email:["",i.w.required],password:["",[i.w.required]]}),localStorage.removeItem("userInfo"),localStorage.removeItem("userId"),localStorage.removeItem("currentSession")}get f(){return this.signinForm.controls}forgetpassword(){this.router.navigateByUrl("auth/resetpassword")}Back(){this.router.navigateByUrl("auth/login")}authenticate1(){this.signinForm.invalid||(this.submitted=!0,this.loader=!0,this.obj={email:this.signinForm.controls.email.value,password:this.signinForm.controls.password.value},this.loginservice.Adminlogin(this.obj).pipe(Object(a.a)(e=>{e&&(localStorage.setItem("type","0"),localStorage.setItem("currentSession",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data)),localStorage.setItem("userId",e.data._id),this.router.navigate(["/admin/hotel-list"]),this.commonService.toast(e.message,"Success"))})).pipe(Object(s.a)(e=>(this.loginservice.Taxilogin(this.obj).subscribe(e=>{localStorage.setItem("type","1"),localStorage.setItem("currentSession",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data)),localStorage.setItem("userId",e.data._id),this.router.navigate(["/taxi/hotel-list"]),this.commonService.toast(e.message,"Success")},e=>{this.loader=!1,this.commonService.toast(e.error.message,"Error")}),e))).pipe(Object(s.a)(e=>(this.loader=!1,this.commonService.toast(e.error.message,"Error"),e))).subscribe())}togglePasswordView(){this.show_password=!0!==this.show_password}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.b),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](i.c),l["\u0275\u0275directiveInject"](p),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](c.b),l["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-forget-password"]],decls:32,vars:10,consts:[[1,"login-block"],[1,"header","py-6","py-lg-5","pt-lg-9"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-xl-5","col-lg-6","col-md-8","px-5"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","rounded","shadow","my-card","py-lg-5"],[1,"text-center","text-muted","mb-5"],["role","form","method","POST",3,"formGroup","ngSubmit"],[1,"form-group","mb-3","mt-5"],["autocomplete","false","placeholder","Mobile Number","formControlName","email","type","text",1,"form-control","my-text",3,"ngClass"],["class","invalid-feedback order-last",4,"ngIf"],[1,"form-group"],[1,"input-group","input-group-alternative"],["type","text","placeholder","Password","formControlName","password",1,"form-control","my-text",3,"ngClass"],[1,"input-group-append"],[1,"input-group-text","my-text",2,"color","#96e1ff",3,"click"],["class","invalid-feedback",4,"ngIf"],[1,"text-center"],["style","width: 50px; height: 50px","src","../../../../assets/img/ripple.gif",4,"ngIf"],[1,"row","mt-3"],["type","submit",1,"btn","btn-primary","btn-login","my-4",2,"margin-bottom","10px !important",3,"click"],["type","submit",1,"btn","btn-outline-dark","btn-login",3,"click"],[1,"invalid-feedback","order-last"],[4,"ngIf"],[1,"invalid-feedback"],["src","../../../../assets/img/ripple.gif",2,"width","50px","height","50px"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275element"](5,"div",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",6),l["\u0275\u0275elementStart"](7,"div",4),l["\u0275\u0275elementStart"](8,"div",7),l["\u0275\u0275elementStart"](9,"div",8),l["\u0275\u0275elementStart"](10,"div",9),l["\u0275\u0275elementStart"](11,"div",10),l["\u0275\u0275elementStart"](12,"h2"),l["\u0275\u0275text"](13,"Forget Password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"form",11),l["\u0275\u0275listener"]("ngSubmit",function(){return t.authenticate1()}),l["\u0275\u0275elementStart"](15,"div",12),l["\u0275\u0275element"](16,"input",13),l["\u0275\u0275template"](17,f,2,1,"div",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"div",15),l["\u0275\u0275elementStart"](19,"div",16),l["\u0275\u0275element"](20,"input",17),l["\u0275\u0275elementStart"](21,"div",18),l["\u0275\u0275elementStart"](22,"span",19),l["\u0275\u0275listener"]("click",function(){return t.togglePasswordView()}),l["\u0275\u0275text"](23," Send "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](24,S,4,3,"div",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"div",21),l["\u0275\u0275template"](26,w,1,0,"img",22),l["\u0275\u0275element"](27,"div",23),l["\u0275\u0275elementStart"](28,"button",24),l["\u0275\u0275listener"]("click",function(){return t.forgetpassword()}),l["\u0275\u0275text"](29," Next "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](30,"button",25),l["\u0275\u0275listener"]("click",function(){return t.Back()}),l["\u0275\u0275text"](31," Back "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("formGroup",t.signinForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngClass",l["\u0275\u0275pureFunction1"](6,y,t.submitted&&t.f.email.errors)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.submitted&&t.f.email.errors),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngClass",l["\u0275\u0275pureFunction1"](8,y,t.submitted&&t.f.password.errors)),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",t.submitted&&t.f.password.errors),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.loader))},directives:[i.x,i.o,i.h,i.b,i.n,i.f,r.j,r.l],styles:[".login-block[_ngcontent-%COMP%]{background-color:initial}.my-card[_ngcontent-%COMP%]{background-color:#fff}.logo[_ngcontent-%COMP%]{width:100px;height:100px}.my-text[_ngcontent-%COMP%]{background-color:#fff!important;border-radius:0;transition:none}.my-text[_ngcontent-%COMP%], .my-text[_ngcontent-%COMP%]:focus{border-top:none;border-left:none;border-right:none}.my-text[_ngcontent-%COMP%]:focus{box-shadow:none}.btn-login[_ngcontent-%COMP%]{width:100%}"]}),e})();function x(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Please enter email address "),l["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",31),l["\u0275\u0275template"](1,x,2,0,"div",32),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.email.errors.required)}}function k(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Please enter password "),l["\u0275\u0275elementEnd"]())}function C(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Password must be at 8 to 16 characters in length "),l["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," The password should have minimum 6 characters with at least 1 capital letter, 1 lower case letter, 1 special character and 1 number "),l["\u0275\u0275elementEnd"]())}function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",33),l["\u0275\u0275template"](1,k,2,0,"div",32),l["\u0275\u0275template"](2,C,2,0,"div",32),l["\u0275\u0275template"](3,j,2,0,"div",32),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.minlength),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.pattern)}}function O(e,t){1&e&&l["\u0275\u0275element"](0,"img",34)}const _=function(e){return{"is-invalid":e}};function M(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Please enter email address "),l["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",24),l["\u0275\u0275template"](1,M,2,0,"div",25),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.email.errors.required)}}function q(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Please enter password "),l["\u0275\u0275elementEnd"]())}function N(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," Password must be at 8 to 16 characters in length "),l["\u0275\u0275elementEnd"]())}function B(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275text"](1," The password should have minimum 6 characters with at least 1 capital letter, 1 lower case letter, 1 special character and 1 number "),l["\u0275\u0275elementEnd"]())}function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",26),l["\u0275\u0275template"](1,q,2,0,"div",25),l["\u0275\u0275template"](2,N,2,0,"div",25),l["\u0275\u0275template"](3,B,2,0,"div",25),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.minlength),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",e.f.password.errors.pattern)}}function T(e,t){1&e&&l["\u0275\u0275element"](0,"img",27)}const A=function(e){return{"is-invalid":e}},J=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:(()=>{class e{constructor(e,t,n,r,o,i,a){this.router=e,this.activatedRoute=t,this.formBuilder=n,this.loginservice=r,this.restRequest=o,this.http=i,this.commonService=a,this.submitted=!1,this.Isremember=!1}ngOnInit(){this.loader=!1,this.show_password=!1,this.signinForm=this.formBuilder.group({email:["",i.w.required],password:["",[i.w.required]]}),localStorage.removeItem("userInfo"),localStorage.removeItem("userId"),localStorage.removeItem("currentSession"),"1"==localStorage.getItem("Isremember")&&(this.signinForm.patchValue({email:localStorage.getItem("email"),password:localStorage.getItem("password")}),this.Isremember=!0)}get f(){return this.signinForm.controls}forgetpassword(){this.router.navigateByUrl("auth/forgetpassword")}authenticate1(){this.signinForm.invalid||(this.submitted=!0,this.loader=!0,this.obj={email:this.signinForm.controls.email.value,password:this.signinForm.controls.password.value},this.loginservice.Adminlogin(this.obj).pipe(Object(a.a)(e=>{e&&(this.Isremember?(localStorage.setItem("email",this.signinForm.controls.email.value),localStorage.setItem("password",this.signinForm.controls.password.value),localStorage.setItem("Isremember","1")):(localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.removeItem("Isremember")),localStorage.setItem("type","0"),localStorage.setItem("currentSession",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data)),localStorage.setItem("userId",e.data._id),this.router.navigate(["/admin/dashboard"]),this.commonService.toast(e.message,"Success"))})).pipe(Object(s.a)(e=>(this.loginservice.Taxilogin(this.obj).subscribe(e=>{localStorage.setItem("type","1"),localStorage.setItem("currentSession",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data)),localStorage.setItem("userId",e.data._id),this.router.navigate(["/taxi/dashboard"]),this.commonService.toast(e.message,"Success")},e=>{this.loader=!1,this.commonService.toast(e.error.message,"Error")}),e))).pipe(Object(s.a)(e=>(this.loader=!1,this.commonService.toast(e.error.message,"Error"),e))).subscribe())}rememberMe(e){this.Isremember=!!e.checked}togglePasswordView(){this.show_password=!0!==this.show_password}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.b),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](i.c),l["\u0275\u0275directiveInject"](p),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](c.b),l["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],decls:37,vars:13,consts:[[1,"login-block"],[1,"container","mt-5","pb-5"],[1,"text-center"],[1,""],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","rounded","shadow","my-card","py-lg-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7","my-padding"],[1,"text-center","text-muted","mb-4"],["src","../../../../assets/img/Logohd.png","alt","Italian Trulli",1,"logo"],["role","form","method","POST",3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["autocomplete","false","placeholder","Email address","formControlName","email","type","text",1,"form-control","my-text",3,"ngClass"],["class","invalid-feedback order-last",4,"ngIf"],[1,"form-group"],[1,"input-group","input-group-alternative"],["placeholder","Password","formControlName","password",1,"form-control","my-text",3,"type","ngClass"],[1,"input-group-append"],[1,"input-group-text","my-text",2,"color","#96e1ff",3,"click"],[3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["style","width: 50px; height: 50px","src","../../../../assets/img/ripple.gif",4,"ngIf"],[1,"row","mt-3"],[1,"col-6","text-left"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault","name","rememberme",1,"form-check-input","my-checkbox",3,"checked","click"],["rememberme",""],["for","flexCheckDefault",1,"form-check-label","checkmark"],[1,"col-6","text-right"],["href","javascript:",1,"text-light",3,"click"],["type","submit",1,"btn","btn-primary","btn-login","my-4"],[1,"invalid-feedback","order-last"],[4,"ngIf"],[1,"invalid-feedback"],["src","../../../../assets/img/ripple.gif",2,"width","50px","height","50px"]],template:function(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275elementStart"](5,"div",5),l["\u0275\u0275elementStart"](6,"div",6),l["\u0275\u0275elementStart"](7,"div",7),l["\u0275\u0275elementStart"](8,"div",8),l["\u0275\u0275element"](9,"img",9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"form",10),l["\u0275\u0275listener"]("ngSubmit",function(){return t.authenticate1()}),l["\u0275\u0275elementStart"](11,"div",11),l["\u0275\u0275element"](12,"input",12),l["\u0275\u0275template"](13,E,2,1,"div",13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",14),l["\u0275\u0275elementStart"](15,"div",15),l["\u0275\u0275element"](16,"input",16),l["\u0275\u0275elementStart"](17,"div",17),l["\u0275\u0275elementStart"](18,"span",18),l["\u0275\u0275listener"]("click",function(){return t.togglePasswordView()}),l["\u0275\u0275element"](19,"i",19),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](20,P,4,3,"div",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"div",2),l["\u0275\u0275template"](22,O,1,0,"img",21),l["\u0275\u0275elementStart"](23,"div",22),l["\u0275\u0275elementStart"](24,"div",23),l["\u0275\u0275elementStart"](25,"div",24),l["\u0275\u0275elementStart"](26,"input",25,26),l["\u0275\u0275listener"]("click",function(){l["\u0275\u0275restoreView"](e);const n=l["\u0275\u0275reference"](27);return t.rememberMe(n)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"label",27),l["\u0275\u0275elementStart"](29,"small"),l["\u0275\u0275text"](30,"Remember me"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](31,"div",28),l["\u0275\u0275elementStart"](32,"a",29),l["\u0275\u0275listener"]("click",function(){return t.forgetpassword()}),l["\u0275\u0275elementStart"](33,"small"),l["\u0275\u0275text"](34,"Forgot password?"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](35,"button",30),l["\u0275\u0275text"](36," Sign in "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}2&e&&(l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("formGroup",t.signinForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngClass",l["\u0275\u0275pureFunction1"](9,_,t.submitted&&t.f.email.errors)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.submitted&&t.f.email.errors),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("type",t.show_password?"text":"password")("ngClass",l["\u0275\u0275pureFunction1"](11,_,t.submitted&&t.f.password.errors)),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngClass",t.show_password?"far fa-eye-slash":"far fa-eye"),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.submitted&&t.f.password.errors),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.loader),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("checked",t.Isremember))},directives:[i.x,i.o,i.h,i.b,i.n,i.f,r.j,r.l],styles:[".login-block[_ngcontent-%COMP%]{background-color:initial}.my-card[_ngcontent-%COMP%]{background-color:#fff}.logo[_ngcontent-%COMP%]{width:400px}.btn-login[_ngcontent-%COMP%]{width:100%}.my-text[_ngcontent-%COMP%]{background-color:#fff!important;border-radius:0;transition:none}.my-text[_ngcontent-%COMP%], .my-text[_ngcontent-%COMP%]:focus{border-top:none;border-left:none;border-right:none}.my-text[_ngcontent-%COMP%]:focus{box-shadow:none}i[_ngcontent-%COMP%]{color:#96e1ff;font-size:large}.blurent-orange[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(#e4a22f 50%,#d8762d)}.my-padding[_ngcontent-%COMP%]{padding-top:100px;padding-bottom:100px}.login-block[_ngcontent-%COMP%]{overflow-y:auto!important}"]}),e})()},{path:"forgetpassword",component:I},{path:"resetpassword",component:(()=>{class e{constructor(e,t,n,r,o,i,a){this.router=e,this.activatedRoute=t,this.formBuilder=n,this.loginservice=r,this.restRequest=o,this.http=i,this.commonService=a,this.submitted=!1}ngOnInit(){this.loader=!1,this.show_password=!1,this.signinForm=this.formBuilder.group({email:["",i.w.required],password:["",[i.w.required]]}),localStorage.removeItem("userInfo"),localStorage.removeItem("userId"),localStorage.removeItem("currentSession")}get f(){return this.signinForm.controls}forgetpassword(){this.router.navigateByUrl("auth/resetpassword")}Back(){this.router.navigateByUrl("auth/forgetpassword")}authenticate1(){this.signinForm.invalid||(this.submitted=!0,this.loader=!0,this.obj={email:this.signinForm.controls.email.value,password:this.signinForm.controls.password.value},this.loginservice.Adminlogin(this.obj).pipe(Object(a.a)(e=>{e&&(localStorage.setItem("type","0"),localStorage.setItem("currentSession",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data)),localStorage.setItem("userId",e.data._id),this.router.navigate(["/admin/hotel-list"]),this.commonService.toast(e.message,"Success"))})).pipe(Object(s.a)(e=>(this.loginservice.Taxilogin(this.obj).subscribe(e=>{localStorage.setItem("type","1"),localStorage.setItem("currentSession",e.data.token),localStorage.setItem("userInfo",JSON.stringify(e.data)),localStorage.setItem("userId",e.data._id),this.router.navigate(["/taxi/hotel-list"]),this.commonService.toast(e.message,"Success")},e=>{this.loader=!1,this.commonService.toast(e.error.message,"Error")}),e))).pipe(Object(s.a)(e=>(this.loader=!1,this.commonService.toast(e.error.message,"Error"),e))).subscribe())}togglePasswordView(){this.show_password=!0!==this.show_password}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.b),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](i.c),l["\u0275\u0275directiveInject"](p),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](c.b),l["\u0275\u0275directiveInject"](g.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-reset-password"]],decls:29,vars:10,consts:[[1,"login-block"],[1,"header","py-6","py-lg-5","pt-lg-9"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-xl-5","col-lg-6","col-md-8","px-5"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","rounded","shadow","my-card","py-lg-5"],[1,"text-center","text-muted","mb-5"],["role","form","method","POST",3,"formGroup","ngSubmit"],[1,"form-group","mb-3","mt-5"],["autocomplete","false","placeholder","Password","formControlName","email","type","password",1,"form-control","my-text",3,"ngClass"],["class","invalid-feedback order-last",4,"ngIf"],[1,"form-group"],[1,"input-group","input-group-alternative"],["type","password","placeholder","Confirm Password","formControlName","password",1,"form-control","my-text",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"text-center"],["style","width: 50px; height: 50px","src","../../../../assets/img/ripple.gif",4,"ngIf"],[1,"row","mt-3"],["type","submit",1,"btn","btn-primary","btn-login","my-4",2,"margin-bottom","10px !important",3,"click"],["type","submit",1,"btn","btn-outline-dark","btn-login",3,"click"],[1,"invalid-feedback","order-last"],[4,"ngIf"],[1,"invalid-feedback"],["src","../../../../assets/img/ripple.gif",2,"width","50px","height","50px"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275element"](5,"div",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",6),l["\u0275\u0275elementStart"](7,"div",4),l["\u0275\u0275elementStart"](8,"div",7),l["\u0275\u0275elementStart"](9,"div",8),l["\u0275\u0275elementStart"](10,"div",9),l["\u0275\u0275elementStart"](11,"div",10),l["\u0275\u0275elementStart"](12,"h2"),l["\u0275\u0275text"](13,"Reset Password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"form",11),l["\u0275\u0275listener"]("ngSubmit",function(){return t.authenticate1()}),l["\u0275\u0275elementStart"](15,"div",12),l["\u0275\u0275element"](16,"input",13),l["\u0275\u0275template"](17,F,2,1,"div",14),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"div",15),l["\u0275\u0275elementStart"](19,"div",16),l["\u0275\u0275element"](20,"input",17),l["\u0275\u0275template"](21,R,4,3,"div",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"div",19),l["\u0275\u0275template"](23,T,1,0,"img",20),l["\u0275\u0275element"](24,"div",21),l["\u0275\u0275elementStart"](25,"button",22),l["\u0275\u0275listener"]("click",function(){return t.forgetpassword()}),l["\u0275\u0275text"](26," Next "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](27,"button",23),l["\u0275\u0275listener"]("click",function(){return t.Back()}),l["\u0275\u0275text"](28," Back "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("formGroup",t.signinForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngClass",l["\u0275\u0275pureFunction1"](6,A,t.submitted&&t.f.email.errors)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.submitted&&t.f.email.errors),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngClass",l["\u0275\u0275pureFunction1"](8,A,t.submitted&&t.f.password.errors)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.submitted&&t.f.password.errors),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",t.loader))},directives:[i.x,i.o,i.h,i.b,i.n,i.f,r.j,r.l],styles:[".login-block[_ngcontent-%COMP%]{background-color:initial}.my-card[_ngcontent-%COMP%]{background-color:#fff}.logo[_ngcontent-%COMP%]{width:100px;height:100px}.my-text[_ngcontent-%COMP%]{background-color:#fff!important;border-radius:0;transition:none}.my-text[_ngcontent-%COMP%], .my-text[_ngcontent-%COMP%]:focus{border-top:none;border-left:none;border-right:none}.my-text[_ngcontent-%COMP%]:focus{box-shadow:none}.btn-login[_ngcontent-%COMP%]{width:100%}"]}),e})()}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[o.e.forChild(J)],o.e]}),e})();var G=n("Kmm4");let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({providers:[g.a,G.a],imports:[[r.b,V,i.i,i.t,G.b.forRoot()]]}),e})()}}]);