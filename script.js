function convertToRoman(num) {
  	const obj = {
      0:['M',1000],
	  1:['CM'900],
      2:['D', 500],
      3:['CD',400],
      4:['C', 100], 
      5:['L', 50], 
      6:['X', 10], 
      7:['V', 5],
      8:['IV',4], 
      9:['I', 1]
    };
  //your code here


	let res = '';
	for(let i = 0;i<=obj.length();i++){
		let times =  Math.floor(num / obj[i][1]);
		res = res + obj.[i][0].repeat(times);
		num  = num % obj[i][1];
	}
	return res;
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
