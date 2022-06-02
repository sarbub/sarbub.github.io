let i = 0;
alert("you can now change calculator theme my double clicking on the c/t button");


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

function change(){
  const calculator = document.getElementById("calculator");
  const input = document.getElementById("input");
  const link = document.getElementById("link");
  if(i == 0){
    calculator.style.background = "#fff";
    input.style.background = "#fff"
    link.style.background = "#fff"
    i=1;
  }else{
    calculator.style.background = "#1C1C1C";
    input.style.background = "#1C1C1C"
    link.style.background = "#1C1C1C"
    i = 0;

  }
 

}




