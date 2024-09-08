var products = [
    { id: 1, name: 'Refrigerator', price: 1500, category: 'Appliances' },
    { id: 2, name: 'Laptop', price: 2000, category: 'Electronics' },
    { id: 3, name: 'Washing Machine', price: 1200, category: 'Appliances' },
    { id: 4, name: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 5, name: 'Microwave', price: 700, category: 'Appliances' },
    { id: 6, name: 'Air Conditioner', price: 2500, category: 'Appliances' }
  ];
  
  
  function fetchProducts(callback) {
    setTimeout(function() {
      callback(products); 
    }, 1000);
  }
  
 
  function processProducts() {
    fetchProducts(function(fetchedProducts) {
      
     
      var filteredProducts = [];
      for (var i = 0; i < fetchedProducts.length; i++) {
        if (fetchedProducts[i].price > 1000 && fetchedProducts[i].category === 'Appliances') {
          filteredProducts.push(fetchedProducts[i]);
        }
      }
      console.log('Filtered Products:', filteredProducts);
  
      
      var productsByCategory = [];
      for (var i = 0; i < fetchedProducts.length; i++) {
        productsByCategory.push([fetchedProducts[i].name, fetchedProducts[i].category]);
      }
      console.log('Products by Category:', productsByCategory);
  
     
      var productMap = {};
      for (var i = 0; i < fetchedProducts.length; i++) {
        var product = fetchedProducts[i];
        productMap[product.id] = { name: product.name, price: product.price, category: product.category };
      }
      console.log('Product Map:', productMap);
  
      
      var cheapProducts = [];
      var expensiveProducts = [];
      for (var i = 0; i < fetchedProducts.length; i++) {
        if (fetchedProducts[i].price <= 1000) {
          cheapProducts.push(fetchedProducts[i]);
        } else {
          expensiveProducts.push(fetchedProducts[i]);
        }
      }
      var combinedProducts = cheapProducts.concat(expensiveProducts); 
      console.log('Combined Products:', combinedProducts);
  
      for (var i = 0; i < fetchedProducts.length; i++) {
        if (fetchedProducts[i].price > 2000) {
          fetchedProducts[i].hasDiscount = true;
        } else {
          fetchedProducts[i].hasDiscount = false;
        }
      }
      console.log('Updated Products with hasDiscount:', fetchedProducts);
  
    });
  }
  

  processProducts();
  