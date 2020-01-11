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
parse_svg_path.main.all_vals = (function parse_svg_path$main$all_vals(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,cljs.core.re_seq(/\d+\.?\d*|\d*\.?\d+/,s));
});
parse_svg_path.main.x_val = (function parse_svg_path$main$x_val(p__32066){
var vec__32067 = p__32066;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32067,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32067,(1),null);
var G__32070 = command;
switch (G__32070) {
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
parse_svg_path.main.y_val = (function parse_svg_path$main$y_val(p__32071){
var vec__32072 = p__32071;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32072,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32072,(1),null);
var G__32075 = command;
switch (G__32075) {
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"1000px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 1000 1000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#ffaa00",new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.deref(parse_svg_path.main.path)], null)], null)], null),(function (){var vec__32076 = parse_svg_path.main.dimensions(cljs.core.deref(parse_svg_path.main.path));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('')], null)], null);
})()], null);
});
parse_svg_path.main.start = (function parse_svg_path$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.app], null),document.getElementById("app"));
});
parse_svg_path.main.init = (function parse_svg_path$main$init(){
return parse_svg_path.main.start();
});
goog.exportSymbol('parse_svg_path.main.init', parse_svg_path.main.init);

//# sourceMappingURL=parse_svg_path.main.js.map
