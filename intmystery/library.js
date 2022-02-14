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
  
    // second test
    "1_a": {
      "question":
        "Big surprise: your pockets are emtpy. You can't possibly survive without a cell phone. You stand up now and look around, thinking of the next best thing to do...",
      "answers": {
        "a": "(Look for signs of technology.)",
        "b": "(Sit down and give up.)",
      }
    },
    "1_b": {
      "question":
        "You walk around the dark library and search every corner. There seem to be no doors or windows. What should you do next?",
      "answers": {
        "c": "(Find a source of light.)",
        "d": "(Do a little dance.)",
          }
      },

      //third test

      "2_a": {
        "question":
          "After making your way to what looks like a front desk, you see a typewriter.",
        "answers" : {
          "a": "(Open it.)",
          "b": "(Write the next best-selling novel.)"
        }
      },
      "2_b": {
        "question":
          "You sit down and decide it's not worth the effort. You spend your final days in a lonely library. THE END."
      },
      "2_c": {
        "question":
          "Gliding your hand across every square-inch of the walls, you finally find a light switch. Switching it on, the room lights up and reveals seven rows of bookcases. They're color-coded, in the order of the rainbow.",
        "answers" : {
          "a": "(Take a look at each row.)",
          "b": "(Move the books around and create chaos.)"
        }
      },

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