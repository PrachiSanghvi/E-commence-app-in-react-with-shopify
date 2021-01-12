
sub.onclick = function(){
    var strText = document.getElementById("textone").value;          
    var strText1 = document.getElementById("textTWO").value;
    var integer = parseInt(strText, 10);
    var integer1 = parseInt(strText1, 10);

    var sum=integer+integer1;
  var sub=integer-integer1;
   var result;
    if(strText==50){
        result="true";
    }

    
   else if(sub==50){
        result="true";
    }
   
   else if(strText1==50){
        result="true";
    }

    else if(sum==50){
        result="true";
    }
    else{
        result="false";
    }

    document.getElementById('spanResult').textContent = result;
}


sub2.onclick = function(){
    var a2=document.getElementById("inp2").value;
    var a22=a2.split(",");
    var b2=[];
    var len2=a22.length;


for(let i=0;i<len2;i++){
    if(b2.indexOf(a22[i])===-1){
        b2.push(a22[i]);
    }
}
// document.write(b2);
 document.getElementById("spanResult2").innerText = b2;

}   


sub3.onclick = function(){
    var a31 =document.getElementById("inp31").value;
    var a32=document.getElementById("inp32").value;
    var box = document.getElementById('spanResult3');
    var years=[];
for (var year = a31; year <= a32; year++)
    {
    var d = new Date(year, 0, 1); //here we use 0 as week day from 0-6 and for date 1-31
    if ( d.getDay() === 0 ){
        //alert(year);
        years.push(year);
       
        document.getElementById("spanResult3").innerHTML="1st January is being on Sunday  "+years;
      // document.write("1st January is being a Sunday  "+year);
     //  box.innerHTML = year;
       
}
    
}
}

sub4.onclick = function(){
    var today=new Date();

// document.write(today);

var chmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
chmas.setFullYear(chmas.getFullYear()+1); 
}  
var oneday=1000*60*60*24;
document.getElementById("spanResult4").innerHTML=Math.ceil((chmas.getTime()-today.getTime())/(oneday))+
" days left until Christmas!";
}

sub5.onclick = function () {
    let N5 = document.getElementById("inp5").value;
    let N51 = document.getElementById("inp51").value;
  

    let n = new Array(N5 + 1)
    let i;
    let ans = 0;
    for (i = 0; i <= N5; i++) {
        if ((i).toString().includes(N51)) {
            ans = ans + (i).toString().split(N51).length - 1;
        }
    }
   document.getElementById("spanResult5").innerHTML=ans;
}




sub6.onclick = function(){
    var a6=document.getElementById("inp6").value;
    var a61=a6.split(",").map(Number);
function bubble_sort(a){
    var n=a.length;
var temp;
for(i=0;i<n-1;i++){
    for(j=0;j<n-1-i;j++){
        if(a[j]>a[j+1]){
            temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
document.getElementById("spanResult6").innerHTML=a;
}

bubble_sort(a61);
}

// sub7.onclick = function(){
//     var a7=document.getElementById("inp7").value;
//     var a71=a7.split(",").map(Number);
//    //   alert(a71.length);
//     var len7=a71.length;
 

// var a70=[];

// var len71=len7-1;

// var last=(len7/2)+1;



// for(i=0;i<=a71.length-2;i=i+2){

// a70[i]=a71[i]+a71[i+1];

// // alert(a70[i]);


// //  document.write(a70[i]);

// }
  

// if(len7%2==1){
//   var k=a71[len71];
//     a70[last]=Math.pow(k,2);
    

// }document.getElementById("spanResult7").innerText=a70;}


sub7.onclick = function(){
    var a7=document.getElementById("inp7").value;
    var a71=a7.split(",").map(Number);
   //   alert(a71.length);
    var len7=a71.length;
 

var a70=[];

var len71=len7-1;

var last=(len7/2)+1;


var c=0;
for(i=0;i<=a71.length-2;i=i+2){

a70[c]=a71[i]+a71[i+1];
c++;
// alert(a70[i]);


//  document.write(a70[i]);

}
  

if(len7%2==1){
  var k=a71[len71];
  
    a70[c]=Math.pow(k,2);
    

}document.getElementById("spanResult7").innerText=a70;}


sub8.onclick = function(){
    function prefixsums(arr) {
    
        var newarr = [];
        for (var i = 0; i < arr.length; i++) {
          newarr[i] = 0;
          for (var j = 0; j < i + 1; j++) {
           newarr[i] += arr[j];
          }
        }
        return newarr;
      }
    
      var a8=document.getElementById("inp8").value;
        let a81=a8.split(",").map(Number);
      document.getElementById("spanResult8").innerHTML=prefixsums(a81);
      //write(prefixsums(a81));
    
    }


sub9.onclick = function () {

    let txt9 = document.getElementById("inp9").value;

    // var txt = 'p3yth4on5';
    let x9;
    let count9 = 0;

    for (x9 of txt9) {

        if (x9 >= '0' && x9 <= '9') {
            if (count9 <= 0) {
                txt9 = txt9.replace(x9, "$")
                count9++;
            }
            else {
                txt9 = txt9.replace(x9, '')
            }
        }
    }
    document.getElementById("spanResult9").innerHTML = txt9;
    // console.log(txt);
}

//        document.getElementById("body").css('background-color', 'red');
//         clicked  = false;

//   document.getElementById("sub12").click(function(){
//     if(clicked){
//        document.getElementById("body").css('background-color', 'red');
//         clicked  = false;
//     } else {
//         $(this).css('background-color', 'blue');
//         clicked  = true;
//     }   
// });
 
sub10.onclick = function(){

let a101=document.getElementById("inp10").value.toLowerCase();


let arr=['Shivam','21','GEC Modasa','Prakash','27','lucent inovation'];


if(a101=='shivam'){
    document.getElementById('spanResult10').innerHTML=`Name is ${arr[0]} and age is ${arr[1]} He is Studying in ${arr[2]}`;

}
else if(a101=='prakash'){
    document.getElementById('spanResult10').innerHTML=`Name is ${arr[3]} sir and age is ${arr[4]} He is Working in ${arr[5]}`;
    
}

else{
    document.getElementById('spanResult10').innerHTML='Please Insert Name as Shivam or Prakash';
}

}


      

//     sub9.onclick = function(){

//         function rpls(input_str) {
        
//             return input_str.replace(/[0-9]/, '$');
         
//           }
        
//           var a9=document.getElementById("inp9").value;
//           document.getElementById("spanResult9").innerHTML=rpls(a9);
         
//         }