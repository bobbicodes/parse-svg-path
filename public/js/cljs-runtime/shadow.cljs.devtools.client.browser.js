goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39024 = arguments.length;
var i__4790__auto___39025 = (0);
while(true){
if((i__4790__auto___39025 < len__4789__auto___39024)){
args__4795__auto__.push((arguments[i__4790__auto___39025]));

var G__39026 = (i__4790__auto___39025 + (1));
i__4790__auto___39025 = G__39026;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38869){
var G__38870 = cljs.core.first(seq38869);
var seq38869__$1 = cljs.core.next(seq38869);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38870,seq38869__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__38873){
var map__38874 = p__38873;
var map__38874__$1 = (((((!((map__38874 == null))))?(((((map__38874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38874):map__38874);
var src = map__38874__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38874__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38874__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38876 = cljs.core.seq(sources);
var chunk__38877 = null;
var count__38878 = (0);
var i__38879 = (0);
while(true){
if((i__38879 < count__38878)){
var map__38886 = chunk__38877.cljs$core$IIndexed$_nth$arity$2(null,i__38879);
var map__38886__$1 = (((((!((map__38886 == null))))?(((((map__38886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38886):map__38886);
var src = map__38886__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38886__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38886__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38886__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38886__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38888){var e_39027 = e38888;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39027);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39027.message)].join('')));
}

var G__39028 = seq__38876;
var G__39029 = chunk__38877;
var G__39030 = count__38878;
var G__39031 = (i__38879 + (1));
seq__38876 = G__39028;
chunk__38877 = G__39029;
count__38878 = G__39030;
i__38879 = G__39031;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38876);
if(temp__5735__auto__){
var seq__38876__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38876__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38876__$1);
var G__39032 = cljs.core.chunk_rest(seq__38876__$1);
var G__39033 = c__4609__auto__;
var G__39034 = cljs.core.count(c__4609__auto__);
var G__39035 = (0);
seq__38876 = G__39032;
chunk__38877 = G__39033;
count__38878 = G__39034;
i__38879 = G__39035;
continue;
} else {
var map__38891 = cljs.core.first(seq__38876__$1);
var map__38891__$1 = (((((!((map__38891 == null))))?(((((map__38891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38891):map__38891);
var src = map__38891__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38891__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38893){var e_39036 = e38893;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39036);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39036.message)].join('')));
}

var G__39037 = cljs.core.next(seq__38876__$1);
var G__39038 = null;
var G__39039 = (0);
var G__39040 = (0);
seq__38876 = G__39037;
chunk__38877 = G__39038;
count__38878 = G__39039;
i__38879 = G__39040;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38894 = cljs.core.seq(js_requires);
var chunk__38895 = null;
var count__38896 = (0);
var i__38897 = (0);
while(true){
if((i__38897 < count__38896)){
var js_ns = chunk__38895.cljs$core$IIndexed$_nth$arity$2(null,i__38897);
var require_str_39041 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39041);


var G__39042 = seq__38894;
var G__39043 = chunk__38895;
var G__39044 = count__38896;
var G__39045 = (i__38897 + (1));
seq__38894 = G__39042;
chunk__38895 = G__39043;
count__38896 = G__39044;
i__38897 = G__39045;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38894);
if(temp__5735__auto__){
var seq__38894__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38894__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38894__$1);
var G__39046 = cljs.core.chunk_rest(seq__38894__$1);
var G__39047 = c__4609__auto__;
var G__39048 = cljs.core.count(c__4609__auto__);
var G__39049 = (0);
seq__38894 = G__39046;
chunk__38895 = G__39047;
count__38896 = G__39048;
i__38897 = G__39049;
continue;
} else {
var js_ns = cljs.core.first(seq__38894__$1);
var require_str_39050 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39050);


var G__39051 = cljs.core.next(seq__38894__$1);
var G__39052 = null;
var G__39053 = (0);
var G__39054 = (0);
seq__38894 = G__39051;
chunk__38895 = G__39052;
count__38896 = G__39053;
i__38897 = G__39054;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__38898 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__38898) : callback.call(null,G__38898));
} else {
var G__38899 = shadow.cljs.devtools.client.env.files_url();
var G__38900 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__38901 = "POST";
var G__38902 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__38903 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38899,G__38900,G__38901,G__38902,G__38903);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__38905){
var map__38906 = p__38905;
var map__38906__$1 = (((((!((map__38906 == null))))?(((((map__38906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38906):map__38906);
var msg = map__38906__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38906__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38906__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__38908 = info;
var map__38908__$1 = (((((!((map__38908 == null))))?(((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38908):map__38908);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38910(s__38911){
return (new cljs.core.LazySeq(null,(function (){
var s__38911__$1 = s__38911;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38911__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38916 = cljs.core.first(xs__6292__auto__);
var map__38916__$1 = (((((!((map__38916 == null))))?(((((map__38916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38916):map__38916);
var src = map__38916__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__38911__$1,map__38916,map__38916__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38908,map__38908__$1,sources,compiled,map__38906,map__38906__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38910_$_iter__38912(s__38913){
return (new cljs.core.LazySeq(null,((function (s__38911__$1,map__38916,map__38916__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38908,map__38908__$1,sources,compiled,map__38906,map__38906__$1,msg,info,reload_info){
return (function (){
var s__38913__$1 = s__38913;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38913__$1);
if(temp__5735__auto____$1){
var s__38913__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38913__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38913__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38915 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38914 = (0);
while(true){
if((i__38914 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38914);
cljs.core.chunk_append(b__38915,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39055 = (i__38914 + (1));
i__38914 = G__39055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38915),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38910_$_iter__38912(cljs.core.chunk_rest(s__38913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38915),null);
}
} else {
var warning = cljs.core.first(s__38913__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38910_$_iter__38912(cljs.core.rest(s__38913__$2)));
}
} else {
return null;
}
break;
}
});})(s__38911__$1,map__38916,map__38916__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38908,map__38908__$1,sources,compiled,map__38906,map__38906__$1,msg,info,reload_info))
,null,null));
});})(s__38911__$1,map__38916,map__38916__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38908,map__38908__$1,sources,compiled,map__38906,map__38906__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38910(cljs.core.rest(s__38911__$1)));
} else {
var G__39056 = cljs.core.rest(s__38911__$1);
s__38911__$1 = G__39056;
continue;
}
} else {
var G__39057 = cljs.core.rest(s__38911__$1);
s__38911__$1 = G__39057;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__38918_39058 = cljs.core.seq(warnings);
var chunk__38919_39059 = null;
var count__38920_39060 = (0);
var i__38921_39061 = (0);
while(true){
if((i__38921_39061 < count__38920_39060)){
var map__38926_39062 = chunk__38919_39059.cljs$core$IIndexed$_nth$arity$2(null,i__38921_39061);
var map__38926_39063__$1 = (((((!((map__38926_39062 == null))))?(((((map__38926_39062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38926_39062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38926_39062):map__38926_39062);
var w_39064 = map__38926_39063__$1;
var msg_39065__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926_39063__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926_39063__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926_39063__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926_39063__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39068)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39066),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39067),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39065__$1)].join(''));


var G__39069 = seq__38918_39058;
var G__39070 = chunk__38919_39059;
var G__39071 = count__38920_39060;
var G__39072 = (i__38921_39061 + (1));
seq__38918_39058 = G__39069;
chunk__38919_39059 = G__39070;
count__38920_39060 = G__39071;
i__38921_39061 = G__39072;
continue;
} else {
var temp__5735__auto___39073 = cljs.core.seq(seq__38918_39058);
if(temp__5735__auto___39073){
var seq__38918_39074__$1 = temp__5735__auto___39073;
if(cljs.core.chunked_seq_QMARK_(seq__38918_39074__$1)){
var c__4609__auto___39075 = cljs.core.chunk_first(seq__38918_39074__$1);
var G__39076 = cljs.core.chunk_rest(seq__38918_39074__$1);
var G__39077 = c__4609__auto___39075;
var G__39078 = cljs.core.count(c__4609__auto___39075);
var G__39079 = (0);
seq__38918_39058 = G__39076;
chunk__38919_39059 = G__39077;
count__38920_39060 = G__39078;
i__38921_39061 = G__39079;
continue;
} else {
var map__38928_39080 = cljs.core.first(seq__38918_39074__$1);
var map__38928_39081__$1 = (((((!((map__38928_39080 == null))))?(((((map__38928_39080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38928_39080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38928_39080):map__38928_39080);
var w_39082 = map__38928_39081__$1;
var msg_39083__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38928_39081__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38928_39081__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38928_39081__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38928_39081__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39086)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39084),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39085),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39083__$1)].join(''));


var G__39087 = cljs.core.next(seq__38918_39074__$1);
var G__39088 = null;
var G__39089 = (0);
var G__39090 = (0);
seq__38918_39058 = G__39087;
chunk__38919_39059 = G__39088;
count__38920_39060 = G__39089;
i__38921_39061 = G__39090;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38930){
var map__38931 = p__38930;
var map__38931__$1 = (((((!((map__38931 == null))))?(((((map__38931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38931):map__38931);
var src = map__38931__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38931__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38933){
var map__38934 = p__38933;
var map__38934__$1 = (((((!((map__38934 == null))))?(((((map__38934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38934):map__38934);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38936){
var map__38937 = p__38936;
var map__38937__$1 = (((((!((map__38937 == null))))?(((((map__38937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38937):map__38937);
var rc = map__38937__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38937__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__38904_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38904_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__38939){
var map__38940 = p__38939;
var map__38940__$1 = (((((!((map__38940 == null))))?(((((map__38940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38940):map__38940);
var msg = map__38940__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38940__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38942 = cljs.core.seq(updates);
var chunk__38944 = null;
var count__38945 = (0);
var i__38946 = (0);
while(true){
if((i__38946 < count__38945)){
var path = chunk__38944.cljs$core$IIndexed$_nth$arity$2(null,i__38946);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38972_39091 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38975_39092 = null;
var count__38976_39093 = (0);
var i__38977_39094 = (0);
while(true){
if((i__38977_39094 < count__38976_39093)){
var node_39095 = chunk__38975_39092.cljs$core$IIndexed$_nth$arity$2(null,i__38977_39094);
var path_match_39096 = shadow.cljs.devtools.client.browser.match_paths(node_39095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39096)){
var new_link_39097 = (function (){var G__38982 = node_39095.cloneNode(true);
G__38982.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38982;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39096], 0));

goog.dom.insertSiblingAfter(new_link_39097,node_39095);

goog.dom.removeNode(node_39095);


var G__39098 = seq__38972_39091;
var G__39099 = chunk__38975_39092;
var G__39100 = count__38976_39093;
var G__39101 = (i__38977_39094 + (1));
seq__38972_39091 = G__39098;
chunk__38975_39092 = G__39099;
count__38976_39093 = G__39100;
i__38977_39094 = G__39101;
continue;
} else {
var G__39102 = seq__38972_39091;
var G__39103 = chunk__38975_39092;
var G__39104 = count__38976_39093;
var G__39105 = (i__38977_39094 + (1));
seq__38972_39091 = G__39102;
chunk__38975_39092 = G__39103;
count__38976_39093 = G__39104;
i__38977_39094 = G__39105;
continue;
}
} else {
var temp__5735__auto___39106 = cljs.core.seq(seq__38972_39091);
if(temp__5735__auto___39106){
var seq__38972_39107__$1 = temp__5735__auto___39106;
if(cljs.core.chunked_seq_QMARK_(seq__38972_39107__$1)){
var c__4609__auto___39108 = cljs.core.chunk_first(seq__38972_39107__$1);
var G__39109 = cljs.core.chunk_rest(seq__38972_39107__$1);
var G__39110 = c__4609__auto___39108;
var G__39111 = cljs.core.count(c__4609__auto___39108);
var G__39112 = (0);
seq__38972_39091 = G__39109;
chunk__38975_39092 = G__39110;
count__38976_39093 = G__39111;
i__38977_39094 = G__39112;
continue;
} else {
var node_39113 = cljs.core.first(seq__38972_39107__$1);
var path_match_39114 = shadow.cljs.devtools.client.browser.match_paths(node_39113.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39114)){
var new_link_39115 = (function (){var G__38983 = node_39113.cloneNode(true);
G__38983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39114),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38983;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39114], 0));

goog.dom.insertSiblingAfter(new_link_39115,node_39113);

goog.dom.removeNode(node_39113);


var G__39116 = cljs.core.next(seq__38972_39107__$1);
var G__39117 = null;
var G__39118 = (0);
var G__39119 = (0);
seq__38972_39091 = G__39116;
chunk__38975_39092 = G__39117;
count__38976_39093 = G__39118;
i__38977_39094 = G__39119;
continue;
} else {
var G__39120 = cljs.core.next(seq__38972_39107__$1);
var G__39121 = null;
var G__39122 = (0);
var G__39123 = (0);
seq__38972_39091 = G__39120;
chunk__38975_39092 = G__39121;
count__38976_39093 = G__39122;
i__38977_39094 = G__39123;
continue;
}
}
} else {
}
}
break;
}


var G__39124 = seq__38942;
var G__39125 = chunk__38944;
var G__39126 = count__38945;
var G__39127 = (i__38946 + (1));
seq__38942 = G__39124;
chunk__38944 = G__39125;
count__38945 = G__39126;
i__38946 = G__39127;
continue;
} else {
var G__39128 = seq__38942;
var G__39129 = chunk__38944;
var G__39130 = count__38945;
var G__39131 = (i__38946 + (1));
seq__38942 = G__39128;
chunk__38944 = G__39129;
count__38945 = G__39130;
i__38946 = G__39131;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38942);
if(temp__5735__auto__){
var seq__38942__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38942__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38942__$1);
var G__39132 = cljs.core.chunk_rest(seq__38942__$1);
var G__39133 = c__4609__auto__;
var G__39134 = cljs.core.count(c__4609__auto__);
var G__39135 = (0);
seq__38942 = G__39132;
chunk__38944 = G__39133;
count__38945 = G__39134;
i__38946 = G__39135;
continue;
} else {
var path = cljs.core.first(seq__38942__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38984_39136 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38987_39137 = null;
var count__38988_39138 = (0);
var i__38989_39139 = (0);
while(true){
if((i__38989_39139 < count__38988_39138)){
var node_39140 = chunk__38987_39137.cljs$core$IIndexed$_nth$arity$2(null,i__38989_39139);
var path_match_39141 = shadow.cljs.devtools.client.browser.match_paths(node_39140.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39141)){
var new_link_39142 = (function (){var G__38994 = node_39140.cloneNode(true);
G__38994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39141),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38994;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39141], 0));

goog.dom.insertSiblingAfter(new_link_39142,node_39140);

goog.dom.removeNode(node_39140);


var G__39143 = seq__38984_39136;
var G__39144 = chunk__38987_39137;
var G__39145 = count__38988_39138;
var G__39146 = (i__38989_39139 + (1));
seq__38984_39136 = G__39143;
chunk__38987_39137 = G__39144;
count__38988_39138 = G__39145;
i__38989_39139 = G__39146;
continue;
} else {
var G__39147 = seq__38984_39136;
var G__39148 = chunk__38987_39137;
var G__39149 = count__38988_39138;
var G__39150 = (i__38989_39139 + (1));
seq__38984_39136 = G__39147;
chunk__38987_39137 = G__39148;
count__38988_39138 = G__39149;
i__38989_39139 = G__39150;
continue;
}
} else {
var temp__5735__auto___39151__$1 = cljs.core.seq(seq__38984_39136);
if(temp__5735__auto___39151__$1){
var seq__38984_39152__$1 = temp__5735__auto___39151__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38984_39152__$1)){
var c__4609__auto___39153 = cljs.core.chunk_first(seq__38984_39152__$1);
var G__39154 = cljs.core.chunk_rest(seq__38984_39152__$1);
var G__39155 = c__4609__auto___39153;
var G__39156 = cljs.core.count(c__4609__auto___39153);
var G__39157 = (0);
seq__38984_39136 = G__39154;
chunk__38987_39137 = G__39155;
count__38988_39138 = G__39156;
i__38989_39139 = G__39157;
continue;
} else {
var node_39158 = cljs.core.first(seq__38984_39152__$1);
var path_match_39159 = shadow.cljs.devtools.client.browser.match_paths(node_39158.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39159)){
var new_link_39160 = (function (){var G__38995 = node_39158.cloneNode(true);
G__38995.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39159),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38995;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39159], 0));

goog.dom.insertSiblingAfter(new_link_39160,node_39158);

goog.dom.removeNode(node_39158);


var G__39161 = cljs.core.next(seq__38984_39152__$1);
var G__39162 = null;
var G__39163 = (0);
var G__39164 = (0);
seq__38984_39136 = G__39161;
chunk__38987_39137 = G__39162;
count__38988_39138 = G__39163;
i__38989_39139 = G__39164;
continue;
} else {
var G__39165 = cljs.core.next(seq__38984_39152__$1);
var G__39166 = null;
var G__39167 = (0);
var G__39168 = (0);
seq__38984_39136 = G__39165;
chunk__38987_39137 = G__39166;
count__38988_39138 = G__39167;
i__38989_39139 = G__39168;
continue;
}
}
} else {
}
}
break;
}


var G__39169 = cljs.core.next(seq__38942__$1);
var G__39170 = null;
var G__39171 = (0);
var G__39172 = (0);
seq__38942 = G__39169;
chunk__38944 = G__39170;
count__38945 = G__39171;
i__38946 = G__39172;
continue;
} else {
var G__39173 = cljs.core.next(seq__38942__$1);
var G__39174 = null;
var G__39175 = (0);
var G__39176 = (0);
seq__38942 = G__39173;
chunk__38944 = G__39174;
count__38945 = G__39175;
i__38946 = G__39176;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38996){
var map__38997 = p__38996;
var map__38997__$1 = (((((!((map__38997 == null))))?(((((map__38997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38997):map__38997);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38999,done){
var map__39000 = p__38999;
var map__39000__$1 = (((((!((map__39000 == null))))?(((((map__39000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39000):map__39000);
var msg = map__39000__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39000__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39000__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39000__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39000__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39002){
var map__39003 = p__39002;
var map__39003__$1 = (((((!((map__39003 == null))))?(((((map__39003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39003):map__39003);
var src = map__39003__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39003__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e39005){var e = e39005;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39006,done){
var map__39007 = p__39006;
var map__39007__$1 = (((((!((map__39007 == null))))?(((((map__39007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39007):map__39007);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39007__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39007__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39009){
var map__39010 = p__39009;
var map__39010__$1 = (((((!((map__39010 == null))))?(((((map__39010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39010):map__39010);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39012,done){
var map__39013 = p__39012;
var map__39013__$1 = (((((!((map__39013 == null))))?(((((map__39013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39013):map__39013);
var msg = map__39013__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39013__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39015_39192 = type;
var G__39015_39193__$1 = (((G__39015_39192 instanceof cljs.core.Keyword))?G__39015_39192.fqn:null);
switch (G__39015_39193__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__39016 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__39017 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__39018 = "POST";
var G__39019 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__39020 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39016,G__39017,G__39018,G__39019,G__39020);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__39022 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__39021 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__39021.cljs$core$IFn$_invoke$arity$1 ? fexpr__39021.cljs$core$IFn$_invoke$arity$1(G__39022) : fexpr__39021.call(null,G__39022));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e39023){var e = e39023;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39195 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39195)){
var s_39196 = temp__5735__auto___39195;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_39196.onclose = (function (e){
return null;
}));

s_39196.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
