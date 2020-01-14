goog.provide('parse_svg_path.main');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('parse_svg_path.latex');
if((typeof parse_svg_path !== 'undefined') && (typeof parse_svg_path.main !== 'undefined') && (typeof parse_svg_path.main.path !== 'undefined')){
} else {
parse_svg_path.main.path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("M89 629Q89 663 116 684T171 705Q215 705 237 681T260 634Q260 619 233 434T204 244Q201 237 175 237Q150 237 146 244Q144 248 117 433T89 629ZM90 86Q90 125 116 148T177 171Q211 169 235 146T259 86Q259 48 235 25T175 1Q138 1 114 24T90 86Z");
}
if((typeof parse_svg_path !== 'undefined') && (typeof parse_svg_path.main !== 'undefined') && (typeof parse_svg_path.main.textbox !== 'undefined')){
} else {
parse_svg_path.main.textbox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(parse_svg_path.main.path));
}
parse_svg_path.main.svg_path_commands = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),cljs.core.set("Mm"),new cljs.core.Keyword(null,"line-to","line-to",1332939595),cljs.core.set("LlHhVv"),new cljs.core.Keyword(null,"cubic-bezier","cubic-bezier",536841881),cljs.core.set("CcSs"),new cljs.core.Keyword(null,"quadratic-bezier","quadratic-bezier",2144881673),cljs.core.set("QqTt"),new cljs.core.Keyword(null,"arc","arc",252411045),cljs.core.set("Aa"),new cljs.core.Keyword(null,"close-path","close-path",1220079654),cljs.core.set("Zz")], null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("parse-svg-path.main","path","parse-svg-path.main/path",516846111),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"segment","segment",-964921196),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,"))))),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"segment","segment",-964921196),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,")))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segment","segment",-964921196)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set("MmLlHhVvCcSsQqTtAaZz"),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,"),cljs.core.set("0123456789 .-,"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,"))], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,")))], null))));
/**
 * Splits an SVG path string into a sequence of commands
 */
parse_svg_path.main.parse_commands = (function parse_svg_path$main$parse_commands(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(?=[A-Z])/);
});
parse_svg_path.main.parse_params = (function parse_svg_path$main$parse_params(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,cljs.core.re_seq(/[0-9\.\-\+]+/,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v)));
});
parse_svg_path.main.valid_segment_QMARK_ = (function parse_svg_path$main$valid_segment_QMARK_(p__32344){
var map__32345 = p__32344;
var map__32345__$1 = (((((!((map__32345 == null))))?(((((map__32345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32345):map__32345);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32345__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32345__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__32347 = command;
switch (G__32347) {
case "Z":
case "z":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(parse_svg_path.main.parse_params(params)));

break;
case "H":
case "h":
case "V":
case "v":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(parse_svg_path.main.parse_params(params)));

break;
case "M":
case "m":
case "T":
case "t":
case "L":
case "l":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(parse_svg_path.main.parse_params(params)));

break;
case "Q":
case "q":
case "S":
case "s":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(parse_svg_path.main.parse_params(params)));

break;
case "C":
case "c":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),cljs.core.count(parse_svg_path.main.parse_params(params)));

break;
case "A":
case "a":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),cljs.core.count(parse_svg_path.main.parse_params(params)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32347)].join('')));

}
});
parse_svg_path.main.valid_path_QMARK_ = (function parse_svg_path$main$valid_path_QMARK_(s){
return cljs.core.every_QMARK_((function (p1__32348_SHARP_){
return parse_svg_path.main.valid_segment_QMARK_(new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(p1__32348_SHARP_));
}),cljs.spec.alpha.conform(new cljs.core.Keyword("parse-svg-path.main","path","parse-svg-path.main/path",516846111),cljs.core.seq(s)));
});
parse_svg_path.main.svg_path = (function parse_svg_path$main$svg_path(var_args){
var G__32351 = arguments.length;
switch (G__32351) {
case 1:
return parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$1 = (function (svg){
return parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32352){
var vec__32353 = p__32352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32353,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,parse_svg_path.main.parse_params(c)], null);
}),cljs.core.re_seq(/([MLQVHCZz])\s*(((([0-9\.\-]+)\,?){2}\s*){0,3})/,svg)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));

(parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3 = (function (p__32356,p0,pc){
while(true){
var vec__32357 = p__32356;
var seq__32358 = cljs.core.seq(vec__32357);
var first__32359 = cljs.core.first(seq__32358);
var seq__32358__$1 = cljs.core.next(seq__32358);
var vec__32360 = first__32359;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32360,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32360,(1),null);
var seg = vec__32360;
var more = seq__32358__$1;
if(cljs.core.truth_(seg)){
var G__32363 = type;
switch (G__32363) {
case "M":
var p = cljs.core.first(points);
var G__32378 = more;
var G__32379 = p;
var G__32380 = p;
p__32356 = G__32378;
p0 = G__32379;
pc = G__32380;
continue;

break;
case "L":
case "V":
case "H":
var p = cljs.core.first(points);
return (new cljs.core.LazySeq(null,((function (p__32356,p0,pc,p,G__32363,vec__32357,seq__32358,first__32359,seq__32358__$1,vec__32360,type,points,seg,more){
return (function (){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,p], null)], null),parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(more,p0,p));
});})(p__32356,p0,pc,p,G__32363,vec__32357,seq__32358,first__32359,seq__32358__$1,vec__32360,type,points,seg,more))
,null,null));

break;
case "C":
case "Q":
var p = cljs.core.last(points);
return (new cljs.core.LazySeq(null,((function (p__32356,p0,pc,p,G__32363,vec__32357,seq__32358,first__32359,seq__32358__$1,vec__32360,type,points,seg,more){
return (function (){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bezier","bezier",-539235327),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.cons(pc,points)], null),parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(more,p0,p));
});})(p__32356,p0,pc,p,G__32363,vec__32357,seq__32358,first__32359,seq__32358__$1,vec__32360,type,points,seg,more))
,null,null));

break;
case "Z":
case "z":
return (new cljs.core.LazySeq(null,((function (p__32356,p0,pc,G__32363,vec__32357,seq__32358,first__32359,seq__32358__$1,vec__32360,type,points,seg,more){
return (function (){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,p0], null)], null),parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(more,p0,p0));
});})(p__32356,p0,pc,G__32363,vec__32357,seq__32358,first__32359,seq__32358__$1,vec__32360,type,points,seg,more))
,null,null));

break;
default:
return ["Unsupported path segment type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('');

}
} else {
return null;
}
break;
}
}));

(parse_svg_path.main.svg_path.cljs$lang$maxFixedArity = 3);

parse_svg_path.main.all_vals = (function parse_svg_path$main$all_vals(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,cljs.core.re_seq(/\d+\.?\d*|\d*\.?\d+/,s));
});
parse_svg_path.main.x_val = (function parse_svg_path$main$x_val(p__32364){
var vec__32365 = p__32364;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32365,(1),null);
var G__32368 = command;
switch (G__32368) {
case "C":
case "S":
case "Q":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));

break;
case "A":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));

break;
case "V":
return null;

break;
default:
return cljs.core.first(params);

}
});
parse_svg_path.main.y_val = (function parse_svg_path$main$y_val(p__32369){
var vec__32370 = p__32369;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370,(1),null);
var G__32373 = command;
switch (G__32373) {
case "C":
case "S":
case "Q":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));

break;
case "A":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));

break;
case "H":
return null;

break;
default:
return cljs.core.second(params);

}
});
parse_svg_path.main.dimensions = (function parse_svg_path$main$dimensions(s){
var path = parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$1(s);
var x_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.x_val,path));
var y_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.y_val,path));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,x_vals) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,x_vals)),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,y_vals) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,y_vals))], null);
});
parse_svg_path.main.app = (function parse_svg_path$main$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"1000px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"SVG Path Editor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),((2) + (cljs.core.count(cljs.core.deref(parse_svg_path.main.path)) / (60))),new cljs.core.Keyword(null,"cols","cols",-1914801295),(60),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(parse_svg_path.main.textbox)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32374_SHARP_){
if(parse_svg_path.main.valid_path_QMARK_(cljs.core.deref(parse_svg_path.main.textbox))){
cljs.core.reset_BANG_(parse_svg_path.main.path,p1__32374_SHARP_.target.value);
} else {
}

return cljs.core.reset_BANG_(parse_svg_path.main.textbox,p1__32374_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 1000 1000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#ffaa00",new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.deref(parse_svg_path.main.path)], null)], null)], null)], null);
});
parse_svg_path.main.start = (function parse_svg_path$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.app], null),document.getElementById("app"));
});
parse_svg_path.main.init = (function parse_svg_path$main$init(){
return parse_svg_path.main.start();
});
goog.exportSymbol('parse_svg_path.main.init', parse_svg_path.main.init);

//# sourceMappingURL=parse_svg_path.main.js.map
