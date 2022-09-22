var questions = [
  'Whats your name ?',
  'Where are you from ?',
  'What\'s your age ?',
  'What profile you are working on ?',
  'It was nice talking you :)',
];


var num = 0;
var output = document.querySelector("#result");
output.innerHTML = questions[0];
var inputBox = document.querySelector("input");

function showResponse(){
  var input = inputBox.value;
  if(inputBox.value == " " ){
  }else{
    if(num == 0) {
      output.innerHTML == `hello ${input} nice meeting you`;
      input == "";
      ++num;
      setTimeout(changeQuestion, 2000);
    } else if(num == 1) {
      output.innerHTML == `${input} an awesome place`;
      ++num;
      setTimeout(changeQuestion, 2000);
    } else if (num == 2){
      output.innerHTML == `It means you are born in ${2007 - input} nice meeting you`;
      ++num;
      setTimeout(changeQuestion, 2000);
    }
  }
}
$(document).on('keypress', function(e){
  if(e.which == 13){
  showResponse();
  }
})
