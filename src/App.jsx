import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Click Me!',
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
    };
  }

  showDate = () => {
    this.setState({ date: Date() });
  };

  changeBackgroundColor = e => {
    this.setState({ backgroundColor: e.target.value });
  };

  handleTitleChange = e => {
    e.preventDefault();
    this.setState({ movieTitle: e.target.value });
  };

  handleYearChange = e => {
    e.preventDefault();
    this.setState({ movieYear: e.target.value });
  };

  handleVideoToggle = e => {
    e.preventDefault();
    this.setState({ showVideo: !this.state.showVideo });
  };

  displayPicVideo = () => {
    if (this.state.showVideo === false) {
      return (
        <div id="brucePicture">
          <img
            alt="Bruce"
            height="500"
            width="500"
            src="https://media1.popsugar-assets.com/files/thumbor/YV2j-X1eYl0l9wqGdaBEUMLybWc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/09/28/978/n/1922398/77584ec84c411c52_GettyImages-105277481_master/i/Bruce-Willis-Hot-Pictures.jpg"
          />
        </div>
      );
    } else {
      return (
        <div>
          <iframe
            className="pictureVideo"
            title="bruce"
            width="500"
            height="500"
            src="https://www.youtube.com/embed/g-P53rME1xE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
  };

  addMovie = () => {
    const movieTitle = this.state.movieTitle;
    const movieYear = this.state.movieYear;
    const newMovie = {
      movieTitle,
      movieYear,
    };
    this.setState({
      movieTable: [...this.state.movieTable, newMovie],
    });
  };

  mapMovies = () => {
    const mapMovies = this.state.movieTable.map((movies, i) => (
      <tr key={i}>
        <td>{movies.movieTitle}</td>
        <td>{movies.movieYear}</td>
      </tr>
    ));
    return (
      <table style={{ margin: 'auto' }}>
        <tbody>
          <tr>
            <th>Movie Title</th>
            <th>Year</th>
          </tr>
          {mapMovies}
        </tbody>
      </table>
    );
  };

  triviaFunc = () => {
    this.setState({
      showTrivia: !this.state.showTrivia,
      questionDisplay: this.state.questions[0],
    });
  };

  setAnswer = e => {
    this.setState({
      answer: e.target.value,
    });
  };

  submitAnswer = () => {
    console.log('what does index look like', this.state.questions.indexOf(this.state.questionDisplay));
    if (this.state.questions.indexOf(this.state.questionDisplay) === 0) {
      this.questionOneHandler();
    } else if (this.state.questions.indexOf(this.state.questionDisplay) === 1) {
      this.questionTwoHandler();
    } else {
      this.questionThreeHandler();
    }
  };

  questionOneHandler = () => {
    if (this.state.answer === 'c') {
      this.setState({
        nextQuestionButtonDisplay: true,
        answerResult: 'CORRECT!!!',
      });
    } else {
      this.setState({
        answerResult: 'WRONG! Try again',
      });
    }
  };

  questionTwoHandler = () => {
    if (this.state.answer === 'b') {
      this.setState({
        nextQuestionButtonDisplay: true,
        answerResult: 'CORRECT!!!',
      });
    } else {
      this.setState({ answerResult: 'WRONG! Try again' });
    }
  };

  questionThreeHandler = () => {
    console.log('showing the third answer...', this.state.answer);
    if (this.state.answer === 'a') {
      this.setState({
        nextQuestionButtonDisplay: false,
        answerResult: 'CORRECT!!!',
      });
    } else {
      this.setState({ answerResult: 'WRONG! Try again' });
    }
  };

  setNextQuestion = () => {
    if (
      this.state.questions.indexOf(this.state.questionDisplay) === 2 &&
      this.state.answerResult === 'CORRECT!!!'
    ) {
      this.setState({ answerResult: 'Correct!, please check out the rest of the site!' });
    } else if (
      this.state.questions.indexOf(this.state.questionDisplay) === 2 ||
      this.state.answerResult === 'WRONG! Try again'
    ) {
      this.setState({ answerResult: 'WRONG! Try again' });
    } else {
      this.setState({
        questionDisplay: this.state.questions[this.state.questions.indexOf(this.state.questionDisplay) + 1],
        answerResult: '',
        nextQuestionButtonDisplay: true,
      });
    }
  };

  endTrivia = () => {
    this.setState({
      showTrivia: !this.state.showTrivia,
      nextQuestionButtonDisplay: true,
      answerResult: '',
    });
  };

  render() {
    return (
      <div className="App" style={{ background: `${this.state.backgroundColor}` }}>
        <h2 className="bruceTitle" value="Bruce Willis">
          Bruce Willis
        </h2>
        <button onClick={this.triviaFunc}>Play Trivia</button>
        {this.state.showTrivia ? (
          <div className="triviaDisplay">
            <div>
              <div className="questionDisplay">{this.state.questionDisplay}</div>
              <input onChange={this.setAnswer} />
            </div>
            <div>{this.state.answerResult}</div>
            <button onClick={this.submitAnswer}>Submit Answer</button>
          </div>
        ) : (
          ''
        )}
        {this.state.nextQuestionButtonDisplay ? (
          <button onClick={this.setNextQuestion}>Next Question</button>
        ) : (
          <button onClick={this.endTrivia}>End Trivia</button>
        )}
        {this.displayPicVideo()}
        <div>
          <button onClick={this.handleVideoToggle}>Picture Video Toggle</button>
        </div>
        <h2>
          <a href="https://en.wikipedia.org/wiki/Bruce_Willis">Bruce's Wiki Page</a>
        </h2>
        {this.mapMovies()}
        <input
          className="centerClass"
          id="titleInput"
          placeholder="title"
          onChange={this.handleTitleChange}
        />
        <input className="centerClass" id="yearInput" placeholder="year" onChange={this.handleYearChange} />
        <div>
          <button className="centerClass" id="tableButton" onClick={this.addMovie}>
            Add Movie to Table
          </button>
        </div>
        <br />
        <button onClick={this.showDate}>Show Date</button>
        <h1>{this.state.date}</h1>
        <div>
          <label>Background</label>
          <select onChange={this.changeBackgroundColor} name="background" id="background">
            <option value="lightblue">lightblue</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
