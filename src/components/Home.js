import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <div className="home">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home-row">
          <Products
            key="1241221"
            id="1241221"
            title="LEGO Marvel Avengers Iron Man Helmet 76165; Brick Iron Man-Mask for-Adults to Build and Display, Creative Challenge for Marvel Fans, New 2020 (480 Pieces)"
            price={288.42}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81gif2-wVxL._AC_SL1500_.jpg"
          />
          <Products
            key="122452"
            id="122452"
            title="Hasbro Hi Ho Cherry-O Game Disney Mickey Mouse Clubhouse Edition"
            price={212.44}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/810ex5VGT-L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home-row">
          <Products
            key="123989"
            id="123989"
            title="Airpods 1&2 Charging Case Cover | Cute Cartoon Airpods Case | Silicone AirPod Cover with Keychain | Cute Earbud Case Airpods for Kids Teens Girls Boys （Yoda Baby）"
            price={513.7}
            rating={4}
            image="https://m.media-amazon.com/images/I/41rBgjE1VRL._AC_SY161_.jpg"
          />
          <Products
            key="124123"
            id="124123"
            title="SAMSUNG 43-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN43TU8000FXZA, 2020 Model)"
            price={288.42}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
          />
          <Products
            key="125556"
            id="125556"
            title="JOYSTAR 12/14 Inch Lightweight Balance Bike for 2 3 4 5 6 Years Old Toddlers, Kids, Glider Bike with Footrest and Handlebar Pads"
            price={300.78}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61iK7ZXwvrL._AC_SL1200_.jpg"
          />
        </div>
        <div className="home-row">
          <Products
            key="126214"
            id="126214"
            title="Ryze Tech Tello - Mini Drone Quadcopter UAV for Kids Beginners 5MP Camera HD720 Video 13min Flight Time Education Scratch Programming Toy Selfies, powered by DJI, White"
            price={110.63}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71lOHyfoVhL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
