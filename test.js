// test.js

function square(number){
  return (number * number);
}


var x = 0.6;
document.write("x = ");
document.write(x);
alert("x^2 = " + square(x));

var arr = [0,1,2,3,4];
document.write(", arr.length = ");
document.write(arr.length);

// single obj example
// var point = {
//   x:0.6, y:1
// };

function point(x_in, y_in){
  this.x = x_in;
  this.y = y_in;
  this.distance = dist;
}

function dist(x2,y2){
  return Math.sqrt((square(x2-this.x))+(square(y2-this.y)))
}

var point2 = new point(2,1);

switch(point2.y){
  case 1:
    alert("y = 1 in point2");
    break;
  default:
    break;
}

alert("distance between (2,1) and (4,7) = " + point2.distance(4,7));

document.write("\n\nend of code");
