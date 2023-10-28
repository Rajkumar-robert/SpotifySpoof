import React from "react";
import Navbar from "@/components/Navbar";
import Toolbar from "@/components/Toolbar";
import AudioPlayer from "@/components/PlayMusicCard";
import PurchaseMusicCard from "@/components/PurchaseMusicCard";

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
    <div className="flex flex-col relative top-[100px] w-[1300px]">
      <p className="text-white text-6xl font-extrabold ml-10 mt-10">Purchased Songs & Albums</p>
      <div className="grid grid-cols-3 ">
        {musicData.map((music, index) => (
          <PurchaseMusicCard
            key={index}
            title={music.title}
            imageUrl={music.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
