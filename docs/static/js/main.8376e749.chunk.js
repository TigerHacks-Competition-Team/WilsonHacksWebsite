(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/instagram_logo.868d5d73.png"},22:function(e,t,a){e.exports=a.p+"static/media/SciMaTech_logo.cbf6094c.png"},27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},35:function(e,t,a){e.exports=a.p+"static/media/ttl01.bfce2a37.png"},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/WilsonHacks.f2fa2d58.png"},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),c=(a(32),a(8)),s=a.n(c),o=a(11),m=a(19),d=a(25),u=a(20),h=a(9),p=a(12),E=a(26),f=(a(34),a(35),a(21)),g=a.n(f),w=a(22),v=a.n(w),y=(a(36),a(37),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={w:window.innerWidth,data:{}},a.getData=a.getData.bind(Object(h.a)(a)),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"onload",value:function(){document.getElementById("home").className="current_page_item"}},{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="WilsonHacks",window.addEventListener("resize",(function(){a.setState({w:window.innerWidth})})),e.next=4,this.getData();case 4:t=e.sent,this.setState({data:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(){return new Promise(function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:n=(n=e.sent).json(),t(n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}}]),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=.1*this.state.w,n=new Date,i=(new Date("Sun Feb 07 2021 09:59:90 GMT-0500 (Eastern Standard Time)"),new Date("Sat Feb 06 2021 11:00:90 GMT-0500 (Eastern Standard Time)"));return console.log("render data: "+JSON.stringify(this.state.data)),r.a.createElement("div",null,r.a.createElement("head",null,r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"description",content:"A hackathon by Woodrow Wilson High School"}),r.a.createElement("meta",{name:"keywords",content:"WilsonHacks, Wilson, Hackathon"}),r.a.createElement("meta",{name:"author",content:"WilsonHacks"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),r.a.createElement("link",{rel:"stylesheet",href:"assets/css/main.css"}),r.a.createElement("link",{rel:"shortcut icon",href:"/assets/css/images/wilson_favicon.ico"})),r.a.createElement("body",{class:"homepage is-preload",onload:"onload()"},r.a.createElement("div",{id:"page-wrapper"},r.a.createElement("div",{id:"header-wrapper"},r.a.createElement("div",{id:"fixed"},r.a.createElement("header",{id:"header"},r.a.createElement("div",{class:"inner"},this.state.w>499&&r.a.createElement("h1",null,r.a.createElement("a",{href:"index.html",class:"logo-size"},"Wilson Hacks")),r.a.createElement("nav",{id:"nav"},r.a.createElement("ul",null,n.getTime()<i.getTime()&&r.a.createElement("li",{class:"registration-link"},r.a.createElement("a",{href:"https://wilsonhacks.devpost.com",target:"__blank"},"Register")),r.a.createElement("li",null,r.a.createElement("a",{href:"#w2021"},"Winter 2021 Winners"))))))),r.a.createElement("div",{id:"banner"},n.getTime()<i.getTime()&&r.a.createElement("h2",{style:{backgroundColor:"red",marginLeft:"auto",marginRight:"auto",padding:"40px"}},"Registration Open!"),r.a.createElement("img",{class:"banner-logo",src:a(38),width:.6*this.state.w,height:.6*this.state.w}))),r.a.createElement("div",{class:"wrapper style3",id:"w2021"},r.a.createElement("div",{class:"inner"},r.a.createElement("div",{class:"container box feature1"},r.a.createElement("div",{id:"faq"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-12"},r.a.createElement("header",{class:"first major"},r.a.createElement("h2",null,"Winter 2021 Winners"))),r.a.createElement("div",{class:"col-6 col-12-medium"},r.a.createElement("section",null,this.state.data&&this.state.data.winners&&this.state.data.winners.filter((function(t,a){return a<e.state.data.winners.length/2})).map((function(e){return r.a.createElement("div",null,r.a.createElement("h3",{style:{fontSize:22}},e.category),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.video&&e.video.length>0?r.a.createElement("iframe",{style:{width:"50%",margin:8},width:"50%",height:"auto",src:e.video,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;",allowFullScreen:!0}):r.a.createElement("img",{src:e.image,style:{maxWidth:"50%",maxHeight:"300px",margin:8}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"column"}},r.a.createElement("div",null,r.a.createElement("h4",{style:{fontSize:17}},e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.link},"Devpost Project")))))})))),r.a.createElement("div",{class:"col-6 col-12-medium"},r.a.createElement("section",null,this.state.data&&this.state.data.winners&&this.state.data.winners.filter((function(t,a){return a>=e.state.data.winners.length/2})).map((function(e){return r.a.createElement("div",null,r.a.createElement("h3",{style:{fontSize:22}},e.category),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.video&&e.video.length>0?r.a.createElement("iframe",{style:{maxWidth:"50%",margin:8},src:e.video,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;",allowFullScreen:!0}):r.a.createElement("img",{src:e.image,style:{maxWidth:"50%",maxHeight:"300px",margin:8}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"column"}},r.a.createElement("div",null,r.a.createElement("h4",{style:{fontSize:17}},e.title),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.link},"Devpost Project")))))}))))))))),r.a.createElement("div",{class:"wrapper style2"},r.a.createElement("div",{class:"inner"},r.a.createElement("section",{class:"container box feature2"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-6 col-12-medium"},r.a.createElement("section",null,r.a.createElement("header",{class:"major"},r.a.createElement("a",{href:"https://instagram.com/wilsoncompsci"},r.a.createElement("img",{src:g.a,height:t})),r.a.createElement("br",null),r.a.createElement("h2",null,"Follow Us on Social Media"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://instagram.com/wilsoncompsci"},"@wilsoncompsci")," ","on Instagram")),r.a.createElement("p",null,"Help us spread the word about notices and upcomming events by following us on social media."),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://www.instagram.com/wilsoncompsci",class:"button medium icon solid fa-arrow-circle-right"},"Follow")))),r.a.createElement("div",{class:"col-6 col-12-medium"},r.a.createElement("section",null,r.a.createElement("header",{class:"major"},r.a.createElement("a",{href:"https://wilsonhs.org/apps/pages/?uREC_ID=127895&type=d"},r.a.createElement("img",{src:v.a,height:t})),r.a.createElement("br",null),r.a.createElement("h2",null,"Wilson Computer Science"),r.a.createElement("p",null,"Learn more about the computer science programs at Wilson.")),r.a.createElement("p",null,"Wilson has a very extensive SciMaTech academy that helps support the Wilson Hackathon."),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://wilsonhs.org/apps/pages/?uREC_ID=127895&type=d",class:"button medium icon solid fa-arrow-circle-right"},"Learn More"))))))))),r.a.createElement("script",{src:"assets/js/jquery.min.js"}),r.a.createElement("script",{src:"assets/js/jquery.dropotron.min.js"}),r.a.createElement("script",{src:"assets/js/browser.min.js"}),r.a.createElement("script",{src:"assets/js/breakpoints.min.js"}),r.a.createElement("script",{src:"assets/js/util.js"}),r.a.createElement("script",{src:"assets/js/main.js"})))}}]),t}(n.Component)),b=function(e){return r.a.createElement("h1",null,"Welcome to the Wilson Hacks Competition Team")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(23),x=a(1);l.a.render(r.a.createElement(j.a,null,r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/"},r.a.createElement(y,null)),r.a.createElement(x.a,{path:"/competition"},r.a.createElement(b,null)),r.a.createElement(x.a,{path:"/cshs",render:function(){window.location.href="/site/cshs.html"}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8376e749.chunk.js.map