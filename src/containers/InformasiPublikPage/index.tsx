import { InformasiApi } from 'api';
import CardInformasi from 'components/Card/CardInformasi';
import Loading from 'components/LoadingBar';
import { useEffect, useState } from 'react';

const InformasiPublikPage = () => {
	const [informasi, setInformasi] = useState([]);
	const [capaianKerja, setCapaianKerja] = useState([]);
	const [laporan, setLaporan] = useState([]);
	const [loading, setLoading] = useState(true);
	const [download, setDownload] = useState([]);
	const [download1, setDownload1] = useState([]);
	const [download2, setDownload2] = useState([]);

	useEffect(() => {
		InformasiApi(($: any) => {
			let informasi: any = [];
			let capaianKerja: any = [];
			let laporan: any = [];
			let download: any = [];
			let download1: any = [];
			let download2: any = [];

			//informasi
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '', link: '' };
				obj['title'] = datas;
				obj['link'] = '/';
				informasi.push(obj);
			});

			//capaian kerja
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '', link: '' };
				obj['title'] = datas;
				obj['link'] = '/';
				capaianKerja.push(obj);
			});

			//laporan
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '', link: '' };
				obj['title'] = datas;
				obj['link'] = '/';
				laporan.push(obj);
			});

			//link download 0
			$('tbody > tr > td:nth-child(4) > a').each(function (i: any, element: any) {
				let link = $(element).prepend().attr('href');

				const obj = { link: '' };
				obj['link'] = link;

				download.push(obj);
			});

			//link download 1
			$('tbody > tr > td:nth-child(4) > a').each(function (i: any, element: any) {
				let link = $(element).prepend().attr('href');

				const obj = { link: '' };
				obj['link'] = link;
				download1.push(obj);
			});
			//link download 2
			$('tbody > tr > td:nth-child(4) > a').each(function (i: any, element: any) {
				let link = $(element).prepend().attr('href');

				const obj = { link: '' };
				obj['link'] = link;
				download2.push(obj);
			});

			setInformasi(informasi.slice(0, 7));
			setCapaianKerja(capaianKerja.slice(7, 8));
			setLaporan(laporan.slice(8, 9));

			setDownload(download.slice(0, 7));
			setDownload1(download1.slice(7, 8));
			setDownload2(download2.slice(8, 9));
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
						<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>Informasi Yang Wajib Disediakan dan Diumumkan Secara</h3>
						<h1 className='text-xl lg:text-6xl'>Berkala</h1>
					</div>
					<div className='container my-8 mx-auto p-2 lg:p-0'>
						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Informasi Tentang Profil PT. Pelabuhan Indonesia III (Persero)</h1>

						{informasi.map((data: any, index: any) => {
							console.log(data);
							return <CardInformasi data={data} link={download[index]} />;
						})}

						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Ringkasan Capaian Kerja</h1>
						{capaianKerja.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download1[index]} />;
						})}

						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Laporan</h1>
						{laporan.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download2[index]} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default InformasiPublikPage;
