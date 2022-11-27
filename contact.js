function subForm()
{
    var out=document.getElementById("output");
    var fName=document.getElementById("fullname").value;
    var eMail=document.getElementById("emailaddr").value;
    var phNum=document.getElementById("phnumber").value;
    var intArea=document.getElementById("sltarea").value;
    var usrMsg=document.getElementById("msgdata").value;
/*
   if(eMail=="" && phNum=="")
   {
    out.innerHTML="Please provide your email address ond/or phone number.";
    out.style.color="red";
   }
   else  if(fName.length !==0 && eMail.length !==0 && usrMsg.length !==0)
    {
      out.innerHTML="Thanks for your message. I'll get back to you soon.";
      out.style.color="green";
    }
    else if(fName.length !==0 && phNum.length !==0 && usrMsg.length !==0)
    {
      out.innerHTML="Thanks for your message. I'll get back to you soon";
      out.style.color="green";
    }
    else
    {
        out.innerHTML="Please provide";
        out.style.color="red";
    }
*/


    if(eMail=="" && phNum=="")
   {
    out.innerHTML="Please provide your email address ond/or phone number.";
    out.style.color="red";
   }
   else  if(fName !=="" && eMail !=="" && usrMsg !=="")
    {
      out.innerHTML="Thanks for your message. I'll get back to you soon.";
      out.style.color="green";
    }
    else if(fName !=="" && phNum !=="" && usrMsg !=="")
    {
      out.innerHTML="Thanks for your message. I'll get back to you soon";
      out.style.color="green";
    }
    else
    {
        out.innerHTML="Please try again";
        out.style.color="red";
    }




}
