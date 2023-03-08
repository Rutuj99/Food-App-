import {nav} from "./data.js"

document.getElementById("header").innerHTML=nav();




document.getElementById("rec-day").addEventListener("click",showsome1);
import {someTh} from "./data.js"

async function showsome1(){
    event.preventDefault()
 console.log("hello")

var x= await someTh(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)

console.log(x.meals)
 display(x.meals)

}


function display(data){
    document.getElementById("container").innerText="";
    data.forEach(elem => {
          var divi=document.createElement("div")

          var image=document.createElement("img")
          image.src=elem.strMealThumb;

          var h=document.createElement("h3");
         h.innerText=elem.strMeal;

         divi.append(image,h);
        //  console.log(h);
       console.log(divi)
          document.getElementById("container").append(divi)
       
    });
}