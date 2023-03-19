





let input;
let resultArray;

function main() {
  // Start of variable declaration
  let input = document.getElementById("message").value;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', ' ', '.', '!', '?', '@', '#', '$', '%', '&', '/', "'", '"', '(', ')', ',', ':', ';', '<', ">"];
  let resultArray = ['']; // END of variable declaration



  for (let i = 0; i < input.length; i++) { 
    for (let j = 0; j < vowels.length; j++) {  

      if (input[i] === vowels[j]) {

        if (input[i] === "e") {

          resultArray.push('ee');

        } else if (input[i] === "u") {

          resultArray.push('uu');

        } else {

          resultArray.push(input[i]);

        }

      } 

    }  

  } 
  document.getElementById("translate").value = (resultArray.join("").toUpperCase());
};
setInterval(main, 500); 


















