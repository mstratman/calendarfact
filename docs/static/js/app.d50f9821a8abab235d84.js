webpackJsonp([1],{NHnr:function(e,t,n){"use strict";function a(e){return"object"===(void 0===e?"undefined":m()(e))&&e.constructor===Array}function i(e){return"object"===(void 0===e?"undefined":m()(e))&&e.constructor!==Array}Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",[t("router-view")],1)])},staticRenderFns:[]},s=n("VU/8")({name:"app"},o,!1,function(e){n("v7yv")},null,null).exports,c=n("/ocq"),l=n("BO1k"),u=n.n(l),h=n("mvHQ"),d=n.n(h),f=n("pFYg"),m=n.n(f),p=["Did you know that",{_:[["the",{_:["fall","spring"]},"equinox"],["the",{_:["winter","summer"]},{_:["solstice","olympics"]}],["the",{_:["earliest","latest"]},{_:["sunrise","sunset"]}],["daylight",{_:["saving","savings"]},"time"],["leap",{_:["day","year"]}],"easter",["the",{_:["harvest","super","blood"]},"moon"],"Toyota truck month","shark week"]},{_:[["happens",{_:["earlier","later","at the wrong time"]},"every year"],["drifts out of sync with the",{_:["sun","moon","zodiac",[{_:["Gregorian","Mayan","lunar","iPhone"]},"calendar"],"atomic clock in Colorado"]}],["might",{_:["not happen","happen twice"]},"this year"]]},["because of",{_:[["time zone legislation in",{_:["Indiana","Arizona","Russia"]}],"a decree by the Pope in the 1500s",[{_:["precession","libration","nutation","libation","eccentricity","obliquity"]},"of the",{_:["moon","sun","earth's axis","equator","prime meridian",[{_:["international date","Mason-Dixon"]},"line"]]}]]}],"?\n\n","Apparently",{_:["it causes a predictable increase in car accidents.","that's why we have leap seconds.","scientists are really worried.",["it was even more extreme during the",{_:["Bronze Age.","Ice Age.","Cretaceous.","1990s."]}],["there's a proposal to fix it, but it",{_:["will never happen.","actually makes things worse.","is stalled in Congress.","might be unconstitutional."]}],"it's getting worse and no one knows why."]}],v={name:"Index",mixins:[{mounted:function(){this.randomizeBackground()},methods:{randomizeBackground:function(){var e=["#0ac2d2","#7bb7fa","#60d7a9","#fdc162","#fd6a62","#f68dbb"],t=e[Math.floor(Math.random()*e.length)];document.body.style.background=t}}}],watch:{selections:function(){this.$router.push({name:"Selections",params:{selections:this.selectionsParam}})}},data:function(){return{selections:[]}},mounted:function(){this.$route.params.selections?this.setSelectionsFromRoute():this.setRandomSelection()},computed:{selectionsParam:function(){return this.selections.join(":")},fact:function(){var e="",t=JSON.parse(d()(this.selections));return function n(r){if(function(e){return"string"==typeof e}(r))"."!==r&&"?"!==r&&e.length&&(e+=" "),e+=r;else if(a(r)){var o=!0,s=!1,c=void 0;try{for(var l,h=u()(r);!(o=(l=h.next()).done);o=!0)n(l.value)}catch(e){s=!0,c=e}finally{try{!o&&h.return&&h.return()}finally{if(s)throw c}}}else if(i(r)){var d=t.shift();n(r._[d])}}(p),e}},methods:{regenerate:function(){this.setRandomSelection(),this.randomizeBackground()},setRandomSelection:function(){var e=[],t=void 0,n=void 0;t=function(r){var o=Math.floor(Math.random()*r._.length);e.push(o);var s=r._[o];i(s)?t(s):a(s)&&n(s)},(n=function(e){var r=!0,o=!1,s=void 0;try{for(var c,l=u()(e);!(r=(c=l.next()).done);r=!0){var h=c.value;a(h)?n(h):i(h)&&t(h)}}catch(e){o=!0,s=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw s}}})(p),this.selections=e},setSelectionsFromRoute:function(){var e=this.$route.params.selections;this.selections=e.split(":")}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contents"},[n("h1",[e._v('Calendar "Fact"')]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"fact"},[e._v(e._s(e.fact))]),e._v(" "),n("div",{staticClass:"regenerate"},[n("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.regenerate(t)}}},[e._v("show me another fact")])]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",[this._v("Courtesy of "),t("a",{attrs:{href:"https://xkcd.com/1930/",target:"_blank"}},[this._v("xkcd 1930")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flowchart"},[t("a",{attrs:{href:"https://xkcd.com/1930/",target:"_blank"}},[t("img",{attrs:{src:"https://imgs.xkcd.com/comics/calendar_facts.png",alt:"Calendar facts"}})])])}]},y=n("VU/8")(v,_,!1,function(e){n("T7cj")},"data-v-436b1857",null).exports;r.a.use(c.a);var g=new c.a({routes:[{path:"/",name:"Index",component:y},{path:"/:selections",name:"Selections",component:y}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:g,template:"<App/>",components:{App:s}})},T7cj:function(e,t){},v7yv:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d50f9821a8abab235d84.js.map