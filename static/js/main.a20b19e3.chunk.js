(this.webpackJsonpform_response_on_mail=this.webpackJsonpform_response_on_mail||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(22),c=a(23),s=a(27),r=a(26),o=a(5),j=a(0),l=a.n(j),i=a(24),u=a.n(i),b=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Enquiry Form"})})},m=a(7),d=a(8),O=a(12),h=a(25),x=a.n(h),p=a(57),f=a(58),g=function(){var e=Object(j.useState)({name:"",email:"",subject:"",message:""}),t=Object(O.a)(e,2),a=t[0],n=t[1],c=Object(j.useState)(null),s=Object(O.a)(c,2),r=s[0],l=s[1],i=function(e){var t=e.target,c=t.name,s=t.value;n(Object(d.a)(Object(d.a)({},a),{},Object(m.a)({},c,s)))};return Object(o.jsxs)("div",{children:[r&&Object(o.jsx)("p",{className:"".concat(r.success?"success":"error"),children:r.message}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/send",Object(d.a)({},a)).then((function(e){l(e.data),n({name:"",email:"",subject:"",message:""})})).catch((function(){l({success:!1,message:"Something went wrong. Try again later"})}))},children:[Object(o.jsxs)(p.a.Group,{controlId:"name",children:[Object(o.jsx)(p.a.Label,{children:"Full Name"}),Object(o.jsx)(p.a.Control,{type:"text",name:"name",value:a.name,placeholder:"Enter your full name",onChange:i})]}),Object(o.jsxs)(p.a.Group,{controlId:"email",children:[Object(o.jsx)(p.a.Label,{children:"Email"}),Object(o.jsx)(p.a.Control,{type:"text",name:"email",value:a.email,placeholder:"Enter your email",onChange:i})]}),Object(o.jsxs)(p.a.Group,{controlId:"subject",children:[Object(o.jsx)(p.a.Label,{children:"Subject"}),Object(o.jsx)(p.a.Control,{type:"text",name:"subject",value:a.subject,placeholder:"Enter subject",onChange:i})]}),Object(o.jsxs)(p.a.Group,{controlId:"subject",children:[Object(o.jsx)(p.a.Label,{children:"Message"}),Object(o.jsx)(p.a.Control,{as:"textarea",name:"message",value:a.message,rows:"3",placeholder:"Enter your message",onChange:i})]}),Object(o.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},v=(a(53),a(54),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(o.jsx)(b,{}),Object(o.jsx)(g,{})]})})}}]),a}(l.a.Component));u.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a20b19e3.chunk.js.map