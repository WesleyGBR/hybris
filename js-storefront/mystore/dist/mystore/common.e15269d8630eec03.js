"use strict";(self.webpackChunkmystore_6_3=self.webpackChunkmystore_6_3||[]).push([[592],{1277:(D,C,a)=>{a.r(C),a.d(C,{AddToCartComponent:()=>f,AddToCartModule:()=>E});var t=a(4650),d=a(4006),l=a(3749),p=a(8849),r=a(9144),h=a(4850),T=a(2198),m=a(2986),_=a(6895);function x(n,i){if(1&n&&t._UZ(0,"cx-item-counter",9),2&n){const o=t.oxw(3);t.Q6J("max",o.maxQuantity)("control",o.addToCartForm.get("quantity"))}}function g(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Oqu(o.getInventory())}}function y(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"label"),t._uU(2),t.ALo(3,"cxTranslate"),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,x,1,2,"cx-item-counter",7),t.TgZ(6,"span",8),t.YNc(7,g,2,1,"span",3),t.ALo(8,"async"),t._uU(9),t.ALo(10,"cxTranslate"),t.ALo(11,"cxTranslate"),t.qZA()()()),2&n){const o=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,4,"addToCart.quantity")),t.xp6(3),t.Q6J("ngIf",o.hasStock),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,6,o.showInventory$)),t.xp6(2),t.hij(" ",o.hasStock?t.lcZ(10,8,"addToCart.inStock"):t.lcZ(11,10,"addToCart.outOfStock"),"")}}function A(n,i){}function v(n,i){if(1&n){const o=t.EpF();t.ynx(0),t.YNc(1,A,0,0,"ng-template",10),t.NdJ("cxComponentRefChange",function(s){t.CHM(o);const u=t.oxw(2);return t.KtG(u.pickupOptionCompRef=s)}),t.BQk()}if(2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("cxOutlet",o.CartOutlets.ADD_TO_CART_PICKUP_OPTION)("cxComponentRef",o.pickupOptionCompRef)}}function O(n,i){if(1&n&&(t.TgZ(0,"span",14),t._UZ(1,"cx-icon",15),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Q6J("type",o.iconTypes.REPEAT)}}function k(n,i){if(1&n&&(t.TgZ(0,"button",11),t.YNc(1,O,2,1,"span",12),t.ALo(2,"cxTranslate"),t.TgZ(3,"span",13),t.ALo(4,"cxTranslate"),t.ALo(5,"cxTranslate"),t._uU(6),t.ALo(7,"cxTranslate"),t.qZA()()),2&n){const o=t.oxw(2);let e,s;t.Q6J("ngClass",null!=o.options&&o.options.displayAddToCart?"btn btn-tertiary":"btn btn-primary btn-block")("disabled",o.quantity<=0||o.quantity>o.maxQuantity),t.xp6(1),t.Q6J("ngIf",(null==o.options?null:o.options.addToCartString)===t.lcZ(2,6,"addToCart.buyItAgain")),t.xp6(2),t.Q6J("ngClass",(null==o.options?null:o.options.addToCartString)===t.lcZ(5,10,"addToCart.buyItAgain")?"buyItAgainLink":""),t.uIk("aria-label",null!==(e=null==o.options?null:o.options.addToCartString)&&void 0!==e?e:t.lcZ(4,8,"addToCart.addToCart")),t.xp6(3),t.hij(" ",null!==(s=null==o.options?null:o.options.addToCartString)&&void 0!==s?s:t.lcZ(7,12,"addToCart.addToCart")," ")}}function I(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"form",1),t.NdJ("submit",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.addToCart())}),t.YNc(1,y,12,12,"div",2),t.YNc(2,v,2,2,"ng-container",3),t.YNc(3,k,8,14,"button",4),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.addToCartForm),t.xp6(1),t.Q6J("ngIf",o.showQuantity),t.xp6(1),t.Q6J("ngIf",o.hasStock),t.xp6(1),t.Q6J("ngIf",o.hasStock)}}let f=(()=>{class n{constructor(o,e,s,u,c,S){this.currentProductService=o,this.cd=e,this.activeCartService=s,this.component=u,this.eventService=c,this.productListItemContext=S,this.showQuantity=!0,this.hasStock=!1,this.inventoryThreshold=!1,this.showInventory$=this.component?.data$.pipe((0,h.U)(b=>b.inventoryDisplay)),this.quantity=1,this.addToCartForm=new d.nJ({quantity:new d.p4(1,{updateOn:"blur"})}),this.CartOutlets=l.oC,this.iconTypes=r.e1G}ngOnInit(){this.product?(this.productCode=this.product.code??"",this.setStockInfo(this.product),this.cd.markForCheck()):this.productCode?(this.quantity=1,this.hasStock=!0,this.cd.markForCheck()):this.subscription=(this.productListItemContext?this.productListItemContext.product$:this.currentProductService.getProduct()).pipe((0,T.h)(p.jWE)).subscribe(o=>{this.productCode=o.code??"",this.setStockInfo(o),this.cd.markForCheck()})}setStockInfo(o){this.quantity=1,this.addToCartForm.controls.quantity.setValue(1),this.hasStock=Boolean("outOfStock"!==o.stock?.stockLevelStatus),this.inventoryThreshold=o.stock?.isValueRounded??!1,this.hasStock&&o.stock?.stockLevel&&(this.maxQuantity=o.stock.stockLevel),this.productListItemContext&&(this.showQuantity=!1)}getInventory(){if(this.hasStock){const o=this.maxQuantity?this.maxQuantity.toString():"";return this.inventoryThreshold?o+"+":o}return""}updateCount(o){this.quantity=o}addToCart(){const o=this.addToCartForm.get("quantity")?.value;!this.productCode||o<=0||(this.pickupOptionCompRef instanceof t.UuU&&this.pickupOptionCompRef.instance.intendedPickupLocation$.pipe((0,m.q)(1)).subscribe(e=>{this.pickupStore="pickup"===e?.pickupOption?e.name:void 0}),this.activeCartService.getEntries().pipe((0,m.q)(1)).subscribe(e=>{this.activeCartService.addEntry(this.productCode,o,this.pickupStore),this.eventService.dispatch(this.createCartUiEventAddToCart(this.productCode,o,e.length,this.pickupStore))}))}createCartUiEventAddToCart(o,e,s,u){const c=new l.wj;return c.productCode=o,c.quantity=e,c.numberOfEntriesBeforeAdd=s,c.pickupStoreName=u,c}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.pHG),t.Y36(t.sBO),t.Y36(l.bu),t.Y36(r.exf),t.Y36(p.POd),t.Y36(r.Z6X,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cx-add-to-cart"]],inputs:{productCode:"productCode",showQuantity:"showQuantity",options:"options",pickupStore:"pickupStore",product:"product"},decls:1,vars:1,consts:[[3,"formGroup","submit",4,"ngIf"],[3,"formGroup","submit"],["class","quantity",4,"ngIf"],[4,"ngIf"],["type","submit",3,"ngClass","disabled",4,"ngIf"],[1,"quantity"],[1,"cx-counter-stock"],[3,"max","control",4,"ngIf"],[1,"info"],[3,"max","control"],[3,"cxOutlet","cxComponentRef","cxComponentRefChange"],["type","submit",3,"ngClass","disabled"],["class","repeat-icon",4,"ngIf"],[3,"ngClass"],[1,"repeat-icon"],[3,"type"]],template:function(o,e){1&o&&t.YNc(0,I,4,4,"form",0),2&o&&t.Q6J("ngIf",e.productCode)},dependencies:[_.mk,_.O5,d._Y,d.JL,d.sg,r.oJW,r.odZ,r.$3S,_.Ov,p.X$D],encapsulation:2,changeDetection:0}),n})(),E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[(0,p.i51)({cmsComponents:{ProductAddToCartComponent:{component:f,data:{inventoryDisplay:!1}}}})],imports:[_.ez,d.UX,p.LUR,r.QX1,r.Td$,r.f5$]}),n})()}}]);