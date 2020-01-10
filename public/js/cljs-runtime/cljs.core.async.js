goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35184 = arguments.length;
switch (G__35184) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35185 = (function (f,blockable,meta35186){
this.f = f;
this.blockable = blockable;
this.meta35186 = meta35186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35187,meta35186__$1){
var self__ = this;
var _35187__$1 = this;
return (new cljs.core.async.t_cljs$core$async35185(self__.f,self__.blockable,meta35186__$1));
}));

(cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35187){
var self__ = this;
var _35187__$1 = this;
return self__.meta35186;
}));

(cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35186","meta35186",-257868298,null)], null);
}));

(cljs.core.async.t_cljs$core$async35185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35185");

(cljs.core.async.t_cljs$core$async35185.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35185.
 */
cljs.core.async.__GT_t_cljs$core$async35185 = (function cljs$core$async$__GT_t_cljs$core$async35185(f__$1,blockable__$1,meta35186){
return (new cljs.core.async.t_cljs$core$async35185(f__$1,blockable__$1,meta35186));
});

}

return (new cljs.core.async.t_cljs$core$async35185(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35190 = arguments.length;
switch (G__35190) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35192 = arguments.length;
switch (G__35192) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35194 = arguments.length;
switch (G__35194) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36624 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36624) : fn1.call(null,val_36624));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36624) : fn1.call(null,val_36624));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35196 = arguments.length;
switch (G__35196) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___36628 = n;
var x_36630 = (0);
while(true){
if((x_36630 < n__4666__auto___36628)){
(a[x_36630] = x_36630);

var G__36632 = (x_36630 + (1));
x_36630 = G__36632;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35197 = (function (flag,meta35198){
this.flag = flag;
this.meta35198 = meta35198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35199,meta35198__$1){
var self__ = this;
var _35199__$1 = this;
return (new cljs.core.async.t_cljs$core$async35197(self__.flag,meta35198__$1));
}));

(cljs.core.async.t_cljs$core$async35197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35199){
var self__ = this;
var _35199__$1 = this;
return self__.meta35198;
}));

(cljs.core.async.t_cljs$core$async35197.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35198","meta35198",1026258975,null)], null);
}));

(cljs.core.async.t_cljs$core$async35197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35197");

(cljs.core.async.t_cljs$core$async35197.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35197.
 */
cljs.core.async.__GT_t_cljs$core$async35197 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35197(flag__$1,meta35198){
return (new cljs.core.async.t_cljs$core$async35197(flag__$1,meta35198));
});

}

return (new cljs.core.async.t_cljs$core$async35197(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35200 = (function (flag,cb,meta35201){
this.flag = flag;
this.cb = cb;
this.meta35201 = meta35201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35202,meta35201__$1){
var self__ = this;
var _35202__$1 = this;
return (new cljs.core.async.t_cljs$core$async35200(self__.flag,self__.cb,meta35201__$1));
}));

(cljs.core.async.t_cljs$core$async35200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35202){
var self__ = this;
var _35202__$1 = this;
return self__.meta35201;
}));

(cljs.core.async.t_cljs$core$async35200.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35201","meta35201",-687734650,null)], null);
}));

(cljs.core.async.t_cljs$core$async35200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35200");

(cljs.core.async.t_cljs$core$async35200.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35200.
 */
cljs.core.async.__GT_t_cljs$core$async35200 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35200(flag__$1,cb__$1,meta35201){
return (new cljs.core.async.t_cljs$core$async35200(flag__$1,cb__$1,meta35201));
});

}

