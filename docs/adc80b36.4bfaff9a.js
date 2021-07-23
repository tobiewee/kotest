(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(159)),s={id:"eventually",title:"Eventually",slug:"eventually.html"},i={unversionedId:"assertions/eventually",id:"assertions/eventually",isDocsHomePage:!1,title:"Eventually",description:'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".',source:"@site/docs/assertions/eventually.md",slug:"/assertions/eventually.html",permalink:"/docs/assertions/eventually.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/eventually.md",version:"current",sidebar:"assertions",previous:{title:"Soft Assertions",permalink:"/docs/assertions/soft-assertions.html"},next:{title:"Continually",permalink:"/docs/assertions/continually.html"}},l=[{value:"Examples",id:"examples",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'When testing non-deterministic code, a common use case is "I expect this code to pass after a short period of time".'),Object(r.b)("p",null,"For example, if you were testing a IO operation, you might need to wait until the IO operation has flushed."),Object(r.b)("p",null,"Sometimes you can do a Thread.sleep but this is isn't ideal as you need to set a sleep threshold high enough so that it\nwon't expire prematurely on a slow machine. Plus it means that your test will sit around waiting on the timeout even if\nthe code completes quickly on a fast machine."),Object(r.b)("p",null,"Or you can roll a loop and sleep and retry and sleep and retry, but this is just boilerplate slowing you down."),Object(r.b)("p",null,"Another common approach is to use countdown latches and this works fine if you are able to inject the latches in the\nappropriate places but it isn't always possible to have the code under test trigger a latch."),Object(r.b)("p",null,"As an alternative, kotest provides the ",Object(r.b)("inlineCode",{parentName:"p"},"eventually")," function and the ",Object(r.b)("inlineCode",{parentName:"p"},"Eventually")," configuration which periodically test\nthe code ignoring your specified exceptions and ensuring the result satisfies an optional predicate, until the timeout\nis eventually reached or too many iterations have passed. This is flexible and is perfect for testing nondeterministic\ncode."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("h4",{id:"simple-examples"},"Simple examples"),Object(r.b)("p",null,"Let's assume that we send a message to an asynchronous service.\nAfter the message is processed, a new row is inserted into user table."),Object(r.b)("p",null,"We can check this behaviour with our ",Object(r.b)("inlineCode",{parentName:"p"},"eventually")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTests : ShouldSpec() {\n  init {\n    should("check if user repository has one row after message is sent") {\n      sendMessage()\n      eventually(5.seconds) {\n        userRepository.size() shouldBe 1\n      }\n    }\n  }\n}\n')),Object(r.b)("h4",{id:"exceptions"},"Exceptions"),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"eventually")," will ignore any ",Object(r.b)("inlineCode",{parentName:"p"},"AssertionError")," that is thrown inside the function (note, that means it won't catch ",Object(r.b)("inlineCode",{parentName:"p"},"Error"),").\nIf you want to be more specific, you can tell ",Object(r.b)("inlineCode",{parentName:"p"},"eventually")," to ignore specific exceptions and any others will immediately fail the test."),Object(r.b)("p",null,"Let's assume that our example from before throws a ",Object(r.b)("inlineCode",{parentName:"p"},"UserNotFoundException")," while the user is not found in the database.\nIt will eventually return the user when the message is processed by the system."),Object(r.b)("p",null,"In this scenario, we can explicitly skip the exception that we expect to happen until the test passed, but any other exceptions would\nnot be ignored. Note, this example is similar to the former, but if there was some other error, say a ConnectionException for example, this would cause\nthe eventually block to immediately exit with a failure message."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTests : ShouldSpec() {\n  init {\n    should("check if user repository has one row") {\n      eventually(5.seconds, UserNotFoundException::class.java) {\n        userRepository.findBy(1) shouldNotBe null\n      }\n    }\n  }\n}\n')),Object(r.b)("h4",{id:"predicates"},"Predicates"),Object(r.b)("p",null,"In addition to verifying a test case eventually runs without throwing, we can also verify the result and treat a non-throwing result as failing."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTests : StringSpec({\n  "check that predicate eventually succeeds in time" {\n    var i = 0\n    eventually<Int>(25.seconds, predicate = { it == 5 }) {\n      delay(1.seconds)\n      i++\n    }\n  }\n})\n')),Object(r.b)("h4",{id:"sharing-configuration"},"Sharing configuration"),Object(r.b)("p",null,"Sharing the configuration for eventually is a breeze with the ",Object(r.b)("inlineCode",{parentName:"p"},"Eventually"),' data class. Suppose you have classified the operations in your\nsystem to "slow" and "fast" operations. Instead of remembering which timing values were for slow and fast we can set up some objects to share between tests\nand customize them per suite. This is also a perfect time to show off the listener capabilities of ',Object(r.b)("inlineCode",{parentName:"p"},"eventually")," which give you insight\ninto the current value of the result of your producer and the state of iterations!"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'val slow = EventuallyConfig<ServerResponse, ServerException>(5.minutes, interval = 25.milliseconds.fibonacci(), exceptionClass = ServerException::class)\nval fast = slow.copy(duration = 5.seconds)\n\nclass FooTests : StringSpec({\n  val logger = logger("FooTests")\n  val fSlow = slow.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts")})\n\n  "server eventually provides a result for /foo" {\n    eventually(fSlow) {\n      fooApi()\n    }\n  }\n})\n\nclass BarTests : StringSpec({\n  val logger = logger("BarTests")\n  val bFast = fast.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts")})\n\n  "server eventually provides a result for /bar" {\n    eventually(bFast) {\n      barApi()\n    }\n  }\n})\n\n')),Object(r.b)("p",null,"Here we can see sharing of configuration can be useful to reduce duplicate code while allowing flexibility for things like\ncustom logging per test suite for clear test logs."))}u.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);