function myFunction() {
        var x = document.getElementById("table");
        //alert("test   --> " + x.style.display)
        if (x.style.display ==  "none" || x.style.display ==  null) 
        {
        //alert("test2")
         x.style.display = "block";
        } 
    else  //(x.style.display == "block")
        {
      x.style.display = "none";
    }
    //alert("test4"  + x.style.display);
  }

 function guiter(){
   var a=document.getElementById("guitar");
   //alert("test-->"+a.style.display==null)
   if(a.style.display=="none")
   {
   // alert("test2");
    a.style.display="block";
   }
   else  //(a.style.display == "block")
        {
      a.style.display = "none";
    }
   // alert("test4"  + a.style.display);
  }
  function keyboard(){
    var b=document.getElementById("keyboard");
    if(b.style.display=="none")
    {
     b.style.display="block";
    }
    else 
         {
       b.style.display = "none";
     }
   }

   function Violin(){
    var c=document.getElementById("Violin");
    if(c.style.display=="none")
    {
     c.style.display="block";
    }
    else 
         {
       c.style.display = "none";
     }
   }

  //  document.getElementById('table').addEventListener('submit', function(event) {
  //   event.preventDefault(); // prevent form from submitting
  
  //   // Your success message logic goes here
  //   displaySuccessMessage();
  // });
  // document.getElementById('table').addEventListener('submit', function(event) {
  //   event.preventDefault(); // prevent form from submitting
  
  //   // Your success message logic goes here
  //   displaySuccessMessage();
  // });
  

 
var btn=document.getElementById('btn');
btn.addEventListener('click',function(e){
  e.preventDefault()
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tamil2531998@gmail.com",
    Password : "230B641BACEFE382749BADB31171C327932D",
    To : 'seet9943@gmail.com',
    From : "tamil2531998@gmail.com",
    Subject : "This is the subject",
    Body :"This poco Music Academy"+"<br> name:"+document.getElementById('name').value+
    "<br> Mobile_no:"+document.getElementById('phone').value
  }).then(
  message => alert("message Send Successffully")
  );
})
  
var btnn=document.getElementById('btnn');
btnn.addEventListener('click',function(e){
  e.preventDefault()

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tamil2531998@gmail.com",
    Password : "230B641BACEFE382749BADB31171C327932D",
    To : 'seet9943@gmail.com',
    From : "tamil2531998@gmail.com",
    Subject : "This is the subject",
    Body :"This poco Music Academy"+"<br> name:"+document.getElementById('gtn').value+
    "<br> Mobile_no:"+document.getElementById('gtp').value
  }).then(
  message => alert("message Send Successffully")
  );
})
var btnn=document.getElementById('keyb');
btnn.addEventListener('click',function(e){
  e.preventDefault()
  var name=document.getElementById('gtn').value;
  var phone=document.getElementById('gtp').value;
  var body='name:'+ name + '<br/> phone:'+phone;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tamil2531998@gmail.com",
    Password : "230B641BACEFE382749BADB31171C327932D",
    To : 'seet9943@gmail.com',
    From : "tamil2531998@gmail.com",
    Subject : "This is the subject",
    Body :"This poco Music Academy"+"<br> name:"+document.getElementById('keyn').value+
    "<br> Mobile_no:"+document.getElementById('keyp').value
  }).then(
  message => alert("message Send Successffully")
  );
})
var btn=document.getElementById('violin');
btn.addEventListener('click',function(e){
  e.preventDefault()
  var name=document.getElementById('gtn').value;
  var phone=document.getElementById('gtp').value;
  var body='name:'+ name + '<br/> phone:'+phone;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tamil2531998@gmail.com",
    Password : "230B641BACEFE382749BADB31171C327932D",
    To : 'seet9943@gmail.com',
    From : "tamil2531998@gmail.com",
    Subject : "This is the subject",
    Body :"This poco Music Academy"+"<br> name:"+document.getElementById('vin').value+
    "<br> Mobile_no:"+document.getElementById('vip').value
  }).then(
  message => alert("message Send Successffully")
  );
})


// This contact Page

// var button=document.getElementById('button');
// button.addEventListener('click',function(e){
//   e.preventDefault()
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "tamil2531998@gmail.com",
//     Password : "230B641BACEFE382749BADB31171C327932D",
//     To : 'seet9943@gmail.com',
//     From : "tamil2531998@gmail.com",
//     Subject : "This is the subject",
//     Body :"This poco Music Academy"+
//     "<br> name: "+document.getElementById('name').value+
//     "<br>Email_Id: "+document.getElementById('mail').value+
//     "<br>Address: "+document.getElementById('addres').value+
//     "<br>Age: "+document.getElementById('age').value+
//     "<br>City"+document.getElementById('city').value+
//     "<br>State:"+document.getElementById('state').value+
//     "<br>Pincode"+document.getElementById('zip').value
//   }).then(
//   message => alert("message Send Successffully")
//   );
// })
  
var button=document.getElementById('button');
button.addEventListener('click',function(e){
  e.preventDefault()
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tamil2531998@gmail.com",
    Password : "230B641BACEFE382749BADB31171C327932D",
    To : 'seet9943@gmail.com',
    From : "tamil2531998@gmail.com",
    Subject : "This is the subject",
    Body :"This poco Music Academy"+
    "<br> name:"+document.getElementById('name').value+
    "<br> Mail Id:"+document.getElementById('mail').value+
    "<br> Addres:"+document.getElementById('address').value+
    "<br> Phone:"+document.getElementById('phone').value+
    "<br> city:"+document.getElementById('city').value+
    "<br> state:"+document.getElementById('state').value+
    "<br> Pincode:"+document.getElementById('zip').value
  }).then(
  message => alert("message Send Successffully")
  );
})


function sendEmail(){
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "tamil2531998@gmail.com",
          Password : "230B641BACEFE382749BADB31171C327932D",
          To : 'seet9943@gmail.com',
          From : "tamil2531998@gmail.com",
          Subject : "This is the subject",
          Body : "This poco Music Academy"+
          "<br> name: "+document.getElementById('name').value+
          "<br>Email_Id: "+document.getElementById('mail').value+
          "<br>Address: "+document.getElementById('addres').value+
          "<br>Phone: "+document.getElementById('phone').value+
          "<br>City: "+document.getElementById('city').value+
          "<br>State: "+document.getElementById('state').value+
          "<br>Pincode: "+document.getElementById('zip').value
      }).then(
        message => alert("Successfully Send Massage")
      );

}