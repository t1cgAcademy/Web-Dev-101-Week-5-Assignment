import React from 'react';
import style from './style.css';

class APIandCallDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set a state called data to an empty array
      //set a state called movieTitle to a string with a movie title.  Preferably,
      //a movie your celebrity has stared in. Remember your comma.

    };
  }

  getInitialState

componentDidMount() {
//ComponentDidMount is a lifecycle method.  Lifecycle methods are various methods which
//are invoked at different phases of the lifecycle of a component.  These methods allow
//react developers to really plan how their application will operate at various points
//of the birth, growth or death of UI components.
//API calls are best made in componentDidMount, which will make it clear that data will not be
//loaded until after the initial render.  This makes sure that state is set up properly to
//receive the call, thus helping the application to avoid load errors.

//Below in componentDidMount, call your getData() function, remember to use this,
//which contain your fetch API call.
}
// Fetch is defined below
getData = () => {
  //Below, our url is set to a variable for use in our api/fetch call
  //In the imdb url below, we have added + this.state.movieTitle.  This will allow
  //the user to set the state (string value in constructor above)to the title of the
  //movie they want to search for.  Our initial state is set to a movie title to avoid
  //errors during the initial render.
  const url = 'http://theimdbapi.org/api/find/movie?title=' + this.state.movieTitle;
  //The following sites are great fetch resources...
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  //https://davidwalsh.name/fetch
  // Now, define a fetch request to the imdb movie website using the url variable
  //Be sure to return your fetch, which will allow you to chain callbacks
  //return added to fetch below allows you to return a promise (allows you to
  //chain, but to use the information in a callback, you must return the data on line 46.
  //Also remember to return your response in JSON format.

  //Then, set the state of your empty data array to the data that has been returned in
  //JSON format
    return data;
    // Here fetch is checking for errors//
  }).catch((error) => {
    // Fetch will return an error if one occurs//
    return error;
  });
};


//Define changeDesc fat arrow function to set the state of movieTitle to the value of what is entered
//into the input (e.target.value).  Pass e as an argument into fat arrow.  This will allow you to
//setState to e.target.value

//Define tbe dbSearch onClick function you defined on the Search IMDB button below.
//dbSearch should simply call for your getData() fetch function to run again.
//When calling getData to run again, remember to use this.

render() {
  if (this.state.data.length === 0) {
    return(
      <div>{'Loading...'}</div>
    )
  }
  return (
    <div>
      <div>
      //Define an onChange listener called changeDesc, which will set the movieTitle state
      //to the value of the input field when it changes.
        <input className={style.centerClass} placeholder="Enter Movie Title" type="text" id="fieldVal"/>
        //Create an onClick listener for an event called dbSearch to run when button is clicked.
        <button className={style.centerClass} onClick={this.dbSearch}>Search IMDB</button>
      </div>
      <div>
        <table>
          <tbody>
            <tr className={style.searchTable}>
            //Set the following two tableData cells (td) to display certain information returned
            //The first td should return the title, and the second td should return the storyline
            //Remember, you must use [] to get the first movie returned in the array of objects
            //Computers are zero indexed, meaning the first movie will have an index of 0
            //Remember to use this.state.data to display state.  Do not forget curly braces and besure
            //to use the terms title and storyline to properly display data.
              <td id={style.titleTD} className={style.searchTable}>display title here</td>
              <td id={style.storylineTD} className={style.searchTable}>display storyline here</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
}

export default APIandCallDisplay;
