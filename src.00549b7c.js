parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B6dB":[function(require,module,exports) {
"use strict";var e,t=this&&this.__awaiter||function(e,t,n,l){return new(n||(n=Promise))(function(a,i){function r(e){try{c(l.next(e))}catch(t){i(t)}}function d(e){try{c(l.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(r,d)}c((l=l.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var n,l,a,i,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function d(i){return function(d){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,l&&(a=2&i[0]?l.return:i[0]?l.throw||((a=l.return)&&a.call(l),0):l.next)&&!(a=a.call(l,i[1])).done)return a;switch(l=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,l=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(6===i[0]&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(d){i=[6,d],l=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,d])}}};function l(){return e+window.location.hash.substring(1)}function a(){return t(this,void 0,void 0,function(){var t,a,i,r,d,c,o,s,p,h,u,m,f,y,g,w,E,C,b,T,x,v,L,M,H,j,k,B,I,N,_,O,R,S;return n(this,function(n){switch(n.label){case 0:return t=document.getElementById("content"),null==(a=document.getElementById("menu"))?[3,3]:[4,fetch(e)];case 1:return[4,n.sent().json()];case 2:if(c=n.sent(),console.log(c),b=document.createElement("ul"),"default"==c.type){for(i=0,r=Object.entries(c.classes);i<r.length;i++){for(d=r[i],h=d[0],u=d[1],(m=document.createElement("li")).className="item",(f=document.createElement("a")).href="#/"+h,f.innerText=h.replace("-"," "),(y=document.createElement("ul")).className="submenu",L=0;L<u.length;L++)v=document.createElement("li"),(C=document.createElement("a")).href="#/"+h+"/"+u[L],C.innerText=u[L].replace("-"," "),v.appendChild(C),y.appendChild(v);m.appendChild(f),m.appendChild(y),b.appendChild(m)}a.innerHTML="",a.appendChild(b)}n.label=3;case 3:return null==t?[3,6]:[4,fetch(l())];case 4:return[4,n.sent().json()];case 5:if(c=n.sent(),console.log(c),"default"==c.type){for(t.innerHTML="<h1>Main</h1>",b=document.createElement("ul"),o=0,s=Object.entries(c.classes);o<s.length;o++){for(p=s[o],h=p[0],u=p[1],(m=document.createElement("li")).className="item",(f=document.createElement("a")).href="#/"+h,f.innerText=h.replace("-"," "),(y=document.createElement("ul")).className="submenu",g=0,w=u;g<w.length;g++)E=w[g],v=document.createElement("li"),(C=document.createElement("a")).href="#/"+h+"/"+E,C.innerText=E.replace("-"," "),v.appendChild(C),y.appendChild(v);m.appendChild(f),m.appendChild(y),b.appendChild(m)}t.innerHTML="<h1>Main</h1>",t.appendChild(b),t.style.paddingRight="2em",t.style.paddingLeft="2em",t.style.paddingTop="1em",t.style.paddingBottom="1em",t.style.height="100%"}else if("class"==c.type){for(b=document.createElement("ul"),T=0,x=c.pages;T<x.length;T++)v=x[T],L=document.createElement("li"),(M=document.createElement("a")).href="#/"+c["class-name"]+"/"+v,M.innerText=v.replace("-"," "),L.appendChild(M),b.appendChild(L);t.innerHTML="<h1>"+c["class-name"].charAt(0).toUpperCase()+c["class-name"].slice(1)+"</h1>",t.appendChild(b),t.style.paddingRight="2em",t.style.paddingLeft="2em",t.style.paddingTop="1em",t.style.paddingBottom="1em",t.style.height="100%"}else if("page"==c.type)for(t.innerHTML="",(H=document.createElement("h1")).innerText=c.title,t.appendChild(H),(j=document.createElement("h5")).innerText="by: "+c.author,j.style.marginTop="0%",t.appendChild(j),k=0,B=c.elem;k<B.length;k++)"subtitle"==(I=B[k]).type?((N=document.createElement("h3")).innerText=I.text,t.appendChild(N)):"text"==I.type?((_=document.createElement("h4")).innerText=I.text,t.appendChild(_)):"img"==I.type?((S=document.createElement("img")).src=e+"/img/"+I.name,S.style.width="100%",t.appendChild(S)):"wrapimg"==I.type&&(O=document.createElement("div"),R=document.createElement("div"),(S=document.createElement("img")).src=e+"/img/"+I.name,S.style.width="100%","right"==I.side?(R.style.float="right",O.style.float="right",R.appendChild(S),R.style.width=I.width,O.style.width=100-parseInt(I.width.substring(0,2))+"%",t.appendChild(R),t.appendChild(O)):(R.style.float="left",O.style.float="left",O.appendChild(S),O.style.width=I.width,R.style.width=100-parseInt(I.width.substring(0,2))+"%",t.appendChild(O),t.appendChild(R)));n.label=6;case 6:return[2]}})})}e="http://localhost:8000/",window.addEventListener("load",a),window.addEventListener("hashchange",a,!1);
},{}]},{},["B6dB"], null)
//# sourceMappingURL=/school-websites/src.00549b7c.js.map