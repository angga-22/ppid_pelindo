import React from 'react';

import { ReactComponent as FbSVG } from '../../../assets/img/facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/img/instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/img/twitter.svg';
import { ReactComponent as Youtube } from '../../../assets/img/youtube.svg';

const index = () => {
	const renderAlamat = () => (
		<>
			<div className='divide-footer my-1' />
			<div className='text-xs mb-4 font-extralight'>
				Jl. Perak Timur No. 610 <br />
				Surabaya 60165 - Indonesia
				<br /> Telp. +62 31 3298631
			</div>
			<div className='text-xs font-bold'>Layanan Pelanggan</div>
			<div className='text-xs font-extralight'>info@pelindo.co.id</div>
		</>
	);

	const renderAlamatRepresentatif = () => (
		<>
			<div className='divide-footer my-1' />
			<div className='text-xs mb-4 font-extralight'>
				Gedung Taman Sari Parama <br />
				Office Lt 7
			</div>
			<div className='text-xs font-extralight'>
				Jl. Wahid No 86 <br />
				Jakarta Pusat - 10340 <br />
				Telp. +62 21 2234608
			</div>
		</>
	);

	const renderJamLayanan = () => (
		<>
			<div className='divide-footer my-2' />
			<div className='text-xs  '>Senin - Jumat</div>
			<div className='text-sm'>08:00 - 16:00</div>
			<div className='divide-footer my-2' />
			<div className='text-sm '>Komisi Informasi Pusat</div>
		</>
	);

	const listsFooter = [
		{
			title: 'Kantor Pusat',
			template: () => renderAlamat()
		},
		{
			title: 'Kantor Representatif',
			template: () => renderAlamatRepresentatif()
		},
		{
			title: 'Jam Layanan',
			template: () => renderJamLayanan()
		}
	];
	return (
		<footer className='bg-blue-100 absolute bottom-0 w-full text-white'>
			<div className='container mx-auto p-6'>
				<div className='flex flex-wrap'>
					{listsFooter.map((list) => {
						return (
							<div className='w-full sm:w-1/4 px-2 my-4'>
								<div className='font-bold'>{list.title}</div>

								{list.template()}
							</div>
						);
					})}
					<div className='w-full sm:w-1/4 px-2 my-4'>
						<div className='flex'>
							<div className='rounded-full h-8 w-8 bg-white flex items-center px-2 mx-2'>
								<Twitter className='w-full' fill='#004d9c' />
							</div>
							<div className='rounded-full h-8 w-8 bg-white flex items-center px-2 mx-2'>
								<FbSVG className='w-full' fill='#004d9c' />
							</div>
							<div className='rounded-full h-8 w-8 bg-white flex items-center px-2 mx-2'>
								<Instagram className='w-full' fill='#004d9c' />
							</div>
							<div className='rounded-full h-8 w-8 bg-white flex items-center px-2 mx-2'>
								<Youtube className='w-full' fill='#004d9c' />
							</div>
						</div>
						<div className='mt-8'>
							<div className='text-xs font-extralight'>Kontak</div>
							<div className='text-xs font-extralight'>Pesan Langsung</div>
							<div className='text-xs font-extralight'>Pelaporan</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default index;
