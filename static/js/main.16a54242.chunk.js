(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports=[{id:1,image:"assets/one.jpg",clicked:!1},{id:2,image:"assets/two.jpg",clicked:!1},{id:3,image:"assets/three.jpg",clicked:!1},{id:4,image:"assets/four.jpeg",clicked:!1},{id:5,image:"assets/five.jpg",clicked:!1},{id:6,image:"assets/six.jpg",clicked:!1},{id:7,image:"assets/seven.jpg",clicked:!1},{id:8,image:"assets/eight.jpg",clicked:!1},{id:9,image:"assets/nine.png",clicked:!1},{id:10,image:"assets/ten.jpg",clicked:!1},{id:11,image:"assets/eleven.jpg",clicked:!1},{id:12,image:"assets/twelev.jpg",clicked:!1},{id:13,image:"assets/thirteen.jpg",clicked:!1},{id:14,image:"assets/fouteen.jpeg",clicked:!1},{id:15,image:"assets/fifteen.jpg",clicked:!1},{id:16,image:"assets/sixteen.jpg",clicked:!1},{id:17,image:"assets/seventeen.webp",clicked:!1},{id:18,image:"assets/eighteen.jpg",clicked:!1},{id:19,image:"assets/ninteen.jpg",clicked:!1},{id:20,image:"assets/twenty.jpg",clicked:!1}]},,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(3),s=t.n(n),r=t(1),l=t(4),d=t(5),o=t(8),m=t(6),g=t(9),u=(t(16),function(){return i.a.createElement("div",{className:"jumbotron"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("img",{src:"https://media.giphy.com/media/huKYfJU2Uh4vS/giphy.gif",alt:"not found"})),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"heading"},i.a.createElement("h1",{id:"head"},"Interactive Puzzle!"),i.a.createElement("br",null),i.a.createElement("h3",{id:"headintro"},"Click on an image to earn points, but don't click on any image more than once!")))))}),f=(t(17),function(e){return i.a.createElement("h1",{className:"text-center score"},"Score = ",e.score,"  |  Max Score =",e.maxscore)}),p=(t(18),function(e){return i.a.createElement("div",{className:"container-fluid main"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"imgclass",alt:"not",src:e.image,onClick:function(){return e.update(e.id)}})))}),h=t(7),k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={images:h,score:0,maxScore:0},t.shuffle=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=e[a];e[a]=e[t],e[t]=c}return e},t.resetData=function(e){var a=e.map(function(e){return Object(r.a)({},e,{clicked:!1})});return t.shuffle(a)},t.handleCorrectGuess=function(e){var a=t.state,c=a.maxScore,i=a.score+1,n=Math.max(i,c);t.setState({images:t.shuffle(e),score:i,maxScore:n})},t.handleIncorrectGuess=function(e){t.setState({images:t.resetData(e),score:0})},t.update=function(e){var a=!1,c=t.state.images.map(function(t){var c=Object(r.a)({},t);return c.id===e&&(c.clicked||(c.clicked=!0,a=!0)),c});a?t.handleCorrectGuess(c):t.handleIncorrectGuess(c)},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement(u,null),i.a.createElement(f,{score:this.state.score,maxscore:this.state.maxScore}),i.a.createElement("div",{className:"container-fluid"},this.state.images.map(function(a){return i.a.createElement(p,{clicked:a.clicked,id:a.id,image:a.image,update:e.update})})))}}]),a}(c.Component);t(19);s.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.16a54242.chunk.js.map