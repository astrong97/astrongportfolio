let story = 0; // keep story from being undefined 
const form = document.getElementById('libraryMystery');// get the element with matching ids
const submit = document.getElementById('continueButton');
const reset = document.getElementById('resetButton');
let answer = '';

const story_telling = {
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
          "After making your way to what looks like a front desk, you see a typewriter. It's metal and hefty, but also looks heavily used.",
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
          "c": "(Take a book from each row.)",
          "d": "(Move the books around and create chaos.)"
        }
      },
      "2_d": {
        "question":
          "You decide to dance, flailing your arms and legs. Suddenly, you trip over a lever and a table emerges from the floor in front of you on a platform. There are two buttons on the table: a green one, and a blue one. The storm outside grows louder.",
        "answers" : {
          "e": "(Press the green button.)",
          "f": "(Press the blue button.)"
        }
      },

      // fourth test

      "3_a": {
        "question":
          "It proved fairly easy to open. Inside, you find a sheet of paper with a brain teaser. 'The sundial has the fewest moving parts of any time-piece. Which has the most?'. You must type the correct answer into the typewriter.",
        "answers" : {
          "a": "(A clock.)",
          "b": "(An hourglass.)",
          "c": "(A chronometer.)"
        }
      },
      "3_b": {
        "question":
          "You spend hours writing a compelling novel about a vampire and werewolf who find love in a hopeless place. Years later when archaeologists discover your work, you are hailed as a literary genius and your legacy lives on forever. THE END."
      },
      "3_c": {
        "question":
          "You grab a book from each shelf and place them on a table. Nothing happens. THE END."
      },
      "3_d": {
        "question":
          "After moving each and every book out of its respective place, you look back at your masterpiece. The shelves of books now resemble a muddled, brown color. From the shelves you can hear a voice speak. 'Name one of the Little Women.' What name do you respond with?",
        "answers" : {
          "d": "(Maggie.)",
          "e": "(Lolita.)",
          "f": "(Jo.)"
        }
      },
      "3_e": {
        "question":
          "The floor gives out underneath you, sending you plummeting to a cold, dark room with no way out. The walls are covered in green slime. The slime tastes like jelly-beans. THE END."
      },
      "3_f": {
        "question":
          "As you hit the blue button, the building begins to shake. A wall of the library opens up, revealing a cloudy sky and dark green field of grass.  You can even see Keanu Reeves waving in the distance. You are free to go! GOOD ENDING (1/3)."
      },

      // fifth and final

      "4_a": {
        "question":
          "Wrong answer! A large clock falls from the ceiling and onto your head. THE END."
      },
      "4_b": {
        "question":
          "A bell chimes in the distance. Suddenly, the building begins to shake. A wall of the library opens up, revealing a cloudy sky and dark green field of grass. You can even see your family and friends waving in the distance. You are free to go! GOOD ENDING (2/3)."
      },
      "4_c": {
        "question":
          "Wrong answer! A large chronometer falls from the ceiling and onto your head. THE END."
      },
      "4_d": {
        "question":
          "Wrong answer! A girl named Maggie falls from the ceiling and onto your head. THE END."
      },
      "4_e": {
        "question":
          "Wrong answer! Nothing happens, but you reflect cringey moments in your past. THE END."
      },
      "4_f": {
        "question":
          "The voice speaks up again. 'Well done, my child. Promise me this: you will read more books in your future...'. You feel yourself teleport to another place, which you soon realize is your own bedroom. Happy to be home, you devote your free time to reading more books and live to be an intelligent person. GREAT ENDING (3/3)."
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