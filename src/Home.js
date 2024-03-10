// Home.js
import React from 'react';
import './App.css';

const Home = () => {
  return (
    <main>
      <section >
        <div></div>
        <div>
          <img src="images/rename.png" alt="Hero" />
        </div>
        <div></div>
      </section>

      <div className="info">
        <h1 className="caption">Shop antique & vintage items</h1>
        <p className="infoData">
          Browse our selection of thousands of original antique and vintage
          salvaged products, organized into easy to find categories. Including
          doors, lighting, hardware, building parts, windows, home decor,
          furniture and more. Our inventory spans a wide variety of historical
          periods from Colonial to Victorian through the Art Nouveau, Arts &
          Crafts and Art Deco styles, into the mid-century modern era and more.
        </p>
      </div>
    </main>
  );
};

export default Home;
