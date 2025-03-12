"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=o(function(H,c){
var W=require("path").resolve,A=require('@stdlib/fs-read-wasm/dist').sync,O=A(W(__dirname,"..","src","main.wasm"));c.exports=O
});var p=o(function(I,f){
var S=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=y();function s(e){if(!(this instanceof s))return new s(e);if(!S(e))throw new TypeError(j('nullH0',e));return m.call(this,z,e,{env:{memory:e}}),this}g(s,m);q(s.prototype,"main",function(r,i,a,t){return this._instance.exports.stdlib_strided_dapxsum(r,i,a,t)});q(s.prototype,"ndarray",function(r,i,a,t,d){return this._instance.exports.stdlib_strided_dapxsum_ndarray(r,i,a,t,d)});f.exports=s
});var w=o(function(J,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/strided-base-stride2offset/dist'),T=require('@stdlib/wasm-memory/dist'),V=require('@stdlib/wasm-base-arrays2ptrs/dist'),k=require('@stdlib/wasm-base-strided2object/dist'),v=p();function n(){return this instanceof n?(v.call(this,new T({initial:0})),this):new n}B(n,v);h(n.prototype,"main",function(r,i,a,t){return this.ndarray(r,i,a,t,E(r,t))});h(n.prototype,"ndarray",function(r,i,a,t,d){var l,u;return l=V(this,[k(r,a,t,d)]),u=l[0],v.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});x.exports=n
});var b=o(function(K,_){
var C=w(),M=new C;M.initializeSync();_.exports=M
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=b(),F=p();D(R,"Module",F);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
