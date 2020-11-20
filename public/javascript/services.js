
// JavaScript code 
function search_services() { 
    let input = document.getElementById('searchbar').value; 
    input=input.toLowerCase(); 
    let x=document.getElementsByClassName('item');
    //let searched_items = document.getElementByClassName('search_category'); 
   
    for (i = 0; i < x.length; i++) {  
        let textValue=x[i].textContent;
        x[i].style.display="none"
        if(input.length>0){
            if (textValue.toLowerCase().indexOf(input)>-1) { 
                console.log("Found something")
                x[i].style.display="block"; 
            } 
          
        }
        
    } 
} 