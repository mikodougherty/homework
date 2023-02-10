// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

document.getElementById('stopButton').addEventListener('click', function(){
    document.getElementsByClassName('bulb').stopLight.style.backgroundColor = "red";
    document.getElementsByClassName('bulb').slowLight.style.backgroundColor = "black";
    document.getElementsByClassName('bulb').goLight.style.backgroundColor = "black";
})

document.getElementById('slowButton').addEventListener('click', function(){
    document.getElementsByClassName('bulb').slowLight.style.backgroundColor = "yellow";
    document.getElementsByClassName('bulb').stopLight.style.backgroundColor = "black";
    document.getElementsByClassName('bulb').goLight.style.backgroundColor = "black";
})

document.getElementById('goButton').addEventListener('click', function(){
    document.getElementsByClassName('bulb').goLight.style.backgroundColor = "green";
    document.getElementsByClassName('bulb').slowLight.style.backgroundColor = "black";
    document.getElementsByClassName('bulb').stopLight.style.backgroundColor = "black";
})