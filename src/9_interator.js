let makeInterator = function(array) {
	let nextIndex = 0;
	return {
		next: function() {
      return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true }
		}
	}
}

let it = makeInterator(['a1', 'b1', 'c1', 'd1']);

let val1 = it.next().value;
let val2 = it.next().value;
let val3 = it.next().value;
let val4 = it.next().done;
let val5 = it.next().done;