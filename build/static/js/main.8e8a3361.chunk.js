(this.webpackJsonpalan_react=this.webpackJsonpalan_react||[]).push([[0],{100:function(e,t,a){e.exports=a(165)},105:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/media/logo.b0a1eb7c.png"},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),c=(a(105),a(33)),o=a(197),s=a(86),m=a.n(s),d=a(45),p=a.n(d),u=(a(159),a(207)),f=a(199),h=a(200),g=a(210),b=a(208),E=a(87),y=a.n(E),v=a(194),x=Object(v.a)((function(e){return{paper:{position:"absolute",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(5),top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none",overflow:"scroll",height:"60%"},infoContainer:{display:"flex",alignItems:"center",padding:"25px 0"},chipContainer:{display:"flex",flexWrap:"wrap",paddingLeft:"25px"},trySaying:{marginBottom:"25px"},chip:{margin:"5px"},form:{display:"flex",flexDirection:"column"}}})),w=function(e){var t,a=e.isOpen,n=e.setIsOpen,l=e.showFeedback,i=x();return t=a&&l?r.a.createElement("div",{className:i.paper},r.a.createElement(o.a,{variant:"h3"},"Something went wrong? Send us some feedback"),r.a.createElement("br",null),r.a.createElement("form",{className:i.form,onSubmit:function(e){e.preventDefault(),y.a.sendForm("gmail","alan_ai",e.target,"user_dhVImkgxaL27bxQ8pLPQ5").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},r.a.createElement(u.a,{name:"name",label:"Your name",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(u.a,{name:"email",type:"email",label:"Your email",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(u.a,{name:"feedback",multiline:!0,rows:5,helperText:"Describe the problems that you've encontered.",label:"Feedback",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(f.a,{type:"submit",variant:"outlined",color:"primary"},"Send"))):r.a.createElement("div",{className:i.paper},r.a.createElement(o.a,{variant:"h3"},"Instructions"),r.a.createElement(h.a,null),r.a.createElement("div",{className:i.infoContainer},r.a.createElement(o.a,{variant:"h5"},"News by Categories"),r.a.createElement("div",{className:i.chipContainer},["Business","Entertainment","General","Health","Science","Sports","Technology"].map((function(e){return r.a.createElement(g.a,{label:e,color:"primary",className:i.chip})})))),r.a.createElement(o.a,{variant:"body1",className:i.trySaying},'Try saying: "Give me the latest ',r.a.createElement("strong",null,r.a.createElement("em",null,"Business")),' news"'),r.a.createElement(h.a,null),r.a.createElement("div",{className:i.infoContainer},r.a.createElement(o.a,{variant:"h5"},"News by Terms"),r.a.createElement("div",{className:i.chipContainer},["Donald Trump","Bitcoin","PlayStation 5","Smartphones"].map((function(e){return r.a.createElement(g.a,{label:e,color:"primary",className:i.chip})})),r.a.createElement(g.a,{label:"...and more",className:i.chip}))),r.a.createElement(o.a,{variant:"body1",className:i.trySaying},"Try saying: \"What's up with ",r.a.createElement("strong",null,r.a.createElement("em",null,"PlayStation 5")),'"'),r.a.createElement(h.a,null),r.a.createElement("div",{className:i.infoContainer},r.a.createElement(o.a,{variant:"h5"},"News by Sources"),r.a.createElement("div",{className:i.chipContainer},["CNN","Wired","BBC News","Time","IGN","Buzzfeed","ABC News"].map((function(e){return r.a.createElement(g.a,{label:e,color:"primary",className:i.chip})})),r.a.createElement(g.a,{label:"...and more",className:i.chip}))),r.a.createElement(o.a,{variant:"body1",className:i.trySaying},'Try saying: "Give me the news from ',r.a.createElement("strong",null,r.a.createElement("em",null,"CNN")),'"')),r.a.createElement(b.a,{open:a,onClose:function(){return n(!1)}},t)},N=a(209),C=a(206),j=a(201),S=a(202),O=a(203),k=a(204),T=a(205),B=Object(v.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),A=function(e){var t=e.article,a=t.description,l=t.publishedAt,i=t.source,s=t.title,m=t.url,d=t.urlToImage,p=e.activeArticle,u=e.i,h=B(),g=Object(n.useState)([]),b=Object(c.a)(g,2),E=b[0],y=b[1];return Object(n.useEffect)((function(){window.scroll(0,0),y((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;u===p&&E[p]&&(e=E[p],window.scroll(0,e.current.offsetTop-50))}),[u,p,E]),r.a.createElement(j.a,{ref:E[u],className:p===u?h.activeCard:h.card},r.a.createElement(S.a,{href:m,target:"_blank"},r.a.createElement(O.a,{className:h.media,image:d||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",title:s}),r.a.createElement("div",{className:h.details},r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(l).toDateString()),r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"h2"},i.name)),r.a.createElement(o.a,{className:h.title,gutterBottom:!0,variant:"h5",component:"h2"},s),r.a.createElement(k.a,null,r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"p"},a))),r.a.createElement(T.a,{className:h.cardActions},r.a.createElement(f.a,{size:"small",color:"primary",href:m},"Learn More"),r.a.createElement(o.a,{variant:"h5",color:"textSecondary",component:"h2"},u+1)))},_=Object(v.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),I=[{color:"#00838f",title:"Latest News",text:"Give me the latest news about Health"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with Bitcoin"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],D=function(e){var t=e.articles,a=e.activeArticle,n=_();return t.length?r.a.createElement(N.a,{in:!0},r.a.createElement(C.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},r.a.createElement(A,{activeArticle:a,i:t,article:e}))})))):r.a.createElement(N.a,{in:!0},r.a.createElement(C.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},I.map((function(e){return r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},r.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},r.a.createElement(o.a,{variant:"h5",component:"h5"},e.title),e.info?r.a.createElement(o.a,{variant:"h6",component:"h6"},r.a.createElement("strong",null,e.title.split(" ")[2]),": ",r.a.createElement("br",null),e.info):null,r.a.createElement(o.a,{variant:"h6",component:"h6"},"Try saying: ",r.a.createElement("br",null)," ",r.a.createElement("i",null,e.text))))}))))},G=a(34),P=Object(v.a)((function(e){return{footer:Object(G.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(G.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(G.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(G.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(G.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),F=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)([]),s=Object(c.a)(i,2),d=s[0],u=s[1],f=Object(n.useState)(!1),h=Object(c.a)(f,2),g=h[0],b=h[1],E=P();return Object(n.useEffect)((function(){p()({key:"b3cdaca2506b35fedd1eb78ba458e93b2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)u(a),l(-1);else if("instructions"===t)b(!0);else if("highlight"===t)l((function(e){return e+1}));else if("open"===t){var r=n.length>2?m()(n,{fuzzy:!0}):n,i=a[r-1];r>a.length?p()().playText("Please try that again..."):i?(window.open(i.url,"_blank"),p()().playText("Opening...")):p()().playText("Please try that again...")}}})}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:E.logoContainer},d.length?r.a.createElement("div",{className:E.infoContainer},r.a.createElement("div",{className:E.card},r.a.createElement(o.a,{variant:"h5",component:"h2"},"Try saying: ",r.a.createElement("br",null),r.a.createElement("br",null),"Open article number [4]")),r.a.createElement("div",{className:E.card},r.a.createElement(o.a,{variant:"h5",component:"h2"},"Try saying: ",r.a.createElement("br",null),r.a.createElement("br",null),"Go back"))):null,r.a.createElement("img",{src:"https://scontent.fbho4-3.fna.fbcdn.net/v/t1.6435-9/67659112_438501920211949_8507331483155824640_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=BwtGq1DJF-IAX-QhR2X&_nc_ht=scontent.fbho4-3.fna&oh=00_AT_PmFFcTXNo0QIF0ivsdXi-ddASF-P6ekeq6pHdaMxjVg&oe=6334D7A6",width:"45%",className:E.alanLogo,alt:"logo"})),r.a.createElement(D,{articles:d,activeArticle:a}),r.a.createElement(w,{isOpen:g,setIsOpen:b}),d.length?null:r.a.createElement("div",{className:E.footer},r.a.createElement(o.a,{variant:"body1",component:"h2"},"Created by",r.a.createElement("a",{className:E.link,href:"https://www.linkedin.com/in/yvrjprshr/"}," Yuvraj Parashar"))))};i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.8e8a3361.chunk.js.map