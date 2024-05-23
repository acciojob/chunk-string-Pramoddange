function stringChop(str, size) {
  // your code here
	let arr=[];
	let s="";
	for(int i=0;i<str.length;i++){
		if(i%size==0){
			arr.push(s);
			s="";
		}
		s+=str.charAt(i);
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
