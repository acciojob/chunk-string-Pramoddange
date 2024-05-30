function stringChop(str, size) {
  // your code here
	let arr=[];
	let j=0;
	for(int i=0;i<str.length;i++){
		if(i%size==0){
			arr.push(str.slice(j,i+1));
			j=i;
		}
		
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
