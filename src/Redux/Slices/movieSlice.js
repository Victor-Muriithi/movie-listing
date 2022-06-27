import { createSlice } from '@reduxjs/toolkit';

const DiscoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=f66418c0865c5fe805b1206fdcf09930&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

const initialState = {
    movieList: DiscoverUrl,
}


const movieSlice = createSlice({
    name:'movie',
    initialState,

    reducers: {
        movieList: (state, action) => {
            state.movieList = action.payload;
        }
    }

})

export const { movieList } = movieSlice.actions;
export default movieSlice.reducer;