(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"listQuery",function(){return u});var a=n(0),r=n.n(a),o=n(162),i=n(191),l=n(153),c={width:"100px",height:"30px",fontSize:"11px",textTransform:"uppercase",letterSpacing:"2.5px",fontWeight:500,color:"#000",backgroundColor:"#ccffff",fontColor:"black",border:"none",borderRadius:"10px",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.1)",transition:"all 0.3s ease 0s",cursor:"pointer",outline:"none",float:"right"},s={border:1,borderTop:"1px solid #ccc"};t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement("div",{style:{background:"#f6f6f6"}},r.a.createElement(o.a,{location:e.location},t.edges.map(function(e,t){var n=e.node;return r.a.createElement(i.a,null,r.a.createElement(l.a,{style:{color:"inherit",textDecoration:"none"},to:n.fields.slug},r.a.createElement("div",null,r.a.createElement("h1",{style:{display:"inline"}},n.frontmatter.title),r.a.createElement("button",{style:c},n.frontmatter.tags)),r.a.createElement("hr",{style:s}),r.a.createElement("div",null,r.a.createElement("span",{style:{color:"grey"}},n.frontmatter.date),r.a.createElement("p",null,n.excerpt))))})))};var u="2760893104"},153:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},159:function(e){e.exports={data:{site:{siteMetadata:{title:"ZoeLiao's Website",languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},160:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,n){e.exports=n.p+"static/headerImage-4a08a60db4044e79f6bd51c9ebf9486d.jpg"},162:function(e,t,n){"use strict";n(157),n(34),n(36);var a=n(159),r=n(0),o=n.n(r),i=n(165),l=n.n(i),c=n(153),s=n(7),u=n.n(s),d=n(4),p=n.n(d),g=(n(33),n(35)),m=n.n(g),h={en:"English",zh:"繁中"},f={display:"block",position:"absolute",backgroundColor:"white",minWidth:"80px",boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)",zIndex:"1",textAlign:"center",marginTop:"10px"},x={textDecoration:"none",display:"block",height:"35px",lineHeight:"35px",color:"grey"},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={displayMenu:!1},n.showDropdownMenu=n.showDropdownMenu.bind(m()(n)),n.hideDropdownMenu=n.hideDropdownMenu.bind(m()(n)),n}u()(t,e);var n=t.prototype;return n.showDropdownMenu=function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})},n.hideDropdownMenu=function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})},n.render=function(){var e=this.props.links.map(function(e){return e.selected?null:o.a.createElement(c.a,{style:x,to:e.link,key:e.langKey},h[e.langKey])}),t=this.props.links.filter(function(e){return e.selected})[0];return o.a.createElement("div",null,o.a.createElement("div",{onClick:this.showDropdownMenu,style:{cursor:"pointer"}},h[t.langKey]),this.state.displayMenu?o.a.createElement("div",{style:f},e):null)},t}(r.Component),y=function(e){return o.a.createElement(b,{title:"Language",links:e.langs})};y.propTypes={langs:p.a.array};var E=y,v=n(158),w=n.n(v),k={padding:20,backgroundColor:"white",position:"fixed",top:0,left:0,right:0,height:"20px",alignItems:"center",zIndex:2e3,boxShadow:"0 0 1px 0 grey"},S={padding:20,backgroundColor:"transparent",position:"fixed",top:0,left:0,right:0,height:"20px",alignItems:"center",zIndex:2e3,boxShadow:"0 0 0px 0"},L={marginTop:"-10px",marginRight:"auto",marginLeft:"auto",maxWidth:860},M={display:"inline-block",float:"right",marginTop:"10px"},D=[{url:"posts/about/",text:"About"},{url:"",text:"Note"}],C=[{url:"posts/about/",text:"關於"},{url:"",text:"筆記"}],T=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(){console.log(w.a.scrollY),w.a.scrollY>100?n.setState({onTop:!1}):n.setState({onTop:!0})},n.state={onTop:!0},n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){w.a.addEventListener("scroll",this.onScroll)},n.render=function(){var e=this.state.onTop,t="en"==this.props.CurLang?D:C;return o.a.createElement("div",{style:e?S:k},o.a.createElement("nav",{style:L},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement(c.a,{style:{fontSize:"36px",textDecoration:"none",fontFamily:"Adele",color:e?"white":"black"},to:""},"ZoeLiao")),o.a.createElement("div",{style:M},t.map(function(t){return o.a.createElement(c.a,{style:{marginRight:"15px",textDecoration:"none",color:e?"white":"black"},to:t.url},t.text)}),o.a.createElement("a",{style:{marginRight:"15px",textDecoration:"none",color:e?"white":"black"},href:"https://github.com/ZoeLiao",target:"_blank"},"Github"),o.a.createElement("div",{style:{marginRight:"15px",color:e?"white":"black",display:"inline-block"}},o.a.createElement(E,{langs:this.props.langs})))))},t}(r.Component),R=n(161),z={padding:20,position:"relative",top:"-10px",right:0,height:"400px",width:"100%",marginLeft:"-30px",alignItems:"center",border:"1px",backgroundImage:"url("+n.n(R).a+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",textAlign:"center",verticalAlign:"middle"},I={color:"white",marginTop:"160px",marginLeft:"auto",fontSize:"32px",fontFamily:"Adele"},j=function(){return o.a.createElement("div",{style:z},o.a.createElement("h1",{style:I},"Programming, Studying and Traveling"))},q={backgroundColor:"black",position:"fixed",bottom:"-10px",left:"-20px",right:0,height:"20px",alignItems:"center",padding:"20px",width:"100%"},A={margin:"-20px auto",maxWidth:860,color:"white"},K=function(){return o.a.createElement("footer",{style:q},o.a.createElement("div",{style:A},o.a.createElement("p",null,"© 2019. All rights reserved.")))},W=(n(146),n(180)),F=n(166),O={height:"100%",backgroundSize:"cover",fontFamily:"sans-serif",padding:"30px"},Z={margin:"10px auto",maxWidth:800};t.a=function(e){return o.a.createElement(c.b,{query:"3470768540",render:function(t){var n=e.location.pathname,a=t.site.siteMetadata.languages,r=a.langs,i=a.defaultLangKey,c=Object(F.getCurrentLangKey)(r,i,n),s=("/"+c).replace("/"+i+"/","/"),u=Object(F.getLangs)(r,c,Object(F.getUrlForLang)(s,n)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+i+"/","/")})});return o.a.createElement(W.a,{locale:c},o.a.createElement("div",null,o.a.createElement(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"ZoeLiao's blog"},{name:"keywords",content:"code"}]},o.a.createElement("html",{lang:c})),o.a.createElement(T,{langs:u,CurLang:c}),o.a.createElement(j,null),o.a.createElement("div",{style:O},o.a.createElement("div",{style:Z},e.children)),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(K,null)))},data:a})}},169:function(e,t){},170:function(e,t){},171:function(e,t){},191:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o={backgroundColor:"white",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",width:"100%",height:"200px",borderRadius:"5px",marginTop:"30px",padding:"10px"},i={padding:"16px 16px"};t.a=function(e){return r.a.createElement("div",{style:o},r.a.createElement("div",{style:i},e.children))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a39b3bb0a546ec8916c6.js.map