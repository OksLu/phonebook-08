"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[393],{8393:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var a=t(2791),r=t(184),s=function(e){var n=e.children,t=e.closeModal;(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);return(0,r.jsx)("div",{onClick:function(e){"DIV"===e.target.nodeName&&t()},className:"overlay",children:(0,r.jsx)("div",{className:"modal",children:n})})},o="ContactsPage_contactSection__sUdC7",l="ContactsPage_modalBtn__-zGUI",c="ContactsList_list__i2+2R",i="ContactsList_item__1JGnj",u=t(9439);var m=function(e){var n=(0,a.useState)(e),t=(0,u.Z)(n,2),r=t[0],s=t[1];return{toggleModal:function(){return s((function(e){return!e}))},showModal:r}},d="Contact_contact__1ZM+m",h="Contact_name__fz64Z",f="Contact_number__cRWdN",p="Contact_close__y45kA",_="Contact_edit__F+JD+",x=t(2007),j=t.n(x),b=t(7604),N=t(9434),v=t(4903),C="ContactForm_modalForm__uBjg8",g="ContactForm_modalInput__eyl-V",y="ContactForm_label__2QOqy",w="ContactForm_addBtn__CPSNS",F=function(e){var n=e.id,t=e.name,s=e.phone,o=e.closeModal,l=(0,a.useState)(t),c=(0,u.Z)(l,2),i=c[0],m=c[1],d=(0,a.useState)(s),h=(0,u.Z)(d,2),f=h[0],p=h[1],_=(0,N.I0)(),x=function(e){var n=e.target,t=n.name,a=n.value;"name"===t&&m(a),"number"===t&&p(a)};return(0,r.jsxs)("form",{className:C,onSubmit:function(){var e={id:n,name:i,number:f};console.log(e),_((0,v.Tk)(e)),o()},children:[(0,r.jsx)("label",{className:y,htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{value:i,onChange:x,id:"name",className:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"}),(0,r.jsx)("label",{className:y,htmlFor:"number",children:"Number"}),(0,r.jsx)("input",{value:f,onChange:x,id:"number",className:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"}),(0,r.jsx)("button",{className:w,type:"submit",children:"EDIT"})]})},M=function(e){var n=e.id,t=e.name,a=e.phone,o=(0,N.I0)(),l=m(!1),c=l.showModal,i=l.toggleModal;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:d,children:[(0,r.jsxs)("h3",{className:h,children:[(0,r.jsx)(b.WCB,{}),t]}),(0,r.jsx)("p",{className:f,children:a}),(0,r.jsx)(b.FNg,{onClick:function(){return i()},className:_}),(0,r.jsx)(b.wAo,{className:p,onClick:function(){o((0,v.GK)(n))}})]}),c&&(0,r.jsx)(s,{closeModal:i,children:(0,r.jsx)(F,{id:n,name:t,phone:a,closeModal:i})})]})};M.prototype={currentId:j().string.isRequired,name:j().string.isRequired,number:j().string.isRequired,deleteContact:j().func.isRequired};var k=t(6916),I=function(e){return e.contacts.items},A=function(e){return e.contacts.isLoading},Z=function(e){return e.contacts.error},z=(0,k.P1)([I,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)})).sort((function(e,n){return e.name.localeCompare(n.name)}))})),S=t(5323),q=function(){var e=(0,N.I0)(),n=(0,N.v9)(z),t=(0,N.v9)(A),s=(0,N.v9)(Z);return(0,a.useEffect)((function(){e((0,v.yF)())}),[e]),(0,r.jsxs)("ul",{className:c,children:[t&&(0,r.jsx)(S.Z,{}),s&&(0,r.jsx)("div",{children:s}),n.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{className:i,children:(0,r.jsx)(M,{id:n,name:t,phone:a})},n)})}))]})},B={filterInput:"Filter_filterInput__e+SNN",input:"Filter_input__R4e-B",label:"Filter_label__IWv91",wrapper:"Filter_wrapper__kfVHe"},R=t(4808),E=function(){var e=(0,N.I0)();return(0,r.jsxs)("div",{className:B.wrapper,children:[(0,r.jsxs)("label",{htmlFor:"filter",className:B.label,children:[(0,r.jsx)(b.w75,{className:B.searchIcon})," Search"]}),(0,r.jsx)("input",{id:"filter",className:B.filterInput,type:"text",name:"filter",autoComplete:"off",onChange:function(n){e((0,R.x)(n.target.value))}})]})},L=t(1014),P=function(e){var n=e.closeModal,t=(0,N.I0)(),a=(0,N.v9)(I);return(0,r.jsxs)("form",{className:C,onSubmit:function(e){e.preventDefault();var r=e.target,s={name:r.elements.name.value,number:r.elements.number.value};a.find((function(e){return e.name===s.name}))?alert("This contact already exist"):t((0,v.uK)(s)),n()},children:[(0,r.jsx)("label",{className:y,htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{id:"name",className:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off"}),(0,r.jsx)("label",{className:y,htmlFor:"number",children:"Number"}),(0,r.jsx)("input",{id:"number",className:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"off"}),(0,r.jsx)("button",{className:w,type:"submit",children:"Add"})]})},D=function(){var e=(0,N.v9)(L.dy),n=m(!1),t=n.toggleModal,a=n.showModal;return(0,r.jsxs)("section",{className:o,children:[(0,r.jsxs)("h2",{children:["Hello, ",e.name]}),(0,r.jsx)("button",{type:"button",onClick:t,className:l,children:"Add contact"}),a&&(0,r.jsx)(s,{closeModal:t,children:(0,r.jsx)(P,{closeModal:t})}),(0,r.jsx)(E,{}),(0,r.jsx)("h2",{children:"Contacts"}),(0,r.jsx)(q,{})]})}}}]);
//# sourceMappingURL=393.cea17b59.chunk.js.map