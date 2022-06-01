
function display(num){

 let outputScreen = document.getElementById("input");
 outputScreen.value += num;
}

function zero(numb){
  let outputScreen2 = document.getElementById("input");
  outputScreen2.value = numb;
}
function del(){
  let outputScreen = document.getElementById("input");
  outputScreen.value = outputScreen.value.slice(0,-1);
}

function calc(){
  let outputScreen = document.getElementById("input");
  try{
    
    outputScreen.value = eval(outputScreen.value);
    
  }catch(err){
    outputScreen.value = "error";
  }
}
function sq(){
  let outputScreen = document.getElementById("input");
  outputScreen.value+="sqrt";
  outputScreen = Math.sqrt(outputScreen.value);
}

