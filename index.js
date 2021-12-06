// Click counter

const firstButton = document.querySelector("#btn1")
const secondButton = document.querySelector("#btn2")
const delayButton = document.querySelector("#btn3seconds")

let counter=0;

const incrementCounter = ()=>{
   console.log(counter++);
}
firstButton.addEventListener('click', incrementCounter)
secondButton.addEventListener('click', incrementCounter)


const logAfter3 = ()=>{
  console.log('after 3 seconds');
}

delayButton.addEventListener('click',()=>{
  setTimeout(logAfter3,3000)
})

// page onload
const pageOnload = ()=>{
  console.log('DOM fully loaded and parsed');
}

window.addEventListener('DOMContentLoaded', pageOnload);

//Mouse position

/* const printCoordinates = (event)=>{
  document.body.innerHTML= `<i>X-coordinate </i>:<strong> ${event.clientX}</strong> <br> 
  <i>Y-coordinate </i>:<strong>${event.clientY}</strong>`
}
document.addEventListener("click",printCoordinates) */

// teacher solution for mouse position
document.addEventListener("mouse",(event)=>{
  console.log(event.pageX,event.pageY);
}) 



//Mouse position online tool

// get x and y position of mouse
/* let count=0;

const xPosition =[]
const yPosition =[]

const printCoordinates = (event)=>{
 
  count++
  xPosition.push(event.clientX)
  yPosition.push(event.clientY)
  //console.log(event.clientX);
}
document.addEventListener("click",printCoordinates)

// average of position
console.log(xPosition);
console.log("y position"+ yPosition);

// display after 30 seconds */

// teacher solution for average of x and y co-ordinates
allXCoordinate=[]
allYCoordinate=[]
console.log(allXCoordinate);
console.log(allYCoordinate);

const collectMostCoordinate = (event)=>{
  const xCoordinate = event.pageX
  const yCoordinate = event.pageY

  allXCoordinate.push(xCoordinate)
  allYCoordinate.push(yCoordinate)
}
document.addEventListener('mousemove',collectMostCoordinate)

setTimeout(() => {
  document.removeEventListener('mousemove',collectMostCoordinate)

const sumOfXCoordinate = allXCoordinate.reduce((previousValue, currentValue)=>  previousValue + currentValue,0)
const sumOfYCoordinate = allYCoordinate.reduce((previousValue, currentValue)=>  previousValue + currentValue,0)
console.log(sumOfXCoordinate);
console.log(sumOfYCoordinate);
const avgXCoordinate = sumOfXCoordinate/allXCoordinate.length
const avgYCoordinate = sumOfYCoordinate/allYCoordinate.length
console.log(avgXCoordinate);
console.log(avgYCoordinate);
}, 3000);


