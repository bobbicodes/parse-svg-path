goog.provide('parse_svg_path.main');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('reagent.core');
goog.require('parse_svg_path.latex');
if((typeof parse_svg_path !== 'undefined') && (typeof parse_svg_path.main !== 'undefined') && (typeof parse_svg_path.main.path !== 'undefined')){
} else {
parse_svg_path.main.path = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("M89 629Q89 663 116 684T171 705Q215 705 237 681T260 634Q260 619 233 434T204 244Q201 237 175 237Q150 237 146 244Q144 248 117 433T89 629ZM90 86Q90 125 116 148T177 171Q211 169 235 146T259 86Q259 48 235 25T175 1Q138 1 114 24T90 86Z");
}
if((typeof parse_svg_path !== 'undefined') && (typeof parse_svg_path.main !== 'undefined') && (typeof parse_svg_path.main.textbox !== 'undefined')){
} else {
parse_svg_path.main.textbox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(parse_svg_path.main.path));
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("parse-svg-path.main","path","parse-svg-path.main/path",516846111),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"segment","segment",-964921196),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,"))))),cljs.spec.alpha.rep_PLUS_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"segment","segment",-964921196),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,")))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segment","segment",-964921196)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set("MmLlHhVvCcSsQqTtAaZz"),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,"),cljs.core.set("0123456789 .-,"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,"))], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"MmLlHhVvCcSsQqTtAaZz"),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),"0123456789 .-,")))], null))));
parse_svg_path.main.parse_params = (function parse_svg_path$main$parse_params(v){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,cljs.core.re_seq(/[0-9\.\-\+]+/,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v)));
});
parse_svg_path.main.valid_segment_QMARK_ = (function parse_svg_path$main$valid_segment_QMARK_(p__32643){
var map__32644 = p__32643;
var map__32644__$1 = (((((!((map__32644 == null))))?(((((map__32644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32644):map__32644);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32644__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32644__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__32646 = command;
switch (G__32646) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32646)].join('')));

}
});
parse_svg_path.main.valid_path_QMARK_ = (function parse_svg_path$main$valid_path_QMARK_(s){
return cljs.core.every_QMARK_((function (p1__32647_SHARP_){
return parse_svg_path.main.valid_segment_QMARK_(new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(p1__32647_SHARP_));
}),cljs.spec.alpha.conform(new cljs.core.Keyword("parse-svg-path.main","path","parse-svg-path.main/path",516846111),cljs.core.seq(s)));
});
parse_svg_path.main.x_val = (function parse_svg_path$main$x_val(p__32649){
var vec__32650 = p__32649;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32650,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32650,(1),null);
var G__32653 = command;
switch (G__32653) {
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
parse_svg_path.main.y_val = (function parse_svg_path$main$y_val(p__32654){
var vec__32655 = p__32654;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32655,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32655,(1),null);
var G__32658 = command;
switch (G__32658) {
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
var path = s;
var x_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.x_val,path));
var y_vals = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.y_val,path));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,x_vals) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,x_vals)),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,y_vals) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,y_vals))], null);
});
parse_svg_path.main.button = (function parse_svg_path$main$button(label,onclick){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),onclick], null),label], null);
});
if((typeof parse_svg_path !== 'undefined') && (typeof parse_svg_path.main !== 'undefined') && (typeof parse_svg_path.main.latex_num !== 'undefined')){
} else {
parse_svg_path.main.latex_num = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
parse_svg_path.main.app = (function parse_svg_path$main$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"1000px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"SVG Path Editor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),((2) + (cljs.core.count(cljs.core.deref(parse_svg_path.main.path)) / (60))),new cljs.core.Keyword(null,"cols","cols",-1914801295),(60),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(parse_svg_path.main.textbox)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32659_SHARP_){
if(parse_svg_path.main.valid_path_QMARK_(cljs.core.deref(parse_svg_path.main.textbox))){
cljs.core.reset_BANG_(parse_svg_path.main.path,p1__32659_SHARP_.target.value);
} else {
}

return cljs.core.reset_BANG_(parse_svg_path.main.textbox,p1__32659_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.button,"Next ",(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(parse_svg_path.main.latex_num,cljs.core.inc);

return cljs.core.reset_BANG_(parse_svg_path.main.path,["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(parse_svg_path.latex.l),cljs.core.deref(parse_svg_path.main.latex_num))),"Z"].join(''));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 1000 1000",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1,-1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#ffaa00",new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.deref(parse_svg_path.main.path)], null)], null)], null)], null);
});
parse_svg_path.main.start = (function parse_svg_path$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.app], null),document.getElementById("app"));
});
parse_svg_path.main.init = (function parse_svg_path$main$init(){
return parse_svg_path.main.start();
});
goog.exportSymbol('parse_svg_path.main.init', parse_svg_path.main.init);

//# sourceMappingURL=parse_svg_path.main.js.map
