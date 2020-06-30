(this["webpackJsonpdp-census-frontend-ftb-filtering-poc"]=this["webpackJsonpdp-census-frontend-ftb-filtering-poc"]||[]).push([[0],{11:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/Census2021_whiteback.3edebd2f.png"},24:function(e){e.exports=JSON.parse('{"dataset":{"name":"Example","digest":"24aca09d162196ce64c5801321fb31e8eab8670dae0a4a2859f560e979bcc556","description":"Example dataset for validation","size":7,"ruleRootVariable":"city"},"codebook":[{"name":"city","label":"City","codes":["0","1","2"],"labels":["London","Liverpool","Belfast"]},{"name":"sex","label":"Sex","codes":["0","1"],"labels":["Male","Female"]},{"name":"siblings","label":"Number of siblings","codes":["0","1","2","3","4","5","6"],"labels":["No siblings","1 sibling","2 siblings","3 siblings","4 siblings","5 siblings","6 or more siblings"]},{"name":"siblings_3","label":"Number of siblings (3 mappings)","codes":["0","1-2","3+"],"labels":["No siblings","1 or 2 siblings","3 or more siblings"],"mapFrom":["siblings"],"mapFromCodes":["0","1-2","","3+","","",""]}]}')},25:function(e){e.exports=JSON.parse('[{"name":"Example","digest":"24aca09d162196ce64c5801321fb31e8eab8670dae0a4a2859f560e979bcc556","description":"Example dataset for validation","size":7,"ruleRootVariable":"city"}]')},26:function(e){e.exports=JSON.parse('{"datasetDigest":"6fc4987e40b3ea7a0ca0f4a365f050ee6491c204abaaef6c7471be1e3da7f743","dimensions":[{"name":"city"},{"name":"siblings","catOffsetLenPairs":[1,2]}],"counts":[0,0,0,0,0,1]}')},29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),s=a.n(r),o=(a(34),a(11),a(12)),l=a.n(o),c=a(14),d=a(22),m=a(3),u=a(4),p=a(10),f=a(6),h=a(5),b=a(23),g=a.n(b),v=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"header col-wrap"},i.a.createElement("div",{className:"col"},i.a.createElement("img",{className:"logo top-logo",src:"https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg",alt:"Office for National Statistics"}),i.a.createElement("img",{className:"logo top-logo",src:g.a,alt:"Census 2021 logo"})))),i.a.createElement("div",{className:"primary-nav print--hide page-title font-size--sm"}))}}]),a}(i.a.Component),E=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("img",{className:"footer-license__img",alt:"OGL",src:"https://cdn.ons.gov.uk/assets/images/logo-ogl-footer.svg",width:"60"}),i.a.createElement("p",{className:"footer-license__text margin-left-sm--0"},"All content is available under the ",i.a.createElement("a",{className:"icon--hide",href:"http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",target:"_blank",rel:"noopener noreferrer"},"Open Government Licence v3.0")," ",i.a.createElement("span",{className:"icon icon-external--light-small"}),", except where otherwise stated"))}}]),a}(i.a.Component),k=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t="Nothing added";return null!=this.props.filterSelection&&this.props.filterSelection.length>0&&(t=this.props.filterSelection.join(", ")),i.a.createElement("li",{id:"filter-option",className:"white-background margin-left-md--2 margin-right-md--2 margin-right-sm--1 margin-left-sm--1 filter-overview__add"},i.a.createElement("div",{className:"col--lg-56 min-height--10 padding-left-sm--0 padding-left-md--1"},i.a.createElement("div",{className:"col col--md-8 col--lg-8 min-height--4"},i.a.createElement("a",{className:"filter-overview__link--add",href:"#",onClick:function(){e.props.dimClicked(!0)}},i.a.createElement("span",{className:"dimension-button btn btn--tertiary margin-left-md--2 margin-left-sm--1  font-weight-700 "},"Add ",i.a.createElement("span",{className:"visuallyhidden"},this.props.label)))),i.a.createElement("div",{className:"dimension-name col col--md-11 col--lg-14 margin-left-sm--6 height-sm--3 height-md--6 overflow--hidden margin-top-md--3 margin-bottom-sm--2"},i.a.createElement("strong",null,i.a.createElement("span",{id:"filter-option-label",className:"font-size-16"},this.props.label))),i.a.createElement("div",{id:"number-added-aggregate",className:"col col--md-20 col--lg-30"},i.a.createElement("div",{className:"font-size--16 height-sm--3 height-md--10 nowrap-sm vertical-align-middle margin-left-sm--4 list--ellipses-sm overflow--hidden"},i.a.createElement("div",{className:"height-sm--3 max-height-md--9 vertical-align-middle__contents--md list--ellipses-md"},i.a.createElement("ul",{className:"list list--pipe-seperated list--pipe-seperated-ellipses"},i.a.createElement("span",null,t)))))))}}]),a}(i.a.Component),O=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).applyFilters=n.applyFilters.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"applyFilters",value:function(){var e="".concat(document.location.origin,"/dp-census-frontend-ftb-filtering-poc/results/").concat(this.props.datasetName,"?");e+=this.props.getFilterQuery(),window.location.href=e}},{key:"render",value:function(){if(!this.props.showDim)return null;var e="btn btn--primary btn--primary-disabled btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17";return this.props.canFilter&&(e="btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17"),i.a.createElement("div",{className:"wrapper adjust-font-size--16 page-content link-adjust background--gallery"},i.a.createElement("ul",{className:"list--neutral filter-overview"},i.a.createElement("li",{className:"margin-left--0 padding-bottom--2 padding-top--0 padding-right--2 width-lg--56"},i.a.createElement("button",{className:"float-el--right-md float-el--right-sm float-el--right-lg",href:"/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/dimensions/clear-all"},"Clear filters")),this.props.dimensions),i.a.createElement("div",{className:"btn--no-click padding-bottom--4 padding-left--2 padding-top--2"},i.a.createElement("div",{className:"filter-overview__error-container",id:"error-container"}),i.a.createElement("form",{method:"post",action:"/filters/c53f1a7c-ecf1-4abf-a104-f8f00cd57994/submit"},i.a.createElement("input",{id:"preview-download",type:"button",value:"Apply filters",className:e,name:"preview-and-download",onClick:this.applyFilters}))))}}]),a}(i.a.Component),w=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).saveSelection=n.saveSelection.bind(Object(p.a)(n)),n.state={filters:n.props.filters},n}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){e.dimCodeBook!==this.props.dimCodeBook&&this.setState({filters:this.props.filters})}},{key:"checkChanged",value:function(e,t){e=e.toString();var a=this.state.filters;a[e]=t.target.checked,this.setState({filters:a},(function(){}))}},{key:"saveSelection",value:function(){this.props.filterUpdate(this.props.dimCodeBook.name,this.state.filters),this.props.closeDimensionOptMenu()}},{key:"render",value:function(){var e=this;if(!this.props.showDim)return null;for(var t=[],a=function(a){t.push(i.a.createElement("div",{className:"checkbox hierarchy-box border-bottom--gallery-sm border-bottom--gallery-md margin-bottom--1 clearfix"},i.a.createElement("div",{className:"width-md--25 float-el--left-md"},i.a.createElement("input",{type:"checkbox",className:"checkbox__input js-filter",id:"id"+a,name:e.props.dimCodeBook.codes[a],onChange:function(t){e.checkChanged(e.props.dimCodeBook.codes[a],t)},checked:e.state.filters[e.props.dimCodeBook.codes[a]]}),i.a.createElement("label",{id:e.props.dimCodeBook.codes[a],className:"checkbox__label",htmlFor:"id"+a},e.props.dimCodeBook.labels[a]))))},n=0;n<this.props.dimCodeBook.labels.length;n++)a(n);return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"col col--md-50 col--lg-35"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,i.a.createElement("h2",{className:"font-size--17 padding-bottom--1 font-weight-700"},"Browse ",i.a.createElement("span",{className:"visuallyhidden"},"Aggregate"))),i.a.createElement("input",{name:"save-and-return",className:"hidden",type:"submit",value:"Save and return"}),i.a.createElement("input",{className:"btn btn--link underline-link js-filter add-all",type:"submit",value:"Add all",name:"add-all",id:"add-all","aria-label":"Add all Aggregate in this list to your saved items"}),"\xa0 \xa0",i.a.createElement("input",{className:"btn btn--link underline-link js-filter remove-list js-hidden",type:"submit",value:"Remove all",name:"remove-all",id:"remove-all","aria-label":"Remove all Aggregate in this list from your saved items"}),i.a.createElement("input",{name:"q",type:"hidden",value:"/","aria-controls":"checkboxes-0"}),t),i.a.createElement("div",{className:"margin-top js-hidden"},i.a.createElement("input",{type:"submit",value:"Add selected filters",className:"btn btn--secondary btn--focus font-weight-700 font-size--17 text-wrap"})),i.a.createElement("div",{id:"save-and-return-container",className:"margin-top--5"},i.a.createElement("input",{name:"save-and-return",className:"btn btn--primary btn--thick btn--wide btn--big btn--focus margin-right--2 font-weight-700 font-size--17 text-wrap save-button-bottom",type:"button",value:"Save and return",onClick:this.saveSelection}))))}}]),a}(i.a.Component),N=a(24);function y(e){return e.warn?i.a.createElement("div",{className:"warning wrapper"},"Connection to ONS FTB instance failed, using Mock data on the frontend instead"):null}var j=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={name:""},n.dimensionClickedFuncs=[],n.ftbDomain="http://99.80.12.125:10100/v6",n.getFilterSelection=n.getFilterSelection.bind(Object(p.a)(n)),n.filterUpdateFunc=n.filterUpdateFunc.bind(Object(p.a)(n)),n.closeDimensionOptMenu=n.closeDimensionOptMenu.bind(Object(p.a)(n)),n.getFilterQuery=n.getFilterQuery.bind(Object(p.a)(n)),n.state={filter:{},ruleRootVariable:""},n}return Object(u.a)(a,[{key:"getFilterQuery",value:function(){var e="dim=".concat(this.state.ruleRootVariable),t="&incl=".concat(this.state.ruleRootVariable,",");for(var a in this.state.filter[this.state.ruleRootVariable])!0===this.state.filter[this.state.ruleRootVariable][a]&&(t+="".concat(a,","));for(var n in t=t.replace(/,\s*$/,""),this.state.filter)if(n!==this.state.ruleRootVariable){var i="";for(var r in this.state.filter[n])!0===this.state.filter[n][r]&&(i+="".concat(r,","));""!==i&&(e+="&dim=".concat(n),t=(t+="&incl=".concat(n,",").concat(i)).replace(/,\s*$/,""))}return console.log("FILTER OUTPUT IS: ".concat(e).concat(t)),e+t}},{key:"filterUpdateFunc",value:function(e,t){var a=Object(d.a)({},e,t),n=Object.assign(this.state.filter,a);this.setState({filter:n})}},{key:"closeDimensionOptMenu",value:function(){var e=!1;for(var t in this.state.filter[this.state.ruleRootVariable])!0===this.state.filter[this.state.ruleRootVariable][t]&&(e=!0);this.setState({indexAddingDimOpt:-1,canFilter:e})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.name;this.setState({name:e,codeBook:{},indexAddingDimOpt:-1,warning:!1,filter:{}}),this.getCodeBook()}},{key:"getCodeBook",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,i,r,s,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",Authorization:"Bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/dp-census-frontend-ftb-filtering-poc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AUTH_TOKEN:"a9a47ee7-81a5-4973-8d4b-1dc32dc4d85a"}).REACT_APP_NOT_SECRET_CODE)},a=!1,e.prev=2,e.next=5,fetch(this.ftbDomain+"/codebook"+this.props.match.params.name,t);case 5:return i=e.sent,e.next=8,i.json();case 8:n=e.sent,a=200===i.status,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),a=!1;case 15:if(a||(n=N),null!=n&&null!=n.codebook)for(r=function(e){o.dimensionClickedFuncs.push((function(){o.setState({indexAddingDimOpt:e})}))},s=0;s<n.codebook.length;s++)r(s);this.setState({codeBook:n,warning:!a,ruleRootVariable:n.dataset.ruleRootVariable});case 18:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFilterSelection",value:function(e){var t=[];if(null!=this.state.filter[this.state.codeBook.codebook[e].name]){var a=this.state.codeBook.codebook[e].name;for(var n in this.state.filter[a])if(!0===this.state.filter[a][n]){var i=this.state.codeBook.codebook[e].codes.indexOf(n);t.push(this.state.codeBook.codebook[e].labels[i])}}return t}},{key:"render",value:function(){var e,t=[];if(null!=this.state.codeBook&&null!=this.state.codeBook.codebook){for(var a=this.state.codeBook.codebook,n=0;n<a.length;n++){var r=this.getFilterSelection(n),s=i.a.createElement(k,{label:a[n].label,dimClicked:this.dimensionClickedFuncs[n],filterSelection:r});t.push(s)}var o={};null!=this.state.codeBook.codebook[this.state.indexAddingDimOpt]&&null!=this.state.filter[this.state.codeBook.codebook[this.state.indexAddingDimOpt].name]&&(o=this.state.filter[this.state.codeBook.codebook[this.state.indexAddingDimOpt].name]),e=i.a.createElement(w,{showDim:this.state.indexAddingDimOpt>-1,dimCodeBook:this.state.codeBook.codebook[this.state.indexAddingDimOpt],filterUpdate:this.filterUpdateFunc,closeDimensionOptMenu:this.closeDimensionOptMenu,filters:o})}return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(y,{warn:this.state.warning}),i.a.createElement("h1",{className:"wrapper"},"Dataset: ",this.props.match.params.name),i.a.createElement("div",{className:"wrapper"}," rootRuleVariable must be selected: ",this.state.ruleRootVariable),i.a.createElement(O,{datasetName:this.props.match.params.name,showDim:this.state.indexAddingDimOpt<0,dimensions:t,getFilterQuery:this.getFilterQuery,canFilter:this.state.canFilter}),e,i.a.createElement(E,null))}}]),a}(i.a.Component),C=a(25);function S(e){return e.warn?i.a.createElement("div",{className:"warning wrapper"},"Connection to ONS FTB instance failed, using Mock data on the frontend instead"):null}var _=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ftbDomain="http://99.80.12.125:10100/v6",n.state={results:[],warning:!1},n.state={searchString:"",results:[],warning:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getDatasets()}},{key:"getDatasets",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",Authorization:"Bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/dp-census-frontend-ftb-filtering-poc",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AUTH_TOKEN:"a9a47ee7-81a5-4973-8d4b-1dc32dc4d85a"}).REACT_APP_NOT_SECRET_CODE)},a=!1,e.prev=2,e.next=5,fetch(this.ftbDomain+"/datasets",t);case 5:return i=e.sent,e.next=8,i.json();case 8:n=e.sent,a=200===i.status,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),a=!1;case 15:return a||(n=C),this.setState({results:n,warning:!a}),e.abrupt("return",!0);case 18:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return this.state.results.length>0&&(e=this.state.results.map((function(e){return i.a.createElement("li",{className:"col col--md-34 col--lg-50 search-results__item search-result-item"},i.a.createElement("a",{href:document.location.href+"/dataset/"+e.name},e.name),i.a.createElement("p",{className:"search-results__meta"},e.description))}))),i.a.createElement("div",{className:"wrapper"},i.a.createElement(S,{warn:this.state.warning}),i.a.createElement("h1",{className:"wrapper"},"List of all datasets loaded in from FTB"),i.a.createElement("div",{className:"search-results"},i.a.createElement("ul",{className:"list--neutral flush"},e)))}}]),a}(i.a.Component),x=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(_,null),i.a.createElement(E,null))}}]),a}(i.a.Component),D=a(26);function B(e){return e.warn?i.a.createElement("div",{className:"warning wrapper"},"Connection to ONS FTB instance failed, using Mock data on the frontend instead"):null}var F=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ftbDomain="http://99.80.12.125:10100/v6",n.state={results:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.setState({}),this.getFilterResults()}},{key:"getFilterResults",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{Authorization:"Bearer ".concat("a9a47ee7-81a5-4973-8d4b-1dc32dc4d85a")}},a=!1,e.prev=2,e.next=5,fetch("".concat(this.ftbDomain,"/query/").concat(this.props.match.params.dataset).concat(window.location.search),t);case 5:return i=e.sent,e.next=8,i.json();case 8:n=e.sent,a=!0,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),a=!1,n=D;case 16:this.setState({results:n,warning:!a});case 17:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement("div",{className:"wrapper"},i.a.createElement(B,{warn:this.state.warning}),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("pre",null,JSON.stringify(this.state.results,null,2)))),i.a.createElement(E,null))}}]),a}(i.a.Component),T=a(27),A=a(1);var R=function(){return i.a.createElement(T.a,null,i.a.createElement("div",null,i.a.createElement(A.c,null,i.a.createElement(A.a,{path:"/dp-census-frontend-ftb-filtering-poc/dataset/:name",component:j}),i.a.createElement(A.a,{path:"/dp-census-frontend-ftb-filtering-poc/results/:dataset",component:F}),i.a.createElement(A.a,{path:"/dp-census-frontend-ftb-filtering-poc/",component:x,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e854b84c.chunk.js.map