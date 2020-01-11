goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__29951__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29952__i = 0, G__29952__a = new Array(arguments.length -  0);
while (G__29952__i < G__29952__a.length) {G__29952__a[G__29952__i] = arguments[G__29952__i + 0]; ++G__29952__i;}
  args = new cljs.core.IndexedSeq(G__29952__a,0,null);
} 
return G__29951__delegate.call(this,args);};
G__29951.cljs$lang$maxFixedArity = 0;
G__29951.cljs$lang$applyTo = (function (arglist__29953){
var args = cljs.core.seq(arglist__29953);
return G__29951__delegate(args);
});
G__29951.cljs$core$IFn$_invoke$arity$variadic = G__29951__delegate;
return G__29951;
})()
);

(o.error = (function() { 
var G__29954__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29955__i = 0, G__29955__a = new Array(arguments.length -  0);
while (G__29955__i < G__29955__a.length) {G__29955__a[G__29955__i] = arguments[G__29955__i + 0]; ++G__29955__i;}
  args = new cljs.core.IndexedSeq(G__29955__a,0,null);
} 
return G__29954__delegate.call(this,args);};
G__29954.cljs$lang$maxFixedArity = 0;
G__29954.cljs$lang$applyTo = (function (arglist__29956){
var args = cljs.core.seq(arglist__29956);
return G__29954__delegate(args);
});
G__29954.cljs$core$IFn$_invoke$arity$variadic = G__29954__delegate;
return G__29954;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
