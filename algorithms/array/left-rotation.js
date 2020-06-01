function rotLeft(a, d){
  
 for (var i = 0; i < d; i++) {
    let firstPosition = a.shift();
    a.push(firstPosition)
  }
  
  return a;
}

module.export = rotLeft;
