goog.provide('parse_svg_path.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
/**
 * Splits an SVG path string into a sequence of commands
 */
parse_svg_path.main.parse_commands = (function parse_svg_path$main$parse_commands(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(?=[A-Z])/);
});
/**
 * Parses the command's parameters into a sequence of numbers
 */
parse_svg_path.main.parse_vals = (function parse_svg_path$main$parse_vals(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,cljs.core.re_seq(/[\d.]+/,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))));
});
/**
 * Takes an SVG path string and outputs a seq of vectors
 * containing each command paired with its params
 */
parse_svg_path.main.parse_svg_path = (function parse_svg_path$main$parse_svg_path(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,parse_svg_path.main.parse_vals),parse_svg_path.main.parse_commands(s));
});
parse_svg_path.main.parse_svg_coords = (function parse_svg_path$main$parse_svg_coords(coords){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,cljs.core.re_seq(/[0-9\.\-\+]+/,coords))));
});
parse_svg_path.main.svg_path = (function parse_svg_path$main$svg_path(var_args){
var G__32283 = arguments.length;
switch (G__32283) {
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
return parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32284){
var vec__32285 = p__32284;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32285,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32285,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32285,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,parse_svg_path.main.parse_svg_coords(c)], null);
}),cljs.core.re_seq(/([MLCZz])\s*(((([0-9\.\-]+)\,?){2}\s*){0,3})/,svg)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));

(parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3 = (function (p__32288,p0,pc){
while(true){
var vec__32289 = p__32288;
var seq__32290 = cljs.core.seq(vec__32289);
var first__32291 = cljs.core.first(seq__32290);
var seq__32290__$1 = cljs.core.next(seq__32290);
var vec__32292 = first__32291;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(1),null);
var seg = vec__32292;
var more = seq__32290__$1;
if(cljs.core.truth_(seg)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",type)){
var p = cljs.core.first(points);
var G__32309 = more;
var G__32310 = p;
var G__32311 = p;
p__32288 = G__32309;
p0 = G__32310;
pc = G__32311;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("L",type)){
var p = cljs.core.first(points);
return (new cljs.core.LazySeq(null,((function (p__32288,p0,pc,p,vec__32289,seq__32290,first__32291,seq__32290__$1,vec__32292,type,points,seg,more){
return (function (){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,p], null)], null),parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(more,p0,p));
});})(p__32288,p0,pc,p,vec__32289,seq__32290,first__32291,seq__32290__$1,vec__32292,type,points,seg,more))
,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("C",type)){
var p = cljs.core.last(points);
return (new cljs.core.LazySeq(null,((function (p__32288,p0,pc,p,vec__32289,seq__32290,first__32291,seq__32290__$1,vec__32292,type,points,seg,more){
return (function (){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bezier","bezier",-539235327),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.cons(pc,points)], null),parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(more,p0,p));
});})(p__32288,p0,pc,p,vec__32289,seq__32290,first__32291,seq__32290__$1,vec__32292,type,points,seg,more))
,null,null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Z",type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("z",type)))){
return (new cljs.core.LazySeq(null,((function (p__32288,p0,pc,vec__32289,seq__32290,first__32291,seq__32290__$1,vec__32292,type,points,seg,more){
return (function (){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,p0], null)], null),parse_svg_path.main.svg_path.cljs$core$IFn$_invoke$arity$3(more,p0,p0));
});})(p__32288,p0,pc,vec__32289,seq__32290,first__32291,seq__32290__$1,vec__32292,type,points,seg,more))
,null,null));
} else {
return ["Unsupported path segment type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('');

}
}
}
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
parse_svg_path.main.x_val = (function parse_svg_path$main$x_val(p__32295){
var vec__32296 = p__32295;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32296,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32296,(1),null);
var G__32299 = command;
switch (G__32299) {
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
parse_svg_path.main.y_val = (function parse_svg_path$main$y_val(p__32300){
var vec__32301 = p__32300;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32301,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32301,(1),null);
var G__32304 = command;
switch (G__32304) {
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
var path = parse_svg_path.main.parse_svg_path(s);
var x_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.x_val,path));
var y_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.y_val,path));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,x_vals) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,x_vals)),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,y_vals) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,y_vals))], null);
});
if((typeof parse_svg_path !== 'undefined') && (typeof parse_svg_path.main !== 'undefined') && (typeof parse_svg_path.main.path !== 'undefined')){
} else {
parse_svg_path.main.path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("M132 523Q98 523 98 490V479L111 451Q186 293 220 178L228 154H196Q158 154 142 157T103 176Q92 183 81 194T62 215 53 227Q51 228 38 228 19 228 19 218 19 212 38 183T93 121 164 83Q171 81 389 81 549 81 553 82 573 89 573 110 573 141 541 152 535 154 472 154H408L405 171Q393 243 393 290 393 342 402 383T421 447 431 475Q431 492 417 507T381 522Q370 522 363 519T347 495 331 435Q330 426 330 391 330 342 339 286T357 194 367 154H269L268 158Q268 161 249 237T206 398 175 495Q164 523 132 523Z");
}
parse_svg_path.main.app = (function parse_svg_path$main$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"1000px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"SVG Path Editor"], null),(function (){var vec__32305 = parse_svg_path.main.dimensions(cljs.core.deref(parse_svg_path.main.path));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32305,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32305,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," x ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('')], null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),((2) + (cljs.core.count(cljs.core.deref(parse_svg_path.main.path)) / (60))),new cljs.core.Keyword(null,"cols","cols",-1914801295),(60),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(parse_svg_path.main.path)),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 1000 1000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#ffaa00",new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.deref(parse_svg_path.main.path)], null)], null)], null)], null);
});
parse_svg_path.main.start = (function parse_svg_path$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.app], null),document.getElementById("app"));
});
parse_svg_path.main.init = (function parse_svg_path$main$init(){
return parse_svg_path.main.start();
});
goog.exportSymbol('parse_svg_path.main.init', parse_svg_path.main.init);

//# sourceMappingURL=parse_svg_path.main.js.map
