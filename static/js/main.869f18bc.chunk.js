(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),i=n.n(a),c=(n(13),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=(n(14),function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"cardContainer tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?"),className:"img"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))}),f=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(d,{key:n,id:t[n].id,characterName:t[n].name,email:t[n].email,image:t[n].image})})))},m=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},g=function(e){return console.log(e),o.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops."):this.props.children}}]),t}(r.Component),b=(n(15),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(m,{searchChange:this.onSearchChange}),o.a.createElement(g,null,o.a.createElement(v,null,o.a.createElement(f,{robots:r}))))}}]),t}(r.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(16);i.a.render(o.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.869f18bc.chunk.js.map