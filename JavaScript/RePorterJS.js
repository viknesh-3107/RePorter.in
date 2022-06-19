function roll1(){
    document.getElementById("imgroll").src="https://aptlogistics.com/wp-content/uploads/2020/01/Africa-freight-forwarding-services.jpg";
}

function roll2(){
    document.getElementById("imgroll").src="https://www.mesinc.net/wp-content/uploads/2020/01/global-logistics-1.jpg";
}
function msg(){
    let val = confirm("Are you Really want to mail?");
    if (val){
    location.href="mailto:vignesh.csv.2001@gmail.com?subject=Example&body=Example_message";}
    else{
    location.href="#";}
}
function callus(){
    alert("+91 777-111-8310");
}
function feedback(){
    location.href="mailing.html"
    // prompt("Please Enter Your Valuable Feedback: ");
}
function locations(){
    location.href="https://goo.gl/maps/di89sYbmoBnz8PCN8"
}
function tod(){
    let today = new Date().toISOString();
    document.getElementById("shipdate").value = today.slice(0, 10);
    document.getElementById("shiptime").value = time();
}
function whatsapp(){
    let conf=confirm("Are you sure you want to join our whatsapp via QR CODE");
    if (conf){
        location.href="wa_services.html";
    }
    else{
        if (confirm("Are you sure you want to join our whatsapp via Group Link")){
            location.href="https://chat.whatsapp.com/GHZljrSp39e9GwJLfumEQg";
        }
        else{
            location.href="#";
        }
    }
}
var predata="0000";
var count =1;
function disp(id_value){
    let id=id_value.slice(3,8);
    let id_fin=id_value[7];
    let arr=id_fin+"arrow";
    let elements=document.getElementById(id_value);
    let element=document.getElementById(id);
    let element1=document.getElementById(id_fin);
    let arrows=document.getElementById(arr);
    if (count==1){
        predata=id;
        element.style.display = 'block';
        count++;
    }
    
    if (predata==id){
    element.style.display = 'none';
    elements.style.backgroundColor="rgba(242, 242, 242, 0.852)";
    element1.style.color="black";
    arrows.innerHTML="&#11167;";
    count++;
    }
    else{
    element.style.display = 'block';
    elements.style.backgroundColor="darkblue";
    element1.style.color="white";
    arrows.innerHTML="&#11165;";
    predata=id;
    count++; }
    }       
var k=0;
// var imagearray=[
//     "https://msa-lmsc.com/images/slider/slide8.jpg",
//     "https://www.state.gov/wp-content/uploads/2019/04/shutterstock_753807385-2560x852.jpg",
//     "https://www.pival.com/wp-content/uploads/2017/10/pival-transportation-logistics.jpg",
//     "https://7space.sgp1.digitaloceanspaces.com/7L38/1600906734.5fa9c6e3cbdec3fd3ad66860106b43ac.jpg",
//     "https://ticaribilimler.yeditepe.edu.tr/sites/default/files/international_logistics_and_transportation_slider_0.jpg",
//     "https://www.mesinc.net/wp-content/uploads/2020/01/global-logistics-1.jpg"];
var imagearray=[
    "./Images/Slideshow/S2.jpg",
    "./Images/Slideshow/S3.webp",
    "./Images/Slideshow/S4.jpg",
    "./Images/Slideshow/S5.jpg",
    "./Images/Slideshow/S6.jpg",
    "./Images/Slideshow/S1.jpg"];
function postslideshow(){
    if(k==6){
        k=0;
        var result = imagearray[k];
        k=k+1;
        action(result);
    }
    else{
    var result = imagearray[k];
    k=k+1;
    action(result);}
}
function preslideshow(){
    if(k==0){
        k=6;
        k=k-1;
        var result = imagearray[k];
        action(result);
    }
    else{
        k=k-1;
       var result = imagearray[k];
       action(result);}
}
function action (result) {
    document.getElementById("imgroll").src=result;
  }

function focus(ids){
    var element=document.getElementById(ids);
    element.style.Color="red";
}
function detail(forid){
    var formarray=[];
    const form = document.getElementById(forid);
    for(let i=0; i<7; i++) {
        localStorage.name = form.elements[i].name +" : "+form.elements[i].value;
        formarray.push(localStorage.name);
        
    }
    localStorage.name =form.elements[0].value;
    Email.send({
        SecureToken : "8d9c8e69-ce8a-4d1c-b654-8f4ac27692bd", 
        To: prompt("Please enter your email address"),
        From: "ebookskart2001@gmail.com",
        Subject: " Services Booked !!  ",
        Body:"Hi, "+document.getElementById("name").value + "<br>"+"Your Services was Booked <br>"+formarray[0]+ "<br>"+formarray[1]+ "<br>"+formarray[2]
+ "<br>"+formarray[3]+"<br>"+formarray[4]+"<br>"+formarray[5]+"<br>"+formarray[6]+"<br>"+"Booked Time : "+time()+"<br>Booked Date : "+date()+"<br>"+
        "<br><br>Thank you",
    }).then(function (message) {
        let con= confirm(" Your Feedback Sent Successfully ");
        if(con==true) {location.reload();}
        console.log(message);
        });      
}
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
    function time(){
          const d = new Date();
          let h = addZero(d.getHours());
          let m = addZero(d.getMinutes());
          let s = addZero(d.getSeconds());
          let time = h + ":" + m + ":" + s;
          return time;
    }
    function date(){
        const d = new Date();
        let date = addZero(d.getDate());
        let month = addZero(d.getMonth()+1);
        let year = addZero(d.getFullYear());
        let today = date + "-" + month + "-" + year;
        return today;
    }
