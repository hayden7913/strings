function wisePerson(wiseType, whatToSay) {
  var res = "A wise " + wiseType + " once said: \"" + whatToSay + "\"";
  return res; 
}

console.log(wisePerson("goat", "ba ba ba")) 

function shouter(whatToShout) {
	var res =  whatToShout.toUpperCase() + "!!!"
	return res;
}

console.log(shouter("exclamatory remark"))

function textNormalizer(text) {
	var res = text.toLowerCase().trim();
	return res;
}

console.log(textNormalizer("            let's GO SURFING NOW everyone is learning how "))

function typoCorrector(sourceText, target, newValue){
	var count = 0, res;

	res = sourceText
	.split(" ")
	.reduce(function (av, cv) {
		if(cv === target) count ++; return av + " " + newValue; 		
		return av + " " + cv;
	}, "");

	console.log("Replacing " + count + " instances of '" + target + "' with '" + newValue + "'");

	return res;
}	

console.log(typoCorrector("cat dog cat dog dog cat", "cat", "dog"))

