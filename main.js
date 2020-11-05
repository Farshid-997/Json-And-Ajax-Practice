//json is cobined with array inside  objects
//json and ajax
var pageCounter=1;
var animalContainer=document.getElementById("animal-info");
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    var ourRequest=new XMLHttpRequest();

    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' +pageCounter+'.json',true); //get the information from this url
    ourRequest.onload=function(){
    
        var ourData=JSON.parse(ourRequest.responseText); //parse it to json beacuse firstly browser knows it as a plain text
         renderHTML(ourData);
        //console.log(ourData[0]); get first element of array of object
    };
    ourRequest.send(); //Sends the request to the server
    pageCounter++;
    if(pageCounter>3){
     btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var htmlString="";
    for(i=0;i<data.length;i++){
    htmlString +="<p>"+data[i].name+" is a"+data[i].species+" that likes to eat ";
    for(ii=0; ii<data[i].foods.likes.length;ii++)
        {
        htmlString +=data[i].foods.likes[ii];
        if(ii==0){
            htmlString +=data[i].foods.likes[ii];
        }else{
            htmlString += " and "+data[i].foods.likes[ii];
        }
    }
    htmlString+='.</p>';
    }
animalContainer.insertAdjacentHTML('beforeend',htmlString);
}