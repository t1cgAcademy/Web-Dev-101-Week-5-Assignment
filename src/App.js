import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Click Me!',
      date: null,
      backgroundColor: 'white',
      movieTitle: '',
      movieYear: null,
      showVideo: false,
      movieTable: [],
    };
  }

  changeButtonText = (e) => {
    e.preventDefault();
    this.setState({buttonText: 'Changed Text!!!'});
  }

  showDate = () => {
    this.setState({date: Date()});
  }

  changeBackgroundColor = (e) => {
    this.setState({backgroundColor: e.target.value})
  }

  handleTitleChange = (e) => {
    e.preventDefault();
    this.setState({movieTitle: e.target.value})
  }

  handleYearChange = (e) => {
    e.preventDefault();
    this.setState({movieYear: e.target.value})
  }

  handleVideoToggle = (e) => {
    e.preventDefault();
    this.setState({showVideo: !this.state.showVideo})
  }

  displayPicVideo = () => {
    if (this.state.showVideo === false) {
      return (
        <div id="milaPicture">
            <img alt="Mila" height="500" width="500" src="http://www.gstatic.com/tv/thumb/persons/173413/173413_v9_ba.jpg" />
        </div>
      )
    }
    else {
      return (
        <div>
        <iframe title="mila" width="500" height="500" src="https://www.youtube.com/embed/kzf7hr9O00k" frameBorder="0" allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
        </div>
      )
    }
  }

  addMovie = () => {
    const movieTitle = this.state.movieTitle
    const movieYear = this.state.movieYear;
    const newMovie = {
      movieTitle,
      movieYear,
    }
    this.setState({
     movieTable: [...this.state.movieTable, newMovie]
    });
  }

  mapMovies = () => {
    const mapMovies = this.state.movieTable.map((movies, i) => (
          <tr key={i}>
            <td>{movies.movieTitle}</td>
            <td>{movies.movieYear}</td>
          </tr>
    ))
    return (
        <table style={{margin: 'auto'}}>
          <tbody>
          <tr>
            <th>Movie Title</th>
            <th>Year</th>
          </tr>
          {mapMovies}
          </tbody>
        </table>
    )
  }


  render() {
    return (
      <div className="App" style={{background: `${this.state.backgroundColor}` }}>
        <h2 id="milaTitle" value="Mila Kunis">Mila Kunis</h2>

        {this.displayPicVideo()}

        <div>
          <button onClick={this.handleVideoToggle}>Picture Video Toggle</button>
        </div>

        <h2><a href="https://en.wikipedia.org/wiki/Mila_Kunis">Mila's Wiki Page</a></h2>

        {this.mapMovies()}

          <input className="centerClass" id="titleInput" placeholder="title" onChange={this.handleTitleChange}/>
          <input className="centerClass" id="yearInput" placeholder="year" onChange={this.handleYearChange}/>

          <div>
            <button className="centerClass" id="tableButton" onClick={this.addMovie}>Add Movie to Table</button>
          </div>
          
          <br/>
          <div>
            <button onClick={this.changeButtonText}>{this.state.buttonText}</button>
          </div>
          <button onClick={this.showDate}>Show Date</button>
          <h1>{this.state.date}</h1>

          <div>
            <label>Background</label>
            <select onChange={this.changeBackgroundColor} name="background" id="background">
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <a href="mailto:steveflint@t1cg.com?subject = Feedback&body = Message">
              Send Feedback
          </a>
      </div>
    );
  }
}

export default App;
