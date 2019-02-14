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
    this.setState({ date: Date() });
  };

  hideDate = () => {
    this.setState({ date: null });
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
    const { movieTitle, movieYear, movieTable } = { ...this.state };

    const newMovie = {
      movieTitle,
      movieYear,
    };
    this.setState({
      movieTable: [...movieTable, newMovie],
    });
  };

  deleteRowFunc = () => {
    const { movieTable, movieTitle } = { ...this.state };
    const array = [...movieTable];
    const index = array.indexOf(movieTitle.length);

    array.splice(index, 1);
    this.setState({
      movieTable: array,
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
    const { questions, questionDisplay } = { ...this.state };
    if (questions.indexOf(questionDisplay) === 0) {
      this.questionOneHandler();
    } else if (questions.indexOf(questionDisplay) === 1) {
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
    const { questions, questionDisplay, answerResult } = { ...this.state };
    if (questions.indexOf(this.state.questionDisplay) === 2 && answerResult === 'CORRECT!!!') {
      this.setState({ answerResult: 'Correct!, please check out the rest of the site!' });
    } else if (questions.indexOf(questionDisplay) === 2 || answerResult === 'WRONG! Try again') {
      this.setState({ answerResult: 'WRONG! Try again' });
    } else {
      this.setState({
        questionDisplay: questions[questions.indexOf(questionDisplay) + 1],
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

  handleMessage = e => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  };

  mapMessages = () => {
    return this.state.messageArray.map((message, i) => (
      <div className="messageCard" key={i} onClick={() => this.deleteMessage(i)}>
        <p key={i}>
          {this.getDate() + ' '}
          {message}!
        </p>
      </div>
    ));
  };

  addMessage = () => {
    const singleMessage = this.state.message;
    this.setState({
      messageArray: [...this.state.messageArray, singleMessage],
    });
  };

  deleteMessage = i => {
    const filteredMessages = this.state.messageArray
      .slice(0, i)
      .concat(this.state.messageArray.slice(i + 1, this.state.messageArray.length));
    this.setState({
      messageArray: filteredMessages,
    });
  };

  showMessageBoard = () => {
    this.setState({
      showMessageBoard: !this.state.showMessageBoard,
    });
  };

  getDate = () => {
    return new Date().getMonth() + 1 + '/' + new Date().getDate() + '/' + new Date().getFullYear();
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
        <button onClick={this.showMessageBoard}>Message Board</button>
        {this.state.showMessageBoard ? (
          <section className="messageBoard">
            <div className="title">
              <h2>Post a Message</h2>
            </div>
            <textarea onChange={this.handleMessage} id="message" type="text" />
            <br />
            <input value="Submit" onClick={this.addMessage} type="button" className="submitButton" />
            {this.mapMessages()}
          </section>
        ) : (
          <div />
        )}
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
          <button onClick={this.deleteRowFunc}>Delete Last Movie</button>
        </div>
        <br />
        {this.state.date ? (
          <button onClick={this.hideDate}>Hide Current Date/Time</button>
        ) : (
          <button onClick={this.showDate}>Get Current Date/Time</button>
        )}
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
        <footer>
          <p>Posted by: Steve Flint</p>
          <p>
            Contact information: <a href="mailto:steve.flint@t1cg.com">steve.flint@t1cg.com</a>.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
