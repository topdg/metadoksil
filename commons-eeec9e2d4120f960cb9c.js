"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[351],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{G:function(){return K},L:function(){return Z},M:function(){return P},P:function(){return q},S:function(){return ie},_:function(){return u},a:function(){return c},b:function(){return V},c:function(){return H},d:function(){return k},e:function(){return S},f:function(){return x},g:function(){return I},h:function(){return L},i:function(){return E},j:function(){return C},w:function(){return W}});var r=a(5785),n=a(7294),i=a(72),s=a.n(i),l=a(5697),o=a.n(l);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var d=[.25,.5,1,2],m=[750,1080,1366,1920],h=[320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096],f=function(e){return console.warn(e)},g=function(e,t){return e-t},p=function(e){return e.map((function(e){return e.src+" "+e.width+"w"})).join(",\n")};function v(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a}}function w(e){var t=e.layout,a=void 0===t?"constrained":t,r=e.width,n=e.height,i=e.sourceMetadata,l=e.breakpoints,o=e.aspectRatio,u=e.formats,d=void 0===u?["auto","webp"]:u;return d=d.map((function(e){return e.toLowerCase()})),a=s()(a),r&&n?c({},e,{formats:d,layout:a,aspectRatio:r/n}):(i.width&&i.height&&!o&&(o=i.width/i.height),"fullWidth"===a?(r=r||i.width||l[l.length-1],n=n||Math.round(r/(o||1.3333333333333333))):(r||(r=n&&o?n*o:i.width?i.width:n?Math.round(n/1.3333333333333333):800),o&&!n?n=Math.round(r/o):o||(o=r/n)),c({},e,{width:r,height:n,aspectRatio:o,layout:a,formats:d}))}function C(e,t){var a;void 0===t&&(t=20);var r=e=w(e),n=r.generateImageSource,i=r.filename,s=r.aspectRatio;return null==(a=n(i,t,Math.round(t/s),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src}function E(e){var t,a=e=w(e),r=a.pluginName,n=a.sourceMetadata,i=a.generateImageSource,s=a.layout,l=a.fit,o=a.options,u=a.width,h=a.height,g=a.filename,C=a.reporter,E=void 0===C?{warn:f}:C,_=a.backgroundColor,M=a.placeholderURL;if(r||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof i)throw new Error("generateImageSource must be a function");n&&(n.width||n.height)?n.format||(n.format=v(g)):n={width:u,height:h,format:(null==(t=n)?void 0:t.format)||v(g)||"auto"};var L=new Set(e.formats);(0===L.size||L.has("auto")||L.has(""))&&(L.delete("auto"),L.delete(""),L.add(n.format)),L.has("jpg")&&L.has("png")&&(E.warn("["+r+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),L.delete("jpg"===n.format?"png":"jpg"));var H=function(e){var t=e.width,a=e.height,r=e.filename,n=e.layout,i=void 0===n?"constrained":n,s=e.sourceMetadata,l=e.reporter,o=void 0===l?{warn:f}:l,u=e.breakpoints,h=void 0===u?m:u,g=Object.entries({width:t,height:a}).filter((function(e){e[0];var t=e[1];return"number"==typeof t&&t<1}));if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map((function(e){return e.join(": ")})).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,r=e.width,n=e.height,i=e.fit,s=void 0===i?"cover":i,l=e.outputPixelDensities,o=void 0===l?d:l,c=e.reporter,u=void 0===c?{warn:f}:c,m=a.width/a.height,h=b(o);if(r&&n){var g=N(a,{width:r,height:n,fit:s});r=g.width,n=g.height,m=g.aspectRatio}r?n||(n=Math.round(r/m)):r=n?Math.round(n*m):800;var p=r;if(a.width<r||a.height<n){var v=a.width<r?"width":"height";u.warn("\nThe requested "+v+' "'+("width"===v?r:n)+'px" for the image '+t+" was larger than the actual image "+v+" of "+a[v]+"px. If possible, replace the current image with a larger one."),"width"===v?(r=a.width,n=Math.round(r/m)):r=(n=a.height)*m}return{sizes:h.filter((function(e){return e>=1})).map((function(e){return Math.round(e*r)})).filter((function(e){return e<=a.width})),aspectRatio:m,presentationWidth:p,presentationHeight:Math.round(p/m),unscaledWidth:r}}(e):"constrained"===i?y(e):"fullWidth"===i?y(c({breakpoints:h},e)):(o.warn("No valid layout was provided for the image at "+r+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[s.width],presentationWidth:s.width,presentationHeight:s.height,aspectRatio:s.width/s.height,unscaledWidth:s.width})}(c({},e,{sourceMetadata:n})),k={sources:[]},S=e.sizes;S||(S=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return}}(H.presentationWidth,s)),L.forEach((function(e){var t=H.sizes.map((function(t){var a=i(g,t,Math.round(t/H.aspectRatio),e,l,o);if(null!=a&&a.width&&a.height&&a.src&&a.format)return a;E.warn("["+r+"] The resolver for image "+g+" returned an invalid value.")})).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var a=t.find((function(e){return e.width===H.unscaledWidth}))||t[0];a&&(k.fallback={src:a.src,srcSet:p(t),sizes:S})}else{var n;null==(n=k.sources)||n.push({srcSet:p(t),sizes:S,type:"image/"+e})}}));var x={images:k,layout:s,backgroundColor:_};switch(M&&(x.placeholder={fallback:M}),s){case"fixed":x.width=H.presentationWidth,x.height=H.presentationHeight;break;case"fullWidth":x.width=1,x.height=1/H.aspectRatio;break;case"constrained":x.width=e.width||H.presentationWidth||1,x.height=(x.width||1)/H.aspectRatio}return x}var b=function(e){return Array.from(new Set([1].concat((0,r.Z)(e)))).sort(g)};function y(e){var t,a=e.sourceMetadata,r=e.width,n=e.height,i=e.fit,s=void 0===i?"cover":i,l=e.outputPixelDensities,o=void 0===l?d:l,c=e.breakpoints,u=e.layout,m=a.width/a.height,h=b(o);if(r&&n){var f=N(a,{width:r,height:n,fit:s});r=f.width,n=f.height,m=f.aspectRatio}r=r&&Math.min(r,a.width),n=n&&Math.min(n,a.height),r||n||(n=(r=Math.min(800,a.width))/m),r||(r=n*m);var p=r;return(a.width<r||a.height<n)&&(r=a.width,n=a.height),r=Math.round(r),(null==c?void 0:c.length)>0?(t=c.filter((function(e){return e<=a.width})),t.length<c.length&&!t.includes(a.width)&&t.push(a.width)):(t=h.map((function(e){return Math.round(e*r)})),t=t.filter((function(e){return e<=a.width}))),"constrained"!==u||t.includes(r)||t.push(r),{sizes:t=t.sort(g),aspectRatio:m,presentationWidth:p,presentationHeight:Math.round(p/m),unscaledWidth:r}}function N(e,t){var a=e.width/e.height,r=t.width,n=t.height;switch(t.fit){case"fill":r=t.width?t.width:e.width,n=t.height?t.height:e.height;break;case"inside":var i=t.width?t.width:Number.MAX_SAFE_INTEGER,s=t.height?t.height:Number.MAX_SAFE_INTEGER;r=Math.min(i,Math.round(s*a)),n=Math.min(s,Math.round(i/a));break;case"outside":var l=t.width?t.width:0,o=t.height?t.height:0;r=Math.max(l,Math.round(o*a)),n=Math.max(o,Math.round(l/a));break;default:t.width&&!t.height&&(r=t.width,n=Math.round(t.width/a)),t.height&&!t.width&&(r=Math.round(t.height*a),n=t.height)}return{width:r,height:n,aspectRatio:r/n}}var _=["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"],M=["images","placeholder"],L=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var H=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},k=function(e){var t,a,r;return null==(t=H(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src},S=function(e){var t,a,r;return null==(t=H(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.srcSet};function x(e){var t,a=e.baseUrl,r=e.urlBuilder,n=e.sourceWidth,i=e.sourceHeight,s=e.pluginName,l=void 0===s?"getImageData":s,o=e.formats,d=void 0===o?["auto"]:o,m=e.breakpoints,f=e.options,g=u(e,_);return null!=(t=m)&&t.length||"fullWidth"!==g.layout&&"FULL_WIDTH"!==g.layout||(m=h),E(c({},g,{pluginName:l,generateImageSource:function(e,t,a,n){return{width:t,height:a,format:n,src:r({baseUrl:e,width:t,height:a,options:f,format:n})}},filename:a,formats:d,breakpoints:m,sourceMetadata:{width:n,height:i,format:"auto"}}))}function V(e,t,a,r,n){return void 0===n&&(n={}),c({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:c({},n,{opacity:t?1:0})})}function I(e,t,a,r,n,i,s,l){var o={};i&&(o.backgroundColor=i,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=i,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s&&(o.objectFit=s),l&&(o.objectPosition=l);var u=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return u}function W(e,t){var a,n,i,s=e.images,l=e.placeholder,o=c({},u(e,M),{images:c({},s,{sources:[]}),placeholder:l&&c({},l,{sources:[]})});return t.forEach((function(t){var a,n=t.media,i=t.image;n&&(i.layout,e.layout,(a=o.images.sources).push.apply(a,(0,r.Z)(i.images.sources.map((function(e){return c({},e,{media:n})}))).concat([{media:n,srcSet:i.images.fallback.srcSet}])),o.placeholder&&o.placeholder.sources.push({media:n,srcSet:i.placeholder.fallback}))})),(a=o.images.sources).push.apply(a,(0,r.Z)(s.sources)),null!=l&&l.sources&&(null==(i=o.placeholder)||(n=i.sources).push.apply(n,(0,r.Z)(l.sources))),o}var R,T=["children"],j=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},Z=function(e){var t=e.children,a=u(e,T);return n.createElement(n.Fragment,null,n.createElement(j,c({},a)),t,null)},O=["src","srcSet","loading","alt","shouldLoad"],z=["fallback","sources","shouldLoad"],A=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,s=void 0===i?"":i,l=e.shouldLoad,o=u(e,O);return n.createElement("img",c({},o,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},F=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,s=void 0===i||i,l=u(e,z),o=l.sizes||(null==t?void 0:t.sizes),d=n.createElement(A,c({},l,t,{sizes:o,shouldLoad:s}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),d):d};A.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},F.displayName="Picture",F.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};var D=["fallback"],q=function(e){var t=e.fallback,a=u(e,D);return t?n.createElement(F,c({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",c({},a))};q.displayName="Placeholder",q.propTypes={fallback:l.string,sources:null==(R=F.propTypes)?void 0:R.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var P=function(e){return n.createElement(n.Fragment,null,n.createElement(F,c({},e)),n.createElement("noscript",null,n.createElement(F,c({},e,{shouldLoad:!0}))))};P.displayName="MainImage",P.propTypes=F.propTypes;var U,B,G=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},Q={image:o().object.isRequired,alt:G},J=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],X=["style","className"],$=new Set,Y=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,s=e.style,l=e.backgroundColor,o=e.className,d=e.class,m=e.onStartLoad,h=e.onLoad,f=e.onError,g=u(e,J),p=i.width,v=i.height,w=i.layout,C=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(p,v,w),E=C.style,b=C.className,y=u(C,X),N=(0,n.useRef)(),_=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(o=d);var M=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,p,v);return(0,n.useEffect)((function(){U||(U=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return B=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=N.current.querySelector("[data-gatsby-image-ssr]");return r&&L()?(r.complete?(null==m||m({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==h||h({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(_)):B&&$.has(_)?void 0:(U.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=r(c({isLoading:!0,isLoaded:$.has(_),image:i},g)),$.has(_)||(e=requestAnimationFrame((function(){N.current&&(t=n(N.current,_,$,s,m,h,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){$.has(_)&&B&&(N.current.innerHTML=B(c({isLoading:$.has(_),isLoaded:$.has(_),image:i},g)),null==m||m({wasCached:!0}),null==h||h({wasCached:!0}))}),[i]),(0,n.createElement)(r,c({},y,{style:c({},E,s,{backgroundColor:l}),className:b+(o?" "+o:""),ref:N,dangerouslySetInnerHTML:{__html:M},suppressHydrationWarning:!0}))},K=(0,n.memo)((function(e){return e.image?(0,n.createElement)(Y,e):null}));K.propTypes=Q,K.displayName="GatsbyImage";var ee,te=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],ae=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},re=new Set(["fixed","fullWidth","constrained"]),ne={src:o().string.isRequired,alt:G,width:ae,height:ae,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!re.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},ie=(ee=K,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=u(e,te);return r&&console.warn(r),a?n.createElement(ee,c({image:a},i)):(console.warn("Image not loaded",t),null)});ie.displayName="StaticImage",ie.propTypes=ne},7185:function(e,t,a){a.d(t,{A:function(){return W}});var r={};a.r(r),a.d(r,{GG:function(){return u},A8:function(){return d},I6:function(){return m},yT:function(){return h},vZ:function(){return f},IQ:function(){return g},M1:function(){return p},QM:function(){return v},C9:function(){return w},i7:function(){return C}});var n=a(7294),i=a(1257),s=a(530),l=function(e){var t=e.active,a=e.toggleMenu;return n.createElement(s.z,{className:(0,i.y)("Hamburger-module--hamburger--6294d",t&&"Hamburger-module--hamburger-active--fe5df"),handlerClick:a,attributes:{"aria-label":t?"открыть меню":"закрыть меню"}},n.createElement("span",{className:"Hamburger-module--hamburger__line--ce4ac"}))},o=a(1082),c=a(2164),u="Footer-module--footer__bottom--79b04",d="Footer-module--footer__bottom_content--4dbad",m="Footer-module--footer__bottom_link--f55aa",h="Footer-module--footer__col--2155d",f="Footer-module--footer__item--59cc8",g="Footer-module--footer__items--0aa8d",p="Footer-module--footer__link--baf74",v="Footer-module--footer__main--ed0de",w="Footer-module--footer__row--4ffc6",C="Footer-module--footer__title--97933",E=function(){var e,t,a=(0,o.useStaticQuery)("1243224169").wp,s=(null!==(e=null==a||null===(t=a.mainOptions)||void 0===t?void 0:t.acf__mainSiteSettings)&&void 0!==e?e:{}).siteOptions;return n.createElement("footer",{id:"footer",className:r.footer},n.createElement("div",{className:v},n.createElement(c.W,null,n.createElement("div",{className:(0,i.y)(w,r.footer__mainRow)},n.createElement("div",{className:h},n.createElement("div",{className:C},"Метадоксил"),n.createElement("div",{className:r.footer__nav},n.createElement("ul",{className:g},n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"О препарате")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"Научные публикации")),n.createElement("li",{className:f},n.createElement(o.Link,{to:"/tabletki/",className:p},"Инструкция, таблетки")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"Инструкция, раствор")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"Где купить"))))),n.createElement("div",{className:h},n.createElement("div",{className:C},"Показания"),n.createElement("div",{className:r.footer__nav},n.createElement("ul",{className:g},n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"При абстинентном синдроме")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"При острой интоксикации организма алкоголем")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"При пагубном потреблении алкоголя")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"При амнестическом синдроме"))))),n.createElement("div",{className:h},n.createElement("div",{className:C},"О похмелье"),n.createElement("div",{className:r.footer__nav},n.createElement("ul",{className:g},n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"Алкогольный калькулятор")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"Как избавиться от похмелья")),n.createElement("li",{className:f},n.createElement("a",{href:"",className:p},"Что такое алкогольная интоксикация"))))),n.createElement("div",{className:h},n.createElement("div",{className:C},"Контакты"),n.createElement("div",{className:r.footer__nav},n.createElement("ul",{className:g},n.createElement("li",{className:f},s.copyright),n.createElement("li",{className:f},s.company),n.createElement("li",{className:f},n.createElement("a",{href:"tel:+"+s.phone.split(" ").join("").split("-").join(""),className:p},s.phone)),n.createElement("li",{className:f},n.createElement("a",{href:"mailto:office@cscpharma.ru",className:p},"office@cscpharma.ru")))))))),n.createElement("div",{className:u},n.createElement(c.W,null,n.createElement("div",{className:d},n.createElement("a",{href:"/",className:m},"Сайт разработан в Digital Generation")))))},b=function(e){var t=e.items;return n.createElement("nav",{className:"Header-module--header__menu--a1981"},n.createElement("ul",{className:"Header-module--header__menu_list--c1f8c"},t.map((function(e,t){return n.createElement("li",{key:t,className:"Header-module--header__menu_item--ab367"},n.createElement(o.Link,{to:e.uri,className:"Header-module--header__menu_link--fcbc2"},e.label))}))))},y=function(e){var t=e.color,a=void 0===t?"#8A8D8E":t;return n.createElement(o.Link,{to:"/"},n.createElement("svg",{width:"201",height:"31",viewBox:"0 0 201 31",fill:a,xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M2.42627 0.117188H6.49365L13.2954 18.8477L20.0801 0.117188H24.1646L14.9189 25H11.6548L2.42627 0.117188ZM0.375488 0.117188H4.35742L5.0752 17.3267V25H0.375488V0.117188ZM22.2163 0.117188H26.2153V25H21.5156V17.3267L22.2163 0.117188ZM38.9644 25.3418C37.563 25.3418 36.304 25.1139 35.1875 24.6582C34.071 24.2025 33.1196 23.5701 32.3335 22.7612C31.5588 21.9409 30.9606 20.9896 30.5391 19.9072C30.1289 18.8135 29.9238 17.64 29.9238 16.3867V15.7031C29.9238 14.279 30.1289 12.9858 30.5391 11.8237C30.9492 10.6502 31.5303 9.64193 32.2822 8.79883C33.0342 7.95573 33.9342 7.30632 34.9824 6.85059C36.0306 6.39486 37.187 6.16699 38.4517 6.16699C39.7619 6.16699 40.9183 6.38916 41.9209 6.8335C42.9235 7.26644 43.7609 7.88167 44.4331 8.6792C45.1053 9.47673 45.6123 10.4338 45.9541 11.5503C46.2959 12.6554 46.4668 13.8802 46.4668 15.2246V17.1216H31.9746V14.0112H42.0234V13.6694C42.0007 12.9517 41.8639 12.2965 41.6133 11.7041C41.3626 11.1003 40.9753 10.6217 40.4512 10.2686C39.9271 9.90397 39.2492 9.72168 38.4175 9.72168C37.7453 9.72168 37.1585 9.86979 36.6572 10.166C36.1673 10.4508 35.7572 10.861 35.4268 11.3965C35.1077 11.9206 34.8685 12.5472 34.709 13.2764C34.5495 14.0055 34.4697 14.8145 34.4697 15.7031V16.3867C34.4697 17.1615 34.5723 17.8792 34.7773 18.54C34.9938 19.2008 35.3071 19.7762 35.7173 20.2661C36.1388 20.7446 36.6401 21.1206 37.2212 21.394C37.8136 21.6561 38.4858 21.7871 39.2378 21.7871C40.1834 21.7871 41.0379 21.6048 41.8013 21.2402C42.576 20.8643 43.2482 20.3117 43.8179 19.5825L46.0908 21.9409C45.7035 22.5106 45.1794 23.0575 44.5186 23.5815C43.8691 24.1056 43.083 24.5329 42.1602 24.8633C41.2373 25.1823 40.172 25.3418 38.9644 25.3418ZM58.2588 6.50879V25H53.73V6.50879H58.2588ZM64.2744 6.50879V10.0293H47.8169V6.50879H64.2744ZM76.8354 21.0693V12.5415C76.8354 11.9149 76.7272 11.3737 76.5107 10.918C76.2943 10.4622 75.9639 10.109 75.5195 9.8584C75.0752 9.60775 74.5112 9.48242 73.8276 9.48242C73.2238 9.48242 72.694 9.58496 72.2383 9.79004C71.7939 9.99512 71.4521 10.2856 71.2129 10.6616C70.9736 11.0262 70.854 11.4478 70.854 11.9263H66.3252C66.3252 11.1629 66.5075 10.4395 66.8721 9.75586C67.2367 9.06087 67.755 8.44564 68.4272 7.91016C69.1108 7.36328 69.9255 6.93604 70.8711 6.62842C71.8281 6.3208 72.8991 6.16699 74.084 6.16699C75.4854 6.16699 76.7329 6.40625 77.8267 6.88477C78.9318 7.35189 79.7977 8.05827 80.4243 9.00391C81.0623 9.94954 81.3813 11.1401 81.3813 12.5757V20.6421C81.3813 21.5649 81.4383 22.3568 81.5522 23.0176C81.6776 23.667 81.8599 24.231 82.0991 24.7095V25H77.502C77.2855 24.5329 77.1203 23.9404 77.0063 23.2227C76.8924 22.4935 76.8354 21.7757 76.8354 21.0693ZM77.4678 13.7378L77.502 16.4209H74.6479C73.9416 16.4209 73.3206 16.495 72.7852 16.6431C72.2497 16.7798 71.811 16.9849 71.4692 17.2583C71.1274 17.5203 70.8711 17.8394 70.7002 18.2153C70.5293 18.5799 70.4438 18.9958 70.4438 19.4629C70.4438 19.9186 70.5464 20.3288 70.7515 20.6934C70.9679 21.0579 71.2756 21.3485 71.6743 21.5649C72.0845 21.77 72.563 21.8726 73.1099 21.8726C73.9074 21.8726 74.6024 21.7131 75.1948 21.394C75.7873 21.0636 76.2487 20.6649 76.5791 20.1978C76.9095 19.7306 77.0861 19.2863 77.1089 18.8647L78.4077 20.813C78.2482 21.2801 78.009 21.7757 77.6899 22.2998C77.3709 22.8239 76.9608 23.3138 76.4595 23.7695C75.9582 24.2253 75.3543 24.6012 74.6479 24.8975C73.9416 25.1937 73.1213 25.3418 72.187 25.3418C70.9907 25.3418 69.9198 25.1025 68.9741 24.624C68.0285 24.1455 67.2822 23.4904 66.7354 22.6587C66.1885 21.827 65.915 20.8813 65.915 19.8218C65.915 18.842 66.0973 17.9761 66.4619 17.2241C66.8265 16.4722 67.3677 15.8398 68.0854 15.3271C68.8032 14.8031 69.6919 14.41 70.7515 14.1479C71.8224 13.8745 73.0472 13.7378 74.4258 13.7378H77.4678ZM88.7812 6.50879H93.293L93.1221 12.8662C93.0651 14.7917 92.8372 16.4551 92.4385 17.8564C92.0511 19.2464 91.5327 20.4142 90.8833 21.3599C90.2453 22.3055 89.5161 23.0688 88.6958 23.6499C87.8869 24.231 87.0381 24.681 86.1494 25H85.0728L85.0557 21.4795L85.5854 21.4453C86.1209 20.8757 86.571 20.3174 86.9355 19.7705C87.3115 19.2122 87.6134 18.6141 87.8413 17.9761C88.0692 17.3381 88.2401 16.6089 88.354 15.7886C88.4793 14.9569 88.5591 13.9827 88.5933 12.8662L88.7812 6.50879ZM89.9946 6.50879H101.975V25H97.4629V10.2173H89.9946V6.50879ZM84.0474 21.4453H104.555V30.5371H100.043V25H88.6445V30.5371H84.0303L84.0474 21.4453ZM106.521 15.9424V15.5835C106.521 14.2277 106.714 12.9801 107.102 11.8408C107.489 10.6901 108.053 9.6932 108.793 8.8501C109.534 8.007 110.44 7.35189 111.511 6.88477C112.582 6.40625 113.801 6.16699 115.168 6.16699C116.558 6.16699 117.788 6.40625 118.859 6.88477C119.942 7.35189 120.853 8.007 121.594 8.8501C122.334 9.6932 122.898 10.6901 123.286 11.8408C123.673 12.9801 123.867 14.2277 123.867 15.5835V15.9424C123.867 17.2868 123.673 18.5343 123.286 19.6851C122.898 20.8244 122.334 21.8213 121.594 22.6758C120.853 23.5189 119.947 24.174 118.876 24.6411C117.806 25.1082 116.581 25.3418 115.202 25.3418C113.835 25.3418 112.61 25.1082 111.528 24.6411C110.445 24.174 109.534 23.5189 108.793 22.6758C108.053 21.8213 107.489 20.8244 107.102 19.6851C106.714 18.5343 106.521 17.2868 106.521 15.9424ZM111.032 15.5835V15.9424C111.032 16.7513 111.112 17.509 111.271 18.2153C111.431 18.9217 111.676 19.5426 112.006 20.0781C112.337 20.6136 112.764 21.0352 113.288 21.3428C113.824 21.639 114.462 21.7871 115.202 21.7871C115.931 21.7871 116.558 21.639 117.082 21.3428C117.606 21.0352 118.033 20.6136 118.364 20.0781C118.706 19.5426 118.956 18.9217 119.116 18.2153C119.275 17.509 119.355 16.7513 119.355 15.9424V15.5835C119.355 14.786 119.275 14.0397 119.116 13.3447C118.956 12.6383 118.706 12.0174 118.364 11.4819C118.033 10.9351 117.6 10.5078 117.065 10.2002C116.541 9.88118 115.909 9.72168 115.168 9.72168C114.439 9.72168 113.812 9.88118 113.288 10.2002C112.764 10.5078 112.337 10.9351 112.006 11.4819C111.676 12.0174 111.431 12.6383 111.271 13.3447C111.112 14.0397 111.032 14.786 111.032 15.5835ZM131.967 6.50879V25H127.456V6.50879H131.967ZM144.016 6.50879L135.864 17.8564H131.062L130.498 13.7207H133.83L138.325 6.50879H144.016ZM138.598 25L133.54 17.0703L137.299 14.7119L144.597 25H138.598ZM153.979 21.7871C154.617 21.7871 155.187 21.6618 155.688 21.4111C156.189 21.1605 156.588 20.8073 156.884 20.3516C157.192 19.8958 157.357 19.366 157.38 18.7622H161.635C161.612 20.0155 161.259 21.1377 160.576 22.1289C159.892 23.1201 158.981 23.9062 157.841 24.4873C156.713 25.057 155.449 25.3418 154.047 25.3418C152.623 25.3418 151.381 25.1025 150.322 24.624C149.262 24.1455 148.379 23.479 147.673 22.6245C146.978 21.77 146.454 20.7788 146.101 19.6509C145.759 18.5229 145.588 17.3153 145.588 16.0278V15.481C145.588 14.1935 145.759 12.9858 146.101 11.8579C146.454 10.73 146.978 9.73877 147.673 8.88428C148.379 8.02979 149.262 7.36328 150.322 6.88477C151.381 6.40625 152.618 6.16699 154.03 6.16699C155.523 6.16699 156.833 6.45752 157.961 7.03857C159.1 7.61963 159.989 8.43994 160.627 9.49951C161.276 10.5591 161.612 11.8066 161.635 13.2422H157.38C157.357 12.5814 157.209 11.9889 156.936 11.4648C156.662 10.9408 156.275 10.5192 155.773 10.2002C155.272 9.88118 154.663 9.72168 153.945 9.72168C153.181 9.72168 152.543 9.88118 152.031 10.2002C151.529 10.5192 151.136 10.9578 150.852 11.5161C150.578 12.063 150.384 12.6782 150.271 13.3618C150.168 14.034 150.117 14.7404 150.117 15.481V16.0278C150.117 16.7798 150.168 17.4976 150.271 18.1812C150.384 18.8647 150.578 19.48 150.852 20.0269C151.136 20.5623 151.529 20.9896 152.031 21.3086C152.543 21.6276 153.193 21.7871 153.979 21.7871ZM169.206 18.5571L175.939 6.50879H180.468V25H175.939V12.9346L169.206 25H164.677V6.50879H169.206V18.5571ZM196.994 6.50879V10.0806H187.937V6.50879H196.994ZM200.395 6.50879V25H195.883V6.50879H200.395ZM186.809 6.50879H191.269L190.773 15.7373C190.694 17.0931 190.551 18.2837 190.346 19.3091C190.141 20.3231 189.868 21.1947 189.526 21.9238C189.184 22.6416 188.768 23.2284 188.278 23.6841C187.788 24.1398 187.219 24.4759 186.569 24.6924C185.931 24.8975 185.214 25 184.416 25H183.032L182.98 21.3599L183.63 21.3086C184.029 21.2744 184.37 21.1662 184.655 20.9839C184.951 20.8016 185.202 20.5396 185.407 20.1978C185.624 19.856 185.8 19.4173 185.937 18.8818C186.085 18.335 186.199 17.6969 186.279 16.9678C186.37 16.2272 186.433 15.3727 186.467 14.4043L186.809 6.50879Z"})))},N=function(e){var t=e.type,a=void 0===t?"default":t,r=(0,n.useState)(!1),s=r[0],l=r[1],u=(0,n.useState)("white"==a),d=u[0],m=u[1],h=(0,o.useStaticQuery)("3493970434").wpMenu,f=function(e){e.currentTarget.scrollY>150?s||(l(!0),"white"==a&&m(!1)):s&&(l(!1),"white"==a&&m(!0))};return(0,n.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[s]),n.createElement("header",{className:(0,i.y)("Header-module--header--357cc",s&&"Header-module--header-fixed--b3791",d&&"Header-module--header-white--dd0f9")},n.createElement(c.W,null,n.createElement("div",{className:"Header-module--header__content--9a010"},n.createElement(y,{color:d?"#FFF":"#8A8D8E"}),n.createElement(b,{items:h.menuItems.nodes}))))},_="Menu-module--menu__group--14a17",M="Menu-module--menu__group_item--1558f",L="Menu-module--menu__group_link--a6943",H="Menu-module--menu__group_list--2dd5a",k="Menu-module--menu__group_title--5adcb",S=function(e){var t=e.active;e.toggleMenu;return n.createElement("nav",{className:(0,i.y)("Menu-module--menu--87398",t&&"Menu-module--menu-active--a9d5f")},n.createElement("div",{className:"Menu-module--menu__content--cd169"},n.createElement("div",{className:_},n.createElement("div",{className:k},"Метадоксил"),n.createElement("ul",{className:H},n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"О препарате")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"Научные публикации")),n.createElement("li",{className:M},n.createElement(o.Link,{to:"/tabletki/",className:L},"Инструкция, таблетки")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"Инструкция, раствор")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"Где купить")))),n.createElement("div",{className:_},n.createElement("div",{className:k},"Показания"),n.createElement("ul",{className:H},n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"При абстинентном синдроме")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"При острой интоксикации организма алкоголем")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"При пагубном потреблении алкоголя")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"При амнестическом синдроме")))),n.createElement("div",{className:_},n.createElement("div",{className:k},"О похмелье"),n.createElement("ul",{className:H},n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"Алкогольный калькулятор")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"Как избавиться от похмелья")),n.createElement("li",{className:M},n.createElement("a",{href:"#",className:L},"Что такое алкогольная интоксикация"))))))},x=function(e){var t=e.className,a=e.attributes,r=e.children;return n.createElement("main",Object.assign({id:"page-content",className:(0,i.y)("page-content",t)},a),r)},V=a(3723),I=function(){return n.createElement("div",{className:"Danger-module--danger--1ecc9"},n.createElement(c.W,null,n.createElement(V.S,{src:"../../assets/images/danger.svg",className:"Danger-module--danger__img--6edc5",alt:"имеются противопоказания. требуется консультация специалиста",__imageData:a(9327)})))},W=function(e){var t=e.header,a=e.pageClassName,r=e.children,i=(0,n.useState)(!1),s=i[0],o=i[1],c=function(){return o((function(e){return!e}))};return n.createElement("div",{className:"wrapper"},n.createElement(N,{type:t?"white":"default"}),n.createElement(l,{active:s,toggleMenu:c}),n.createElement(S,{active:s,toggleMenu:c}),n.createElement(x,{className:a},r,n.createElement(I,null)),n.createElement(E,null))}},530:function(e,t,a){a.d(t,{z:function(){return i}});var r=a(7294),n=a(1257),i=function(e){var t=e.className,a=e.handlerClick,i=e.attributes,s=e.children;return r.createElement("button",Object.assign({className:(0,n.y)("button",t),onClick:a},i),s)}},2164:function(e,t,a){a.d(t,{W:function(){return i}});var r=a(7294),n=a(1257),i=function(e){var t=e.className,a=void 0===t?"":t,i=(e.attributes,e.children);return r.createElement("div",{className:(0,n.y)("container",a)},i)}},1257:function(e,t,a){a.d(t,{y:function(){return r}});var r=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}},9327:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8e8e8","images":{"fallback":{"src":"/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/efd99/danger.svg","srcSet":"/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/cbb98/danger.svg 318w,\\n/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/b4c70/danger.svg 636w,\\n/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/efd99/danger.svg 1272w","sizes":"(min-width: 1272px) 1272px, 100vw"},"sources":[{"srcSet":"/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/a74da/danger.webp 318w,\\n/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/b9110/danger.webp 636w,\\n/metadoksil/static/a306ddc12d8da9bdb0d390ef41a64a2d/11c09/danger.webp 1272w","type":"image/webp","sizes":"(min-width: 1272px) 1272px, 100vw"}]},"width":1272,"height":36}')}}]);
//# sourceMappingURL=commons-eeec9e2d4120f960cb9c.js.map