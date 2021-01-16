(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{18:function(t,e,o){},19:function(t,e,o){},20:function(t,e,o){},21:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o(1),c=o.n(i),s=o(7),d=o.n(s),l=(o(18),o(2)),a=o(11),r=o(8),u=o(9),j=o(12),h=o(10),m=(o(19),o(20),o(5)),b=Object(i.memo)((function(t){var e=Object(i.useState)(""),o=Object(m.a)(e,2),c=o[0],s=o[1],d=t.addTodo,l=t.isCheckedAll;return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("h1",{children:"Todo App"}),Object(n.jsx)("input",{className:"new-todo",placeholder:"Enter a todo name here",value:c,onChange:function(t){return s(t.target.value)},onKeyPress:function(t){return function(){"Enter"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).key&&c&&(d({id:(new Date).valueOf(),text:c,isCompleted:!1}),s(""))}(t)},checked:l})]})})),f=Object(i.memo)((function(t){var e=t.todo,o=t.getTodoEditingId,c=t.todoEditingId,s=t.onEditTodo,d=t.index,a=t.markCompleted,r=t.removeTodo,u=Object(i.useState)(e.text),j=Object(m.a)(u,2),h=j[0],b=j[1],f=c===e.id,O=function(){s(Object(l.a)(Object(l.a)({},e),{},{text:h}),d)};return Object(n.jsx)("li",{className:"".concat(f?"editing":""," ").concat(e.isCompleted?" completed":""),children:f?Object(n.jsx)("input",{className:"edit",type:"text",value:h,onChange:function(t){return b(t.target.value)},onBlur:O,onKeyPress:function(t){"Enter"===t.key&&O()}}):Object(n.jsxs)("div",{className:"view",children:[Object(n.jsx)("input",{className:"toggle",type:"checkbox",checked:e.isCompleted,onChange:function(){return a(e.id)}}),Object(n.jsx)("label",{onDoubleClick:function(){return o(e.id)},children:e.text}),Object(n.jsx)("button",{className:"destroy",onClick:function(){return r(e.id)}})]})})})),O=Object(i.memo)((function(t){var e=t.todoList,o=t.isCheckedAll,i=t.checkAllTodo;return Object(n.jsxs)("section",{className:"main",children:[Object(n.jsx)("input",{className:"toggle-all",type:"checkbox",checked:o}),Object(n.jsx)("label",{htmlFor:"toggle-all",onClick:i,children:"Toggle All"}),Object(n.jsx)("ul",{className:"todo-list",children:e.map((function(e,o){return Object(n.jsx)(f,Object(l.a)(Object(l.a)(Object(l.a)({},{todo:e}),t),{},{index:o}),"todo".concat(e.id))}))})]})})),p=Object(i.memo)((function(t){var e=t.status,o=t.setStatusFilter,i=t.numOfTodoLeft,c=t.clearCompleted,s=[{title:"All",isActive:"ALL"===e,onClick:function(){return o("ALL")},link:""},{title:"Active",isActive:"ACTIVE"===e,onClick:function(){return o("ACTIVE")},link:"active"},{title:"Done",isActive:"DONE"===e,onClick:function(){return o("DONE")},link:"done"}];return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsxs)("span",{className:"todo-count",children:[Object(n.jsx)("strong",{children:i}),Object(n.jsx)("span",{children:" "}),Object(n.jsx)("span",{children:i<=1?"item":"items"}),Object(n.jsx)("span",{children:" left"})]}),Object(n.jsx)("ul",{className:"filters",children:s.map((function(t){return Object(n.jsx)(v,Object(l.a)({},t),"btn".concat(t.title))}))}),Object(n.jsx)("button",{className:"clear-completed",onClick:c,children:"Clear done"})]})})),v=Object(i.memo)((function(t){var e=t.title,o=t.onClick,i=t.link,c=t.isActive;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#/".concat(i),className:"".concat(c," 'selected' : ' '? "),onClick:o,children:e})}),Object(n.jsx)("span",{})]})})),C=p,g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.find((function(t){return!t.isCompleted}))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";switch(e){case"ACTIVE":return t.filter((function(t){return!t.isCompleted}));case"DONE":return t.filter((function(t){return t.isCompleted}));case"REMOVE":return t.filter((function(t){return t.id!==o}));default:return t}},k=function(t){Object(j.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(r.a)(this,o);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={todoList:[{id:1,text:"todo 1",isCompleted:!0},{id:2,text:"todo 2",isCompleted:!1}],todoEditingId:"",isCheckedAll:!1,status:"ALL"},t.addTodo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.setState((function(t){return{todoList:[].concat(Object(a.a)(t.todoList),[e])}}))},t.getTodoEditingId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.setState({todoEditingId:e})},t.onEditTodo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(o>=0){var n=t.state.todoList;n.splice(o,1,e),t.setState({todoList:n,todoEditingId:""})}},t.markCompleted=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=t.state.todoList,n=o.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isCompleted:!t.isCompleted}):t}));t.setState((function(t){return{todoList:n,isCheckedAll:!g(n)}}))},t.checkAllTodo=function(){var e=t.state,o=e.todoList,n=e.isCheckedAll;t.setState((function(t){return{todoList:o.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{isCompleted:!n})})),isCheckedAll:!t.isCheckedAll}}))},t.setStatusFilter=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t.setState({status:e})},t.clearCompleted=function(){var e=t.state.todoList;t.setState({todoList:x(e,"ACTIVE")})},t.removeTodo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=t.state.todoList;t.setState({todoList:x(o,"REMOVE",e)})},t}return Object(u.a)(o,[{key:"componentWillMount",value:function(){this.setState({isCheckedAll:!g(this.state.todoList)})}},{key:"render",value:function(){var t=this.state,e=t.todoList,o=t.todoEditingId,i=t.isCheckedAll,c=t.status;return Object(n.jsxs)("div",{className:"todoapp",children:[Object(n.jsx)(b,{addTodo:this.addTodo,isCheckedAll:i}),Object(n.jsx)(O,{todoList:x(e,c),getTodoEditingId:this.getTodoEditingId,todoEditingId:o,onEditTodo:this.onEditTodo,markCompleted:this.markCompleted,isCheckedAll:i,checkAllTodo:this.checkAllTodo,removeTodo:this.removeTodo}),Object(n.jsx)(C,{setStatusFilter:this.setStatusFilter,status:c,clearCompleted:this.clearCompleted,numOfTodoLeft:x(e,c).length})]})}}]),o}(i.PureComponent),A=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,22)).then((function(e){var o=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;o(t),n(t),i(t),c(t),s(t)}))};d.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),A()}},[[21,1,2]]]);
//# sourceMappingURL=main.f35a0ebc.chunk.js.map