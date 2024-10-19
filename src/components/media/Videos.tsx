'use client';
import React, { useEffect, useState } from 'react';
import InnerHero from '../InnerHero';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/videos`);

      if (response.status == 200) {
        setVideos(response.data.data.resources);
        console.log(response);
      } else {
        console.error('Failed to fetch Videos');
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <InnerHero page='VIDEOS' />
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-4xl font-bold py-8'>Video Playlist</h1>
        <div className='w-full flex flex-wrap gap-8 justify-center pb-10 px-[5%]'>
          {videos.map((item: any) => (
            <div
              className='w-full md:w-[30%] aspect-[1/1] rounded-lg bg-slate-400 px-[5%]'
              key={item.id}
            >
              <ReactPlayer
                url={item.url}
                width='640'
                height='360'
                controls
                className='w-full h-full rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
