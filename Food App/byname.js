
import {nav} from "./data.js"

document.getElementById("header").innerHTML=nav();


console.log("hello")


import {someTh} from "./data.js"



document.getElementById("showfood").addEventListener("click",showsome);


async function showsome(){
    var val=document.getElementById("bynamee").value
console.log(val)

var x= await someTh(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)

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








// const getCategoriesData = async () => {
//   // code here
//   try{
//   let x= await fetch( "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//   let data=await x.json()
//   console.log(data);
//   return data;
//   }catch(rej){
//     return  "something went wrong";
//   }
// };

