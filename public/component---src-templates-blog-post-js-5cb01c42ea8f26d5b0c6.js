(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),o=a(153),l={transition:"0.3s",width:"100%",height:"90%",marginTop:"-50px",padding:"10px"},s={padding:"16px 16px"},d=function(e){return r.a.createElement("div",{style:l},r.a.createElement("div",{style:s},e.children))},c=a(164),u=a.n(c),p=a(288),f=a.n(p);var g=function(e){return r.a.createElement(u.a,{title:e.title,meta:[{name:"title",content:e.title},{name:"description",content:e.description},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:e.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:e.description},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:""},{property:"og:site_name",content:"ZoeLiao"},{rel:"shortcut icon",type:"image/png",href:""+f.a}]},r.a.createElement("html",{lang:"en"}))};a(289);a.d(t,"query",function(){return h});t.default=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.siteURL,n=t.frontmatter.title,l=t.frontmatter.description,s=t.frontmatter.date,c=t.frontmatter.image,u=a;return c&&(u+=c.childImageSharp.resize.src),r.a.createElement(i.a,null,r.a.createElement(g,{title:n,description:l,thumbnail:u,url:a,pathname:e.location.pathname}),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement("div",{style:{marginBottom:"3rem"}},r.a.createElement("h1",null,n),r.a.createElement("h4",{style:{color:"grey"}},s)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))),r.a.createElement("br",null),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(o.a,{style:{textDecoration:"none",color:"grey"},to:"/"},"→ 返回首頁")))};var h="1490678994"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(156);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"ZoeLiao's Website",languages:{defaultLangKey:"zh",langs:["en","zh"]}}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},160:function(e,t,a){e.exports=a.p+"static/headerImage-4a08a60db4044e79f6bd51c9ebf9486d.jpg"},161:function(e,t,a){"use strict";a(157),a(34),a(36);var n=a(158),r=a(0),i=a.n(r),o=a(164),l=a.n(o),s=a(153),d=a(7),c=a.n(d),u=a(4),p=a.n(u),f=(a(33),a(35)),g=a.n(f),h={en:"English",zh:"繁中"},m={display:"block",position:"absolute",backgroundColor:"white",minWidth:"80px",boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)",zIndex:"1",textAlign:"center",marginTop:"10px"},y={textDecoration:"none",display:"block",height:"35px",lineHeight:"35px",color:"grey"},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={displayMenu:!1},a.showDropdownMenu=a.showDropdownMenu.bind(g()(a)),a.hideDropdownMenu=a.hideDropdownMenu.bind(g()(a)),a}c()(t,e);var a=t.prototype;return a.showDropdownMenu=function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},function(){document.addEventListener("click",t.hideDropdownMenu)})},a.hideDropdownMenu=function(){var e=this;this.setState({displayMenu:!1},function(){document.removeEventListener("click",e.hideDropdownMenu)})},a.render=function(){var e=this.props.links.map(function(e){return e.selected?null:i.a.createElement(s.a,{style:y,to:e.link,key:e.langKey},h[e.langKey])}),t=this.props.links.filter(function(e){return e.selected})[0];return i.a.createElement("div",null,i.a.createElement("div",{onClick:this.showDropdownMenu,style:{cursor:"pointer"}},h[t.langKey]),this.state.displayMenu?i.a.createElement("div",{style:m},e):null)},t}(r.Component),v=function(e){return i.a.createElement(b,{title:"Language",links:e.langs})};v.propTypes={langs:p.a.array};var w=v,E={padding:20,backgroundColor:"white",position:"fixed",top:0,left:0,right:0,height:"20px",alignItems:"center",zIndex:2e3,boxShadow:"0 0 1px 0 grey"},x={padding:20,backgroundColor:"transparent",position:"fixed",top:0,left:0,right:0,height:"20px",alignItems:"center",zIndex:2e3,boxShadow:"0 0 0px 0"},S={marginTop:"-10px",marginRight:"auto",marginLeft:"auto",maxWidth:860},L={display:"inline-block",float:"right",marginTop:"10px"},k=[{url:"posts/about/",text:"About"},{url:"",text:"Note"}],I=[{url:"posts/about/",text:"關於"},{url:"",text:"筆記"}],R=function(e){function t(t){var a;return(a=e.call(this,t)||this).onScroll=function(){console.log(window.scrollY),window.scrollY>100?a.setState({onTop:!1}):a.setState({onTop:!0})},a.state={onTop:!0},a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.onScroll)},a.render=function(){var e=this.state.onTop,t="en"==this.props.CurLang?k:I;return i.a.createElement("div",{style:e?x:E},i.a.createElement("nav",{style:S},i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement(s.a,{style:{fontSize:"36px",textDecoration:"none",fontFamily:"Adele",color:e?"white":"black"},to:""},"ZoeLiao")),i.a.createElement("div",{style:L},t.map(function(t){return i.a.createElement(s.a,{style:{marginRight:"15px",textDecoration:"none",color:e?"white":"black"},to:t.url},t.text)}),i.a.createElement("a",{style:{marginRight:"15px",textDecoration:"none",color:e?"white":"black"},href:"https://github.com/ZoeLiao",target:"_blank"},"Github"),i.a.createElement("div",{style:{marginRight:"15px",color:e?"white":"black",display:"inline-block"}},i.a.createElement(w,{langs:this.props.langs})))))},t}(r.Component),z=a(160),M={padding:20,position:"relative",top:"-10px",right:0,height:"400px",width:"100%",marginLeft:"-30px",alignItems:"center",border:"1px",backgroundImage:"url("+a.n(z).a+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",textAlign:"center",verticalAlign:"middle"},T={color:"white",marginTop:"160px",marginLeft:"auto",fontSize:"32px",fontFamily:"Adele"},O=function(){return i.a.createElement("div",{style:M},i.a.createElement("h1",{style:T},"Programming, Studying and Traveling"))},C={backgroundColor:"black",position:"fixed",bottom:"-10px",left:"-20px",right:0,height:"20px",alignItems:"center",padding:"20px",width:"100%"},j={margin:"-20px auto",maxWidth:860,color:"white"},D=function(){return i.a.createElement("footer",{style:C},i.a.createElement("div",{style:j},i.a.createElement("p",null,"© 2019. All rights reserved.")))},q=(a(146),a(179)),W=a(165),N={height:"100%",backgroundSize:"cover",fontFamily:"sans-serif",padding:"30px"},V={margin:"10px auto",maxWidth:800};t.a=function(e){return i.a.createElement(s.b,{query:"3470768540",render:function(t){var a=(void 0).props.location.pathname,n=t.site.siteMetadata.languages,r=n.langs,o=n.defaultLangKey,s=Object(W.getCurrentLangKey)(r,o,a),d=("/"+s).replace("/"+o+"/","/"),c=Object(W.getLangs)(r,s,Object(W.getUrlForLang)(d,a)).map(function(e){return Object.assign({},e,{link:e.link.replace("/"+o+"/","/")})});return i.a.createElement(q.a,{locale:s},i.a.createElement("div",null,i.a.createElement(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"ZoeLiao's blog"},{name:"keywords",content:"code"}]},i.a.createElement("html",{lang:s})),i.a.createElement(R,{langs:c,CurLang:s}),i.a.createElement(O,null),i.a.createElement("div",{style:N},i.a.createElement("div",{style:V},e.children)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(D,null)))},data:n})}},168:function(e,t){},169:function(e,t){},170:function(e,t){},288:function(e,t,a){e.exports=a.p+"static/icon-c3862e4fa3b90142d9e206365c7ee24d.png"},289:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(35)),l=n(a(75)),s=n(a(76)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t},p=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,y=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+s+a+r+t+o+i+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=d.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,s.default)({sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:c,ref:t,loading:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,p=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,E=e.itemProp,x=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:S?1:0,transition:L?"opacity "+y+"ms":"none"},l),I="boolean"==typeof m?"lightgray":m,R={transitionDelay:y+"ms"},z=(0,s.default)({opacity:this.state.imgLoaded?0:1},L&&R,l,p),M={title:t,alt:this.state.isVisible?"":a,style:z,className:f};if(g){var T=g;return d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),I&&d.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&R)}),T.base64&&d.default.createElement(w,(0,s.default)({src:T.base64},M)),T.tracedSVG&&d.default.createElement(w,(0,s.default)({src:T.tracedSVG},M)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(w,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,s.default)({alt:a,title:t,loading:x},T))}}))}if(h){var O=h,C=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},i);return"inherit"===i.display&&delete C.display,d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},I&&d.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:I,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},L&&R)}),O.base64&&d.default.createElement(w,(0,s.default)({src:O.base64},M)),O.tracedSVG&&d.default.createElement(w,(0,s.default)({src:O.tracedSVG},M)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(w,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,s.default)({alt:a,title:t,loading:x},O))}}))}return null},t}(d.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:x,sizes:S,fixed:x,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var L=E;t.default=L}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5cb01c42ea8f26d5b0c6.js.map