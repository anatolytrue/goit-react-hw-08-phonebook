"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[451],{2639:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(8494),r="Loader_iconSpin__GgXJ2",o="Loader_loader__P8ijB",s=t(184);function i(){return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)(a.crq,{size:"16",className:r}),"Loading..."]})}},2451:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(885),r=t(2791),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},s=t(8355),i="ContactForm_phonebookForm__qlYQz",c="ContactForm_phonebookLabel__pbLV3",u="ContactForm_phonebookInput__+1oiZ",l="ContactForm_phonebookBtnAdd__tkTMc",d=t(2639),m=t(184);function h(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],h=n[1],p=(0,r.useState)(""),_=(0,a.Z)(p,2),f=_[0],b=_[1],x=(0,s.Jx)().data,C=(0,s.Tn)(),v=(0,a.Z)(C,2),j=v[0],g=v[1].isLoading,k=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":h(a);break;case"phone":b(a);break;default:return}},L=function(){h(""),b("")};return(0,m.jsx)("form",{className:i,onSubmit:function(e){e.preventDefault(),function(e){var n=e.name,t=e.phone,a={id:o(),name:n,phone:t};x.find((function(e){return a.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(a.name," is already in contacts")):j(a)&&L()}({name:t,phone:f})},children:(0,m.jsxs)("label",{className:c,children:["Name",(0,m.jsx)("input",{className:u,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:k,required:!0}),(0,m.jsx)("input",{type:"tel",name:"phone",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:k}),(0,m.jsx)("button",{type:"submit",className:l,children:g?(0,m.jsx)(d.Z,{}):"Add contact"})]})})}var p="ContactList_phonebookContactList__kpSVp",_="ContactList_phonebookContactListItem__0drQC",f="ContactList_phonebookContactListBtn__CfZrR";function b(e){var n=e.contactId,t=e.name,r=e.number,o=(0,s.Nt)(),i=(0,a.Z)(o,2),c=i[0],u=i[1].isLoading;return(0,m.jsxs)("li",{className:_,children:[(0,m.jsxs)("p",{children:[t," : ",r]}),(0,m.jsx)("button",{type:"button",onClick:function(){return function(e){return c(e)}(n)},className:f,disabled:u,children:u?(0,m.jsx)(d.Z,{}):"Delete"})]})}function x(e){var n=e.filter,t=(0,s.Jx)().data,a=function(){var e=n.toLowerCase().trim();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return console.log(a),(0,m.jsx)("ul",{className:p,children:a.map((function(e){var n=e.id,t=e.name,a=e.phone;return(0,m.jsx)(b,{name:t,number:a,contactId:n},n)}))})}var C="Filter_filterInput__HtQxw",v="Filter_phonebookFilterLabel__GI5xv";var j=function(e){var n=e.filter,t=e.handleChange;return(0,m.jsxs)("label",{className:v,children:["Filter by name",(0,m.jsx)("input",{className:C,name:"filter",type:"text",value:n,onChange:t,placeholder:"name surname"})]})};function g(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],o=n[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(j,{filter:t,handleChange:function(e){o(e)}}),(0,m.jsx)(x,{filter:t})]})}}}]);
//# sourceMappingURL=451.4033e73a.chunk.js.map