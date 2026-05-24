import{A as wi,B as Pt,C as Si,D as xi,E as et,F as S,G as Di,H as Ri,I as ki,d as hi,f as pi,g as mi,h as ui,i as fi,j as _i,n as gi,o as vi,r as me,s as yi,t as Mt,u as Ot,v as Le,w as I,x as It,y as bi,z as Ci}from"./chunk-UC7DNJVW.js";import{$ as ie,$a as D,$b as Pe,Ab as w,Bb as _e,Cb as K,Db as Ke,Eb as Ne,Fb as W,Gb as X,Hb as Ze,Ia as f,Ib as ce,J as fe,Jb as N,Kb as Be,Lb as u,Mb as B,N as O,Na as ne,Nb as $,O as b,Oa as Q,Ob as ai,Pa as be,Pb as U,Q as F,Qa as Me,Qb as Ve,R as ti,Ra as Dt,Rb as si,S as m,Sb as Je,Ta as de,Tb as ci,Ua as oi,V as Ge,X as Z,Xa as x,Xb as Se,Y as J,Ya as C,Z as Qe,Za as y,Zb as li,_ as ii,a as $e,aa as j,ab as H,ac as xe,c as Ue,cc as q,d as Zt,da as ve,dc as ge,e as T,ea as G,ec as di,f as Jt,fb as Rt,g as wt,gb as he,h as St,hb as k,ia as le,ib as E,jb as ri,k as Fe,kb as kt,la as ye,lb as Et,m as xt,ma as A,mb as oe,nb as h,o as ei,oa as R,ob as d,p as qe,pb as pe,qb as Ce,rb as we,sb as Oe,ta as ni,tb as re,ub as ae,v as Ye,vb as M,w as Ae,wb as Ie,zb as se}from"./chunk-FJEWK3Q7.js";import{a as ue,b as Ee}from"./chunk-7CGTOI24.js";var Mn=["*"];var On=new F("MAT_CARD_CONFIG"),Ei=(()=>{class n{appearance;constructor(){let e=m(On,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,o){i&2&&N("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Mn,decls:1,vars:0,template:function(i,o){i&1&&(_e(),K(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var Mi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[I]})}return n})();function tt(n){return n&&typeof n.connect=="function"&&!(n instanceof Zt)}var ee=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(ee||{}),it=class{viewCacheSize=20;_viewCache=[];applyChanges(t,e,i,o,r){t.forEachOperation((a,s,c)=>{let l,p;if(a.previousIndex==null){let _=()=>i(a,s,c);l=this._insertView(_,c,e,o(a)),p=l?ee.INSERTED:ee.REPLACED}else c==null?(this._detachAndCacheView(s,e),p=ee.REMOVED):(l=this._moveView(s,c,e,o(a)),p=ee.MOVED);r&&r({context:l?.context,operation:p,record:a})})}detach(){for(let t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,i,o){let r=this._insertViewFromCache(e,i);if(r){r.context.$implicit=o;return}let a=t();return i.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(t,e){let i=e.detach(t);this._maybeCacheView(i,e)}_moveView(t,e,i,o){let r=i.get(t);return i.move(r,e),r.context.$implicit=o,r}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{let i=e.indexOf(t);i===-1?t.destroy():e.remove(i)}}_insertViewFromCache(t,e){let i=this._viewCache.pop();return i&&e.insert(i,t),i||null}};var Tn=20,Tt=(()=>{class n{_ngZone=m(G);_platform=m(me);_renderer=m(be).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new T;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Tn){return this._platform.isBrowser?new Ue(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Ae(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Fe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let o=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ye(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_scrollableContainsElement(e,i){let o=wi(i),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fn=20,De=(()=>{class n{_platform=m(me);_listeners;_viewportSize=null;_change=new T;_document=m(j);constructor(){let e=m(G),i=m(be).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen("window","resize",o),i.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||i.scrollY||o.scrollTop||0,s=-r.left||e.body?.scrollLeft||i.scrollX||o.scrollLeft||0;return{top:a,left:s}}change(e=Fn){return e>0?this._change.pipe(Ae(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oi=new F("CDK_VIRTUAL_SCROLL_VIEWPORT");var nt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({})}return n})(),ze=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[I,nt,I,nt]})}return n})();var ot=class{applyChanges(t,e,i,o,r){t.forEachOperation((a,s,c)=>{let l,p;if(a.previousIndex==null){let _=i(a,s,c);l=e.createEmbeddedView(_.templateRef,_.context,_.index),p=ee.INSERTED}else c==null?(e.remove(s),p=ee.REMOVED):(l=e.get(s),e.move(l,c),p=ee.MOVED);r&&r({context:l?.context,operation:p,record:a})})}detach(){}};var An=[[["caption"]],[["colgroup"],["col"]],"*"],Nn=["caption","colgroup, col","*"];function Bn(n,t){n&1&&K(0,2)}function Vn(n,t){n&1&&(h(0,"thead",0),M(1,1),d(),h(2,"tbody",0),M(3,2)(4,3),d(),h(5,"tfoot",0),M(6,4),d())}function Ln(n,t){n&1&&M(0,1)(1,2)(2,3)(3,4)}var te=new F("CDK_TABLE");var st=(()=>{class n{template=m(Q);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),ct=(()=>{class n{template=m(Q);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Ti=(()=>{class n{template=m(Q);constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Te=(()=>{class n{_table=m(te,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,o,r){if(i&1&&Ke(r,st,5)(r,ct,5)(r,Ti,5),i&2){let a;W(a=X())&&(o.cell=a.first),W(a=X())&&(o.headerCell=a.first),W(a=X())&&(o.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",q],stickyEnd:[2,"stickyEnd","stickyEnd",q]}})}return n})(),at=class{constructor(t,e){e.nativeElement.classList.add(...t._columnCssClassName)}},Fi=(()=>{class n extends at{constructor(){super(m(Te),m(R))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[D]})}return n})();var Ai=(()=>{class n extends at{constructor(){let e=m(Te),i=m(R);super(e,i);let o=e._table?._getCellRole();o&&i.nativeElement.setAttribute("role",o)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[D]})}return n})();var At=(()=>{class n{template=m(Q);_differs=m(xe);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof He?e.headerCell.template:this instanceof Nt?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,features:[ye]})}return n})(),He=(()=>{class n extends At{_table=m(te,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(m(Q),m(xe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",q]},features:[D,ye]})}return n})(),Nt=(()=>{class n extends At{_table=m(te,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(m(Q),m(xe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",q]},features:[D,ye]})}return n})(),lt=(()=>{class n extends At{_table=m(te,{optional:!0});when;constructor(){super(m(Q),m(xe))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[D]})}return n})(),Re=(()=>{class n{_viewContainer=m(de);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Bt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&M(0,0)},dependencies:[Re],encapsulation:2})}return n})();var Vt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&M(0,0)},dependencies:[Re],encapsulation:2})}return n})(),Ni=(()=>{class n{templateRef=m(Q);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Ii=["top","bottom","left","right"],Ft=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(t=>this._updateCachedSizes(t)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(t,e,i=!0,o=!0,r,a,s){this._isNativeHtmlTable=t,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=o,this.direction=r,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(t,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(t);let i=[];for(let o of t)o.nodeType===o.ELEMENT_NODE&&i.push(o,...Array.from(o.children));ne({write:()=>{for(let o of i)this._removeStickyStyle(o,e)}},{injector:this._tableInjector})}updateStickyColumns(t,e,i,o=!0,r=!0){if(!t.length||!this._isBrowser||!(e.some(V=>V)||i.some(V=>V))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=t[0],s=a.children.length,c=this.direction==="rtl",l=c?"right":"left",p=c?"left":"right",_=e.lastIndexOf(!0),g=i.indexOf(!0),v,P,L;r&&this._updateStickyColumnReplayQueue({rows:[...t],stickyStartStates:[...e],stickyEndStates:[...i]}),ne({earlyRead:()=>{v=this._getCellWidths(a,o),P=this._getStickyStartColumnPositions(v,e),L=this._getStickyEndColumnPositions(v,i)},write:()=>{for(let V of t)for(let z=0;z<s;z++){let Kt=V.children[z];e[z]&&this._addStickyStyle(Kt,l,P[z],z===_),i[z]&&this._addStickyStyle(Kt,p,L[z],z===g)}this._positionListener&&v.some(V=>!!V)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:v.slice(0,_+1).map((V,z)=>e[z]?V:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:g===-1?[]:v.slice(g).map((V,z)=>i[z+g]?V:null).reverse()}))}},{injector:this._tableInjector})}stickRows(t,e,i){if(!this._isBrowser)return;let o=i==="bottom"?t.slice().reverse():t,r=i==="bottom"?e.slice().reverse():e,a=[],s=[],c=[];ne({earlyRead:()=>{for(let l=0,p=0;l<o.length;l++){if(!r[l])continue;a[l]=p;let _=o[l];c[l]=this._isNativeHtmlTable?Array.from(_.children):[_];let g=this._retrieveElementSize(_).height;p+=g,s[l]=g}},write:()=>{let l=r.lastIndexOf(!0);for(let p=0;p<o.length;p++){if(!r[p])continue;let _=a[p],g=p===l;for(let v of c[p])this._addStickyStyle(v,i,_,g)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(t,e){this._isNativeHtmlTable&&ne({write:()=>{let i=t.querySelector("tfoot");i&&(e.some(o=>!o)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(t,e){if(!t.classList.contains(this._stickCellCss))return;for(let o of e)t.style[o]="",t.classList.remove(this._borderCellCss[o]);Ii.some(o=>e.indexOf(o)===-1&&t.style[o])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,i,o){t.classList.add(this._stickCellCss),o&&t.classList.add(this._borderCellCss[e]),t.style[e]=`${i}px`,t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){let e={top:100,bottom:10,left:1,right:1},i=0;for(let o of Ii)t.style[o]&&(i+=e[o]);return i?`${i}`:""}_getCellWidths(t,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],o=t.children;for(let r=0;r<o.length;r++){let a=o[r];i.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(t,e){let i=[],o=0;for(let r=0;r<t.length;r++)e[r]&&(i[r]=o,o+=t[r]);return i}_getStickyEndColumnPositions(t,e){let i=[],o=0;for(let r=t.length;r>0;r--)e[r]&&(i[r]=o,o+=t[r]);return i}_retrieveElementSize(t){let e=this._elemSizeCache.get(t);if(e)return e;let i=t.getBoundingClientRect(),o={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(t,o),this._resizeObserver.observe(t,{box:"border-box"})),o}_updateStickyColumnReplayQueue(t){this._removeFromStickyColumnReplayQueue(t.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(t)}_removeFromStickyColumnReplayQueue(t){let e=new Set(t);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(o=>!e.has(o));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(t){let e=!1;for(let i of t){let o=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};o.width!==this._elemSizeCache.get(i.target)?.width&&zn(i.target)&&(e=!0),this._elemSizeCache.set(i.target,o)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function zn(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(t=>n.classList.contains(t))}var je=new F("STICKY_POSITIONING_LISTENER");var Lt=(()=>{class n{viewContainer=m(de);elementRef=m(R);constructor(){let e=m(te);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","rowOutlet",""]]})}return n})(),zt=(()=>{class n{viewContainer=m(de);elementRef=m(R);constructor(){let e=m(te);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),jt=(()=>{class n{viewContainer=m(de);elementRef=m(R);constructor(){let e=m(te);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),Ht=(()=>{class n{viewContainer=m(de);elementRef=m(R);constructor(){let e=m(te);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=y({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Wt=(()=>{class n{_differs=m(xe);_changeDetectorRef=m(Pe);_elementRef=m(R);_dir=m(Le,{optional:!0});_platform=m(me);_viewRepeater;_viewportRuler=m(De);_injector=m(ie);_virtualScrollViewport=m(Oi,{optional:!0,host:!0});_positionListener=m(je,{optional:!0})||m(je,{optional:!0,skipSelf:!0});_document=m(j);_data;_renderedRange;_onDestroy=new T;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new T;_footerRowStickyUpdates=new T;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new T;_dataStream=new T;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new ve;viewChange=new Jt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){m(new li("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,o)=>this.trackBy?this.trackBy(o.dataIndex,o.data):o)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(fe(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new it:new ot,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),tt(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(o,r,a)=>this._getEmbeddedViewArgs(o.item,a),o=>o.item.data,o=>{o.operation===ee.INSERTED&&o.context&&this._renderCellTemplateForItem(o.record.item.rowDef,o.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(o=>{let r=i.get(o.currentIndex);r.context.$implicit=o.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let o=Pi(this._headerRowOutlet,"thead");o&&(o.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let o=Pi(this._footerRowOutlet,"tfoot");o&&(o.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(o=>o.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(o=>o.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),o=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...o],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let s=0;s<i.length;s++)this._renderRows[s].rowDef===r&&a.push(i[s]);this._addStickyColumnStyles(a,r)}),o.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),o=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<i;r++){let a=this._data[r],s=this._getRenderRowsForData(a,r,o.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let c=0;c<s.length;c++){let l=s[c],p=this._cachedRenderRowsMap.get(l.data);p.has(l.rowDef)?p.get(l.rowDef).push(l):p.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,o){return this._getRowDefs(e,i).map(a=>{let s=o&&o.has(a)?o.get(a):[];if(s.length){let c=s.shift();return c.dataIndex=i,c}else return{data:e,rowDef:a,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),rt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=rt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=rt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=rt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let c=!!s.getColumnsDiff();return a||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let o=this._headerRowDefs.reduce(e,!1);o&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),i||o||r}_switchDataSource(e){this._data=[],tt(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;tt(this.dataSource)?e=this.dataSource.connect(this):xt(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Fe(this.dataSource)),this._renderChangeSubscription=qe([e,this.viewChange]).pipe(fe(this._onDestroy)).subscribe(([i,o])=>{this._data=i||[],this._renderedRange=o,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let o=Array.from(i?.columns||[]).map(s=>{let c=this._columnDefsByName.get(s);return c}),r=o.map(s=>s.sticky),a=o.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let o=0;o<e.viewContainer.length;o++){let r=e.viewContainer.get(o);i.push(r.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let o=[];if(this.multiTemplateDataRows)o=this._rowDefs.filter(r=>!r.when||r.when(i,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(i,e))||this._defaultRowDef;r&&o.push(r)}return o.length,o}_getEmbeddedViewArgs(e,i){let o=e.rowDef,r={$implicit:e.data};return{templateRef:o.template,context:r,index:i}}_renderRow(e,i,o,r={}){let a=e.viewContainer.createEmbeddedView(i.template,r,o);return this._renderCellTemplateForItem(i,r),a}_renderCellTemplateForItem(e,i){for(let o of this._getCellTemplates(e))Re.mostRecentCellOutlet&&Re.mostRecentCellOutlet._viewContainer.createEmbeddedView(o,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,o=e.length;i<o;i++){let a=e.get(i).context;a.count=o,a.first=i===0,a.last=i===o-1,a.even=i%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[i].dataIndex,a.renderIndex=i):a.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let o=this._columnDefsByName.get(i);return e.extractCellTemplate(o)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,o)=>i||o.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new Ft(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:Fe()).pipe(fe(this._onDestroy)).subscribe(o=>{this._stickyStyler.direction=o,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?St:wt;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Ae(0,i),fe(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(o,r)=>this._measureRangeSize(o,r)}),qe([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(fe(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let s=r.elements[a];if(s){let c=r.offsets[a],l=o!==0?Math.max(o-c,c):-c;for(let p of s)p.style.top=`${-l}px`}}}),qe([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(fe(this._onDestroy)).subscribe(([o,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let s=r.elements[a];if(s)for(let c of s)c.style.bottom=`${o+r.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let o=this._noDataRowOutlet.viewContainer;if(i){let r=o.createEmbeddedView(e.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let c=0;c<s.length;c++)s[c].classList.add(...e._cellClassNames)}}else o.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let o=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<o.start||e.end>o.end;let a=e.start-o.start,s=e.end-e.start,c,l;for(let g=0;g<s;g++){let v=r.get(g+a);if(v&&v.rootNodes.length){c=l=v.rootNodes[0];break}}for(let g=s-1;g>-1;g--){let v=r.get(g+a);if(v&&v.rootNodes.length){l=v.rootNodes[v.rootNodes.length-1];break}}let p=c?.getBoundingClientRect?.(),_=l?.getBoundingClientRect?.();return p&&_?_.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,o,r){if(i&1&&Ke(r,Ni,5)(r,Te,5)(r,lt,5)(r,He,5)(r,Nt,5),i&2){let a;W(a=X())&&(o._noDataRow=a.first),W(a=X())&&(o._contentColumnDefs=a),W(a=X())&&(o._contentRowDefs=a),W(a=X())&&(o._contentHeaderRowDefs=a),W(a=X())&&(o._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,o){i&2&&N("cdk-table-fixed-layout",o.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",q],fixedLayout:[2,"fixedLayout","fixedLayout",q],recycleRows:[2,"recycleRows","recycleRows",q]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[U([{provide:te,useExisting:n},{provide:je,useValue:null}])],ngContentSelectors:Nn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,o){i&1&&(_e(An),K(0),K(1,1),k(2,Bn,1,0),k(3,Vn,7,0)(4,Ln,4,0)),i&2&&(f(2),E(o._isServer?2:-1),f(),E(o._isNativeHtmlTable?3:4))},dependencies:[zt,Lt,Ht,jt],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function rt(n,t){return n.concat(Array.from(t))}function Pi(n,t){let e=t.toUpperCase(),i=n.viewContainer.element.nativeElement;for(;i;){let o=i.nodeType===1?i.nodeName:null;if(o===e)return i;if(o==="TABLE")break;i=i.parentNode}return null}var Bi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[ze]})}return n})();var jn=[[["caption"]],[["colgroup"],["col"]],"*"],Hn=["caption","colgroup, col","*"];function Wn(n,t){n&1&&K(0,2)}function Xn(n,t){n&1&&(h(0,"thead",0),M(1,1),d(),h(2,"tbody",2),M(3,3)(4,4),d(),h(5,"tfoot",0),M(6,5),d())}function $n(n,t){n&1&&M(0,1)(1,3)(2,4)(3,5)}var Vi=(()=>{class n extends Wt{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,o){i&2&&N("mat-table-fixed-layout",o.fixedLayout)},exportAs:["matTable"],features:[U([{provide:Wt,useExisting:n},{provide:te,useExisting:n},{provide:je,useValue:null}]),D],ngContentSelectors:Hn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,o){i&1&&(_e(jn),K(0),K(1,1),k(2,Wn,1,0),k(3,Xn,7,0)(4,$n,4,0)),i&2&&(f(2),E(o._isServer?2:-1),f(),E(o._isNativeHtmlTable?3:4))},dependencies:[zt,Lt,Ht,jt],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),Li=(()=>{class n extends st{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["","matCellDef",""]],features:[U([{provide:st,useExisting:n}]),D]})}return n})(),zi=(()=>{class n extends ct{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["","matHeaderCellDef",""]],features:[U([{provide:ct,useExisting:n}]),D]})}return n})();var ji=(()=>{class n extends Te{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[U([{provide:Te,useExisting:n}]),D]})}return n})(),Hi=(()=>{class n extends Fi{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[D]})}return n})();var Wi=(()=>{class n extends Ai{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[D]})}return n})();var Xi=(()=>{class n extends He{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",q]},features:[U([{provide:He,useExisting:n}]),D]})}return n})();var $i=(()=>{class n extends lt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=y({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[U([{provide:lt,useExisting:n}]),D]})}return n})(),Ui=(()=>{class n extends Bt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[U([{provide:Bt,useExisting:n}]),D],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&M(0,0)},dependencies:[Re],encapsulation:2})}return n})();var qi=(()=>{class n extends Vt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[U([{provide:Vt,useExisting:n}]),D],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,o){i&1&&M(0,0)},dependencies:[Re],encapsulation:2})}return n})();var Yi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[Bi,I]})}return n})();function qn(n,t){n&1&&Oe(0,"div",2)}var Yn=new F("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Qi=(()=>{class n{_elementRef=m(R);_ngZone=m(G);_changeDetectorRef=m(Pe);_renderer=m(Me);_cleanupTransitionEnd;constructor(){let e=et(),i=m(Yn,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Gi(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Gi(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ve;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(he("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Be("mat-"+o.color),N("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",ge],bufferValue:[2,"bufferValue","bufferValue",ge],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(Ce(0,"div",0),Oe(1,"div",1),k(2,qn,1,0,"div",2),we(),Ce(3,"div",3),Oe(4,"span",4),we(),Ce(5,"div",5),Oe(6,"span",4),we()),i&2&&(f(),ce("flex-basis",o._getBufferBarFlexBasis()),f(),E(o.mode==="buffer"?2:-1),f(),ce("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Gi(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var Ki=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[I]})}return n})();var Qn=["determinateSpinner"];function Kn(n,t){if(n&1&&(Qe(),h(0,"svg",11),pe(1,"circle",12),d()),n&2){let e=w();he("viewBox",e._viewBox()),f(),ce("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),he("r",e._circleRadius())}}var Zn=new F("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Zi})}),Zi=100,Jn=10,Ji=(()=>{class n{_elementRef=m(R);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(Zn),i=et(),o=this._elementRef.nativeElement;this._noopAnimations=i==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&i==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Zi;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Jn)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,o){if(i&1&&Ne(Qn,5),i&2){let r;W(r=X())&&(o._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(i,o){i&2&&(he("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),Be("mat-"+o.color),ce("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),N("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",ge],diameter:[2,"diameter","diameter",ge],strokeWidth:[2,"strokeWidth","strokeWidth",ge]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,o){if(i&1&&(H(0,Kn,2,8,"ng-template",null,0,ci),h(2,"div",2,1),Qe(),h(4,"svg",3),pe(5,"circle",4),d()(),ii(),h(6,"div",5)(7,"div",6)(8,"div",7),M(9,8),d(),h(10,"div",9),M(11,8),d(),h(12,"div",10),M(13,8),d()()()),i&2){let r=Ze(1);f(4),he("viewBox",o._viewBox()),f(),ce("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),he("r",o._circleRadius()),f(4),oe("ngTemplateOutlet",r),f(2),oe("ngTemplateOutlet",r),f(2),oe("ngTemplateOutlet",r)}},dependencies:[mi],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var en=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[I]})}return n})();var tn=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var io=new F("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var nn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({providers:[tn,{provide:io,useValue:{separatorKeyCodes:[13]}}],imports:[Di,I]})}return n})();var We=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Xt=class extends We{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,i,o,r){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=o,this.bindings=r||null}},dt=class extends We{templateRef;viewContainerRef;context;injector;constructor(t,e,i,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},$t=class extends We{element;constructor(t){super(),this.element=t instanceof R?t.nativeElement:t}},Ut=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Xt)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof dt)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof $t)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ht=class extends Ut{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,o=i.get(oi,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,o=t.injector||this._defaultInjector||ie.NULL,r=o.get(Ge,i.injector);e=di(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(i);o!==-1&&e.remove(o)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var on=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({})}return n})();var rn=yi();function pn(n){return new pt(n.get(De),n.get(j))}var pt=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=S(-this._previousScrollPosition.left),t.style.top=S(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,o=e.style,r=i.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),rn&&(i.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),rn&&(i.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function mn(n,t){return new mt(n.get(Tt),n.get(G),n.get(De),t)}var mt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Ye(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Xe=class{enable(){}disable(){}attach(){}};function qt(n,t){return t.some(e=>{let i=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,a=n.left>e.right;return i||o||r||a})}function an(n,t){return t.some(e=>{let i=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,a=n.right>e.right;return i||o||r||a})}function un(n,t){return new ut(n.get(Tt),n.get(De),n.get(G),t)}var ut=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();qt(e,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fn=(()=>{class n{_injector=m(ie);constructor(){}noop=()=>new Xe;close=e=>mn(this._injector,e);block=()=>pn(this._injector);reposition=e=>un(this._injector,e);static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ft=class{positionStrategy;scrollStrategy=new Xe;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var _t=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var _n=(()=>{class n{_attachedOverlays=[];_document=m(j);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gn=(()=>{class n extends _n{_ngZone=m(G);_renderer=m(be).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vn=(()=>{class n extends _n{_platform=m(me);_ngZone=m(G);_renderer=m(be).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,"pointerdown",this._pointerDownListener,o),r.listen(i,"click",this._clickListener,o),r.listen(i,"auxclick",this._clickListener,o),r.listen(i,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Mt(e)};_clickListener=e=>{let i=Mt(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(sn(s.overlayElement,i)||sn(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function sn(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var yn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),bn=(()=>{class n{_platform=m(me);_containerElement;_document=m(j);_styleLoader=m(It);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ot()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement("div");i.classList.add(e),Ot()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(yn)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,o){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Gt(n){return n&&n.nodeType===1}var gt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new T;_attachments=new T;_detachments=new T;_positionStrategy;_scrollStrategy;_locationChanges=$e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new T;_outsidePointerEvents=new T;_afterNextRenderRef;constructor(t,e,i,o,r,a,s,c,l,p=!1,_,g){this._portalOutlet=t,this._host=e,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=p,this._injector=_,this._renderer=g,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ne(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=ue(ue({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Ee(ue({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=S(this._config.width),t.height=S(this._config.height),t.minWidth=S(this._config.minWidth),t.minHeight=S(this._config.minHeight),t.maxWidth=S(this._config.maxWidth),t.maxHeight=S(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Gt(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Yt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let o=Pt(e||[]).filter(r=>!!r);o.length&&(i?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=ne(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},cn="cdk-overlay-connected-position-bounding-box",no=/([A-Za-z%]+)$/;function Cn(n,t){return new vt(t,n.get(De),n.get(j),n.get(me),n.get(bn))}var vt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new T;_resizeSubscription=$e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,o,r){this._viewportRuler=e,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(cn),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(t,o,s),l=this._getOverlayPoint(c,e,s),p=this._getOverlayFit(l,e,i,s);if(p.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(p,l,i)){r.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<p.visibleArea)&&(a={overlayFit:p,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(r.length){let s=null,c=-1;for(let l of r){let p=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);p>c&&(c=p,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ke(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(cn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof R?this._origin.nativeElement:Gt(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let o;if(i.originX=="center")o=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,s=this._isRtl()?t.left:t.right;o=i.originX=="start"?a:s}e.left<0&&(o-=e.left);let r;return i.originY=="center"?r=t.top+t.height/2:r=i.originY=="top"?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,i){let o;i.overlayX=="center"?o=-e.width/2:i.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return i.overlayY=="center"?r=-e.height/2:r=i.overlayY=="top"?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,i,o){let r=dn(e),{x:a,y:s}=t,c=this._getOffset(o,"x"),l=this._getOffset(o,"y");c&&(a+=c),l&&(s+=l);let p=0-a,_=a+r.width-i.width,g=0-s,v=s+r.height-i.height,P=this._subtractOverflows(r.width,p,_),L=this._subtractOverflows(r.height,g,v),V=P*L;return{visibleArea:V,isCompletelyWithinViewport:r.width*r.height===V,fitsInViewportVertically:L===r.height,fitsInViewportHorizontally:P==r.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let o=i.bottom-e.y,r=i.right-e.x,a=ln(this._overlayRef.getConfig().minHeight),s=ln(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||a!=null&&a<=o,l=t.fitsInViewportHorizontally||s!=null&&s<=r;return c&&l}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=dn(e),r=this._viewportRect,a=Math.max(t.x+o.width-r.width,0),s=Math.max(t.y+o.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),l=Math.max(r.left-i.left-t.x,0),p=0,_=0;return o.width<=r.width?p=l||-a:p=t.x<this._getViewportMarginStart()?r.left-i.left-t.x:0,o.height<=r.height?_=c||-s:_=t.y<this._getViewportMarginTop()?r.top-i.top-t.y:0,this._previousPushAmount={x:p,y:_},{x:t.x+p,y:t.y+_}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!oo(this._lastScrollVisibility,i)){let o=new _t(t,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,o=this._isRtl(),r,a,s;if(e.overlayY==="top")a=t.y,r=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-s+this._getViewportMarginTop();else{let v=Math.min(i.bottom-t.y+i.top,t.y),P=this._lastBoundingBoxSize.height;r=v*2,a=t.y-v,r>P&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-P/2)}let c=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,l=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,p,_,g;if(l)g=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),p=t.x-this._getViewportMarginStart();else if(c)_=t.x,p=i.right-t.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-t.x+i.left,t.x),P=this._lastBoundingBoxSize.width;p=v*2,_=t.x-v,p>P&&!this._isInitialRender&&!this._growAfterOpen&&(_=t.x-P/2)}return{top:a,left:_,bottom:s,right:g,width:p,height:r}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=S(i.width),o.height=S(i.height),o.top=S(i.top)||"auto",o.bottom=S(i.bottom)||"auto",o.left=S(i.left)||"auto",o.right=S(i.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=S(r)),a&&(o.maxWidth=S(a))}this._lastBoundingBoxSize=i,ke(this._boundingBox.style,o)}_resetBoundingBoxStyles(){ke(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ke(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let p=this._viewportRuler.getViewportScrollPosition();ke(i,this._getExactOverlayY(e,t,p)),ke(i,this._getExactOverlayX(e,t,p))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(o?i.maxHeight=S(a.maxHeight):r&&(i.maxHeight="")),a.maxWidth&&(o?i.maxWidth=S(a.maxWidth):r&&(i.maxWidth="")),ke(this._pane.style,i)}_getExactOverlayY(t,e,i){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=S(r.y);return o}_getExactOverlayX(t,e,i){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let a;if(this._isRtl()?a=t.overlayX==="end"?"left":"right":a=t.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;o.right=`${s-(r.x+this._overlayRect.width)}px`}else o.left=S(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:an(t,i),isOriginOutsideView:qt(t,i),isOverlayClipped:an(e,i),isOverlayOutsideView:qt(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,o)=>i-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Pt(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof R)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let i=e.getBoundingClientRect();return t&&(e.style.display=""),i}};function ke(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function ln(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(no);return!e||e==="px"?parseFloat(t):null}return n||null}function dn(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function oo(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var hn="cdk-global-overlay-wrapper";function wn(n){return new yt}var yt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(hn),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:s}=i,c=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),p=this._xPosition,_=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",v="",P="",L="";c?L="flex-start":p==="center"?(L="center",g?P=_:v=_):g?p==="left"||p==="end"?(L="flex-end",v=_):(p==="right"||p==="start")&&(L="flex-start",P=_):p==="left"||p==="start"?(L="flex-start",v=_):(p==="right"||p==="end")&&(L="flex-end",P=_),t.position=this._cssPosition,t.marginLeft=c?"0":v,t.marginTop=l?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":P,e.justifyContent=L,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(hn),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Sn=(()=>{class n{_injector=m(ie);constructor(){}global(){return wn()}flexibleConnectedTo(e){return Cn(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),xn=new F("OVERLAY_DEFAULT_CONFIG");function Dn(n,t){n.get(It).load(yn);let e=n.get(bn),i=n.get(j),o=n.get(xi),r=n.get(Rt),a=n.get(Le),s=n.get(Me,null,{optional:!0})||n.get(be).createRenderer(null,null),c=new ft(t),l=n.get(xn,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=t?.usePopover??l:c.usePopover=!1;let p=i.createElement("div"),_=i.createElement("div");p.id=o.getId("cdk-overlay-"),p.classList.add("cdk-overlay-pane"),_.appendChild(p),c.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let g=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Gt(g)?g.after(_):g?.type==="parent"?g.element.appendChild(_):e.getContainerElement().appendChild(_),new gt(new ht(p,r,n),_,p,c,n.get(G),n.get(gn),i,n.get(hi),n.get(vn),t?.disableAnimations??n.get(ni,null,{optional:!0})==="NoopAnimations",n.get(Ge),s)}var Rn=(()=>{class n{scrollStrategies=m(fn);_positionBuilder=m(Sn);_injector=m(ie);constructor(){}create(e){return Dn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({providers:[Rn],imports:[I,on,ze,ze]})}return n})();var kn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=C({type:n});static \u0275inj=b({imports:[Si,Qt,I,nt]})}return n})();var ro={codigo_usuario:"codigoUsuario",codigo_contribuinte:"codigoContribuinte",ano:"ano",mes:"mes",cpf_cnpj_prestador:"cpfCnpjPrestador",tipo_trib:"tipoTrib",alq_iss_sn:"alqIssSN",reg_ap_trib_sn:"regApTribSN",num_rps:"numRps",ser_rps:"serRps",dt_emi:"dtEmi",ret_fonte:"retFonte",cod_srv:"codSrv",discr_srv:"discrSrv",vl_nfs:"vlNfs",vl_ded:"vlDed",vl_bas_calc:"vlBasCalc",alq_iss:"alqIss",vl_iss:"vlIss",vl_iss_ret:"vlIssRet",cpf_cnpj_tom:"cpfCnpjTom",raz_soc_tom:"razSocTom",log_tom:"logTom",num_end_tom:"numEndTom",bairro_tom:"bairroTom",mun_tom:"munTom",sigla_uf_tom:"siglaUfTom",cep_tom:"cepTom",email_tom:"emailTom",srv_ctn:"srvCtn",srv_nbs:"srvNbs",cnae:"cnae",anexo_sn:"anexoSn",rtc_ind_cod_ope:"rtcIndCodOpe",rtc_cst_ibs_cbs:"rtcCstIbsCbs",rtc_cclass_trib:"rtcCClassTrib"},ao=new Set(["ano","mes","tipoTrib","alqIssSN","regApTribSN","numRps","vlNfs","vlDed","vlBasCalc","alqIss","vlIss","vlIssRet"]),so="sp.poa",bt=class n{get prefeitura(){return so}async parse(t){let e=await t.text(),i=[],o=e.split(/\r?\n/).filter(l=>l.trim().length>0);if(o.length<2)return{data:[],errors:["O arquivo CSV deve conter cabe\xE7alho + pelo menos 1 linha de dados."]};let r=this.detectSeparator(o[0]),a=this.splitLine(o[0],r),s=this.mapHeaders(a,i),c=[];for(let l=1;l<o.length;l++){let p=this.splitLine(o[l],r);if(this.isTemplateRow(p))continue;let _=this.buildRow(l,p,s,a.length,i);_&&c.push(_)}return{data:c,errors:i}}detectSeparator(t){let e=(t.match(/;/g)||[]).length,i=(t.match(/,/g)||[]).length;return e>=i?";":","}isTemplateRow(t){let e=(t[0]||"").trim().toLowerCase();return!!(e.startsWith("codigo do")||e.startsWith("c\xF3digo do")||e==="seu_codigo_usuario")}splitLine(t,e){let i=[],o="",r=!1;for(let a of t)a==='"'?r=!r:a===e&&!r?(i.push(o.trim()),o=""):o+=a;return i.push(o.trim()),i}normalize(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"")}fixScientificCpfCnpj(t){if(/[eE][+\-]?\d+/.test(t)){let e=parseFloat(t.replace(",","."));if(!isNaN(e)){let i=e.toFixed(0);return i.length<=11?i.padStart(11,"0"):i.padStart(14,"0")}}return t}mapHeaders(t,e){let i=new Map,o=new Set;t.forEach((a,s)=>{let c=this.normalize(a),l=ro[c];l&&(i.set(s,l),o.add(c))});let r=["codigo_usuario","codigo_contribuinte","ano","mes","cpf_cnpj_prestador","tipo_trib","num_rps","dt_emi","cod_srv","discr_srv","vl_nfs","alq_iss","cpf_cnpj_tom","raz_soc_tom","log_tom","num_end_tom","bairro_tom","mun_tom","sigla_uf_tom","cep_tom","srv_ctn","srv_nbs","rtc_ind_cod_ope","rtc_cst_ibs_cbs","rtc_cclass_trib"];for(let a of r)o.has(a)||e.push(`Coluna obrigat\xF3ria n\xE3o encontrada: "${a}"`);return i}buildRow(t,e,i,o,r){if(e.length<o*.5)return r.push(`Linha ${t+1}: n\xFAmero de colunas insuficiente (${e.length}).`),null;let a={linha:t};return i.forEach((s,c)=>{let l=c<e.length?e[c]:"";if(ao.has(s)){let p=parseFloat(l.replace(",","."));a[s]=isNaN(p)?0:p}else a[s]=l}),a.cpfCnpjPrestador=this.fixScientificCpfCnpj(a.cpfCnpjPrestador||""),a.cpfCnpjTom=this.fixScientificCpfCnpj(a.cpfCnpjTom||""),a.retFonte||(a.retFonte="NAO"),a.vlDed||(a.vlDed=0),a.vlBasCalc||(a.vlBasCalc=(a.vlNfs||0)-(a.vlDed||0)),a.vlIssRet||(a.vlIssRet=0),!a.vlIss&&a.retFonte==="NAO"&&(a.vlIss=a.vlBasCalc*(a.alqIss||0)/100),a.vlIss||(a.vlIss=0),a.serRps||(a.serRps=""),a.emailTom||(a.emailTom=""),a.alqIssSN||(a.alqIssSN=0),a.regApTribSN||(a.regApTribSN=0),a}static \u0275fac=function(e){return new(e||n)};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})};var lo="/ws-proxy/nfe",Ct=class n{constructor(t){this.http=t}enviarLoteDps(t){if(t.length===0)return new Ue(o=>{o.next({retorno:!1,protocolo:"",messages:[{id:"ERRO",type:0,description:"Nenhum DPS para enviar",linErr:0}]}),o.complete()});let e=this.buildProcessarpsXml(t);console.log("[SOAP-NFSE] XML enviado:",e);let i=new gi({"Content-Type":"text/xml; charset=utf-8",SOAPAction:"NFeaction/AWS_NFE.PROCESSARPS"});return this.http.post(lo,e,{headers:i,responseType:"text"}).pipe(ei(o=>(console.log("[SOAP-NFSE] Resposta WS:",o),this.parseProcessarpsResponse(o))))}buildProcessarpsXml(t){let e=t[0],i=t.map(l=>l.dtEmi),o=i[0]||"",r=i[i.length-1]||o,a=t.reduce((l,p)=>({qtd:l.qtd+1,vlNfs:l.vlNfs+(p.vlNfs||0),vlIss:l.vlIss+(p.vlIss||0),vlDed:l.vlDed+(p.vlDed||0),vlIssRet:l.vlIssRet+(p.vlIssRet||0)}),{qtd:0,vlNfs:0,vlIss:0,vlDed:0,vlIssRet:0}),s=t[0].numRps||1,c=t.map((l,p)=>this.buildReg20Item(l,s+p)).join("");return`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:nfe="NFe">
  <soap:Body>
    <nfe:ws_nfe.PROCESSARPS>
      <nfe:Sdt_processarpsin>
        <nfe:Login>
          <nfe:CodigoUsuario>${this.esc(e.codigoUsuario)}</nfe:CodigoUsuario>
          <nfe:CodigoContribuinte>${this.esc(e.codigoContribuinte)}</nfe:CodigoContribuinte>
        </nfe:Login>
        <nfe:SDTRPS>
          <nfe:Ano>${e.ano}</nfe:Ano>
          <nfe:Mes>${e.mes}</nfe:Mes>
          <nfe:CPFCNPJ>${this.esc(e.cpfCnpjPrestador)}</nfe:CPFCNPJ>
          <nfe:DTIni>${this.esc(o)}</nfe:DTIni>
          <nfe:DTFin>${this.esc(r)}</nfe:DTFin>
          <nfe:TipoTrib>${e.tipoTrib}</nfe:TipoTrib>
          <nfe:DtAdeSN />
          <nfe:AlqIssSN_IP>${e.alqIssSN?this.fmtNum(e.alqIssSN):""}</nfe:AlqIssSN_IP>
          <nfe:RegApTribSN>${e.regApTribSN||""}</nfe:RegApTribSN>
          <nfe:TribTpSusp />
          <nfe:TribProcSusp />
          <nfe:Versao>4.00</nfe:Versao>
          <nfe:Reg20>${c}
          </nfe:Reg20>
          <nfe:Reg90>
            <nfe:QtdRegNormal>${a.qtd}</nfe:QtdRegNormal>
            <nfe:ValorNFS>${this.fmtNum(a.vlNfs)}</nfe:ValorNFS>
            <nfe:ValorISS>${this.fmtNum(a.vlIss)}</nfe:ValorISS>
            <nfe:ValorDed>${this.fmtNum(a.vlDed)}</nfe:ValorDed>
            <nfe:ValorIssRetTom>${this.fmtNum(a.vlIssRet)}</nfe:ValorIssRetTom>
            <nfe:QtdReg30>0</nfe:QtdReg30>
            <nfe:ValorTributos>0,00</nfe:ValorTributos>
            <nfe:QtdReg40>${t.length*4}</nfe:QtdReg40>
            <nfe:QtdReg50>0</nfe:QtdReg50>
          </nfe:Reg90>
        </nfe:SDTRPS>
      </nfe:Sdt_processarpsin>
    </nfe:ws_nfe.PROCESSARPS>
  </soap:Body>
</soap:Envelope>`}buildReg20Item(t,e){return`
            <nfe:Reg20Item>
              <nfe:TipoNFS>RPS</nfe:TipoNFS>
              <nfe:NumRps>${e}</nfe:NumRps>
              <nfe:SerRps>${this.esc(t.serRps||"")}</nfe:SerRps>
              <nfe:DtEmi>${this.esc(t.dtEmi)}</nfe:DtEmi>
              <nfe:RetFonte>${this.esc(t.retFonte)}</nfe:RetFonte>
              <nfe:CodSrv>${this.esc(t.codSrv)}</nfe:CodSrv>
              <nfe:DiscrSrv>${this.esc(t.discrSrv)}</nfe:DiscrSrv>
              <nfe:VlNFS>${this.fmtNum(t.vlNfs)}</nfe:VlNFS>
              <nfe:VlDed>${this.fmtNum(t.vlDed)}</nfe:VlDed>
              <nfe:DiscrDed />
              <nfe:VlBasCalc>${this.fmtNum(t.vlBasCalc)}</nfe:VlBasCalc>
              <nfe:AlqIss>${this.fmtNum(t.alqIss)}</nfe:AlqIss>
              <nfe:VlIss>${this.fmtNum(t.vlIss)}</nfe:VlIss>
              <nfe:VlIssRet>${this.fmtNum(t.vlIssRet)}</nfe:VlIssRet>
              <nfe:CpfCnpTom>${this.esc(t.cpfCnpjTom)}</nfe:CpfCnpTom>
              <nfe:RazSocTom>${this.esc(t.razSocTom)}</nfe:RazSocTom>
              <nfe:TipoLogtom>${this.extractTipoLog(t.logTom)}</nfe:TipoLogtom>
              <nfe:LogTom>${this.esc(t.logTom)}</nfe:LogTom>
              <nfe:NumEndTom>${this.esc(t.numEndTom)}</nfe:NumEndTom>
              <nfe:ComplEndTom />
              <nfe:BairroTom>${this.esc(t.bairroTom)}</nfe:BairroTom>
              <nfe:MunTom>${this.esc(t.munTom)}</nfe:MunTom>
              <nfe:SiglaUFTom>${this.esc(t.siglaUfTom)}</nfe:SiglaUFTom>
              <nfe:CepTom>${this.esc(t.cepTom)}</nfe:CepTom>
              <nfe:Telefone />
              <nfe:InscricaoMunicipal />
              <nfe:TipoLogLocPre />
              <nfe:LogLocPre />
              <nfe:NumEndLocPre />
              <nfe:ComplEndLocPre />
              <nfe:BairroLocPre />
              <nfe:MunLocPre />
              <nfe:SiglaUFLocpre />
              <nfe:CepLocPre />
              <nfe:Email1>${this.esc(t.emailTom||"")}</nfe:Email1>
              <nfe:Email2 />
              <nfe:Email3 />
              <nfe:MoedaTrnExt />
              <nfe:ValTrnExt />
              <nfe:Reg40>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_CTN</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(t.srvCtn)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_NBS</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(t.srvNbs)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_CNAE</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(t.cnae)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
                <nfe:Reg40Item>
                  <nfe:SiglaCpoAdc>Srv_AnexoSN</nfe:SiglaCpoAdc>
                  <nfe:ConteudoCpoAdc>${this.esc(t.anexoSn)}</nfe:ConteudoCpoAdc>
                </nfe:Reg40Item>
              </nfe:Reg40>
              <nfe:Reg60_RTC>
                <nfe:Finalidade>0</nfe:Finalidade>
                <nfe:IndConsFin>NAO</nfe:IndConsFin>
                <nfe:IndDest>SIM</nfe:IndDest>
                <nfe:IndOpeOne>NAO</nfe:IndOpeOne>
                <nfe:IndCodOpe>${this.esc(t.rtcIndCodOpe)}</nfe:IndCodOpe>
                <nfe:VlReeRepRes />
                <nfe:gIBSCBS>
                  <nfe:CST>${this.esc(t.rtcCstIbsCbs)}</nfe:CST>
                  <nfe:CClassTrib>${this.esc(t.rtcCClassTrib)}</nfe:CClassTrib>
                  <nfe:CCodCredPres />
                </nfe:gIBSCBS>
              </nfe:Reg60_RTC>
            </nfe:Reg20Item>`}parseProcessarpsResponse(t){let i=new DOMParser().parseFromString(t,"text/xml"),o=this.getTagText(i,"Retorno"),r=this.getTagText(i,"Protocolo")||"",a=[],s=i.getElementsByTagName("Message");for(let c=0;c<s.length;c++){let l=s[c];a.push({id:this.getTagText(l,"Id")||"",type:parseInt(this.getTagText(l,"Type")||"0",10),description:this.getTagText(l,"Description")||"",linErr:parseInt(this.getTagText(l,"LinErr")||"0",10)})}return{retorno:o?.toLowerCase()==="true",protocolo:r,messages:a}}getTagText(t,e){let i=t.getElementsByTagName(e);return i.length===0&&(i=t.getElementsByTagNameNS("*",e)),i.length>0?i[0].textContent:null}esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}fmtNum(t){return(t||0).toFixed(2).replace(".",",")}extractTipoLog(t){let e={rua:"RUA","r.":"RUA","r ":"RUA",avenida:"AVENIDA","av.":"AVENIDA","av ":"AVENIDA",travessa:"TRAVESSA","tv.":"TRAVESSA","trav.":"TRAVESSA",alameda:"ALAMEDA","al.":"ALAMEDA",praca:"PRACA","pca.":"PRACA",pra\u00E7a:"PRACA",rodovia:"RODOVIA","rod.":"RODOVIA",estrada:"ESTRADA","est.":"ESTRADA",largo:"LARGO","lg.":"LARGO",beco:"BECO","bc.":"BECO",vila:"VILA"},i=t.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");for(let[o,r]of Object.entries(e))if(i.startsWith(o))return r;return"RUA"}static \u0275fac=function(e){return new(e||n)(ti(vi))};static \u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"})};var po=(n,t)=>t.linha;function mo(n,t){if(n&1){let e=Ie();h(0,"mat-icon",9),u(1,"upload_file"),d(),h(2,"h3"),u(3,"Arraste o arquivo CSV aqui"),d(),h(4,"p"),u(5,"ou"),d(),h(6,"div",10)(7,"button",11),se("click",function(){Z(e);let o=Ze(16);return J(o.click())}),h(8,"mat-icon"),u(9,"folder_open"),d(),u(10," Selecionar Arquivo "),d(),h(11,"button",12),se("click",function(){Z(e);let o=w(2);return J(o.downloadModelo())}),h(12,"mat-icon"),u(13,"file_download"),d(),u(14," Baixar Modelo CSV "),d()(),h(15,"input",13,0),se("change",function(o){Z(e);let r=w(2);return J(r.onFileSelected(o))}),d(),h(17,"span",14),u(18," CSV separado por ; ou , \u2014 cada linha = 1 DPS com dados do tomador "),d()}}function uo(n,t){if(n&1){let e=Ie();h(0,"mat-icon",15),u(1,"check_circle"),d(),h(2,"h3"),u(3),d(),h(4,"p",16),u(5),Ve(6,"number"),d(),h(7,"button",17),se("click",function(){Z(e);let o=w(2);return J(o.novaEmissao())}),h(8,"mat-icon"),u(9,"swap_horiz"),d(),u(10," Trocar Arquivo "),d()}if(n&2){let e=w(2);f(3),B(e.csvFile().name),f(2),ai(" ",(e.csvFile().size/1024).toFixed(1)," KB \u2014 ",e.totalDps()," DPS(s) \u2014 Total: R$ ",Je(6,4,e.totalValor(),"1.2-2")," ")}}function fo(n,t){if(n&1&&(h(0,"p"),u(1),d()),n&2){let e=t.$implicit;f(),B(e)}}function _o(n,t){if(n&1&&(h(0,"div",8)(1,"mat-icon"),u(2,"warning"),d(),h(3,"div"),kt(4,fo,2,1,"p",null,ri),d()()),n&2){let e=w(2);f(4),Et(e.csvErrors())}}function go(n,t){if(n&1&&(h(0,"tr")(1,"td"),u(2),d(),h(3,"td"),u(4),d(),h(5,"td"),u(6),d(),h(7,"td"),u(8),d(),h(9,"td"),u(10),d(),h(11,"td",24),u(12),Ve(13,"number"),d(),h(14,"td"),u(15),d()()),n&2){let e=t.$implicit;f(2),B(e.linha),f(2),B(e.numRps||"\u2014"),f(2),B(e.razSocTom||"\u2014"),f(2),B(e.cpfCnpjTom||"\u2014"),f(2),B(e.codSrv||"\u2014"),f(2),$("R$ ",Je(13,7,e.vlNfs||0,"1.2-2")),f(3),$("",e.alqIss||0,"%")}}function vo(n,t){if(n&1){let e=Ie();h(0,"mat-card",18)(1,"div",19)(2,"mat-icon"),u(3,"table_chart"),d(),h(4,"span"),u(5),d()(),h(6,"div",20)(7,"table",21)(8,"thead")(9,"tr")(10,"th"),u(11,"#"),d(),h(12,"th"),u(13,"N\xBA DPS"),d(),h(14,"th"),u(15,"Tomador"),d(),h(16,"th"),u(17,"CPF/CNPJ Tom."),d(),h(18,"th"),u(19,"Servi\xE7o"),d(),h(20,"th"),u(21,"Valor"),d(),h(22,"th"),u(23,"Al\xEDq. ISS"),d()()(),h(24,"tbody"),kt(25,go,16,10,"tr",null,po),d()()()(),h(27,"div",22)(28,"button",23),se("click",function(){Z(e);let o=w(2);return J(o.iniciarProcessamento())}),h(29,"mat-icon"),u(30,"send"),d(),u(31),d()()}if(n&2){let e=w(2);f(5),$("Pr\xE9-visualiza\xE7\xE3o (",e.parsedRows().length," DPS)"),f(20),Et(e.parsedRows()),f(6),$(" Enviar ",e.parsedRows().length," DPS(s) ")}}function yo(n,t){if(n&1){let e=Ie();h(0,"div",2)(1,"div",4)(2,"mat-icon",5),u(3,"note_add"),d(),h(4,"h2"),u(5,"Emiss\xE3o de NFS-e (DPS)"),d(),h(6,"p",6),u(7," Envio de lote de DPS via PROCESSARPS \u2014 Po\xE1/SP "),d()(),h(8,"div",7),se("dragover",function(o){Z(e);let r=w();return J(r.onDragOver(o))})("dragleave",function(o){Z(e);let r=w();return J(r.onDragLeave(o))})("drop",function(o){Z(e);let r=w();return J(r.onDrop(o))}),k(9,mo,19,0)(10,uo,11,7),d(),k(11,_o,6,0,"div",8),k(12,vo,32,2),d()}if(n&2){let e=w();f(8),N("drag-over",e.dragOver())("has-file",e.csvFile()),f(),E(e.csvFile()?10:9),f(2),E(e.csvErrors().length>0?11:-1),f(),E(e.parsedRows().length>0?12:-1)}}function bo(n,t){n&1&&(pe(0,"mat-spinner",45),u(1," Enviando Lote de DPS... "))}function Co(n,t){n&1&&(h(0,"mat-icon",46),u(1,"task_alt"),d(),u(2," Processamento Conclu\xEDdo "))}function wo(n,t){n&1&&pe(0,"mat-progress-bar",26)}function So(n,t){n&1&&(h(0,"th",47),u(1,"Linha"),d())}function xo(n,t){if(n&1&&(h(0,"td",48)(1,"span",49),u(2),d()()),n&2){let e=t.$implicit;f(2),B(e.linha)}}function Do(n,t){n&1&&(h(0,"th",47),u(1,"Tomador"),d())}function Ro(n,t){if(n&1&&(h(0,"td",48)(1,"div",50)(2,"strong"),u(3),d(),h(4,"small"),u(5),d()()()),n&2){let e=t.$implicit;f(3),B(e.razSocTom),f(2),B(e.cpfCnpjTom)}}function ko(n,t){n&1&&(h(0,"th",47),u(1,"N\xBA DPS"),d())}function Eo(n,t){if(n&1&&(h(0,"td",48),u(1),d()),n&2){let e=t.$implicit;f(),B(e.numRps)}}function Mo(n,t){n&1&&(h(0,"th",47),u(1,"Servi\xE7o"),d())}function Oo(n,t){if(n&1&&(h(0,"td",48),u(1),d()),n&2){let e=t.$implicit;f(),B(e.codSrv)}}function Io(n,t){n&1&&(h(0,"th",47),u(1,"Valor"),d())}function Po(n,t){if(n&1&&(h(0,"td",48)(1,"strong"),u(2),Ve(3,"number"),d()()),n&2){let e=t.$implicit;f(2),$("R$ ",Je(3,1,e.vlNfs,"1.2-2"))}}function To(n,t){n&1&&(h(0,"th",47),u(1,"Status"),d())}function Fo(n,t){if(n&1&&(h(0,"td",48)(1,"span",51)(2,"mat-icon",52),u(3),d(),u(4),Ve(5,"titlecase"),d()()),n&2){let e=t.$implicit,i=w(2);f(),oe("ngClass",i.getStatusClass(e.status)),f(2),B(i.getStatusIcon(e.status)),f(),$(" ",si(5,3,e.status)," ")}}function Ao(n,t){n&1&&(h(0,"th",47),u(1,"Detalhe"),d())}function No(n,t){if(n&1&&(h(0,"td",48)(1,"span",53),u(2),d()()),n&2){let e=t.$implicit;f(2),B(e.mensagem)}}function Bo(n,t){n&1&&pe(0,"tr",54)}function Vo(n,t){if(n&1&&pe(0,"tr",55),n&2){let e=t.$implicit;N("row-sucesso",e.status==="sucesso")("row-erro",e.status==="erro")}}function Lo(n,t){if(n&1){let e=Ie();h(0,"button",56),se("click",function(){Z(e);let o=w(2);return J(o.exportarResultados())}),h(1,"mat-icon"),u(2,"download"),d(),u(3," Exportar Resultados (CSV) "),d(),h(4,"button",57),se("click",function(){Z(e);let o=w(2);return J(o.novaEmissao())}),h(5,"mat-icon"),u(6,"replay"),d(),u(7," Nova Emiss\xE3o "),d()}}function zo(n,t){if(n&1&&(h(0,"div",3)(1,"div",25)(2,"h2"),k(3,bo,2,0)(4,Co,3,0),d()(),k(5,wo,1,0,"mat-progress-bar",26),h(6,"div",27)(7,"div",28)(8,"mat-icon"),u(9,"list"),d(),h(10,"span"),u(11),d()(),h(12,"div",29)(13,"mat-icon"),u(14,"check_circle"),d(),h(15,"span"),u(16),d()(),h(17,"div",30)(18,"mat-icon"),u(19,"error"),d(),h(20,"span"),u(21),d()(),h(22,"div",31)(23,"mat-icon"),u(24,"schedule"),d(),h(25,"span"),u(26),d()()(),h(27,"mat-card",32)(28,"table",33),re(29,34),H(30,So,2,0,"th",35)(31,xo,3,1,"td",36),ae(),re(32,37),H(33,Do,2,0,"th",35)(34,Ro,6,2,"td",36),ae(),re(35,38),H(36,ko,2,0,"th",35)(37,Eo,2,1,"td",36),ae(),re(38,39),H(39,Mo,2,0,"th",35)(40,Oo,2,1,"td",36),ae(),re(41,40),H(42,Io,2,0,"th",35)(43,Po,4,4,"td",36),ae(),re(44,41),H(45,To,2,0,"th",35)(46,Fo,6,5,"td",36),ae(),re(47,42),H(48,Ao,2,0,"th",35)(49,No,3,1,"td",36),ae(),H(50,Bo,1,0,"tr",43)(51,Vo,1,4,"tr",44),d()(),h(52,"div",22),k(53,Lo,8,0),d()()),n&2){let e=w();f(3),E(e.step()==="processando"&&e.processing()?3:e.step()==="concluido"?4:-1),f(2),E(e.processing()?5:-1),f(6),$("",e.totalLinhas()," Total"),f(5),$("",e.totalSucesso()," Sucesso"),f(5),$("",e.totalErro()," Erro"),f(5),$("",e.totalPendente()," Pendente"),f(2),oe("dataSource",e.processItems()),f(22),oe("matHeaderRowDef",e.displayedColumns),f(),oe("matRowDefColumns",e.displayedColumns),f(2),E(e.step()==="concluido"?53:-1)}}var jo=["codigo_usuario","codigo_contribuinte","ano","mes","cpf_cnpj_prestador","tipo_trib","alq_iss_sn","reg_ap_trib_sn","num_rps","ser_rps","dt_emi","ret_fonte","cod_srv","discr_srv","vl_nfs","alq_iss","cpf_cnpj_tom","raz_soc_tom","log_tom","num_end_tom","bairro_tom","mun_tom","sigla_uf_tom","cep_tom","email_tom","srv_ctn","srv_nbs","cnae","anexo_sn","rtc_ind_cod_ope","rtc_cst_ibs_cbs","rtc_cclass_trib"],Ho=["C\xF3digo do Usu\xE1rio (Editar Perfil no sistema)","C\xF3digo do Contribuinte (Consulta do Contribuinte)","Ano compet\xEAncia (4 d\xEDgitos)","M\xEAs compet\xEAncia (1 a 12)","CPF/CNPJ do prestador (com zeros \xE0 esquerda)","Tipo tributa\xE7\xE3o: 1=Tributado, 4=Simples Nacional, etc.","Al\xEDquota ISS do Simples Nacional (obrigat\xF3rio se tipo_trib=4)","Regime apura\xE7\xE3o SN: 1=SS pelo SN, 2=Federal SN + ISS NFSE, 3=Pela NFSe (obrigat\xF3rio se tipo_trib=4)","N\xFAmero sequencial do DPS","S\xE9rie do DPS (opcional)","Data emiss\xE3o DPS (dd/mm/aaaa)","ISS retido pelo tomador? SIM ou NAO","C\xF3digo do servi\xE7o (formato prefeitura, ex: 08.01)","Discrimina\xE7\xE3o do servi\xE7o prestado","Valor da nota/servi\xE7o","Al\xEDquota ISS (%)","CPF/CNPJ do tomador (ou CONSUMIDOR/EXTERIOR)","Raz\xE3o social do tomador","Logradouro completo do tomador","N\xFAmero endere\xE7o do tomador","Bairro do tomador","Munic\xEDpio do tomador (nome ou [IBGE]9999999)","UF do tomador (ex: SP)","CEP do tomador (8 d\xEDgitos)","Email do tomador (opcional)","C\xF3digo de Tributa\xE7\xE3o Nacional (9 d\xEDgitos, sem pontua\xE7\xE3o)","C\xF3digo NBS (9 d\xEDgitos, sem pontua\xE7\xE3o)","C\xF3digo CNAE (7 d\xEDgitos, sem pontua\xE7\xE3o, ex: 8511200)","Anexo do Simples Nacional (ex: III)","C\xF3digo opera\xE7\xE3o RTC (6 d\xEDgitos \u2014 anexo VII)","CST IBS/CBS (3 d\xEDgitos)","Classifica\xE7\xE3o Tribut\xE1ria (6 d\xEDgitos)"],Wo=["SEU_CODIGO_USUARIO","CODIGO_CONTRIBUINTE","2026","4","00000000000100","4","3.25","1","1","A1","01/04/2026","NAO","08.01","Ensino Regular pr\xE9-escolar, fundamental, m\xE9dio e superior","1000.00","3.25","00000000000100","Raz\xE3o Social do Tomador","Rua Exemplo","100","Centro","POA","SP","08550000","email@exemplo.com","080101000","122011900","8511200","III","030101","01","200028"],En=class n{constructor(t,e){this.csvParser=t;this.soapService=e}step=le("upload");dragOver=le(!1);csvFile=le(null);csvErrors=le([]);parsedRows=le([]);processItems=le([]);processing=le(!1);displayedColumns=["linha","tomador","numRps","codSrv","valor","status","mensagem"];totalLinhas=Se(()=>this.processItems().length);totalSucesso=Se(()=>this.processItems().filter(t=>t.status==="sucesso").length);totalErro=Se(()=>this.processItems().filter(t=>t.status==="erro").length);totalPendente=Se(()=>this.processItems().filter(t=>t.status==="pendente"||t.status==="processando").length);totalDps=Se(()=>this.parsedRows().length);totalValor=Se(()=>this.parsedRows().reduce((t,e)=>t+(e.vlNfs||0),0));downloadModelo(){let e=jo.join(";"),i=Ho.join(";"),o=Wo.join(";"),r=[e,i,o].join(`
`),a=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8;"});this.triggerDownload(a,"modelo_emissao_nfse_dps.csv")}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.dragOver.set(!0)}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.dragOver.set(!1)}onDrop(t){t.preventDefault(),t.stopPropagation(),this.dragOver.set(!1);let e=t.dataTransfer?.files;e?.length&&this.handleFile(e[0])}onFileSelected(t){let e=t.target;e.files?.length&&this.handleFile(e.files[0])}async handleFile(t){if(!t.name.toLowerCase().endsWith(".csv")){this.csvErrors.set(["Apenas arquivos .csv s\xE3o aceitos."]);return}this.csvFile.set(t),this.csvErrors.set([]);let{data:e,errors:i}=await this.csvParser.parse(t);if(i.length>0&&(this.csvErrors.set(i),e.length===0))return;this.parsedRows.set(e);let o=e.map(r=>({linha:r.linha,numRps:r.numRps,razSocTom:r.razSocTom||"\u2014",cpfCnpjTom:r.cpfCnpjTom||"\u2014",vlNfs:r.vlNfs||0,codSrv:r.codSrv||"\u2014",status:"pendente",mensagem:"Aguardando envio"}));this.processItems.set(o)}iniciarProcessamento(){let t=this.parsedRows();t.length!==0&&(this.processing.set(!0),this.step.set("processando"),this.updateAllStatus("processando","Enviando lote de DPS..."),this.soapService.enviarLoteDps(t).subscribe({next:e=>{if(e.retorno)this.updateAllStatus("sucesso",`Protocolo: ${e.protocolo}`);else{let o=this.processItems().map(r=>{let a=e.messages.find(c=>c.linErr===r.linha);if(a)return Ee(ue({},r),{status:"erro",mensagem:a.description});let s=e.messages.find(c=>c.linErr===0);return Ee(ue({},r),{status:"erro",mensagem:s?.description||"Lote rejeitado pelo WebService"})});this.processItems.set(o)}this.processing.set(!1),this.step.set("concluido")},error:e=>{this.updateAllStatus("erro",e.error?.message||"Erro ao enviar lote de DPS"),this.processing.set(!1),this.step.set("concluido")}}))}exportarResultados(){let t=this.processItems(),e="Linha;Num DPS;Tomador;CPF/CNPJ Tom;Servi\xE7o;Valor;Status;Mensagem",i=t.map(a=>`${a.linha};${a.numRps};${a.razSocTom};${a.cpfCnpjTom};${a.codSrv};${a.vlNfs};${a.status};${a.mensagem}`),o=[e,...i].join(`
`),r=new Blob(["\uFEFF"+o],{type:"text/csv;charset=utf-8;"});this.triggerDownload(r,"Resultado_NFS-e_DPS.csv")}novaEmissao(){this.step.set("upload"),this.csvFile.set(null),this.csvErrors.set([]),this.parsedRows.set([]),this.processItems.set([]),this.processing.set(!1)}getStatusIcon(t){switch(t){case"pendente":return"schedule";case"processando":return"sync";case"sucesso":return"check_circle";case"erro":return"error"}}getStatusClass(t){return`status-${t}`}updateAllStatus(t,e){this.processItems.update(i=>i.map(o=>Ee(ue({},o),{status:t,mensagem:e})))}triggerDownload(t,e){let i=URL.createObjectURL(t),o=document.createElement("a");o.href=i,o.download=e,o.click(),URL.revokeObjectURL(i)}static \u0275fac=function(e){return new(e||n)(Dt(bt),Dt(Ct))};static \u0275cmp=x({type:n,selectors:[["app-emissao-nfse"]],decls:3,vars:2,consts:[["fileInput",""],[1,"emissao-page"],[1,"upload-section"],[1,"processing-section"],[1,"page-header"],[1,"header-icon"],[1,"subtitle"],[1,"drop-zone",3,"dragover","dragleave","drop"],[1,"errors-panel"],[1,"drop-icon"],[1,"drop-actions"],["mat-flat-button","","color","primary",1,"btn-select",3,"click"],["mat-stroked-button","",1,"btn-modelo",3,"click"],["type","file","accept",".csv","hidden","",3,"change"],[1,"hint"],[1,"drop-icon","success"],[1,"file-info"],["mat-stroked-button","",1,"btn-change",3,"click"],["appearance","outlined",1,"preview-card"],[1,"preview-header"],[1,"preview-table-wrapper"],[1,"preview-table"],[1,"action-bar"],["mat-flat-button","","color","primary",1,"btn-processar",3,"click"],[1,"valor"],[1,"page-header","compact"],["mode","indeterminate",1,"progress-bar"],[1,"stats-row"],[1,"stat-chip","total"],[1,"stat-chip","sucesso"],[1,"stat-chip","erro"],[1,"stat-chip","pendente"],["appearance","outlined",1,"table-card"],["mat-table","",1,"process-table",3,"dataSource"],["matColumnDef","linha"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","tomador"],["matColumnDef","numRps"],["matColumnDef","codSrv"],["matColumnDef","valor"],["matColumnDef","status"],["matColumnDef","mensagem"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"row-sucesso","row-erro",4,"matRowDef","matRowDefColumns"],["diameter","24","strokeWidth","3",1,"inline-spinner"],[1,"header-icon-inline","done"],["mat-header-cell",""],["mat-cell",""],[1,"line-num"],[1,"dest-info"],[1,"status-badge",3,"ngClass"],[1,"status-icon"],[1,"msg-text"],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary",1,"btn-exportar",3,"click"],["mat-stroked-button","",1,"btn-nova",3,"click"]],template:function(e,i){e&1&&(h(0,"div",1),k(1,yo,13,7,"div",2),k(2,zo,54,10,"div",3),d()),e&2&&(f(),E(i.step()==="upload"?1:-1),f(),E(i.step()==="processando"||i.step()==="concluido"?2:-1))},dependencies:[_i,pi,Mi,Ei,ki,Ri,Ci,bi,Yi,Vi,zi,Xi,ji,Li,$i,Hi,Wi,Ui,qi,Ki,Qi,en,Ji,nn,kn,fi,ui],styles:['@charset "UTF-8";.emissao-page[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.page-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:#1565c0;margin-bottom:.5rem}.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:700;color:#1a237e;margin:0;display:flex;align-items:center;justify-content:center;gap:.5rem}.page-header.compact[_ngcontent-%COMP%]{text-align:left;margin-bottom:1rem}.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#78909c;margin:.25rem 0 0;font-size:.95rem}.header-icon-inline[_ngcontent-%COMP%]{font-size:28px!important;width:28px!important;height:28px!important;vertical-align:middle}.header-icon-inline.done[_ngcontent-%COMP%]{color:#2e7d32}.inline-spinner[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin-right:8px}.drop-zone[_ngcontent-%COMP%]{border:2px dashed #b0bec5;border-radius:20px;padding:2.5rem 2rem;text-align:center;background:#fafbfc;transition:all .3s ease;cursor:pointer}.drop-zone.drag-over[_ngcontent-%COMP%]{border-color:#1565c0;background:#e3f2fd;transform:scale(1.01)}.drop-zone.has-file[_ngcontent-%COMP%]{border-color:#2e7d32;background:#e8f5e9;border-style:solid}.drop-zone[_ngcontent-%COMP%]   .drop-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:#90a4ae;margin-bottom:.5rem}.drop-zone[_ngcontent-%COMP%]   .drop-icon.success[_ngcontent-%COMP%]{color:#2e7d32}.drop-zone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:.5rem 0 .25rem;font-size:1.1rem;font-weight:600;color:#37474f}.drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78909c;margin:.25rem 0;font-size:.9rem}.drop-zone[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]{color:#2e7d32;font-weight:500}.drop-zone[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{display:block;margin-top:.75rem;font-size:.8rem;color:#b0bec5}.btn-select[_ngcontent-%COMP%], .btn-change[_ngcontent-%COMP%]{margin-top:.75rem;border-radius:12px!important}.drop-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap}.btn-modelo[_ngcontent-%COMP%]{border-radius:12px!important;margin-top:.75rem}.errors-panel[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:flex-start;padding:1rem;margin-top:1rem;border-radius:12px;background:#fff3e0;color:#e65100}.errors-panel[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-top:2px;flex-shrink:0}.errors-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 4px;font-size:.875rem}.preview-card[_ngcontent-%COMP%]{margin-top:1.5rem;border-radius:16px!important;overflow:hidden}.preview-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:1rem 1.25rem .5rem;font-weight:600;color:#37474f;font-size:.9rem}.preview-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#1565c0}.preview-table-wrapper[_ngcontent-%COMP%]{overflow-x:auto;max-height:400px;overflow-y:auto}.preview-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .preview-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px 12px;text-align:left;font-size:.82rem;border-bottom:1px solid #eceff1}.preview-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f5f7fa;font-weight:600;color:#546e7a;position:sticky;top:0;z-index:1}.preview-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f5f7fa}.preview-table[_ngcontent-%COMP%]   .valor[_ngcontent-%COMP%]{font-weight:600;color:#1565c0;white-space:nowrap}.stats-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1rem}.stat-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:12px;font-size:.85rem;font-weight:600}.stat-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.stat-chip.total[_ngcontent-%COMP%]{background:#eceff1;color:#37474f}.stat-chip.sucesso[_ngcontent-%COMP%]{background:#e8f5e9;color:#1b5e20}.stat-chip.erro[_ngcontent-%COMP%]{background:#fce4ec;color:#b71c1c}.stat-chip.pendente[_ngcontent-%COMP%]{background:#fff3e0;color:#e65100}.progress-bar[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:4px}.table-card[_ngcontent-%COMP%]{border-radius:16px!important;overflow:hidden;margin-bottom:1rem}.process-table[_ngcontent-%COMP%]{width:100%}.process-table[_ngcontent-%COMP%]   .line-num[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;background:#eceff1;font-weight:600;font-size:.8rem;color:#546e7a}.process-table[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px}.process-table[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.85rem}.process-table[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#90a4ae;font-size:.75rem}.process-table[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{color:#b0bec5}.process-table[_ngcontent-%COMP%]   .msg-text[_ngcontent-%COMP%]{font-size:.8rem;color:#546e7a}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:16px;font-size:.75rem;font-weight:600}.status-badge[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.status-badge.status-pendente[_ngcontent-%COMP%]{background:#fff3e0;color:#e65100}.status-badge.status-processando[_ngcontent-%COMP%]{background:#e3f2fd;color:#0d47a1}.status-badge.status-sucesso[_ngcontent-%COMP%]{background:#e8f5e9;color:#1b5e20}.status-badge.status-erro[_ngcontent-%COMP%]{background:#fce4ec;color:#b71c1c}.row-sucesso[_ngcontent-%COMP%]{background:#f1f8e9}.row-erro[_ngcontent-%COMP%]{background:#fce4ec20}.action-bar[_ngcontent-%COMP%]{display:flex;gap:.75rem;justify-content:center;align-items:center;margin-top:1.5rem;padding-bottom:1rem}.action-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:12px!important;min-height:48px;padding:0 24px;font-size:.95rem}.btn-exportar[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1565c0,#0d47a1)!important;color:#fff!important;font-weight:700!important;box-shadow:0 4px 16px #0d47a14d!important}']})};export{En as EmissaoNfseComponent};
