function test(array) {
    let results;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] == array[i]) {
            results = array[i];
            break;
        }
    }
    console.log(results);
}

test([0, 1, 1, 2, 3, 4, 5, 6, 7, 8])