import React from 'react';
import APIandCallDisplay from '../Content/APIandCallDisplay/APIandCallDisplay.jsx';
import style from './style.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //set a state of isHidden to false
    };
  }

//Use fat arrow function to define and call table button using code from last assignment
//clue,  someFunction = () => {}

//Withing the tableButton fat arrow function, be sure to call the resetInputValues as well
//using the this keyword.  Remember to pass in the arguments titleInput and yearInput.

resetInputValues = (pass in titleInput, yearInput arguments) => {
  //Reset titleInput.value and yearInput.value to empty strings.
}

videoButton = () => {
  //Use this.setState({}) to set the state to the opposite of isHidden using !
}

//Define triviaFunc with fat arrow function using same code from triviaFunc in the last assignment.

render() {
  return (
    <div>
      <h2 id={style.seagalTitle}>Steven Seagal</h2>
      <div><button onClick={this.triviaFunc} className={style.centerClass} id={style.trivia}>Play Trivia</button></div>
      {this.state.isHidden === false && <center><img id={style.seagalPic} src="https://images-na.ssl-images-amazon.com/images/M/MV5BZWYxMDZkNmMtZjljNS00MDE5LTlmYmItMmVjZWU5NjQwYmI0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX148_CR0,0,148,216_AL_.jpg"/></center>}
      {this.state.isHidden && <center><iframe id={style.seagalVideo} className={this.displayClass} width="315" height="420" src="https://www.youtube.com/embed/iP5nCqa29YY" frameBorder="0" gesture="media" allowFullScreen/></center>}
      //add onClick listener with this.videoButton to Picture Video Toggle Button below
      //to trigger videoButton event defined above
      <button className={style.centerClass} id={style.videoButton}>Picture Video Toggle</button>
      <h4 id={style.link}><a href="https://en.wikipedia.org/wiki/Steven_Seagal">Steven Seagal on Wikipedia</a></h4>
      <table id="movieTable">
        <tbody>
          <tr>
            <th>Movie</th>
            <th>Year</th>
          </tr>
          <tr>
            <td>Under Seige</td>
            <td>1992</td>
          </tr>
          <tr>
            <td>Under Seige 2</td>
            <td>1998</td>
          </tr>
        </tbody>
      </table>
      <input className={style.centerClass} id="titleInput" placeholder="title"/>
      <input className={style.centerClass} id="yearInput" placeholder="year"/>
      <button onClick={this.tableButton} className={style.centerClass} id={style.tableButton}>Add Movie to Table</button>
      <h3 className={style.date}><input className={style.date} type="date" /></h3>
      //Pass APIandCallDisplay component into the jsx of Content Component below
      //This will connect the two components and allow APIandCallDisplay to be visible within
      //the content components
    </div>
  );
}
}

export default Content;
