(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(4),r=a.n(n),c=a(2);a(11);var s=()=>{const[e,t]=Object(o.useState)(""),[a,n]=Object(o.useState)(""),[r,s]=Object(o.useState)(""),[i,m]=Object(o.useState)(""),[d,u]=Object(o.useState)(""),p=Object(c.o)();return l.a.createElement("div",{className:"register-container"},l.a.createElement("h2",null,"Register"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{const t=await fetch("http://localhost:10000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:a,password:r,firstName:i,lastName:d})}),l=await t.json();t.ok?(console.log("Registration successful",l),alert("Registration successful"),p("/login")):(console.error("Registration error",l),alert(l.message||"Registration failed"))}catch(o){console.error("Network error",o),alert("Network error")}}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:"form-input"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:a,onChange:e=>n(e.target.value),required:!0,className:"form-input"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:r,onChange:e=>s(e.target.value),required:!0,className:"form-input"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{type:"text",value:i,onChange:e=>m(e.target.value),required:!0,className:"form-input"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{type:"text",value:d,onChange:e=>u(e.target.value),required:!0,className:"form-input"})),l.a.createElement("button",{type:"submit",className:"submit-button"},"Register")),l.a.createElement("button",{onClick:()=>p("/login"),className:"secondary-button"},"Go to Login"))};a(12);var i=()=>{const[e,t]=Object(o.useState)(""),[a,n]=Object(o.useState)(""),r=Object(c.o)();return l.a.createElement("div",{className:"login-container"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{const t=await fetch("http://localhost:10000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:a})}),l=await t.json();t.ok?(console.log("Login successful",l),localStorage.setItem("user",JSON.stringify(l)),r("/todos")):(console.error("Login error",l),alert(l.message||"Login failed"))}catch(o){console.error("Network error",o),alert("Network error")}}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:e,onChange:e=>t(e.target.value),required:!0,className:"form-input"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:a,onChange:e=>n(e.target.value),required:!0,className:"form-input"})),l.a.createElement("button",{type:"submit",className:"submit-button"},"Login")),l.a.createElement("button",{onClick:()=>r("/register"),className:"secondary-button"},"Go to Register"))},m=a(3);var d=e=>{let{id:t}=e;return l.a.createElement("button",{onClick:async()=>{try{(await fetch(`http://localhost:10000/api/todos/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}})).ok?(alert("To-Do deleted successfully"),window.location.reload()):alert("Failed to delete To-Do")}catch(e){console.error("Error:",e)}}},"Delete")};a(13);var u=()=>{const[e,t]=Object(o.useState)([]),a=Object(c.o)();Object(o.useEffect)(()=>{(async()=>{try{const a=await fetch("http://localhost:10000/api/todos",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}}),o=await a.json();t(o)}catch(e){console.error("Failed to fetch todos:",e)}})()},[]);return l.a.createElement("div",{className:"todo-container"},l.a.createElement("h2",null,"My To-Do List"),l.a.createElement("ul",{className:"todo-list"},e.map(e=>l.a.createElement("li",{key:e._id,className:"todo-item"},l.a.createElement("span",{className:"todo-title"},e.title," ",e.completed?"(Completed)":""),l.a.createElement("div",{className:"todo-actions"},l.a.createElement(m.b,{className:"edit-todo-link",to:`/update-todo/${e._id}`},"Edit"),l.a.createElement(d,{id:e._id}))))),l.a.createElement(m.b,{className:"add-todo-link",to:"/add-todo"},"Add New items"),l.a.createElement("button",{className:"dashboard-button",onClick:()=>{a("/dashboard")}},"Go to Dashboard"))};a(14);var p=()=>{const[e,t]=Object(o.useState)(""),a=Object(c.o)();return l.a.createElement("div",{className:"addtodo-container"},l.a.createElement("h2",null,"Add items"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{(await fetch("http://localhost:10000/api/todos",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({title:e,userId:"userId123"})})).ok?a("/todos"):alert("Failed to add To-Do")}catch(o){console.error("Error:",o)}}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:"form-input"})),l.a.createElement("button",{type:"submit",className:"submit-button"},"Add")))};var E=()=>{const{id:e}=Object(c.q)(),t=Object(c.o)(),[a,n]=Object(o.useState)({title:"",completed:!1}),[r,s]=Object(o.useState)("");Object(o.useEffect)(()=>{(async()=>{try{const t=await fetch(`http://localhost:10000/api/todos/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});if(!t.ok)throw new Error("Todo not found");const a=await t.json();n({title:a.title,completed:a.completed})}catch(r){}})()},[e]);return l.a.createElement("div",null,l.a.createElement("h2",null,"Update To-Do"),r&&l.a.createElement("p",{style:{color:"red"}},r),l.a.createElement("form",{onSubmit:async o=>{o.preventDefault();try{if(!(await fetch(`http://localhost:10000/api/todos/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify(a)})).ok)throw new Error("Failed to update todo");t("/todos")}catch(r){console.error("Failed to update todo:",r),s("Failed to update todo")}}},l.a.createElement("div",null,l.a.createElement("label",null,"Re-Edit:"),l.a.createElement("input",{type:"text",name:"title",value:a.title,onChange:e=>{const{name:t,value:o}=e.target;n({...a,[t]:o})},required:!0})),l.a.createElement("div",null,l.a.createElement("label",null,"Completed:"),l.a.createElement("input",{type:"checkbox",name:"completed",checked:a.completed,onChange:e=>n({...a,completed:e.target.checked})})),l.a.createElement("button",{type:"submit"},"Update To-Do")))};var h=function(){const[e,t]=Object(o.useState)([]),a=Object(c.o)();return Object(o.useEffect)(()=>{(async()=>{try{const a=await fetch("http://localhost:10000/api/todos",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}}),o=await a.json();t(o)}catch(e){console.error("Failed to fetch todos:",e)}})()},[]),l.a.createElement("div",{className:"dashboard-container"},l.a.createElement("h1",null,"Dashboard"),l.a.createElement("p",null,"Welcome to the dashboard!"),l.a.createElement("button",{className:"add-todo-button",onClick:()=>{a("/add-todo")}},"Add items"),l.a.createElement("h2",null,"My To-Do List"),l.a.createElement("ul",{className:"dashboard-todo-list"},e.map(e=>l.a.createElement("li",{key:e._id,className:"dashboard-todo-item"},e.title," ",e.completed?"(Completed)":""))))};a(15);var b=function(){return l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/register",element:l.a.createElement(s,null)}),l.a.createElement(c.a,{path:"/login",element:l.a.createElement(i,null)}),l.a.createElement(c.a,{path:"/todos",element:l.a.createElement(u,null)}),l.a.createElement(c.a,{path:"/add-todo",element:l.a.createElement(p,null)}),l.a.createElement(c.a,{path:"/update-todo/:id",element:l.a.createElement(E,null)}),l.a.createElement(c.a,{path:"/dashboard",element:l.a.createElement(h,null)}))};r.a.render(l.a.createElement(m.a,null,l.a.createElement(b,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.19fa2775.chunk.js.map