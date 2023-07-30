import { useEffect } from "react";
import { useState } from "react";

const FrontPage = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
    const [timer, setTimer] = useState(null);
  const descrip = 'absolute bottom-[30%]';

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 10000);

    setTimer(carouselTimer);

    return () => {
      clearInterval(carouselTimer);
    };
  }, []);

  const banners = [
    'https://images.pexels.com/photos/7506680/pexels-photo-7506680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80',
    'https://images.unsplash.com/photo-1603561596973-8166e9e089d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60d',
  ];

  function previousBanner() {
   
    setBannerIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  
  }

  function nextBanner() {
   
    setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
   
  }

  function startTimer() {
    const newTimer = setInterval(() => {
        setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 10000);
    
      setTimer(newTimer);

      const ban = document.querySelector('.banner');
      console.log(ban)
  }

  return (
    <div className="carousel">
      {banners.map((banner, index) => (
        <div key={index} className={`banner w-full h-screen ${index === bannerIndex ? '' : 'hide'}`}>
          <img
            src={banner}
            alt="display banner"
            className="object-cover w-full h-screen relative"
          />
          { 
          index === 0 && <Descript style={`${descrip} left-[10%]`} 
          heading='Be Confident'
          desc='Browse our lastes 2023 collection and many other
        that sold out early this year'/>
          }
          {
            index === 1 && <Descript style={`${descrip} w-full flex flex-col items-center text-center`}
            heading='Be Unique'
            desc='The trend today is not going with the flow
            but creating your own wave.' />
          }
          {
            index === 2 && <Descript style={`${descrip} right-[0%]`}
            heading='Be Extraordinary'
            desc='Browse our lastes 2023 collection and many other
            that sold out early this year' />
          }
          <Prev handleClick={previousBanner} />
          <Next handleClick={nextBanner} />
        </div>
      ))}
    </div>
  );
};

const Descript = (props) => {
    return (
    <div className={`${props.style} description`}>
        <span className="uppercase text-lg font-semibold tracking-wide text-slate-900">Our all-time favourite</span>
        <h2 className="text-7xl my-4 text-slate-800 tracking-wider">{props.heading}</h2>
        {props.desc? <p className="text-lg text-slate-900 tracking-wide w-[60%] mb-4">{props.desc}</p>: ''}
        <button className="uppercase p-2 mt-4 font-semibold text-white bg-slate-900 tracking-wider w-[250px] h-[40px] hover:bg-slate-800">Discover more</button>
    </div>
    )
}

const Next = (props) => {
    return (
        <button className="absolute bottom-[40%] right-[3%] text-zinc-400 hover:text-zinc-600 transition ease-in-out 700"
        onClick={props.handleClick}>
           <i className="fa-solid fa-chevron-right text-4xl"></i>
        </button>
    )
}

const Prev = (props) => {
    return (
        <button className="absolute bottom-[40%] left-[3%] text-zinc-400 hover:text-zinc-600 transition ease-in-out 700"
        onClick={props.handleClick}>
             <i className="fa-solid fa-chevron-left text-4xl"></i>
        </button>
    )
}

export default FrontPage;
