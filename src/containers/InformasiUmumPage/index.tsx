import { InformasiUmumApi } from 'api';
import CardInformasi from 'components/Card/CardInformasi';
import Loading from 'components/LoadingBar';
import { useEffect, useState } from 'react';

const InformasiUmumPage = () => {
	const [aplikasi, setAplikasi] = useState([]);
	const [jalur, setJalur] = useState([]);
	const [kondisi, setKondisi] = useState([]);
	const [download, setDownload] = useState([]);
	const [download1, setDownload1] = useState([]);
	const [download2, setDownload2] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		InformasiUmumApi(($: any) => {
			let aplikasi: any = [];
			let jalur: any = [];
			let kondisi: any = [];
			let download: any = [];
			let download1: any = [];
			let download2: any = [];

			//aplikasi
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '' };
				obj['title'] = datas;
				aplikasi.push(obj);
			});

			//jalur
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '' };
				obj['title'] = datas;

				jalur.push(obj);
			});

			//kondisi
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '' };
				obj['title'] = datas;

				kondisi.push(obj);
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

			setAplikasi(aplikasi.slice(0, 3));
			setJalur(jalur.slice(3, 16));
			setKondisi(kondisi.slice(16, 17));

			setDownload(download.slice(0, 3));
			setDownload1(download1.slice(3, 16));
			setDownload2(download2.slice(16, 17));
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='layout-backgrounnd'>
					<div className='bg-banner flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20 h-full sm:h-64'>
						<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>Informasi Yang Wajib Disediakan dan Diumumkan secara</h3>
						<h1 className='text-xl lg:text-6xl'>Serta-Merta</h1>
					</div>
					<div className='content-wrapper layout-background'>
						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Aplikasi untuk Pengguna Jasa</h1>

						{aplikasi.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download[index]} />;
						})}

						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Jalur Evakuasi di Lingkungan Kantor Pusat</h1>
						{jalur.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download1[index]} />;
						})}

						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Kondisi dan Situasi Kedaruratan</h1>
						{kondisi.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download2[index]} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default InformasiUmumPage;
