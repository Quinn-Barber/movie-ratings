import logo from './logo.svg';
import './App.css';

const data = [
  { name: "The Super Mario Bros. Movie", scorer: "Quinn", genre: "Adventure, Comedy", plot: 6.5, acting: 9, cinematography: 7, soundtrack: 8.5, editing: 9, production: 10, directing: 7, writing: 6.5, isAnimation: true, isStopMotion: false },
  { name: "The Super Mario Bros. Movie", scorer: "Jack", genre: "Adventure, Comedy", plot: 5.8, acting: 9, cinematography: 8.2, soundtrack: 6.2, editing: 7.8, production: 8.3, directing: 7.1, writing: 6.1, isAnimation: true, isStopMotion: false },
  { name: "The Super Mario Bros. Movie", scorer: "Justin", genre: "Adventure, Comedy", plot: 4.2, acting: 7.8, cinematography: 9.4, soundtrack: 8.7, editing: 7.5, production: 7.8, directing: 6.1, writing: 4.9, isAnimation: true, isStopMotion: false },
  { name: "Crazy, Stupid, Love", scorer: "Quinn", genre: "Romance, Comedy", plot: 7.5, acting: 8, cinematography: 6.5, soundtrack: 5, editing: 7, production: 6.3, directing: 8.3, writing: 8.4, isAnimation: false, isStopMotion: false},
  { name: "Crazy, Stupid, Love", scorer: "Veronica", genre: "Romance, Comedy", plot: 8, acting: 8.2, cinematography: 7.5, soundtrack: 6, editing: 7.5, production: 7.5, directing: 7.8, writing: 7.5, isAnimation: false, isStopMotion: false},
  { name: "Dungeons & Dragons: Honor Among Thieves", scorer: "Quinn", genre: "Action, Adventure", plot: 9.4, acting: 7, cinematography: 9.5, soundtrack: 7, editing: 6.4, production: 9.4, directing: 7, writing: 9.6, isAnimation: false, isStopMotion: false},
  { name: "Dungeons & Dragons: Honor Among Thieves", scorer: "Jack", genre: "Action, Adventure", plot: 9, acting: 8.9, cinematography: 10, soundtrack: 6, editing: 7.6, production: 9, directing: 8, writing: 9, isAnimation: false, isStopMotion: false},
  { name: "Guardians of the Galaxy Vol. 3", scorer: "Quinn", genre: "Action, Comedy, Thriller, Adventure", plot: 4.3, acting: 7, cinematography: 4.4, soundtrack: 9, editing: 7, production: 3, directing: 6, writing: 7, isAnimation: false, isStopMotion: false},
  { name: "Guardians of the Galaxy Vol. 3", scorer: "Veronica", genre: "Action, Comedy, Thriller, Adventure", plot: 5.2, acting: 8.2, cinematography: 8.3, soundtrack: 9, editing: 6, production: 6, directing: 4, writing: 6, isAnimation: false, isStopMotion: false}  
]

