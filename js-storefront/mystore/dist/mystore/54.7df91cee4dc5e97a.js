"use strict";(self.webpackChunkmystore_6_3=self.webpackChunkmystore_6_3||[]).push([[54],{6054:(K,m,i)=>{i.r(m),i.d(m,{UserAccountModule:()=>_});var e=i(4650),c=i(4006),r=i(8849),u=i(9144),M=i(591),x=i(5254),C=i(1086),v=i(2994),F=i(7168),h=i(7545),l=i(6895),d=i(5391),g=i(7212);function Z(o,t){1&o&&e._UZ(0,"cx-spinner",8)}const T=function(){return{cxRoute:"forgotPassword"}},I=function(){return{cxRoute:"register"}};function b(o,t){1&o&&(e.ynx(0),e.TgZ(1,"a",3),e.ALo(2,"cxUrl"),e._uU(3),e.ALo(4,"cxTranslate"),e.qZA(),e.BQk()),2&o&&(e.xp6(1),e.Q6J("routerLink",e.lcZ(2,2,e.DdM(6,I))),e.xp6(2),e.Oqu(e.lcZ(4,4,"loginForm.register")))}const D=function(){return{cxRoute:"checkoutLogin"}};function R(o,t){1&o&&(e.ynx(0),e.TgZ(1,"a",4),e.ALo(2,"cxUrl"),e._uU(3),e.ALo(4,"cxTranslate"),e.qZA(),e.BQk()),2&o&&(e.xp6(1),e.Q6J("routerLink",e.lcZ(2,2,e.DdM(6,D))),e.xp6(2),e.Oqu(e.lcZ(4,4,"loginForm.guestCheckout")))}const S=function(o){return{name:o}};function O(o,t){if(1&o&&(e.ynx(0),e.TgZ(1,"div",2),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA(),e._UZ(4,"cx-page-slot",3),e.BQk()),2&o){const n=t.ngIf;e.xp6(2),e.hij(" ",e.xi3(3,1,"miniLogin.userGreeting",e.VKq(4,S,n.name))," ")}}const w=function(){return{cxRoute:"login"}};function J(o,t){1&o&&(e.TgZ(0,"a",4),e.ALo(1,"cxUrl"),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA()),2&o&&(e.Q6J("routerLink",e.lcZ(1,2,e.DdM(6,w))),e.xp6(2),e.Oqu(e.lcZ(3,4,"miniLogin.signInRegister")))}let p=(()=>{class o{constructor(n,s,a){this.auth=n,this.globalMessage=s,this.winRef=a,this.busy$=new M.X(!1),this.isUpdating$=this.busy$.pipe((0,v.b)(f=>{const U=this.winRef.nativeWindow?.history?.state?.newUid;U&&this.form.patchValue({userId:U}),!0===f?this.form.disable():this.form.enable()})),this.form=new c.nJ({userId:new c.p4("",[c.kI.required,u.kal.emailValidator]),password:new c.p4("",c.kI.required)})}login(){this.form.valid?(this.busy$.next(!0),(0,x.D)(this.auth.loginWithCredentials(this.form.value.userId.toLowerCase(),this.form.value.password)).pipe((0,F.M)(this.auth.isUserLoggedIn()),(0,v.b)(([n,s])=>this.onSuccess(s))).subscribe()):this.form.markAllAsTouched()}onSuccess(n){n&&(this.globalMessage.remove(r.xUg.MSG_TYPE_ERROR),this.form.reset()),this.busy$.next(!1)}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(r.e80),e.LFG(r.IWp),e.LFG(r.X9E))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),k=(()=>{class o{constructor(n){this.service=n,this.form=this.service.form,this.isUpdating$=this.service.isUpdating$,this.style=!0}onSubmit(){this.service.login()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(p))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cx-login-form"]],hostVars:2,hostBindings:function(n,s){2&n&&e.ekj("user-form",s.style)},decls:25,vars:32,consts:[["class","overlay",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"label-content"],["required","true","type","email","formControlName","userId",1,"form-control",3,"placeholder"],[3,"control"],["required","true","type","password","formControlName","password","cxPasswordVisibilitySwitch","",1,"form-control",3,"placeholder"],[1,"btn-link",3,"routerLink"],["type","submit",1,"btn","btn-block","btn-primary",3,"disabled"],[1,"overlay"]],template:function(n,s){1&n&&(e.YNc(0,Z,1,0,"cx-spinner",0),e.ALo(1,"async"),e.TgZ(2,"form",1),e.NdJ("ngSubmit",function(){return s.onSubmit()}),e.TgZ(3,"label")(4,"span",2),e._uU(5),e.ALo(6,"cxTranslate"),e.qZA(),e._UZ(7,"input",3),e.ALo(8,"cxTranslate"),e._UZ(9,"cx-form-errors",4),e.qZA(),e.TgZ(10,"label")(11,"span",2),e._uU(12),e.ALo(13,"cxTranslate"),e.qZA(),e._UZ(14,"input",5),e.ALo(15,"cxTranslate"),e.ALo(16,"cxTranslate"),e._UZ(17,"cx-form-errors",4),e.qZA(),e.TgZ(18,"a",6),e.ALo(19,"cxUrl"),e._uU(20),e.ALo(21,"cxTranslate"),e.qZA(),e.TgZ(22,"button",7),e._uU(23),e.ALo(24,"cxTranslate"),e.qZA()()),2&n&&(e.Q6J("ngIf",e.lcZ(1,13,s.isUpdating$)),e.xp6(2),e.Q6J("formGroup",s.form),e.xp6(3),e.Oqu(e.lcZ(6,15,"loginForm.emailAddress.label")),e.xp6(2),e.s9C("placeholder",e.lcZ(8,17,"loginForm.emailAddress.placeholder")),e.xp6(2),e.Q6J("control",s.form.get("userId")),e.xp6(3),e.Oqu(e.lcZ(13,19,"loginForm.password.label")),e.xp6(2),e.s9C("placeholder",e.lcZ(15,21,"loginForm.password.placeholder")),e.uIk("aria-label",e.lcZ(16,23,"loginForm.password.placeholder")),e.xp6(3),e.Q6J("control",s.form.get("password")),e.xp6(1),e.Q6J("routerLink",e.lcZ(19,25,e.DdM(31,T))),e.xp6(2),e.hij(" ",e.lcZ(21,27,"loginForm.forgotPassword")," "),e.xp6(2),e.Q6J("disabled",s.form.disabled),e.xp6(1),e.hij(" ",e.lcZ(24,29,"loginForm.signIn")," "))},dependencies:[l.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.sg,c.u,d.rH,u.Ahv,u.ORR,u.X84,l.Ov,r.l2T,r.X$D],encapsulation:2,changeDetection:0}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[(0,r.i51)({cmsComponents:{ReturningCustomerLoginComponent:{component:k,guards:[r.aOY],providers:[{provide:p,useClass:p,deps:[r.e80,r.IWp,r.X9E]}]}}})],imports:[l.ez,c.u5,c.UX,d.Bz,r.bhT,r.LUR,u.Fym,u.Fme,u.Ird]}),o})(),B=(()=>{class o{constructor(n){this.activatedRoute=n,this.loginAsGuest=!1}ngOnInit(){this.loginAsGuest=this.activatedRoute.snapshot.queryParams.forced}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(d.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cx-login-register"]],decls:6,vars:5,consts:[[1,"register"],[1,"cx-section-title"],[4,"ngIf"],[1,"btn","btn-block","btn-secondary","btn-register",3,"routerLink"],[1,"btn","btn-block","btn-secondary","btn-guest",3,"routerLink"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.ALo(3,"cxTranslate"),e.qZA(),e.YNc(4,b,5,7,"ng-container",2),e.YNc(5,R,5,7,"ng-container",2),e.qZA()),2&n&&(e.xp6(2),e.hij(" ",e.lcZ(3,3,"loginForm.dontHaveAccount")," "),e.xp6(2),e.Q6J("ngIf",!s.loginAsGuest),e.xp6(1),e.Q6J("ngIf",s.loginAsGuest))},dependencies:[l.O5,d.rH,r.l2T,r.X$D],encapsulation:2}),o})(),G=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[(0,r.i51)({cmsComponents:{ReturningCustomerRegisterComponent:{component:B,guards:[r.aOY]}}})],imports:[l.ez,d.Bz,r.bhT,u.ISW,r.LUR]}),o})(),Y=(()=>{class o{constructor(n,s){this.auth=n,this.userAccount=s}ngOnInit(){this.user$=this.auth.isUserLoggedIn().pipe((0,h.w)(n=>n?this.userAccount.get():(0,C.of)(void 0)))}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.e80),e.Y36(g.gf))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cx-login"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["login",""],[1,"cx-login-greet"],["id","account-nav","position","HeaderLinks"],["role","link",3,"routerLink"]],template:function(n,s){if(1&n&&(e.YNc(0,O,5,6,"ng-container",0),e.ALo(1,"async"),e.YNc(2,J,4,7,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(3);e.Q6J("ngIf",e.lcZ(1,2,s.user$))("ngIfElse",a)}},dependencies:[l.O5,d.rH,u.JSc,l.Ov,r.l2T,r.X$D],encapsulation:2}),o})(),E=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[(0,r.i51)({cmsComponents:{LoginComponent:{component:Y}}})],imports:[l.ez,d.Bz,r.bhT,u.ISW,r.LUR]}),o})(),j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[E,Q,G]}),o})();const z=new e.OlP("UserAccountNormalizer");new e.OlP("UserAccountSerializer");class A{}let L=(()=>{class o{constructor(n){this.adapter=n}get(n){return this.adapter.load(n)}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(A))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),y=(()=>{class o{constructor(n,s,a){this.userAccountConnector=n,this.userIdService=s,this.query=a,this.userQuery=this.query.create(()=>this.userIdService.takeUserId(!0).pipe((0,h.w)(f=>this.userAccountConnector.get(f))),{reloadOn:[g.x7],resetOn:[r.p1J,r.rX_]})}getById(n){return this.userAccountConnector.get(n)}get(){return this.userQuery.get()}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(L),e.LFG(r.XBV),e.LFG(r._7J))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();const X=[y,{provide:g.gf,useExisting:y}];let $=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[L,...X]}),o})();var N=i(1737),P=i(7221),q=i(529);const H={backend:{occ:{endpoints:{user:"users/${userId}"}}}};let W=(()=>{class o{constructor(n,s,a){this.http=n,this.occEndpoints=s,this.converter=a,this.logger=(0,e.f3M)(r.mQy)}load(n){const s=this.occEndpoints.buildUrl("user",{urlParams:{userId:n}});return this.http.get(s).pipe((0,P.K)(a=>(0,N._)((0,r.cxH)(a,this.logger))),this.converter.pipeable(z))}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(q.eN),e.LFG(r.Lz0),e.LFG(r.IXI))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),V=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[(0,r.i51)(H),{provide:A,useClass:W}]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[$,V,j]}),o})()}}]);