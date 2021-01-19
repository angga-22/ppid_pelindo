import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomepageApi } from "../../api";
import "./index.css";

const Index = () => {
  const renderNews = (img: any, title: string) => (
    <div className="shadow-md rounded p-3 h-auto w-full">
      <div className="bg-gray-900 h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src={require(`../../assets/img/news${img}.jpg`).default}
          alt=""
        />
      </div>
      <div className="mx-3">
        <h6 className="text-lg text-gray-900 mt-2">
          {title.substring(0, 40)}
          {title.length > 40 && "..."}
        </h6>
        <p className="text-base text-blue-100 mt-6">Selengkapnya</p>
      </div>
    </div>
  );

  const renderCarousel = () => (
    <div className="relative h-full">
      <img
        className="object-cover h-full"
        alt="images"
        src={require("../../assets/img/back-carousel.jpg").default}
      />
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
      <img
        src={require("../../assets/img/back-carousel2.jpg").default}
        alt=""
        className="object-cover h-full w-full"
      />
      <div className="absolute bg-blue-200 bg-opacity-90 flex right-0 left-0 top-0 bottom-0">
        <div className="w-1/3 ml-44 pt-8 hidden lg:block">
          <img
            src={require("../../assets/img/CEO.png").default}
            className="h-full w-full"
            alt="images"
          />
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

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    HomepageApi(($: any) => {
      let data: any = [];
      let data1: any = [];
      $('div[class="col-md-8"] > p > strong').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        data.push(datas);
      });

      $('div[class="col-md-8"] > p:nth-child(3)').each(function (
        i: any,
        element: any
      ) {
        let datas = $(element).prepend().text();
        data1.push(datas);
      });
      setData(data);
      setData1(data1);
      setLoading(false);
    });
  }, []);

  const Loading = () => {
    return <div className=" container text-center my-10">...loading</div>;
  };

  return (
    <div className="mx-auto text-center mb-12">
      {loading ? (
        <Loading />
      ) : (
        <div>
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
            <div>
              <div className="px-12 mb-12">
                <h4 className="text-2xl font-bold">{data}</h4>
                <p className="mt-4 lg:w-3/4 mx-auto">{data1}</p>
              </div>

              <div className="flex flex-col lg:flex-row space-y-7 justify-evenly mt-8 pb-12 text-sm font-bold mx-32 lg:space-y-0">
                <div className="flex flex-col items-center space-y-8">
                  <img
                    src={require("../../assets/img/icon1.png").default}
                    alt="images"
                    width="100"
                  />
                  <h6 className="">Informasi Berkala</h6>
                </div>
                <div className="flex flex-col items-center space-y-8">
                  <img
                    src={require("../../assets/img/icon2.png").default}
                    alt="images"
                    width="100"
                  />
                  <h6 className="">Informasi Serta Merta</h6>
                </div>
                <div className="flex flex-col items-center space-y-8">
                  <img
                    src={require("../../assets/img/icon3.png").default}
                    alt="images"
                    width="100"
                  />
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
                {/* <div className="grid grid-cols-3 mx-auto  text-left text-sm gap-4 px-4">
                  {renderNews("1", "Lorem ipsum dolor sit amet.")}
                  {renderNews(
                    "2",
                    "vehicle beside concrete building during daytime"
                  )}
                  {renderNews(
                    "3",
                    "red and white flag under blue sky during daytime"
                  )}
                </div> */}
                <div className="flex flex-col items-center lg:items-start mx-auto  justify-center text-left text-sm space-y-5 lg:space-x-12 md:space-y-0 px-4 lg:flex-row lg:justify-evenly">
                  {renderNews("1", "Lorem ipsum dolor sit amet")}
                  {renderNews(
                    "2",
                    "vehicle beside concrete building during daytime"
                  )}
                  {renderNews(
                    "3",
                    "red and white flag under blue sky during daytime"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
