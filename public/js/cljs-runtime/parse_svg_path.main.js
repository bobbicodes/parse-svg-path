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
parse_svg_path.main.x_val = (function parse_svg_path$main$x_val(p__31916){
var vec__31917 = p__31916;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31917,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31917,(1),null);
var G__31920 = command;
switch (G__31920) {
case "C":
case "S":
case "Q":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));

break;
case "A":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));

break;
default:
return cljs.core.first(params);

}
});
parse_svg_path.main.y_val = (function parse_svg_path$main$y_val(p__31921){
var vec__31922 = p__31921;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31922,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31922,(1),null);
var G__31925 = command;
switch (G__31925) {
case "C":
case "S":
case "Q":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));

break;
case "A":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));

break;
default:
return cljs.core.second(params);

}
});
parse_svg_path.main.x_min = (function parse_svg_path$main$x_min(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.x_val,parse_svg_path.main.parse_svg_path(s))));
});
parse_svg_path.main.y_min = (function parse_svg_path$main$y_min(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.y_val,parse_svg_path.main.parse_svg_path(s))));
});
parse_svg_path.main.x_max = (function parse_svg_path$main$x_max(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.x_val,parse_svg_path.main.parse_svg_path(s)));
});
parse_svg_path.main.y_max = (function parse_svg_path$main$y_max(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.y_val,parse_svg_path.main.parse_svg_path(s)));
});
parse_svg_path.main.width = (function parse_svg_path$main$width(s){
return (parse_svg_path.main.x_max(s) - parse_svg_path.main.x_min(s));
});
parse_svg_path.main.height = (function parse_svg_path$main$height(s){
return (parse_svg_path.main.y_max(s) - parse_svg_path.main.y_min(s));
});
parse_svg_path.main.app = (function parse_svg_path$main$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"100px",new cljs.core.Keyword(null,"width","width",-384071477),"600px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"parse-svg-path"], null)], null);
});
parse_svg_path.main.start = (function parse_svg_path$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.app], null),document.getElementById("app"));
});
parse_svg_path.main.init = (function parse_svg_path$main$init(){
return parse_svg_path.main.start();
});
goog.exportSymbol('parse_svg_path.main.init', parse_svg_path.main.init);

//# sourceMappingURL=parse_svg_path.main.js.map
