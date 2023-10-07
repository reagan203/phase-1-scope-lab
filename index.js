// Write your solution in this!
  var customerName = 'bob';

  function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  
  function overwriteBestCustomer() {
    bestCustomer = 'new value';
  }
  
  const leastFavoriteCustomer = 'John';
  
  function changeLeastFavoriteCustomer() {
     //Attempt to change the constant
    leastFavoriteCustomer = 'Bob'; 
    // This will result in an error
  }