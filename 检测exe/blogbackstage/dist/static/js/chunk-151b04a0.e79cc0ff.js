(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151b04a0"],{"18cc":function(t,e,s){},"9d04":function(t,e,s){"use strict";var r=s("18cc"),a=s.n(r);a.a},c74a:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("付款流程")]),s("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[s("el-step",{attrs:{title:"未付款"}}),s("el-step",{attrs:{title:"已付款"}}),s("el-step",{attrs:{title:"已完成"}})],1),s("el-button",{on:{click:t.nextStep}},[t._v("next")]),s("h3",[t._v("流程指导")]),s("el-steps",{attrs:{active:t.active_two,"finish-status":"success"}},[s("el-step",{attrs:{title:"填写用户信息"}}),s("el-step",{attrs:{title:"已付款"}}),s("el-step",{attrs:{title:"已完成"}})],1),1==t.active_two?[s("div",{staticClass:"container"},[s("el-form",{ref:"form",attrs:{model:t.form,rules:t.ruleForm,"label-position":"top"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),s("el-form-item",{attrs:{label:"性别",prop:"sex"}},[s("el-input",{attrs:{placeholder:"请输入性别"},model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}})],1),s("el-form-item",{attrs:{label:"个人介绍",prop:"introduce"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入个人介绍"},model:{value:t.form.introduce,callback:function(e){t.$set(t.form,"introduce",e)},expression:"form.introduce"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.nextS("form")}}},[t._v("下一步")])],1)],1)],1)]:t._e(),2==t.active_two?[s("div",{staticClass:"container"},[s("h4",[t._v("请确认信息的完整性")]),s("p",[s("span",[t._v("username: ")]),s("span",[t._v(t._s(this.form.username))])]),s("p",[s("span",[t._v("sex: ")]),s("span",[t._v(t._s(this.form.sex))])]),s("p",[s("span",[t._v("introduce: ")]),s("span",[t._v(t._s(this.form.introduce))])]),s("el-button",{attrs:{type:"info"},on:{click:t.pre}},[t._v("上一步")]),s("el-button",{attrs:{type:"primary"},on:{click:t.success}},[t._v("确认")])],1)]:t._e(),3==t.active_two?[s("div",{staticClass:"container"},[t._m(0),s("el-button",{attrs:{type:"primary"}},[t._v("查看用户信息")])],1)]:t._e()],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("i",{staticClass:"fa fa-meh-o"}),t._v("用户信息已提交")])}],i={name:"Steps",data:function(){return{active:1,active_two:1,form:{username:"",sex:"",introduce:""},ruleForm:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],sex:[{required:!0,message:"性别不能为空",trigger:"blur"}],introduce:[{required:!0,message:"个人介绍不能为空",trigger:"blur"}]}}},methods:{nextStep:function(){this.active++,4===this.active&&(this.active=1)},nextS:function(t){var e=this;this.$refs[t].validate((function(t){t&&(e.active_two=2)}))},pre:function(){this.active_two=1},success:function(){this.active_two=3}}},n=i,o=(s("9d04"),s("2877")),c=Object(o["a"])(n,r,a,!1,null,"6704ba0a",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-151b04a0.e79cc0ff.js.map