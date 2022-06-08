// EVENTS11
    var  getuserName = document.createElement("input")
    document.body.appendChild(getuserName)
    getuserName.placeholder = "Enter Your Name:";
  


    var birthDay = document.createElement("input")
    birthDay.type = "Date";
    document.body.appendChild(birthDay);


    
    var saveDtailes = document.createElement("button")
    document.body.appendChild(saveDtailes)
    saveDtailes.appendChild(document.createTextNode("SAVE!"));
    saveDtailes.addEventListener("click",DatilesFunc)
    document.getElementById("myWel").addEventListener("mouseover",changeColor )
    document.getElementById("myWel").addEventListener("mouseout",changeColorBack )


    function DatilesFunc (){
        var saveName = getuserName.value
        var saveDate = birthDay.value
        console.log(saveName,saveDate);

        var myYear = +saveDate.substring(0,4);

        if( new Date().getFullYear()-myYear> 18 && myYear > 0){
           document.getElementById('myWel').innerText ='WELCOME!';
           funcNames()
        
        }

        
        else{
            document.getElementById('myWel').innerText ='NO ENTRY!'
            imgNoEntery = document.createElement("img");
            imgNoEntery.src = "https://media.tenor.com/images/514ea91012be90cfd971a787ac661140/tenor.gif";
            document.body.appendChild(imgNoEntery);
            location.reload();
        }
        
    }


function changeColor() {
    document.getElementById("myWel").style.color = "green";
}
function changeColorBack() {
    document.getElementById("myWel").style.color = "black";

}






var familyName= document.createElement("input");
familyName.placeholder = "Enter your lasr name:";
document.body.appendChild(familyName)
    for (var i = 0 ; i < 4 ; i++){
         var firsrName= document.createElement("input")
         firsrName.id = "myfirst_Name"
         firsrName.placeholder = "Enter your name:";
        
        
     }

     


    
    
    var saveButton = document.createElement("button");
    saveButton.appendChild(document.createTextNode("SEND!"));
    document.body.appendChild(saveButton);
    saveButton.addEventListener("click",saveNamesFunc);
    




function saveNamesFunc() {
     saveLastN = familyName.value
     saveFirstN = firsrName.value
    console.log(saveLastN,saveFirstN);
}


inputMain =document.createElement("input")
inputMain.setAttribute("id", "f_Input")
inputFamily =document.createElement("input")
document.body.appendChild(inputMain)
document.body.appendChild(inputFamily)
var saveButton = document.createElement("button");
saveButton.appendChild(document.createTextNode("SEND!"));
document.body.appendChild(saveButton);


var namesArray = []
function saveFirstName () {
    if(namesArray.length < 4 && last_input.value.length > 0){
        last_input.disabled = true;
        namesArray.push(first_input.value);
        name_list.innerHTML += "<li>" + first_input.value +  " " + last_input.value + "</li>" ;
        first_input.value = " ";
    }
    }


    var namesArray = []
    var counter = 0 ;
    function saveFirstName () {
        if(namesArray.length < 4 && last_input.value.length > 0){
            last_input.disabled = true;
            namesArray.push(first_input.value);
            name_list.innerHTML += "<li id='li_id_" + counter++ + " '>" + first_input.value +  " " + last_input.value + "</li>" ;
            first_input.value = " ";
            if(first_input.value[0]==last_input.value[0].toLowerCase()){

            }
            document.getElementById("li_id_" + (counter-1)).style.color = "red";
        
        }
        }

function createInput () {
    search_div.innerHTML = "<input oninput='searchFunc()' type='search' id='search_input'/>"
}
function searchFunc(){
    resulte_div.innerHTML = " ";
    for (var i = 0 ; i <namesArray.length ; i++){
        if (namesArray[i].includes(search_input.value)){

            resulte_div.innerHTML += namesArray[i] + '\n' ; 
        }
    }

}
resulte_div.innerHTML = document.getElementById("search_input").value; 
