// Title
let heading = document.createElement("h1");
heading.innerHTML = "JavaScript_Array & Object";
document.body.appendChild(heading);
//style
heading.style.display = "flex";
heading.style.justifyContent = "center";

//outerContainer div
let outerContainer = document.createElement("div")
outerContainer.id="outerContainer"
document.body.appendChild(outerContainer)

//style
outerContainer.style.border="4px solid blue";
outerContainer.style.padding="20px";
outerContainer.style.display="flex";
outerContainer.style.flexWrap="wrap";
outerContainer.style.justifyContent="space-around"

//User Datas

const data=[ 

// 1st
    { name:"AAA",
    Employeeid:134,
    Address:{
        City:"Coimbatore",
        State:"Tamilnadu",
        Country:"India"
    },
    Hobbies:["Batmittion", "Football", "javaline"] },

//2nd

    { name:"BBB",
        Employeeid:1202,
        Address:{
            City:"Erode",
            State:"Tamilnadu",
            Country:"India"
        },
        Hobbies:["PoleVault", "Carrom", "Chess"] },

//3rd
        { name:"CCC",
            Employeeid:154,
            Address:{
                City:"Chennai",
                State:"Tamilnadu",
                Country:"India"
            },
            Hobbies:["LongJump", "HighJump", "javaline"] },

//4th

            { name:"DDD",
                Employeeid:164,
                Address:{
                    City:"Selam",
                    State:"Tamilnadu",
                    Country:"India"
                },
                Hobbies:["Shuttle", "Football", "Vollyball"] },

//5th

                { name:"EEE",
                    Employeeid:174,
                    Address:{
                        City:"Karur",
                        State:"Tamilnadu",
                        Country:"India"
                    },
                    Hobbies:["Batmittion", "throwBall", "javaline"] },


];

data.map(index=>{

    let innerContainer = document.createElement("div")
    innerContainer.id="innerContainer"
    outerContainer.appendChild(innerContainer)
    
    //style
    innerContainer.style.border="4px solid red";
    innerContainer.style.display="flex";
    innerContainer.style.flexDirection="column";
    innerContainer.style.flexWrap="wrap";
    innerContainer.style.padding="5px";
    innerContainer.style.margin="5px";

  
   
//appending Name
const name = document.createElement("h1");
name.innerHTML = `Name:${index.name}`
innerContainer.appendChild(name);

// Append Employee ID
const Employeeid = document.createElement("h2");
Employeeid.innerHTML = `Employee ID: ${index.Employeeid}`;
innerContainer.appendChild(Employeeid);

//Address container div
const box= document.createElement("div")
box.id="box"
innerContainer.appendChild(box)

//style
box.style.border="3px solid blue";
box.style.padding="5px"


// Append address
const Address = document.createElement("h3");
Address.innerHTML = "Address:";
box.appendChild(Address);

//city
const City=document.createElement("h3");
City.innerHTML=`City: ${index.Address.City}`;
box.appendChild(City);

//state
const State=document.createElement("h3");
State.innerHTML=`State: ${index.Address.State}`;
box.appendChild(State);

//country
const Country=document.createElement("h3");
Country.innerHTML=`Country: ${index.Address.Country}`;
box.appendChild(Country);

      


// Construct hobbies string using for loop
const hobbies = document.createElement("h3");

let content = "";
for (let i = 0; i < index.Hobbies.length; i++) {
    content += index.Hobbies[i];

    if (i !== index.Hobbies.length - 1) {
        content += ",";
    }
}
hobbies.innerHTML = `Hobbies: ${content}`;

innerContainer.appendChild(hobbies);



//delete  button html

const button=document.createElement("button")
innerContainer.appendChild(button)

//style
button.innerHTML="Remove"
button.style.borderBlockColor="green"
button.style.fontWeight="bold"

//event handler

button.addEventListener("click", clear)

function clear(){
    
    outerContainer.removeChild(innerContainer)
}

});













