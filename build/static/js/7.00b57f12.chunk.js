(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[7],{1057:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ze}));var c=n(5),a=n(47),i=n(0),r=n(39),s=n(31),o=n(54),l=n(4),d=n.n(l),j=n(62),b=n(3),u=n(221),x=n(879),p=n(75),O=n(134),m=n(113),h=n(806),f=n(230),g=n(35),k=n(216),w=n(76),v=function(e){var t,n=e.apr,c=e.isKingdom,a=(e.isKingdomToken,e.tokenPriceVsQuote,e.poolWeightPCS),i=e.compounding,r=e.lpTokenBalancePCS,s=void 0===r?0:r,o=e.lpTotalInQuoteTokenPCS,l=void 0===o?0:o,j=e.quoteToken.busdPrice,b=e.altPid,u=e.farmType,x=e.beltAPR,O=(e.beltRate,Object(p.b)(0)),m=Object(p.a)("BAKE-BNB LP"),f=Object(p.a)("BELT-BNB LP"),g=Object(p.c)(b);if(12===b){var v=new d.a(g.lpTotalInQuoteToken).times(g.quoteToken.busdPrice);t=Object(h.a)(g.poolWeight,g.tokenPriceVsQuote,v);var y=new d.a(t).div(new d.a(365)).toNumber(),B=100*(Math.pow(t/100/i+1,i)-1),C=B,P=C&&C.toLocaleString("en-US",{maximumFractionDigits:2});return{pcsApr:t,dailyAPR:y,farmAPY:B,totalAPY:C,totalAPYString:P,newMultiplier:g.multiplier}}if("CAKE"===e.lpSymbol)t=Object(h.b)(Number(e.token.busdPrice),Number(e.token.busdPrice),Object(k.b)(new d.a(s).times(w.i),18),parseFloat("10"));else{var A=new d.a(l).times(j),M=O;"Bakery"===u?M=m:"Belt"===u&&(M=f),t="Belt"===u?Number(x):Object(h.a)(new d.a(a),M,A,c,u)}var T=t?new d.a(t).div(new d.a(365)).toNumber():new d.a(0).toNumber(),S=100*(Math.pow(t/100/i+1,i)-1),N=n?n+S:S,U=N&&N.toLocaleString("en-US",{maximumFractionDigits:2});return{pcsApr:t,dailyAPR:T,farmAPY:S,totalAPY:N,totalAPYString:U}},y=n(804),B=n.n(y),C=n(13),P=function(e){var t=e.value,n=e.fontSize,c=e.color,a=e.decimals,r=e.isDisabled,o=e.unit,l=e.bold,d=Object(i.useRef)(0);return Object(i.useEffect)((function(){d.current=t}),[t]),Object(C.jsxs)(s.M,{bold:l,color:r?"textDisabled":c,fontSize:n,children:[Object(C.jsx)(B.a,{start:d.current,end:t,decimals:a,duration:1,separator:","}),t&&o&&Object(C.jsx)("span",{children:o})]})};P.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var A,M,T,S,N,U,L,z,F,K,Q,R,D,q,V,I,Y,W,E,J,$=P,G=n(787),H=n(838),X=function(e){var t=e.aprApy,n=e.lpLabel,c=e.addLiquidityUrl,a=Object(G.a)(),i=t.farmAPR,r=t.apr,o=t.compounding,l=t.pcsApr,j=t.dailyAPR,b=t.farmAPY,u=t.totalAPYString,x=t.cakePrice;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsxs)(s.M,{color:"warning",children:[a(354,"Total APY"),":"]}),Object(C.jsxs)(s.M,{bold:!0,color:"warning",children:[u,"%"]})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsxs)(s.M,{children:[a(354,"Farm APR"),":"]}),Object(C.jsx)(s.M,{children:"".concat(new d.a(l).toFixed(2),"% (").concat(new d.a(j).toFixed(3),"%)")})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsxs)(s.M,{children:[a(354,"Compounds / year"),":"]}),Object(C.jsxs)(s.M,{children:["~",o]})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsxs)(s.M,{children:[a(354,"Farm APY"),":"]}),Object(C.jsx)($,{fontSize:"16px",value:b,decimals:2,unit:"%"})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsxs)(s.M,{children:[a(736,"CUB APR"),":"]}),Object(C.jsx)(s.M,{bold:!0,style:{display:"flex",alignItems:"center"},children:r?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(H.a,{lpLabel:n,addLiquidityUrl:c,cakePrice:x,apr:r}),i||r.toLocaleString("en-US",{maximumFractionDigits:2}),"%"]}):Object(C.jsx)(s.J,{height:24,width:80})})]})]})},Z=n(807),_=n(1),ee=n.n(_),te=n(6),ne=n(805),ce=n(819),ae=n(820),ie=n(812),re=n(818),se=n(802),oe=n(817),le=n(58),de=n(11),je=n(792),be=(n(898),b.e.div(A||(A=Object(a.a)(["\n  align-self: baseline;\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  /*padding: 6px 12px;*/\n  position: relative;\n  margin-top: 0.5rem;\n  margin-bottom: 1rem;\n"])),(function(e){return e.theme.card.background}))),ue=Object(b.e)(s.h)(M||(M=Object(a.a)(["\n  height: 40px;\n  margin-top: 0.3rem;\n  display: block;\n"]))),xe=b.e.div(T||(T=Object(a.a)(["\n  display: flex;\n"]))),pe=b.e.span(S||(S=Object(a.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),Oe=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,o=e.walletBalanceQuoteValue,l=e.depositBalanceQuoteValue,j=e.addLiquidityUrl,b=e.account,u=Object(r.f)(),x=Object(i.useState)(!1),O=Object(g.a)(x,2),m=O[0],h=O[1],f=Object(i.useState)(!1),k=Object(g.a)(f,2),w=k[0],v=k[1],y=t.pid,B=t.isTokenOnly,P=t.isKingdom,A=t.isKingdomToken,M=t.lpSymbol,T=t.lpAddresses,S=t.token.address,N=M.toUpperCase(),U=t.userData||{},L=U.allowance,z=void 0===L?0:L,F=U.tokenBalance,K=void 0===F?0:F,Q=U.stakedBalance,R=void 0===Q?0:Q,D=new d.a(z),q=new d.a(K),V=new d.a(R),I=Object(p.j)(),Y=a?new d.a(a).multipliedBy(I).toNumber():0,W=Object(je.a)(),E=Object(ie.a)(y,P).onStake,J=Object(re.a)(y,P).onUnstake,G=Object(se.b)(y,P).onReward,H=b&&D&&D.isGreaterThan(0),X=Object(s.U)(Object(C.jsx)(ce.a,{max:q,onConfirm:E,tokenName:N,addLiquidityUrl:j,isTokenOnly:B,isKingdomToken:A})),Z=Object(g.a)(X,1)[0],_=Object(s.U)(Object(C.jsx)(ae.a,{max:V,onConfirm:J,tokenName:N,isTokenOnly:B,isKingdomToken:A})),Oe=Object(g.a)(_,1)[0],me=Object(de.a)(T),he=Object(de.a)(S),fe=Object(i.useMemo)((function(){return B||A?Object(le.a)(he,W):Object(le.a)(me,W)}),[me,B,W,he,A]),ge=Object(oe.a)(fe,P).onApprove,ke=Object(i.useCallback)(Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,ge();case 4:h(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[ge]),we=Object(C.jsx)(ue,{mt:"8px",disabled:m||u.pathname.includes("archived"),onClick:ke,children:"Approve Contract"});return Object(C.jsx)(be,{children:Object(C.jsx)("div",{className:"k-card",children:Object(C.jsxs)("div",{className:"flex-grid",children:[Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)(s.s,{justifyContent:"space-between",children:Object(C.jsx)(s.M,{children:"Balance (Wallet)"})}),Object(C.jsxs)(xe,{children:[Object(C.jsx)($,{fontSize:"16px",value:n,decimals:n?3:2,unit:""}),"\xa0",Object(C.jsx)(pe,{children:"("}),Object(C.jsx)(ne.a,{value:o}),Object(C.jsx)(pe,{children:")"})]}),H?Object(C.jsx)(ue,{mt:"8px",fullWidth:!0,onClick:Z,children:"Deposit"}):we]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)(s.s,{justifyContent:"space-between",children:Object(C.jsx)(s.M,{children:"Deposit (Staked)"})}),Object(C.jsxs)(xe,{children:[Object(C.jsx)($,{fontSize:"16px",value:c,decimals:c?3:2,unit:""}),"\xa0",Object(C.jsx)(pe,{children:"("}),Object(C.jsx)(ne.a,{value:l}),Object(C.jsx)(pe,{children:")"})]}),H?Object(C.jsx)(ue,{mt:"8px",fullWidth:!0,onClick:Oe,children:"Withdraw"}):we]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)(s.M,{children:"CUB Rewards"}),Object(C.jsxs)(xe,{children:[Object(C.jsx)($,{fontSize:"16px",value:a,decimals:a?3:2,unit:""}),"\xa0",Object(C.jsx)(pe,{children:"("}),Object(C.jsx)(ne.a,{value:Y}),Object(C.jsx)(pe,{children:")"})]}),Object(C.jsx)(ue,{disabled:0===a||w||!H,onClick:Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,G();case 3:v(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})]})]})})})},me=(Object(b.e)(s.h)(N||(N=Object(a.a)(["\n  height: 36px;\n  font-size: 1rem;\n  padding: 0 12px;\n"]))),b.e.div(U||(U=Object(a.a)(["\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  /*padding-left: 0.8rem;\n  padding-right: 0.8rem;*/\n  /*font-size: 0.95rem*/\n"])))),he=b.e.div(L||(L=Object(a.a)(["\n  /*display: inline;\n  margin-right: 1rem;*/\n  /*& div {\n    font-family: Arial;\n    font-size: 0.8rem;\n    padding: 2px;\n  }*/\n  &:nth-child(1) {\n    width: 25%\n  }\n  &:nth-child(2) {\n    width: 33%\n  }\n"]))),fe=b.e.div(z||(z=Object(a.a)(["\n  /*background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);*/\n"])),(function(e){return e.theme.card.background})),ge=Object(b.e)(s.y)(F||(F=Object(a.a)(["\n  font-weight: 400;\n"]))),ke=b.e.div(K||(K=Object(a.a)(["\n  color: ",";\n  margin-top: 0.2rem;\n"])),(function(e){return e.theme.colors.text})),we=function(e){var t=e.farm,n=e.walletBalance,c=e.depositBalance,a=e.rewardBalance,i=e.walletBalanceQuoteValue,r=e.depositBalanceQuoteValue,o=e.farmName,l=e.oneTokenQuoteValue,d=e.removed,j=e.aprApy,b=e.account,u=l&&"NaN"!==l.toString()?"~$".concat(l.times(w.i).toFixed(2)):"-",x=t.lpSymbol,p=t.multiplier,O=t.quoteToken,m=t.token,h=t.lpAddresses,f=t.isTokenOnly,g=t.isKingdomToken,k=t.kingdomContract,v=t.altPid,y=x&&x.toUpperCase().replace("PANCAKE",""),B=Object(Z.a)({quoteTokenAddress:O.address,tokenAddress:m.address}),P=h[56],A=m.address[56],M="https://bscscan.com/token/".concat(f||g?A:P),T="https://bscscan.com/token/".concat(k),S="https://pancakeswap.info/pair/".concat(f?A:P),N=w.k,U="".concat(w.d,"/#/swap"),L="".concat(N,"/").concat(B);"Bakery"===t.farmType?(N=w.a,L="".concat(N,"/").concat(B),S="https://info.bakeryswap.org/#/pair/".concat(f?A:P)):"Belt"===t.farmType&&(L=N=w.e,U=N,S=N);var z=p;return j.newMultiplier&&(z="".concat(j.newMultiplier,"*")),Object(C.jsxs)(fe,{children:[Object(C.jsx)(Oe,{farm:t,walletBalance:n,depositBalance:c,rewardBalance:a,walletBalanceQuoteValue:i,depositBalanceQuoteValue:r,addLiquidityUrl:L,account:b}),Object(C.jsxs)(me,{className:"k-details",children:[Object(C.jsxs)(he,{children:[Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsxs)(s.M,{children:[x,":"]}),Object(C.jsxs)(s.M,{children:["(",u,")"]})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"Multiplier:"}),Object(C.jsx)(s.M,{children:z})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"Type:"}),Object(C.jsx)(s.M,{children:"Auto-compound"})]}),12===v?Object(C.jsx)(ke,{children:"*CUB Kingdom multiplier coexists with CUB Den multiplier"}):Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"Farm:"}),Object(C.jsx)(s.M,{children:o})]})]}),Object(C.jsx)(he,{children:Object(C.jsx)(X,{aprApy:j,lpLabel:y,addLiquidityUrl:L})}),Object(C.jsxs)(he,{children:[Object(C.jsx)(ge,{external:!0,href:M,children:"Farm Contract"}),Object(C.jsx)(ge,{external:!0,href:T,children:"Kingdom Contract"}),!d&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ge,{external:!0,href:U,children:"Buy ".concat(m.symbol)}),Object(C.jsx)(ge,{external:!0,href:L,children:"Add Liquidity"})]}),Object(C.jsx)(ge,{external:!0,href:S,children:"See Token Info"})]})]})]})},ve=b.e.div(Q||(Q=Object(a.a)(["\n  background-color: ",";\n  opacity: 0.2;\n  height: 1px;\n  margin: 12px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.primary})),ye=b.e.div(R||(R=Object(a.a)(["\n  height: 1px;\n  margin: 12px auto;\n  width: 100%;\n"]))),Be=b.e.div(D||(D=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Ce=b.e.div(q||(q=Object(a.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 8px;\n  box-shadow: 0 3px 4px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 0.4rem 0.8rem;\n  position: relative;\n"])),(function(e){return e.theme.card.background})),Pe=Object(b.f)(V||(V=Object(a.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),Ae=b.e.div(I||(I=Object(a.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 8px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Pe),Me=Object(b.e)(s.w)(Y||(Y=Object(a.a)(["\n  width: 64px;\n"]))),Te=b.e.div(W||(W=Object(a.a)(["\n  cursor: pointer;\n"]))),Se=function(e){var t=e.farm,n=e.removed,a=e.cakePrice,r=e.account,o=Object(i.useState)(!1),l=Object(g.a)(o,2),j=l[0],b=l[1],u=t.apr,x=t.lpTotalInQuoteToken,O=t.lpSymbol,m=t.lpTokenBalancePCS,h=void 0===m?0:m,f=t.lpTotalInQuoteTokenPCS,y=void 0===f?0:f,B=t.quoteToken.busdPrice,P=t.altPid,A=t.farmType,M=O.split(" ")[0].toLocaleLowerCase(),T=v(t),S=T,N=S.dailyAPR,U=S.totalAPY,L=S.pcsApr,z=t.userData,F=z.tokenBalance,K=z.stakedBalance,Q=z.earnings,R=F?Object(k.b)(new d.a(F)):0,D=K?Object(k.b)(new d.a(K)):0,q=Q?Object(k.b)(new d.a(Q)):0,V=Object(p.a)(t.lpSymbol),I=new d.a(0);I=t.isKingdomToken?"Belt"!==t.farmType?V.div(w.i):new d.a(t.token.busdPrice).div(w.i):y?new d.a(y).div(new d.a(h)).times(B).div(w.i):new d.a(0);var Y=F?new d.a(F).times(I).toNumber():0,W=K?new d.a(K).times(I).toNumber():0,E=x?"$".concat(Number(new d.a(x).times(B)).toLocaleString(void 0,{maximumFractionDigits:0})):"-",J=u&&u.toLocaleString("en-US",{maximumFractionDigits:2});return T=Object(c.a)(Object(c.a)({},T),{},{compounding:t.compounding,farmAPR:J,apr:12===P?L:t.apr,cakePrice:a,quoteTokenPriceUsd:Number(B),lpTotalInQuoteToken:x}),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ye,{}),Object(C.jsxs)(Ce,{children:["CUB"===t.token.symbol&&Object(C.jsx)(Ae,{}),Object(C.jsxs)(Te,{role:"presentation",className:"flex-grid k-grid",onClick:function(){return b(!j)},children:[Object(C.jsx)("div",{className:"col",children:Object(C.jsx)(Me,{src:"/images/farms/".concat(M,".png"),alt:O,width:64,height:64})}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)(s.s,{justifyContent:"flex-start",alignItems:"center",children:Object(C.jsx)(s.M,{className:"token",children:O})}),Object(C.jsxs)(s.M,{children:["Uses: ",A]}),Object(C.jsxs)(s.M,{children:["TVL ",E]})]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)($,{fontSize:"16px",value:R,decimals:R?2:1,unit:""}),Object(C.jsx)(s.M,{children:"Balance"})]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)($,{fontSize:"16px",value:D,decimals:D?2:1,unit:""}),Object(C.jsx)(s.M,{children:"Deposited"})]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)($,{fontSize:"16px",value:q,decimals:q?2:1,unit:""}),Object(C.jsx)(s.M,{children:"Rewards"})]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)($,{fontSize:"16px",value:U,decimals:2,unit:"%"}),Object(C.jsx)(s.M,{children:"APY"})]}),Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)($,{fontSize:"16px",value:N,decimals:2,unit:"%"}),Object(C.jsx)(s.M,{children:"Daily"})]})]}),Object(C.jsxs)(Be,{expanded:j,children:[Object(C.jsx)(ve,{}),Object(C.jsx)(we,{farm:t,walletBalance:R,depositBalance:D,rewardBalance:q,walletBalanceQuoteValue:Y,depositBalanceQuoteValue:W,farmName:A,oneTokenQuoteValue:I,removed:n,aprApy:T,account:r})]})]})]})},Ne=Object(b.e)(s.M)(E||(E=Object(a.a)(["\n  line-height: 1.5;\n\n"]))),Ue=function(e){var t=e.value,n=e.decimals,c=e.prefix,a=e.fontSize,r=void 0===a?"16px":a,s=Object(y.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),o=s.countUp,l=s.update,d=Object(i.useRef)(l);return Object(i.useEffect)((function(){d.current(t)}),[t,d]),Object(C.jsxs)(Ne,{fontSize:r,children:[c,o]})},Le=(n(899),b.e.div(J||(J=Object(a.a)(["\n  max-width: 400px;\n"])))),ze=function(){var e=Object(p.m)(),t=Object(r.f)().pathname,n=Object(p.e)(),a=n.data,l=(n.userDataLoaded,Object(p.j)()),b=Object(j.c)().account,g=Object(o.b)(),k=Object(O.a)().fastRefresh;Object(i.useEffect)((function(){b&&g(Object(m.a)(b))}),[b,g,k]);var w=t.includes("archived"),v=!t.includes("history")&&!w,y=a.filter((function(e){return e.isKingdom&&!Object(f.a)(e.pid)})),B=Object(i.useCallback)((function(e){return e.map((function(e){if(!e.lpTotalInQuoteToken)return e;var t=new d.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),n=v?Object(h.a)(e.poolWeight,l,t):0;return Object(c.a)(Object(c.a)({},e),{},{apr:n,liquidity:t})}))}),[l,v]),P=Object(i.useMemo)((function(){var e=[];return v&&(e=B(y)),e}),[y,B,v]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(x.a,{children:[Object(C.jsxs)("div",{className:"k-header",children:[Object(C.jsx)(s.t,{as:"h1",size:"xxl",color:"secondary",mb:"10px",children:"Kingdoms"}),Object(C.jsxs)(s.s,{children:[Object(C.jsx)(s.M,{bold:!0,fontSize:"24px",children:"TVL\xa0"}),Object(C.jsx)(Ue,{fontSize:"24px",value:e.toNumber(),prefix:"$",decimals:2})]})]}),Object(C.jsx)(s.t,{as:"h1",size:"lg",color:"primary",mb:"10px",style:{textAlign:"left"},children:"Composable Auto-Compounding"}),Object(C.jsx)(s.t,{as:"h2",color:"secondary",mb:"10px",style:{textAlign:"left"},children:"Stake tokens for cross-platform farming plus CUB rewards"}),Object(C.jsx)(s.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:"IMPORTANT: Must use the host farm exchange (eg. PCS, Bakery) for Kingdom LP tokens"}),Object(C.jsx)(s.t,{as:"h2",color:"warning",mb:"10px",style:{textAlign:"left"},children:"CertiK Audit is Pending: Our other contracts have been audited by CertiK and Kingdoms are currently under review. Please use at your own discretion until the audit has been published"}),Object(C.jsxs)(Le,{children:[Object(C.jsx)(s.t,{as:"h2",color:"secondary",mb:"5px",style:{textAlign:"left"},children:"Fees"}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"Fee for CUB Staking Kingdom BNB Dividends:"}),Object(C.jsx)(s.M,{children:"3%"})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"Management Fee:"}),Object(C.jsx)(s.M,{children:"7%"})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"CUB Burn Rate:"}),Object(C.jsx)(s.M,{children:"100% of Fees Buyback and Burn CUB"})]}),Object(C.jsxs)(s.s,{justifyContent:"space-between",children:[Object(C.jsx)(s.M,{children:"Withdrawal Fee:"}),Object(C.jsx)(s.M,{children:"None"})]})]})]}),Object(C.jsx)(u.a,{className:"k-container",children:Object(C.jsx)("div",{id:"kingdoms",children:P.map((function(e){return Object(C.jsx)(Se,{farm:e,cakePrice:l,account:b,removed:!1},e.pid)}))})})]})}},898:function(e,t,n){},899:function(e,t,n){}}]);
//# sourceMappingURL=7.00b57f12.chunk.js.map