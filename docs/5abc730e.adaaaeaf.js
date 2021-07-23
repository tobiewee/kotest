(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(159)),i={id:"custom-test-names",title:"Custom Test Names",slug:"custom-test-names.html"},c={unversionedId:"framework/datatesting/custom-test-names",id:"framework/datatesting/custom-test-names",isDocsHomePage:!1,title:"Custom Test Names",description:"By default, the name of each test is simply the toString() on the input row. This typically works well for data",source:"@site/docs/framework/datatesting/custom_test_names.md",slug:"/framework/datatesting/custom-test-names.html",permalink:"/docs/framework/datatesting/custom-test-names.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/datatesting/custom_test_names.md",version:"current",sidebar:"framework",previous:{title:"Nested Data Tests",permalink:"/docs/framework/datatesting/nested-tests.html"},next:{title:"Eventually",permalink:"/docs/framework/concurrency/eventually.html"}},s=[{value:"WithDataTestName",id:"withdatatestname",children:[]},{value:"Test Name Function",id:"test-name-function",children:[]}],l={rightToc:s};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, the name of each test is simply the ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," on the input row. This typically works well for data\nclasses."),Object(o.b)("p",null,"However, we can customize this if we wish, by passing in test names into the ",Object(o.b)("inlineCode",{parentName:"p"},"withData")," function in the form of map,\nwhere the key is the test name, and the value is the input value for that row."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'context("Pythag triples tests") {\n  withData(\n    mapOf(\n      "3, 4, 5" to PythagTriple(3, 4, 5),\n      "6, 8, 10" to PythagTriple(6, 8, 10),\n      "8, 15, 17" to PythagTriple(8, 15, 17),\n      "7, 24, 25" to PythagTriple(7, 24, 25)\n    )\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),Object(o.b)("p",null,"Or we can pass a function to ",Object(o.b)("inlineCode",{parentName:"p"},"withData")," which take ",Object(o.b)("inlineCode",{parentName:"p"},"row")," as input and return the test name."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'context("Pythag triples tests") {\n  withData(\n    nameFn = { t: PythagTriple -> "${t.a}__${t.b}__${t.c}" },\n    PythagTriple(3, 4, 5),\n    PythagTriple(6, 8, 10),\n    PythagTriple(8, 15, 17),\n    PythagTriple(7, 24, 25)\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),Object(o.b)("p",null,"The output from this example is now slightly clearer:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"data test example output",src:n(217).default})),Object(o.b)("h2",{id:"withdatatestname"},"WithDataTestName"),Object(o.b)("p",null,"Another alternative is to implement the ",Object(o.b)("inlineCode",{parentName:"p"},"WithDataTestName")," interface. When provided, the ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," will not be used,\ninstead the ",Object(o.b)("inlineCode",{parentName:"p"},"dataTestName")," function will be invoked for each row."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'data class PythagTriple(val a: Int, val b: Int, val c: Int) : WithDataTestName {\n  override fun dataTestName() = "$a, $b, $c"\n}\n')),Object(o.b)("h2",{id:"test-name-function"},"Test Name Function"),Object(o.b)("p",null,"Finally, another option is to provide a function directly to the ",Object(o.b)("inlineCode",{parentName:"p"},"withData")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'context("Pythag triples tests") {\n  withData<PythagTriple>(\n    { "${it.a}, ${it.b}, ${it.c}" },\n    PythagTriple(3, 4, 5),\n    PythagTriple(6, 8, 10),\n    PythagTriple(8, 15, 17),\n    PythagTriple(7, 24, 25)\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),Object(o.b)("p",null,"Whether this is worth the extra effort or not depends on how readable the toString() method is on the data classes you\nare using."))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/datatest3-61c742b23508b1da55388fea50d7f996.png"}}]);