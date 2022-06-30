let array = [1,2,3, 5];

function findComponents(array, targetNumber) {
	let ans = [];
	for(let i = 0; i < array.length; i++) {
		let temp = (targetNumber - array[i]) > 0 ? targetNumber - array[i] : array[i] - targetNumber;

		if(array.find(num => num === temp)) {
			if(temp != array[i]) {
				ans = ans.concat(array[i], temp);
				break;	
			}
			
		}

	}
	if(ans.length == 0) return undefined;
	return ans;
}

let ans = findComponents(array, 4);
