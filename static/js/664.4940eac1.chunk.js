"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[664],{6664:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var i=t(5861),a=t(885),r=t(4687),o=t.n(r),s=t(5048),l=t(2791),d=t(8724),c=t(188),u=t(6015),v=t(9350),p=t(1898),m=t(9365),h=t(4420),f=t(8254),Z=t(3811),g=t(7205),b=t(6580),x=t(5286),w=t(9569),j=t(3710),y=t(393),z=t(184);function S(){var e=(0,l.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],S=(0,l.useState)(""),E=(0,a.Z)(S,2),M=E[0],P=E[1],k=(0,l.useState)(!1),L=(0,a.Z)(k,2),I=L[0],C=L[1],_=(0,s.I0)(),R=(0,d.OQ)(),A=(0,a.Z)(R,2),H=A[0],N=A[1],T=N.data,D=N.isLoading,q=N.isSuccess,F=N.isError,O=N.error,V=(0,y.Ds)().enqueueSnackbar,G=function(){var e=(0,i.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,H({email:t,password:M});case 3:_(H({email:t,password:M}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"email":return r(i);case"password":return P(i);default:return}};return(0,l.useEffect)((function(){q&&(_((0,c.qN)({user:{name:T.user.name,email:T.user.email},token:T.token})),V("You have logged in successfully",{variant:"success"})),F&&404===(null===O||void 0===O?void 0:O.originalStatus)?V("Sorry, we can't find this page",{variant:"error"}):F&&400===(null===O||void 0===O?void 0:O.status)?V("Invalid email or password",{variant:"error"}):F&&"FETCH_ERROR"===(null===O||void 0===O?void 0:O.status)?V("Internet is disconnected",{variant:"error"}):F&&V("Something went wrong, please try again later",{variant:"error"})}),[_,V,T,q,F,null===O||void 0===O?void 0:O.originalStatus,null===O||void 0===O?void 0:O.status]),(0,z.jsxs)(u.Z,{component:"form",onSubmit:G,sx:{padding:"2rem",maxWidth:"20rem",display:"grid",gridTemplateColumns:"1fr",gridGap:"0.3rem",alignItems:"baseline"},children:[(0,z.jsx)(v.Z,{label:"Mail",size:"small",margin:"normal",type:"email",name:"email",value:t,onChange:Q,required:!0}),(0,z.jsxs)(p.Z,{variant:"outlined",children:[(0,z.jsx)(m.Z,{htmlFor:"outlined-adornment-password",sx:{lineHeight:"2em"},children:"Password"}),(0,z.jsx)(h.Z,{id:"outlined-adornment-password",type:I?"text":"password",label:"Password",name:"password",value:M,onChange:Q,size:"small",endAdornment:(0,z.jsx)(f.Z,{position:"end",children:(0,z.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:function(){C(!I)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:I?(0,z.jsx)(w.Z,{}):(0,z.jsx)(j.Z,{})})}),sx:{m:"1rem 0",lineHeight:"4em"}})]}),(0,z.jsx)(g.Z,{variant:"contained",type:"submit",margin:"normal",sx:{width:"8 rem"},endIcon:D?(0,z.jsx)(b.Z,{size:16,thickness:4,color:"inherit"}):(0,z.jsx)(x.Z,{}),children:"LogIn"})]})}},5286:function(e,n,t){var i=t(4836);n.Z=void 0;var a=i(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M10.3 7.7c-.39.39-.39 1.01 0 1.4l1.9 1.9H3c-.55 0-1 .45-1 1s.45 1 1 1h9.2l-1.9 1.9c-.39.39-.39 1.01 0 1.4.39.39 1.01.39 1.4 0l3.59-3.59c.39-.39.39-1.02 0-1.41L11.7 7.7a.9839.9839 0 0 0-1.4 0zM20 19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v14z"}),"LoginRounded");n.Z=o},3710:function(e,n,t){var i=t(233),a=t(184);n.Z=(0,i.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,t){var i=t(233),a=t(184);n.Z=(0,i.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},8254:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(4942),a=t(3366),r=t(7462),o=t(2791),s=t(8182),l=t(4419),d=t(9853),c=t(4565),u=t(1211),v=t(529),p=t(277),m=t(5878),h=t(1217);function f(e){return(0,h.Z)("MuiInputAdornment",e)}var Z,g=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=t(5513),x=t(184),w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),y=o.forwardRef((function(e,n){var t=(0,b.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,p=t.className,m=t.component,h=void 0===m?"div":m,g=t.disablePointerEvents,y=void 0!==g&&g,z=t.disableTypography,S=void 0!==z&&z,E=t.position,M=t.variant,P=(0,a.Z)(t,w),k=(0,v.Z)()||{},L=M;M&&k.variant,k&&!L&&(L=k.variant);var I=(0,r.Z)({},t,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:y,position:E,variant:L}),C=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,a=e.position,r=e.size,o=e.variant,s={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,d.Z)(a)),o,i&&"hiddenLabel",r&&"size".concat((0,d.Z)(r))]};return(0,l.Z)(s,f,n)}(I);return(0,x.jsx)(u.Z.Provider,{value:null,children:(0,x.jsx)(j,(0,r.Z)({as:h,ownerState:I,className:(0,s.Z)(C.root,p),ref:n},P,{children:"string"!==typeof i||S?(0,x.jsxs)(o.Fragment,{children:["start"===E?Z||(Z=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,x.jsx)(c.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=664.4940eac1.chunk.js.map