import{$ as P,$a as St,A as Ze,Aa as On,B as Dn,Ba as Nn,Bb as Fe,C as Ye,Ca as Ln,Cb as re,Da as kn,Ea as Pn,F as En,Fa as Bn,G as Ke,Ga as x,H as wn,I as Cn,J as Xe,Ja as fe,Jb as oe,K as Je,Ka as jn,Kb as tt,L as D,La as Qe,M as we,N as l,O as T,Pa as me,Q as g,Qa as Te,R as h,Ra as Ie,S as c,T as Ct,Ta as Un,U as An,V as Ce,Vb as Hn,W as Tn,Xa as H,Ya as I,Za as z,Zb as Vn,_a as It,a as ln,aa as v,bc as Gn,c as We,cc as V,da as At,dc as Rt,e as ee,ea as F,ec as Wn,f as fn,fa as te,fb as Mt,gb as Se,ia as In,k,ka as Sn,l as mn,la as Tt,o as R,oa as N,p as hn,pa as Mn,qa as Ae,qb as zn,ra as Fn,rb as $n,s as pn,sa as ue,sb as et,ta as Rn,u as gn,ua as de,v as bn,wa as qe,x as vn,xa as ne,xb as Ft,y as yn,ya as le,yb as Me,z as _n,za as xn}from"./chunk-FJEWK3Q7.js";import{a as S,b as Ge}from"./chunk-7CGTOI24.js";var Zn=null;function G(){return Zn}function xt(n){Zn??=n}var Re=class{},K=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:()=>c(Yn),providedIn:"platform"})}return n})(),oo=new g(""),Yn=(()=>{class n extends K{_location;_history;_doc=c(v);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return G().getBaseHref(this._doc)}onPopState(e){let t=G().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=G().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,o){this._history.pushState(e,t,o)}replaceState(e,t,o){this._history.replaceState(e,t,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function nt(n,r){return n?r?n.endsWith("/")?r.startsWith("/")?n+r.slice(1):n+r:r.startsWith("/")?n+r:`${n}/${r}`:n:r}function Kn(n){let r=n.search(/#|\?|$/);return n[r-1]==="/"?n.slice(0,r-1)+n.slice(r):n}function B(n){return n&&n[0]!=="?"?`?${n}`:n}var he=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:()=>c(Jn),providedIn:"root"})}return n})(),rt=new g(""),Jn=(()=>{class n extends he{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c(v).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return nt(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+B(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${t}${o}`:t}pushState(e,t,o,i){let a=this.prepareExternalUrl(o+B(i));this._platformLocation.pushState(e,t,a)}replaceState(e,t,o,i){let a=this.prepareExternalUrl(o+B(i));this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(h(K),h(rt,8))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qn=(()=>{class n{_subject=new ee;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=so(Kn(Xn(t))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+B(t))}normalize(e){return n.stripTrailingSlash(ao(this._basePath,Xn(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",o=null){this._locationStrategy.pushState(o,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+B(t)),o)}replaceState(e,t="",o=null){this._locationStrategy.replaceState(o,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+B(t)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(o=>o(e,t))}subscribe(e,t,o){return this._subject.subscribe({next:e,error:t??void 0,complete:o??void 0})}static normalizeQueryParams=B;static joinWithSlash=nt;static stripTrailingSlash=Kn;static \u0275fac=function(t){return new(t||n)(h(he))};static \u0275prov=l({token:n,factory:()=>io(),providedIn:"root"})}return n})();function io(){return new qn(h(he))}function ao(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Xn(n){return n.replace(/\/index.html$/,"")}function so(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var uo=(()=>{class n extends he{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=nt(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,o,i){let a=this.prepareExternalUrl(o+B(i))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,a)}replaceState(e,t,o,i){let a=this.prepareExternalUrl(o+B(i))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(h(K),h(rt,8))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();var kt=(function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n})(kt||{});var $={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function pe(n,r){let e=Ft(n),t=e[Me.NumberSymbols][r];if(typeof t>"u"){if(r===$.CurrencyDecimal)return e[Me.NumberSymbols][$.Decimal];if(r===$.CurrencyGroup)return e[Me.NumberSymbols][$.Group]}return t}function tr(n,r){return Ft(n)[Me.NumberFormats][r]}var lo=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Qn=22,ot=".",xe="0",fo=";",mo=",",Ot="#";function ho(n,r,e,t,o,i,a=!1){let s="",u=!1;if(!isFinite(n))s=pe(e,$.Infinity);else{let d=bo(n);a&&(d=go(d));let f=r.minInt,m=r.minFrac,_=r.maxFrac;if(i){let C=i.match(lo);if(C===null)throw new D(2306,!1);let O=C[1],w=C[3],Y=C[5];O!=null&&(f=Nt(O)),w!=null&&(m=Nt(w)),Y!=null?_=Nt(Y):w!=null&&m>_&&(_=m)}vo(d,m,_);let y=d.digits,A=d.integerLen,M=d.exponent,p=[];for(u=y.every(C=>!C);A<f;A++)y.unshift(0);for(;A<0;A++)y.unshift(0);A>0?p=y.splice(A,y.length):(p=y,y=[0]);let b=[];for(y.length>=r.lgSize&&b.unshift(y.splice(-r.lgSize,y.length).join(""));y.length>r.gSize;)b.unshift(y.splice(-r.gSize,y.length).join(""));y.length&&b.unshift(y.join("")),s=b.join(pe(e,t)),p.length&&(s+=pe(e,o)+p.join("")),M&&(s+=pe(e,$.Exponential)+"+"+M)}return n<0&&!u?s=r.negPre+s+r.negSuf:s=r.posPre+s+r.posSuf,s}function nr(n,r,e){let t=tr(r,kt.Decimal),o=po(t,pe(r,$.MinusSign));return ho(n,o,r,$.Group,$.Decimal,e)}function po(n,r="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=n.split(fo),o=t[0],i=t[1],a=o.indexOf(ot)!==-1?o.split(ot):[o.substring(0,o.lastIndexOf(xe)+1),o.substring(o.lastIndexOf(xe)+1)],s=a[0],u=a[1]||"";e.posPre=s.substring(0,s.indexOf(Ot));for(let f=0;f<u.length;f++){let m=u.charAt(f);m===xe?e.minFrac=e.maxFrac=f+1:m===Ot?e.maxFrac=f+1:e.posSuf+=m}let d=s.split(mo);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,i){let f=o.length-e.posPre.length-e.posSuf.length,m=i.indexOf(Ot);e.negPre=i.substring(0,m).replace(/'/g,""),e.negSuf=i.slice(m+f).replace(/'/g,"")}else e.negPre=r+e.posPre,e.negSuf=e.posSuf;return e}function go(n){if(n.digits[0]===0)return n;let r=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(r===0?n.digits.push(0,0):r===1&&n.digits.push(0),n.integerLen+=2),n}function bo(n){let r=Math.abs(n)+"",e=0,t,o,i,a,s;for((o=r.indexOf(ot))>-1&&(r=r.replace(ot,"")),(i=r.search(/e/i))>0?(o<0&&(o=i),o+=+r.slice(i+1),r=r.substring(0,i)):o<0&&(o=r.length),i=0;r.charAt(i)===xe;i++);if(i===(s=r.length))t=[0],o=1;else{for(s--;r.charAt(s)===xe;)s--;for(o-=i,t=[],a=0;i<=s;i++,a++)t[a]=Number(r.charAt(i))}return o>Qn&&(t=t.splice(0,Qn-1),e=o-1,o=1),{digits:t,exponent:e,integerLen:o}}function vo(n,r,e){if(r>e)throw new D(2307,!1);let t=n.digits,o=t.length-n.integerLen,i=Math.min(Math.max(r,o),e),a=i+n.integerLen,s=t[a];if(a>0){t.splice(Math.max(n.integerLen,a));for(let m=a;m<t.length;m++)t[m]=0}else{o=Math.max(0,o),n.integerLen=1,t.length=Math.max(1,a=i+1),t[0]=0;for(let m=1;m<a;m++)t[m]=0}if(s>=5)if(a-1<0){for(let m=0;m>a;m--)t.unshift(0),n.integerLen++;t.unshift(1),n.integerLen++}else t[a-1]++;for(;o<Math.max(0,i);o++)t.push(0);let u=i!==0,d=r+n.integerLen,f=t.reduceRight(function(m,_,y,A){return _=_+m,A[y]=_<10?_:_-10,u&&(A[y]===0&&y>=d?A.pop():u=!1),_>=10?1:0},0);f&&(t.unshift(f),n.integerLen++)}function Nt(n){let r=parseInt(n);if(isNaN(r))throw new D(2305,!1);return r}var Lt=/\s+/,er=[],yo=(()=>{class n{_ngEl;_renderer;initialClasses=er;rawClass;stateMap=new Map;constructor(e,t){this._ngEl=e,this._renderer=t}set klass(e){this.initialClasses=e!=null?e.trim().split(Lt):er}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Lt):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==t&&(o.changed=!0,o.enabled=t),o.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],o=e[1];o.changed?(this._toggleClass(t,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),o.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(Lt).forEach(o=>{t?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(t){return new(t||n)(Ie(N),Ie(Te))};static \u0275dir=z({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return n})();var _o=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(P);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,o):!1,get:(e,t,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,o)}})}static \u0275fac=function(t){return new(t||n)(Ie(Un))};static \u0275dir=z({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Tt]})}return n})();function rr(n,r){return new D(2100,!1)}var Do=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,Eo=(()=>{class n{transform(e){return e==null?null:(wo(n,e),e.replace(Do,t=>t[0].toUpperCase()+t.slice(1).toLowerCase()))}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=It({name:"titlecase",type:n,pure:!0})}return n})();function wo(n,r){if(typeof r!="string")throw rr(n,r)}var Co=(()=>{class n{_locale;constructor(e){this._locale=e}transform(e,t,o){if(!Ao(e))return null;o||=this._locale;try{let i=To(e);return nr(i,o,t)}catch(i){throw rr(n,i.message)}}static \u0275fac=function(t){return new(t||n)(Ie(Hn,16))};static \u0275pipe=It({name:"number",type:n,pure:!0})}return n})();function Ao(n){return!(n==null||n===""||n!==n)}function To(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new D(2309,!1);return n}var or=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({})}return n})();function Oe(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[o,i]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(o.trim()===r)return decodeURIComponent(i)}return null}var ie=class{};var Bt="browser";function ir(n){return n===Bt}var Vs=(()=>{class n{static \u0275prov=l({token:n,providedIn:"root",factory:()=>new Pt(c(v),window)})}return n})(),Pt=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(Ge(S({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let t=Ro(this.document,r);t&&(this.scrollToElement(t,e),t.focus())}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch{console.warn(we(2400,!1))}}scrollToElement(r,e){let t=r.getBoundingClientRect(),o=t.left+this.window.pageXOffset,i=t.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(Ge(S({},e),{left:o-a[0],top:i-a[1]}))}};function Ro(n,r){let e=n.getElementById(r)||n.getElementsByName(r)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),o=t.currentNode;for(;o;){let i=o.shadowRoot;if(i){let a=i.getElementById(r)||i.querySelector(`[name="${r}"]`);if(a)return a}o=t.nextNode()}}return null}var Ne=class{_doc;constructor(r){this._doc=r}manager},it=(()=>{class n extends Ne{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,i){return e.addEventListener(t,o,i),()=>this.removeEventListener(e,t,o,i)}removeEventListener(e,t,o,i){return e.removeEventListener(t,o,i)}static \u0275fac=function(t){return new(t||n)(h(v))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),ct=new g(""),$t=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(a=>{a.manager=this});let o=e.filter(a=>!(a instanceof it));this._plugins=o.slice().reverse();let i=e.find(a=>a instanceof it);i&&this._plugins.push(i)}addEventListener(e,t,o,i){return this._findPluginFor(t).addEventListener(e,t,o,i)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new D(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(h(ct),h(F))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),jt="ng-app-id";function ar(n){for(let r of n)r.remove()}function sr(n,r){let e=r.createElement("style");return e.textContent=n,e}function xo(n,r,e,t){let o=n.head?.querySelectorAll(`style[${jt}="${r}"],link[${jt}="${r}"]`);if(o)for(let i of o)i.removeAttribute(jt),i instanceof HTMLLinkElement?t.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function zt(n,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Ht=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,o,i={}){this.doc=e,this.appId=t,this.nonce=o,xo(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,sr);t?.forEach(o=>this.addUsage(o,this.external,zt))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let i=t.get(e);i?i.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(ar(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ar(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,sr(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,zt(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(h(v),h(Ae),h(de,8),h(ue))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),Ut={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Vt=/%COMP%/g;var ur="%COMP%",Oo=`_nghost-${ur}`,No=`_ngcontent-${ur}`,Lo=!0,ko=new g("",{factory:()=>Lo});function Po(n){return No.replace(Vt,n)}function Bo(n){return Oo.replace(Vt,n)}function dr(n,r){return r.map(e=>e.replace(Vt,n))}var Gt=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,o,i,a,s,u=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.ngZone=s,this.nonce=u,this.tracingService=d,this.defaultRenderer=new Le(e,a,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,t);return o instanceof st?o.applyToHost(e):o instanceof ke&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,i=o.get(t.id);if(!i){let a=this.doc,s=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case qe.Emulated:i=new st(u,d,t,this.appId,f,a,s,m);break;case qe.ShadowDom:return new at(u,e,t,a,s,this.nonce,m,d);case qe.ExperimentalIsolatedShadowDom:return new at(u,e,t,a,s,this.nonce,m);default:i=new ke(u,d,t,f,a,s,m);break}o.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(h($t),h(Ht),h(Ae),h(ko),h(v),h(F),h(de),h(Qe,8))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),Le=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,o){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Ut[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(cr(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(cr(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new D(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,o){if(o){e=o+":"+e;let i=Ut[o];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let o=Ut[t];o?r.removeAttributeNS(o,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,o){o&(fe.DashCase|fe.Important)?r.style.setProperty(e,t,o&fe.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&fe.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,o){if(typeof r=="string"&&(r=G().getGlobalEventTarget(this.doc,r),!r))throw new D(5102,!1);let i=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,o)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function cr(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var at=class extends Le{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,o,i,a,s,u){super(r,o,i,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=dr(t.id,d);for(let m of d){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=m,this.shadowRoot.appendChild(_)}let f=t.getExternalStyles?.();if(f)for(let m of f){let _=zt(m,o);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ke=class extends Le{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,o,i,a,s,u){super(r,i,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let d=t.styles;this.styles=u?dr(u,d):d,this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&jn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},st=class extends ke{contentAttr;hostAttr;constructor(r,e,t,o,i,a,s,u){let d=o+"-"+t.id;super(r,e,t,i,a,s,u,d),this.contentAttr=Po(d),this.hostAttr=Bo(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}};var ut=class n extends Re{supportsDOMEvents=!0;static makeCurrent(){xt(new n)}onAndCancel(r,e,t,o){return r.addEventListener(e,t,o),()=>{r.removeEventListener(e,t,o)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Uo();return e==null?null:zo(e)}resetBaseElement(){Pe=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Oe(document.cookie,r)}},Pe=null;function Uo(){return Pe=Pe||document.head.querySelector("base"),Pe?Pe.getAttribute("href"):null}function zo(n){return new URL(n,document.baseURI).pathname}var $o=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),lr=["alt","control","meta","shift"],Ho={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Vo={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},fr=(()=>{class n extends Ne{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,o,i){let a=n.parseEventName(t),s=n.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>G().onAndCancel(e,a.domEventName,s,i))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let i=n._normalizeKey(t.pop()),a="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),a="code."),lr.forEach(d=>{let f=t.indexOf(d);f>-1&&(t.splice(f,1),a+=d+".")}),a+=i,t.length!=0||i.length===0)return null;let u={};return u.domEventName=o,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let o=Ho[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(o=e.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),lr.forEach(a=>{if(a!==o){let s=Vo[a];s(e)&&(i+=a+".")}}),i+=o,i===t)}static eventCallback(e,t,o){return i=>{n.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>t(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(h(v))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();async function Go(n,r,e){let t=S({rootComponent:n},Wo(r,e));return Gn(t)}function Wo(n,r){return{platformRef:r?.platformRef,appProviders:[...Jo,...n?.providers??[]],platformProviders:Xo}}function Zo(){ut.makeCurrent()}function Yo(){return new te}function Ko(){return Mn(document),document}var Xo=[{provide:ue,useValue:Bt},{provide:Fn,useValue:Zo,multi:!0},{provide:v,useFactory:Ko}];var Jo=[{provide:An,useValue:"root"},{provide:te,useFactory:Yo},{provide:ct,useClass:it,multi:!0},{provide:ct,useClass:fr,multi:!0},Gt,Ht,$t,{provide:me,useExisting:Gt},{provide:ie,useClass:$o},[]];var X=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let o=e.slice(0,t),i=e.slice(t+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let t=r.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let o=(r.op==="a"?this.headers.get(e):void 0)||[];o.push(...t),this.headers.set(e,o);break;case"d":let i=r.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>i.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(i=>i.toString()),o=r.toLowerCase();this.headers.set(o,t),this.maybeSetNormalizedName(r,o)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var lt=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},ft=class{encodeKey(r){return mr(r)}encodeValue(r){return mr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function qo(n,r){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[a,s]=i==-1?[r.decodeKey(o),""]:[r.decodeKey(o.slice(0,i)),r.decodeValue(o.slice(i+1))],u=e.get(a)||[];u.push(s),e.set(a,u)}),e}var Qo=/%(\d[a-f0-9])/gi,ei={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function mr(n){return encodeURIComponent(n).replace(Qo,(r,e)=>ei[e]??r)}function dt(n){return`${n}`}var W=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new ft,r.fromString){if(r.fromObject)throw new D(2805,!1);this.map=qo(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],o=Array.isArray(t)?t.map(dt):[dt(t)];this.map.set(e,o)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let o=r[t];Array.isArray(o)?o.forEach(i=>{e.push({param:t,value:i,op:"a"})}):e.push({param:t,value:o,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(dt(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let t=this.map.get(r.param)||[],o=t.indexOf(dt(r.value));o!==-1&&t.splice(o,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function ti(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function hr(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function pr(n){return typeof Blob<"u"&&n instanceof Blob}function gr(n){return typeof FormData<"u"&&n instanceof FormData}function ni(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var br="Content-Type",vr="Accept",yr="text/plain",_r="application/json",ri=`${_r}, ${yr}, */*`,ge=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,o){this.url=e,this.method=r.toUpperCase();let i;if(ti(this.method)||o?(this.body=t!==void 0?t:null,i=o):i=t,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new D(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new X,this.context??=new lt,!this.params)this.params=new W,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),u=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||hr(this.body)||pr(this.body)||gr(this.body)||ni(this.body)?this.body:this.body instanceof W?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||gr(this.body)?null:pr(this.body)?this.body.type||null:hr(this.body)?null:typeof this.body=="string"?yr:this.body instanceof W?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?_r:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,o=r.responseType||this.responseType,i=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,u=r.mode||this.mode,d=r.redirect||this.redirect,f=r.credentials||this.credentials,m=r.referrer||this.referrer,_=r.integrity||this.integrity,y=r.referrerPolicy||this.referrerPolicy,A=r.transferCache??this.transferCache,M=r.timeout??this.timeout,p=r.body!==void 0?r.body:this.body,b=r.withCredentials??this.withCredentials,C=r.reportProgress??this.reportProgress,O=r.headers||this.headers,w=r.params||this.params,Y=r.context??this.context;return r.setHeaders!==void 0&&(O=Object.keys(r.setHeaders).reduce((Ee,Q)=>Ee.set(Q,r.setHeaders[Q]),O)),r.setParams&&(w=Object.keys(r.setParams).reduce((Ee,Q)=>Ee.set(Q,r.setParams[Q]),w)),new n(e,t,p,{params:w,headers:O,context:Y,reportProgress:C,responseType:o,withCredentials:b,transferCache:A,keepalive:i,cache:s,priority:a,timeout:M,mode:u,redirect:d,credentials:f,referrer:m,integrity:_,referrerPolicy:y})}},ae=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(ae||{}),ve=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t="OK"){this.headers=r.headers||new X,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},mt=class n extends ve{constructor(r={}){super(r)}type=ae.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Be=class n extends ve{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ae.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},be=class extends ve{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},oi=200,ii=204;var ai=new g("");var si=/^\)\]\}',?\n/;var Zt=(()=>{class n{xhrFactory;tracingService=c(Qe,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let t=this.xhrFactory;return k(null).pipe(Cn(()=>new We(i=>{let a=t.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((p,b)=>a.setRequestHeader(p,b.join(","))),e.headers.has(vr)||a.setRequestHeader(vr,ri),!e.headers.has(br)){let p=e.detectContentTypeHeader();p!==null&&a.setRequestHeader(br,p)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let p=e.responseType.toLowerCase();a.responseType=p!=="json"?p:"text"}let s=e.serializeBody(),u=null,d=()=>{if(u!==null)return u;let p=a.statusText||"OK",b=new X(a.getAllResponseHeaders()),C=a.responseURL||e.url;return u=new mt({headers:b,status:a.status,statusText:p,url:C}),u},f=this.maybePropagateTrace(()=>{let{headers:p,status:b,statusText:C,url:O}=d(),w=null;b!==ii&&(w=typeof a.response>"u"?a.responseText:a.response),b===0&&(b=w?oi:0);let Y=b>=200&&b<300;if(e.responseType==="json"&&typeof w=="string"){let Ee=w;w=w.replace(si,"");try{w=w!==""?JSON.parse(w):null}catch(Q){w=Ee,Y&&(Y=!1,w={error:Q,text:w})}}Y?(i.next(new Be({body:w,headers:p,status:b,statusText:C,url:O||void 0})),i.complete()):i.error(new be({error:w,headers:p,status:b,statusText:C,url:O||void 0}))}),m=this.maybePropagateTrace(p=>{let{url:b}=d(),C=new be({error:p,status:a.status||0,statusText:a.statusText||"Unknown Error",url:b||void 0});i.error(C)}),_=m;e.timeout&&(_=this.maybePropagateTrace(p=>{let{url:b}=d(),C=new be({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:b||void 0});i.error(C)}));let y=!1,A=this.maybePropagateTrace(p=>{y||(i.next(d()),y=!0);let b={type:ae.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(b.total=p.total),e.responseType==="text"&&a.responseText&&(b.partialText=a.responseText),i.next(b)}),M=this.maybePropagateTrace(p=>{let b={type:ae.UploadProgress,loaded:p.loaded};p.lengthComputable&&(b.total=p.total),i.next(b)});return a.addEventListener("load",f),a.addEventListener("error",m),a.addEventListener("timeout",_),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",A),s!==null&&a.upload&&a.upload.addEventListener("progress",M)),a.send(s),i.next({type:ae.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",f),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",A),s!==null&&a.upload&&a.upload.removeEventListener("progress",M)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(t){return new(t||n)(h(ie))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ci(n,r){return r(n)}function ui(n,r,e){return(t,o)=>Tn(e,()=>r(t,i=>n(i,o)))}var Dr=new g("",{factory:()=>[]}),Er=new g(""),wr=new g("",{factory:()=>!0});var Yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=h(Zt),o},providedIn:"root"})}return n})();var ht=(()=>{class n{backend;injector;chain=null;pendingTasks=c(Sn);contributeToStability=c(wr);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Dr),...this.injector.get(Er,[])]));this.chain=t.reduceRight((o,i)=>ui(o,i,this.injector),ci)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(Ye(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(h(Yt),h(Ce))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=h(ht),o},providedIn:"root"})}return n})();function Wt(n,r){return{body:r,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var pt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,o={}){let i;if(e instanceof ge)i=e;else{let u;o.headers instanceof X?u=o.headers:u=new X(o.headers);let d;o.params&&(o.params instanceof W?d=o.params:d=new W({fromObject:o.params})),i=new ge(e,t,o.body!==void 0?o.body:null,{headers:u,context:o.context,params:d,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let a=k(i).pipe(yn(u=>this.handler.handle(u)));if(e instanceof ge||o.observe==="events")return a;let s=a.pipe(bn(u=>u instanceof Be));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.pipe(R(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new D(2806,!1);return u.body}));case"blob":return s.pipe(R(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new D(2807,!1);return u.body}));case"text":return s.pipe(R(u=>{if(u.body!==null&&typeof u.body!="string")throw new D(2808,!1);return u.body}));default:return s.pipe(R(u=>u.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new W().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,o={}){return this.request("PATCH",e,Wt(o,t))}post(e,t,o={}){return this.request("POST",e,Wt(o,t))}put(e,t,o={}){return this.request("PUT",e,Wt(o,t))}static \u0275fac=function(t){return new(t||n)(h(Kt))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var di=new g("",{factory:()=>!0}),li="XSRF-TOKEN",fi=new g("",{factory:()=>li}),mi="X-XSRF-TOKEN",hi=new g("",{factory:()=>mi}),pi=(()=>{class n{cookieName=c(fi);doc=c(v);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Oe(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=h(pi),o},providedIn:"root"})}return n})();function gi(n,r){if(!c(di)||n.method==="GET"||n.method==="HEAD")return r(n);try{let o=c(K).href,{origin:i}=new URL(o),{origin:a}=new URL(n.url,i);if(i!==a)return r(n)}catch{return r(n)}let e=c(Cr).getToken(),t=c(hi);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),r(n)}function bi(...n){let r=[pt,ht,{provide:Kt,useExisting:ht},{provide:Yt,useFactory:()=>c(ai,{optional:!0})??c(Zt)},{provide:Dr,useValue:gi,multi:!0}];for(let e of n)r.push(...e.\u0275providers);return Ct(r)}var Du=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(h(v))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=h(yi),o},providedIn:"root"})}return n})(),yi=(()=>{class n extends Xt{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case x.NONE:return t;case x.HTML:return le(t,"HTML")?ne(t):Bn(this._doc,String(t)).toString();case x.STYLE:return le(t,"Style")?ne(t):t;case x.SCRIPT:if(le(t,"Script"))return ne(t);throw new D(5200,!1);case x.URL:return le(t,"URL")?ne(t):Pn(String(t));case x.RESOURCE_URL:if(le(t,"ResourceURL"))return ne(t);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return xn(e)}bypassSecurityTrustStyle(e){return On(e)}bypassSecurityTrustScript(e){return Nn(e)}bypassSecurityTrustUrl(e){return Ln(e)}bypassSecurityTrustResourceUrl(e){return kn(e)}static \u0275fac=function(t){return new(t||n)(h(v))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gt=new WeakMap,je=(()=>{class n{_appRef;_injector=c(P);_environmentInjector=c(Ce);load(e){let t=this._appRef=this._appRef||this._injector.get(Mt),o=gt.get(t);o||(o={loaders:new Set,refs:[]},gt.set(t,o),t.onDestroy(()=>{gt.get(t)?.refs.forEach(i=>i.destroy()),gt.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(Wn(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bt;function Di(){if(bt===void 0&&(bt=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(bt=n.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return bt}function ye(n){return Di()?.createHTML(n)||n}function Ar(n){return Error(`Unable to find icon with the name "${n}"`)}function Ei(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Tr(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Ir(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Z=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},Mr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,i){this._httpClient=e,this._sanitizer=t,this._errorHandler=i,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,i){return this._addSvgIconConfig(e,t,new Z(o,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,i){let a=this._sanitizer.sanitize(x.HTML,o);if(!a)throw Ir(o);let s=ye(a);return this._addSvgIconConfig(e,t,new Z("",s,i))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new Z(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let i=this._sanitizer.sanitize(x.HTML,t);if(!i)throw Ir(t);let a=ye(i);return this._addSvgIconSetConfig(e,new Z("",a,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(x.RESOURCE_URL,e);if(!t)throw Tr(e);let o=this._cachedIconsByUrl.get(t);return o?k(vt(o)):this._loadSvgIconFromConfig(new Z(e,null)).pipe(Je(i=>this._cachedIconsByUrl.set(t,i)),R(i=>vt(i)))}getNamedSvgIcon(e,t=""){let o=Sr(t,e),i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(t,e),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):mn(Ar(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?k(vt(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(R(t=>vt(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return k(o);let i=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(vn(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(x.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),k(null)})));return gn(i).pipe(R(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Ar(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let i=t[o];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(i),s=this._extractSvgIconFromSet(a,e,i.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Je(t=>e.svgText=t),R(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?k(null):this._fetchIcon(e).pipe(Je(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let i=e.querySelector(`[id="${t}"]`);if(!i)return null;let a=i.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let s=this._svgElementFromString(ye("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(ye("<svg></svg>")),o=e.attributes;for(let i=0;i<o.length;i++){let{name:a,value:s}=o[i];a!=="id"&&t.setAttribute(a,s)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[i].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,i=o?.withCredentials??!1;if(!this._httpClient)throw Ei();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(x.RESOURCE_URL,t);if(!a)throw Tr(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let u=this._httpClient.get(a,{responseType:"text",withCredentials:i}).pipe(R(d=>ye(d)),Ye(()=>this._inProgressUrlFetches.delete(a)),En());return this._inProgressUrlFetches.set(a,u),u}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(Sr(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let i=this._resolvers[o](t,e);if(i)return wi(i)?new Z(i.url,null,i.options):new Z(i,null)}}static \u0275fac=function(t){return new(t||n)(h(pt,8),h(Xt),h(v,8),h(te))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vt(n){return n.cloneNode(!0)}function Sr(n,r){return n+":"+r}function wi(n){return!!(n.url&&n.options)}var Ci=new g("cdk-dir-doc",{providedIn:"root",factory:()=>c(v)}),Ai=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ti(n){let r=n?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Ai.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var Bu=(()=>{class n{get value(){return this.valueSignal()}valueSignal=In("ltr");change=new At;constructor(){let e=c(Ci,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ti(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _e=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({})}return n})();var Ii=["*"],Si=new g("MAT_ICON_DEFAULT_OPTIONS"),Mi=new g("mat-icon-location",{providedIn:"root",factory:()=>{let n=c(v),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Fr=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Fi=Fr.map(n=>`[${n}]`).join(", "),Ri=/^url\(['"]?#(.*?)['"]?\)$/,qu=(()=>{class n{_elementRef=c(N);_iconRegistry=c(Mr);_location=c(Mi);_errorHandler=c(te);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ln.EMPTY;constructor(){let e=c(new Vn("aria-hidden"),{optional:!0}),t=c(Si,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,i)=>{o.forEach(a=>{i.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Fi),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<t.length;i++)Fr.forEach(a=>{let s=t[i],u=s.getAttribute(a),d=u?u.match(Ri):null;if(d){let f=o.get(s);f||(f=[],o.set(s,f)),f.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(Ze(1)).subscribe(i=>this._setSvgElement(i),i=>{let a=`Error retrieving icon ${t}:${o}! ${i.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(Se("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),tt(o.color?"mat-"+o.color:""),oe("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",V],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ii,decls:1,vars:0,template:function(t,o){t&1&&(Fe(),re(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Qu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({imports:[_e]})}return n})();function Ue(n){return n.buttons===0||n.detail===0}function ze(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Jt;function Rr(){if(Jt==null){let n=typeof document<"u"?document.head:null;Jt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Jt}function qt(n){if(Rr()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function j(n){return n.composedPath?n.composedPath()[0]:n.target}var Qt;try{Qt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Qt=!1}var U=(()=>{class n{_platformId=c(ue);isBrowser=this._platformId?ir(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Qt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $e;function xr(){if($e==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>$e=!0}))}finally{$e=$e||!1}return $e}function De(n){return xr()?n:!!n.capture}function J(n){return n instanceof N?n.nativeElement:n}var Or=new g("cdk-input-modality-detector-options"),Nr={ignoreKeys:[18,17,224,91,16]},Lr=650,en={passive:!0,capture:!0},kr=(()=>{class n{_platform=c(U);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new fn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=j(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Lr||(this._modality.next(Ue(e)?"keyboard":"mouse"),this._mostRecentTarget=j(e))};_onTouchstart=e=>{if(ze(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=j(e)};constructor(){let e=c(F),t=c(v),o=c(Or,{optional:!0});if(this._options=S(S({},Nr),o),this.modalityDetected=this._modality.pipe(Ke(1)),this.modalityChanged=this.modalityDetected.pipe(Dn()),this._platform.isBrowser){let i=c(me).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[i.listen(t,"keydown",this._onKeydown,en),i.listen(t,"mousedown",this._onMousedown,en),i.listen(t,"touchstart",this._onTouchstart,en)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),He=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(He||{}),Pr=new g("cdk-focus-monitor-default-options"),yt=De({passive:!0,capture:!0}),tn=(()=>{class n{_ngZone=c(F);_platform=c(U);_inputModalityDetector=c(kr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(v);_stopInputModalityDetector=new ee;constructor(){let e=c(Pr,{optional:!0});this._detectionMode=e?.detectionMode||He.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=j(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=J(e);if(!this._platform.isBrowser||o.nodeType!==1)return k();let i=qt(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new ee,rootNode:i};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=J(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let i=J(e),a=this._document.activeElement;i===a?this._getClosestElementsInfo(i).forEach(([s,u])=>this._originChanged(s,t,u)):(this._setOrigin(t),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===He.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===He.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Lr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),i=j(e);!o||!o.checkChildren&&t!==i||this._originChanged(t,this._getFocusOrigin(i),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,yt),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,yt)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Xe(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,yt),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,yt),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,i)=>{(i===e||o.checkChildren&&i.contains(e))&&t.push([i,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let i=e.labels;if(i){for(let a=0;a<i.length;a++)if(i[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nn(n){return Array.isArray(n)?n:[n]}var Br=new Set,se,_t=(()=>{class n{_platform=c(U);_nonce=c(de,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Oi}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&xi(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xi(n,r){if(!Br.has(n))try{se||(se=document.createElement("style"),r&&se.setAttribute("nonce",r),se.setAttribute("type","text/css"),document.head.appendChild(se)),se.sheet&&(se.sheet.insertRule(`@media ${n} {body{ }}`,0),Br.add(n))}catch(e){console.error(e)}}function Oi(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var rn=(()=>{class n{_mediaMatcher=c(_t);_zone=c(F);_queries=new Map;_destroySubject=new ee;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return jr(nn(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=jr(nn(e)).map(a=>this._registerQuery(a).observable),i=hn(o);return i=pn(i.pipe(Ze(1)),i.pipe(Ke(1),_n(0))),i.pipe(R(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:u,query:d})=>{s.matches=s.matches||u,s.breakpoints[d]=u}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),i={observable:new We(a=>{let s=u=>this._zone.run(()=>a.next(u));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(wn(t),R(({matches:a})=>({query:e,matches:a})),Xe(this._destroySubject)),mql:t};return this._queries.set(e,i),i}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jr(n){return n.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}var Ni=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ur=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({providers:[Ni]})}return n})();var q=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(q||{}),zr="cdk-high-contrast-black-on-white",$r="cdk-high-contrast-white-on-black",on="cdk-high-contrast-active",Hr=(()=>{class n{_platform=c(U);_hasCheckedHighContrastMode=!1;_document=c(v);_breakpointSubscription;constructor(){this._breakpointSubscription=c(rn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return q.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,i=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return q.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return q.BLACK_ON_WHITE}return q.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(on,zr,$r),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===q.BLACK_ON_WHITE?e.add(on,zr):t===q.WHITE_ON_BLACK&&e.add(on,$r)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Li=(()=>{class n{constructor(){c(Hr)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({imports:[Ur]})}return n})();var an={},Vr=class n{_appId=c(Ae);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),an.hasOwnProperty(r)||(an[r]=0),`${r}${e?n._infix+"-":""}${an[r]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})};var ce;function ul(){if(ce==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ce=!1,ce;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ce=!0;else{let n=Element.prototype.scrollTo;n?ce=!/\{\s*\[native code\]\s*\}/.test(n.toString()):ce=!1}}return ce}function ll(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ki=new g("MATERIAL_ANIMATIONS"),Gr=null;function Pi(){return c(ki,{optional:!0})?.animationsDisabled||c(Rn,{optional:!0})==="NoopAnimations"?"di-disabled":(Gr??=c(_t).matchMedia("(prefers-reduced-motion)").matches,Gr?"reduced-motion":"enabled")}function Dt(){return Pi()!=="enabled"}function wl(n){return n==null?"":typeof n=="string"?n:`${n}px`}var L=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(L||{}),sn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=L.HIDDEN;constructor(r,e,t,o=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Wr=De({passive:!0,capture:!0}),cn=class{_events=new Map;addHandler(r,e,t,o){let i=this._events.get(e);if(i){let a=i.get(t);a?a.add(o):i.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Wr)})}removeHandler(r,e,t){let o=this._events.get(r);if(!o)return;let i=o.get(e);i&&(i.delete(t),i.size===0&&o.delete(e),o.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Wr)))}_delegateEventHandler=r=>{let e=j(r);e&&this._events.get(r.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(i=>i.handleEvent(r))})}},Ve={enterDuration:225,exitDuration:150},Bi=800,Zr=De({passive:!0,capture:!0}),Yr=["mousedown","touchstart"],Kr=["mouseup","mouseleave","touchend","touchcancel"],ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Et=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new cn;constructor(r,e,t,o,i){this._target=r,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=J(t)),i&&i.get(je).load(ji)}fadeInRipple(r,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=S(S({},Ve),t.animation);t.centered&&(r=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||Ui(r,e,o),s=r-o.left,u=e-o.top,d=i.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(f);let m=window.getComputedStyle(f),_=m.transitionProperty,y=m.transitionDuration,A=_==="none"||y==="0s"||y==="0s, 0s"||o.width===0&&o.height===0,M=new sn(this,f,t,A);f.style.transform="scale3d(1, 1, 1)",M.state=L.FADING_IN,t.persistent||(this._mostRecentTransientRipple=M);let p=null;return!A&&(d||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let b=()=>{p&&(p.fallbackTimer=null),clearTimeout(O),this._finishRippleTransition(M)},C=()=>this._destroyRipple(M),O=setTimeout(C,d+100);f.addEventListener("transitionend",b),f.addEventListener("transitioncancel",C),p={onTransitionEnd:b,onTransitionCancel:C,fallbackTimer:O}}),this._activeRipples.set(M,p),(A||!d)&&this._finishRippleTransition(M),M}fadeOutRipple(r){if(r.state===L.FADING_OUT||r.state===L.HIDDEN)return;let e=r.element,t=S(S({},Ve),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",r.state=L.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=J(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Yr.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Kr.forEach(e=>{this._triggerElement.addEventListener(e,this,Zr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===L.FADING_IN?this._startFadeOutTransition(r):r.state===L.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=L.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=L.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=Ue(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Bi;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!ze(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===L.VISIBLE||r.config.terminateOnPointerUp&&r.state===L.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Yr.forEach(e=>n._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Kr.forEach(e=>r.removeEventListener(e,this,Zr)),this._pointerUpEventsRegistered=!1))}};function Ui(n,r,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+o*o)}var Xr=new g("mat-ripple-global-options");var zi={capture:!0},$i=["focus","mousedown","mouseenter","touchstart"],un="mat-ripple-loader-uninitialized",dn="mat-ripple-loader-class-name",Jr="mat-ripple-loader-centered",wt="mat-ripple-loader-disabled",qr=(()=>{class n{_document=c(v);_animationsDisabled=Dt();_globalRippleOptions=c(Xr,{optional:!0});_platform=c(U);_ngZone=c(F);_injector=c(P);_eventCleanups;_hosts=new Map;constructor(){let e=c(me).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>$i.map(t=>e.listen(this._document,t,this._onInteraction,zi)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(un,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(dn))&&e.setAttribute(dn,t.className||""),t.centered&&e.setAttribute(Jr,""),t.disabled&&e.setAttribute(wt,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(wt,""):e.removeAttribute(wt)}_onInteraction=e=>{let t=j(e);if(t instanceof HTMLElement){let o=t.closest(`[${un}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(dn)),e.append(t);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??Ve.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ve.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(wt),rippleConfig:{centered:e.hasAttribute(Jr),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:a}}},u=new Et(s,this._ngZone,t,this._platform,this._injector),d=!s.rippleDisabled;d&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:d}),e.removeAttribute(un)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Hi=new g("MAT_BUTTON_CONFIG");function eo(n){return n==null?void 0:Rt(n)}var to=(()=>{class n{_elementRef=c(N);_ngZone=c(F);_animationsDisabled=Dt();_config=c(Hi,{optional:!0});_focusMonitor=c(tn);_cleanupClick;_renderer=c(Te);_rippleLoader=c(qr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(je).load(Qr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=z({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(Se("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),tt(o.color?"mat-"+o.color:""),oe("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",V],disabled:[2,"disabled","disabled",V],ariaDisabled:[2,"aria-disabled","ariaDisabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],tabIndex:[2,"tabIndex","tabIndex",eo],_tabindex:[2,"tabindex","_tabindex",eo]}})}return n})();var no=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({imports:[_e]})}return n})();var Vi=["matButton",""],Gi=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Wi=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ro=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),mf=(()=>{class n extends to{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Zi(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?ro.get(this._appearance):null,i=ro.get(e);o&&t.remove(...o),t.add(...i),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=H({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[St],attrs:Vi,ngContentSelectors:Wi,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(Fe(Gi),et(0,"span",0),re(1),zn(2,"span",1),re(3,1),$n(),re(4,2),et(5,"span",2)(6,"span",3)),t&2&&oe("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Zi(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var hf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=T({imports:[no,_e]})}return n})();export{oo as a,he as b,Jn as c,qn as d,uo as e,yo as f,_o as g,Eo as h,Co as i,or as j,Vs as k,Gt as l,Go as m,X as n,pt as o,bi as p,Du as q,U as r,ul as s,j as t,ll as u,Bu as v,_e as w,je as x,qu as y,Qu as z,J as A,nn as B,Li as C,Vr as D,Pi as E,wl as F,no as G,mf as H,hf as I};
