import { InformasiWajibApi } from 'api';
import CardInformasi from 'components/Card/CardInformasi';
import { useEffect, useState } from 'react';

const InformasiUmumPage = () => {
	const [daftar, setDaftar] = useState([]);
	const [download, setDownload] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		InformasiWajibApi(($: any) => {
			let daftar: any = [];
			let download: any = [];

			//daftar
			$('tbody > tr > td:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text().trim();

				const obj = { title: '' };
				obj['title'] = datas;
				daftar.push(obj);
			});

			//link download 0
			$('tbody > tr > td:nth-child(4) > a').each(function (i: any, element: any) {
				let link = $(element).prepend().attr('href');

				const obj = { link: '' };
				obj['link'] = link;

				download.push(obj);
			});

			setDaftar(daftar.slice(0, 1));
			setDownload(download.slice(0, 1));
			setLoading(false);
		});
	}, []);

	const Loading = () => {
		return <div className=' container text-center my-10'>...loading</div>;
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div className='bg-banner flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20 h-full sm:h-64'>
						<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>Informasi Yang Wajib Sedia</h3>
						<h1 className='text-xl lg:text-6xl'>Setiap Saat</h1>
					</div>
					<div className='content-wrapper layout-background mb-8'>
						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Daftar Informasi Publik</h1>

						{daftar.map((data: any, index: any) => {
							return <CardInformasi data={data} link={download[index]} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default InformasiUmumPage;
