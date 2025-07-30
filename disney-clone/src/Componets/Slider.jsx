import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute left-0 top-[40%] z-10 cursor-pointer mx-4"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute right-0 top-[40%] z-10 cursor-pointer mx-4"
        onClick={sliderRight}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title || 'Movie'}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-200 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
