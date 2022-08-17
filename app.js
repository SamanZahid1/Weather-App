function calculate(){
    let temp = +document.querySelector("#temp").value;
    if (temp > 30){
        document.querySelector("#result").innerHTML = "<div><img src=images/hot.png><br></div> It's hot";
    
    } else if (temp > 25) {
         document.querySelector("#result").innerHTML = "<div><img src=images/pleasent.jpg><br></div>It's pleasent outside";
      }
else if (temp > 15) {
         document.querySelector("#result").innerHTML = "<div><img src=images/cold.png><br></div> It's cold";
        }
else if (temp > 10) {
         document.querySelector("#result").innerHTML = "<div><img src=images/cold2.png><br></div> It's too cold outside";
}
else if (temp > 1) {
         document.querySelector("#result").innerHTML = "<div><img src=images/coldd.png><br></div> You need double jacket";
         }
else  {
         document.querySelector("#result").innerHTML = "<div><img src=images/freez.png><br></div> It's freezing outside";
}
}