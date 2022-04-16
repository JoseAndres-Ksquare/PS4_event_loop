const destroyer = (arr, ...destroyIt) => console.log(arr.filter(value => !destroyIt.includes(value)));

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)