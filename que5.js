// You have the following string:
// "JavaScript is fun, but javaScript can be challenging."
// Write code to replace all "javaScript/JavaScript" with "Programming".

function suraj(){
    var str = "JavaScript is fun, but javaScript can be challenging.";
    var newStr = str.replace(/javaScript/gi, "Programming");
    console.log(newStr);
}
suraj();