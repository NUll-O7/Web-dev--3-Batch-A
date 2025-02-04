function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
      if (drink === "coffee") {
        resolve("Order for Coffee Placed.");
      } else {
        reject("Order can not be Placed.");
      }
    });
  }
  
  function processOrder(orderPlaced) {
    return new Promise(function (resolve) {
      resolve(`${orderPlaced} and Served.`);
    });
  }
  
  placeOrder('coffee').then(function(orderStatus) {
      console.log(orderStatus)
      return orderStatus
  }).then(function(orderStatus) {
      let orderIsProcessed = processOrder(orderStatus)
      console.log(orderIsProcessed)
      return orderIsProcessed
  }).then(function(orderIsProcessed) {
      console.log(orderIsProcessed)
  })