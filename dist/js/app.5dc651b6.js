(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cnode/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4685:function(t,e,n){"use strict";n("b075")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view",{attrs:{name:"slideBar"}}),n("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"root"}}},[a("img",{attrs:{src:n("d686"),alt:""}})]),a("ul",[a("router-link",{attrs:{to:{name:"root"}}},[a("li",[a("a",{attrs:{href:"#"}},[t._v("首页")])])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("新手入门")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("API")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("关于")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("注册")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("登陆")])])}],c={name:"Header"},u=c,l=(n("c891"),n("2877")),p=Object(l["a"])(u,r,o,!1,null,"e3436f5a",null),f=p.exports,_={components:{Header:f}},d=_,h=(n("5c0b"),Object(l["a"])(d,s,i,!1,null,null,null)),m=h.exports,v=n("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PostList"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{staticClass:"posts"},[a("ul",[t._m(0),t._l(t.posts,(function(e){return a("li",{key:e},[a("img",{attrs:{src:e.author.avatar_url}}),a("span",{staticClass:"allcount"},[a("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),t._v("/"+t._s(e.visit_count)+" ")]),a("span",{class:[{put_good:1==e.good,put_top:1==e.top,"topiclist-tab":1!=e.good&&1!=e.top}]},[t._v(t._s(t._f("tabFormat")(e)))]),a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[a("span",[t._v(t._s(e.title))])]),a("span",{staticClass:"last_reply"},[t._v(t._s(t._f("formatDate")(e.last_reply_at)))])],1)}))],2),a("pagination",{on:{renderList:t.handleList}})],1)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"toobar"},[n("span",[t._v("全部")]),n("span",[t._v("精华")]),n("span",[t._v("问答")]),n("span",[t._v("分享")]),n("span",[t._v("招聘")])])])}],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("button",{on:{click:t.changebtn}},[t._v("首页")]),n("button",{on:{click:t.changebtn}},[t._v("上一页")]),t.isShow?n("button",[t._v("......")]):t._e(),t._l(t.btns,(function(e){return n("button",{key:e,class:[{currentPage:e==t.currentPage},"pagebtn"],on:{click:function(n){return t.changebtn(e)}}},[t._v(" "+t._s(e)+" ")])})),n("button",{on:{click:t.changebtn}},[t._v("下一页")])],2)},k=[],C=(n("a434"),n("1adc")),$=n.n(C),P={name:"Pagination",data:function(){return{btns:[1,2,3,4,5,"......"],currentPage:1,isShow:!1}},methods:{changebtn:function(t){if("number"==typeof t)this.currentPage=t,t==this.btns[4]?(this.btns.shift(),this.btns.splice(4,0,this.btns[3]+1)):t==this.btns[0]&&this.btns[0]>1&&(this.btns.unshift(this.btns[0]-1),this.btns.splice(5,1)),this.btns[0]>1?this.isShow=!0:this.isShow=!1,this.$emit("renderList",this.currentPage);else switch(t.target.innerText){case"首页":this.btns=[1,2,3,4,5,"......"],this.changebtn(1);break;case"上一页":$()("button.currentPage").prev().click();break;case"下一页":$()("button.currentPage").next().click();break;default:break}}}},w=P,L=(n("4685"),Object(l["a"])(w,y,k,!1,null,"c2e28d12",null)),O=L.exports,j={name:"PostList",data:function(){return{isLoading:!1,posts:[],postPage:1}},components:{pagination:O},methods:{getData:function(){var t=this;this.$http.get("http://mock.hunger-valley.com/cnode/api/v1/topics",{params:{limit:20,page:this.postPage}}).then((function(e){t.isLoading=!1,t.posts=e.data.data})).catch((function(t){alert("数据未找到"),console.log(t)}))},handleList:function(t){this.postPage=t,this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},x=j,D=(n("f91a"),Object(l["a"])(x,g,b,!1,null,"39926462",null)),E=D.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",[a("div",{staticClass:"topic_header"},[a("div",{staticClass:"topic_title"},[t._v(" "+t._s(t.post.title)+" ")]),a("ul",[a("li",[t._v(" • 发布于 "+t._s(t._f("formatDate")(t.post.create_at)))]),a("li",[t._v(" • 作者 "+t._s(t.post.author.loginname))]),a("li",[t._v(" • "+t._s(t.post.visit_count)+"次浏览")]),a("li",[t._v(" • 来自 "+t._s(t._f("tabFormat")(t.post)))])]),a("div",{staticClass:"topic_content ",domProps:{innerHTML:t._s(t.post.content)}})]),a("div",{attrs:{id:"reply"}},[a("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,(function(e,n){return a("div",{key:e,staticClass:"replySec"},[a("div",{staticClass:"replyUp"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url}})]),a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("span",[t._v(t._s(e.author.loginname))])]),a("span",[t._v(" "+t._s(n+1)+"楼 ")]),e.ups.length>0?a("span",[t._v(" ☝ "+t._s(e.ups.length)+" ")]):a("span")],1),a("p",{domProps:{innerHTML:t._s(e.content)}})])}))],2)])])},M=[],T={name:"Article",data:function(){return{isLoading:!1,post:[]}},methods:{getArticleData:function(){var t=this;this.$http.get("http://mock.hunger-valley.com/cnode/api/v1/topic/${this.$route.params.id}").then((function(e){1==e.data.success&&(t.isLoading=!1,t.post=e.data.data)})).catch((function(t){alert("article 获取数据出错"),console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(){this.getArticleData()}}},I=T,U=(n("7703"),Object(l["a"])(I,S,M,!1,null,null,null)),A=U.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"UserInfo"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{staticClass:"userInfomation"},[a("section",[a("img",{attrs:{src:t.user_info.avatar_url}}),a("span",[t._v(t._s(t.user_info.loginname))]),a("p",[t._v(" "+t._s(t.user_info.score)+"积分 ")]),a("p",[t._v(" 注册时间："+t._s(t._f("formatDate")(t.user_info.create_at))+" ")])]),a("div",{staticClass:"replies"},[a("p",[t._v("回复主题")]),a("ul",t._l(t.user_info.recent_replies,(function(e){return a("li",{key:e},[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(t._s(e.title))])],1)})),0)]),a("div",{staticClass:"topics"},[a("p",[t._v("创建的主题")]),a("ul",t._l(t.user_info.recent_topics,(function(e){return a("li",{key:e},[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])])},B=[],F=(n("b0c0"),{name:"User_info",data:function(){return{isLoading:!1,user_info:[]}},methods:{getUserData:function(){var t=this;this.$http.get("http://mock.hunger-valley.com/cnode/api/v1/user/".concat(this.$route.params.name)).then((function(e){1==e.data.success&&(t.isLoading=!1,t.user_info=e.data.data)})).catch((function(t){alert("userinfo 获取数据出错"),console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getUserData()}}),J=F,q=(n("88bb"),Object(l["a"])(J,H,B,!1,null,"2add2241",null)),z=q.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autherinfo"},[n("div",{staticClass:"authersummay"},[n("div",{staticClass:"topbar"},[t._v("作者")]),n("router-link",{attrs:{to:{name:"user_info",params:{name:t.user_info.loginname}}}},[n("img",{attrs:{src:t.user_info.avatar_url}})])],1),n("div",{staticClass:"recent_topics"},[n("div",{staticClass:"topbar"},[t._v("作者最近主题")]),n("ul",t._l(t.topicLimitedTo5,(function(e){return n("li",{key:e},[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(t._s(e.title))])],1)})),0)]),n("div",{staticClass:"recent_replies"},[n("div",{staticClass:"topbar"},[t._v("作者最近回复")]),n("ul",t._l(t.replylimitby5,(function(e){return n("li",{key:e},[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},K=[],N=(n("fb6a"),{name:"SlideBar",data:function(){return{user_info:[]}},methods:{getUserData:function(){var t=this;this.$http.get("http://mock.hunger-valley.com/cnode/api/v1/user/".concat(this.$route.params.name)).then((function(e){1==e.data.success&&(t.user_info=e.data.data)})).catch((function(t){alert("slidebar 获取数据出错"),console.log(t)}))}},computed:{topicLimitedTo5:function(){return this.user_info.recent_topics,this.user_info.recent_topics.slice(0,5)},replylimitby5:function(){return this.user_info.recent_replies,this.user_info.recent_replies.slice(0,5)}},beforeMount:function(){this.getUserData()}}),Q=N,R=(n("9a45"),Object(l["a"])(Q,G,K,!1,null,"60ac7e94",null)),V=R.exports;a["a"].use(v["a"]);var W=[{path:"/",name:"root",components:{main:E}},{path:"/topic/:id&&author=:name",name:"post_content",components:{main:A,slideBar:V}},{path:"/user/:name",name:"user_info",components:{main:z}}],X=new v["a"]({mode:"history",base:"/cnode/",routes:W}),Y=X,Z=n("8206"),tt=n.n(Z);a["a"].prototype.$http=tt.a,a["a"].config.productionTip=!1,new a["a"]({router:Y,render:function(t){return t(m)}}).$mount("#app"),a["a"].filter("formatDate",(function(t){if(!t)return"";var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"})),a["a"].filter("tabFormat",(function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}))},"57f5":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},7703:function(t,e,n){"use strict";n("e6ad")},"88bb":function(t,e,n){"use strict";n("bc63")},"99aa":function(t,e,n){},"9a45":function(t,e,n){"use strict";n("99aa")},"9c0c":function(t,e,n){},b075:function(t,e,n){},bc63:function(t,e,n){},c891:function(t,e,n){"use strict";n("57f5")},cf1c:function(t,e,n){t.exports=n.p+"img/loading.078fcd09.gif"},d686:function(t,e,n){t.exports=n.p+"img/cnodejs_light.86f6a7c2.svg"},e1e5:function(t,e,n){},e6ad:function(t,e,n){},f91a:function(t,e,n){"use strict";n("e1e5")}});
//# sourceMappingURL=app.5dc651b6.js.map