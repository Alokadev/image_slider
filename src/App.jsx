import { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides1 } from "./nike_links";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides1.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 relative group">
      <div style={{backgroundImage: `url(${slides1[currentIndex].url})`}}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>

      {/* Left Arrow */}
      <div className="left_arrow">
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>

      {/* Left Arrow */}
      <div className="right_arrow">
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides1.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}className="text-2xl cursor-pointer">
            <RxDotFilled/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;