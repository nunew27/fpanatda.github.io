webpackJsonp([7],{"1a6f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("qVsQ"),o={name:"view-employee",data:function(){return{employeeId:null,name:null,dept:null,position:null}},beforeRouteEnter:function(t,e,i){l.a.collection("employees").where("employeeId","==",t.params.employeeId).get().then(function(t){t.forEach(function(t){i(function(e){e.employeeId=t.data().employeeId,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;l.a.collection("employees").where("employeeId","==",this.$route.params.employeeId).get().then(function(e){e.forEach(function(e){t.employeeId=e.data().employeeId,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})},deleteEmployee:function(){var t=this;confirm("Are you sure?")&&l.a.collection("employees").where("employeeId","==",this.$route.params.employeeId).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/ali.png",height:"300px"}},[i("v-layout",{attrs:{column:"","fill-height":""}},[i("v-card-title",[i("router-link",{attrs:{to:"/"}},[i("v-btn",{attrs:{dark:"",icon:""}},[i("v-icon",[t._v("chevron_left")])],1)],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"mr-3",attrs:{dark:"",icon:"",to:{name:"edit-employee",params:{employeeId:t.employeeId}}}},[i("v-icon",[t._v("edit")])],1),t._v(" "),i("v-btn",{attrs:{dark:"",icon:""},on:{click:t.deleteEmployee}},[i("v-icon",[t._v("delete")])],1)],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-card-title",{staticClass:"white--text pl-5 pt-5"},[i("div",{staticClass:"display-1 pl-5 pt-5"},[t._v(t._s(t.name))])])],1)],1),t._v(" "),i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("phone")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(t.employeeId))]),t._v(" "),i("v-list-tile-sub-title",[t._v("Employee Id")])],1),t._v(" "),i("v-list-tile-action",[i("v-icon",[t._v("chat")])],1)],1),t._v(" "),i("v-divider",{attrs:{inset:""}}),t._v(" "),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("work")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(t.dept))]),t._v(" "),i("v-list-tile-sub-title",[t._v("Department")])],1)],1),t._v(" "),i("v-divider",{attrs:{inset:""}}),t._v(" "),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{attrs:{color:"indigo"}},[t._v("location_on")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(t.position))]),t._v(" "),i("v-list-tile-sub-title",[t._v("Position")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},a=i("VU/8")(o,n,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=7.2f9d58c08638ac0236c8.js.map