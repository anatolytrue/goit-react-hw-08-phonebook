"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[812],{2812:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(885),o=n(2791),r=n(8355),s="ContactForm_phonebookForm__qlYQz",i="ContactForm_phonebookLabel__pbLV3",c="ContactForm_phonebookInput__+1oiZ",l="ContactForm_phonebookBtnAdd__tkTMc",u=n(2181),d=n(5206),p=n(184);function m(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],m=t[1],h=(0,o.useState)(""),_=(0,a.Z)(h,2),f=_[0],C=_[1],b=(0,r.Jx)().data,v=(0,r.Tn)(),x=(0,a.Z)(v,2),g=x[0],j=x[1],k=j.isLoading,L=j.isSuccess,w=j.isError,y=j.error,N=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"phone":C(a)}};return(0,o.useEffect)((function(){L&&d.Am.success("Contact added successfully",{position:"top-center",autoClose:3e3}),w&&404===(null===y||void 0===y?void 0:y.originalStatus)?d.Am.error("Sorry, we can't find this page",{position:"top-center",autoClose:3e3}):w&&"FETCH_ERROR"===(null===y||void 0===y?void 0:y.status)?d.Am.error("Internet is disconnected",{position:"top-center",autoClose:3e3}):w&&d.Am.error("Something went wrong, please try again later",{position:"top-center",autoClose:3e3})}),[L,w,null===y||void 0===y?void 0:y.originalStatus,null===y||void 0===y?void 0:y.status]),(0,p.jsx)("form",{className:s,onSubmit:function(e){e.preventDefault(),b.some((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):g({name:n,phone:f}),m(""),C("")},children:(0,p.jsxs)("label",{className:i,children:["Name",(0,p.jsx)("input",{className:c,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:N,required:!0}),(0,p.jsx)("input",{type:"tel",name:"phone",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:N}),(0,p.jsx)("button",{type:"submit",className:l,children:k?(0,p.jsx)(u.Z,{}):"Add contact"})]})})}var h="ContactList_phonebookContactList__kpSVp",_="ContactList_phonebookContactListItem__0drQC",f="ContactList_phonebookContactListBtn__CfZrR";function C(e){var t=e.contactId,n=e.name,o=e.number,s=(0,r.Nt)(),i=(0,a.Z)(s,2),c=i[0],l=i[1].isLoading;return(0,p.jsxs)("li",{className:_,children:[(0,p.jsxs)("p",{children:[n," : ",o]}),(0,p.jsx)("button",{type:"button",onClick:function(){return function(e){return c(e)}(t)},className:f,disabled:l,children:l?(0,p.jsx)(u.Z,{}):"Delete"})]})}function b(e){var t=e.filter,n=(0,r.Jx)().data,a=function(){var e=t.toLowerCase().trim();return null===n||void 0===n?void 0:n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return console.log(a),(0,p.jsx)("ul",{className:h,children:a.map((function(e){var t=e.id,n=e.name,a=e.phone;return(0,p.jsx)(C,{name:n,number:a,contactId:t},t)}))})}var v="Filter_filterInput__HtQxw",x="Filter_phonebookFilterLabel__GI5xv";var g=function(e){var t=e.filter,n=e.handleChange;return(0,p.jsxs)("label",{className:x,children:["Filter by name",(0,p.jsx)("input",{className:v,name:"filter",type:"text",value:t,onChange:n,placeholder:"name surname"})]})};function j(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,p.jsxs)("div",{children:[(0,p.jsx)(m,{}),(0,p.jsx)("h2",{children:"Contacts"}),(0,p.jsx)(g,{filter:n,handleChange:function(e){r(e)}}),(0,p.jsx)(b,{filter:n})]})}}}]);
//# sourceMappingURL=812.b82d34c7.chunk.js.map