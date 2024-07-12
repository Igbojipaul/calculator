const problem = document.getElementById("problem");
const answer = document.getElementById("answer");
const btns = document.getElementById("btns");
const btn = document.querySelectorAll(".btn");

btn.forEach(button =>{
  button.addEventListener("click", ()=>{
    let value = button.innerHTML;
    getValues(value);
  });
});

function getValues(value){
  if(value === "AC"){
    problem.textContent = "";
    answer.textContent = "";
  }
  else if(value === "DE"){
    problem.textContent =  problem.textContent.slice(0, -1);
  }
  else if(value === "="){
    try{
      answer.textContent = eval(problem.textContent); 
    }
    catch{
      answer.textContent = "E R R O R";
    }
  }
  else{
    problem.textContent += value;
  }

}





