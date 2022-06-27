import BackgroundBlue from "./Components/BackgroundBlue";
import MovieContainer from "./MovieContainer";
import {urlContext as Urlcontext} from "./Components/urlContext";
import {  useState} from "react";

function App() {
  const [header, setHeader] = useState('Discover');
  // f66418c0865c5fe805b1206fdcf09930
  // searchApi : 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US'

const urlContext = {
  discoverUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  newReleasesUrl: "https://api.themoviedb.org/3/discover/movie?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=100&with_watch_monetization_types=flatrate",
  upcomingUrl:"https://api.themoviedb.org/3/movie/upcoming?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US&page=1",
  favouritesUrl:"https://api.themoviedb.org/3/movie/popular?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US&page=1",
  header: header,
  setHeader: setHeader,

}


  return (
    <Urlcontext.Provider value={{...urlContext}}>
    <div className="App">
    <BackgroundBlue />
     <MovieContainer />
    </div>
    </Urlcontext.Provider >
  );
}

export default App;
