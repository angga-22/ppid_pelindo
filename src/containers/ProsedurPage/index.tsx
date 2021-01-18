import React from 'react';

const index = () => {
	return (
		<>
			<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
				<h1 className='text-xl lg:text-6xl'>Layanan</h1>
			</div>
			<div className='container my-8 mx-auto p-2 lg:p-0 flex flex-wrap'>
				<div className='w-full sm:w-1/2  px-2'>
					<div className='shadow-lg p-4 '>
						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Peraturan Mengenai Keterbukaan Informasi Publik</h1>
						<img src='https://e-ppid.pelindo.co.id/upload/general/gen_Permohonan_Informasi_001.jpg' alt='maklumat' className='w-full ' />
					</div>
				</div>
				<div className='w-full sm:w-1/2  px-2 h-full'>
					<div className='shadow-lg p-4 '>
						<h1 className='text-xl lg:text-2xl uppercase font-bold my-8'>Prosedur Pengajuan Keberatan</h1>
						<img src='https://e-ppid.pelindo.co.id/upload/general/gen_pengajuan_keberatan_001.jpg' alt='maklumat' className='w-full ' />
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
