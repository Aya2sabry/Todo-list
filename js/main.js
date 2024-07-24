// create to do list
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        var input = document.querySelector('.input').value; //get value from input
        var result = document.querySelector('.result');
        if (input !== "") {// if input not empty
            var myLi = document.createElement('li');  //create li
            myLi.innerHTML = input; 
            result.append(myLi); // Append myLi to the result 
            document.querySelector('.input').value = ""; // Empty field of input
            return false // stop submit of form
        }
    };
});
// =====================================================================================
// =====================================================================================
// =====================================================================================