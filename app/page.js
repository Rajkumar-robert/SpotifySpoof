import React from "react";
import Navbar from "@/components/Navbar";
import Toolbar from "@/components/Toolbar";
import MusicCard from "@/components/MusicCard";

const musicData = [
  {
    title: "HALSEY ft. Chainsmokers",
    imageUrl: "closer.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "shape.png",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "beatit.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "borntodie.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "meatloaf.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "paradise.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "perry.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "rebirth.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "starboy.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "taylor.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "youth.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "desp.jpeg",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Navbar />
        <div className="flex flex-col">
          <div>
            <Toolbar />
          </div>

          <div className="grid grid-cols-4">
            {musicData.map((music, index) => (
              <MusicCard
                key={index}
                title={music.title}
                imageUrl={music.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
