// convertFahrToCelcius('1')

function convertFahrToCelcius(fahrenheit) {
    if(typeof fahrenheit == 'number' || !isNaN(fahrenheit)){
      var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = `${fTemp} \xB0F is ${fToCel.toFixed(4)} \xB0C.`;
      console.log(message);
    }else{
      console.log(`${fahrenheit} is not a valid number but a/an ${typeof fahrenheit} type`)
    }  
  } 
  
  // Array assignment('2')
  
  function checkYuGiOh(n){
    arr = Array.from({length: n}, (_, i) => i + 1)
    arr.forEach((x, key) => {
      if(x%2 == 0 && x%3 == 0){
        arr[key] = 'yu-gi'
      }else if(x%3 == 0 && x%5 == 0){
        arr[key] = 'gi-oh'
      }else if(x%5 == 0 && x%2 == 0){
        arr[key] = 'yu-oh'
      }else if(x%2 == 0){
        arr[key] = 'yu'
      }else if(x%3 == 0){
        arr[key] = 'gi'
      }else if(x%5 == 0){
        arr[key] = 'oh'
      }
    })
    console.log(arr)
  }
  
  checkYuGiOh(10)