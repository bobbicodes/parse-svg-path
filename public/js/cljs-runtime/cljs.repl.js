goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39987){
var map__39988 = p__39987;
var map__39988__$1 = (((((!((map__39988 == null))))?(((((map__39988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39988):map__39988);
var m = map__39988__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39988__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39988__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39995_40208 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39996_40209 = null;
var count__39997_40210 = (0);
var i__39998_40211 = (0);
while(true){
if((i__39998_40211 < count__39997_40210)){
var f_40212 = chunk__39996_40209.cljs$core$IIndexed$_nth$arity$2(null,i__39998_40211);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40212], 0));


var G__40213 = seq__39995_40208;
var G__40214 = chunk__39996_40209;
var G__40215 = count__39997_40210;
var G__40216 = (i__39998_40211 + (1));
seq__39995_40208 = G__40213;
chunk__39996_40209 = G__40214;
count__39997_40210 = G__40215;
i__39998_40211 = G__40216;
continue;
} else {
var temp__5735__auto___40217 = cljs.core.seq(seq__39995_40208);
if(temp__5735__auto___40217){
var seq__39995_40218__$1 = temp__5735__auto___40217;
if(cljs.core.chunked_seq_QMARK_(seq__39995_40218__$1)){
var c__4609__auto___40219 = cljs.core.chunk_first(seq__39995_40218__$1);
var G__40220 = cljs.core.chunk_rest(seq__39995_40218__$1);
var G__40221 = c__4609__auto___40219;
var G__40222 = cljs.core.count(c__4609__auto___40219);
var G__40223 = (0);
seq__39995_40208 = G__40220;
chunk__39996_40209 = G__40221;
count__39997_40210 = G__40222;
i__39998_40211 = G__40223;
continue;
} else {
var f_40224 = cljs.core.first(seq__39995_40218__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40224], 0));


var G__40225 = cljs.core.next(seq__39995_40218__$1);
var G__40226 = null;
var G__40227 = (0);
var G__40228 = (0);
seq__39995_40208 = G__40225;
chunk__39996_40209 = G__40226;
count__39997_40210 = G__40227;
i__39998_40211 = G__40228;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40229 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40229], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40229)))?cljs.core.second(arglists_40229):arglists_40229)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40061_40234 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40062_40235 = null;
var count__40063_40236 = (0);
var i__40064_40237 = (0);
while(true){
if((i__40064_40237 < count__40063_40236)){
var vec__40108_40238 = chunk__40062_40235.cljs$core$IIndexed$_nth$arity$2(null,i__40064_40237);
var name_40239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108_40238,(0),null);
var map__40111_40240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40108_40238,(1),null);
var map__40111_40241__$1 = (((((!((map__40111_40240 == null))))?(((((map__40111_40240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40111_40240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40111_40240):map__40111_40240);
var doc_40242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40111_40241__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40111_40241__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40239], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40243], 0));

if(cljs.core.truth_(doc_40242)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40242], 0));
} else {
}


var G__40245 = seq__40061_40234;
var G__40246 = chunk__40062_40235;
var G__40247 = count__40063_40236;
var G__40248 = (i__40064_40237 + (1));
seq__40061_40234 = G__40245;
chunk__40062_40235 = G__40246;
count__40063_40236 = G__40247;
i__40064_40237 = G__40248;
continue;
} else {
var temp__5735__auto___40249 = cljs.core.seq(seq__40061_40234);
if(temp__5735__auto___40249){
var seq__40061_40250__$1 = temp__5735__auto___40249;
if(cljs.core.chunked_seq_QMARK_(seq__40061_40250__$1)){
var c__4609__auto___40251 = cljs.core.chunk_first(seq__40061_40250__$1);
var G__40252 = cljs.core.chunk_rest(seq__40061_40250__$1);
var G__40253 = c__4609__auto___40251;
var G__40254 = cljs.core.count(c__4609__auto___40251);
var G__40255 = (0);
seq__40061_40234 = G__40252;
chunk__40062_40235 = G__40253;
count__40063_40236 = G__40254;
i__40064_40237 = G__40255;
continue;
} else {
var vec__40114_40256 = cljs.core.first(seq__40061_40250__$1);
var name_40257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40114_40256,(0),null);
var map__40117_40258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40114_40256,(1),null);
var map__40117_40259__$1 = (((((!((map__40117_40258 == null))))?(((((map__40117_40258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40117_40258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40117_40258):map__40117_40258);
var doc_40260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117_40259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40117_40259__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40257], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40261], 0));

if(cljs.core.truth_(doc_40260)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40260], 0));
} else {
}


var G__40262 = cljs.core.next(seq__40061_40250__$1);
var G__40263 = null;
var G__40264 = (0);
var G__40265 = (0);
seq__40061_40234 = G__40262;
chunk__40062_40235 = G__40263;
count__40063_40236 = G__40264;
i__40064_40237 = G__40265;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40120 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40121 = null;
var count__40122 = (0);
var i__40123 = (0);
while(true){
if((i__40123 < count__40122)){
var role = chunk__40121.cljs$core$IIndexed$_nth$arity$2(null,i__40123);
var temp__5735__auto___40267__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40267__$1)){
var spec_40268 = temp__5735__auto___40267__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40268)], 0));
} else {
}


