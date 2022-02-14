var story = 0; // keep story from being undefined 
var form = document.getElementById('libraryMystery');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
    "start": {
      "question":
        "You feel groggy as you wake up. Sitting up, you realize you're on the floor of a library. It's dark and the only thing you can hear is the sound of a thunderstorm. What do you do next?",
      "answers": {
        "a": "(Search for your cell phone)",
        "b": "(Find an exit)",
      }
    },
  
    "1_a": {
      "question":
        "Big surprise: your pockets are emtpy. You stand up now and look around.",
      "answers": {
        "a": "Find an exit",
        "b": "Sit down and give up.",
      }
    },
    "1_b": {
      "question":
        "Big surprise: your pockets are emtpy. You stand up now and look around.",
      "answers": {
        "c": "Find an exit",
        "d": "Sit down and give up.",
          }
      }
  };
// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("libraryMystery").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

  form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
  form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning