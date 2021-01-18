import { InformasiApi } from "api";
import CardInformasi from "components/Card/CardInformasi";
import { useEffect, useState } from "react";

const InformasiPublikPage = () => {
  const [informasi, setInformasi] = useState([]);
  const [capaianKerja, setCapaianKerja] = useState([]);
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    InformasiApi(($: any) => {
      let informasi: any = [];
      let capaianKerja: any = [];
      let laporan: any = [];
      $("tbody > tr > td:nth-child(3)").each(function (i: any, element: any) {
        let datas = $(element).prepend().text().trim();

        const obj = { title: "", link: "" };
        obj["title"] = datas;
        obj["link"] = "/";
        informasi.push(obj);
      });
      $("tbody > tr > td:nth-child(3)").each(function (i: any, element: any) {
        let datas = $(element).prepend().text().trim();

        const obj = { title: "", link: "" };
        obj["title"] = datas;
        obj["link"] = "/";
        capaianKerja.push(obj);
      });
      $("tbody > tr > td:nth-child(3)").each(function (i: any, element: any) {
        let datas = $(element).prepend().text().trim();

        const obj = { title: "", link: "" };
        obj["title"] = datas;
        obj["link"] = "/";
        laporan.push(obj);
      });

      setInformasi(informasi.slice(0, 7));
      setCapaianKerja(capaianKerja.slice(7, 8));
      setLaporan(laporan.slice(8, 9));
      setLoading(false);
    });
  }, []);

  const Loading = () => {
    return <div className=" container text-center my-10">...loading</div>;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20">
            <h3 className="text-lg lg:text-3xl w-1/ lg:w-1/3">
              Informasi Yang Wajib Disediakan dan Diumumkan Secara
            </h3>
            <h1 className="text-xl lg:text-6xl">Berkala</h1>
          </div>
          <div className="container my-8 mx-auto p-2 lg:p-0">
            <h1 className="text-xl lg:text-2xl uppercase font-bold my-8">
              Informasi Tentang Profil PT. Pelabuhan Indonesia III (Persero)
            </h1>

            {informasi.map((data) => (
              <CardInformasi {...data} />
            ))}

            <h1 className="text-xl lg:text-2xl uppercase font-bold my-8">
              Ringkasan Capaian Kerja
            </h1>
            {capaianKerja.map((data) => (
              <CardInformasi {...data} />
            ))}

            <h1 className="text-xl lg:text-2xl uppercase font-bold my-8">
              Laporan
            </h1>
            {laporan.map((data) => (
              <CardInformasi {...data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default InformasiPublikPage;