function App() {

  function calculateGenre(genre, dataset){
    let plot = dataset["plot"];
    let acting = dataset["acting"];
    let cinematography = dataset["cinematography"];
    let soundtrack = dataset["soundtrack"];
    let editing = dataset["editing"];
    let production = dataset["production"];
    let directing = dataset["directing"];
    let writing = dataset["writing"];
    let animation = dataset["isAnimation"];
    let stopmotion = dataset["isAnimation"];

    if(animation || stopmotion){
      switch(genre){
        case "Thriller":
          return ((plot*10) + (acting*9) + (cinematography*9) + (soundtrack*10) + (editing*9) + (production*9) + (directing*10) + (writing*10))/760*100;
        case "Horror":
          return ((plot*8) + (acting*9) + (cinematography*9) + (soundtrack*10) + (editing*8) + (production*9) + (directing*9) + (writing*7))/690*100;
        case "Drama":
          return ((plot*10) + (acting*9) + (cinematography*8) + (soundtrack*8) + (editing*7) + (production*7) + (directing*9) + (writing*10))/680*100;
        case "Action":
          return ((plot*7) + (acting*9) + (cinematography*9) + (soundtrack*9) + (editing*9) + (production*8) + (directing*8) + (writing*6))/650*100;
        case "Comedy":
          return ((plot*6) + (acting*9) + (cinematography*5) + (soundtrack*6) + (editing*6) + (production*6) + (directing*7) + (writing*10))/550*100;
        case "Romance":
          return ((plot*9) + (acting*9) + (cinematography*7) + (soundtrack*7) + (editing*7) + (production*7) + (directing*8) + (writing*9))/630*100;
        case "Adventure":
          return ((plot*7) + (acting*9) + (cinematography*9) + (soundtrack*9) + (editing*9) + (production*8) + (directing*8) + (writing*6))/690*100;
        default:
          return ((plot*10) + (acting*9) + (cinematography*10) + (soundtrack*10) + (editing*10) + (production*10) + (directing*10) + (writing*10))/790*100;
      }
    }

    switch(genre){
      case "Thriller":
        return ((plot*10) + (acting*9) + (cinematography*9) + (soundtrack*10) + (editing*9) + (production*9) + (directing*10) + (writing*10))/760*100;
      case "Horror":
        return ((plot*8) + (acting*7) + (cinematography*9) + (soundtrack*10) + (editing*8) + (production*9) + (directing*9) + (writing*7))/670*100;
      case "Drama":
        return ((plot*10) + (acting*10) + (cinematography*8) + (soundtrack*8) + (editing*7) + (production*7) + (directing*9) + (writing*10))/690*100;
      case "Action":
        return ((plot*7) + (acting*6) + (cinematography*9) + (soundtrack*9) + (editing*9) + (production*8) + (directing*8) + (writing*6))/620*100;
      case "Comedy":
        return ((plot*6) + (acting*8) + (cinematography*5) + (soundtrack*6) + (editing*6) + (production*6) + (directing*7) + (writing*10))/540*100;
      case "Romance":
        return ((plot*9) + (acting*9) + (cinematography*7) + (soundtrack*7) + (editing*7) + (production*7) + (directing*8) + (writing*9))/630*100;
      case "Adventure":
        return ((plot*9) + (acting*9) + (cinematography*10) + (soundtrack*10) + (editing*7) + (production*8) + (directing*7) + (writing*9))/690*100;
      default:
        return ((plot*10) + (acting*10) + (cinematography*10) + (soundtrack*10) + (editing*10) + (production*10) + (directing*10) + (writing*10))/800*100;
    }
  }

  function calculateFinalScore(dataset){
    let genre = dataset["genre"].split(", ");

    if(genre.length > 1){
      let score = 0;
      for(let i = 0; i < genre.length; i++){
        score += calculateGenre(genre[i], dataset);
      }
      return score/genre.length;
    }
    else{
      return calculateGenre(genre, dataset);
    }
  }
  return (
    <div className="App">
      <header>Movie Ratings</header>
      <text>Rating movies based on different qualities with an algorithm determined to give them strength weights dependent on the genre and style of movie</text>
      <table className="Ratings">
        <th>Scorer</th>
        <th>Movie Name</th>
        <th>Genre</th>
        <th>Plot</th>
        <th>Acting</th>
        <th>Cinematography</th>
        <th>Soundtrack</th>
        <th>Editing</th>
        <th>Production Design</th>
        <th>Directing</th>
        <th>Writing</th>
        <th>Final Score</th>
        {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.scorer}</td>
                <td>{val.name}</td>
                <td>{val.genre}</td>
                <td>{val.plot}/10</td>
                <td>{val.acting}/10</td>
                <td>{val.cinematography}/10</td>
                <td>{val.soundtrack}/10</td>
                <td>{val.editing}/10</td>
                <td>{val.production}/10</td>
                <td>{val.directing}/10</td>
                <td>{val.writing}/10</td>
                <td>{calculateFinalScore(data[key]).toFixed(2)}%</td>
              </tr>
            )
          })}
      </table>
    </div>
  );
}

export default App;
