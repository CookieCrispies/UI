(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[1],{783:function(e,n,t){"use strict";var r=t(0),c=t(88),a=t(220);n.a=function(){var e=Object(r.useContext)(a.a).translations;return function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===e.length)return t;var a=e.find((function(e){return e.data.stringId===n}));if(a){var i=a.data.text,s=i.includes("%");if(s){var o=i;return Object(c.isEmpty)(r)?t:(Object.keys(r).forEach((function(e){var n=new RegExp("%".concat(e,"%"),"g");o=o.replace(n,r[e])})),o)}return i}return t}}},788:function(e,n,t){"use strict";var r=t(0),c=t(800),a=t(30),i=t(13);n.a=function(e){var n=e.value,t=e.decimals,s=e.fontSize,o=void 0===s?"40px":s,u=e.lineHeight,d=void 0===u?"1":u,b=e.prefix,l=void 0===b?"":b,j=e.bold,f=void 0===j||j,p=e.color,O=void 0===p?"text":p,h=Object(c.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),x=h.countUp,m=h.update,v=Object(r.useRef)(m);return Object(r.useEffect)((function(){v.current(n)}),[n,v]),Object(i.jsxs)(a.M,{bold:f,fontSize:o,style:{lineHeight:d},color:O,children:[l,x]})}},793:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"i",(function(){return l})),t.d(n,"d",(function(){return j})),t.d(n,"e",(function(){return f})),t.d(n,"j",(function(){return p})),t.d(n,"f",(function(){return O})),t.d(n,"c",(function(){return h})),t.d(n,"b",(function(){return x})),t.d(n,"g",(function(){return m})),t.d(n,"h",(function(){return v}));var r=t(2),c=t.n(r),a=t(8),i=t(4),s=t.n(i),o=t(110),u=t(834),d=t(46),b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,u.a.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,new s.a(r).times(o.d).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(n,t){var r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,e.abrupt("return",n.methods.deposit(new s.a(t).times(d.a.pow(r)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:r,gas:2e5,value:new s.a(t).times(o.d).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new s.a(r).times(o.d).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(n,t){var r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,"0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==n.options.address){e.next=4;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 4:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==n.options.address){e.next=6;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 6:if("0x453a75908fb5a36d482d5f8fe88eca836f32ead5"!==n.options.address){e.next=8;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 8:return e.abrupt("return",n.methods.withdraw(new s.a(t).times(d.a.pow(r)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,"0").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,value:d.b}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},794:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"e",(function(){return d}));var r=t(0),c=t(795),a=t(59),i=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.d)(e)}),[e])},s=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.l)(e)}),[e])},o=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.n)(e)}),[e])},u=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.k)(e)}),[e])},d=function(e){var n=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.s)(e,n)}),[e,n])}},795:function(e,n,t){"use strict";var r=t(38),c=t(0),a=t(105),i=t.n(a),s=t(62),o=t(69);n.a=function(){var e=Object(s.c)().library,n=Object(c.useRef)(e),t=Object(c.useState)(e?new i.a(e):Object(o.b)()),a=Object(r.a)(t,2),u=a[0],d=a[1];return Object(c.useEffect)((function(){e!==n.current&&(d(e?new i.a(e):Object(o.b)()),n.current=e)}),[e]),u}},798:function(e,n,t){"use strict";t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return f}));var r=t(34),c=t(2),a=t.n(c),i=t(8),s=t(0),o=t(62),u=t(54),d=t(113),b=t(793),l=t(794),j=function(e,n){var t=Object(u.b)(),r=Object(o.c)().account,c=Object(l.d)(),j=Object(l.b)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function i(){var s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.b)(n?j:c,e,r);case 2:return s=a.sent,t(Object(d.a)(r)),a.abrupt("return",s);case 5:case"end":return a.stop()}}),i)}))),[r,t,e,c,j,n])}},f=function(e){var n=Object(o.c)().account,t=Object(l.d)(),c=Object(l.b)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function i(){var s;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.reduce((function(e,a){return a.isKingdom?[].concat(Object(r.a)(e),[Object(b.b)(c,a.pid,n)]):[].concat(Object(r.a)(e),[Object(b.b)(t,a.pid,n)])}),[]),a.abrupt("return",Promise.all(s));case 2:case"end":return a.stop()}}),i)}))),[n,e,t,c])}}},801:function(e,n,t){"use strict";var r=t(6),c=(t(0),t(788)),a=t(13);n.a=function(e){return Object(a.jsx)(c.a,Object(r.a)({fontSize:"16px",lineHeight:"1.5",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},802:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var r=t(4),c=t.n(r),a=t(110),i=function(e,n,t,r){var i=new c.a(n).times(r).times(a.b),s=new c.a(e).times(t),o=i.div(s).times(100);return o.isNaN()||!o.isFinite()?null:o.toNumber()},s=function(e,n,t,r){if(r){var i=a.e.times(e).times(n).div(t).times(100);return i.isNaN()||!i.isFinite()?null:i.toNumber()}var s=a.c.times(a.b).times(e),o=t.toNumber()?t:new c.a(0),u=s.times(n).div(o).times(100);return u.isNaN()||!u.isFinite()?null:u.toNumber()}},803:function(e,n,t){"use strict";var r=t(11);n.a=function(e){var n=e.quoteTokenAddress,t=e.tokenAddress,c=Object(r.s)(),a=n?n[56]:null,i=t?t[56]:null,s=i&&i!==c?i:"BNB";return"".concat(a&&a!==c?a:"BNB","/").concat(s)}},808:function(e,n,t){"use strict";var r=t(2),c=t.n(r),a=t(8),i=t(0),s=t(62),o=t(54),u=t(113),d=t(793),b=t(794);n.a=function(e,n){var t=Object(o.b)(),r=Object(s.c)().account,l=Object(b.d)(),j=Object(b.b)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var s;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.i)(n?j:l,e,i,r);case 2:s=c.sent,t(Object(u.a)(r)),console.info(s);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[r,t,l,e,j,n])}}},813:function(e,n,t){"use strict";t(0);var r=t(4),c=t.n(r),a=t(30),i=t(783),s=t(814),o=t(835),u=t(13);n.a=function(e){var n=e.aprApy,t=e.lpLabel,r=e.addLiquidityUrl,d=e.isDetails,b=Object(i.a)(),l=n.farmAPR,j=n.apr,f=n.pcsCompounding,p=n.pcsApr,O=n.dailyAPR,h=n.farmAPY,x=n.totalAPYString,m=n.cakePrice;return d?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.s,{justifyContent:"space-between",children:[Object(u.jsxs)(a.M,{color:"warning",children:[b(354,"Total APY"),":"]}),Object(u.jsxs)(a.M,{bold:!0,color:"warning",children:[x,"%"]})]}),Object(u.jsxs)(a.s,{justifyContent:"space-between",children:[Object(u.jsxs)(a.M,{children:[b(354,"Farm APR"),":"]}),Object(u.jsx)(a.M,{children:"".concat(new c.a(p).toFixed(2),"% (").concat(new c.a(O).toFixed(3),"%)")})]}),Object(u.jsxs)(a.s,{justifyContent:"space-between",children:[Object(u.jsxs)(a.M,{children:[b(354,"Compounds / year"),":"]}),Object(u.jsxs)(a.M,{children:["~",f]})]}),Object(u.jsxs)(a.s,{justifyContent:"space-between",children:[Object(u.jsxs)(a.M,{children:[b(354,"Farm APY"),":"]}),Object(u.jsx)(s.a,{fontSize:"16px",value:h,decimals:2,unit:"%"})]}),Object(u.jsxs)(a.s,{justifyContent:"space-between",alignItems:"center",children:[Object(u.jsxs)(a.M,{children:[b(736,"CUB APR"),":"]}),Object(u.jsx)(a.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:j?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{lpLabel:t,addLiquidityUrl:r,cakePrice:m,apr:j}),l,"%"]}):Object(u.jsx)(a.J,{height:24,width:80})})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.s,{justifyContent:"space-between",children:[Object(u.jsxs)(a.M,{color:"warning",children:[b(354,"Total APY"),":"]}),Object(u.jsxs)(a.M,{bold:!0,color:"warning",children:[x,"%"]})]}),Object(u.jsxs)(a.s,{justifyContent:"space-between",children:[Object(u.jsxs)(a.M,{children:[b(354,"Farm APY"),":"]}),Object(u.jsx)(s.a,{fontSize:"16px",value:h,decimals:2,unit:"%"})]}),Object(u.jsxs)(a.s,{justifyContent:"space-between",alignItems:"center",children:[Object(u.jsxs)(a.M,{children:[b(736,"CUB APR"),":"]}),Object(u.jsx)(a.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:j?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.a,{lpLabel:t,addLiquidityUrl:r,cakePrice:m,apr:j}),l,"%"]}):Object(u.jsx)(a.J,{height:24,width:80})})]})]})}},814:function(e,n,t){"use strict";var r=t(0),c=t(800),a=t.n(c),i=t(30),s=t(13),o=function(e){var n=e.value,t=e.fontSize,c=e.color,o=e.decimals,u=e.isDisabled,d=e.unit,b=e.bold,l=Object(r.useRef)(0);return Object(r.useEffect)((function(){l.current=n}),[n]),Object(s.jsxs)(i.M,{bold:b,color:u?"textDisabled":c,fontSize:t,children:[Object(s.jsx)(a.a,{start:l.current,end:n,decimals:o,duration:1,separator:","}),n&&d&&Object(s.jsx)("span",{children:d})]})};o.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3},n.a=o},815:function(e,n,t){"use strict";var r=t(2),c=t.n(r),a=t(8),i=t(0),s=t(62),o=t(54),u=t(113),d=t(793),b=t(794);n.a=function(e,n){var t=Object(o.b)(),r=Object(s.c)().account,l=Object(b.d)(),j=Object(b.b)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var s;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.j)(n?j:l,e,i,r);case 2:s=c.sent,t(Object(u.a)(r)),console.info(s);case 5:case"end":return c.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),[r,t,l,e,j,n])}}},816:function(e,n,t){"use strict";var r=t(2),c=t.n(r),a=t(8),i=t(38),s=t(4),o=t.n(s),u=t(0),d=t(30),b=t(876),l=t(879),j=t(783),f=t(213),p=t(13);n.a=function(e){var n=e.max,t=e.onConfirm,r=e.onDismiss,s=e.tokenName,O=void 0===s?"":s,h=e.addLiquidityUrl,x=e.isTokenOnly,m=e.isKingdomToken,v=Object(u.useState)(""),g=Object(i.a)(v,2),w=g[0],k=g[1],y=Object(u.useState)(!1),C=Object(i.a)(y,2),M=C[0],S=C[1],P=Object(j.a)(),F=Object(u.useMemo)((function(){return Object(f.b)(n)}),[n]),H=new o.a(w),A=new o.a(F),D=Object(u.useCallback)((function(e){e.currentTarget.validity.valid&&k(e.currentTarget.value.replace(/,/g,"."))}),[k]),z=Object(u.useCallback)((function(){k(F)}),[F,k]);return Object(p.jsxs)(d.E,{title:P(1068,x||m?"Stake tokens":"Stake LP tokens"),onDismiss:r,children:[Object(p.jsx)(l.a,{value:w,onSelectMax:z,onChange:D,max:F,symbol:O,addLiquidityUrl:h,inputTitle:P(1070,"Stake")}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d.h,{variant:"secondary",onClick:r,width:"100%",disabled:M,children:P(462,"Cancel")}),Object(p.jsx)(d.h,{width:"100%",disabled:M||!H.isFinite()||H.eq(0)||H.gt(A),onClick:Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,t(w);case 3:S(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:M?P(488,"Pending Confirmation"):P(464,"Confirm")})]}),Object(p.jsxs)(d.z,{href:h,style:{alignSelf:"center"},children:[P(999,"Get")," ",O]})]})}},817:function(e,n,t){"use strict";var r=t(2),c=t.n(r),a=t(8),i=t(38),s=t(4),o=t.n(s),u=t(0),d=t(30),b=t(876),l=t(879),j=t(783),f=t(213),p=t(13);n.a=function(e){var n=e.onConfirm,t=e.onDismiss,r=e.max,s=e.tokenName,O=void 0===s?"":s,h=e.isTokenOnly,x=e.isKingdomToken,m=Object(u.useState)(""),v=Object(i.a)(m,2),g=v[0],w=v[1],k=Object(u.useState)(!1),y=Object(i.a)(k,2),C=y[0],M=y[1],S=Object(j.a)(),P=Object(u.useMemo)((function(){return Object(f.b)(r)}),[r]),F=new o.a(g),H=new o.a(P),A=Object(u.useCallback)((function(e){e.currentTarget.validity.valid&&w(e.currentTarget.value.replace(/,/g,"."))}),[w]),D=Object(u.useCallback)((function(){w(P)}),[P,w]);return Object(p.jsxs)(d.E,{title:S(1126,h||x?"Unstake tokens":"Unstake LP tokens"),onDismiss:t,children:[Object(p.jsx)(l.a,{onSelectMax:D,onChange:A,value:g,max:P,symbol:O,inputTitle:S(588,"Unstake")}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d.h,{variant:"secondary",onClick:t,width:"100%",disabled:C,children:S(462,"Cancel")}),Object(p.jsx)(d.h,{disabled:C||!F.isFinite()||F.eq(0)||F.gt(H),onClick:Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,n(g);case 3:M(!1),t();case 5:case"end":return e.stop()}}),e)}))),width:"100%",children:C?S(488,"Pending Confirmation"):S(464,"Confirm")})]})]})}},835:function(e,n,t){"use strict";var r,c,a,i=t(38),s=(t(0),t(30)),o=t(47),u=t(3),d=t(783),b=function(e){var n=e.numberOfDays,t=e.farmApr,r=e.tokenPrice,c=e.roundingDecimals,a=void 0===c?2:c,i=e.compoundFrequency,s=365*(void 0===i?1:i),o=t/100,u=n/365,d=1e3/r,b=d*Math.pow(1+o/s,s*u);return parseFloat((b-d).toFixed(a))},l=function(e){return e.amountEarned/e.amountInvested*100},j=t(13),f=u.e.div(r||(r=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),p=u.e.div(c||(c=Object(o.a)(["\n  margin-bottom: '10px';\n"]))),O=Object(u.e)(s.M)(a||(a=Object(o.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),h=function(e){var n=e.onDismiss,t=e.tokenPrice,r=e.apr,c=e.linkLabel,a=e.linkHref,i=e.earningTokenSymbol,o=void 0===i?"CUB":i,u=e.roundingDecimals,h=void 0===u?2:u,x=e.compoundFrequency,m=void 0===x?1:x,v=Object(d.a)(),g=1e3/t,w=b({numberOfDays:1,farmApr:r,tokenPrice:t,roundingDecimals:h,compoundFrequency:m}),k=b({numberOfDays:7,farmApr:r,tokenPrice:t,roundingDecimals:h,compoundFrequency:m}),y=b({numberOfDays:30,farmApr:r,tokenPrice:t,roundingDecimals:h,compoundFrequency:m}),C=b({numberOfDays:365,farmApr:r,tokenPrice:t,roundingDecimals:h,compoundFrequency:m});return Object(j.jsxs)(s.E,{title:"ROI",onDismiss:n,children:[Object(j.jsxs)(f,{children:[Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:v(860,"Timeframe")})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:v(858,"ROI")})}),Object(j.jsx)(p,{children:Object(j.jsxs)(s.M,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:[o," ",v(999,"per")," $1000"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:"1d"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(s.M,{children:[l({amountEarned:w,amountInvested:g}).toFixed(h),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:w})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:"7d"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(s.M,{children:[l({amountEarned:k,amountInvested:g}).toFixed(h),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:k})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:"30d"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(s.M,{children:[l({amountEarned:y,amountInvested:g}).toFixed(h),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:y})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:"365d(APY)"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(s.M,{children:[l({amountEarned:C,amountInvested:g}).toFixed(h),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(s.M,{children:C})})]}),Object(j.jsx)(O,{fontSize:"12px",color:"textSubtle",children:v(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(j.jsx)(s.s,{justifyContent:"center",children:Object(j.jsx)(s.z,{href:a,children:c})})]})};n.a=function(e){var n=e.lpLabel,t=e.cakePrice,r=e.apr,c=e.addLiquidityUrl,a=Object(d.a)(),o=Object(s.U)(Object(j.jsx)(h,{linkLabel:"".concat(a(999,"Get")," ").concat(n),tokenPrice:t.toNumber(),apr:r,linkHref:c})),u=Object(i.a)(o,1)[0];return Object(j.jsx)(s.v,{onClick:function(e){e.stopPropagation(),u()},variant:"text",scale:"sm",ml:"4px",children:Object(j.jsx)(s.k,{width:"18px"})})}},843:function(e,n,t){"use strict";var r=t(110),c=t(802),a=t(213),i=t(75),s=t(4),o=t.n(s);n.a=function(e,n,t,s,u,d,b,l){var j,f=Object(i.f)("0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"),p=null;if(e){j=n?Object(c.b)(t,t,Object(a.a)(new o.a(b).times(r.d),18),parseFloat("10")):Object(c.a)(s,new o.a(f),new o.a(l),e);var O=new o.a(j).div(new o.a(365)).toNumber(),h=100*(Math.pow(j/100/u+1,u)-1),x=d?d+h:h,m=x&&x.toLocaleString("en-US",{maximumFractionDigits:2});p={pcsApr:j,dailyAPR:O,farmAPY:h,totalAPY:x,totalAPYString:m}}return p}},876:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r,c,a,i=t(47),s=t(0),o=t.n(s),u=t(3),d=t(13),b=u.e.div(r||(r=Object(i.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),l=function(e){var n,t=e.size,r=void 0===t?"md":t,c=Object(s.useContext)(u.a).spacing;switch(r){case"lg":n=c[6];break;case"sm":n=c[2];break;case"md":default:n=c[4]}return Object(d.jsx)(b,{size:n})},j=u.e.div(c||(c=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),f=u.e.div(a||(a=Object(i.a)(["\n  flex: 1;\n"]))),p=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(d.jsx)(j,{children:o.a.Children.map(n,(function(e,n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{children:e}),n<t-1&&Object(d.jsx)(l,{})]})}))})}},877:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r,c,a=t(6),i=t(362),s=t(47),o=(t(0),t(3)),u=t(30),d=t(360),b=t(13),l=Object(o.e)(u.g)(r||(r=Object(s.a)(["\n  background: ",";\n"])),(function(e){var n=e.theme;return e.background||n.colors.gradients.bubblegum})),j=Object(o.e)(d.a)(c||(c=Object(s.a)(["\n  padding-top: 16px;\n  padding-bottom: 32px;\n"]))),f=function(e){var n=e.background,t=e.children,r=Object(i.a)(e,["background","children"]);return Object(b.jsx)(l,Object(a.a)(Object(a.a)({background:n},r),{},{children:Object(b.jsx)(j,{children:t})}))}},878:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r,c=t(47),a=(t(0),t(3)),i=t(30),s=t(783),o=t(13),u=a.e.div(r||(r=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),d=function(e){var n=e.onClick,t=e.expanded,r=e.onlyArrow,c=(Object(s.a)(),null);return r||(c=Object(o.jsx)(i.M,{color:"primary",bold:!0,children:t?"Hide":"Details"})),Object(o.jsxs)(u,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[c,t?Object(o.jsx)(i.p,{}):Object(o.jsx)(i.o,{})]})};d.defaultProps={expanded:!1};var b=d},879:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r,c,a,i=t(47),s=(t(0),t(3)),o=t(30),u=t(783),d=t(13),b=s.e.div(r||(r=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var n=e.isWarning,t=void 0!==n&&n,r=e.theme;return t?r.shadows.warning:r.shadows.inset}),(function(e){return e.theme.colors.text})),l=Object(s.e)(o.x)(c||(c=Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),j=Object(s.e)(o.M)(a||(a=Object(i.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),f=function(e){var n=e.max,t=e.symbol,r=e.onChange,c=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,s=e.inputTitle,f=Object(u.a)(),p="0"===n||!n;return Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsxs)(b,{isWarning:p,children:[Object(d.jsxs)(o.s,{justifyContent:"space-between",pl:"16px",children:[Object(d.jsx)(o.M,{fontSize:"14px",children:s}),Object(d.jsxs)(o.M,{fontSize:"14px",children:[f(1120,"Balance"),": ",function(e){if(p)return"0";var n=Number(e);return n>0&&n<1e-4?n.toLocaleString(void 0,{maximumFractionDigits:20}):n.toLocaleString()}(n)]})]}),Object(d.jsxs)(o.s,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(d.jsx)(l,{pattern:"^[0-9]*[.,]?[0-9]*$",inputMode:"decimal",step:"any",min:"0",onChange:r,placeholder:"0",value:a}),Object(d.jsx)(o.h,{scale:"sm",onClick:c,mr:"8px",children:f(452,"Max")}),Object(d.jsx)(o.M,{fontSize:"16px",children:t})]})]}),p&&Object(d.jsxs)(j,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(d.jsxs)(o.y,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:[f(999,"get")," ",t]})]})]})}}}]);
//# sourceMappingURL=1.ba02823f.chunk.js.map