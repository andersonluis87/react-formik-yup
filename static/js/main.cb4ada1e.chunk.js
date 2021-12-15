(this.webpackJsonpformik=this.webpackJsonpformik||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(63),n=a.n(s),i=(a(73),a.p+"static/media/form.4b312c97.png"),l=a(3),o=a(5),d=a(4),b=a(6),m=a(12),j=a(1),u=function(e){var t=e.label,a=e.placeholder,r=Object(m.a)(e,["label","placeholder"]),c=Object(o.e)(r),s=Object(l.a)(c,2),n=s[0],i=s[1];return Object(j.jsxs)("div",{className:"mb-2 mt-1",children:[t?Object(j.jsx)("label",{htmlFor:n.name,children:t}):null,Object(j.jsx)("input",Object(b.a)(Object(b.a)(Object(b.a)({className:"form-control shadow-none ".concat(i.touched&&i.error&&"is-invalid"),placeholder:a},n),r),{},{autoComplete:"off"})),Object(j.jsx)(o.a,{component:"div",name:n.name,className:"error"})]})},h=function(e){var t=e.label,a=e.id,r=Object(m.a)(e,["label","id"]),c=Object(o.e)(r),s=Object(l.a)(c,2),n=s[0],i=s[1];return Object(j.jsxs)("div",{className:"form-check mb-2",children:[Object(j.jsx)("input",Object(b.a)(Object(b.a)({className:"form-check-input ".concat(i.touched&&i.error&&"is-invalid"),type:"checkbox",id:a,checked:n.value},n),r)),Object(j.jsx)("label",{className:"form-check-label",htmlFor:a,children:t}),Object(j.jsx)(o.a,{component:"div",name:n.name,className:"error"})]})},O=function(e){var t=e.id,a=e.label,r=(e.className,Object(m.a)(e,["id","label","className"])),c=Object(o.e)(r),s=Object(l.a)(c,2),n=s[0],i=s[1],d="form-check-input ".concat(i.touched&&i.error?"is-invalid":"");return Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",Object(b.a)({name:n.name,id:t,type:"radio",value:t,checked:t===n.value,onChange:n.onChange,onBlur:n.onBlur,className:d},r)),Object(j.jsx)("label",{className:"form-check-label",htmlFor:t,children:a})]})},p=function(e){var t=e.error,a=e.touched,r=e.label,c=e.children;return Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{children:r}),c,a&&t&&Object(j.jsx)("div",{className:"error",children:t})]})},x=function(e){var t=e.label,a=e.id,r=e.options,c=e.className,s=Object(m.a)(e,["label","id","options","className"]),n=Object(o.e)(s),i=Object(l.a)(n,2),d=i[0],u=i[1];return Object(j.jsxs)("div",{className:"".concat(c),children:[Object(j.jsx)("label",{htmlFor:a,className:c?"".concat(c,"-text"):"",children:t}),Object(j.jsxs)("select",Object(b.a)(Object(b.a)(Object(b.a)({className:"form-select ".concat(u.touched&&u.error&&"is-invalid"),"aria-label":"Select the country",id:a},d),s),{},{children:[Object(j.jsx)("option",{defaultValue:""}),r.map((function(e){return Object(j.jsx)("option",{value:e.value,children:e.label},e.id)}))]})),Object(j.jsx)(o.a,{component:"div",name:d.name,className:"error"})]})},f=function(){return Math.floor(11*Math.random())},v=[{id:"1",value:"BR",label:"Brazil"},{id:"2",value:"CA",label:"Canada"},{id:"3",value:"US",label:"United States"}],N=[{id:"1",value:"movie",label:"Movie"},{id:"2",value:"magazine",label:"Magazine"},{id:"3",value:"tv-show",label:"TV Show"}],y=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=function(){c(!a)},n=d.c({firstName:d.e().max(15,"Must be 15 characters or less").required("First name is required"),lastName:d.e().max(20,"Must be 20 characters or less").required("Last name is required"),email:d.e().email("Not a valid email").required("Email is required"),password:d.e().min(8,"Must be at least 8 characters").required("Password is required"),confirmPassword:d.e().oneOf([d.d("password"),null,"Passwords must match"]).required("Confirm password is required"),gender:d.e().required("Gender is required"),terms:d.b().oneOf([!0],"You must accept the terms and conditions to continue"),country:d.e().required("Select the country"),preferences:d.a().of(d.c({title:d.e().required("Title is required"),type:d.e().required("Type is required"),id:d.e().required()}))});return Object(j.jsx)(o.d,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",gender:"",terms:!1,country:"",preferences:[{id:""+f(),type:"",title:""}]},validationSchema:n,onSubmit:function(e,t){var a=t.setSubmitting,r=t.resetForm;a(!0),setTimeout((function(){alert("Form submitted!"),console.log(e),a(!1),r()}),5e3)},children:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"my-4 font-weight-bold-display-4",children:[Object(j.jsx)("h1",{children:"Formik + YUP Validation"}),Object(j.jsx)("hr",{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(u,{label:"First Name",name:"firstName",type:"text"}),Object(j.jsx)(u,{label:"Last Name",name:"lastName",type:"text"}),Object(j.jsx)(u,{label:"Email",name:"email",type:"email"}),Object(j.jsxs)(p,{id:"gender",label:"Gender",value:e.values.gender,error:e.errors.gender,touched:e.touched.gender,children:[Object(j.jsx)(O,{label:"Male",name:"gender",id:"male"}),Object(j.jsx)(O,{label:"Female",name:"gender",id:"female"})]}),Object(j.jsx)(x,{label:"Country",id:"country",name:"country",options:v}),Object(j.jsx)(o.b,{name:"preferences",children:function(t){return Object(j.jsxs)("div",{className:"container border border-1 mt-3 mb-3",children:[Object(j.jsx)("label",{className:"mb-2 mt-2",children:"Choose your preferences"}),e.values.preferences.map((function(e,a){return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{id:e.id,className:"input-group",label:"Preference",name:"preferences.".concat(a,".type"),options:N}),Object(j.jsx)(u,{name:"preferences.".concat(a,".title"),placeholder:"Type your preference",type:"text"}),Object(j.jsx)("button",{className:"btn btn-danger btn-sm ml-3 mb-3 ",onClick:function(){return a>0&&t.remove(a)},type:"button",children:"- preference"})]},a)})),Object(j.jsx)("button",{className:"btn btn-secondary btn-sm mb-3 ",onClick:function(){return t.push({type:"",title:"",id:""+f()})},type:"button",children:"+ preference"})]})}}),Object(j.jsx)(u,{label:"Password",name:"password",type:"password"}),Object(j.jsx)(u,{label:"Confirm Password",name:"confirmPassword",type:"password"}),Object(j.jsx)(h,{label:"I agree to the terms and conditions",name:"terms",id:"terms"}),Object(j.jsx)("button",{className:"btn btn-dark mt-3 me-1",type:"submit",disabled:e.isSubmitting,children:e.isSubmitting?"Registering...":"Register"}),Object(j.jsx)("button",{className:"btn btn-danger mt-3 me-1",disabled:e.isSubmitting,type:"reset",children:"Reset"}),Object(j.jsx)("button",{className:"btn btn-primary mt-3 ",onClick:s,type:"button",children:a?"Hide Formik Data":"Show Formik Data"})]})]}),Object(j.jsx)("div",{children:a?Object(j.jsx)("pre",{children:JSON.stringify(e,null,2)}):null})]})}})};var g=function(){return Object(j.jsx)("div",{className:"container mt-3",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-5",children:Object(j.jsx)(y,{})}),Object(j.jsx)("div",{className:"col-md-7",children:Object(j.jsx)("img",{className:"img-fluid w-100",src:i,alt:"Form"})})]})})};a(175);n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},73:function(e,t,a){}},[[176,1,2]]]);
//# sourceMappingURL=main.cb4ada1e.chunk.js.map