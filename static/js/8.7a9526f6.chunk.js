(this["webpackJsonpbiz-form"]=this["webpackJsonpbiz-form"]||[]).push([[8],{930:function(e,t,n){e.exports={"container-form":"style_container-form__2xq8Y"}},931:function(e,t,n){e.exports={settings:"style_settings__3X6Qg","settings-sider":"style_settings-sider__36fsh","settings-content":"style_settings-content__21L1x","settings-content-header":"style_settings-content-header__1YxCZ"}},932:function(e,t,n){e.exports={settingMenu:"style_settingMenu__3gmjd","settingMenu-item":"style_settingMenu-item__28jBq","settingMenu-item_active":"style_settingMenu-item_active__32Wp1"}},953:function(e,t,n){"use strict";n.r(t);var s=n(11),a=n(0),i=n.n(a),r=n(28),c=n.n(r),o=n(38),u=n(72),l=n(888),j=n(390),b=n(58),d=n(930),p=n.n(d),m=n(256),h=n(369),f=n(3),O={labelCol:{span:8},wrapperCol:{span:16}},v={wrapperCol:{offset:8,span:16}},g=[{label:"\u4fee\u6539\u5934\u50cf",route:"/settings/avatar",component:function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),i=n[0],r=n[1],d=l.a.useForm(),g=Object(u.a)(d,1)[0],x=function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,Object(m.b)(t);case 4:j.b.success("\u66f4\u65b0\u6210\u529f"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),j.b.error("\u66f4\u65b0\u5931\u8d25");case 10:return e.prev=10,r(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:p.a.container,children:Object(f.jsxs)(l.a,Object(s.a)(Object(s.a)({layout:"vertical",className:p.a["container-form"]},O),{},{form:g,initialValues:e.operator,onFinish:x,children:[Object(f.jsx)(l.a.Item,{name:"avatar",rules:[{required:!0}],children:Object(f.jsx)(h.a,{})}),Object(f.jsx)(l.a.Item,Object(s.a)(Object(s.a)({},v),{},{children:Object(f.jsx)(b.a,{type:"primary",htmlType:"submit",loading:i,children:"\u63d0\u4ea4"})}))]}))})}},{label:"\u4fee\u6539\u5bc6\u7801",route:"/settings/changePassword",component:i.a.lazy((function(){return n.e(10).then(n.bind(null,945))}))}],x=n(931),_=n.n(x),y=n(4),M=n(932),N=n.n(M),w=n(5),k=n.n(w),C=n(51),q=function(e){var t=e.options,n=void 0===t?[]:t,s=e.history.location;return Object(f.jsx)("div",{className:N.a.settingMenu,children:n.map((function(e){return Object(f.jsx)("div",{className:k()(N.a["settingMenu-item"],Object(y.a)({},N.a["settingMenu-item_active"],e.route===s.pathname)),onClick:function(){return t=e.route,void C.a.to(t);var t},children:e.label})}))})},z=n(174),F=n(301);t.default=function(e){var t,n=e.history;console.log(location.pathname);var i,r=(i=location.pathname,g.find((function(e){return e.route===i}))),c=Object(a.useMemo)((function(){return z.a.data}),[]);return Object(f.jsxs)("div",{className:_.a.settings,children:[Object(f.jsx)("div",{className:_.a["settings-sider"],children:Object(f.jsx)(q,{options:g,history:n})}),Object(f.jsxs)("div",{className:_.a["settings-content"],children:[Object(f.jsx)("div",{className:_.a["settings-content-header"],children:Object(f.jsx)("h3",{children:null===r||void 0===r?void 0:r.label})}),Object(f.jsxs)(F.d,{children:[g.map((function(e){return Object(f.jsx)(F.b,{path:e.route,component:function(t){return Object(f.jsx)(e.component,Object(s.a)(Object(s.a)({},t),{},{operator:c}))}},e.route)})),Object(f.jsx)(F.a,{to:null===(t=g[0])||void 0===t?void 0:t.route})]})]})]})}}}]);
//# sourceMappingURL=8.7a9526f6.chunk.js.map