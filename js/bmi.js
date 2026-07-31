const btn=document.getElementById("calculateBMI");

btn.addEventListener("click",()=>{

const height=document.getElementById("height").value;

const weight=document.getElementById("weight").value;

if(height===""||weight===""){

alert("Please enter height and weight.");

return;

}

const bmi=(weight/((height/100)*(height/100))).toFixed(1);

document.getElementById("bmiValue").innerHTML=bmi;

let status="";
let message="";

if(bmi<18.5){

status="Underweight";

message="You should focus on healthy weight gain.";

}

else if(bmi<25){

status="Healthy";

message="Excellent! Keep maintaining your fitness.";

}

else if(bmi<30){

status="Overweight";

message="Regular workouts and balanced nutrition are recommended.";

}

else{

status="Obese";

message="Consult a trainer and follow a structured fitness plan.";

}

document.getElementById("bmiStatus").innerHTML=status;

document.getElementById("bmiMessage").innerHTML=message;

});