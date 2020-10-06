// Created by grdniju karthi

// Created by DIVYANSHU KUMAR 😺

var profile , name , url , image , profile_img ,  story , text , i , pname , pimg , pdes , colors , i , rcolor;

profile = [
{
    name : "Sololearn",
    src : "https://api.sololearn.com/Uploads/Avatars/1.jpg",
    des : "We had fix bug's in sololearn app"
},{
    name : "Virat Bhai",
    src : "https://api.sololearn.com/Uploads/Avatars/14875620.jpg",
    des : "Mistri of Animation AIMU"
},{
    name : "Farhanaz",
    src : "https://api.sololearn.com/Uploads/Avatars/ 12155759.jpg",
    des : "Going #50 this month."
},{
    name : "Mitali",
    src : "https://api.sololearn.com/Uploads/Avatars/8175030.jpg",
    des : " most followed profile in sololearn"
},{
    name : "Arb Rahim Badsa",
    src : "https://api.sololearn.com/Uploads/Avatars/ 7038378.jpg",
    des : "Made Most game in sololearn"
},{
    name : "Satnam",
    src : "https://api.sololearn.com/Uploads/Avatars/9233826.jpg",
    des : "Head of Mistries AIMU"
},{
    name : "Jaseem Akhtar",
    src : "https://api.sololearn.com/Uploads/Avatars/ 1121510.jpg",
    des : "good coder and firebase expert "
},{
    name : "Aakaanksha",
    src : "https://api.sololearn.com/Uploads/Avatars/ 12942084.jpg",
    des : "Good Coder and CS student"
},{
    name : "Coder",
    src : "https://api.sololearn.com/Uploads/Avatars/ 11159966.jpg",
    des : "Firebase expert and great coder"
},{
    name : "Ashutost Agrawal",
    src : "https://api.sololearn.com/Uploads/Avatars/ 10779261.jpg",
    des : "Good Coder and JS expert"
},{
    name : "Vinay Gb",
    src : "https://api.sololearn.com/Uploads/Avatars/15771326.jpg",
    des : " co-founder of AIMU"
},{
    name : "Serena Yv",
    src : "https://api.sololearn.com/Uploads/Avatars/4586359.jpg",
    des : "CEO and FOUNDER of the blood coader"
},{
    name : "Sick L̲̅i̲̅n̲̅e̲̅ B̶r̶o̶",
    src : "https://api.sololearn.com/Uploads/Avatars/5371585.jpg",
    des : "Member of blood coader"
},{
    name : "Sudeep Jaiswal",
    src : "https://api.sololearn.com/Uploads/Avatars/8843885.jpg",
    des : "CEO and creator of AIMU"
},{
    name : "Divyanshu kr",
    src : "https://api.sololearn.com/Uploads/Avatars/14022015.jpg",
    des : "CEO and Founder of Message app"
},{
    name : "Nilesh kanti",
    src : "https://api.sololearn.com/Uploads/Avatars/17194531.jpg",
    des : "chasing lvl 17 in sololearn"
},{
    name : "A.S.M",
    src : "https://api.sololearn.com/Uploads/Avatars/8450145.jpg",
    des : "1st year at delhi university "
},{
    name : "Bad-Bit",
    src : "https://api.sololearn.com/Uploads/Avatars/12336223.jpg",
    des : "Good coder and font-end expert"
},{
    name : "Amit Bhai",
    src : "https://api.sololearn.com/Uploads/Avatars/10107008.jpg",
    des : "hi always be friendly to all"
}
];

colors = [
"#128C7E","#25D366","#3456ff","#ff4b66","#ff5722","#343434","#5e35b1","#fcfcfc"
];

//adding profile to story
function storyfunction(){
   story = document.getElementsByClassName("story-img");
   pname = document.getElementsByClassName("name");
   pimg = document.getElementsByClassName("account-img");
   pdes = document.getElementsByClassName ("des");
   text = document.getElementsByClassName("t");
   for(i = 0; i < profile.length ; i++){
       story[i].src = profile[i].src;
       text[i].innerHTML = profile[i].name ;
       pname[i].innerHTML = profile[i].name;
       pimg[i].src = profile[i].src;
       pimg[i].alt = profile[i].name;
       pdes[i].innerHTML = profile[i].des;
   }
}
setTimeout(storyfunction ,50);
//log in function 
function loginfunction(){
   var tab = document.getElementById("sign-in-page");
   var u = document.getElementById("u");
   tab.style.height = '0px';
   name = document.getElementById("name").value;
   url = document.getElementById("image").value;
   image = "https://api.sololearn.com/Uploads/Avatars/"+url+".jpg";
   profile_img = document.getElementById("humara");
   profile_img.src = image ;
   u.innerHTML = name ;
   document.getElementById("bg-img").src = image;
   document.getElementById("bg-name").innerHTML = name;
}
// chat in function 
function chathub(i , selected){
    var main = document.getElementById("body");
    var simple = document.getElementById("middle_section");
    var image = document.getElementById("msg-img");
    var name = document.getElementById("msg-name");
    var chat = document.getElementById("msg-window");
    main.style.height ='0px';
    chat.style.display = 'block';
    image.src = profile[i].src ;
    name.innerHTML = profile[i].name;
    simple.prepend(selected);
}
function best(){
    var main = document.getElementById("body");
    var chat = document.getElementById("msg-window");
    var e = document.getElementById("chat-screen");
    var child = e.lastElementChild;
    main.style.height ='100vh';
    chat.style.display = 'none';
    while(child){
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
function recieve() {
        
      var data = document.getElementById("msg").value;
      
      var div = document.createElement('div');
      div.innerHTML = '<div class="sendicon"><div class="msg">' +data+'</div></div>';
 document.getElementById('chat-screen').appendChild(div);       
  document.getElementById("msg").value = "";
}
        
function send() {
       var data = document.getElementById("msg").value;
      var src = document.getElementById("msg-img").src;
      var div = document.createElement('div');
      
      div.innerHTML = '<div class="recicon"><img src="'+ src+ '"/> <div class="msg">' + data + '</div></div>';
  document.getElementById('chat-screen').appendChild(div);       
       document.getElementById("msg").value = "";
}
function hello(){
    var icon = document.getElementsByClassName("land");
    icon[0].style.display = 'none';
    icon[1].style.display = 'none';
}
function mail(){
    var i = document.getElementById("pre");
    i.style.height = '0px';
}
setTimeout(mail,2000);

function colortoggle(){
    for(i = 0 ; i < colors.length ; i++){
     document.getElementsByClassName('col')[i].style.background = colors[i];
    }
}
setTimeout(colortoggle,100);

//menutoggle function 
function menutoggle(idx){
    document.getElementsByClassName('bg-menu')[0].style.background = colors[idx];
    document.getElementById("1head").style.background = colors[idx];
    document.getElementById("2head").style.background = colors[idx];
    if(idx == 7){
    rcolor = "#" + Math.random().toString(16).substr(2,6);
    document.getElementsByClassName('bg-menu')[0].style.background = rcolor;
    document.getElementsByClassName('col')[7].style.background = rcolor;
    document.getElementById("1head").style.background = rcolor ;
    document.getElementById("2head").style.background = rcolor ;
    }
}
function bgback(){
 document.getElementById("setting-menu").style.display = "none";
}
function bgmenu(){
    document.getElementById("setting-menu").style.display = "block";
}