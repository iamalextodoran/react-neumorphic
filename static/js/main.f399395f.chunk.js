(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){e.exports=a(70)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(35),a(1)),i=a(2),s=a(4),m=a(3),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("i",{onClick:this.props.onClick,className:this.props.icon,style:{fontSize:this.props.size+"px",color:this.props.color,padding:"5px",transition:"all .5s"}})}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-row layout-align-center-center",style:{marginTop:"25px"}},r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement(u,{icon:"far fa-copyright"})),"TODD SOLUTIONS"))}}]),a}(n.Component),p=a(5),h=a(10),E=(a(13),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:(this.props.raised?"m_button ":"m_button_not_raised ")+this.props.type+" "+this.props.size},r.a.createElement(u,{icon:this.props.icon}),this.props.text)}}]),a}(n.Component)),g=(a(36),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"field",type:this.props.type,placeholder:this.props.placeholder,autoComplete:this.props.autoComplete,style:{width:this.props.width,height:this.props.height}}),r.a.createElement("i",{className:this.props.icon}),r.a.createElement("i",{className:"dot "+this.props.dot}))}}]),a}(n.Component)),y=(a(37),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("label",{className:"toggle-row"},r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{className:"state",type:"checkbox",id:this.props.id,name:this.props.name,checked:this.props.checked,onChange:this.props.onChange}),r.a.createElement("div",{className:"indicator"})),r.a.createElement("div",{className:"text"},this.props.text)))}}]),a}(n.Component)),v=(a(38),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper",checked:this.props.checked,onClick:this.props.onClick},r.a.createElement("input",{className:"state",type:"radio",id:this.props.value,name:this.props.value,value:this.props.value,checked:this.props.checked,onChange:this.props.onChange}),r.a.createElement("label",{className:"label"},r.a.createElement("div",{className:"indicator"}),r.a.createElement("span",{className:"text"},this.props.value)))}}]),a}(n.Component)),f=(a(22),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu layout-row layout-align-end-end"},r.a.createElement(p.c,{className:"menu-item",activeClassName:"menu-item-active",to:"/login"},r.a.createElement(u,{icon:"fas fa-sign-out-alt",size:"23"})),r.a.createElement(p.c,{className:"menu-item",activeClassName:"menu-item-active",to:"/settings"},r.a.createElement(u,{icon:"fas fa-cog",size:"23"})))}}]),a}(n.Component)),b=(a(24),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-row layout-align-center-center",style:{marginLeft:"10px"}},r.a.createElement("div",{className:"profile"},r.a.createElement("img",{src:this.props.picture,alt:this.props.name})),r.a.createElement("h1",{style:{marginLeft:"15px"}},r.a.createElement("span",{style:{fontWeight:300}},"Hey"),", ",this.props.name))}}]),a}(n.Component)),w=(a(44),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"m_button_not_raised"},this.props.name),r.a.createElement("div",{className:"dropdown-content"},this.props.children))}}]),a}(n.Component)),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu big layout-row layout-align-end-end"},r.a.createElement(p.c,{exact:!0,activeClassName:"m_button_not_raised primary",className:"m_button_not_raised",to:"/"},"Home"),r.a.createElement(w,{name:"Rooms"},r.a.createElement(p.c,{activeClassName:"dropdown-active-item",className:"dropdown-item",to:"../room/1"},"Room 1"),r.a.createElement(p.c,{activeClassName:"dropdown-active-item",className:"dropdown-item",to:"../room/2"},"Room 2"),r.a.createElement(p.c,{activeClassName:"dropdown-active-item",className:"dropdown-item",to:"../room/6"},"Room 6")),r.a.createElement(p.c,{activeClassName:"m_button_not_raised primary",className:"m_button_not_raised",to:"/devices"},"Devices")),r.a.createElement("div",{className:"menu small"},r.a.createElement(p.c,{exact:!0,className:"menu-item",activeClassName:"menu-item-active",to:"/"},r.a.createElement(u,{icon:"fas fa-home",size:"25"})),r.a.createElement(p.c,{className:"menu-item",activeClassName:"menu-item-active",to:"/devices"},r.a.createElement(u,{icon:"fas fa-toolbox",size:"25"})),r.a.createElement(p.c,{className:"menu-item",activeClassName:"menu-item-active",to:"/rooms"},r.a.createElement(u,{icon:"fas fa-square",size:"25"}))))}}]),a}(n.Component),O=(a(11),a(45),a(47),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={weather:"",bit:"",querryCity:"Baia-Mare"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.weatherbit.io/v2.0/current?city=".concat(this.state.querryCity,"&key=d50c57c063ec458dab88e7a1c530219c")).then((function(e){return e.json()})).then((function(t){return e.setState({bit:t.data[0],weather:t.data[0].weather})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("h2",null,this.state.bit.city_name),r.a.createElement("p",{style:{marginTop:"-25px"}},this.state.bit.country_code)),r.a.createElement("div",{className:"layout-row layout-align-space-between-center",style:{marginTop:"-70px"}},r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("img",{src:"https://www.weatherbit.io/static/img/icons/"+this.state.weather.icon+".png",alt:this.state.weather.description,width:"80px"}),r.a.createElement("p",{style:{marginTop:"-25px"}},this.state.weather.description)),r.a.createElement("div",null),r.a.createElement("div",{className:"layout-column layout-align-end-end"},r.a.createElement("h2",{style:{justifyContent:"end"}},r.a.createElement("strong",null,this.state.bit.temp," \xb0C")),r.a.createElement("p",{style:{marginTop:"-25px"}},"Feels like ",this.state.bit.app_temp," \xb0C"))))}}]),a}(n.Component)),N=(a(50),a(28)),j=new(a.n(N).a),k=function(e,t){j.emit("notify",e,t)},C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onShow=function(e,t){n.timeout?(clearTimeout(n.timeout),n.setState({visible:""},(function(){n.timeout=setTimeout((function(){n.showToast(e,t)}),300)}))):(n.setState({message:e,color:t}),n.showToast(e,t))},n.showToast=function(e,t){n.setState({visible:"show"},(function(){n.timeout=setTimeout((function(){n.setState({visible:""})}),3e3)}))},n.timeout=null,n.state={message:"Default toast",color:"accent",visible:""},j.on("notify",(function(e,t){n.onShow(e,t)})),n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"toast",className:"toast "+this.state.visible+" "+this.state.color},r.a.createElement("div",{id:"frame",className:"frame"},this.state.message)))}}]),a}(n.Component),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isAnyLightOn:!0,lightsOn:21,totalLights:30},e.lightSwitch=function(){e.setState({isAnyLightOn:!e.state.isAnyLightOn}),e.state.isAnyLightOn?(e.setState({lightsOn:0}),k("Turned off all","primary")):e.setState({lightsOn:e.state.totalLights})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement(C,null),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement(u,{icon:"fas fa-lightbulb",size:"40",color:0===this.state.lightsOn?"grey":"gold"}),r.a.createElement("div",{className:"layout-column layout-align-end-end"},r.a.createElement("h2",{style:{paddingLeft:"5px"}},"Lights"),r.a.createElement("p",{style:{marginLeft:"0px",marginTop:"-25px"}},this.state.lightsOn," out of ",this.state.totalLights)),r.a.createElement(y,{id:"1",name:"lights",onChange:this.lightSwitch,checked:this.state.isAnyLightOn})))}}]),a}(n.Component),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={setTemperature:22,actualTemperature:24,selectedMode:"Eco",setTemperatureEco:16,setTemperatureDay:19,setTemperatureNight:22},e.handleClick=function(){console.log(e.props.value)},e.changeTemperatureMode=function(t){var a=""===t.target.innerHTML?e.state.selectedMode:t.target.innerHTML,n="";e.setState({selectedMode:a}),"Eco"===a?n=e.state.setTemperatureEco:"Day"===a?n=e.state.setTemperatureDay:"Night"===a&&(n=e.state.setTemperatureNight),e.setState({setTemperature:n})},e.setThermometerColor=function(){return"Day"===e.state.selectedMode?"deeppink":"Night"===e.state.selectedMode?"crimson":"deepskyblue"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"layout-row layout-align-center-center"},r.a.createElement(u,{icon:"Eco"===this.state.selectedMode?"fas fa-thermometer-empty":"fas fa-thermometer-half",size:"40",color:this.setThermometerColor()}),r.a.createElement("div",{className:"layout-column layout-align-end-end"},r.a.createElement("h2",null,r.a.createElement("strong",null,this.state.actualTemperature,"  \xb0C")),r.a.createElement("p",{style:{marginTop:"-25px"}},"set ",this.state.setTemperature," \xb0C"))),r.a.createElement("div",{className:"layout-row layout-align-space-between-center",style:{marginTop:"-20px"}},r.a.createElement(v,{checked:"Day"===this.state.selectedMode,value:"Day",onClick:this.changeTemperatureMode}),r.a.createElement(v,{checked:"Eco"===this.state.selectedMode,value:"Eco",onClick:this.changeTemperatureMode}),r.a.createElement(v,{checked:"Night"===this.state.selectedMode,value:"Night",onClick:this.changeTemperatureMode})))}}]),a}(n.Component),I=(a(69),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:e.props.value||30},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("p",{style:{margin:"-15px"}},this.props.description),r.a.createElement("div",{className:"slider-container layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{className:"slider-bar shadow",style:{}}),r.a.createElement("div",{className:"slider-bar",style:{width:this.state.value+"%",background:this.props.color}}),r.a.createElement("input",{className:"slider",type:"range",step:this.props.step,min:this.props.min,max:this.props.max,onChange:this.handleChange,value:this.state.value,style:{position:"relative"}})),r.a.createElement("p",{className:"slider-value"},this.state.value,"%")))}}]),a}(n.Component)),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={playing:!1,artistList:["MGK","G-Eazy","Eminem","Sandu Ciorba","Florin Salam"],songList:["Smoke and drive","Moana","Lose yourself","Aragaz cu butelie","Toate pozele cu tine"],songIndex:0,volume:69},e.prevSong=function(){0!==e.state.songIndex&&e.setState({songIndex:e.state.songIndex-1})},e.playSong=function(){e.setState({playing:!e.state.playing})},e.nextSong=function(){e.state.songIndex!==e.state.songList.length-1&&e.setState({songIndex:e.state.songIndex+1})},e.handleVolume=function(t){e.setState({volume:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("p",null,this.state.artistList[this.state.songIndex]," - ",this.state.songList[this.state.songIndex]),r.a.createElement("div",{className:"layout-row layout-align-center-center"},r.a.createElement(u,{icon:"fas fa-step-backward",size:"40",onClick:this.prevSong}),r.a.createElement(u,{icon:this.state.playing?"fas fa-pause":"fas fa-play",size:"40",onClick:this.playSong}),r.a.createElement(u,{icon:"fas fa-step-forward",size:"40",onClick:this.nextSong})),r.a.createElement("br",null),r.a.createElement(u,{icon:"fas fa-volume-up"}),r.a.createElement("br",null)),r.a.createElement(I,{value:this.state.volume,onChange:this.handleVolume}))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"80vh"},className:"layout-column layout-align-center-center"},r.a.createElement("h1",null,"Page not found brotha!"),r.a.createElement("p",{style:{color:"coral",marginTop:"-20px"}},r.a.createElement("strong",null,"404")),r.a.createElement("img",{src:"https://lh3.googleusercontent.com/proxy/BdJCR08JvJ3yuUO6ZE4yu4m5b5lPWlJm9Pq8Qw292LtyL7szTbkYkLTcxWCS5bSCUS4JkIaU22Vks-EY6NQIT0GclxFvAuNaCTBdmt44aiWVzoBvDbzxbNFUHLu-",width:"300px"}))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rooms:[{id:1,description:"This is a room, one of a kind, unique 1",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg",name:"Big room"},{id:2,description:"This is a room, one of a kind, unique 2",img:"https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg",name:"Small room"},{id:4,description:"This is a room, one of a kind, unique 3",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg",name:"Living room"},{id:6,description:"This is a room, one of a kind, unique 4",img:"https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg",name:"Guest room"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout-row layout-align-space-between-start flex-wrap"},this.state.rooms.map((function(e){return r.a.createElement("div",{key:e.id,className:"card flex-33",style:{minHeight:"415px"}},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{className:"layout-column layout-align-none-center flex-60"},r.a.createElement("img",{src:e.img,style:{borderRadius:"20px"},width:"80%"})),r.a.createElement("div",{className:"layout-column layout-align-start-start flex-30"},r.a.createElement("p",{style:{marginBottom:"-15px"}},"Lights on : 3"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Temperature: 20 C"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Windws open"),r.a.createElement("p",null,"Blinds open")))),r.a.createElement("div",{className:"interactions"},r.a.createElement(p.c,{to:"/room/".concat(e.id)},r.a.createElement(E,{raised:"true",size:"medium",type:"primary",text:"Get me there"}))))}),[this.state.rooms])))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rooms:[{id:1,description:"This is a room, one of a kind, unique 1",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg",name:"Big room"},{id:2,description:"This is a room, one of a kind, unique 2",img:"https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg",name:"Small room"},{id:4,description:"This is a room, one of a kind, unique 3",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg",name:"Living room"},{id:6,description:"This is a room, one of a kind, unique 4",img:"https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg",name:"Guest room"}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout-row layout-align-space-between-start flex-wrap"},this.state.rooms.map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("img",{src:e.img,style:{minWidth:"200px",width:"100%",maxWidth:"500px",borderRadius:"20px"}}),r.a.createElement("div",{style:{marginLeft:"20px"}},r.a.createElement("p",{style:{marginBottom:"-15px"}},"Lights on : 3"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Temperature: 20 C"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Windws open"),r.a.createElement("p",null,"Blinds open"))),r.a.createElement("div",{className:"interactions",style:{marginTop:"-20px"}},r.a.createElement(p.c,{to:"/room/".concat(e.id)},r.a.createElement(E,{raised:"true",size:"medium",type:"primary",text:"Get me there"}))))}),[this.state.rooms])))}}]),a}(n.Component),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-start-end flex-30",style:{paddingLeft:"10px"}},r.a.createElement(O,null),r.a.createElement(T,null),r.a.createElement(L,null),r.a.createElement(S,null))}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement(b,{name:"Alex",picture:"https://source.unsplash.com/ToqoQSH-WYQ/500x500"}),r.a.createElement(x,null)))}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rooms:[{id:1,description:"This is a room, one of a kind, unique 1",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/219/219438705.jpg",name:"Big room"},{id:2,description:"This is a room, one of a kind, unique 2",img:"https://thediyplaybook.com/wp-content/uploads/2019/05/guest-room-42.jpg",name:"Small room"},{id:4,description:"This is a room, one of a kind, unique 3",img:"https://r-cf.bstatic.com/images/hotel/max1024x768/142/142065825.jpg",name:"Living room"},{id:6,description:"This is a room, one of a kind, unique 4",img:"https://www.thespruce.com/thmb/5o_dpOCoqBxM79wcGqWWA_qt50U=/5100x2869/smart/filters:no_upscale()/GettyImages-513040397-583b37d83df78c6f6ad71fe8.jpg",name:"Guest room"}]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=parseInt(this.props.match.params.roomId),t=this.state.rooms.filter((function(t){return t.id===e}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(B,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.description),r.a.createElement("img",{src:t.img,style:{minWidth:"200px",width:"100%",maxWidth:"500px",borderRadius:"20px"}}),r.a.createElement("div",{style:{marginLeft:"20px"}},r.a.createElement("p",{style:{marginBottom:"-15px"}},"Lights on : 3"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Temperature: 20 C"),r.a.createElement("p",{style:{marginBottom:"-15px"}},"Windws open"),r.a.createElement("p",null,"Blinds open")))))))}}]),a}(n.Component),z=a(29),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={lights:[{id:3,name:"Light 1",roomId:1,value:80,warm:30},{id:4,name:"Light 2",roomId:1,value:80,warm:30},{id:16,name:"Light 1",roomId:2,value:30,warm:10},{id:5,name:"Light 3",roomId:1,value:80,warm:30},{id:36,name:"Light 1",roomId:3,value:30,warm:60},{id:6,name:"Light 4",roomId:1,value:80,warm:30},{id:26,name:"Light 2",roomId:2,value:30,warm:20},{id:56,name:"Light 3",roomId:2,value:30,warm:60}]},e.handleLights=function(){e.state.lights.map((function(e){return e.value=0}))},e.eachUniqueRoom=function(){Object(z.a)(new Set(e.state.lights.map((function(e){return e.roomId})))).forEach((function(t){return e.state.lights.filter((function(e){return e.roomId===t})).map((function(e){return console.log()}))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("h1",null,"Lights"),r.a.createElement("button",{className:"m_button accent",onClick:this.handleLights},r.a.createElement(u,{icon:"fas fa-power-off"}),"All lights warm")),r.a.createElement("div",{className:"layout-row layout-align-space-between-start flex-wrap"},this.state.lights.map((function(e){return r.a.createElement("div",{key:e.id,style:{minWidth:"200px",flex:"50%"}},r.a.createElement("p",null,e.name),r.a.createElement(I,{description:"brightness",step:"10",value:e.value,color:"orange"}),r.a.createElement(I,{description:"warmth",step:"10",value:e.warm,color:"hotpink"}))})))))}}]),a}(n.Component),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={blinds:[{id:3,name:"Blinds",roomId:1,value:0,warm:30},{id:16,name:"Blinds",roomId:2,value:0,warm:10},{id:26,name:"Blinds",roomId:3,value:100,warm:60}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Blinds"),r.a.createElement("button",{className:"m_button accent"},r.a.createElement(u,{icon:"fas fa-times"}),"Close all blinds"),r.a.createElement("div",{className:""},this.state.blinds.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{color:"coral"}},"In room ",e.roomId),0===e.value?r.a.createElement("p",null,"Blinds closed"):r.a.createElement("p",null,"Blinds open"))})))))}}]),a}(n.Component),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={windows:[{id:2,name:"Windows",roomId:1,value:0,warm:null},{id:15,name:"Windows",roomId:2,value:0,warm:null},{id:23,name:"Windows",roomId:3,value:100,warm:null}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Windows"),r.a.createElement("button",{className:"m_button accent"},r.a.createElement(u,{icon:"fas fa-times"}),"Close all windows"),r.a.createElement("div",{className:""},this.state.windows.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{color:"coral"}},"In room ",e.roomId),0===e.value?r.a.createElement("p",null,"Windows closed"):r.a.createElement("p",null,"Windows open"))})))))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={temperatures:[{id:3,name:"Temperature",roomId:1,value:21,warm:null},{id:16,name:"Temperature",roomId:2,value:22,warm:null},{id:26,name:"Temperature",roomId:3,value:19,warm:null}]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Temperatures"),r.a.createElement("p",null,"control each temperature mode from here + scheduled "),r.a.createElement("div",{className:""},this.state.temperatures.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{color:"coral"}},"In room ",e.roomId),r.a.createElement("p",null,"Temperature is ",e.value," \xb0C"))})))))}}]),a}(n.Component),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(G,null),r.a.createElement(D,null),r.a.createElement(R,null))}}]),a}(n.Component),H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={darkModeOn:null===localStorage.getItem("darkMode")},e.darkModeToggle=function(){localStorage.getItem("darkMode");"enabled"!==localStorage.getItem("darkMode")?(document.body.classList.add("dark"),localStorage.setItem("darkMode","enabled"),e.setState({darkModeOn:!0})):(document.body.classList.remove("dark"),localStorage.setItem("darkMode",null),e.setState({darkModeOn:!1}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center",style:{width:"100%",borderSize:"border-box"}},r.a.createElement("div",{className:"card",style:{minWidth:"275px",minHeight:"275px"}},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Appereance settings"),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"Dark mode")),r.a.createElement("div",null,r.a.createElement(y,{onChange:this.darkModeToggle,value:this.state.darkModeOn}))),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"Primary color")),r.a.createElement("div",null,r.a.createElement("div",{style:{width:"50px",height:"30px",background:"coral",marginRight:"25px"}}))),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"Accent color")),r.a.createElement("div",null,r.a.createElement("div",{style:{width:"50px",height:"30px",background:"deeppink",marginRight:"25px"}}))))),r.a.createElement("div",{className:"card",style:{minWidth:"275px",minHeight:"275px"}},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"User settings"),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"Picture")),r.a.createElement("div",{className:"profile",style:{width:"106px",height:"106px"}},r.a.createElement("img",{src:"https://source.unsplash.com/ToqoQSH-WYQ/500x500",style:{width:"100px",height:"100px"}})),r.a.createElement("div",null)),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"First name")),r.a.createElement(g,null)),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"Last name")),r.a.createElement(g,null)),r.a.createElement("div",{className:"layout-row layout-align-space-between-center"},r.a.createElement("div",{style:{minWidth:"100px"}},r.a.createElement("p",null,"City name")),r.a.createElement(g,null)),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),a}(n.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center"},r.a.createElement("h1",null,"Register page"),r.a.createElement("div",{className:"card",style:{width:"21em",paddingBottom:"50px"}},r.a.createElement("p",{style:{paddingLeft:"40px",marginBottom:"-10px",paddingTop:"30px"}},"Enter your data"),r.a.createElement("div",{className:"content layout-column layout-align-start-center"},r.a.createElement(g,{type:"text",dot:"hidden",placeholder:"Name"}),r.a.createElement(g,{type:"text",dot:"hidden",placeholder:"Last name"}),r.a.createElement(g,{type:"text",dot:"hidden",placeholder:"Email"}),r.a.createElement(g,{type:"password",dot:"hidden",placeholder:"Password"}),r.a.createElement(g,{type:"password",dot:"hidden",placeholder:"Enter password again"}),r.a.createElement(E,{raised:"true",text:"Press to register",type:"primary",icon:"fas fa-fingerprint"}))))}}]),a}(n.Component),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-column layout-align-center-center",style:{height:"70vh"}},r.a.createElement("h1",null,"Log in page"),r.a.createElement("div",{className:"card",style:{width:"21em"}},r.a.createElement("p",{style:{paddingLeft:"40px",marginBottom:"-10px",paddingTop:"30px"}},"Enter your credentials"),r.a.createElement("div",{className:"content layout-column layout-align-start-center"},r.a.createElement(g,{type:"text",dot:"success",placeholder:"Username"}),r.a.createElement(g,{type:"password",dot:"danger",placeholder:"Password"}),r.a.createElement(E,{raised:"true",text:"Log in brotha",type:"accent",icon:"fas fa-fingerprint"})),r.a.createElement("p",{style:{paddingLeft:"175px",marginTop:"-2px"}},"New? ",r.a.createElement(p.b,{to:"/register"},"Register here"))))}}]),a}(n.Component);var Q=function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/register",component:P}),r.a.createElement(h.a,{path:"/login",component:J}),r.a.createElement(h.a,{path:"/settings",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("div",{className:"layout-column layout-align-start-center"},r.a.createElement(H,null)),r.a.createElement(d,null))}}),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(B,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement(M,null))),r.a.createElement(d,null))}}),r.a.createElement(h.a,{exact:!0,path:"/rooms",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(B,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement(_,null))),r.a.createElement(d,null))}}),r.a.createElement(h.a,{exact:!0,path:"/room/:roomId",component:A}),r.a.createElement(h.a,{path:"/devices",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("div",{className:"layout-row layout-xs-column"},r.a.createElement(B,null),r.a.createElement("div",{className:"layout-row layout-align-end-start flex-wrap flex-70"},r.a.createElement(U,null))),r.a.createElement(d,null))}}),r.a.createElement(h.a,{component:W}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f399395f.chunk.js.map