import logo from './logo.svg';
import './App.css';

const data = [
  { name: "Movie Name", scorer: "Quinn", genre: "Horror, Romance", plot: 5.6, acting: 8.9, cinematography: 1.1, soundtrack: 5.3, editing: 2.5, production: 5, directing: 7, writing: 9, isAnimation: false, isStopMotion: false }
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
      acting = 10;
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
