let resulth=0
let resultg=0

// console.log(score)
function add1h()
{
    resulth = resulth+1
     document.getElementById("score-home").textContent=resulth
   
    
}
function add2h()
{
    resulth = resulth+2
     document.getElementById("score-home").textContent=resulth
   
    
}
function add3h()
{
    resulth = resulth+3
     document.getElementById("score-home").textContent=resulth
   
    
}
function add1g(){
    resultg +=1
    document.getElementById("score-guest").textContent=resultg
}

function add2g(){
    resultg +=2
    document.getElementById("score-guest").textContent=resultg
}

function add3g(){
    resultg +=3
    document.getElementById("score-guest").textContent=resultg
}