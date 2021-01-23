import { useState, useEffect } from 'react';
import CardInformasi from 'components/Card/CardInformasi';
import Loading from 'components/LoadingBar';
import Banner from 'components/Banner';
import { RegulasiApi } from 'api';

const InformasiPublikPage = () => {
	const [peraturan, setPeraturan] = useState([]);
	const [peraturanPelabuhan, setPeraturanPelabuhan] = useState([]);
	const [peraturanInformasi, setPeraturanInformasi] = useState([]);
	const [download, setDownload] = useState([]);
	const [download1, setDownload1] = useState([]);
	const [download2, setDownload2] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		RegulasiApi(($: any) => {
			let peraturan: any = [];
			let peraturanPelabuhan: any = [];
			let peraturanInformasi: any = [];
			let download: any = [];
			let download1: any = [];
			let download2: any = [];

			//peraturan
			$('tbody > tr > td:nth-child(2) > a').each(function (i: any, element: any) {
				const datas = $(element).prepend().text().trim();

				const obj = { title: '' };
				obj['title'] = datas;

				peraturan.push(obj);
			});

			//peraturan pelabuhan
			$('tbody > tr > td:nth-child(2) > a').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '', link: '' };
				obj['title'] = datas;
				obj['link'] = '/';
				peraturanPelabuhan.push(obj);
			});

			//peraturan informasi
			$('tbody > tr > td:nth-child(2) > a').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '', link: '' };
				obj['title'] = datas;
				obj['link'] = '/';
				peraturanInformasi.push(obj);
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

			setPeraturan(peraturan.slice(0, 6));
			setPeraturanPelabuhan(peraturanPelabuhan.slice(6, 10));
			setPeraturanInformasi(peraturanInformasi.slice(10, 13));
			setDownload(download.slice(0, 6));
			setDownload1(download1.slice(6, 10));
			setDownload2(download2.slice(10, 13));

			setLoading(false);

			console.log(peraturan, 'peraturan di regulasi page');
			console.log(download, 'download di regulasi page');
		});
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<Banner title='Regulasi' />
					<div className='content-wrapper layout-background'>
						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan Mengenai Keterbukaan Informasi Publik</h1>
						{peraturan.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download[index]} />;
						})}

						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan Mengenai Operasional Pelabuhan</h1>
						{peraturanPelabuhan.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download1[index]} />;
						})}

						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan mengenai Keterbukaan Informasi Publik yang dikeluarkan PT Pelabuhan Indonesia III (Persero)</h1>
						{peraturanInformasi.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download2[index]} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default InformasiPublikPage;
