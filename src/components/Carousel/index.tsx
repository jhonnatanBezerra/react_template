import React from 'react';

export const Carousel = () => {

  const imgs = [
    { id: 1, url: 'https://wallpapercave.com/wp/wp2707576.jpg' },
    { id: 2, url: 'https://wallpaper.dog/large/260890.jpg' },
    { id: 3, url: 'https://wallpapercave.com/wp/wp2707576.jpg' },
    { id: 4, url: 'https://wallpaper.dog/large/260890.jpg' },

  ]

  const handleScroll = (e) => {
    const element = e.target;
    /**
     * element.scrollWidth = width of the element
     * element.scrollLeft = how much the element has been scrolled
     * element.offsetWidth = width of the element
     */

    console.log(element.offsetWidth, element.scrollLeft, element.scrollWidth);



  }

  return (

    <div className="container-carousel"
      onScroll={e => handleScroll(e)}
      style={{ display: 'flex', alignItems: 'center', overflowX: 'scroll', whiteSpace: 'nowrap', width: '100%', position: 'relative', scrollBehavior: 'smooth' }}>
      {imgs.map((img) => (
        <img src={img.url} key={img.id} alt="" style={{ width: '100%', objectFit: 'contain' }} />
      ))}

      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 10, left: 10, width: '100%' }}>
        {imgs.length > 1 && imgs.map((_, index) => (
          <div key={index} style={{ height: 30, width: 30, background: 'red', borderRadius: '50%', marginLeft: 10 }} ></div>
        ))}
      </div> */}

    </div>

  );
}