(this.webpackJsonpanyhotpass=this.webpackJsonpanyhotpass||[]).push([[0],{114:function(e,t,a){e.exports=a(213)},124:function(e,t){},126:function(e,t){},136:function(e,t){},138:function(e,t){},166:function(e,t){},167:function(e,t){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),s=a(105),c=a(106),i=a(20),d=a(113),u=a(111),h=a(18),m=a(112),f=a(35),g=a(110),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={master:"",domain:"",password:"",hidden:!0},n.masterChanged=n.masterChanged.bind(Object(i.a)(n)),n.domainChanged=n.domainChanged.bind(Object(i.a)(n)),n.handleGenerate=n.handleGenerate.bind(Object(i.a)(n)),n.handleToggle=n.handleToggle.bind(Object(i.a)(n)),n.handleFocus=function(e){return e.target.select()},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{show:"true",backdrop:"false"},r.a.createElement(f.a.Header,null,r.a.createElement(f.a.Title,null,"AHP")),r.a.createElement(f.a.Body,null,r.a.createElement(h.a,null,r.a.createElement(h.a.Group,{controlId:"formPassword"},r.a.createElement(h.a.Control,{type:"password",placeholder:"Master Password",required:!0,onChange:this.masterChanged})),r.a.createElement(h.a.Group,{controlId:"formDomain"},r.a.createElement(h.a.Control,{type:"text",placeholder:"example.com",required:!0,onChange:this.domainChanged})),r.a.createElement(m.a,{variant:"secondary",type:"submit",block:!0,onClick:this.handleGenerate,class:"mr-1"},"Generate"),r.a.createElement(h.a.Group,{controlId:"formDomain",className:"mt-2"},r.a.createElement(h.a.Control,{type:"text",readOnly:!0,onFocus:this.handleFocus,value:this.state.password}))))))}},{key:"masterChanged",value:function(e){this.setState({master:e.target.value})}},{key:"domainChanged",value:function(e){this.setState({domain:e.target.value})}},{key:"handleGenerate",value:function(e){if(e.preventDefault(),0!==this.state.master.length&&0!==this.state.domain.length){var t=Object(g.a)(this.state.master,this.state.domain,18);this.setState((function(e){return{password:t}}))}}},{key:"handleToggle",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){return{hidden:!t.state.hidden}}))}}]),a}(r.a.Component),v=a(109),b=function(){return r.a.createElement(v.a,null,r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.9a39b294.chunk.js.map