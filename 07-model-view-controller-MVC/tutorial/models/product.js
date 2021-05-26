const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '..', 'data', 'productsData.json');

function getProductsFromFile(cb){
  fs.readFile(dataPath, (err, fileContent) => {
    if(err || !fileContent.length){
      cb([])
    } else {
      cb(JSON.parse(fileContent))
    }
  })
}

module.exports = class Product{
  constructor(t){
    this.title = t
  }


  save(){
        getProductsFromFile(productsData =>{
          
          productsData.push(this)

          fs.writeFile(dataPath,
            JSON.stringify(productsData), 
            (err)=>{
              console.log(err)
            }
          )
        })    
    //Saving producst in a common array.
    //products.push(this)
  }

  //STATIC FUNCTIONS
  // Are functions that does not require an instance in order to use,
  // in that case, we to not need to create a Product with new Product to use
  // Product.fetchAll(). 
  static fetchAll(cb){
    getProductsFromFile(cb)
  }
}