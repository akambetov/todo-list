(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todo-list/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoForm")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",{staticClass:"title"},[t._v("Список задач")]),o("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("div",{staticClass:"form__control"},[o("label",{staticClass:"form__item",attrs:{for:"name"}},[t._v("Название задачи")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form__item",attrs:{type:"text",id:"name",placeholder:"Введите название новой задачи"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",{staticClass:"form__control"},[o("label",{staticClass:"form__item",attrs:{for:"desc"}},[t._v("Описание задачи")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form__item",attrs:{type:"text",id:"desc",placeholder:"Введите описание новой задачи"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),o("button",{staticClass:"form__item button",attrs:{type:"submit"}},[t._v("Добавить")])]),t.isLoading?o("div",{staticClass:"loading"},[o("h2",[t._v("Loading...")])]):o("div",{staticClass:"table"},[o("div",{staticClass:"table__controls"},[o("div",{staticClass:"table__col table__search"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.substring,expression:"substring",modifiers:{trim:!0}}],staticClass:"form__item",attrs:{type:"text",placeholder:"Поиск задач"},domProps:{value:t.substring},on:{input:[function(e){e.target.composing||(t.substring=e.target.value.trim())},t.search],blur:function(e){return t.$forceUpdate()}}})]),o("div",{staticClass:"table__col"},[o("button",{staticClass:"button no-margin",attrs:{type:"submit"},on:{click:t.filter}},[t._v(" Фильтр A-z ")])])]),t._m(0),t._l(t.todos,(function(e,s){return o("div",{key:s,ref:"tableRow",refInFor:!0,staticClass:"table__row",attrs:{"data-matched":e.matched}},[o("div",{staticClass:"table__col"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.toDelete,expression:"toDelete"}],staticClass:"table__input custom-checkbox",attrs:{id:"completed",type:"checkbox"},domProps:{value:e.description,checked:Array.isArray(t.toDelete)?t._i(t.toDelete,e.description)>-1:t.toDelete},on:{change:[function(o){var s=t.toDelete,n=o.target,a=!!n.checked;if(Array.isArray(s)){var i=e.description,r=t._i(s,i);n.checked?r<0&&(t.toDelete=s.concat([i])):r>-1&&(t.toDelete=s.slice(0,r).concat(s.slice(r+1)))}else t.toDelete=a},function(e){return t.completed(s)}]}}),o("label",{attrs:{for:"completed"}})]),o("div",{staticClass:"table__col"},[o("span",{staticClass:"table__order"},[t._v(t._s(s+1)+".")])]),o("div",{staticClass:"table__col"},[o("span",{staticClass:"table__text"},[t._v(t._s(e.name))])]),o("div",{staticClass:"table__col"},[o("span",{staticClass:"table__text"},[t._v(t._s(e.description))])])])})),o("button",{staticClass:"button button--done",attrs:{type:"button"},on:{click:t.deleteTodo}},[t._v(" Выполнено ")])],2)])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table__row table__title"},[o("div",{staticClass:"table__col"},[t._v("Выполнено")]),o("div",{staticClass:"table__col"},[t._v("Порядок")]),o("div",{staticClass:"table__col"},[t._v("Название задачи")]),o("div",{staticClass:"table__col"},[t._v("Описание задачи")])])}],c=(o("a4d3"),o("e01a"),o("4de4"),o("4160"),o("caad"),o("fb6a"),o("b0c0"),o("d3b7"),o("2532"),o("159b"),{name:"TodoForm",data:function(){return{name:"",description:"",todos:[],srcTodos:[],toDelete:[],isLoading:!0,substring:"",sorted:!1}},methods:{addTodo:function(){var t={};this.description&&this.name&&(t.description=this.description,t.name=this.name,t.completed=!1,t.matched=!1,this.todos.push(t),this.srcTodos=this.todos.slice(),this.sorted=!1,this.name="",this.description="")},deleteTodo:function(){this.todos=this.todos.filter((function(t){return!t.completed})),this.toDelete=[]},completed:function(t){this.todos[t].completed=!this.todos[t].completed},search:function(){var t=this;console.log(this.substring),this.substring?this.todos.forEach((function(e){e.name.toLowerCase().includes(t.substring.toLowerCase())||e.description.toLowerCase().includes(t.substring.toLowerCase())?(e.matched=!0,setTimeout((function(){t.$refs.tableRow.forEach((function(t){t.dataset.matched?t.style.display="":t.style.display="none"}))}),0)):(e.matched=!1,setTimeout((function(){t.$refs.tableRow.forEach((function(t){t.dataset.matched||(t.style.display="none")}))}),0))})):this.todos.forEach((function(e){e.matched=!1,setTimeout((function(){t.$refs.tableRow.forEach((function(t){return t.style.display=""}))}),0)}))},filter:function(){console.log("a"),this.sorted=!this.sorted;var t=this.todos.slice().sort((function(t,e){return t.name.toLowerCase()>e.name.toLowerCase()?1:t.name.toLowerCase()<e.name.toLowerCase()?-1:t.name.toLowerCase()===e.name.toLowerCase()?0:void 0}));this.sorted?this.todos=t:this.todos=this.srcTodos}},mounted:function(){var t=this;function e(t){return new Promise((function(e){return setTimeout(e,t)}))}var o=e(10);o.then((function(){t.todos=[{name:"Products",description:"Buy milk",completed:!1,matched:!1},{name:"Frontend",description:"Vue.js",completed:!1,matched:!1},{name:"Backend",description:"Node",completed:!1,matched:!1},{name:"Hobby",description:"Guitar",completed:!1,matched:!1}],t.srcTodos=t.todos.slice(),t.isLoading=!1}))}}),l=c,d=o("2877"),u=Object(d["a"])(l,i,r,!1,null,null,null),m=u.exports,p={name:"App",components:{TodoForm:m}},f=p,_=Object(d["a"])(f,n,a,!1,null,null,null),h=_.exports;o("f27b");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},f27b:function(t,e,o){}});
//# sourceMappingURL=app.f6e6ffd4.js.map