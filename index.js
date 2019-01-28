// Code your solution in this file!
function logDriverNames(array) {
  array.forEach( a => console.log(a.name));

}

function logDriversByHometown(array, loc) {
  let newArray = array.filter (function (a) {
    for (let key in a) {
   if (a[key] == loc) {
     return a;  
  }
   }
 })
  newArray.forEach(i => console.log(i.name));
}

function driversByRevenue(array) {
  return [...array].sort( (a, b) => a.revenue - b.revenue);
}

function driversByName(array) {
  return [...array].sort( (a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(array) {
return array.reduce(function (acc, curr) {
  return acc + curr.revenue;
}, 0);
}

function averageRevenue(array) {
return array.reduce(function (acc, curr) {
  return (acc + curr.revenue/array.length);
}, 0);
 
}