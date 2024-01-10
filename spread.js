const nums=[11, 22,33]

function add(first, second,third){
    return first + second + third
}

//normal array elements calling
total = add(nums[0],nums[1], nums[2])

console.log(`This is the total: ` + total)

//Spread operator breaks the array elemeetnts and calls them one by one
let total1 = add(...nums)
console.log(total1)