(this["webpackJsonpepi-merch-site"]=this["webpackJsonpepi-merch-site"]||[]).push([[0],{17:function(e,t,a){e.exports=a(33)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(1),c=a.n(l),r=a(2),m=a(3),u=a(14),d=a(12),o=a(13),s=a(16),E=a(15),p=a(4),h=(a(30),function(e){return i.a.createElement("div",{className:"Item"},e.children)}),v=(a(31),function(e){Object(s.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClickEdit=function(e){n.setState({editing:e.target.id})},n.handleClickCancelEdit=function(e){n.setState({editing:null})},n.handleClickDeleteItem=function(e){n.props.dispatch({type:"DELETE_ITEM",key:e.target.id})},n.handleClickSaveItem=function(e,t,a,i,l){n.props.dispatch({type:"EDIT_ITEM",name:e,description:t,available:a,price:i,key:l}),n.setState({editing:null})},n.state={editing:null,showDetail:null},e.dispatch({type:"ADD_ITEM",name:"Blue Shirt",description:"Lightweight cotton",available:200,price:10,key:Object(p.v4)()}),e.dispatch({type:"ADD_ITEM",name:"Red Shirt",description:"Tagless comfort",available:200,price:10,key:Object(p.v4)()}),e.dispatch({type:"ADD_ITEM",name:"Green Shirt",description:"Lightweight cotton",available:200,price:10,key:Object(p.v4)()}),n}return Object(o.a)(a,[{key:"generateNormalModeUI",value:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,e.name),i.a.createElement("p",null,i.a.createElement("em",null,e.description)),i.a.createElement("p",null,"Available: ",e.available," | Price: ",e.price),i.a.createElement("button",{onClick:this.handleClickEdit,id:e.key},"Edit"))}},{key:"generateEditModeUI",value:function(e){var t=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"itemname"},"Name: ",i.a.createElement("input",{id:"itemname",defaultValue:e.name}))),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"itemdesc"},"Description: ",i.a.createElement("input",{id:"itemdesc",defaultValue:e.description}))),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"itemavail"},"Available: ",i.a.createElement("input",{id:"itemavail",defaultValue:e.available}))),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"itemprice"},"Price: ",i.a.createElement("input",{id:"itemprice",defaultValue:e.price}))),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){t.handleClickSaveItem(document.getElementById("itemname").value,document.getElementById("itemdesc").value,document.getElementById("itemavail").value,document.getElementById("itemprice").value,e.key)},name:e.key},"Save"),i.a.createElement("button",{onClick:this.handleClickDeleteItem,id:e.key},"Delete Item"),i.a.createElement("button",{onClick:this.handleClickCancelEdit,id:e.key},"Cancel")))}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.data.length;t++){var a=this.props.data[t];a&&e.push(i.a.createElement(h,{key:a.key},this.state.editing&&this.state.editing===a.key?this.generateEditModeUI(a):this.generateNormalModeUI(a)))}return i.a.createElement("div",null,e)}}]),a}(n.Component)),k=v=Object(m.b)((function(e){return{data:e}}))(v),b=(a(32),function(){return i.a.createElement("div",null,i.a.createElement(k,null))});c.a.render(i.a.createElement(m.a,{store:Object(r.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.key,i=t.name,l=t.description,c=t.available,r=t.price;switch(a){case"ADD_ITEM":return[{key:n,name:i,description:l,available:c,price:r}].concat(Object(u.a)(e));case"DELETE_ITEM":return e.filter((function(e){return e.key!==n}));case"EDIT_ITEM":return e.map((function(e){return e.key===n?{key:n,name:i,description:l,available:c,price:r}:e}));default:return e}}))},i.a.createElement(b,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a0106498.chunk.js.map