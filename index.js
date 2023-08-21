
// using arry filter method
// const arr = [-1, 0, -6, 1, -3, 2, -4, 3, -5, 4]
// let removeneg=arr.filter((data)=>data>=0)
// console.log(removeneg)


// using for loop and callback
const arr = [-1, 0, -6, 1, -3, 2, -4, 3, -5, 4]
function removeneg(numbers, callback) {
    const newarr=[]
    for(const x of numbers) {
        if(callback(x)) {
            newarr.push(x)
        }
    }
    return newarr
}

let show=removeneg(arr, (x)=>x>=0)
console.log(show)