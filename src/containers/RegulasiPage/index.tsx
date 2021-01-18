import CardInformasi from 'components/Card/CardInformasi';
import React from 'react';

const InformasiPublikPage = () => {
	const peraturan = [
		{
			title: 'Undang-undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan Keterbukaan Informasi Publik',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Peraturan Komisi Informasi Nomor 1 Tahun 2010 tentang Standar Layanan Informasi Publik',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Undang-undang Nomor 40 Tahun 1999 tentang Pers',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Kode Etik Jurnalistik',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Peraturan Komisi Informasi Nomor 1 Tahun 2017 tentang Pengklasifikasian Informasi Publik',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		}
	];

	const peraturanPelabuhan = [
		{
			title: 'Undang-undang Nomor 17 Tahun 2008 tentang Pelayaran',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Peraturan Pemerintah Nomor 61 Tahun 2009 tentang Kepelabuhanan',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Keputusan Gubernur Jawa Timur Nomor 188/475//KPTS/013/2017 Tentang Penetapan Lokasi Pembangunan Flyover Dari Dan Menuju Terminal Teluk Lamong',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		}
	];

	const peraturanInformasi = [
		{
			title:
				'Peraturan Direksi PT Pelabuhan Indonesia III (Persero) nomor: Per.13/HM.03/P.III-2016 tanggal 3 Mei 2016 tentang Pedoman Pelaksanaan Keterbukaan Informasi Publik di Lingkungan PT Pelabuhan Indonesia III (Persero)',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Peraturan Direksi PT Pelabuhan Indonesia III (Persero) nomor: Per.0040/HM.03/P.III-2018',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		},
		{
			title: 'Rancangan Peraturan tentang Keterbukaan Informasi Publik',
			opt: 'Download',
			url: 'https://e-ppid.pelindo.co.id/download/downloadregulasi/regulasi_UU_Nomor_14_Tahun_2008.pdf'
		}
	];

	return (
		<>
			<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
				<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>Informasi Yang Wajib Disediakan dan Diumumkan Secara</h3>
				<h1 className='text-xl lg:text-6xl'>Berkala</h1>
			</div>
			<div className='container my-8 mx-auto p-2 lg:p-0'>
				<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan Mengenai Keterbukaan Informasi Publik</h1>
				{peraturan.map((data) => (
					<CardInformasi {...data} link={data.url} />
				))}

				<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan Mengenai Operasional Pelabuhan</h1>
				{peraturanPelabuhan.map((data) => (
					<CardInformasi {...data} link={data.url} />
				))}

				<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan mengenai Keterbukaan Informasi Publik yang dikeluarkan PT Pelabuhan Indonesia III (Persero)</h1>
				{peraturanInformasi.map((data) => (
					<CardInformasi {...data} link={data.url} />
				))}
			</div>
		</>
	);
};

export default InformasiPublikPage;
