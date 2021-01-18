import { InformasiApi } from "api";
import CardInformasi from "components/Card/CardInformasi";
import { useEffect, useState } from "react";

const InformasiPublikPage = () => {
  const [informasi, setInformasi] = useState([]);

  useEffect(() => {
    InformasiApi(($: any) => {
      let informasi: any = [];
      $("tbody > tr > td:nth-child(3)").each(function (i: any, element: any) {
        let datas = $(element).prepend().text().trim();
        const obj = { title: "", link: "" };
        obj["title"] = datas;
        obj["link"] = "/";
        informasi.push(obj);
      });

      setInformasi(informasi);
      console.log(informasi);
    });
  }, []);
  // const informasi = [
  // 	{
  // 		title: 'Company Profile PT Pelabuhan Indonesia III (Persero)',
  // 		link: 'page'
  // 	},
  // 	{
  // 		title: 'Visi dan Misi PT Pelabuhan Indonesia III (Persero)',
  // 		link: 'pdf'
  // 	},
  // 	{
  // 		title: 'Tugas dan Fungsi PT Pelabuhan Indonesia III (Persero) ',
  // 		link: 'page'
  // 	},
  // 	{
  // 		title: 'Struktur Organisasi PT Pelabuhan Indonesia III (Persero)',
  // 		link: 'pdf'
  // 	},
  // 	{
  // 		title: 'Alamat Kantor Pelindo III Group ',
  // 		link: 'page'
  // 	},
  // 	{
  // 		title: 'Profile Pejabat PT Pelabuhan Indonesia III (Persero)',
  // 		link: 'pdf'
  // 	}
  // ];

  const CapaianKerja = [
    {
      title: "Capaian Kinerja Perusahaan Tahun 2019",
      link: "page",
    },
  ];

  const laporan = [
    {
      title: "Laporann Tahunan",
      link: "page",
    },
  ];

  return (
    <>
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

        {informasi.map((item: any) => (
          <CardInformasi {...item} />
        ))}

        <h1 className="text-xl lg:text-2xl uppercase font-bold my-8">
          Ringkasan Capaian Kerja
        </h1>
        {CapaianKerja.map((data) => (
          <CardInformasi {...data} />
        ))}

        <h1 className="text-xl lg:text-2xl uppercase font-bold my-8">
          Laporan
        </h1>
        {laporan.map((data) => (
          <CardInformasi {...data} />
        ))}
      </div>
    </>
  );
};

export default InformasiPublikPage;
