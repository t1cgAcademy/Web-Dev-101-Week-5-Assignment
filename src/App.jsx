import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      backgroundColor: 'lightblue',
      movieTitle: '',
      movieYear: null,
      showVideo: false,
      movieTable: [],
      //////new states for trivia below///////
      questions: [
        "What was Bruce Willis' first movie?   a: Die Hard, b: Look Who's Talking, c: The First Deadly Sin",
        'What year was Bruce Willis Born?   a: 1971, b: 1955, c: 1963',
        'In what state does Bruce Willis reside? a: California, b: Montana, c: Florida',
      ],
      showTrivia: false,
      questionDisplay: null,
      answer: '',
      nextQuestionButtonDisplay: true,
      answerResult: '',
      message: '',
      messageArray: [],
      showMessageBoard: false,
    };
  }

  showDate = () => {
    // Set date state to show today's date
  };

  Define hideDate function here {
    Set date state to null
  }

  changeBackgroundColor = e => {
    // Set backgroundColor state to value selected in select tag.
    // This will change the background color of App div when selet value is changed.
    // Hint: Rem e mber to stay on target!
  };

  handleTitleChange = e => {
    // FYI: The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    // Set movieTitle state to value of the title input
  };

  handleYearChange = e => {
    e.preventDefault();
    // Set movieYear state to value of the title input
  };

  handleVideoToggle = e => {
    e.preventDefault();
    // Set showVideo state to the opposite of current show video state.
    // Hint: Don't just look at what the state is now and set to the
    // opposite value.  Set it to the opposite no matter what the current
    // state isFinite.
  };

  displayPicVideo = () => {
    // The display of your video and picture is dependent on the showVideo
    // state.  Return your picture if showVideo is false, and return your video
    // if showVideo is true.  You man choose to style the video and pictures inline
    // (in the iframe or img tag), or in the App.css file.
    // Hint: Wrap what is returned in a div.
  };

  addMovie = () => {
    // Set two variables for clarity and ease of local use. 
    // Set constant variable called movieTitle set to the current state of the movieTitle.
    // Set constant variable called movieYear set to the current state of the movieYear
    // Set constant variable called new movie defined by two values, movieTitle and movieYear.
    // Note: Using the object format for the previous line of instruction ^^ might seem 
    // counterintuitive because the key and value are not readily apparent. But remember, the
    // variables in newMovie represent key value pairs. 
    // ADD your newMovie object to the contents of this.state.movie Array.  DO NOT replace
    // the content in this.state.movieTable.  Add to the content. => This can be done with setState.
    // Hint: Spread lightly!
  };

  // I had to use a function called splice for array manipulation below.  This is
  // most likely your first experience using splice, so I provided the code in working
  // form below with a detailed explanation.  It is always good to learn about as 
  // many tools as possible in case you need them in the future. 
  deleteRowFunc = () => {
    // deconstruction below 
    const { movieTable, movieTitle } = { ...this.state };
    // Use spread operator to set array to an array full of current 
    // movieTable contents
    const array = [...movieTable];
    // Get the index of the last movieTitle added 
    const index = array.indexOf(movieTitle.length);
    // Array.splice takes two arguments.  First, you must provide an index
    // at which to start changing the array.  Second, you will provide the
    // deleteCount, aka the number of array items to remove.  Below we are
    // telling splice to start at the last index and remove one item.  In other
    // words, remove the last item.
    array.splice(index, 1);
    // Set movieTable state to array below
    this.setState({
      movieTable: array,
    });
  }

  mapMovies = () => {
    // Mapping example below
    const mapMovies = this.state.movieTable.map((movies, i) => (
      <tr key={i}>
        <td>{movies.movieTitle}</td>
        <td>{movies.movieYear}</td>
      </tr>
    ));
    return (
      <table style={{ margin: 'auto' }}>
        <tbody>
          {/* Define table row with headers here.
          Outside of table rows, insert your mapMovies variable
          so it displays under the columns appropriately. */}
        </tbody>
      </table>
    );
  };

    // Define fat arrow function called triviaFunc. 
    // This function should set showTrivia to the opposite of 
    // the current showTrivia state. (You might have done something
    // similar already.)
    // Set your questionDisplay state to display the first question
    // in the question state Array. 


  setAnswer = e => {
    // Set answer state to the target value of the event passed
  };

  submitAnswer = () => {
    // To handle answer submission, you will need to use indexOf
    // to find the index number in the questions array of the current
    // questioned being displayed in this.state.questionDisplay.
    // If the index of the currently displayed question equals 0, then 
    // call the first question handler (questionOneHandler).
    // If the index is 1, call the second question handler (questionTwoHandler). 
    // Any other possibility should call the third question handler (questionThreeHandler).
    // Hint: You did something similar in the last celebrity assignment.
  };

  questionOneHandler = () => {
    // If the answer entered is c, then set the state of 
    // nextQuestionButtonDisplay to true, and answerResult to 'CORRECT!!!'.
    // Anything else should just set the answerResult to 'WRONG! Try again'
    // BONUS: Can you figure what to do if a capital C is entered!?!?!
  };

  questionTwoHandler = () => {
    // If the answer entered is b, then set the state of nextQuestionButtonDisplay
    // to true, and answerResult to 'CORRECT!!!'. Anything else should just set 
    // the answerResult to 'WRONG! Try again'
  };

  questionThreeHandler = () => {
    // If the answer entered is a, then set the state of nextQuestionButtonDisplay
    // to false, and answerResult to 'CORRECT!!!'. Anything else should just set 
    // the answerResult to 'WRONG! Try again'
  };

  setNextQuestion = () => {
    if (
      // The indexOf this.state.questionDisplay equals 2 and the answerResult
      // equals 'CORRECT!!!', then set answerResult state to 'Correct!, please check out the rest of the site!'
    ) {
      // The answerResult should be set to display 'Correct!, please check out the rest of the site!'
    } else if (
      // The index is 2 and the answerResult equals 'WRONG! Try again'
    ) {
      // Set your answer result to display 'WRONG! Try again'
    } else {
      // If anything else happens, set questionDisplay state to the next question in questions array. ==>>
      // this.state.questions[find the index of current questioned being displayed and add 1].
      // Clear the answerResult state
      // Set nextQuestionButtonDisplay to true. 
    }
  };

  // Define endTrivia fat arrow function that resets the game ==>>.
  // You will change showTrivia to the opposite of the current showTrivia state. 
  // Set nextQuestionButtonDisplay to true
  // Clear our answerResult state. 

  handleMessage = e => {
    e.preventDefault();
    // Set message state to e.target.value
  };

  mapMessages = () => {
    // Map through message array using previous example in mapMovies function
    // above for reference.  In stead of setting the mapped array to a variable
    // as show in mapMovies, you are simply going to return the whole thing... 
    // return mappingMessageArrayHere.map((individualMessage, i) => {
    //   <div className="messageCard" key={i} onClick={() => this.deleteMessage(i)}>
    //     <p key={i}>
    //       {this.getDate() + ' '}
    //       {message}!
    //     </p>
    //   </div>
    // })
  }

  addMessage = () => {
    // Initialize constant variable called singleMessage and set its value to equal 
    // this.state.message. 
    // Set the message array state to an array with two arguments...
    // The first argument will spread in this.state.messageArray
    // (remember the spread operator).
    // The second argument will be the singleMessage you are adding to messageArray
  }

  // The function below uses slice to remove an element from array (not to be confused
  //   with sPlice from deleteRowFunc function above).
  //   slice() creates a new array with the indexes it receives. We create a new array,
  //   from the start to the index we want to remove, and concatenate another array from
  //   the first position following the one we removed to the end of the array.
  deleteMessage = i => {
    const filteredMessages = this.state.messageArray
      .slice(0, i)
      .concat(this.state.messageArray.slice(i + 1, this.state.messageArray.length));
    this.setState({
      messageArray: filteredMessages,
    });
  };

  showMessageBoard = () => {
    // Set showMessageBoard state to the opposite value of showMessageBoard state
  }

  //Get date is called in mapMessages
  getDate = () => {
  //  use javascript new Date() to get 
  //  return month + 1 +n '/' + day + '/' + year
  }

  render() {
    return (
      <div className="App" style={{ background: `${this.state.backgroundColor}` }}>
        <h2 className="bruceTitle" value="Bruce Willis">
          Bruce Willis
        </h2>
        <button onClick={this.triviaFunc}>Play Trivia</button>

        {/* Handle trivia display below */}
           {/* Here you will use a ternary statement to conditionally display the entire 
           trivia game.  Follow the structure below.  If showTrivia is true, you will render...
                      ?
           <div with class name triviaDisplay>
             <div>
               Here you will need two elements...
               1. You will need a div with className of questionDisplay, the 
               text of the button should be set to the questionDisplay state
               2. You will also need an input with an on change event set to this.setAnswer.
             </div>
             3. Here you will need another div, the text of the div must be set to display
             the answerResult state.
             4. Finally, you will need a button with an onclick function set to trigger 
             the submitAction function. Set button text to Submit Answer
           </div>
           :
           else...
           an empty string */}

           {/* Handle next question button below */}
         {/* More ternary fun!! Here you will be conditionally displaying either
         a Next Question button or an End Trivia button.  If nextQuestionButtonDisplay
         is true, (?) display a button with an on click set to trigger setNextQuestion function
         and set button text to display Next Question. 
         : 
         If nextQuestionButtonDisplay is false, display a button with an on click
         set to trigger endTrivia function and set button text to display End Trivia */}

        {/* Call displayPicVideo here. */}

        <div>
          {/* The function call above depends on a button to change the showVideo state...
          So, here you will need to create a button with an on click event set to
          trigger handleVideoToggle.  Set button text to display Picture Video Toggle */}
        </div>
{/* another ternary ==>>{if showMessageBoard state is true or truthy then display (?)
                <Section tag with class set to messageBoard>
                  <div className="title"> */}
                    {/* Add h2 tab with text set to display "Post a Message" */}
                  </div>
                  {/* Add textarea tag here ith onChange event set to trigger handMessage
                  function, with id message and type text */}
                  {/* Add line break tag here */}
                  {/* Add input tag with value set to submit, onClick set to trigger addMessage, type button,
                  and class submitButton */}
                  {this.mapMessages()}
                {/* </Section> else (:) display an empty div} */}
        <h2>
          <a href="https://en.wikipedia.org/wiki/Bruce_Willis">Bruce's Wiki Page</a>
        </h2>
        {/* Call your map movies function here */}

        {/* Create an input with id titleInput, and an 
        on change event set to trigger handleTitleChange function.
        The input should display "title" as a placeholder. */}
        
        {/* Create an input with id yearInput, placeholder year and on change set to
        trigger handleYearChange function */}
        
        <div>
          {/* Create a button with id tableButton, and an on click event set to trigger
          addMovie function. */}
          Add button with onClick set to trigger deleteRowFunc and button text set to 
          "Add Movie to Table"
        </div>

        {/* Break tag here!!! */}

        {/* {Ternary for date here => if this.state.date is true, or truthy then show (?)
         Create and display a button with onClick event set to hideDate function call (remember setting the function call is a bit different in react/jsx).
        Set button text to display "Hide Current Date"
        or (:) Create and display a button with an onClick event set to showDate function call
        Set button text to display "Get Current Date"
      } <<<== Date button ternary ends here */}
        {/* {Display date state here} */}


        <div>
          <label>Background</label>
          {/* Follow structure below for dropdown background color change functionality...
          <Create select dropdown with on change event set to trigger changeBackgroundColor
          function.  The name should be background, and the id should also be background>
            <Inside of your select tag, there should be 4 option tags.>
            <1. Set value to lightblue and set option text to display Light Blue></close option tag>
            <2. Set value to red and option text to display Red></close option tag>
            <3. Set value to blue and option text to display Blue></close option tag>
            <4. Set value to green and option text to display Green></close option tag>
          </close select> */}
        </div>
        // <open footer tag here>
        // Add p tag with text set to display "Posted by: Your Name"
        // <p>
        //   Contact information: <add a tag here with href set to "mailto:whateverYourEmailAddressIs".
        //   Set a tag text to display "yourEmailaddress"
        // </p>
        // </close footer tag here>
      </div>
    );
  }
}

export default App;
