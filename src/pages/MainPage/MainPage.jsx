import { useState } from "react";
import tracksList from "../../assets/trackList";
import style from "./mainPage.module.scss";
import Track from "../../components/Track.jsx";
import {Input} from "@mui/material";

const runSearch = (query) => {
    if (!query){
        return tracksList;
    }

    const lowerCaseQuery = query.toLowerCase();

    return tracksList.filter(
        (track) => 
            track.title.toLowerCase().includes(lowerCaseQuery) || 
            track.artists.toLowerCase().includes(lowerCaseQuery)
    );
};

const MainPage = () => {
    const [tracks, setTracks] = useState(tracksList);

    const handleChange = (event) => {
        const foundTracks = runSearch(event.target.value);
        setTracks(foundTracks);
    };
  return (
    <div className={style.search}>
        <Input 
            className={style.input} 
            onChange={handleChange} 
            placeholder="Поиск треков"
        />
        <div className={style.list}>
            {tracks.map((track) => (
                <Track key={track.id} {...track} />
            ))}
        </div>
    </div>
  );
};

export default MainPage;