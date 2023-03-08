function nav(){
   
    return `<img src="https://www.themealdb.com/images/logo-small.png">
<input type="text"  id="bynamee" placeholder="Search..">
<button id="showfood">Search</button>
<button id="rec-day"> <a href="recofday.html">Receipe of the day</a></button>
<button id="rec-ran"> <a href="random.html"> Random Receipes</a></button>`
}

export {nav};




    async function  someTh(url){
        try{
         var x=await fetch(url);
         var y= x.json()
         return y;
        }catch{
            return "Error";
        }
    }
  


export {someTh};