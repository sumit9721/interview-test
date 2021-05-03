function test(array) {
    let largest = 0;
    let current = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] === 0 ? current = 0 : current++;
        if (current > largest) largest = current;
    };
    console.log(largest);
}

test([1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0])