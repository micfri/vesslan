(this.webpackJsonpvesslan=this.webpackJsonpvesslan||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e){e.exports=JSON.parse('{"app-name":"Vesslan 22","_comment":"Define respective react components in page-component.js","pages":[{"id":"husen","title":"Husen","key":"1"},{"id":"intresseanmalan","title":"Intresseanm\xe4lan","key":"2"},{"id":"om","title":"Om Futura Fastigheter","key":"3"}]}')},,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/nolahaga.90242624.jpg"},,,,,function(e,t,a){e.exports=a.p+"static/media/vardagsrum-sol.653cbc85.png"},function(e,t,a){e.exports=a.p+"static/media/vesslan-karta.67e6b8f4.png"},function(e,t,a){e.exports=a.p+"static/media/vesslan-planskiss.4d2cbc07.png"},function(e,t,a){e.exports=a.p+"static/media/vesslan-fasad.71ccfbc7.png"},function(e,t,a){e.exports=a.p+"static/media/Futura-Logga_Pos.a3c8f4f3.png"},function(e,t,a){e.exports=a.p+"static/media/fasad-dag.8a6bbd68.png"},,function(e,t,a){e.exports=a(79)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/marbodal.e798fa8b.jpg"},function(e,t,a){e.exports=a.p+"static/media/planritning.3797e3e6.jpg"},function(e,t,a){e.exports=a.p+"static/media/koksbord-1.5c5e9a2f.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/instagram_black.0e84d592.png"},function(e,t,a){e.exports=a.p+"static/media/phone_black.10e16ad6.png"},function(e,t,a){e.exports=a.p+"static/media/email_black.14d38b7a.png"},,,,function(e,t,a){e.exports=a.p+"static/media/ItalianBreakfast-Regular.e49d5d42.ttf"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),c=(a(45),a(46),a(12),a(24),a(47),a(3)),s=a(4),m=a(6),o=a(5),u=(a(15),a(30),a(16)),d=a(10),p=a(1),f=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"_onReady",value:function(e){e.target.pauseVideo()}},{key:"render",value:function(){return r.a.createElement("div",{className:"About page-component"},r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"page-title-container"},r.a.createElement("h1",null,"Om oss")),r.a.createElement("div",{className:"about-text-container box-750"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}}]),a}(n.Component),E=a(20),v=a.n(E),h=a(31),g=a(17),N=(a(27),a(32)),b=a.n(N),y=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",phone:"",email:""},n}return Object(s.a)(a,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("user_ew9BTniCDxVRr39BaiAZC"),b.a.sendForm("service_fi9iaeu","template_daxt6um",t.target,"user_ew9BTniCDxVRr39BaiAZC").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"Intresseanmalan page-component"},r.a.createElement("div",{className:"page-title-container"},r.a.createElement("h1",null,"Intressanm\xe4lan")),r.a.createElement("div",null,r.a.createElement("p",null," TEXT OM INTRESSEANMALAN")),r.a.createElement("form",{className:"form-container",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("label",{className:"form-entry-container"},r.a.createElement("div",{className:"form-entry-label"},"F\xf6rnamn"),r.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleChange.bind(this)})),r.a.createElement("label",{className:"form-entry-container"},r.a.createElement("div",{className:"form-entry-label"},"Efternamn"),r.a.createElement("input",{type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleChange.bind(this)})),r.a.createElement("label",{className:"form-entry-container"},r.a.createElement("div",{className:"form-entry-label"},"Email"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange.bind(this)})),r.a.createElement("label",{className:"form-entry-container"},r.a.createElement("div",{className:"form-entry-label"},"Telefon"),r.a.createElement("input",{type:"phone",name:"phone",value:this.state.phone,onChange:this.handleChange.bind(this)})),r.a.createElement("label",{className:"form-entry-container"},r.a.createElement("div",{className:"form-entry-label"},"Meddelande"),r.a.createElement("textarea",{type:"long-text",name:"message",value:this.state.message,onChange:this.handleChange.bind(this)})),r.a.createElement("input",{className:"form-button",type:"submit",value:"Skicka in"})))}}]),a}(n.Component),x=(a(28),a(68),a(69),a(33)),k=a.n(x),j=(a(70),a(34)),O=a.n(j),C=a(35),w=a.n(C),S=a(36),D=a.n(S),A=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",phone:"",email:""},n}return Object(s.a)(a,[{key:"handlechange",value:function(e){e.preventDefault(),console.log("handle Change");var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handlesubmit",value:function(e){e.preventDefault(),console.log("submitted")}},{key:"render",value:function(){return r.a.createElement("div",{className:"RestaurantMenu page-component"},r.a.createElement("div",{className:"page-title-container"},r.a.createElement("h1",null,"Vesslan 22")),r.a.createElement("div",{className:"description-text-box"},r.a.createElement("p",null,"I ett unikt l\xe4ge i centrala Markaryd, och i direkt n\xe4rhet till naturen, byggs nu 4 nya bost\xe4der i h\xf6g standard med b\xe4sta komfort."),r.a.createElement("p",null,"De fyra l\xe4genheterna \xe4r alla p\xe5 3 rum och k\xf6k, har egen parkeringsplats direkt utanf\xf6r d\xf6rren och en insynsskyddad terass. Inflyttningsdatum ber\xe4knas till Mars 2022.")),r.a.createElement("div",{className:"row-container"},r.a.createElement("div",{className:"information-container"},r.a.createElement("h2",null,"Utsidan"),r.a.createElement("div",{className:"information-text-container"},r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Area:"),r.a.createElement("p",null,"75 kvm")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Typ:")," ",r.a.createElement("p",null,"3 rum och k\xf6k")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Uppv\xe4rmning:"),r.a.createElement("p",null,"Golvv\xe4rme och v\xe4rmepump")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Anslutning:"),r.a.createElement("p",null,"\xd6ppen fiber"))),r.a.createElement("div",{className:"row-image-container"},r.a.createElement("img",{src:D.a,alt:"Logo"}))),r.a.createElement("div",{className:"information-container"},r.a.createElement("h2",null,"L\xe4ge"),r.a.createElement("div",{className:"information-text-container"},r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Adress:"),r.a.createElement("p",null,"Snapphanestigen 2")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Sj\xf6- och gr\xf6nomr\xe5de:"),r.a.createElement("p",null,"100 m")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Livsmedel:"),r.a.createElement("p",null,"200 m")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Centralstation:"),r.a.createElement("p",null,"400 m"))),r.a.createElement("div",{className:"row-image-container"},r.a.createElement("img",{src:O.a,alt:"Logo"})))),r.a.createElement("div",{className:"row-container"},r.a.createElement("div",{className:"information-container"},r.a.createElement("h2",null,"Insidan"),r.a.createElement("div",{className:"information-text-container"},r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Adress:"),r.a.createElement("p",null,"Snapphanestigen 2")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Sj\xf6- och gr\xf6nomr\xe5de:"),r.a.createElement("p",null,"100 m")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Livsmedel:"),r.a.createElement("p",null,"200 m")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Centralstation:"),r.a.createElement("p",null,"400 m"))),r.a.createElement("div",{className:"row-image-container"},r.a.createElement("img",{src:k.a,alt:"Logo"}))),r.a.createElement("div",{className:"information-container"},r.a.createElement("h2",null,"Planl\xf6sning"),r.a.createElement("div",{className:"information-text-container"},r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Adress:"),r.a.createElement("p",null,"Snapphanestigen 2")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Sj\xf6- och gr\xf6nomr\xe5de:"),r.a.createElement("p",null,"100 m")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Livsmedel:"),r.a.createElement("p",null,"200 m")),r.a.createElement("div",{className:"information-text-entry"},r.a.createElement("p",{className:"information-text-entry-title"},"Centralstation:"),r.a.createElement("p",null,"400 m"))),r.a.createElement("div",{className:"row-image-container"},r.a.createElement("img",{src:w.a,alt:"Logo"})))))}}]),a}(n.Component),L=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).components={"":A,husen:A,intresseanmalan:y,om:f},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.components[this.props.id];return r.a.createElement(e,{id:this.props.id})}}]),a}(n.Component),_=(a(71),a(37)),F=a.n(_),I=a(38),M=a.n(I),B=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("img",{className:"header-picture",src:M.a,alt:"sodergardslangan_outside"}),r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"header-logo",src:F.a,alt:"Logo"})))}}]),a}(n.Component),T=(a(72),a(73),a(74),function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement(R,null))}}]),a}(n.Component)),R=function(){return r.a.createElement("div",{className:"Socials"},r.a.createElement("div",{className:"social-container"},r.a.createElement("div",{className:"footer-entry"},r.a.createElement("a",{href:"https://www.instagram.com/pastaparmesan_foodtruck/"},"@futurafastigheter")),r.a.createElement("div",{className:"footer-entry"},r.a.createElement("a",{href:"tel:+46730885230"},"+46 (0) 760 470 444")),r.a.createElement("div",{className:"footer-entry"},r.a.createElement("a",{href:"mailto:info@pastaparmesan.se"},"info@futurafastigheter.se"))))},q=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"Main",id:"page-wrap"},r.a.createElement("div",{className:"content-middle"},r.a.createElement("div",{className:"top-row"},r.a.createElement(B,null)),r.a.createElement("div",{className:"middle-row"},r.a.createElement("div",{className:"rowContainer nav-row"},r.a.createElement(d.b,{to:"/husen",className:"nav-item",activeClassName:"selected"},"Husen"),r.a.createElement(d.b,{to:"/intresseanmalan",className:"nav-item",activeClassName:"selected"},"Intressanm\xe4lan"),r.a.createElement(d.b,{to:"/om",className:"nav-item",activeClassName:"selected"},"Om Futura Fastigheter")),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(L,{id:""})),u.pages.map((function(e){return r.a.createElement(p.a,{key:e.id,path:"/"+e.id},r.a.createElement(L,{id:e.id}))})))),r.a.createElement("div",{className:"bottom-row"},r.a.createElement(T,null))))}}]),a}(n.Component);var V=function(){return r.a.createElement("div",{className:"FrontPage"},r.a.createElement("div",{className:"rowContainer nav-row"},r.a.createElement(d.b,{to:"/husen",className:"nav-item",activeClassName:"selected"},"Husen"),r.a.createElement(d.b,{to:"/intresseanmalan",className:"nav-item",activeClassName:"selected"},"Intressanm\xe4lan"),r.a.createElement(d.b,{to:"/om",className:"nav-item",activeClassName:"selected"},"Om Futura Fastigheter")))};var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(V,null," ")),r.a.createElement(p.a,{path:"/"},r.a.createElement(q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);i.a.render(r.a.createElement(d.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[40,1,2]]]);
//# sourceMappingURL=main.57a4eee5.chunk.js.map