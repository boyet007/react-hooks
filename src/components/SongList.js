import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSong] = useState([
    { title: "almost home", id: 1 },
    { title: "memori gosple", id: 2 },
    { title: "this widl darkness", id: 3 }
  ]);
  const addSong = (title) => {
    setSong([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
