function validate(){

    let name = (document.forms["form"]["fname"].value).trim();
    // let name = document.getElementById("fname").value;
    let email= (document.forms["form"]["email"].value).trim();
    pos_at = email.indexOf("@");
    pos_dot = email.lastIndexOf(".");
    let phone= (document.forms["form"]["phone"].value).trim();
    let male= document.getElementById("male");
    let female= document.getElementById("female");
    let other= document.getElementById("other");
    let pin= document.getElementById("pin").value.trim();
    let address=document.getElementById("address").value.trim();
    let skills= document.getElementsByName("skills");
    let nRegex = /^[a-bA-z]*$/gi;
    let pRegex = /^[0-9]*$/gi;
    let aRegex = /^[a-b0-9A-z_/,-]*$/gi;
    radioCount=0;
    checkCount=0;
    // name
    if (name == "" )
    {
        alert("Name must be filled");
        document.forms["form"]["fname"].focus();
        return false; //will not allow the form to submit since it is returning false
    }
    // else if (typeof (name) === 'number') ----x(not working)
    // if(isNaN(name) == false)
    if( nRegex.test(name)== false)
    {
        alert("Name can only include String");
        document.forms["form"]["fname"].focus();
        return false;
    } 
   
    //email
    if(email=="" ||pos_at<1 ||((pos_dot- pos_at) < 2) || (pos_dot>((email.length) - 3)))
    {
        alert("Enter a valid E-mail Id");
        document.forms["form"]["email"].focus();
        return false; 
    }

    //phone
    if(phone=="" || pRegex.test(phone)== false || phone.length!=10)
    {
        alert("Enter a valid 10 digit phone number ");
        document.forms["form"]["phone"].focus();
        return false;
    }
    //gender
    if(male.checked)
    { radioCount++;}
   if(female.checked)
   { radioCount++;}
   if(other.checked)
   { radioCount++;}
   if(radioCount==0)
   {male.focus();
   alert("Select your Gender");
   return false;
   }
 //dob
 let dob=document.getElementById("dob").value
 if(dob=="")
 {
    alert("Enter your Date of Birth");
    document.forms["form"]["dob"].focus();
    return false;
}


//pin
if(pin=="" || isNaN(pin)||pin.length!=6)
     {
         alert("Enter a 6 digit pin code");
         document.forms["form"]["pin"].focus();
         return false;
     }
      //address
if(address=="")
    {
        alert("Address can't be blank");
        document.forms["form"]["address"].focus();
        return false;
    }
if(aRegex.test(address)== false)
{
    alert("Address cannot include special characters other than _ or / or , or - ");
    document.forms["form"]["address"].focus();
    return false;  
}
// skills
/*for(i=0;i<skills.length;i++)
{
    if(skills[i].checked)
     {checkCount++;}
}
if (checkCount<2){
    alert("You should have worked with minimum of two of the following ");
    return false;
}*/
//file
let upload=document.getElementById("upload").value
if(upload==""|| (/(\.doc|\.docx|\.pdf)$/i).test(upload)==false)
{
   alert("Attach your resume/Cv  Allowed formats: .doc, .docx, .pdf");
   document.forms["form"]["upload"].focus();
   return false;
}

else{
    console.log(form);
    alert("Successfully submitted");
    return true;
}

}