var G__40269 = seq__40120;
var G__40270 = chunk__40121;
var G__40271 = count__40122;
var G__40272 = (i__40123 + (1));
seq__40120 = G__40269;
chunk__40121 = G__40270;
count__40122 = G__40271;
i__40123 = G__40272;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40120);
if(temp__5735__auto____$1){
var seq__40120__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40120__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40120__$1);
var G__40273 = cljs.core.chunk_rest(seq__40120__$1);
var G__40274 = c__4609__auto__;
var G__40275 = cljs.core.count(c__4609__auto__);
var G__40276 = (0);
seq__40120 = G__40273;
chunk__40121 = G__40274;
count__40122 = G__40275;
i__40123 = G__40276;
continue;
} else {
var role = cljs.core.first(seq__40120__$1);
var temp__5735__auto___40277__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40277__$2)){
var spec_40278 = temp__5735__auto___40277__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40278)], 0));
} else {
}


var G__40279 = cljs.core.next(seq__40120__$1);
var G__40280 = null;
var G__40281 = (0);
var G__40282 = (0);
seq__40120 = G__40279;
chunk__40121 = G__40280;
count__40122 = G__40281;
i__40123 = G__40282;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40286 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40287 = cljs.core.ex_cause(t);
via = G__40286;
t = G__40287;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40130 = datafied_throwable;
var map__40130__$1 = (((((!((map__40130 == null))))?(((((map__40130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40130):map__40130);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40130__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40130__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40130__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40131 = cljs.core.last(via);
var map__40131__$1 = (((((!((map__40131 == null))))?(((((map__40131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40131):map__40131);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40131__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40131__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40131__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40132 = data;
var map__40132__$1 = (((((!((map__40132 == null))))?(((((map__40132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40132):map__40132);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40132__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40132__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40132__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40133 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40133__$1 = (((((!((map__40133 == null))))?(((((map__40133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40133):map__40133);
var top_data = map__40133__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40133__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40138 = phase;
var G__40138__$1 = (((G__40138 instanceof cljs.core.Keyword))?G__40138.fqn:null);
switch (G__40138__$1) {
case "read-source":
var map__40139 = data;
var map__40139__$1 = (((((!((map__40139 == null))))?(((((map__40139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40139):map__40139);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40145 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40145__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40145);
var G__40145__$2 = (cljs.core.truth_((function (){var fexpr__40146 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40146.cljs$core$IFn$_invoke$arity$1 ? fexpr__40146.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40146.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40145__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40145__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40145__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40147 = top_data;
var G__40147__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40147,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40147);
var G__40147__$2 = (cljs.core.truth_((function (){var fexpr__40150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40150.cljs$core$IFn$_invoke$arity$1 ? fexpr__40150.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40150.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40147__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40147__$1);
var G__40147__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40147__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40147__$2);
var G__40147__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40147__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40147__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40147__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40147__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40153 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153,(3),null);
var G__40156 = top_data;
var G__40156__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40156,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40156);
var G__40156__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40156__$1);
var G__40156__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40156__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40156__$2);
var G__40156__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40156__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40156__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40156__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40156__$4;
}

break;
case "execution":
var vec__40157 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40129_SHARP_){
var or__4185__auto__ = (p1__40129_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40161 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40161.cljs$core$IFn$_invoke$arity$1 ? fexpr__40161.cljs$core$IFn$_invoke$arity$1(p1__40129_SHARP_) : fexpr__40161.call(null,p1__40129_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40162 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40162__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40162,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40162);
var G__40162__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40162__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40162__$1);
var G__40162__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40162__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40162__$2);
var G__40162__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40162__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40162__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40162__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40162__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40138__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40165){
var map__40166 = p__40165;
var map__40166__$1 = (((((!((map__40166 == null))))?(((((map__40166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40166):map__40166);
var triage_data = map__40166__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40166__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40168 = phase;
var G__40168__$1 = (((G__40168 instanceof cljs.core.Keyword))?G__40168.fqn:null);
switch (G__40168__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40169 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40170 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40171 = loc;
var G__40172 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40173_40296 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40174_40297 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40175_40298 = true;
var _STAR_print_fn_STAR__temp_val__40176_40299 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40175_40298);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40176_40299);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40163_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40163_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40174_40297);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40173_40296);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40169,G__40170,G__40171,G__40172) : format.call(null,G__40169,G__40170,G__40171,G__40172));

break;
case "macroexpansion":
var G__40178 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40179 = cause_type;
var G__40180 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40181 = loc;
var G__40182 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40178,G__40179,G__40180,G__40181,G__40182) : format.call(null,G__40178,G__40179,G__40180,G__40181,G__40182));

break;
case "compile-syntax-check":
var G__40183 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40184 = cause_type;
var G__40185 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40186 = loc;
var G__40187 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40183,G__40184,G__40185,G__40186,G__40187) : format.call(null,G__40183,G__40184,G__40185,G__40186,G__40187));

break;
case "compilation":
var G__40189 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40190 = cause_type;
var G__40191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40192 = loc;
var G__40193 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40189,G__40190,G__40191,G__40192,G__40193) : format.call(null,G__40189,G__40190,G__40191,G__40192,G__40193));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40194 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40195 = symbol;
var G__40196 = loc;
var G__40197 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40198_40300 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40199_40301 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40200_40302 = true;
var _STAR_print_fn_STAR__temp_val__40201_40303 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40200_40302);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40201_40303);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40164_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40164_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40199_40301);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40198_40300);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40194,G__40195,G__40196,G__40197) : format.call(null,G__40194,G__40195,G__40196,G__40197));
} else {
var G__40202 = "Execution error%s at %s(%s).\n%s\n";
var G__40203 = cause_type;
var G__40204 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40205 = loc;
var G__40206 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40202,G__40203,G__40204,G__40205,G__40206) : format.call(null,G__40202,G__40203,G__40204,G__40205,G__40206));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40168__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
