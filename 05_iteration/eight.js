const myNums=[1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },0)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
      itemName:"ds",
      price:2000
    },
    {
      itemName:"dstl",
      price:2500
    },
    {
      itemName:"daa",
      price:5000
    },
    {
      itemName:"sql",
      price:1000
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
