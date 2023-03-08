
import {nav} from "./data.js"

document.getElementById("header").innerHTML=nav();



import {someTh} from "./data.js"



document.getElementById("rec-ran").addEventListener("click",showsome2);


async function showsome2(){
  event.preventDefault();
  console.log("hello")
var x= await someTh(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)

console.log(x.meals)
 display(x.meals)

}


function display(data){
    document.getElementById("container").innerText=""
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
