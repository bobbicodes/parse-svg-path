goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36671 = coll;
var G__36672 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36671,G__36672) : shadow.dom.lazy_native_coll_seq.call(null,G__36671,G__36672));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36710 = arguments.length;
switch (G__36710) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36717 = arguments.length;
switch (G__36717) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36738 = arguments.length;
switch (G__36738) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36744 = arguments.length;
switch (G__36744) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36755 = arguments.length;
switch (G__36755) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__36756 = document;
var G__36757 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36756,G__36757);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__36758 = shadow.dom.dom_node(parent);
var G__36759 = shadow.dom.dom_node(el);
return goog.dom.contains(G__36758,G__36759);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__36761 = shadow.dom.dom_node(el);
var G__36762 = cls;
return goog.dom.classlist.add(G__36761,G__36762);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__36765 = shadow.dom.dom_node(el);
var G__36766 = cls;
return goog.dom.classlist.remove(G__36765,G__36766);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36770 = arguments.length;
switch (G__36770) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__36771 = shadow.dom.dom_node(el);
var G__36772 = cls;
return goog.dom.classlist.toggle(G__36771,G__36772);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36773){if((e36773 instanceof Object)){
var e = e36773;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36773;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36778 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36779 = null;
var count__36780 = (0);
var i__36781 = (0);
while(true){
if((i__36781 < count__36780)){
var el = chunk__36779.cljs$core$IIndexed$_nth$arity$2(null,i__36781);
var handler_37353__$1 = ((function (seq__36778,chunk__36779,count__36780,i__36781,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36778,chunk__36779,count__36780,i__36781,el))
;
var G__36793_37354 = el;
var G__36794_37355 = cljs.core.name(ev);
var G__36795_37356 = handler_37353__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36793_37354,G__36794_37355,G__36795_37356) : shadow.dom.dom_listen.call(null,G__36793_37354,G__36794_37355,G__36795_37356));


var G__37359 = seq__36778;
var G__37360 = chunk__36779;
var G__37361 = count__36780;
var G__37362 = (i__36781 + (1));
seq__36778 = G__37359;
chunk__36779 = G__37360;
count__36780 = G__37361;
i__36781 = G__37362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36778);
if(temp__5735__auto__){
var seq__36778__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36778__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36778__$1);
var G__37363 = cljs.core.chunk_rest(seq__36778__$1);
var G__37364 = c__4609__auto__;
var G__37365 = cljs.core.count(c__4609__auto__);
var G__37366 = (0);
seq__36778 = G__37363;
chunk__36779 = G__37364;
count__36780 = G__37365;
i__36781 = G__37366;
continue;
} else {
var el = cljs.core.first(seq__36778__$1);
var handler_37368__$1 = ((function (seq__36778,chunk__36779,count__36780,i__36781,el,seq__36778__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36778,chunk__36779,count__36780,i__36781,el,seq__36778__$1,temp__5735__auto__))
;
var G__36796_37370 = el;
var G__36797_37371 = cljs.core.name(ev);
var G__36798_37372 = handler_37368__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36796_37370,G__36797_37371,G__36798_37372) : shadow.dom.dom_listen.call(null,G__36796_37370,G__36797_37371,G__36798_37372));


var G__37373 = cljs.core.next(seq__36778__$1);
var G__37374 = null;
var G__37375 = (0);
var G__37376 = (0);
seq__36778 = G__37373;
chunk__36779 = G__37374;
count__36780 = G__37375;
i__36781 = G__37376;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36801 = arguments.length;
switch (G__36801) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__36804 = shadow.dom.dom_node(el);
var G__36805 = cljs.core.name(ev);
var G__36806 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36804,G__36805,G__36806) : shadow.dom.dom_listen.call(null,G__36804,G__36805,G__36806));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__36807 = shadow.dom.dom_node(el);
var G__36808 = cljs.core.name(ev);
var G__36809 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__36807,G__36808,G__36809) : shadow.dom.dom_listen_remove.call(null,G__36807,G__36808,G__36809));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36810 = cljs.core.seq(events);
var chunk__36811 = null;
var count__36812 = (0);
var i__36813 = (0);
while(true){
if((i__36813 < count__36812)){
var vec__36820 = chunk__36811.cljs$core$IIndexed$_nth$arity$2(null,i__36813);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36820,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37379 = seq__36810;
var G__37380 = chunk__36811;
var G__37381 = count__36812;
var G__37382 = (i__36813 + (1));
seq__36810 = G__37379;
chunk__36811 = G__37380;
count__36812 = G__37381;
i__36813 = G__37382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36810);
if(temp__5735__auto__){
var seq__36810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36810__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36810__$1);
var G__37383 = cljs.core.chunk_rest(seq__36810__$1);
var G__37384 = c__4609__auto__;
var G__37385 = cljs.core.count(c__4609__auto__);
var G__37386 = (0);
seq__36810 = G__37383;
chunk__36811 = G__37384;
count__36812 = G__37385;
i__36813 = G__37386;
continue;
} else {
var vec__36823 = cljs.core.first(seq__36810__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36823,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37387 = cljs.core.next(seq__36810__$1);
var G__37388 = null;
var G__37389 = (0);
var G__37390 = (0);
seq__36810 = G__37387;
chunk__36811 = G__37388;
count__36812 = G__37389;
i__36813 = G__37390;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36826 = cljs.core.seq(styles);
var chunk__36827 = null;
var count__36828 = (0);
var i__36829 = (0);
while(true){
if((i__36829 < count__36828)){
var vec__36844 = chunk__36827.cljs$core$IIndexed$_nth$arity$2(null,i__36829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36844,(1),null);
var G__36848_37391 = dom;
var G__36849_37392 = cljs.core.name(k);
var G__36850_37393 = (((v == null))?"":v);
goog.style.setStyle(G__36848_37391,G__36849_37392,G__36850_37393);


var G__37394 = seq__36826;
var G__37395 = chunk__36827;
var G__37396 = count__36828;
var G__37397 = (i__36829 + (1));
seq__36826 = G__37394;
chunk__36827 = G__37395;
count__36828 = G__37396;
i__36829 = G__37397;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36826);
if(temp__5735__auto__){
var seq__36826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36826__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36826__$1);
var G__37398 = cljs.core.chunk_rest(seq__36826__$1);
var G__37399 = c__4609__auto__;
var G__37400 = cljs.core.count(c__4609__auto__);
var G__37401 = (0);
seq__36826 = G__37398;
chunk__36827 = G__37399;
count__36828 = G__37400;
i__36829 = G__37401;
continue;
} else {
var vec__36859 = cljs.core.first(seq__36826__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(1),null);
var G__36863_37402 = dom;
var G__36864_37403 = cljs.core.name(k);
var G__36865_37404 = (((v == null))?"":v);
goog.style.setStyle(G__36863_37402,G__36864_37403,G__36865_37404);


var G__37405 = cljs.core.next(seq__36826__$1);
var G__37406 = null;
var G__37407 = (0);
var G__37408 = (0);
seq__36826 = G__37405;
chunk__36827 = G__37406;
count__36828 = G__37407;
i__36829 = G__37408;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36871_37409 = key;
var G__36871_37410__$1 = (((G__36871_37409 instanceof cljs.core.Keyword))?G__36871_37409.fqn:null);
switch (G__36871_37410__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37412 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_37412,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_37412,"aria-");
}
})())){
el.setAttribute(ks_37412,value);
} else {
(el[ks_37412] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__36876 = shadow.dom.dom_node(el);
var G__36877 = cls;
return goog.dom.classlist.contains(G__36876,G__36877);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36896){
var map__36897 = p__36896;
var map__36897__$1 = (((((!((map__36897 == null))))?(((((map__36897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36897):map__36897);
var props = map__36897__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36897__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36900 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36905 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36905,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36905;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36909 = arguments.length;
switch (G__36909) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36910){
var vec__36911 = p__36910;
var seq__36912 = cljs.core.seq(vec__36911);
var first__36913 = cljs.core.first(seq__36912);
var seq__36912__$1 = cljs.core.next(seq__36912);
var nn = first__36913;
var first__36913__$1 = cljs.core.first(seq__36912__$1);
var seq__36912__$2 = cljs.core.next(seq__36912__$1);
var np = first__36913__$1;
var nc = seq__36912__$2;
var node = vec__36911;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36915 = nn;
var G__36916 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36915,G__36916) : create_fn.call(null,G__36915,G__36916));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36917 = nn;
var G__36918 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36917,G__36918) : create_fn.call(null,G__36917,G__36918));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36921 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921,(1),null);
var seq__36924_37426 = cljs.core.seq(node_children);
var chunk__36925_37427 = null;
var count__36926_37428 = (0);
var i__36927_37429 = (0);
while(true){
if((i__36927_37429 < count__36926_37428)){
var child_struct_37431 = chunk__36925_37427.cljs$core$IIndexed$_nth$arity$2(null,i__36927_37429);
var children_37432 = shadow.dom.dom_node(child_struct_37431);
if(cljs.core.seq_QMARK_(children_37432)){
var seq__36951_37433 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37432));
var chunk__36953_37434 = null;
var count__36954_37435 = (0);
var i__36955_37436 = (0);
while(true){
if((i__36955_37436 < count__36954_37435)){
var child_37438 = chunk__36953_37434.cljs$core$IIndexed$_nth$arity$2(null,i__36955_37436);
if(cljs.core.truth_(child_37438)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37438);


var G__37439 = seq__36951_37433;
var G__37440 = chunk__36953_37434;
var G__37441 = count__36954_37435;
var G__37442 = (i__36955_37436 + (1));
seq__36951_37433 = G__37439;
chunk__36953_37434 = G__37440;
count__36954_37435 = G__37441;
i__36955_37436 = G__37442;
continue;
} else {
var G__37443 = seq__36951_37433;
var G__37444 = chunk__36953_37434;
var G__37445 = count__36954_37435;
var G__37446 = (i__36955_37436 + (1));
seq__36951_37433 = G__37443;
chunk__36953_37434 = G__37444;
count__36954_37435 = G__37445;
i__36955_37436 = G__37446;
continue;
}
} else {
var temp__5735__auto___37447 = cljs.core.seq(seq__36951_37433);
if(temp__5735__auto___37447){
var seq__36951_37449__$1 = temp__5735__auto___37447;
if(cljs.core.chunked_seq_QMARK_(seq__36951_37449__$1)){
var c__4609__auto___37450 = cljs.core.chunk_first(seq__36951_37449__$1);
var G__37451 = cljs.core.chunk_rest(seq__36951_37449__$1);
var G__37452 = c__4609__auto___37450;
var G__37453 = cljs.core.count(c__4609__auto___37450);
var G__37454 = (0);
seq__36951_37433 = G__37451;
chunk__36953_37434 = G__37452;
count__36954_37435 = G__37453;
i__36955_37436 = G__37454;
continue;
} else {
var child_37455 = cljs.core.first(seq__36951_37449__$1);
if(cljs.core.truth_(child_37455)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37455);


var G__37456 = cljs.core.next(seq__36951_37449__$1);
var G__37457 = null;
var G__37458 = (0);
var G__37459 = (0);
seq__36951_37433 = G__37456;
chunk__36953_37434 = G__37457;
count__36954_37435 = G__37458;
i__36955_37436 = G__37459;
continue;
} else {
var G__37463 = cljs.core.next(seq__36951_37449__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__36951_37433 = G__37463;
chunk__36953_37434 = G__37464;
count__36954_37435 = G__37465;
i__36955_37436 = G__37466;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37432);
}


var G__37467 = seq__36924_37426;
var G__37468 = chunk__36925_37427;
var G__37469 = count__36926_37428;
var G__37470 = (i__36927_37429 + (1));
seq__36924_37426 = G__37467;
chunk__36925_37427 = G__37468;
count__36926_37428 = G__37469;
i__36927_37429 = G__37470;
continue;
} else {
var temp__5735__auto___37471 = cljs.core.seq(seq__36924_37426);
if(temp__5735__auto___37471){
var seq__36924_37472__$1 = temp__5735__auto___37471;
if(cljs.core.chunked_seq_QMARK_(seq__36924_37472__$1)){
var c__4609__auto___37473 = cljs.core.chunk_first(seq__36924_37472__$1);
var G__37474 = cljs.core.chunk_rest(seq__36924_37472__$1);
var G__37475 = c__4609__auto___37473;
var G__37476 = cljs.core.count(c__4609__auto___37473);
var G__37477 = (0);
seq__36924_37426 = G__37474;
chunk__36925_37427 = G__37475;
count__36926_37428 = G__37476;
i__36927_37429 = G__37477;
continue;
} else {
var child_struct_37478 = cljs.core.first(seq__36924_37472__$1);
var children_37479 = shadow.dom.dom_node(child_struct_37478);
if(cljs.core.seq_QMARK_(children_37479)){
var seq__36962_37480 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37479));
var chunk__36964_37481 = null;
var count__36965_37482 = (0);
var i__36966_37483 = (0);
while(true){
if((i__36966_37483 < count__36965_37482)){
var child_37484 = chunk__36964_37481.cljs$core$IIndexed$_nth$arity$2(null,i__36966_37483);
if(cljs.core.truth_(child_37484)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37484);


var G__37485 = seq__36962_37480;
var G__37486 = chunk__36964_37481;
var G__37487 = count__36965_37482;
var G__37488 = (i__36966_37483 + (1));
seq__36962_37480 = G__37485;
chunk__36964_37481 = G__37486;
count__36965_37482 = G__37487;
i__36966_37483 = G__37488;
continue;
} else {
var G__37492 = seq__36962_37480;
var G__37493 = chunk__36964_37481;
var G__37494 = count__36965_37482;
var G__37495 = (i__36966_37483 + (1));
seq__36962_37480 = G__37492;
chunk__36964_37481 = G__37493;
count__36965_37482 = G__37494;
i__36966_37483 = G__37495;
continue;
}
} else {
var temp__5735__auto___37496__$1 = cljs.core.seq(seq__36962_37480);
if(temp__5735__auto___37496__$1){
var seq__36962_37497__$1 = temp__5735__auto___37496__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36962_37497__$1)){
var c__4609__auto___37498 = cljs.core.chunk_first(seq__36962_37497__$1);
var G__37499 = cljs.core.chunk_rest(seq__36962_37497__$1);
var G__37500 = c__4609__auto___37498;
var G__37501 = cljs.core.count(c__4609__auto___37498);
var G__37502 = (0);
seq__36962_37480 = G__37499;
chunk__36964_37481 = G__37500;
count__36965_37482 = G__37501;
i__36966_37483 = G__37502;
continue;
} else {
var child_37503 = cljs.core.first(seq__36962_37497__$1);
if(cljs.core.truth_(child_37503)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37503);


var G__37505 = cljs.core.next(seq__36962_37497__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__36962_37480 = G__37505;
chunk__36964_37481 = G__37506;
count__36965_37482 = G__37507;
i__36966_37483 = G__37508;
continue;
} else {
var G__37509 = cljs.core.next(seq__36962_37497__$1);
var G__37510 = null;
var G__37511 = (0);
var G__37512 = (0);
seq__36962_37480 = G__37509;
chunk__36964_37481 = G__37510;
count__36965_37482 = G__37511;
i__36966_37483 = G__37512;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37479);
}


var G__37513 = cljs.core.next(seq__36924_37472__$1);
var G__37514 = null;
var G__37515 = (0);
var G__37516 = (0);
seq__36924_37426 = G__37513;
chunk__36925_37427 = G__37514;
count__36926_37428 = G__37515;
i__36927_37429 = G__37516;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__36979 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__36979);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36983 = cljs.core.seq(node);
var chunk__36984 = null;
var count__36985 = (0);
var i__36986 = (0);
while(true){
if((i__36986 < count__36985)){
var n = chunk__36984.cljs$core$IIndexed$_nth$arity$2(null,i__36986);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37521 = seq__36983;
var G__37522 = chunk__36984;
var G__37523 = count__36985;
var G__37524 = (i__36986 + (1));
seq__36983 = G__37521;
chunk__36984 = G__37522;
count__36985 = G__37523;
i__36986 = G__37524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36983);
if(temp__5735__auto__){
var seq__36983__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36983__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36983__$1);
var G__37525 = cljs.core.chunk_rest(seq__36983__$1);
var G__37526 = c__4609__auto__;
var G__37527 = cljs.core.count(c__4609__auto__);
var G__37528 = (0);
seq__36983 = G__37525;
chunk__36984 = G__37526;
count__36985 = G__37527;
i__36986 = G__37528;
continue;
} else {
var n = cljs.core.first(seq__36983__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37529 = cljs.core.next(seq__36983__$1);
var G__37530 = null;
var G__37531 = (0);
var G__37532 = (0);
seq__36983 = G__37529;
chunk__36984 = G__37530;
count__36985 = G__37531;
i__36986 = G__37532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__36988 = shadow.dom.dom_node(new$);
var G__36989 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__36988,G__36989);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36991 = arguments.length;
switch (G__36991) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36993 = arguments.length;
switch (G__36993) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36998 = arguments.length;
switch (G__36998) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37545 = arguments.length;
var i__4790__auto___37546 = (0);
while(true){
if((i__4790__auto___37546 < len__4789__auto___37545)){
args__4795__auto__.push((arguments[i__4790__auto___37546]));

var G__37547 = (i__4790__auto___37546 + (1));
i__4790__auto___37546 = G__37547;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37003_37556 = cljs.core.seq(nodes);
var chunk__37004_37557 = null;
var count__37005_37558 = (0);
var i__37006_37559 = (0);
while(true){
if((i__37006_37559 < count__37005_37558)){
var node_37560 = chunk__37004_37557.cljs$core$IIndexed$_nth$arity$2(null,i__37006_37559);
fragment.appendChild(shadow.dom._to_dom(node_37560));


var G__37561 = seq__37003_37556;
var G__37562 = chunk__37004_37557;
var G__37563 = count__37005_37558;
var G__37564 = (i__37006_37559 + (1));
seq__37003_37556 = G__37561;
chunk__37004_37557 = G__37562;
count__37005_37558 = G__37563;
i__37006_37559 = G__37564;
continue;
} else {
var temp__5735__auto___37565 = cljs.core.seq(seq__37003_37556);
if(temp__5735__auto___37565){
var seq__37003_37566__$1 = temp__5735__auto___37565;
if(cljs.core.chunked_seq_QMARK_(seq__37003_37566__$1)){
var c__4609__auto___37567 = cljs.core.chunk_first(seq__37003_37566__$1);
var G__37568 = cljs.core.chunk_rest(seq__37003_37566__$1);
var G__37569 = c__4609__auto___37567;
var G__37570 = cljs.core.count(c__4609__auto___37567);
var G__37571 = (0);
seq__37003_37556 = G__37568;
chunk__37004_37557 = G__37569;
count__37005_37558 = G__37570;
i__37006_37559 = G__37571;
continue;
} else {
var node_37572 = cljs.core.first(seq__37003_37566__$1);
fragment.appendChild(shadow.dom._to_dom(node_37572));


var G__37573 = cljs.core.next(seq__37003_37566__$1);
var G__37574 = null;
var G__37575 = (0);
var G__37576 = (0);
seq__37003_37556 = G__37573;
chunk__37004_37557 = G__37574;
count__37005_37558 = G__37575;
i__37006_37559 = G__37576;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37002){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37002));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37009_37577 = cljs.core.seq(scripts);
var chunk__37010_37578 = null;
var count__37011_37579 = (0);
var i__37012_37580 = (0);
while(true){
if((i__37012_37580 < count__37011_37579)){
var vec__37023_37582 = chunk__37010_37578.cljs$core$IIndexed$_nth$arity$2(null,i__37012_37580);
var script_tag_37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37023_37582,(0),null);
var script_body_37584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37023_37582,(1),null);
eval(script_body_37584);


var G__37585 = seq__37009_37577;
var G__37586 = chunk__37010_37578;
var G__37587 = count__37011_37579;
var G__37588 = (i__37012_37580 + (1));
seq__37009_37577 = G__37585;
chunk__37010_37578 = G__37586;
count__37011_37579 = G__37587;
i__37012_37580 = G__37588;
continue;
} else {
var temp__5735__auto___37589 = cljs.core.seq(seq__37009_37577);
if(temp__5735__auto___37589){
var seq__37009_37590__$1 = temp__5735__auto___37589;
if(cljs.core.chunked_seq_QMARK_(seq__37009_37590__$1)){
var c__4609__auto___37591 = cljs.core.chunk_first(seq__37009_37590__$1);
var G__37592 = cljs.core.chunk_rest(seq__37009_37590__$1);
var G__37593 = c__4609__auto___37591;
var G__37594 = cljs.core.count(c__4609__auto___37591);
var G__37595 = (0);
seq__37009_37577 = G__37592;
chunk__37010_37578 = G__37593;
count__37011_37579 = G__37594;
i__37012_37580 = G__37595;
continue;
} else {
var vec__37030_37596 = cljs.core.first(seq__37009_37590__$1);
var script_tag_37597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37030_37596,(0),null);
var script_body_37598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37030_37596,(1),null);
eval(script_body_37598);


var G__37599 = cljs.core.next(seq__37009_37590__$1);
var G__37600 = null;
var G__37601 = (0);
var G__37602 = (0);
seq__37009_37577 = G__37599;
chunk__37010_37578 = G__37600;
count__37011_37579 = G__37601;
i__37012_37580 = G__37602;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37033){
var vec__37034 = p__37033;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37034,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__37037 = shadow.dom.dom_node(el);
var G__37038 = cls;
return goog.dom.getAncestorByClass(G__37037,G__37038);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37042 = arguments.length;
switch (G__37042) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__37045 = shadow.dom.dom_node(el);
var G__37046 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__37045,G__37046);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__37048 = shadow.dom.dom_node(el);
var G__37049 = cljs.core.name(tag);
var G__37050 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__37048,G__37049,G__37050);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__37053 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__37053);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__37054 = shadow.dom.dom_node(dom);
var G__37055 = value;
return goog.dom.forms.setValue(G__37054,G__37055);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37058 = cljs.core.seq(style_keys);
var chunk__37059 = null;
var count__37060 = (0);
var i__37061 = (0);
while(true){
if((i__37061 < count__37060)){
var it = chunk__37059.cljs$core$IIndexed$_nth$arity$2(null,i__37061);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37610 = seq__37058;
var G__37611 = chunk__37059;
var G__37612 = count__37060;
var G__37613 = (i__37061 + (1));
seq__37058 = G__37610;
chunk__37059 = G__37611;
count__37060 = G__37612;
i__37061 = G__37613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37058);
if(temp__5735__auto__){
var seq__37058__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37058__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37058__$1);
var G__37615 = cljs.core.chunk_rest(seq__37058__$1);
var G__37616 = c__4609__auto__;
var G__37617 = cljs.core.count(c__4609__auto__);
var G__37618 = (0);
seq__37058 = G__37615;
chunk__37059 = G__37616;
count__37060 = G__37617;
i__37061 = G__37618;
continue;
} else {
var it = cljs.core.first(seq__37058__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37619 = cljs.core.next(seq__37058__$1);
var G__37620 = null;
var G__37621 = (0);
var G__37622 = (0);
seq__37058 = G__37619;
chunk__37059 = G__37620;
count__37060 = G__37621;
i__37061 = G__37622;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37069,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37074 = k37069;
var G__37074__$1 = (((G__37074 instanceof cljs.core.Keyword))?G__37074.fqn:null);
switch (G__37074__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37069,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37078){
var vec__37079 = p__37078;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37068){
var self__ = this;
var G__37068__$1 = this;
return (new cljs.core.RecordIter((0),G__37068__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__37087 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37087(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37070,other37071){
var self__ = this;
var this37070__$1 = this;
return (((!((other37071 == null)))) && ((this37070__$1.constructor === other37071.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37070__$1.x,other37071.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37070__$1.y,other37071.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37070__$1.__extmap,other37071.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37068){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37097 = cljs.core.keyword_identical_QMARK_;
var expr__37098 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37100 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__37101 = expr__37098;
return (pred__37097.cljs$core$IFn$_invoke$arity$2 ? pred__37097.cljs$core$IFn$_invoke$arity$2(G__37100,G__37101) : pred__37097.call(null,G__37100,G__37101));
})())){
return (new shadow.dom.Coordinate(G__37068,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37102 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__37103 = expr__37098;
return (pred__37097.cljs$core$IFn$_invoke$arity$2 ? pred__37097.cljs$core$IFn$_invoke$arity$2(G__37102,G__37103) : pred__37097.call(null,G__37102,G__37103));
})())){
return (new shadow.dom.Coordinate(self__.x,G__37068,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37068),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37068){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37068,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37072){
var extmap__4478__auto__ = (function (){var G__37106 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37072,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37072)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37106);
} else {
return G__37106;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37072),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37072),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__37109 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__37109);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__37112 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__37112);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__37114 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__37114);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37116,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37121 = k37116;
var G__37121__$1 = (((G__37121 instanceof cljs.core.Keyword))?G__37121.fqn:null);
switch (G__37121__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37116,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37126){
var vec__37127 = p__37126;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37127,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37127,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37115){
var self__ = this;
var G__37115__$1 = this;
return (new cljs.core.RecordIter((0),G__37115__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__37141 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__37141(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37117,other37118){
var self__ = this;
var this37117__$1 = this;
return (((!((other37118 == null)))) && ((this37117__$1.constructor === other37118.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37117__$1.w,other37118.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37117__$1.h,other37118.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37117__$1.__extmap,other37118.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37115){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37149 = cljs.core.keyword_identical_QMARK_;
var expr__37150 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__37152 = new cljs.core.Keyword(null,"w","w",354169001);
var G__37153 = expr__37150;
return (pred__37149.cljs$core$IFn$_invoke$arity$2 ? pred__37149.cljs$core$IFn$_invoke$arity$2(G__37152,G__37153) : pred__37149.call(null,G__37152,G__37153));
})())){
return (new shadow.dom.Size(G__37115,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37154 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__37155 = expr__37150;
return (pred__37149.cljs$core$IFn$_invoke$arity$2 ? pred__37149.cljs$core$IFn$_invoke$arity$2(G__37154,G__37155) : pred__37149.call(null,G__37154,G__37155));
})())){
return (new shadow.dom.Size(self__.w,G__37115,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37115),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37115){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37115,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37120){
var extmap__4478__auto__ = (function (){var G__37160 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37120,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37120)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37160);
} else {
return G__37160;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37120),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37120),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__37161 = shadow.dom.dom_node(el);
return goog.style.getSize(G__37161);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__37625 = (i + (1));
var G__37626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37625;
ret = G__37626;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37173){
var vec__37174 = p__37173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37174,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37186 = arguments.length;
switch (G__37186) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37193_37628 = new_node;
var G__37194_37629 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__37193_37628,G__37194_37629);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37196_37630 = new_node;
var G__37197_37631 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__37196_37630,G__37197_37631);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37632 = ps;
var G__37633 = (i + (1));
el__$1 = G__37632;
i = G__37633;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__37200 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__37200);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__37202 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__37202);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__37203 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__37203);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37207 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37210_37634 = cljs.core.seq(props);
var chunk__37211_37635 = null;
var count__37212_37636 = (0);
var i__37213_37637 = (0);
while(true){
if((i__37213_37637 < count__37212_37636)){
var vec__37228_37638 = chunk__37211_37635.cljs$core$IIndexed$_nth$arity$2(null,i__37213_37637);
var k_37639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228_37638,(0),null);
var v_37640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228_37638,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37639);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37639),v_37640);


var G__37641 = seq__37210_37634;
var G__37642 = chunk__37211_37635;
var G__37643 = count__37212_37636;
var G__37644 = (i__37213_37637 + (1));
seq__37210_37634 = G__37641;
chunk__37211_37635 = G__37642;
count__37212_37636 = G__37643;
i__37213_37637 = G__37644;
continue;
} else {
var temp__5735__auto___37645 = cljs.core.seq(seq__37210_37634);
if(temp__5735__auto___37645){
var seq__37210_37646__$1 = temp__5735__auto___37645;
if(cljs.core.chunked_seq_QMARK_(seq__37210_37646__$1)){
var c__4609__auto___37647 = cljs.core.chunk_first(seq__37210_37646__$1);
var G__37648 = cljs.core.chunk_rest(seq__37210_37646__$1);
var G__37649 = c__4609__auto___37647;
var G__37650 = cljs.core.count(c__4609__auto___37647);
var G__37651 = (0);
seq__37210_37634 = G__37648;
chunk__37211_37635 = G__37649;
count__37212_37636 = G__37650;
i__37213_37637 = G__37651;
continue;
} else {
var vec__37233_37652 = cljs.core.first(seq__37210_37646__$1);
var k_37653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37233_37652,(0),null);
var v_37654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37233_37652,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37653);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37653),v_37654);


var G__37655 = cljs.core.next(seq__37210_37646__$1);
var G__37656 = null;
var G__37657 = (0);
var G__37658 = (0);
seq__37210_37634 = G__37655;
chunk__37211_37635 = G__37656;
count__37212_37636 = G__37657;
i__37213_37637 = G__37658;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37238 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(1),null);
var seq__37242_37659 = cljs.core.seq(node_children);
var chunk__37244_37660 = null;
var count__37245_37661 = (0);
var i__37246_37662 = (0);
while(true){
if((i__37246_37662 < count__37245_37661)){
var child_struct_37663 = chunk__37244_37660.cljs$core$IIndexed$_nth$arity$2(null,i__37246_37662);
if((!((child_struct_37663 == null)))){
if(typeof child_struct_37663 === 'string'){
var text_37664 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37664),child_struct_37663].join(''));
} else {
var children_37665 = shadow.dom.svg_node(child_struct_37663);
if(cljs.core.seq_QMARK_(children_37665)){
var seq__37274_37666 = cljs.core.seq(children_37665);
var chunk__37276_37667 = null;
var count__37277_37668 = (0);
var i__37278_37669 = (0);
while(true){
if((i__37278_37669 < count__37277_37668)){
var child_37670 = chunk__37276_37667.cljs$core$IIndexed$_nth$arity$2(null,i__37278_37669);
if(cljs.core.truth_(child_37670)){
node.appendChild(child_37670);


var G__37671 = seq__37274_37666;
var G__37672 = chunk__37276_37667;
var G__37673 = count__37277_37668;
var G__37674 = (i__37278_37669 + (1));
seq__37274_37666 = G__37671;
chunk__37276_37667 = G__37672;
count__37277_37668 = G__37673;
i__37278_37669 = G__37674;
continue;
} else {
var G__37675 = seq__37274_37666;
var G__37676 = chunk__37276_37667;
var G__37677 = count__37277_37668;
var G__37678 = (i__37278_37669 + (1));
seq__37274_37666 = G__37675;
chunk__37276_37667 = G__37676;
count__37277_37668 = G__37677;
i__37278_37669 = G__37678;
continue;
}
} else {
var temp__5735__auto___37679 = cljs.core.seq(seq__37274_37666);
if(temp__5735__auto___37679){
var seq__37274_37680__$1 = temp__5735__auto___37679;
if(cljs.core.chunked_seq_QMARK_(seq__37274_37680__$1)){
var c__4609__auto___37681 = cljs.core.chunk_first(seq__37274_37680__$1);
var G__37682 = cljs.core.chunk_rest(seq__37274_37680__$1);
var G__37683 = c__4609__auto___37681;
var G__37684 = cljs.core.count(c__4609__auto___37681);
var G__37685 = (0);
seq__37274_37666 = G__37682;
chunk__37276_37667 = G__37683;
count__37277_37668 = G__37684;
i__37278_37669 = G__37685;
continue;
} else {
var child_37686 = cljs.core.first(seq__37274_37680__$1);
if(cljs.core.truth_(child_37686)){
node.appendChild(child_37686);


var G__37687 = cljs.core.next(seq__37274_37680__$1);
var G__37688 = null;
var G__37689 = (0);
var G__37690 = (0);
seq__37274_37666 = G__37687;
chunk__37276_37667 = G__37688;
count__37277_37668 = G__37689;
i__37278_37669 = G__37690;
continue;
} else {
var G__37691 = cljs.core.next(seq__37274_37680__$1);
var G__37692 = null;
var G__37693 = (0);
var G__37694 = (0);
seq__37274_37666 = G__37691;
chunk__37276_37667 = G__37692;
count__37277_37668 = G__37693;
i__37278_37669 = G__37694;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37665);
}
}


var G__37695 = seq__37242_37659;
var G__37696 = chunk__37244_37660;
var G__37697 = count__37245_37661;
var G__37698 = (i__37246_37662 + (1));
seq__37242_37659 = G__37695;
chunk__37244_37660 = G__37696;
count__37245_37661 = G__37697;
i__37246_37662 = G__37698;
continue;
} else {
var G__37699 = seq__37242_37659;
var G__37700 = chunk__37244_37660;
var G__37701 = count__37245_37661;
var G__37702 = (i__37246_37662 + (1));
seq__37242_37659 = G__37699;
chunk__37244_37660 = G__37700;
count__37245_37661 = G__37701;
i__37246_37662 = G__37702;
continue;
}
} else {
var temp__5735__auto___37703 = cljs.core.seq(seq__37242_37659);
if(temp__5735__auto___37703){
var seq__37242_37704__$1 = temp__5735__auto___37703;
if(cljs.core.chunked_seq_QMARK_(seq__37242_37704__$1)){
var c__4609__auto___37705 = cljs.core.chunk_first(seq__37242_37704__$1);
var G__37706 = cljs.core.chunk_rest(seq__37242_37704__$1);
var G__37707 = c__4609__auto___37705;
var G__37708 = cljs.core.count(c__4609__auto___37705);
var G__37709 = (0);
seq__37242_37659 = G__37706;
chunk__37244_37660 = G__37707;
count__37245_37661 = G__37708;
i__37246_37662 = G__37709;
continue;
} else {
var child_struct_37710 = cljs.core.first(seq__37242_37704__$1);
if((!((child_struct_37710 == null)))){
if(typeof child_struct_37710 === 'string'){
var text_37711 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37711),child_struct_37710].join(''));
} else {
var children_37712 = shadow.dom.svg_node(child_struct_37710);
if(cljs.core.seq_QMARK_(children_37712)){
var seq__37280_37713 = cljs.core.seq(children_37712);
var chunk__37282_37714 = null;
var count__37283_37715 = (0);
var i__37284_37716 = (0);
while(true){
if((i__37284_37716 < count__37283_37715)){
var child_37717 = chunk__37282_37714.cljs$core$IIndexed$_nth$arity$2(null,i__37284_37716);
if(cljs.core.truth_(child_37717)){
node.appendChild(child_37717);


var G__37718 = seq__37280_37713;
var G__37719 = chunk__37282_37714;
var G__37720 = count__37283_37715;
var G__37721 = (i__37284_37716 + (1));
seq__37280_37713 = G__37718;
chunk__37282_37714 = G__37719;
count__37283_37715 = G__37720;
i__37284_37716 = G__37721;
continue;
} else {
var G__37722 = seq__37280_37713;
var G__37723 = chunk__37282_37714;
var G__37724 = count__37283_37715;
var G__37725 = (i__37284_37716 + (1));
seq__37280_37713 = G__37722;
chunk__37282_37714 = G__37723;
count__37283_37715 = G__37724;
i__37284_37716 = G__37725;
continue;
}
} else {
var temp__5735__auto___37726__$1 = cljs.core.seq(seq__37280_37713);
if(temp__5735__auto___37726__$1){
var seq__37280_37727__$1 = temp__5735__auto___37726__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37280_37727__$1)){
var c__4609__auto___37728 = cljs.core.chunk_first(seq__37280_37727__$1);
var G__37729 = cljs.core.chunk_rest(seq__37280_37727__$1);
var G__37730 = c__4609__auto___37728;
var G__37731 = cljs.core.count(c__4609__auto___37728);
var G__37732 = (0);
seq__37280_37713 = G__37729;
chunk__37282_37714 = G__37730;
count__37283_37715 = G__37731;
i__37284_37716 = G__37732;
continue;
} else {
var child_37733 = cljs.core.first(seq__37280_37727__$1);
if(cljs.core.truth_(child_37733)){
node.appendChild(child_37733);


var G__37734 = cljs.core.next(seq__37280_37727__$1);
var G__37735 = null;
var G__37736 = (0);
var G__37737 = (0);
seq__37280_37713 = G__37734;
chunk__37282_37714 = G__37735;
count__37283_37715 = G__37736;
i__37284_37716 = G__37737;
continue;
} else {
var G__37738 = cljs.core.next(seq__37280_37727__$1);
var G__37739 = null;
var G__37740 = (0);
var G__37741 = (0);
seq__37280_37713 = G__37738;
chunk__37282_37714 = G__37739;
count__37283_37715 = G__37740;
i__37284_37716 = G__37741;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37712);
}
}


var G__37742 = cljs.core.next(seq__37242_37704__$1);
var G__37743 = null;
var G__37744 = (0);
var G__37745 = (0);
seq__37242_37659 = G__37742;
chunk__37244_37660 = G__37743;
count__37245_37661 = G__37744;
i__37246_37662 = G__37745;
continue;
} else {
var G__37746 = cljs.core.next(seq__37242_37704__$1);
var G__37747 = null;
var G__37748 = (0);
var G__37749 = (0);
seq__37242_37659 = G__37746;
chunk__37244_37660 = G__37747;
count__37245_37661 = G__37748;
i__37246_37662 = G__37749;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__37286_37750 = shadow.dom._to_svg;
var G__37287_37751 = "string";
var G__37288_37752 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__37286_37750,G__37287_37751,G__37288_37752);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__37289_37753 = shadow.dom._to_svg;
var G__37290_37754 = "null";
var G__37291_37755 = (function (_){
return null;
});
goog.object.set(G__37289_37753,G__37290_37754,G__37291_37755);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37756 = arguments.length;
var i__4790__auto___37757 = (0);
while(true){
if((i__4790__auto___37757 < len__4789__auto___37756)){
args__4795__auto__.push((arguments[i__4790__auto___37757]));

var G__37758 = (i__4790__auto___37757 + (1));
i__4790__auto___37757 = G__37758;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37292){
var G__37293 = cljs.core.first(seq37292);
var seq37292__$1 = cljs.core.next(seq37292);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37293,seq37292__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37305 = arguments.length;
switch (G__37305) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__37310_37760 = shadow.dom.dom_node(el);
var G__37311_37761 = cljs.core.name(event);
var G__37312_37762 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37310_37760,G__37311_37761,G__37312_37762) : shadow.dom.dom_listen.call(null,G__37310_37760,G__37311_37761,G__37312_37762));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__35121__auto___37763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_37317){
var state_val_37318 = (state_37317[(1)]);
if((state_val_37318 === (1))){
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37317__$1,(2),once_or_cleanup);
} else {
if((state_val_37318 === (2))){
var inst_37314 = (state_37317[(2)]);
var inst_37315 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37317__$1 = (function (){var statearr_37319 = state_37317;
(statearr_37319[(7)] = inst_37314);

return statearr_37319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37317__$1,inst_37315);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__35057__auto__ = null;
var shadow$dom$state_machine__35057__auto____0 = (function (){
var statearr_37320 = [null,null,null,null,null,null,null,null];
(statearr_37320[(0)] = shadow$dom$state_machine__35057__auto__);

(statearr_37320[(1)] = (1));

return statearr_37320;
});
var shadow$dom$state_machine__35057__auto____1 = (function (state_37317){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_37317);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e37324){if((e37324 instanceof Object)){
var ex__35060__auto__ = e37324;
var statearr_37325_37764 = state_37317;
(statearr_37325_37764[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37765 = state_37317;
state_37317 = G__37765;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
shadow$dom$state_machine__35057__auto__ = function(state_37317){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__35057__auto____0.call(this);
case 1:
return shadow$dom$state_machine__35057__auto____1.call(this,state_37317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__35057__auto____0;
shadow$dom$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__35057__auto____1;
return shadow$dom$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_37326 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_37326[(6)] = c__35121__auto___37763);

return statearr_37326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
