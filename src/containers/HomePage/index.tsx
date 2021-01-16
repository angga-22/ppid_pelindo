import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Icon1 from "../../assets/img/icon1.png";
import Icon2 from "../../assets/img/icon2.png";
import Icon3 from "../../assets/img/icon3.png";
import CEO from "../../assets/img/CEO.png";
import News from "../../assets/img/news.jpg";
import BackCarousel from "../../assets/img/back-carousel.jpg";
import BackCarousel2 from "../../assets/img/back-carousel2.jpg";
import "./index.css";

const index = () => {
  const renderNews = () => (
    <div className="h-auto shadow-md p-3 rounded">
      <div className="bg-gray-900 h-72">
        <img className="h-full" src={News} alt="" />
      </div>
      <h6 className="text-xl text-gray-900 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h6>
      <p className="text-base text-blue-100 mt-6">Selengkapnya</p>
    </div>
  );

  const renderCarousel = () => (
    <div className="relative h-full">
      <img className="object-cover" src={BackCarousel} />
      <div className="flex flex-col items-center justify-center absolute bottom-0 top-0 right-0 left-0 bg-blue-100 bg-opacity-70 text-white">
        <h2 className="text-xl lg:text-3xl">
          Dapatkan Informasi Seputar Pelindo III
        </h2>
        <h1 className="text-3xl lg:text-6xl my-6">Lebih Mudah</h1>
        <button className="uppercase text-sm text-blue-100 bg-white px-4 py-1 rounded">
          Selengkapnya
        </button>
      </div>
    </div>
  );

  const renderCarousel2 = () => (
    <div className="relative text-left h-96">
      <img src={BackCarousel2} alt="" className="object-cover h-full w-full" />
      <div className="absolute bg-blue-200 bg-opacity-90 flex right-0 left-0 top-0 bottom-0">
        <div className="w-1/3 ml-44 pt-8 hidden lg:block">
          <img src={CEO} className="h-full w-full" />
        </div>
        <div className="flex flex-col m-12">
          <h6 className="text-base lg:text-3xl font-semibold text-white mr-8 lg:mr-40">
            "Keterbukaan informasi merupakan bagian dari komitmen perusahaan
            terkait dengan good corporate governance (GCG) dan kami merupakan
            BUMN yang taat pada aturan itu"
          </h6>
          <p className="text-blue-300 mt-8">U Saefudin Noer</p>
          <p className="text-gray-100 mt-px">President Director/CEO</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto text-center mb-12">
      <div id="carousel">
        <Carousel
          className="carousel1"
          showArrows={true}
          showThumbs={false}
          infiniteLoop
          autoPlay={true}
          interval={5000}
          transitionTime={150}
          showStatus={false}
          emulateTouch={true}
          swipeable={true}
          stopOnHover={true}
        >
          {renderCarousel()}
          {renderCarousel()}
          {renderCarousel()}
        </Carousel>
      </div>

      <div className="mt-10 lg:px-0">
        <div className="px-12 mb-12">
          <h4 className="text-2xl font-bold">
            Selamat Datang di Layanan e-PPID
          </h4>
          <p className="mt-4 lg:w-3/4 mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            culpa architecto est at totam molestiae odit quaerat quos fugit
            tempora ad, numquam delectus, aut atque. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Temporibus ab sed est at impedit
            quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sit, id! Est impedit nisi cupiditate sapiente!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-7 justify-evenly mt-8 pb-12 text-sm font-bold mx-32 lg:space-y-0">
          <div className="flex flex-col items-center space-y-8">
            <img src={Icon1} width="100" />
            <h6 className="">Informasi Berkala</h6>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <img src={Icon2} width="100" />
            <h6 className="">Informasi Serta Merta</h6>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <img src={Icon3} width="100" />
            <h6 className="">Informasi setiap Saat</h6>
          </div>
        </div>

        <div className="pt-16 pb-12 bg-gray-900 bg-opacity-10 font-bold">
          <h5 className="text-lg text-gray-900 text-opacity-90">
            Jumlah Pemohon Informasi
          </h5>
          <h1 className="text-7xl my-4 text-blue-200">12345</h1>
          <button className="uppercase text-sm text-white bg-blue-200 px-3 py-1 rounded">
            Selengkapnya
          </button>
        </div>

        <div id="carousel2">
          <Carousel
            className="carousel2"
            showArrows={true}
            showThumbs={false}
            infiniteLoop
            autoPlay={true}
            interval={5000}
            transitionTime={150}
            showStatus={false}
            emulateTouch={true}
            swipeable={true}
            stopOnHover={true}
          >
            {renderCarousel2()}
            {renderCarousel2()}
            {renderCarousel2()}
          </Carousel>
        </div>

        <div>
          <h2 className="text-blue-200 text-5xl font-bold my-12">
            Berita Terbaru
          </h2>
          <div className="flex flex-col items-center mx-auto  justify-center text-left text-sm space-y-5 lg:space-x-12 md:space-y-0 px-4 lg:flex-row lg:justify-evenly">
            {renderNews()}
            {renderNews()}
            {renderNews()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
