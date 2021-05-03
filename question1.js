function test(array){
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            filteredArray.push(array[i]);
        }
    }
    console.log(filteredArray);
}

test([1,2,3,4,5,6,7,8,8,8])