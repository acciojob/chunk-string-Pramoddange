function stringChop(str, size) {
  // your code here
	let arr=[];
	let j=0;
	for(let i=0;i<str.length;i++){
		if(i!=0&&i%size==0){
			arr.push(str.slice(j,i+1));
			j=i;
		}
			
	arr.push(str.slice(j,str.length));
	return arr;
}

// Do not change the code below
/*const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