return (new cljs.core.async.t_cljs$core$async35200(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35203_SHARP_){
var G__35205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35203_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35205) : fret.call(null,G__35205));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35204_SHARP_){
var G__35206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35204_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35206) : fret.call(null,G__35206));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36640 = (i + (1));
i = G__36640;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36643 = arguments.length;
var i__4790__auto___36644 = (0);
while(true){
if((i__4790__auto___36644 < len__4789__auto___36643)){
args__4795__auto__.push((arguments[i__4790__auto___36644]));

var G__36645 = (i__4790__auto___36644 + (1));
i__4790__auto___36644 = G__36645;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35209){
var map__35210 = p__35209;
var map__35210__$1 = (((((!((map__35210 == null))))?(((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35210):map__35210);
var opts = map__35210__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35207){
var G__35208 = cljs.core.first(seq35207);
var seq35207__$1 = cljs.core.next(seq35207);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35208,seq35207__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35213 = arguments.length;
switch (G__35213) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35121__auto___36653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35237){
var state_val_35238 = (state_35237[(1)]);
if((state_val_35238 === (7))){
var inst_35233 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35239_36654 = state_35237__$1;
(statearr_35239_36654[(2)] = inst_35233);

(statearr_35239_36654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (1))){
var state_35237__$1 = state_35237;
var statearr_35240_36655 = state_35237__$1;
(statearr_35240_36655[(2)] = null);

(statearr_35240_36655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (4))){
var inst_35216 = (state_35237[(7)]);
var inst_35216__$1 = (state_35237[(2)]);
var inst_35217 = (inst_35216__$1 == null);
var state_35237__$1 = (function (){var statearr_35241 = state_35237;
(statearr_35241[(7)] = inst_35216__$1);

return statearr_35241;
})();
if(cljs.core.truth_(inst_35217)){
var statearr_35242_36656 = state_35237__$1;
(statearr_35242_36656[(1)] = (5));

} else {
var statearr_35243_36657 = state_35237__$1;
(statearr_35243_36657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (13))){
var state_35237__$1 = state_35237;
var statearr_35244_36658 = state_35237__$1;
(statearr_35244_36658[(2)] = null);

(statearr_35244_36658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (6))){
var inst_35216 = (state_35237[(7)]);
var state_35237__$1 = state_35237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35237__$1,(11),to,inst_35216);
} else {
if((state_val_35238 === (3))){
var inst_35235 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35237__$1,inst_35235);
} else {
if((state_val_35238 === (12))){
var state_35237__$1 = state_35237;
var statearr_35245_36659 = state_35237__$1;
(statearr_35245_36659[(2)] = null);

(statearr_35245_36659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (2))){
var state_35237__$1 = state_35237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35237__$1,(4),from);
} else {
if((state_val_35238 === (11))){
var inst_35226 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
if(cljs.core.truth_(inst_35226)){
var statearr_35246_36660 = state_35237__$1;
(statearr_35246_36660[(1)] = (12));

} else {
var statearr_35247_36661 = state_35237__$1;
(statearr_35247_36661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (9))){
var state_35237__$1 = state_35237;
var statearr_35248_36662 = state_35237__$1;
(statearr_35248_36662[(2)] = null);

(statearr_35248_36662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (5))){
var state_35237__$1 = state_35237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35249_36663 = state_35237__$1;
(statearr_35249_36663[(1)] = (8));

} else {
var statearr_35250_36664 = state_35237__$1;
(statearr_35250_36664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (14))){
var inst_35231 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35251_36665 = state_35237__$1;
(statearr_35251_36665[(2)] = inst_35231);

(statearr_35251_36665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (10))){
var inst_35223 = (state_35237[(2)]);
var state_35237__$1 = state_35237;
var statearr_35252_36666 = state_35237__$1;
(statearr_35252_36666[(2)] = inst_35223);

(statearr_35252_36666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35238 === (8))){
var inst_35220 = cljs.core.async.close_BANG_(to);
var state_35237__$1 = state_35237;
var statearr_35253_36667 = state_35237__$1;
(statearr_35253_36667[(2)] = inst_35220);

(statearr_35253_36667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_35254 = [null,null,null,null,null,null,null,null];
(statearr_35254[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_35254[(1)] = (1));

return statearr_35254;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_35237){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35237);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35255){if((e35255 instanceof Object)){
var ex__35060__auto__ = e35255;
var statearr_35256_36668 = state_35237;
(statearr_35256_36668[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36669 = state_35237;
state_35237 = G__36669;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_35237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_35237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35257 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35257[(6)] = c__35121__auto___36653);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__35258){
var vec__35259 = p__35258;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259,(1),null);
var job = vec__35259;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35121__auto___36670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35266){
var state_val_35267 = (state_35266[(1)]);
if((state_val_35267 === (1))){
var state_35266__$1 = state_35266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35266__$1,(2),res,v);
} else {
if((state_val_35267 === (2))){
var inst_35263 = (state_35266[(2)]);
var inst_35264 = cljs.core.async.close_BANG_(res);
var state_35266__$1 = (function (){var statearr_35268 = state_35266;
(statearr_35268[(7)] = inst_35263);

return statearr_35268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35266__$1,inst_35264);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0 = (function (){
var statearr_35269 = [null,null,null,null,null,null,null,null];
(statearr_35269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__);

(statearr_35269[(1)] = (1));

return statearr_35269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1 = (function (state_35266){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35266);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35270){if((e35270 instanceof Object)){
var ex__35060__auto__ = e35270;
var statearr_35271_36673 = state_35266;
(statearr_35271_36673[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36674 = state_35266;
state_35266 = G__36674;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = function(state_35266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1.call(this,state_35266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35272 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35272[(6)] = c__35121__auto___36670);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35273){
var vec__35274 = p__35273;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35274,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35274,(1),null);
var job = vec__35274;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___36675 = n;
var __36676 = (0);
while(true){
if((__36676 < n__4666__auto___36675)){
var G__35277_36677 = type;
var G__35277_36678__$1 = (((G__35277_36677 instanceof cljs.core.Keyword))?G__35277_36677.fqn:null);
switch (G__35277_36678__$1) {
case "compute":
var c__35121__auto___36680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36676,c__35121__auto___36680,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async){
return (function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = ((function (__36676,c__35121__auto___36680,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async){
return (function (state_35290){
var state_val_35291 = (state_35290[(1)]);
if((state_val_35291 === (1))){
var state_35290__$1 = state_35290;
var statearr_35292_36681 = state_35290__$1;
(statearr_35292_36681[(2)] = null);

(statearr_35292_36681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (2))){
var state_35290__$1 = state_35290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35290__$1,(4),jobs);
} else {
if((state_val_35291 === (3))){
var inst_35288 = (state_35290[(2)]);
var state_35290__$1 = state_35290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35290__$1,inst_35288);
} else {
if((state_val_35291 === (4))){
var inst_35280 = (state_35290[(2)]);
var inst_35281 = process(inst_35280);
var state_35290__$1 = state_35290;
if(cljs.core.truth_(inst_35281)){
var statearr_35293_36682 = state_35290__$1;
(statearr_35293_36682[(1)] = (5));

} else {
var statearr_35294_36683 = state_35290__$1;
(statearr_35294_36683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (5))){
var state_35290__$1 = state_35290;
var statearr_35295_36684 = state_35290__$1;
(statearr_35295_36684[(2)] = null);

(statearr_35295_36684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (6))){
var state_35290__$1 = state_35290;
var statearr_35296_36685 = state_35290__$1;
(statearr_35296_36685[(2)] = null);

(statearr_35296_36685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35291 === (7))){
var inst_35286 = (state_35290[(2)]);
var state_35290__$1 = state_35290;
var statearr_35297_36686 = state_35290__$1;
(statearr_35297_36686[(2)] = inst_35286);

(statearr_35297_36686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36676,c__35121__auto___36680,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async))
;
return ((function (__36676,switch__35056__auto__,c__35121__auto___36680,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0 = (function (){
var statearr_35298 = [null,null,null,null,null,null,null];
(statearr_35298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__);

(statearr_35298[(1)] = (1));

return statearr_35298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1 = (function (state_35290){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35290);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35299){if((e35299 instanceof Object)){
var ex__35060__auto__ = e35299;
var statearr_35300_36687 = state_35290;
(statearr_35300_36687[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36688 = state_35290;
state_35290 = G__36688;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = function(state_35290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1.call(this,state_35290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__;
})()
;})(__36676,switch__35056__auto__,c__35121__auto___36680,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async))
})();
var state__35123__auto__ = (function (){var statearr_35301 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35301[(6)] = c__35121__auto___36680);

return statearr_35301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
});})(__36676,c__35121__auto___36680,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async))
);


break;
case "async":
var c__35121__auto___36689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36676,c__35121__auto___36689,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async){
return (function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = ((function (__36676,c__35121__auto___36689,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async){
return (function (state_35314){
var state_val_35315 = (state_35314[(1)]);
if((state_val_35315 === (1))){
var state_35314__$1 = state_35314;
var statearr_35316_36690 = state_35314__$1;
(statearr_35316_36690[(2)] = null);

(statearr_35316_36690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (2))){
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35314__$1,(4),jobs);
} else {
if((state_val_35315 === (3))){
var inst_35312 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35314__$1,inst_35312);
} else {
if((state_val_35315 === (4))){
var inst_35304 = (state_35314[(2)]);
var inst_35305 = async(inst_35304);
var state_35314__$1 = state_35314;
if(cljs.core.truth_(inst_35305)){
var statearr_35317_36691 = state_35314__$1;
(statearr_35317_36691[(1)] = (5));

} else {
var statearr_35318_36692 = state_35314__$1;
(statearr_35318_36692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (5))){
var state_35314__$1 = state_35314;
var statearr_35319_36694 = state_35314__$1;
(statearr_35319_36694[(2)] = null);

(statearr_35319_36694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (6))){
var state_35314__$1 = state_35314;
var statearr_35320_36695 = state_35314__$1;
(statearr_35320_36695[(2)] = null);

(statearr_35320_36695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35315 === (7))){
var inst_35310 = (state_35314[(2)]);
var state_35314__$1 = state_35314;
var statearr_35321_36696 = state_35314__$1;
(statearr_35321_36696[(2)] = inst_35310);

(statearr_35321_36696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36676,c__35121__auto___36689,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async))
;
return ((function (__36676,switch__35056__auto__,c__35121__auto___36689,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0 = (function (){
var statearr_35322 = [null,null,null,null,null,null,null];
(statearr_35322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__);

(statearr_35322[(1)] = (1));

return statearr_35322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1 = (function (state_35314){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35314);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35323){if((e35323 instanceof Object)){
var ex__35060__auto__ = e35323;
var statearr_35324_36698 = state_35314;
(statearr_35324_36698[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36699 = state_35314;
state_35314 = G__36699;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = function(state_35314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1.call(this,state_35314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__;
})()
;})(__36676,switch__35056__auto__,c__35121__auto___36689,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async))
})();
var state__35123__auto__ = (function (){var statearr_35325 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35325[(6)] = c__35121__auto___36689);

return statearr_35325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
});})(__36676,c__35121__auto___36689,G__35277_36677,G__35277_36678__$1,n__4666__auto___36675,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35277_36678__$1)].join('')));

}

var G__36700 = (__36676 + (1));
__36676 = G__36700;
continue;
} else {
}
break;
}

var c__35121__auto___36701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35347){
var state_val_35348 = (state_35347[(1)]);
if((state_val_35348 === (7))){
var inst_35343 = (state_35347[(2)]);
var state_35347__$1 = state_35347;
var statearr_35349_36702 = state_35347__$1;
(statearr_35349_36702[(2)] = inst_35343);

(statearr_35349_36702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35348 === (1))){
var state_35347__$1 = state_35347;
var statearr_35350_36703 = state_35347__$1;
(statearr_35350_36703[(2)] = null);

(statearr_35350_36703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35348 === (4))){
var inst_35328 = (state_35347[(7)]);
var inst_35328__$1 = (state_35347[(2)]);
var inst_35329 = (inst_35328__$1 == null);
var state_35347__$1 = (function (){var statearr_35351 = state_35347;
(statearr_35351[(7)] = inst_35328__$1);

return statearr_35351;
})();
if(cljs.core.truth_(inst_35329)){
var statearr_35352_36704 = state_35347__$1;
(statearr_35352_36704[(1)] = (5));

} else {
var statearr_35353_36705 = state_35347__$1;
(statearr_35353_36705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35348 === (6))){
var inst_35333 = (state_35347[(8)]);
var inst_35328 = (state_35347[(7)]);
var inst_35333__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35335 = [inst_35328,inst_35333__$1];
var inst_35336 = (new cljs.core.PersistentVector(null,2,(5),inst_35334,inst_35335,null));
var state_35347__$1 = (function (){var statearr_35354 = state_35347;
(statearr_35354[(8)] = inst_35333__$1);

return statearr_35354;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35347__$1,(8),jobs,inst_35336);
} else {
if((state_val_35348 === (3))){
var inst_35345 = (state_35347[(2)]);
var state_35347__$1 = state_35347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35347__$1,inst_35345);
} else {
if((state_val_35348 === (2))){
var state_35347__$1 = state_35347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35347__$1,(4),from);
} else {
if((state_val_35348 === (9))){
var inst_35340 = (state_35347[(2)]);
var state_35347__$1 = (function (){var statearr_35355 = state_35347;
(statearr_35355[(9)] = inst_35340);

return statearr_35355;
})();
var statearr_35356_36706 = state_35347__$1;
(statearr_35356_36706[(2)] = null);

(statearr_35356_36706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35348 === (5))){
var inst_35331 = cljs.core.async.close_BANG_(jobs);
var state_35347__$1 = state_35347;
var statearr_35357_36707 = state_35347__$1;
(statearr_35357_36707[(2)] = inst_35331);

(statearr_35357_36707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35348 === (8))){
var inst_35333 = (state_35347[(8)]);
var inst_35338 = (state_35347[(2)]);
var state_35347__$1 = (function (){var statearr_35358 = state_35347;
(statearr_35358[(10)] = inst_35338);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35347__$1,(9),results,inst_35333);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0 = (function (){
var statearr_35359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__);

(statearr_35359[(1)] = (1));

return statearr_35359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1 = (function (state_35347){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35347);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35360){if((e35360 instanceof Object)){
var ex__35060__auto__ = e35360;
var statearr_35361_36708 = state_35347;
(statearr_35361_36708[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36709 = state_35347;
state_35347 = G__36709;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = function(state_35347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1.call(this,state_35347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35362 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35362[(6)] = c__35121__auto___36701);

return statearr_35362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


var c__35121__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35400){
var state_val_35401 = (state_35400[(1)]);
if((state_val_35401 === (7))){
var inst_35396 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35402_36711 = state_35400__$1;
(statearr_35402_36711[(2)] = inst_35396);

(statearr_35402_36711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (20))){
var state_35400__$1 = state_35400;
var statearr_35403_36712 = state_35400__$1;
(statearr_35403_36712[(2)] = null);

(statearr_35403_36712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (1))){
var state_35400__$1 = state_35400;
var statearr_35404_36713 = state_35400__$1;
(statearr_35404_36713[(2)] = null);

(statearr_35404_36713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (4))){
var inst_35365 = (state_35400[(7)]);
var inst_35365__$1 = (state_35400[(2)]);
var inst_35366 = (inst_35365__$1 == null);
var state_35400__$1 = (function (){var statearr_35405 = state_35400;
(statearr_35405[(7)] = inst_35365__$1);

return statearr_35405;
})();
if(cljs.core.truth_(inst_35366)){
var statearr_35406_36714 = state_35400__$1;
(statearr_35406_36714[(1)] = (5));

} else {
var statearr_35407_36715 = state_35400__$1;
(statearr_35407_36715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (15))){
var inst_35378 = (state_35400[(8)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35400__$1,(18),to,inst_35378);
} else {
if((state_val_35401 === (21))){
var inst_35391 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35408_36718 = state_35400__$1;
(statearr_35408_36718[(2)] = inst_35391);

(statearr_35408_36718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (13))){
var inst_35393 = (state_35400[(2)]);
var state_35400__$1 = (function (){var statearr_35409 = state_35400;
(statearr_35409[(9)] = inst_35393);

return statearr_35409;
})();
var statearr_35410_36719 = state_35400__$1;
(statearr_35410_36719[(2)] = null);

(statearr_35410_36719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (6))){
var inst_35365 = (state_35400[(7)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35400__$1,(11),inst_35365);
} else {
if((state_val_35401 === (17))){
var inst_35386 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
if(cljs.core.truth_(inst_35386)){
var statearr_35411_36720 = state_35400__$1;
(statearr_35411_36720[(1)] = (19));

} else {
var statearr_35412_36721 = state_35400__$1;
(statearr_35412_36721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (3))){
var inst_35398 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35400__$1,inst_35398);
} else {
if((state_val_35401 === (12))){
var inst_35375 = (state_35400[(10)]);
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35400__$1,(14),inst_35375);
} else {
if((state_val_35401 === (2))){
var state_35400__$1 = state_35400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35400__$1,(4),results);
} else {
if((state_val_35401 === (19))){
var state_35400__$1 = state_35400;
var statearr_35413_36722 = state_35400__$1;
(statearr_35413_36722[(2)] = null);

(statearr_35413_36722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (11))){
var inst_35375 = (state_35400[(2)]);
var state_35400__$1 = (function (){var statearr_35414 = state_35400;
(statearr_35414[(10)] = inst_35375);

return statearr_35414;
})();
var statearr_35415_36723 = state_35400__$1;
(statearr_35415_36723[(2)] = null);

(statearr_35415_36723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (9))){
var state_35400__$1 = state_35400;
var statearr_35416_36724 = state_35400__$1;
(statearr_35416_36724[(2)] = null);

(statearr_35416_36724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (5))){
var state_35400__$1 = state_35400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35417_36725 = state_35400__$1;
(statearr_35417_36725[(1)] = (8));

} else {
var statearr_35418_36726 = state_35400__$1;
(statearr_35418_36726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (14))){
var inst_35378 = (state_35400[(8)]);
var inst_35378__$1 = (state_35400[(2)]);
var inst_35379 = (inst_35378__$1 == null);
var inst_35380 = cljs.core.not(inst_35379);
var state_35400__$1 = (function (){var statearr_35419 = state_35400;
(statearr_35419[(8)] = inst_35378__$1);

return statearr_35419;
})();
if(inst_35380){
var statearr_35420_36727 = state_35400__$1;
(statearr_35420_36727[(1)] = (15));

} else {
var statearr_35421_36728 = state_35400__$1;
(statearr_35421_36728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (16))){
var state_35400__$1 = state_35400;
var statearr_35422_36729 = state_35400__$1;
(statearr_35422_36729[(2)] = false);

(statearr_35422_36729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (10))){
var inst_35372 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35423_36730 = state_35400__$1;
(statearr_35423_36730[(2)] = inst_35372);

(statearr_35423_36730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (18))){
var inst_35383 = (state_35400[(2)]);
var state_35400__$1 = state_35400;
var statearr_35424_36731 = state_35400__$1;
(statearr_35424_36731[(2)] = inst_35383);

(statearr_35424_36731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35401 === (8))){
var inst_35369 = cljs.core.async.close_BANG_(to);
var state_35400__$1 = state_35400;
var statearr_35425_36732 = state_35400__$1;
(statearr_35425_36732[(2)] = inst_35369);

(statearr_35425_36732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0 = (function (){
var statearr_35426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__);

(statearr_35426[(1)] = (1));

return statearr_35426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1 = (function (state_35400){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35400);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35427){if((e35427 instanceof Object)){
var ex__35060__auto__ = e35427;
var statearr_35428_36733 = state_35400;
(statearr_35428_36733[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36734 = state_35400;
state_35400 = G__36734;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__ = function(state_35400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1.call(this,state_35400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35057__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35429 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35429[(6)] = c__35121__auto__);

return statearr_35429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));

return c__35121__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35431 = arguments.length;
switch (G__35431) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35433 = arguments.length;
switch (G__35433) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35435 = arguments.length;
switch (G__35435) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__35121__auto___36740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35461){
var state_val_35462 = (state_35461[(1)]);
if((state_val_35462 === (7))){
var inst_35457 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
var statearr_35463_36741 = state_35461__$1;
(statearr_35463_36741[(2)] = inst_35457);

(statearr_35463_36741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (1))){
var state_35461__$1 = state_35461;
var statearr_35464_36742 = state_35461__$1;
(statearr_35464_36742[(2)] = null);

(statearr_35464_36742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (4))){
var inst_35438 = (state_35461[(7)]);
var inst_35438__$1 = (state_35461[(2)]);
var inst_35439 = (inst_35438__$1 == null);
var state_35461__$1 = (function (){var statearr_35465 = state_35461;
(statearr_35465[(7)] = inst_35438__$1);

return statearr_35465;
})();
if(cljs.core.truth_(inst_35439)){
var statearr_35466_36745 = state_35461__$1;
(statearr_35466_36745[(1)] = (5));

} else {
var statearr_35467_36746 = state_35461__$1;
(statearr_35467_36746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (13))){
var state_35461__$1 = state_35461;
var statearr_35468_36747 = state_35461__$1;
(statearr_35468_36747[(2)] = null);

(statearr_35468_36747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (6))){
var inst_35438 = (state_35461[(7)]);
var inst_35444 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35438) : p.call(null,inst_35438));
var state_35461__$1 = state_35461;
if(cljs.core.truth_(inst_35444)){
var statearr_35469_36748 = state_35461__$1;
(statearr_35469_36748[(1)] = (9));

} else {
var statearr_35470_36749 = state_35461__$1;
(statearr_35470_36749[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (3))){
var inst_35459 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35461__$1,inst_35459);
} else {
if((state_val_35462 === (12))){
var state_35461__$1 = state_35461;
var statearr_35471_36750 = state_35461__$1;
(statearr_35471_36750[(2)] = null);

(statearr_35471_36750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (2))){
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35461__$1,(4),ch);
} else {
if((state_val_35462 === (11))){
var inst_35438 = (state_35461[(7)]);
var inst_35448 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35461__$1,(8),inst_35448,inst_35438);
} else {
if((state_val_35462 === (9))){
var state_35461__$1 = state_35461;
var statearr_35472_36751 = state_35461__$1;
(statearr_35472_36751[(2)] = tc);

(statearr_35472_36751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (5))){
var inst_35441 = cljs.core.async.close_BANG_(tc);
var inst_35442 = cljs.core.async.close_BANG_(fc);
var state_35461__$1 = (function (){var statearr_35473 = state_35461;
(statearr_35473[(8)] = inst_35441);

return statearr_35473;
})();
var statearr_35474_36752 = state_35461__$1;
(statearr_35474_36752[(2)] = inst_35442);

(statearr_35474_36752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (14))){
var inst_35455 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
var statearr_35475_36753 = state_35461__$1;
(statearr_35475_36753[(2)] = inst_35455);

(statearr_35475_36753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (10))){
var state_35461__$1 = state_35461;
var statearr_35476_36760 = state_35461__$1;
(statearr_35476_36760[(2)] = fc);

(statearr_35476_36760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (8))){
var inst_35450 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
if(cljs.core.truth_(inst_35450)){
var statearr_35477_36763 = state_35461__$1;
(statearr_35477_36763[(1)] = (12));

} else {
var statearr_35478_36764 = state_35461__$1;
(statearr_35478_36764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_35479 = [null,null,null,null,null,null,null,null,null];
(statearr_35479[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_35479[(1)] = (1));

return statearr_35479;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_35461){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35461);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35480){if((e35480 instanceof Object)){
var ex__35060__auto__ = e35480;
var statearr_35481_36767 = state_35461;
(statearr_35481_36767[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36768 = state_35461;
state_35461 = G__36768;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_35461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_35461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35482 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35482[(6)] = c__35121__auto___36740);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35121__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35503){
var state_val_35504 = (state_35503[(1)]);
if((state_val_35504 === (7))){
var inst_35499 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35505_36774 = state_35503__$1;
(statearr_35505_36774[(2)] = inst_35499);

(statearr_35505_36774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (1))){
var inst_35483 = init;
var state_35503__$1 = (function (){var statearr_35506 = state_35503;
(statearr_35506[(7)] = inst_35483);

return statearr_35506;
})();
var statearr_35507_36775 = state_35503__$1;
(statearr_35507_36775[(2)] = null);

(statearr_35507_36775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (4))){
var inst_35486 = (state_35503[(8)]);
var inst_35486__$1 = (state_35503[(2)]);
var inst_35487 = (inst_35486__$1 == null);
var state_35503__$1 = (function (){var statearr_35508 = state_35503;
(statearr_35508[(8)] = inst_35486__$1);

return statearr_35508;
})();
if(cljs.core.truth_(inst_35487)){
var statearr_35509_36776 = state_35503__$1;
(statearr_35509_36776[(1)] = (5));

} else {
var statearr_35510_36777 = state_35503__$1;
(statearr_35510_36777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (6))){
var inst_35486 = (state_35503[(8)]);
var inst_35490 = (state_35503[(9)]);
var inst_35483 = (state_35503[(7)]);
var inst_35490__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35483,inst_35486) : f.call(null,inst_35483,inst_35486));
var inst_35491 = cljs.core.reduced_QMARK_(inst_35490__$1);
var state_35503__$1 = (function (){var statearr_35511 = state_35503;
(statearr_35511[(9)] = inst_35490__$1);

return statearr_35511;
})();
if(inst_35491){
var statearr_35512_36782 = state_35503__$1;
(statearr_35512_36782[(1)] = (8));

} else {
var statearr_35513_36783 = state_35503__$1;
(statearr_35513_36783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (3))){
var inst_35501 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35503__$1,inst_35501);
} else {
if((state_val_35504 === (2))){
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35503__$1,(4),ch);
} else {
if((state_val_35504 === (9))){
var inst_35490 = (state_35503[(9)]);
var inst_35483 = inst_35490;
var state_35503__$1 = (function (){var statearr_35514 = state_35503;
(statearr_35514[(7)] = inst_35483);

return statearr_35514;
})();
var statearr_35515_36787 = state_35503__$1;
(statearr_35515_36787[(2)] = null);

(statearr_35515_36787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (5))){
var inst_35483 = (state_35503[(7)]);
var state_35503__$1 = state_35503;
var statearr_35516_36788 = state_35503__$1;
(statearr_35516_36788[(2)] = inst_35483);

(statearr_35516_36788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (10))){
var inst_35497 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35517_36789 = state_35503__$1;
(statearr_35517_36789[(2)] = inst_35497);

(statearr_35517_36789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (8))){
var inst_35490 = (state_35503[(9)]);
var inst_35493 = cljs.core.deref(inst_35490);
var state_35503__$1 = state_35503;
var statearr_35518_36799 = state_35503__$1;
(statearr_35518_36799[(2)] = inst_35493);

(statearr_35518_36799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__35057__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35057__auto____0 = (function (){
var statearr_35519 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35519[(0)] = cljs$core$async$reduce_$_state_machine__35057__auto__);

(statearr_35519[(1)] = (1));

return statearr_35519;
});
var cljs$core$async$reduce_$_state_machine__35057__auto____1 = (function (state_35503){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35503);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35520){if((e35520 instanceof Object)){
var ex__35060__auto__ = e35520;
var statearr_35521_36802 = state_35503;
(statearr_35521_36802[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36803 = state_35503;
state_35503 = G__36803;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35057__auto__ = function(state_35503){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35057__auto____1.call(this,state_35503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35057__auto____0;
cljs$core$async$reduce_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35057__auto____1;
return cljs$core$async$reduce_$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35522 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35522[(6)] = c__35121__auto__);

return statearr_35522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));

return c__35121__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35121__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35528){
var state_val_35529 = (state_35528[(1)]);
if((state_val_35529 === (1))){
var inst_35523 = cljs.core.async.reduce(f__$1,init,ch);
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35528__$1,(2),inst_35523);
} else {
if((state_val_35529 === (2))){
var inst_35525 = (state_35528[(2)]);
var inst_35526 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35525) : f__$1.call(null,inst_35525));
var state_35528__$1 = state_35528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35528__$1,inst_35526);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__35057__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35057__auto____0 = (function (){
var statearr_35530 = [null,null,null,null,null,null,null];
(statearr_35530[(0)] = cljs$core$async$transduce_$_state_machine__35057__auto__);

(statearr_35530[(1)] = (1));

return statearr_35530;
});
var cljs$core$async$transduce_$_state_machine__35057__auto____1 = (function (state_35528){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35528);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35531){if((e35531 instanceof Object)){
var ex__35060__auto__ = e35531;
var statearr_35532_36836 = state_35528;
(statearr_35532_36836[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36837 = state_35528;
state_35528 = G__36837;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35057__auto__ = function(state_35528){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35057__auto____1.call(this,state_35528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35057__auto____0;
cljs$core$async$transduce_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35057__auto____1;
return cljs$core$async$transduce_$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35533 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35533[(6)] = c__35121__auto__);

return statearr_35533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));

return c__35121__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35535 = arguments.length;
switch (G__35535) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35121__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35560){
var state_val_35561 = (state_35560[(1)]);
if((state_val_35561 === (7))){
var inst_35542 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35562_36851 = state_35560__$1;
(statearr_35562_36851[(2)] = inst_35542);

(statearr_35562_36851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (1))){
var inst_35536 = cljs.core.seq(coll);
var inst_35537 = inst_35536;
var state_35560__$1 = (function (){var statearr_35563 = state_35560;
(statearr_35563[(7)] = inst_35537);

return statearr_35563;
})();
var statearr_35564_36852 = state_35560__$1;
(statearr_35564_36852[(2)] = null);

(statearr_35564_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (4))){
var inst_35537 = (state_35560[(7)]);
var inst_35540 = cljs.core.first(inst_35537);
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35560__$1,(7),ch,inst_35540);
} else {
if((state_val_35561 === (13))){
var inst_35554 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35565_36853 = state_35560__$1;
(statearr_35565_36853[(2)] = inst_35554);

(statearr_35565_36853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (6))){
var inst_35545 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35545)){
var statearr_35566_36854 = state_35560__$1;
(statearr_35566_36854[(1)] = (8));

} else {
var statearr_35567_36855 = state_35560__$1;
(statearr_35567_36855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (3))){
var inst_35558 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35560__$1,inst_35558);
} else {
if((state_val_35561 === (12))){
var state_35560__$1 = state_35560;
var statearr_35568_36856 = state_35560__$1;
(statearr_35568_36856[(2)] = null);

(statearr_35568_36856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (2))){
var inst_35537 = (state_35560[(7)]);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35537)){
var statearr_35569_36857 = state_35560__$1;
(statearr_35569_36857[(1)] = (4));

} else {
var statearr_35570_36858 = state_35560__$1;
(statearr_35570_36858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (11))){
var inst_35551 = cljs.core.async.close_BANG_(ch);
var state_35560__$1 = state_35560;
var statearr_35571_36862 = state_35560__$1;
(statearr_35571_36862[(2)] = inst_35551);

(statearr_35571_36862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (9))){
var state_35560__$1 = state_35560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35572_36866 = state_35560__$1;
(statearr_35572_36866[(1)] = (11));

} else {
var statearr_35573_36867 = state_35560__$1;
(statearr_35573_36867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (5))){
var inst_35537 = (state_35560[(7)]);
var state_35560__$1 = state_35560;
var statearr_35574_36868 = state_35560__$1;
(statearr_35574_36868[(2)] = inst_35537);

(statearr_35574_36868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (10))){
var inst_35556 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35575_36869 = state_35560__$1;
(statearr_35575_36869[(2)] = inst_35556);

(statearr_35575_36869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (8))){
var inst_35537 = (state_35560[(7)]);
var inst_35547 = cljs.core.next(inst_35537);
var inst_35537__$1 = inst_35547;
var state_35560__$1 = (function (){var statearr_35576 = state_35560;
(statearr_35576[(7)] = inst_35537__$1);

return statearr_35576;
})();
var statearr_35577_36870 = state_35560__$1;
(statearr_35577_36870[(2)] = null);

(statearr_35577_36870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_35578 = [null,null,null,null,null,null,null,null];
(statearr_35578[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_35578[(1)] = (1));

return statearr_35578;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_35560){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35560);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35579){if((e35579 instanceof Object)){
var ex__35060__auto__ = e35579;
var statearr_35580_36872 = state_35560;
(statearr_35580_36872[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_35560;
state_35560 = G__36873;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_35560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_35560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35581 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35581[(6)] = c__35121__auto__);

return statearr_35581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));

return c__35121__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35582 = (function (ch,cs,meta35583){
this.ch = ch;
this.cs = cs;
this.meta35583 = meta35583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35584,meta35583__$1){
var self__ = this;
var _35584__$1 = this;
return (new cljs.core.async.t_cljs$core$async35582(self__.ch,self__.cs,meta35583__$1));
}));

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35584){
var self__ = this;
var _35584__$1 = this;
return self__.meta35583;
}));

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35583","meta35583",522893110,null)], null);
}));

(cljs.core.async.t_cljs$core$async35582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35582");

(cljs.core.async.t_cljs$core$async35582.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35582.
 */
cljs.core.async.__GT_t_cljs$core$async35582 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35582(ch__$1,cs__$1,meta35583){
return (new cljs.core.async.t_cljs$core$async35582(ch__$1,cs__$1,meta35583));
});

}

return (new cljs.core.async.t_cljs$core$async35582(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35121__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35719){
var state_val_35720 = (state_35719[(1)]);
if((state_val_35720 === (7))){
var inst_35715 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35721_36875 = state_35719__$1;
(statearr_35721_36875[(2)] = inst_35715);

(statearr_35721_36875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (20))){
var inst_35618 = (state_35719[(7)]);
var inst_35630 = cljs.core.first(inst_35618);
var inst_35631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35630,(0),null);
var inst_35632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35630,(1),null);
var state_35719__$1 = (function (){var statearr_35722 = state_35719;
(statearr_35722[(8)] = inst_35631);

return statearr_35722;
})();
if(cljs.core.truth_(inst_35632)){
var statearr_35723_36878 = state_35719__$1;
(statearr_35723_36878[(1)] = (22));

} else {
var statearr_35724_36879 = state_35719__$1;
(statearr_35724_36879[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (27))){
var inst_35662 = (state_35719[(9)]);
var inst_35667 = (state_35719[(10)]);
var inst_35660 = (state_35719[(11)]);
var inst_35587 = (state_35719[(12)]);
var inst_35667__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35660,inst_35662);
var inst_35668 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35667__$1,inst_35587,done);
var state_35719__$1 = (function (){var statearr_35725 = state_35719;
(statearr_35725[(10)] = inst_35667__$1);

return statearr_35725;
})();
if(cljs.core.truth_(inst_35668)){
var statearr_35726_36880 = state_35719__$1;
(statearr_35726_36880[(1)] = (30));

} else {
var statearr_35727_36881 = state_35719__$1;
(statearr_35727_36881[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (1))){
var state_35719__$1 = state_35719;
var statearr_35728_36882 = state_35719__$1;
(statearr_35728_36882[(2)] = null);

(statearr_35728_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (24))){
var inst_35618 = (state_35719[(7)]);
var inst_35637 = (state_35719[(2)]);
var inst_35638 = cljs.core.next(inst_35618);
var inst_35596 = inst_35638;
var inst_35597 = null;
var inst_35598 = (0);
var inst_35599 = (0);
var state_35719__$1 = (function (){var statearr_35729 = state_35719;
(statearr_35729[(13)] = inst_35598);

(statearr_35729[(14)] = inst_35637);

(statearr_35729[(15)] = inst_35596);

(statearr_35729[(16)] = inst_35597);

(statearr_35729[(17)] = inst_35599);

return statearr_35729;
})();
var statearr_35730_36883 = state_35719__$1;
(statearr_35730_36883[(2)] = null);

(statearr_35730_36883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (39))){
var state_35719__$1 = state_35719;
var statearr_35734_36884 = state_35719__$1;
(statearr_35734_36884[(2)] = null);

(statearr_35734_36884[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (4))){
var inst_35587 = (state_35719[(12)]);
var inst_35587__$1 = (state_35719[(2)]);
var inst_35588 = (inst_35587__$1 == null);
var state_35719__$1 = (function (){var statearr_35735 = state_35719;
(statearr_35735[(12)] = inst_35587__$1);

return statearr_35735;
})();
if(cljs.core.truth_(inst_35588)){
var statearr_35736_36885 = state_35719__$1;
(statearr_35736_36885[(1)] = (5));

} else {
var statearr_35737_36886 = state_35719__$1;
(statearr_35737_36886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (15))){
var inst_35598 = (state_35719[(13)]);
var inst_35596 = (state_35719[(15)]);
var inst_35597 = (state_35719[(16)]);
var inst_35599 = (state_35719[(17)]);
var inst_35614 = (state_35719[(2)]);
var inst_35615 = (inst_35599 + (1));
var tmp35731 = inst_35598;
var tmp35732 = inst_35596;
var tmp35733 = inst_35597;
var inst_35596__$1 = tmp35732;
var inst_35597__$1 = tmp35733;
var inst_35598__$1 = tmp35731;
var inst_35599__$1 = inst_35615;
var state_35719__$1 = (function (){var statearr_35738 = state_35719;
(statearr_35738[(13)] = inst_35598__$1);

(statearr_35738[(15)] = inst_35596__$1);

(statearr_35738[(16)] = inst_35597__$1);

(statearr_35738[(18)] = inst_35614);

(statearr_35738[(17)] = inst_35599__$1);

return statearr_35738;
})();
var statearr_35739_36887 = state_35719__$1;
(statearr_35739_36887[(2)] = null);

(statearr_35739_36887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (21))){
var inst_35641 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35743_36888 = state_35719__$1;
(statearr_35743_36888[(2)] = inst_35641);

(statearr_35743_36888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (31))){
var inst_35667 = (state_35719[(10)]);
var inst_35671 = done(null);
var inst_35672 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35667);
var state_35719__$1 = (function (){var statearr_35744 = state_35719;
(statearr_35744[(19)] = inst_35671);

return statearr_35744;
})();
var statearr_35745_36889 = state_35719__$1;
(statearr_35745_36889[(2)] = inst_35672);

(statearr_35745_36889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (32))){
var inst_35659 = (state_35719[(20)]);
var inst_35662 = (state_35719[(9)]);
var inst_35660 = (state_35719[(11)]);
var inst_35661 = (state_35719[(21)]);
var inst_35674 = (state_35719[(2)]);
var inst_35675 = (inst_35662 + (1));
var tmp35740 = inst_35659;
var tmp35741 = inst_35660;
var tmp35742 = inst_35661;
var inst_35659__$1 = tmp35740;
var inst_35660__$1 = tmp35741;
var inst_35661__$1 = tmp35742;
var inst_35662__$1 = inst_35675;
var state_35719__$1 = (function (){var statearr_35746 = state_35719;
(statearr_35746[(20)] = inst_35659__$1);

(statearr_35746[(9)] = inst_35662__$1);

(statearr_35746[(11)] = inst_35660__$1);

(statearr_35746[(21)] = inst_35661__$1);

(statearr_35746[(22)] = inst_35674);

return statearr_35746;
})();
var statearr_35747_36890 = state_35719__$1;
(statearr_35747_36890[(2)] = null);

(statearr_35747_36890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (40))){
var inst_35687 = (state_35719[(23)]);
var inst_35691 = done(null);
var inst_35692 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35687);
var state_35719__$1 = (function (){var statearr_35748 = state_35719;
(statearr_35748[(24)] = inst_35691);

return statearr_35748;
})();
var statearr_35749_36891 = state_35719__$1;
(statearr_35749_36891[(2)] = inst_35692);

(statearr_35749_36891[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (33))){
var inst_35678 = (state_35719[(25)]);
var inst_35680 = cljs.core.chunked_seq_QMARK_(inst_35678);
var state_35719__$1 = state_35719;
if(inst_35680){
var statearr_35750_36892 = state_35719__$1;
(statearr_35750_36892[(1)] = (36));

} else {
var statearr_35751_36893 = state_35719__$1;
(statearr_35751_36893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (13))){
var inst_35608 = (state_35719[(26)]);
var inst_35611 = cljs.core.async.close_BANG_(inst_35608);
var state_35719__$1 = state_35719;
var statearr_35752_36894 = state_35719__$1;
(statearr_35752_36894[(2)] = inst_35611);

(statearr_35752_36894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (22))){
var inst_35631 = (state_35719[(8)]);
var inst_35634 = cljs.core.async.close_BANG_(inst_35631);
var state_35719__$1 = state_35719;
var statearr_35753_36895 = state_35719__$1;
(statearr_35753_36895[(2)] = inst_35634);

(statearr_35753_36895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (36))){
var inst_35678 = (state_35719[(25)]);
var inst_35682 = cljs.core.chunk_first(inst_35678);
var inst_35683 = cljs.core.chunk_rest(inst_35678);
var inst_35684 = cljs.core.count(inst_35682);
var inst_35659 = inst_35683;
var inst_35660 = inst_35682;
var inst_35661 = inst_35684;
var inst_35662 = (0);
var state_35719__$1 = (function (){var statearr_35754 = state_35719;
(statearr_35754[(20)] = inst_35659);

(statearr_35754[(9)] = inst_35662);

(statearr_35754[(11)] = inst_35660);

(statearr_35754[(21)] = inst_35661);

return statearr_35754;
})();
var statearr_35755_36899 = state_35719__$1;
(statearr_35755_36899[(2)] = null);

(statearr_35755_36899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (41))){
var inst_35678 = (state_35719[(25)]);
var inst_35694 = (state_35719[(2)]);
var inst_35695 = cljs.core.next(inst_35678);
var inst_35659 = inst_35695;
var inst_35660 = null;
var inst_35661 = (0);
var inst_35662 = (0);
var state_35719__$1 = (function (){var statearr_35756 = state_35719;
(statearr_35756[(20)] = inst_35659);

(statearr_35756[(9)] = inst_35662);

(statearr_35756[(11)] = inst_35660);

(statearr_35756[(21)] = inst_35661);

(statearr_35756[(27)] = inst_35694);

return statearr_35756;
})();
var statearr_35757_36903 = state_35719__$1;
(statearr_35757_36903[(2)] = null);

(statearr_35757_36903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (43))){
var state_35719__$1 = state_35719;
var statearr_35758_36904 = state_35719__$1;
(statearr_35758_36904[(2)] = null);

(statearr_35758_36904[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (29))){
var inst_35703 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35759_36906 = state_35719__$1;
(statearr_35759_36906[(2)] = inst_35703);

(statearr_35759_36906[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (44))){
var inst_35712 = (state_35719[(2)]);
var state_35719__$1 = (function (){var statearr_35760 = state_35719;
(statearr_35760[(28)] = inst_35712);

return statearr_35760;
})();
var statearr_35761_36907 = state_35719__$1;
(statearr_35761_36907[(2)] = null);

(statearr_35761_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (6))){
var inst_35651 = (state_35719[(29)]);
var inst_35650 = cljs.core.deref(cs);
var inst_35651__$1 = cljs.core.keys(inst_35650);
var inst_35652 = cljs.core.count(inst_35651__$1);
var inst_35653 = cljs.core.reset_BANG_(dctr,inst_35652);
var inst_35658 = cljs.core.seq(inst_35651__$1);
var inst_35659 = inst_35658;
var inst_35660 = null;
var inst_35661 = (0);
var inst_35662 = (0);
var state_35719__$1 = (function (){var statearr_35762 = state_35719;
(statearr_35762[(20)] = inst_35659);

(statearr_35762[(9)] = inst_35662);

(statearr_35762[(11)] = inst_35660);

(statearr_35762[(21)] = inst_35661);

(statearr_35762[(29)] = inst_35651__$1);

(statearr_35762[(30)] = inst_35653);

return statearr_35762;
})();
var statearr_35763_36914 = state_35719__$1;
(statearr_35763_36914[(2)] = null);

(statearr_35763_36914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (28))){
var inst_35659 = (state_35719[(20)]);
var inst_35678 = (state_35719[(25)]);
var inst_35678__$1 = cljs.core.seq(inst_35659);
var state_35719__$1 = (function (){var statearr_35764 = state_35719;
(statearr_35764[(25)] = inst_35678__$1);

return statearr_35764;
})();
if(inst_35678__$1){
var statearr_35765_36919 = state_35719__$1;
(statearr_35765_36919[(1)] = (33));

} else {
var statearr_35766_36920 = state_35719__$1;
(statearr_35766_36920[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (25))){
var inst_35662 = (state_35719[(9)]);
var inst_35661 = (state_35719[(21)]);
var inst_35664 = (inst_35662 < inst_35661);
var inst_35665 = inst_35664;
var state_35719__$1 = state_35719;
if(cljs.core.truth_(inst_35665)){
var statearr_35767_36934 = state_35719__$1;
(statearr_35767_36934[(1)] = (27));

} else {
var statearr_35768_36935 = state_35719__$1;
(statearr_35768_36935[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (34))){
var state_35719__$1 = state_35719;
var statearr_35769_36936 = state_35719__$1;
(statearr_35769_36936[(2)] = null);

(statearr_35769_36936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (17))){
var state_35719__$1 = state_35719;
var statearr_35770_36937 = state_35719__$1;
(statearr_35770_36937[(2)] = null);

(statearr_35770_36937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (3))){
var inst_35717 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35719__$1,inst_35717);
} else {
if((state_val_35720 === (12))){
var inst_35646 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35771_36938 = state_35719__$1;
(statearr_35771_36938[(2)] = inst_35646);

(statearr_35771_36938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (2))){
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35719__$1,(4),ch);
} else {
if((state_val_35720 === (23))){
var state_35719__$1 = state_35719;
var statearr_35772_36945 = state_35719__$1;
(statearr_35772_36945[(2)] = null);

(statearr_35772_36945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (35))){
var inst_35701 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35773_36946 = state_35719__$1;
(statearr_35773_36946[(2)] = inst_35701);

(statearr_35773_36946[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (19))){
var inst_35618 = (state_35719[(7)]);
var inst_35622 = cljs.core.chunk_first(inst_35618);
var inst_35623 = cljs.core.chunk_rest(inst_35618);
var inst_35624 = cljs.core.count(inst_35622);
var inst_35596 = inst_35623;
var inst_35597 = inst_35622;
var inst_35598 = inst_35624;
var inst_35599 = (0);
var state_35719__$1 = (function (){var statearr_35774 = state_35719;
(statearr_35774[(13)] = inst_35598);

(statearr_35774[(15)] = inst_35596);

(statearr_35774[(16)] = inst_35597);

(statearr_35774[(17)] = inst_35599);

return statearr_35774;
})();
var statearr_35775_36947 = state_35719__$1;
(statearr_35775_36947[(2)] = null);

(statearr_35775_36947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (11))){
var inst_35596 = (state_35719[(15)]);
var inst_35618 = (state_35719[(7)]);
var inst_35618__$1 = cljs.core.seq(inst_35596);
var state_35719__$1 = (function (){var statearr_35776 = state_35719;
(statearr_35776[(7)] = inst_35618__$1);

return statearr_35776;
})();
if(inst_35618__$1){
var statearr_35777_36948 = state_35719__$1;
(statearr_35777_36948[(1)] = (16));

} else {
var statearr_35778_36949 = state_35719__$1;
(statearr_35778_36949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (9))){
var inst_35648 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35779_36950 = state_35719__$1;
(statearr_35779_36950[(2)] = inst_35648);

(statearr_35779_36950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (5))){
var inst_35594 = cljs.core.deref(cs);
var inst_35595 = cljs.core.seq(inst_35594);
var inst_35596 = inst_35595;
var inst_35597 = null;
var inst_35598 = (0);
var inst_35599 = (0);
var state_35719__$1 = (function (){var statearr_35780 = state_35719;
(statearr_35780[(13)] = inst_35598);

(statearr_35780[(15)] = inst_35596);

(statearr_35780[(16)] = inst_35597);

(statearr_35780[(17)] = inst_35599);

return statearr_35780;
})();
var statearr_35781_36957 = state_35719__$1;
(statearr_35781_36957[(2)] = null);

(statearr_35781_36957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (14))){
var state_35719__$1 = state_35719;
var statearr_35782_36958 = state_35719__$1;
(statearr_35782_36958[(2)] = null);

(statearr_35782_36958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (45))){
var inst_35709 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35783_36959 = state_35719__$1;
(statearr_35783_36959[(2)] = inst_35709);

(statearr_35783_36959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (26))){
var inst_35651 = (state_35719[(29)]);
var inst_35705 = (state_35719[(2)]);
var inst_35706 = cljs.core.seq(inst_35651);
var state_35719__$1 = (function (){var statearr_35784 = state_35719;
(statearr_35784[(31)] = inst_35705);

return statearr_35784;
})();
if(inst_35706){
var statearr_35785_36960 = state_35719__$1;
(statearr_35785_36960[(1)] = (42));

} else {
var statearr_35786_36961 = state_35719__$1;
(statearr_35786_36961[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (16))){
var inst_35618 = (state_35719[(7)]);
var inst_35620 = cljs.core.chunked_seq_QMARK_(inst_35618);
var state_35719__$1 = state_35719;
if(inst_35620){
var statearr_35787_36968 = state_35719__$1;
(statearr_35787_36968[(1)] = (19));

} else {
var statearr_35788_36969 = state_35719__$1;
(statearr_35788_36969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (38))){
var inst_35698 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35789_36970 = state_35719__$1;
(statearr_35789_36970[(2)] = inst_35698);

(statearr_35789_36970[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (30))){
var state_35719__$1 = state_35719;
var statearr_35790_36971 = state_35719__$1;
(statearr_35790_36971[(2)] = null);

(statearr_35790_36971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (10))){
var inst_35597 = (state_35719[(16)]);
var inst_35599 = (state_35719[(17)]);
var inst_35607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35597,inst_35599);
var inst_35608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35607,(0),null);
var inst_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35607,(1),null);
var state_35719__$1 = (function (){var statearr_35791 = state_35719;
(statearr_35791[(26)] = inst_35608);

return statearr_35791;
})();
if(cljs.core.truth_(inst_35609)){
var statearr_35792_36972 = state_35719__$1;
(statearr_35792_36972[(1)] = (13));

} else {
var statearr_35793_36973 = state_35719__$1;
(statearr_35793_36973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (18))){
var inst_35644 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35794_36974 = state_35719__$1;
(statearr_35794_36974[(2)] = inst_35644);

(statearr_35794_36974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (42))){
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35719__$1,(45),dchan);
} else {
if((state_val_35720 === (37))){
var inst_35687 = (state_35719[(23)]);
var inst_35678 = (state_35719[(25)]);
var inst_35587 = (state_35719[(12)]);
var inst_35687__$1 = cljs.core.first(inst_35678);
var inst_35688 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35687__$1,inst_35587,done);
var state_35719__$1 = (function (){var statearr_35795 = state_35719;
(statearr_35795[(23)] = inst_35687__$1);

return statearr_35795;
})();
if(cljs.core.truth_(inst_35688)){
var statearr_35796_36975 = state_35719__$1;
(statearr_35796_36975[(1)] = (39));

} else {
var statearr_35797_36976 = state_35719__$1;
(statearr_35797_36976[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (8))){
var inst_35598 = (state_35719[(13)]);
var inst_35599 = (state_35719[(17)]);
var inst_35601 = (inst_35599 < inst_35598);
var inst_35602 = inst_35601;
var state_35719__$1 = state_35719;
if(cljs.core.truth_(inst_35602)){
var statearr_35798_36977 = state_35719__$1;
(statearr_35798_36977[(1)] = (10));

} else {
var statearr_35799_36978 = state_35719__$1;
(statearr_35799_36978[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__35057__auto__ = null;
var cljs$core$async$mult_$_state_machine__35057__auto____0 = (function (){
var statearr_35800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = cljs$core$async$mult_$_state_machine__35057__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var cljs$core$async$mult_$_state_machine__35057__auto____1 = (function (state_35719){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35719);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35801){if((e35801 instanceof Object)){
var ex__35060__auto__ = e35801;
var statearr_35802_36980 = state_35719;
(statearr_35802_36980[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36981 = state_35719;
state_35719 = G__36981;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35057__auto__ = function(state_35719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35057__auto____1.call(this,state_35719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35057__auto____0;
cljs$core$async$mult_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35057__auto____1;
return cljs$core$async$mult_$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35803 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35803[(6)] = c__35121__auto___36874);

return statearr_35803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35805 = arguments.length;
switch (G__35805) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36994 = arguments.length;
var i__4790__auto___36995 = (0);
while(true){
if((i__4790__auto___36995 < len__4789__auto___36994)){
args__4795__auto__.push((arguments[i__4790__auto___36995]));

var G__36996 = (i__4790__auto___36995 + (1));
i__4790__auto___36995 = G__36996;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35810){
var map__35811 = p__35810;
var map__35811__$1 = (((((!((map__35811 == null))))?(((((map__35811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35811):map__35811);
var opts = map__35811__$1;
var statearr_35813_36999 = state;
(statearr_35813_36999[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35814_37000 = state;
(statearr_35814_37000[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35815_37001 = state;
(statearr_35815_37001[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35806){
var G__35807 = cljs.core.first(seq35806);
var seq35806__$1 = cljs.core.next(seq35806);
var G__35808 = cljs.core.first(seq35806__$1);
var seq35806__$2 = cljs.core.next(seq35806__$1);
var G__35809 = cljs.core.first(seq35806__$2);
var seq35806__$3 = cljs.core.next(seq35806__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35807,G__35808,G__35809,seq35806__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35816 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35817){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35817 = meta35817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35818,meta35817__$1){
var self__ = this;
var _35818__$1 = this;
return (new cljs.core.async.t_cljs$core$async35816(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35817__$1));
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35818){
var self__ = this;
var _35818__$1 = this;
return self__.meta35817;
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35817","meta35817",1477818697,null)], null);
}));

(cljs.core.async.t_cljs$core$async35816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35816");

(cljs.core.async.t_cljs$core$async35816.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35816.
 */
cljs.core.async.__GT_t_cljs$core$async35816 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35817){
return (new cljs.core.async.t_cljs$core$async35816(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35817));
});

}

return (new cljs.core.async.t_cljs$core$async35816(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35121__auto___37007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_35920){
var state_val_35921 = (state_35920[(1)]);
if((state_val_35921 === (7))){
var inst_35835 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
var statearr_35922_37008 = state_35920__$1;
(statearr_35922_37008[(2)] = inst_35835);

(statearr_35922_37008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (20))){
var inst_35847 = (state_35920[(7)]);
var state_35920__$1 = state_35920;
var statearr_35923_37016 = state_35920__$1;
(statearr_35923_37016[(2)] = inst_35847);

(statearr_35923_37016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (27))){
var state_35920__$1 = state_35920;
var statearr_35924_37017 = state_35920__$1;
(statearr_35924_37017[(2)] = null);

(statearr_35924_37017[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (1))){
var inst_35822 = (state_35920[(8)]);
var inst_35822__$1 = calc_state();
var inst_35824 = (inst_35822__$1 == null);
var inst_35825 = cljs.core.not(inst_35824);
var state_35920__$1 = (function (){var statearr_35925 = state_35920;
(statearr_35925[(8)] = inst_35822__$1);

return statearr_35925;
})();
if(inst_35825){
var statearr_35926_37021 = state_35920__$1;
(statearr_35926_37021[(1)] = (2));

} else {
var statearr_35927_37022 = state_35920__$1;
(statearr_35927_37022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (24))){
var inst_35894 = (state_35920[(9)]);
var inst_35880 = (state_35920[(10)]);
var inst_35871 = (state_35920[(11)]);
var inst_35894__$1 = (inst_35871.cljs$core$IFn$_invoke$arity$1 ? inst_35871.cljs$core$IFn$_invoke$arity$1(inst_35880) : inst_35871.call(null,inst_35880));
var state_35920__$1 = (function (){var statearr_35928 = state_35920;
(statearr_35928[(9)] = inst_35894__$1);

return statearr_35928;
})();
if(cljs.core.truth_(inst_35894__$1)){
var statearr_35929_37026 = state_35920__$1;
(statearr_35929_37026[(1)] = (29));

} else {
var statearr_35930_37027 = state_35920__$1;
(statearr_35930_37027[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (4))){
var inst_35838 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35838)){
var statearr_35931_37028 = state_35920__$1;
(statearr_35931_37028[(1)] = (8));

} else {
var statearr_35932_37029 = state_35920__$1;
(statearr_35932_37029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (15))){
var inst_35865 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35865)){
var statearr_35933_37039 = state_35920__$1;
(statearr_35933_37039[(1)] = (19));

} else {
var statearr_35934_37040 = state_35920__$1;
(statearr_35934_37040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (21))){
var inst_35870 = (state_35920[(12)]);
var inst_35870__$1 = (state_35920[(2)]);
var inst_35871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35870__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35870__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35870__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35920__$1 = (function (){var statearr_35935 = state_35920;
(statearr_35935[(13)] = inst_35872);

(statearr_35935[(12)] = inst_35870__$1);

(statearr_35935[(11)] = inst_35871);

return statearr_35935;
})();
return cljs.core.async.ioc_alts_BANG_(state_35920__$1,(22),inst_35873);
} else {
if((state_val_35921 === (31))){
var inst_35902 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35902)){
var statearr_35936_37043 = state_35920__$1;
(statearr_35936_37043[(1)] = (32));

} else {
var statearr_35937_37044 = state_35920__$1;
(statearr_35937_37044[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (32))){
var inst_35879 = (state_35920[(14)]);
var state_35920__$1 = state_35920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35920__$1,(35),out,inst_35879);
} else {
if((state_val_35921 === (33))){
var inst_35870 = (state_35920[(12)]);
var inst_35847 = inst_35870;
var state_35920__$1 = (function (){var statearr_35938 = state_35920;
(statearr_35938[(7)] = inst_35847);

return statearr_35938;
})();
var statearr_35939_37047 = state_35920__$1;
(statearr_35939_37047[(2)] = null);

(statearr_35939_37047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (13))){
var inst_35847 = (state_35920[(7)]);
var inst_35854 = inst_35847.cljs$lang$protocol_mask$partition0$;
var inst_35855 = (inst_35854 & (64));
var inst_35856 = inst_35847.cljs$core$ISeq$;
var inst_35857 = (cljs.core.PROTOCOL_SENTINEL === inst_35856);
var inst_35858 = ((inst_35855) || (inst_35857));
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35858)){
var statearr_35940_37051 = state_35920__$1;
(statearr_35940_37051[(1)] = (16));

} else {
var statearr_35941_37052 = state_35920__$1;
(statearr_35941_37052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (22))){
var inst_35879 = (state_35920[(14)]);
var inst_35880 = (state_35920[(10)]);
var inst_35878 = (state_35920[(2)]);
var inst_35879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35878,(0),null);
var inst_35880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35878,(1),null);
var inst_35881 = (inst_35879__$1 == null);
var inst_35882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35880__$1,change);
var inst_35883 = ((inst_35881) || (inst_35882));
var state_35920__$1 = (function (){var statearr_35942 = state_35920;
(statearr_35942[(14)] = inst_35879__$1);

(statearr_35942[(10)] = inst_35880__$1);

return statearr_35942;
})();
if(cljs.core.truth_(inst_35883)){
var statearr_35943_37056 = state_35920__$1;
(statearr_35943_37056[(1)] = (23));

} else {
var statearr_35944_37057 = state_35920__$1;
(statearr_35944_37057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (36))){
var inst_35870 = (state_35920[(12)]);
var inst_35847 = inst_35870;
var state_35920__$1 = (function (){var statearr_35945 = state_35920;
(statearr_35945[(7)] = inst_35847);

return statearr_35945;
})();
var statearr_35946_37062 = state_35920__$1;
(statearr_35946_37062[(2)] = null);

(statearr_35946_37062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (29))){
var inst_35894 = (state_35920[(9)]);
var state_35920__$1 = state_35920;
var statearr_35947_37063 = state_35920__$1;
(statearr_35947_37063[(2)] = inst_35894);

(statearr_35947_37063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (6))){
var state_35920__$1 = state_35920;
var statearr_35948_37064 = state_35920__$1;
(statearr_35948_37064[(2)] = false);

(statearr_35948_37064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (28))){
var inst_35890 = (state_35920[(2)]);
var inst_35891 = calc_state();
var inst_35847 = inst_35891;
var state_35920__$1 = (function (){var statearr_35949 = state_35920;
(statearr_35949[(7)] = inst_35847);

(statearr_35949[(15)] = inst_35890);

return statearr_35949;
})();
var statearr_35950_37065 = state_35920__$1;
(statearr_35950_37065[(2)] = null);

(statearr_35950_37065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (25))){
var inst_35916 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
var statearr_35951_37066 = state_35920__$1;
(statearr_35951_37066[(2)] = inst_35916);

(statearr_35951_37066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (34))){
var inst_35914 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
var statearr_35952_37067 = state_35920__$1;
(statearr_35952_37067[(2)] = inst_35914);

(statearr_35952_37067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (17))){
var state_35920__$1 = state_35920;
var statearr_35953_37073 = state_35920__$1;
(statearr_35953_37073[(2)] = false);

(statearr_35953_37073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (3))){
var state_35920__$1 = state_35920;
var statearr_35954_37075 = state_35920__$1;
(statearr_35954_37075[(2)] = false);

(statearr_35954_37075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (12))){
var inst_35918 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35920__$1,inst_35918);
} else {
if((state_val_35921 === (2))){
var inst_35822 = (state_35920[(8)]);
var inst_35827 = inst_35822.cljs$lang$protocol_mask$partition0$;
var inst_35828 = (inst_35827 & (64));
var inst_35829 = inst_35822.cljs$core$ISeq$;
var inst_35830 = (cljs.core.PROTOCOL_SENTINEL === inst_35829);
var inst_35831 = ((inst_35828) || (inst_35830));
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35831)){
var statearr_35955_37076 = state_35920__$1;
(statearr_35955_37076[(1)] = (5));

} else {
var statearr_35956_37077 = state_35920__$1;
(statearr_35956_37077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (23))){
var inst_35879 = (state_35920[(14)]);
var inst_35885 = (inst_35879 == null);
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35885)){
var statearr_35957_37082 = state_35920__$1;
(statearr_35957_37082[(1)] = (26));

} else {
var statearr_35958_37083 = state_35920__$1;
(statearr_35958_37083[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (35))){
var inst_35905 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
if(cljs.core.truth_(inst_35905)){
var statearr_35959_37084 = state_35920__$1;
(statearr_35959_37084[(1)] = (36));

} else {
var statearr_35960_37085 = state_35920__$1;
(statearr_35960_37085[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (19))){
var inst_35847 = (state_35920[(7)]);
var inst_35867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35847);
var state_35920__$1 = state_35920;
var statearr_35961_37086 = state_35920__$1;
(statearr_35961_37086[(2)] = inst_35867);

(statearr_35961_37086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (11))){
var inst_35847 = (state_35920[(7)]);
var inst_35851 = (inst_35847 == null);
var inst_35852 = cljs.core.not(inst_35851);
var state_35920__$1 = state_35920;
if(inst_35852){
var statearr_35962_37088 = state_35920__$1;
(statearr_35962_37088[(1)] = (13));

} else {
var statearr_35963_37089 = state_35920__$1;
(statearr_35963_37089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (9))){
var inst_35822 = (state_35920[(8)]);
var state_35920__$1 = state_35920;
var statearr_35964_37090 = state_35920__$1;
(statearr_35964_37090[(2)] = inst_35822);

(statearr_35964_37090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (5))){
var state_35920__$1 = state_35920;
var statearr_35965_37091 = state_35920__$1;
(statearr_35965_37091[(2)] = true);

(statearr_35965_37091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (14))){
var state_35920__$1 = state_35920;
var statearr_35966_37092 = state_35920__$1;
(statearr_35966_37092[(2)] = false);

(statearr_35966_37092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (26))){
var inst_35880 = (state_35920[(10)]);
var inst_35887 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35880);
var state_35920__$1 = state_35920;
var statearr_35967_37093 = state_35920__$1;
(statearr_35967_37093[(2)] = inst_35887);

(statearr_35967_37093[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (16))){
var state_35920__$1 = state_35920;
var statearr_35968_37094 = state_35920__$1;
(statearr_35968_37094[(2)] = true);

(statearr_35968_37094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (38))){
var inst_35910 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
var statearr_35969_37095 = state_35920__$1;
(statearr_35969_37095[(2)] = inst_35910);

(statearr_35969_37095[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (30))){
var inst_35872 = (state_35920[(13)]);
var inst_35880 = (state_35920[(10)]);
var inst_35871 = (state_35920[(11)]);
var inst_35897 = cljs.core.empty_QMARK_(inst_35871);
var inst_35898 = (inst_35872.cljs$core$IFn$_invoke$arity$1 ? inst_35872.cljs$core$IFn$_invoke$arity$1(inst_35880) : inst_35872.call(null,inst_35880));
var inst_35899 = cljs.core.not(inst_35898);
var inst_35900 = ((inst_35897) && (inst_35899));
var state_35920__$1 = state_35920;
var statearr_35970_37096 = state_35920__$1;
(statearr_35970_37096[(2)] = inst_35900);

(statearr_35970_37096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (10))){
var inst_35822 = (state_35920[(8)]);
var inst_35843 = (state_35920[(2)]);
var inst_35844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35843,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35843,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35843,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35847 = inst_35822;
var state_35920__$1 = (function (){var statearr_35971 = state_35920;
(statearr_35971[(16)] = inst_35845);

(statearr_35971[(17)] = inst_35844);

(statearr_35971[(7)] = inst_35847);

(statearr_35971[(18)] = inst_35846);

return statearr_35971;
})();
var statearr_35972_37104 = state_35920__$1;
(statearr_35972_37104[(2)] = null);

(statearr_35972_37104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (18))){
var inst_35862 = (state_35920[(2)]);
var state_35920__$1 = state_35920;
var statearr_35973_37105 = state_35920__$1;
(statearr_35973_37105[(2)] = inst_35862);

(statearr_35973_37105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (37))){
var state_35920__$1 = state_35920;
var statearr_35974_37107 = state_35920__$1;
(statearr_35974_37107[(2)] = null);

(statearr_35974_37107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (8))){
var inst_35822 = (state_35920[(8)]);
var inst_35840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35822);
var state_35920__$1 = state_35920;
var statearr_35975_37108 = state_35920__$1;
(statearr_35975_37108[(2)] = inst_35840);

(statearr_35975_37108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__35057__auto__ = null;
var cljs$core$async$mix_$_state_machine__35057__auto____0 = (function (){
var statearr_35976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35976[(0)] = cljs$core$async$mix_$_state_machine__35057__auto__);

(statearr_35976[(1)] = (1));

return statearr_35976;
});
var cljs$core$async$mix_$_state_machine__35057__auto____1 = (function (state_35920){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_35920);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e35977){if((e35977 instanceof Object)){
var ex__35060__auto__ = e35977;
var statearr_35978_37110 = state_35920;
(statearr_35978_37110[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37111 = state_35920;
state_35920 = G__37111;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35057__auto__ = function(state_35920){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35057__auto____1.call(this,state_35920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35057__auto____0;
cljs$core$async$mix_$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35057__auto____1;
return cljs$core$async$mix_$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_35979 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_35979[(6)] = c__35121__auto___37007);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35981 = arguments.length;
switch (G__35981) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35984 = arguments.length;
switch (G__35984) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35982_SHARP_){
if(cljs.core.truth_((p1__35982_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35982_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35982_SHARP_.call(null,topic)))){
return p1__35982_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35982_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35985 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35986){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35986 = meta35986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35987,meta35986__$1){
var self__ = this;
var _35987__$1 = this;
return (new cljs.core.async.t_cljs$core$async35985(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35986__$1));
}));

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35987){
var self__ = this;
var _35987__$1 = this;
return self__.meta35986;
}));

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35986","meta35986",662342841,null)], null);
}));

(cljs.core.async.t_cljs$core$async35985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35985");

(cljs.core.async.t_cljs$core$async35985.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35985.
 */
cljs.core.async.__GT_t_cljs$core$async35985 = (function cljs$core$async$__GT_t_cljs$core$async35985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35986){
return (new cljs.core.async.t_cljs$core$async35985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35986));
});

}

return (new cljs.core.async.t_cljs$core$async35985(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35121__auto___37122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36059){
var state_val_36060 = (state_36059[(1)]);
if((state_val_36060 === (7))){
var inst_36055 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36061_37123 = state_36059__$1;
(statearr_36061_37123[(2)] = inst_36055);

(statearr_36061_37123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (20))){
var state_36059__$1 = state_36059;
var statearr_36062_37124 = state_36059__$1;
(statearr_36062_37124[(2)] = null);

(statearr_36062_37124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (1))){
var state_36059__$1 = state_36059;
var statearr_36063_37125 = state_36059__$1;
(statearr_36063_37125[(2)] = null);

(statearr_36063_37125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (24))){
var inst_36038 = (state_36059[(7)]);
var inst_36047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36038);
var state_36059__$1 = state_36059;
var statearr_36064_37130 = state_36059__$1;
(statearr_36064_37130[(2)] = inst_36047);

(statearr_36064_37130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (4))){
var inst_35990 = (state_36059[(8)]);
var inst_35990__$1 = (state_36059[(2)]);
var inst_35991 = (inst_35990__$1 == null);
var state_36059__$1 = (function (){var statearr_36065 = state_36059;
(statearr_36065[(8)] = inst_35990__$1);

return statearr_36065;
})();
if(cljs.core.truth_(inst_35991)){
var statearr_36066_37131 = state_36059__$1;
(statearr_36066_37131[(1)] = (5));

} else {
var statearr_36067_37132 = state_36059__$1;
(statearr_36067_37132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (15))){
var inst_36032 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36068_37133 = state_36059__$1;
(statearr_36068_37133[(2)] = inst_36032);

(statearr_36068_37133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (21))){
var inst_36052 = (state_36059[(2)]);
var state_36059__$1 = (function (){var statearr_36069 = state_36059;
(statearr_36069[(9)] = inst_36052);

return statearr_36069;
})();
var statearr_36070_37134 = state_36059__$1;
(statearr_36070_37134[(2)] = null);

(statearr_36070_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (13))){
var inst_36014 = (state_36059[(10)]);
var inst_36016 = cljs.core.chunked_seq_QMARK_(inst_36014);
var state_36059__$1 = state_36059;
if(inst_36016){
var statearr_36071_37135 = state_36059__$1;
(statearr_36071_37135[(1)] = (16));

} else {
var statearr_36072_37136 = state_36059__$1;
(statearr_36072_37136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (22))){
var inst_36044 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
if(cljs.core.truth_(inst_36044)){
var statearr_36073_37137 = state_36059__$1;
(statearr_36073_37137[(1)] = (23));

} else {
var statearr_36074_37138 = state_36059__$1;
(statearr_36074_37138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (6))){
var inst_36038 = (state_36059[(7)]);
var inst_36040 = (state_36059[(11)]);
var inst_35990 = (state_36059[(8)]);
var inst_36038__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35990) : topic_fn.call(null,inst_35990));
var inst_36039 = cljs.core.deref(mults);
var inst_36040__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36039,inst_36038__$1);
var state_36059__$1 = (function (){var statearr_36075 = state_36059;
(statearr_36075[(7)] = inst_36038__$1);

(statearr_36075[(11)] = inst_36040__$1);

return statearr_36075;
})();
if(cljs.core.truth_(inst_36040__$1)){
var statearr_36076_37139 = state_36059__$1;
(statearr_36076_37139[(1)] = (19));

} else {
var statearr_36077_37140 = state_36059__$1;
(statearr_36077_37140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (25))){
var inst_36049 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36078_37142 = state_36059__$1;
(statearr_36078_37142[(2)] = inst_36049);

(statearr_36078_37142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (17))){
var inst_36014 = (state_36059[(10)]);
var inst_36023 = cljs.core.first(inst_36014);
var inst_36024 = cljs.core.async.muxch_STAR_(inst_36023);
var inst_36025 = cljs.core.async.close_BANG_(inst_36024);
var inst_36026 = cljs.core.next(inst_36014);
var inst_36000 = inst_36026;
var inst_36001 = null;
var inst_36002 = (0);
var inst_36003 = (0);
var state_36059__$1 = (function (){var statearr_36079 = state_36059;
(statearr_36079[(12)] = inst_36025);

(statearr_36079[(13)] = inst_36001);

(statearr_36079[(14)] = inst_36002);

(statearr_36079[(15)] = inst_36003);

(statearr_36079[(16)] = inst_36000);

return statearr_36079;
})();
var statearr_36080_37143 = state_36059__$1;
(statearr_36080_37143[(2)] = null);

(statearr_36080_37143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (3))){
var inst_36057 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36059__$1,inst_36057);
} else {
if((state_val_36060 === (12))){
var inst_36034 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36081_37144 = state_36059__$1;
(statearr_36081_37144[(2)] = inst_36034);

(statearr_36081_37144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (2))){
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36059__$1,(4),ch);
} else {
if((state_val_36060 === (23))){
var state_36059__$1 = state_36059;
var statearr_36082_37145 = state_36059__$1;
(statearr_36082_37145[(2)] = null);

(statearr_36082_37145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (19))){
var inst_36040 = (state_36059[(11)]);
var inst_35990 = (state_36059[(8)]);
var inst_36042 = cljs.core.async.muxch_STAR_(inst_36040);
var state_36059__$1 = state_36059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36059__$1,(22),inst_36042,inst_35990);
} else {
if((state_val_36060 === (11))){
var inst_36014 = (state_36059[(10)]);
var inst_36000 = (state_36059[(16)]);
var inst_36014__$1 = cljs.core.seq(inst_36000);
var state_36059__$1 = (function (){var statearr_36083 = state_36059;
(statearr_36083[(10)] = inst_36014__$1);

return statearr_36083;
})();
if(inst_36014__$1){
var statearr_36084_37146 = state_36059__$1;
(statearr_36084_37146[(1)] = (13));

} else {
var statearr_36085_37147 = state_36059__$1;
(statearr_36085_37147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (9))){
var inst_36036 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36086_37148 = state_36059__$1;
(statearr_36086_37148[(2)] = inst_36036);

(statearr_36086_37148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (5))){
var inst_35997 = cljs.core.deref(mults);
var inst_35998 = cljs.core.vals(inst_35997);
var inst_35999 = cljs.core.seq(inst_35998);
var inst_36000 = inst_35999;
var inst_36001 = null;
var inst_36002 = (0);
var inst_36003 = (0);
var state_36059__$1 = (function (){var statearr_36087 = state_36059;
(statearr_36087[(13)] = inst_36001);

(statearr_36087[(14)] = inst_36002);

(statearr_36087[(15)] = inst_36003);

(statearr_36087[(16)] = inst_36000);

return statearr_36087;
})();
var statearr_36088_37156 = state_36059__$1;
(statearr_36088_37156[(2)] = null);

(statearr_36088_37156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (14))){
var state_36059__$1 = state_36059;
var statearr_36092_37157 = state_36059__$1;
(statearr_36092_37157[(2)] = null);

(statearr_36092_37157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (16))){
var inst_36014 = (state_36059[(10)]);
var inst_36018 = cljs.core.chunk_first(inst_36014);
var inst_36019 = cljs.core.chunk_rest(inst_36014);
var inst_36020 = cljs.core.count(inst_36018);
var inst_36000 = inst_36019;
var inst_36001 = inst_36018;
var inst_36002 = inst_36020;
var inst_36003 = (0);
var state_36059__$1 = (function (){var statearr_36093 = state_36059;
(statearr_36093[(13)] = inst_36001);

(statearr_36093[(14)] = inst_36002);

(statearr_36093[(15)] = inst_36003);

(statearr_36093[(16)] = inst_36000);

return statearr_36093;
})();
var statearr_36094_37158 = state_36059__$1;
(statearr_36094_37158[(2)] = null);

(statearr_36094_37158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (10))){
var inst_36001 = (state_36059[(13)]);
var inst_36002 = (state_36059[(14)]);
var inst_36003 = (state_36059[(15)]);
var inst_36000 = (state_36059[(16)]);
var inst_36008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36001,inst_36003);
var inst_36009 = cljs.core.async.muxch_STAR_(inst_36008);
var inst_36010 = cljs.core.async.close_BANG_(inst_36009);
var inst_36011 = (inst_36003 + (1));
var tmp36089 = inst_36001;
var tmp36090 = inst_36002;
var tmp36091 = inst_36000;
var inst_36000__$1 = tmp36091;
var inst_36001__$1 = tmp36089;
var inst_36002__$1 = tmp36090;
var inst_36003__$1 = inst_36011;
var state_36059__$1 = (function (){var statearr_36095 = state_36059;
(statearr_36095[(13)] = inst_36001__$1);

(statearr_36095[(14)] = inst_36002__$1);

(statearr_36095[(15)] = inst_36003__$1);

(statearr_36095[(16)] = inst_36000__$1);

(statearr_36095[(17)] = inst_36010);

return statearr_36095;
})();
var statearr_36096_37159 = state_36059__$1;
(statearr_36096_37159[(2)] = null);

(statearr_36096_37159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (18))){
var inst_36029 = (state_36059[(2)]);
var state_36059__$1 = state_36059;
var statearr_36097_37162 = state_36059__$1;
(statearr_36097_37162[(2)] = inst_36029);

(statearr_36097_37162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36060 === (8))){
var inst_36002 = (state_36059[(14)]);
var inst_36003 = (state_36059[(15)]);
var inst_36005 = (inst_36003 < inst_36002);
var inst_36006 = inst_36005;
var state_36059__$1 = state_36059;
if(cljs.core.truth_(inst_36006)){
var statearr_36098_37163 = state_36059__$1;
(statearr_36098_37163[(1)] = (10));

} else {
var statearr_36099_37164 = state_36059__$1;
(statearr_36099_37164[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36100[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36100[(1)] = (1));

return statearr_36100;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36059){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36059);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36101){if((e36101 instanceof Object)){
var ex__35060__auto__ = e36101;
var statearr_36102_37165 = state_36059;
(statearr_36102_37165[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37166 = state_36059;
state_36059 = G__37166;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36103 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36103[(6)] = c__35121__auto___37122);

return statearr_36103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36105 = arguments.length;
switch (G__36105) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36107 = arguments.length;
switch (G__36107) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36109 = arguments.length;
switch (G__36109) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__35121__auto___37179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36148){
var state_val_36149 = (state_36148[(1)]);
if((state_val_36149 === (7))){
var state_36148__$1 = state_36148;
var statearr_36150_37180 = state_36148__$1;
(statearr_36150_37180[(2)] = null);

(statearr_36150_37180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (1))){
var state_36148__$1 = state_36148;
var statearr_36151_37181 = state_36148__$1;
(statearr_36151_37181[(2)] = null);

(statearr_36151_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (4))){
var inst_36112 = (state_36148[(7)]);
var inst_36114 = (inst_36112 < cnt);
var state_36148__$1 = state_36148;
if(cljs.core.truth_(inst_36114)){
var statearr_36152_37182 = state_36148__$1;
(statearr_36152_37182[(1)] = (6));

} else {
var statearr_36153_37183 = state_36148__$1;
(statearr_36153_37183[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (15))){
var inst_36144 = (state_36148[(2)]);
var state_36148__$1 = state_36148;
var statearr_36154_37184 = state_36148__$1;
(statearr_36154_37184[(2)] = inst_36144);

(statearr_36154_37184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (13))){
var inst_36137 = cljs.core.async.close_BANG_(out);
var state_36148__$1 = state_36148;
var statearr_36155_37185 = state_36148__$1;
(statearr_36155_37185[(2)] = inst_36137);

(statearr_36155_37185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (6))){
var state_36148__$1 = state_36148;
var statearr_36156_37187 = state_36148__$1;
(statearr_36156_37187[(2)] = null);

(statearr_36156_37187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (3))){
var inst_36146 = (state_36148[(2)]);
var state_36148__$1 = state_36148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36148__$1,inst_36146);
} else {
if((state_val_36149 === (12))){
var inst_36134 = (state_36148[(8)]);
var inst_36134__$1 = (state_36148[(2)]);
var inst_36135 = cljs.core.some(cljs.core.nil_QMARK_,inst_36134__$1);
var state_36148__$1 = (function (){var statearr_36157 = state_36148;
(statearr_36157[(8)] = inst_36134__$1);

return statearr_36157;
})();
if(cljs.core.truth_(inst_36135)){
var statearr_36158_37188 = state_36148__$1;
(statearr_36158_37188[(1)] = (13));

} else {
var statearr_36159_37189 = state_36148__$1;
(statearr_36159_37189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (2))){
var inst_36111 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36112 = (0);
var state_36148__$1 = (function (){var statearr_36160 = state_36148;
(statearr_36160[(7)] = inst_36112);

(statearr_36160[(9)] = inst_36111);

return statearr_36160;
})();
var statearr_36161_37190 = state_36148__$1;
(statearr_36161_37190[(2)] = null);

(statearr_36161_37190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (11))){
var inst_36112 = (state_36148[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36148,(10),Object,null,(9));
var inst_36121 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36112) : chs__$1.call(null,inst_36112));
var inst_36122 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36112) : done.call(null,inst_36112));
var inst_36123 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36121,inst_36122);
var state_36148__$1 = state_36148;
var statearr_36162_37191 = state_36148__$1;
(statearr_36162_37191[(2)] = inst_36123);


cljs.core.async.impl.ioc_helpers.process_exception(state_36148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (9))){
var inst_36112 = (state_36148[(7)]);
var inst_36125 = (state_36148[(2)]);
var inst_36126 = (inst_36112 + (1));
var inst_36112__$1 = inst_36126;
var state_36148__$1 = (function (){var statearr_36163 = state_36148;
(statearr_36163[(7)] = inst_36112__$1);

(statearr_36163[(10)] = inst_36125);

return statearr_36163;
})();
var statearr_36164_37192 = state_36148__$1;
(statearr_36164_37192[(2)] = null);

(statearr_36164_37192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (5))){
var inst_36132 = (state_36148[(2)]);
var state_36148__$1 = (function (){var statearr_36165 = state_36148;
(statearr_36165[(11)] = inst_36132);

return statearr_36165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36148__$1,(12),dchan);
} else {
if((state_val_36149 === (14))){
var inst_36134 = (state_36148[(8)]);
var inst_36139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36134);
var state_36148__$1 = state_36148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36148__$1,(16),out,inst_36139);
} else {
if((state_val_36149 === (16))){
var inst_36141 = (state_36148[(2)]);
var state_36148__$1 = (function (){var statearr_36166 = state_36148;
(statearr_36166[(12)] = inst_36141);

return statearr_36166;
})();
var statearr_36167_37195 = state_36148__$1;
(statearr_36167_37195[(2)] = null);

(statearr_36167_37195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (10))){
var inst_36116 = (state_36148[(2)]);
var inst_36117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36148__$1 = (function (){var statearr_36168 = state_36148;
(statearr_36168[(13)] = inst_36116);

return statearr_36168;
})();
var statearr_36169_37198 = state_36148__$1;
(statearr_36169_37198[(2)] = inst_36117);


cljs.core.async.impl.ioc_helpers.process_exception(state_36148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36149 === (8))){
var inst_36130 = (state_36148[(2)]);
var state_36148__$1 = state_36148;
var statearr_36170_37199 = state_36148__$1;
(statearr_36170_37199[(2)] = inst_36130);

(statearr_36170_37199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36171[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36171[(1)] = (1));

return statearr_36171;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36148){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36148);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36172){if((e36172 instanceof Object)){
var ex__35060__auto__ = e36172;
var statearr_36173_37201 = state_36148;
(statearr_36173_37201[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37204 = state_36148;
state_36148 = G__37204;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36174 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36174[(6)] = c__35121__auto___37179);

return statearr_36174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36177 = arguments.length;
switch (G__36177) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35121__auto___37206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36209){
var state_val_36210 = (state_36209[(1)]);
if((state_val_36210 === (7))){
var inst_36188 = (state_36209[(7)]);
var inst_36189 = (state_36209[(8)]);
var inst_36188__$1 = (state_36209[(2)]);
var inst_36189__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36188__$1,(0),null);
var inst_36190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36188__$1,(1),null);
var inst_36191 = (inst_36189__$1 == null);
var state_36209__$1 = (function (){var statearr_36211 = state_36209;
(statearr_36211[(7)] = inst_36188__$1);

(statearr_36211[(9)] = inst_36190);

(statearr_36211[(8)] = inst_36189__$1);

return statearr_36211;
})();
if(cljs.core.truth_(inst_36191)){
var statearr_36212_37217 = state_36209__$1;
(statearr_36212_37217[(1)] = (8));

} else {
var statearr_36213_37218 = state_36209__$1;
(statearr_36213_37218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (1))){
var inst_36178 = cljs.core.vec(chs);
var inst_36179 = inst_36178;
var state_36209__$1 = (function (){var statearr_36214 = state_36209;
(statearr_36214[(10)] = inst_36179);

return statearr_36214;
})();
var statearr_36215_37219 = state_36209__$1;
(statearr_36215_37219[(2)] = null);

(statearr_36215_37219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (4))){
var inst_36179 = (state_36209[(10)]);
var state_36209__$1 = state_36209;
return cljs.core.async.ioc_alts_BANG_(state_36209__$1,(7),inst_36179);
} else {
if((state_val_36210 === (6))){
var inst_36205 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36216_37220 = state_36209__$1;
(statearr_36216_37220[(2)] = inst_36205);

(statearr_36216_37220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (3))){
var inst_36207 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36209__$1,inst_36207);
} else {
if((state_val_36210 === (2))){
var inst_36179 = (state_36209[(10)]);
var inst_36181 = cljs.core.count(inst_36179);
var inst_36182 = (inst_36181 > (0));
var state_36209__$1 = state_36209;
if(cljs.core.truth_(inst_36182)){
var statearr_36218_37221 = state_36209__$1;
(statearr_36218_37221[(1)] = (4));

} else {
var statearr_36219_37222 = state_36209__$1;
(statearr_36219_37222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (11))){
var inst_36179 = (state_36209[(10)]);
var inst_36198 = (state_36209[(2)]);
var tmp36217 = inst_36179;
var inst_36179__$1 = tmp36217;
var state_36209__$1 = (function (){var statearr_36220 = state_36209;
(statearr_36220[(11)] = inst_36198);

(statearr_36220[(10)] = inst_36179__$1);

return statearr_36220;
})();
var statearr_36221_37223 = state_36209__$1;
(statearr_36221_37223[(2)] = null);

(statearr_36221_37223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (9))){
var inst_36189 = (state_36209[(8)]);
var state_36209__$1 = state_36209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36209__$1,(11),out,inst_36189);
} else {
if((state_val_36210 === (5))){
var inst_36203 = cljs.core.async.close_BANG_(out);
var state_36209__$1 = state_36209;
var statearr_36222_37224 = state_36209__$1;
(statearr_36222_37224[(2)] = inst_36203);

(statearr_36222_37224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (10))){
var inst_36201 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36223_37231 = state_36209__$1;
(statearr_36223_37231[(2)] = inst_36201);

(statearr_36223_37231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (8))){
var inst_36188 = (state_36209[(7)]);
var inst_36190 = (state_36209[(9)]);
var inst_36189 = (state_36209[(8)]);
var inst_36179 = (state_36209[(10)]);
var inst_36193 = (function (){var cs = inst_36179;
var vec__36184 = inst_36188;
var v = inst_36189;
var c = inst_36190;
return (function (p1__36175_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36175_SHARP_);
});
})();
var inst_36194 = cljs.core.filterv(inst_36193,inst_36179);
var inst_36179__$1 = inst_36194;
var state_36209__$1 = (function (){var statearr_36224 = state_36209;
(statearr_36224[(10)] = inst_36179__$1);

return statearr_36224;
})();
var statearr_36225_37232 = state_36209__$1;
(statearr_36225_37232[(2)] = null);

(statearr_36225_37232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36226[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36226[(1)] = (1));

return statearr_36226;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36209){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36209);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36227){if((e36227 instanceof Object)){
var ex__35060__auto__ = e36227;
var statearr_36228_37236 = state_36209;
(statearr_36228_37236[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37241 = state_36209;
state_36209 = G__37241;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36229 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36229[(6)] = c__35121__auto___37206);

return statearr_36229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36231 = arguments.length;
switch (G__36231) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35121__auto___37255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36255){
var state_val_36256 = (state_36255[(1)]);
if((state_val_36256 === (7))){
var inst_36237 = (state_36255[(7)]);
var inst_36237__$1 = (state_36255[(2)]);
var inst_36238 = (inst_36237__$1 == null);
var inst_36239 = cljs.core.not(inst_36238);
var state_36255__$1 = (function (){var statearr_36257 = state_36255;
(statearr_36257[(7)] = inst_36237__$1);

return statearr_36257;
})();
if(inst_36239){
var statearr_36258_37256 = state_36255__$1;
(statearr_36258_37256[(1)] = (8));

} else {
var statearr_36259_37257 = state_36255__$1;
(statearr_36259_37257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (1))){
var inst_36232 = (0);
var state_36255__$1 = (function (){var statearr_36260 = state_36255;
(statearr_36260[(8)] = inst_36232);

return statearr_36260;
})();
var statearr_36261_37258 = state_36255__$1;
(statearr_36261_37258[(2)] = null);

(statearr_36261_37258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (4))){
var state_36255__$1 = state_36255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36255__$1,(7),ch);
} else {
if((state_val_36256 === (6))){
var inst_36250 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36262_37259 = state_36255__$1;
(statearr_36262_37259[(2)] = inst_36250);

(statearr_36262_37259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (3))){
var inst_36252 = (state_36255[(2)]);
var inst_36253 = cljs.core.async.close_BANG_(out);
var state_36255__$1 = (function (){var statearr_36263 = state_36255;
(statearr_36263[(9)] = inst_36252);

return statearr_36263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36255__$1,inst_36253);
} else {
if((state_val_36256 === (2))){
var inst_36232 = (state_36255[(8)]);
var inst_36234 = (inst_36232 < n);
var state_36255__$1 = state_36255;
if(cljs.core.truth_(inst_36234)){
var statearr_36264_37260 = state_36255__$1;
(statearr_36264_37260[(1)] = (4));

} else {
var statearr_36265_37261 = state_36255__$1;
(statearr_36265_37261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (11))){
var inst_36232 = (state_36255[(8)]);
var inst_36242 = (state_36255[(2)]);
var inst_36243 = (inst_36232 + (1));
var inst_36232__$1 = inst_36243;
var state_36255__$1 = (function (){var statearr_36266 = state_36255;
(statearr_36266[(8)] = inst_36232__$1);

(statearr_36266[(10)] = inst_36242);

return statearr_36266;
})();
var statearr_36267_37268 = state_36255__$1;
(statearr_36267_37268[(2)] = null);

(statearr_36267_37268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (9))){
var state_36255__$1 = state_36255;
var statearr_36268_37269 = state_36255__$1;
(statearr_36268_37269[(2)] = null);

(statearr_36268_37269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (5))){
var state_36255__$1 = state_36255;
var statearr_36269_37270 = state_36255__$1;
(statearr_36269_37270[(2)] = null);

(statearr_36269_37270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (10))){
var inst_36247 = (state_36255[(2)]);
var state_36255__$1 = state_36255;
var statearr_36270_37271 = state_36255__$1;
(statearr_36270_37271[(2)] = inst_36247);

(statearr_36270_37271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36256 === (8))){
var inst_36237 = (state_36255[(7)]);
var state_36255__$1 = state_36255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36255__$1,(11),out,inst_36237);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36271[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36271[(1)] = (1));

return statearr_36271;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36255){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36255);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36272){if((e36272 instanceof Object)){
var ex__35060__auto__ = e36272;
var statearr_36273_37272 = state_36255;
(statearr_36273_37272[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37273 = state_36255;
state_36255 = G__37273;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36274 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36274[(6)] = c__35121__auto___37255);

return statearr_36274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36276 = (function (f,ch,meta36277){
this.f = f;
this.ch = ch;
this.meta36277 = meta36277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36278,meta36277__$1){
var self__ = this;
var _36278__$1 = this;
return (new cljs.core.async.t_cljs$core$async36276(self__.f,self__.ch,meta36277__$1));
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36278){
var self__ = this;
var _36278__$1 = this;
return self__.meta36277;
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36279 = (function (f,ch,meta36277,_,fn1,meta36280){
this.f = f;
this.ch = ch;
this.meta36277 = meta36277;
this._ = _;
this.fn1 = fn1;
this.meta36280 = meta36280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36281,meta36280__$1){
var self__ = this;
var _36281__$1 = this;
return (new cljs.core.async.t_cljs$core$async36279(self__.f,self__.ch,self__.meta36277,self__._,self__.fn1,meta36280__$1));
}));

(cljs.core.async.t_cljs$core$async36279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36281){
var self__ = this;
var _36281__$1 = this;
return self__.meta36280;
}));

(cljs.core.async.t_cljs$core$async36279.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36279.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36275_SHARP_){
var G__36282 = (((p1__36275_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36275_SHARP_) : self__.f.call(null,p1__36275_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36282) : f1.call(null,G__36282));
});
}));

(cljs.core.async.t_cljs$core$async36279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36277","meta36277",-642684287,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36276","cljs.core.async/t_cljs$core$async36276",83603254,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36280","meta36280",170862229,null)], null);
}));

(cljs.core.async.t_cljs$core$async36279.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36279");

(cljs.core.async.t_cljs$core$async36279.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36279");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36279.
 */
cljs.core.async.__GT_t_cljs$core$async36279 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36279(f__$1,ch__$1,meta36277__$1,___$2,fn1__$1,meta36280){
return (new cljs.core.async.t_cljs$core$async36279(f__$1,ch__$1,meta36277__$1,___$2,fn1__$1,meta36280));
});

}

return (new cljs.core.async.t_cljs$core$async36279(self__.f,self__.ch,self__.meta36277,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36283 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36283) : self__.f.call(null,G__36283));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36277","meta36277",-642684287,null)], null);
}));

(cljs.core.async.t_cljs$core$async36276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36276");

(cljs.core.async.t_cljs$core$async36276.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36276.
 */
cljs.core.async.__GT_t_cljs$core$async36276 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36276(f__$1,ch__$1,meta36277){
return (new cljs.core.async.t_cljs$core$async36276(f__$1,ch__$1,meta36277));
});

}

return (new cljs.core.async.t_cljs$core$async36276(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36284 = (function (f,ch,meta36285){
this.f = f;
this.ch = ch;
this.meta36285 = meta36285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36286,meta36285__$1){
var self__ = this;
var _36286__$1 = this;
return (new cljs.core.async.t_cljs$core$async36284(self__.f,self__.ch,meta36285__$1));
}));

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36286){
var self__ = this;
var _36286__$1 = this;
return self__.meta36285;
}));

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36285","meta36285",1766447412,null)], null);
}));

(cljs.core.async.t_cljs$core$async36284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36284");

(cljs.core.async.t_cljs$core$async36284.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36284.
 */
cljs.core.async.__GT_t_cljs$core$async36284 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36284(f__$1,ch__$1,meta36285){
return (new cljs.core.async.t_cljs$core$async36284(f__$1,ch__$1,meta36285));
});

}

return (new cljs.core.async.t_cljs$core$async36284(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36287 = (function (p,ch,meta36288){
this.p = p;
this.ch = ch;
this.meta36288 = meta36288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36289,meta36288__$1){
var self__ = this;
var _36289__$1 = this;
return (new cljs.core.async.t_cljs$core$async36287(self__.p,self__.ch,meta36288__$1));
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36289){
var self__ = this;
var _36289__$1 = this;
return self__.meta36288;
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36288","meta36288",-1138058549,null)], null);
}));

(cljs.core.async.t_cljs$core$async36287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36287");

(cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36287.
 */
cljs.core.async.__GT_t_cljs$core$async36287 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36287(p__$1,ch__$1,meta36288){
return (new cljs.core.async.t_cljs$core$async36287(p__$1,ch__$1,meta36288));
});

}

return (new cljs.core.async.t_cljs$core$async36287(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36291 = arguments.length;
switch (G__36291) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35121__auto___37295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36312){
var state_val_36313 = (state_36312[(1)]);
if((state_val_36313 === (7))){
var inst_36308 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36314_37296 = state_36312__$1;
(statearr_36314_37296[(2)] = inst_36308);

(statearr_36314_37296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (1))){
var state_36312__$1 = state_36312;
var statearr_36315_37298 = state_36312__$1;
(statearr_36315_37298[(2)] = null);

(statearr_36315_37298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (4))){
var inst_36294 = (state_36312[(7)]);
var inst_36294__$1 = (state_36312[(2)]);
var inst_36295 = (inst_36294__$1 == null);
var state_36312__$1 = (function (){var statearr_36316 = state_36312;
(statearr_36316[(7)] = inst_36294__$1);

return statearr_36316;
})();
if(cljs.core.truth_(inst_36295)){
var statearr_36317_37299 = state_36312__$1;
(statearr_36317_37299[(1)] = (5));

} else {
var statearr_36318_37300 = state_36312__$1;
(statearr_36318_37300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (6))){
var inst_36294 = (state_36312[(7)]);
var inst_36299 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36294) : p.call(null,inst_36294));
var state_36312__$1 = state_36312;
if(cljs.core.truth_(inst_36299)){
var statearr_36319_37301 = state_36312__$1;
(statearr_36319_37301[(1)] = (8));

} else {
var statearr_36320_37302 = state_36312__$1;
(statearr_36320_37302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (3))){
var inst_36310 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36312__$1,inst_36310);
} else {
if((state_val_36313 === (2))){
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36312__$1,(4),ch);
} else {
if((state_val_36313 === (11))){
var inst_36302 = (state_36312[(2)]);
var state_36312__$1 = state_36312;
var statearr_36321_37303 = state_36312__$1;
(statearr_36321_37303[(2)] = inst_36302);

(statearr_36321_37303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (9))){
var state_36312__$1 = state_36312;
var statearr_36322_37304 = state_36312__$1;
(statearr_36322_37304[(2)] = null);

(statearr_36322_37304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (5))){
var inst_36297 = cljs.core.async.close_BANG_(out);
var state_36312__$1 = state_36312;
var statearr_36323_37306 = state_36312__$1;
(statearr_36323_37306[(2)] = inst_36297);

(statearr_36323_37306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (10))){
var inst_36305 = (state_36312[(2)]);
var state_36312__$1 = (function (){var statearr_36324 = state_36312;
(statearr_36324[(8)] = inst_36305);

return statearr_36324;
})();
var statearr_36325_37307 = state_36312__$1;
(statearr_36325_37307[(2)] = null);

(statearr_36325_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36313 === (8))){
var inst_36294 = (state_36312[(7)]);
var state_36312__$1 = state_36312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36312__$1,(11),out,inst_36294);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36326 = [null,null,null,null,null,null,null,null,null];
(statearr_36326[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36326[(1)] = (1));

return statearr_36326;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36312){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36312);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36327){if((e36327 instanceof Object)){
var ex__35060__auto__ = e36327;
var statearr_36328_37308 = state_36312;
(statearr_36328_37308[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37309 = state_36312;
state_36312 = G__37309;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36329 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36329[(6)] = c__35121__auto___37295);

return statearr_36329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36331 = arguments.length;
switch (G__36331) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35121__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36393){
var state_val_36394 = (state_36393[(1)]);
if((state_val_36394 === (7))){
var inst_36389 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36395_37322 = state_36393__$1;
(statearr_36395_37322[(2)] = inst_36389);

(statearr_36395_37322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (20))){
var inst_36359 = (state_36393[(7)]);
var inst_36370 = (state_36393[(2)]);
var inst_36371 = cljs.core.next(inst_36359);
var inst_36345 = inst_36371;
var inst_36346 = null;
var inst_36347 = (0);
var inst_36348 = (0);
var state_36393__$1 = (function (){var statearr_36396 = state_36393;
(statearr_36396[(8)] = inst_36347);

(statearr_36396[(9)] = inst_36348);

(statearr_36396[(10)] = inst_36345);

(statearr_36396[(11)] = inst_36346);

(statearr_36396[(12)] = inst_36370);

return statearr_36396;
})();
var statearr_36397_37323 = state_36393__$1;
(statearr_36397_37323[(2)] = null);

(statearr_36397_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (1))){
var state_36393__$1 = state_36393;
var statearr_36398_37327 = state_36393__$1;
(statearr_36398_37327[(2)] = null);

(statearr_36398_37327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (4))){
var inst_36334 = (state_36393[(13)]);
var inst_36334__$1 = (state_36393[(2)]);
var inst_36335 = (inst_36334__$1 == null);
var state_36393__$1 = (function (){var statearr_36399 = state_36393;
(statearr_36399[(13)] = inst_36334__$1);

return statearr_36399;
})();
if(cljs.core.truth_(inst_36335)){
var statearr_36400_37328 = state_36393__$1;
(statearr_36400_37328[(1)] = (5));

} else {
var statearr_36401_37329 = state_36393__$1;
(statearr_36401_37329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (15))){
var state_36393__$1 = state_36393;
var statearr_36405_37330 = state_36393__$1;
(statearr_36405_37330[(2)] = null);

(statearr_36405_37330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (21))){
var state_36393__$1 = state_36393;
var statearr_36406_37331 = state_36393__$1;
(statearr_36406_37331[(2)] = null);

(statearr_36406_37331[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (13))){
var inst_36347 = (state_36393[(8)]);
var inst_36348 = (state_36393[(9)]);
var inst_36345 = (state_36393[(10)]);
var inst_36346 = (state_36393[(11)]);
var inst_36355 = (state_36393[(2)]);
var inst_36356 = (inst_36348 + (1));
var tmp36402 = inst_36347;
var tmp36403 = inst_36345;
var tmp36404 = inst_36346;
var inst_36345__$1 = tmp36403;
var inst_36346__$1 = tmp36404;
var inst_36347__$1 = tmp36402;
var inst_36348__$1 = inst_36356;
var state_36393__$1 = (function (){var statearr_36407 = state_36393;
(statearr_36407[(8)] = inst_36347__$1);

(statearr_36407[(9)] = inst_36348__$1);

(statearr_36407[(10)] = inst_36345__$1);

(statearr_36407[(11)] = inst_36346__$1);

(statearr_36407[(14)] = inst_36355);

return statearr_36407;
})();
var statearr_36408_37332 = state_36393__$1;
(statearr_36408_37332[(2)] = null);

(statearr_36408_37332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (22))){
var state_36393__$1 = state_36393;
var statearr_36409_37333 = state_36393__$1;
(statearr_36409_37333[(2)] = null);

(statearr_36409_37333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (6))){
var inst_36334 = (state_36393[(13)]);
var inst_36343 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36334) : f.call(null,inst_36334));
var inst_36344 = cljs.core.seq(inst_36343);
var inst_36345 = inst_36344;
var inst_36346 = null;
var inst_36347 = (0);
var inst_36348 = (0);
var state_36393__$1 = (function (){var statearr_36410 = state_36393;
(statearr_36410[(8)] = inst_36347);

(statearr_36410[(9)] = inst_36348);

(statearr_36410[(10)] = inst_36345);

(statearr_36410[(11)] = inst_36346);

return statearr_36410;
})();
var statearr_36411_37334 = state_36393__$1;
(statearr_36411_37334[(2)] = null);

(statearr_36411_37334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (17))){
var inst_36359 = (state_36393[(7)]);
var inst_36363 = cljs.core.chunk_first(inst_36359);
var inst_36364 = cljs.core.chunk_rest(inst_36359);
var inst_36365 = cljs.core.count(inst_36363);
var inst_36345 = inst_36364;
var inst_36346 = inst_36363;
var inst_36347 = inst_36365;
var inst_36348 = (0);
var state_36393__$1 = (function (){var statearr_36412 = state_36393;
(statearr_36412[(8)] = inst_36347);

(statearr_36412[(9)] = inst_36348);

(statearr_36412[(10)] = inst_36345);

(statearr_36412[(11)] = inst_36346);

return statearr_36412;
})();
var statearr_36413_37335 = state_36393__$1;
(statearr_36413_37335[(2)] = null);

(statearr_36413_37335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (3))){
var inst_36391 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36393__$1,inst_36391);
} else {
if((state_val_36394 === (12))){
var inst_36379 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36414_37336 = state_36393__$1;
(statearr_36414_37336[(2)] = inst_36379);

(statearr_36414_37336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (2))){
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36393__$1,(4),in$);
} else {
if((state_val_36394 === (23))){
var inst_36387 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36415_37338 = state_36393__$1;
(statearr_36415_37338[(2)] = inst_36387);

(statearr_36415_37338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (19))){
var inst_36374 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36416_37339 = state_36393__$1;
(statearr_36416_37339[(2)] = inst_36374);

(statearr_36416_37339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (11))){
var inst_36345 = (state_36393[(10)]);
var inst_36359 = (state_36393[(7)]);
var inst_36359__$1 = cljs.core.seq(inst_36345);
var state_36393__$1 = (function (){var statearr_36417 = state_36393;
(statearr_36417[(7)] = inst_36359__$1);

return statearr_36417;
})();
if(inst_36359__$1){
var statearr_36418_37340 = state_36393__$1;
(statearr_36418_37340[(1)] = (14));

} else {
var statearr_36419_37341 = state_36393__$1;
(statearr_36419_37341[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (9))){
var inst_36381 = (state_36393[(2)]);
var inst_36382 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36393__$1 = (function (){var statearr_36420 = state_36393;
(statearr_36420[(15)] = inst_36381);

return statearr_36420;
})();
if(cljs.core.truth_(inst_36382)){
var statearr_36421_37345 = state_36393__$1;
(statearr_36421_37345[(1)] = (21));

} else {
var statearr_36422_37346 = state_36393__$1;
(statearr_36422_37346[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (5))){
var inst_36337 = cljs.core.async.close_BANG_(out);
var state_36393__$1 = state_36393;
var statearr_36423_37347 = state_36393__$1;
(statearr_36423_37347[(2)] = inst_36337);

(statearr_36423_37347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (14))){
var inst_36359 = (state_36393[(7)]);
var inst_36361 = cljs.core.chunked_seq_QMARK_(inst_36359);
var state_36393__$1 = state_36393;
if(inst_36361){
var statearr_36424_37349 = state_36393__$1;
(statearr_36424_37349[(1)] = (17));

} else {
var statearr_36425_37350 = state_36393__$1;
(statearr_36425_37350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (16))){
var inst_36377 = (state_36393[(2)]);
var state_36393__$1 = state_36393;
var statearr_36426_37351 = state_36393__$1;
(statearr_36426_37351[(2)] = inst_36377);

(statearr_36426_37351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36394 === (10))){
var inst_36348 = (state_36393[(9)]);
var inst_36346 = (state_36393[(11)]);
var inst_36353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36346,inst_36348);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36393__$1,(13),out,inst_36353);
} else {
if((state_val_36394 === (18))){
var inst_36359 = (state_36393[(7)]);
var inst_36368 = cljs.core.first(inst_36359);
var state_36393__$1 = state_36393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36393__$1,(20),out,inst_36368);
} else {
if((state_val_36394 === (8))){
var inst_36347 = (state_36393[(8)]);
var inst_36348 = (state_36393[(9)]);
var inst_36350 = (inst_36348 < inst_36347);
var inst_36351 = inst_36350;
var state_36393__$1 = state_36393;
if(cljs.core.truth_(inst_36351)){
var statearr_36427_37357 = state_36393__$1;
(statearr_36427_37357[(1)] = (10));

} else {
var statearr_36428_37358 = state_36393__$1;
(statearr_36428_37358[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35057__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35057__auto____0 = (function (){
var statearr_36429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36429[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35057__auto__);

(statearr_36429[(1)] = (1));

return statearr_36429;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35057__auto____1 = (function (state_36393){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36393);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36430){if((e36430 instanceof Object)){
var ex__35060__auto__ = e36430;
var statearr_36431_37367 = state_36393;
(statearr_36431_37367[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37369 = state_36393;
state_36393 = G__37369;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35057__auto__ = function(state_36393){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35057__auto____1.call(this,state_36393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35057__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35057__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36432 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36432[(6)] = c__35121__auto__);

return statearr_36432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));

return c__35121__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36434 = arguments.length;
switch (G__36434) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36436 = arguments.length;
switch (G__36436) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36438 = arguments.length;
switch (G__36438) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35121__auto___37415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36462){
var state_val_36463 = (state_36462[(1)]);
if((state_val_36463 === (7))){
var inst_36457 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36464_37416 = state_36462__$1;
(statearr_36464_37416[(2)] = inst_36457);

(statearr_36464_37416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (1))){
var inst_36439 = null;
var state_36462__$1 = (function (){var statearr_36465 = state_36462;
(statearr_36465[(7)] = inst_36439);

return statearr_36465;
})();
var statearr_36466_37417 = state_36462__$1;
(statearr_36466_37417[(2)] = null);

(statearr_36466_37417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (4))){
var inst_36442 = (state_36462[(8)]);
var inst_36442__$1 = (state_36462[(2)]);
var inst_36443 = (inst_36442__$1 == null);
var inst_36444 = cljs.core.not(inst_36443);
var state_36462__$1 = (function (){var statearr_36467 = state_36462;
(statearr_36467[(8)] = inst_36442__$1);

return statearr_36467;
})();
if(inst_36444){
var statearr_36468_37418 = state_36462__$1;
(statearr_36468_37418[(1)] = (5));

} else {
var statearr_36469_37420 = state_36462__$1;
(statearr_36469_37420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (6))){
var state_36462__$1 = state_36462;
var statearr_36470_37421 = state_36462__$1;
(statearr_36470_37421[(2)] = null);

(statearr_36470_37421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (3))){
var inst_36459 = (state_36462[(2)]);
var inst_36460 = cljs.core.async.close_BANG_(out);
var state_36462__$1 = (function (){var statearr_36471 = state_36462;
(statearr_36471[(9)] = inst_36459);

return statearr_36471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36462__$1,inst_36460);
} else {
if((state_val_36463 === (2))){
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36462__$1,(4),ch);
} else {
if((state_val_36463 === (11))){
var inst_36442 = (state_36462[(8)]);
var inst_36451 = (state_36462[(2)]);
var inst_36439 = inst_36442;
var state_36462__$1 = (function (){var statearr_36472 = state_36462;
(statearr_36472[(10)] = inst_36451);

(statearr_36472[(7)] = inst_36439);

return statearr_36472;
})();
var statearr_36473_37422 = state_36462__$1;
(statearr_36473_37422[(2)] = null);

(statearr_36473_37422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (9))){
var inst_36442 = (state_36462[(8)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36462__$1,(11),out,inst_36442);
} else {
if((state_val_36463 === (5))){
var inst_36442 = (state_36462[(8)]);
var inst_36439 = (state_36462[(7)]);
var inst_36446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36442,inst_36439);
var state_36462__$1 = state_36462;
if(inst_36446){
var statearr_36475_37423 = state_36462__$1;
(statearr_36475_37423[(1)] = (8));

} else {
var statearr_36476_37424 = state_36462__$1;
(statearr_36476_37424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (10))){
var inst_36454 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36477_37425 = state_36462__$1;
(statearr_36477_37425[(2)] = inst_36454);

(statearr_36477_37425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (8))){
var inst_36439 = (state_36462[(7)]);
var tmp36474 = inst_36439;
var inst_36439__$1 = tmp36474;
var state_36462__$1 = (function (){var statearr_36478 = state_36462;
(statearr_36478[(7)] = inst_36439__$1);

return statearr_36478;
})();
var statearr_36479_37430 = state_36462__$1;
(statearr_36479_37430[(2)] = null);

(statearr_36479_37430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36480[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36480[(1)] = (1));

return statearr_36480;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36462){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36462);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36481){if((e36481 instanceof Object)){
var ex__35060__auto__ = e36481;
var statearr_36482_37437 = state_36462;
(statearr_36482_37437[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37448 = state_36462;
state_36462 = G__37448;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36483 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36483[(6)] = c__35121__auto___37415);

return statearr_36483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36485 = arguments.length;
switch (G__36485) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35121__auto___37461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36523){
var state_val_36524 = (state_36523[(1)]);
if((state_val_36524 === (7))){
var inst_36519 = (state_36523[(2)]);
var state_36523__$1 = state_36523;
var statearr_36525_37462 = state_36523__$1;
(statearr_36525_37462[(2)] = inst_36519);

(statearr_36525_37462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (1))){
var inst_36486 = (new Array(n));
var inst_36487 = inst_36486;
var inst_36488 = (0);
var state_36523__$1 = (function (){var statearr_36526 = state_36523;
(statearr_36526[(7)] = inst_36488);

(statearr_36526[(8)] = inst_36487);

return statearr_36526;
})();
var statearr_36527_37489 = state_36523__$1;
(statearr_36527_37489[(2)] = null);

(statearr_36527_37489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (4))){
var inst_36491 = (state_36523[(9)]);
var inst_36491__$1 = (state_36523[(2)]);
var inst_36492 = (inst_36491__$1 == null);
var inst_36493 = cljs.core.not(inst_36492);
var state_36523__$1 = (function (){var statearr_36528 = state_36523;
(statearr_36528[(9)] = inst_36491__$1);

return statearr_36528;
})();
if(inst_36493){
var statearr_36529_37490 = state_36523__$1;
(statearr_36529_37490[(1)] = (5));

} else {
var statearr_36530_37491 = state_36523__$1;
(statearr_36530_37491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (15))){
var inst_36513 = (state_36523[(2)]);
var state_36523__$1 = state_36523;
var statearr_36531_37504 = state_36523__$1;
(statearr_36531_37504[(2)] = inst_36513);

(statearr_36531_37504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (13))){
var state_36523__$1 = state_36523;
var statearr_36532_37517 = state_36523__$1;
(statearr_36532_37517[(2)] = null);

(statearr_36532_37517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (6))){
var inst_36488 = (state_36523[(7)]);
var inst_36509 = (inst_36488 > (0));
var state_36523__$1 = state_36523;
if(cljs.core.truth_(inst_36509)){
var statearr_36533_37518 = state_36523__$1;
(statearr_36533_37518[(1)] = (12));

} else {
var statearr_36534_37519 = state_36523__$1;
(statearr_36534_37519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (3))){
var inst_36521 = (state_36523[(2)]);
var state_36523__$1 = state_36523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36523__$1,inst_36521);
} else {
if((state_val_36524 === (12))){
var inst_36487 = (state_36523[(8)]);
var inst_36511 = cljs.core.vec(inst_36487);
var state_36523__$1 = state_36523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36523__$1,(15),out,inst_36511);
} else {
if((state_val_36524 === (2))){
var state_36523__$1 = state_36523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36523__$1,(4),ch);
} else {
if((state_val_36524 === (11))){
var inst_36503 = (state_36523[(2)]);
var inst_36504 = (new Array(n));
var inst_36487 = inst_36504;
var inst_36488 = (0);
var state_36523__$1 = (function (){var statearr_36535 = state_36523;
(statearr_36535[(7)] = inst_36488);

(statearr_36535[(10)] = inst_36503);

(statearr_36535[(8)] = inst_36487);

return statearr_36535;
})();
var statearr_36536_37520 = state_36523__$1;
(statearr_36536_37520[(2)] = null);

(statearr_36536_37520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (9))){
var inst_36487 = (state_36523[(8)]);
var inst_36501 = cljs.core.vec(inst_36487);
var state_36523__$1 = state_36523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36523__$1,(11),out,inst_36501);
} else {
if((state_val_36524 === (5))){
var inst_36488 = (state_36523[(7)]);
var inst_36491 = (state_36523[(9)]);
var inst_36496 = (state_36523[(11)]);
var inst_36487 = (state_36523[(8)]);
var inst_36495 = (inst_36487[inst_36488] = inst_36491);
var inst_36496__$1 = (inst_36488 + (1));
var inst_36497 = (inst_36496__$1 < n);
var state_36523__$1 = (function (){var statearr_36537 = state_36523;
(statearr_36537[(11)] = inst_36496__$1);

(statearr_36537[(12)] = inst_36495);

return statearr_36537;
})();
if(cljs.core.truth_(inst_36497)){
var statearr_36538_37534 = state_36523__$1;
(statearr_36538_37534[(1)] = (8));

} else {
var statearr_36539_37535 = state_36523__$1;
(statearr_36539_37535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (14))){
var inst_36516 = (state_36523[(2)]);
var inst_36517 = cljs.core.async.close_BANG_(out);
var state_36523__$1 = (function (){var statearr_36541 = state_36523;
(statearr_36541[(13)] = inst_36516);

return statearr_36541;
})();
var statearr_36542_37536 = state_36523__$1;
(statearr_36542_37536[(2)] = inst_36517);

(statearr_36542_37536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (10))){
var inst_36507 = (state_36523[(2)]);
var state_36523__$1 = state_36523;
var statearr_36543_37537 = state_36523__$1;
(statearr_36543_37537[(2)] = inst_36507);

(statearr_36543_37537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36524 === (8))){
var inst_36496 = (state_36523[(11)]);
var inst_36487 = (state_36523[(8)]);
var tmp36540 = inst_36487;
var inst_36487__$1 = tmp36540;
var inst_36488 = inst_36496;
var state_36523__$1 = (function (){var statearr_36544 = state_36523;
(statearr_36544[(7)] = inst_36488);

(statearr_36544[(8)] = inst_36487__$1);

return statearr_36544;
})();
var statearr_36545_37538 = state_36523__$1;
(statearr_36545_37538[(2)] = null);

(statearr_36545_37538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36523){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36523);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36547){if((e36547 instanceof Object)){
var ex__35060__auto__ = e36547;
var statearr_36548_37540 = state_36523;
(statearr_36548_37540[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37541 = state_36523;
state_36523 = G__37541;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36549 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36549[(6)] = c__35121__auto___37461);

return statearr_36549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36551 = arguments.length;
switch (G__36551) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35121__auto___37543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35122__auto__ = (function (){var switch__35056__auto__ = (function (state_36593){
var state_val_36594 = (state_36593[(1)]);
if((state_val_36594 === (7))){
var inst_36589 = (state_36593[(2)]);
var state_36593__$1 = state_36593;
var statearr_36595_37548 = state_36593__$1;
(statearr_36595_37548[(2)] = inst_36589);

(statearr_36595_37548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (1))){
var inst_36552 = [];
var inst_36553 = inst_36552;
var inst_36554 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36593__$1 = (function (){var statearr_36596 = state_36593;
(statearr_36596[(7)] = inst_36553);

(statearr_36596[(8)] = inst_36554);

return statearr_36596;
})();
var statearr_36597_37549 = state_36593__$1;
(statearr_36597_37549[(2)] = null);

(statearr_36597_37549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (4))){
var inst_36557 = (state_36593[(9)]);
var inst_36557__$1 = (state_36593[(2)]);
var inst_36558 = (inst_36557__$1 == null);
var inst_36559 = cljs.core.not(inst_36558);
var state_36593__$1 = (function (){var statearr_36598 = state_36593;
(statearr_36598[(9)] = inst_36557__$1);

return statearr_36598;
})();
if(inst_36559){
var statearr_36599_37550 = state_36593__$1;
(statearr_36599_37550[(1)] = (5));

} else {
var statearr_36600_37551 = state_36593__$1;
(statearr_36600_37551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (15))){
var inst_36583 = (state_36593[(2)]);
var state_36593__$1 = state_36593;
var statearr_36601_37552 = state_36593__$1;
(statearr_36601_37552[(2)] = inst_36583);

(statearr_36601_37552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (13))){
var state_36593__$1 = state_36593;
var statearr_36602_37553 = state_36593__$1;
(statearr_36602_37553[(2)] = null);

(statearr_36602_37553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (6))){
var inst_36553 = (state_36593[(7)]);
var inst_36578 = inst_36553.length;
var inst_36579 = (inst_36578 > (0));
var state_36593__$1 = state_36593;
if(cljs.core.truth_(inst_36579)){
var statearr_36603_37554 = state_36593__$1;
(statearr_36603_37554[(1)] = (12));

} else {
var statearr_36604_37555 = state_36593__$1;
(statearr_36604_37555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (3))){
var inst_36591 = (state_36593[(2)]);
var state_36593__$1 = state_36593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36593__$1,inst_36591);
} else {
if((state_val_36594 === (12))){
var inst_36553 = (state_36593[(7)]);
var inst_36581 = cljs.core.vec(inst_36553);
var state_36593__$1 = state_36593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36593__$1,(15),out,inst_36581);
} else {
if((state_val_36594 === (2))){
var state_36593__$1 = state_36593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36593__$1,(4),ch);
} else {
if((state_val_36594 === (11))){
var inst_36561 = (state_36593[(10)]);
var inst_36557 = (state_36593[(9)]);
var inst_36571 = (state_36593[(2)]);
var inst_36572 = [];
var inst_36573 = inst_36572.push(inst_36557);
var inst_36553 = inst_36572;
var inst_36554 = inst_36561;
var state_36593__$1 = (function (){var statearr_36605 = state_36593;
(statearr_36605[(11)] = inst_36571);

(statearr_36605[(12)] = inst_36573);

(statearr_36605[(7)] = inst_36553);

(statearr_36605[(8)] = inst_36554);

return statearr_36605;
})();
var statearr_36606_37581 = state_36593__$1;
(statearr_36606_37581[(2)] = null);

(statearr_36606_37581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (9))){
var inst_36553 = (state_36593[(7)]);
var inst_36569 = cljs.core.vec(inst_36553);
var state_36593__$1 = state_36593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36593__$1,(11),out,inst_36569);
} else {
if((state_val_36594 === (5))){
var inst_36561 = (state_36593[(10)]);
var inst_36557 = (state_36593[(9)]);
var inst_36554 = (state_36593[(8)]);
var inst_36561__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36557) : f.call(null,inst_36557));
var inst_36562 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36561__$1,inst_36554);
var inst_36563 = cljs.core.keyword_identical_QMARK_(inst_36554,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36564 = ((inst_36562) || (inst_36563));
var state_36593__$1 = (function (){var statearr_36607 = state_36593;
(statearr_36607[(10)] = inst_36561__$1);

return statearr_36607;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36608_37603 = state_36593__$1;
(statearr_36608_37603[(1)] = (8));

} else {
var statearr_36609_37604 = state_36593__$1;
(statearr_36609_37604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (14))){
var inst_36586 = (state_36593[(2)]);
var inst_36587 = cljs.core.async.close_BANG_(out);
var state_36593__$1 = (function (){var statearr_36611 = state_36593;
(statearr_36611[(13)] = inst_36586);

return statearr_36611;
})();
var statearr_36612_37605 = state_36593__$1;
(statearr_36612_37605[(2)] = inst_36587);

(statearr_36612_37605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (10))){
var inst_36576 = (state_36593[(2)]);
var state_36593__$1 = state_36593;
var statearr_36613_37606 = state_36593__$1;
(statearr_36613_37606[(2)] = inst_36576);

(statearr_36613_37606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36594 === (8))){
var inst_36561 = (state_36593[(10)]);
var inst_36557 = (state_36593[(9)]);
var inst_36553 = (state_36593[(7)]);
var inst_36566 = inst_36553.push(inst_36557);
var tmp36610 = inst_36553;
var inst_36553__$1 = tmp36610;
var inst_36554 = inst_36561;
var state_36593__$1 = (function (){var statearr_36614 = state_36593;
(statearr_36614[(7)] = inst_36553__$1);

(statearr_36614[(8)] = inst_36554);

(statearr_36614[(14)] = inst_36566);

return statearr_36614;
})();
var statearr_36615_37607 = state_36593__$1;
(statearr_36615_37607[(2)] = null);

(statearr_36615_37607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__35057__auto__ = null;
var cljs$core$async$state_machine__35057__auto____0 = (function (){
var statearr_36616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36616[(0)] = cljs$core$async$state_machine__35057__auto__);

(statearr_36616[(1)] = (1));

return statearr_36616;
});
var cljs$core$async$state_machine__35057__auto____1 = (function (state_36593){
while(true){
var ret_value__35058__auto__ = (function (){try{while(true){
var result__35059__auto__ = switch__35056__auto__(state_36593);
if(cljs.core.keyword_identical_QMARK_(result__35059__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35059__auto__;
}
break;
}
}catch (e36617){if((e36617 instanceof Object)){
var ex__35060__auto__ = e36617;
var statearr_36618_37608 = state_36593;
(statearr_36618_37608[(5)] = ex__35060__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37614 = state_36593;
state_36593 = G__37614;
continue;
} else {
return ret_value__35058__auto__;
}
break;
}
});
cljs$core$async$state_machine__35057__auto__ = function(state_36593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35057__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35057__auto____1.call(this,state_36593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35057__auto____0;
cljs$core$async$state_machine__35057__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35057__auto____1;
return cljs$core$async$state_machine__35057__auto__;
})()
})();
var state__35123__auto__ = (function (){var statearr_36619 = (f__35122__auto__.cljs$core$IFn$_invoke$arity$0 ? f__35122__auto__.cljs$core$IFn$_invoke$arity$0() : f__35122__auto__.call(null));
(statearr_36619[(6)] = c__35121__auto___37543);

return statearr_36619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35123__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
