"use strict";(self.webpackChunkyourstore=self.webpackChunkyourstore||[]).push([[694],{1532:($,f,c)=>{c.r(f),c.d(f,{ProductVariantsModule:()=>B});var t=c(4650),s=c(6895),a=c(8849);const C={backend:{occ:{endpoints:{product:{variants:"products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType"}}}}};let V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[(0,a.i51)(C)],imports:[s.ez]}),n})();var d=c(5391),l=c(2198),p=c(2986),y=c(5778),P=c(2994),x=c(7545),_=c(4850),T=c(9144),g=c(1086);function M(n,r){if(1&n&&(t.TgZ(0,"option",4),t._uU(1),t.qZA()),2&n){const e=r.$implicit,o=t.oxw();t.s9C("value",e.code),t.Q6J("selected",e.code===(null==o.product?null:o.product.code)),t.xp6(1),t.hij(" ",o.getVariantOptionValue(e.variantOptionQualifiers)," ")}}function O(n,r){if(1&n&&(t.TgZ(0,"option",5),t._uU(1),t.qZA()),2&n){const e=r.$implicit,o=t.oxw();t.s9C("value",e.code),t.Q6J("selected",e.code===(null==o.product?null:o.product.code)),t.xp6(1),t.hij(" ",o.getVariantOptionValue(e.variantOptionQualifiers)," ")}}function Z(n,r){if(1&n&&(t.TgZ(0,"div",4),t._uU(1),t.ALo(2,"cxTranslate"),t.TgZ(3,"span",5),t._uU(4),t.qZA()()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,2,"productVariants.style"),": "),t.xp6(3),t.Oqu(e.getVariantOptionValue(null==e.variants?null:e.variants.selected.variantOptionQualifiers))}}const z=function(n){return{"selected-variant":n}};function D(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"li",6)(1,"button",7),t.NdJ("click",function(){const u=t.CHM(e).$implicit,v=t.oxw();return t.KtG(v.changeStyle(u.code))}),t._UZ(2,"img",8),t.qZA()()}if(2&n){const e=r.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(4,z,e.code===(null==o.variants||null==o.variants.selected?null:o.variants.selected.code))),t.xp6(2),t.s9C("src",o.getVariantThumbnailUrl(e.variantOptionQualifiers),t.LSH),t.s9C("title",o.getVariantOptionValue(e.variantOptionQualifiers)),t.s9C("alt",o.getVariantOptionValue(e.variantOptionQualifiers))}}function F(n,r){if(1&n&&t._UZ(0,"cx-product-variant-style-selector",5),2&n){const e=t.oxw(3);t.Q6J("variants",e.variants[e.variantType.STYLE])}}function A(n,r){if(1&n&&t._UZ(0,"cx-product-variant-size-selector",6),2&n){const e=t.oxw(2).ngIf,o=t.oxw();t.Q6J("product",e)("variants",o.variants[o.variantType.SIZE])}}function J(n,r){if(1&n&&t._UZ(0,"cx-product-variant-color-selector",6),2&n){const e=t.oxw(2).ngIf,o=t.oxw();t.Q6J("product",e)("variants",o.variants[o.variantType.COLOR])}}function Q(n,r){if(1&n&&(t.TgZ(0,"div",2),t.YNc(1,F,1,1,"cx-product-variant-style-selector",3),t.YNc(2,A,1,2,"cx-product-variant-size-selector",4),t.YNc(3,J,1,2,"cx-product-variant-color-selector",4),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.variants[e.variantType.STYLE]),t.xp6(1),t.Q6J("ngIf",e.variants[e.variantType.SIZE]),t.xp6(1),t.Q6J("ngIf",e.variants[e.variantType.COLOR])}}function L(n,r){if(1&n&&(t.ynx(0),t.YNc(1,Q,4,3,"div",1),t.BQk()),2&n){const e=r.ngIf;t.xp6(1),t.Q6J("ngIf",null==e.baseOptions?null:e.baseOptions.length)}}let Y=(()=>{class n{constructor(e){this.routingService=e}changeColor(e,o){return e&&this.routingService.go({cxRoute:"product",params:{code:e,name:o}}),null}getVariantOptionValue(e){const o=e.find(i=>i.qualifier===a.zYO.COLOR);return o?o.value:""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.Znh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cx-product-variant-color-selector"]],inputs:{product:"product",variants:"variants"},decls:7,vars:4,consts:[[1,"variant-selector"],[1,"variant-name"],[1,"form-control","variant-select",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"div",1),t._uU(3),t.ALo(4,"cxTranslate"),t.qZA(),t.TgZ(5,"select",2),t.NdJ("change",function(u){return o.changeColor(u.target.value,null==o.product?null:o.product.name)}),t.YNc(6,M,2,3,"option",3),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.hij("",t.lcZ(4,2,"productVariants.color"),":"),t.xp6(3),t.Q6J("ngForOf",null==o.variants?null:o.variants.options))},dependencies:[s.sg,a.X$D],encapsulation:2,changeDetection:0}),n})(),m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,d.Bz,a.bhT,a.LUR]}),n})(),b=(()=>{class n{constructor(e,o){this.productService=e,this.routingService=o}changeSize(e){return e&&this.productService.get(e,"list").pipe((0,l.h)(a.pTN),(0,p.q)(1)).subscribe(o=>{this.routingService.go({cxRoute:"product",params:o})}),null}getVariantOptionValue(e){const o=e.find(i=>i.qualifier===a.zYO.SIZE);return o?o.value:""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.M52),t.Y36(a.Znh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cx-product-variant-size-selector"]],inputs:{product:"product",variants:"variants"},decls:11,vars:10,consts:[[1,"variant-selector"],[1,"variant-name"],[1,"form-control","variant-select",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],["href","#",1,"size-guide",3,"title"],[3,"value","selected"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"div",1),t._uU(3),t.ALo(4,"cxTranslate"),t.qZA(),t.TgZ(5,"select",2),t.NdJ("change",function(u){return o.changeSize(u.target.value)}),t.YNc(6,O,2,3,"option",3),t.qZA(),t.TgZ(7,"a",4),t.ALo(8,"cxTranslate"),t._uU(9),t.ALo(10,"cxTranslate"),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.hij("",t.lcZ(4,4,"productVariants.size"),":"),t.xp6(3),t.Q6J("ngForOf",null==o.variants?null:o.variants.options),t.xp6(1),t.s9C("title",t.lcZ(8,6,"productVariants.sizeGuideLabel")),t.xp6(2),t.hij(" ",t.lcZ(10,8,"productVariants.sizeGuideLabel")," "))},dependencies:[s.sg,a.X$D],encapsulation:2,changeDetection:0}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,d.Bz,a.bhT,a.LUR]}),n})(),U=(()=>{class n{constructor(e,o,i){this.config=e,this.productService=o,this.routingService=i,this.variantQualifier=a.zYO}getVariantOptionValue(e){const o=e.find(i=>i.qualifier===a.zYO.STYLE);return o?o.value:""}getVariantThumbnailUrl(e){const o=e.find(i=>i.image);return o?`${this.config?.backend?.occ?.baseUrl}${o.image?.url}`:""}changeStyle(e){return e&&this.productService.get(e,"list").pipe((0,l.h)(a.pTN),(0,p.q)(1)).subscribe(o=>{this.routingService.go({cxRoute:"product",params:o})}),null}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.Vri),t.Y36(a.M52),t.Y36(a.Znh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cx-product-variant-style-selector"]],inputs:{variants:"variants"},decls:5,vars:2,consts:[[1,"variant-selector"],["class","variant-name",4,"ngIf"],[1,"variant-list"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"variant-name"],[1,"style-name"],[3,"ngClass"],[1,"variant-button",3,"click"],[3,"src","title","alt"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0),t.YNc(2,Z,5,4,"div",1),t.TgZ(3,"ul",2),t.YNc(4,D,3,6,"li",3),t.qZA()(),t.BQk()),2&e&&(t.xp6(2),t.Q6J("ngIf",o.variants.selected),t.xp6(2),t.Q6J("ngForOf",null==o.variants?null:o.variants.options))},dependencies:[s.mk,s.sg,s.O5,a.X$D],encapsulation:2,changeDetection:0}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,d.Bz,a.bhT,a.LUR]}),n})(),I=(()=>{class n{constructor(e){this.currentProductService=e,this.variants={},this.variantType=a.JyF}ngOnInit(){this.product$=this.currentProductService.getProduct().pipe((0,l.h)(a.jWE),(0,l.h)(e=>!!e.baseOptions),(0,y.x)(),(0,P.b)(e=>{e.baseOptions.forEach(o=>{o?.variantType&&(this.variants[o.variantType]=o)})}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.pHG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cx-product-variants-container"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","variant-section",4,"ngIf"],[1,"variant-section"],[3,"variants",4,"ngIf"],[3,"product","variants",4,"ngIf"],[3,"variants"],[3,"product","variants"]],template:function(e,o){1&e&&(t.YNc(0,L,2,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.product$))},dependencies:[s.O5,U,b,Y,s.Ov],encapsulation:2,changeDetection:0}),n})(),j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,d.Bz,a.bhT,a.LUR,h,S,m]}),n})(),N=(()=>{class n{constructor(e,o,i){this.productService=e,this.semanticPathService=o,this.router=i}canActivate(e){const o=e.params?.productCode;return o?this.productService.get(o,"variants").pipe((0,l.h)(a.pTN),(0,x.w)(i=>{if(!i.purchasable){const u=this.findPurchasableProductCode(i);if(u)return this.productService.get(u,"list").pipe((0,l.h)(a.pTN),(0,p.q)(1),(0,_.U)(v=>this.router.createUrlTree(this.semanticPathService.transform({cxRoute:"product",params:v}))))}return(0,g.of)(!0)})):(0,g.of)(!0)}findPurchasableProductCode(e){if(e.variantOptions?.length){const o=e.variantOptions.filter(i=>!(!i.stock||!i.stock.stockLevel)&&i);return o&&o.length?o[0]?.code:e.variantOptions[0]?.code}}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(a.M52),t.LFG(a.hCH),t.LFG(d.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[(0,a.i51)({cmsComponents:{ProductVariantSelectorComponent:{component:I,guards:[N]}}})],imports:[j,m,S,h]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[V,w]}),n})()}}]);