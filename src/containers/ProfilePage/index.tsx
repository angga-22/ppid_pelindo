import React from 'react';

import logoPelindo from 'assets/img/logo-pelindo.png';

const index = () => {
	return (
		<div className='profile'>
			<div className='profile-banner w-full h-60'>
				<div className='block sm:hidden h-full d-flex items-center'>
					<div className='text-5xl text-white h-full px-4 flex items-center'>Profile</div>
				</div>
			</div>
			<div className='mt-16 container mx-auto'>
				<div className='sm:w-8/12 mx-auto w-10/12'>
					<img src={logoPelindo} alt='asset' className='sm:w-1/4 w-3/4' />

					<div className='mt-8 mb-52'>
						<p className='text-md sm:text-xl my-8 leading-loose'>
							Portal e-ppid ini merupakan bagian dari layanan informasi publik yang dilaksanakan oleh PT Pelabuhan Indonesia III (Persero) sesuai dengan Undang-undang Nomor 14 Tahun 2008
							tentang Keterbukaan Informasi Publik. PT Pelabuhan Indonesia III (Persero) memberikan kesempatan kepada masyarakat untuk mengetahui tentang perusahaan melalui informasi
							yang kami sediakan maupun melalui permintaan informasi.
						</p>
						<p className='text-md sm:text-xl my-8 leading-loose'>
							Dukungan masyarakat sangat kami perlukan dalam pelaksanaan Keterbukaan Informasi Publik di lingkungan PT Pelabuhan Indonesia III (Persero). Segala bentuk berkaitan dengan
							peningkatan layanan berkaitan dengan Keterbukaan Informasi Publik dapat disampaikan kepada PPID Korporat PT Pelabuhan Indonesia III (Persero) melalui saluran berikut
						</p>

						<div className='font-bold text-md sm:text-xl'>PPID PT Pelabuhan Indonesia III (Persero</div>

						<div className='text-md sm:text-xl mt-8'>
							Jl. Perak Timur No. 610
							<br />
							Surabaya 60165 - Indonesia
							<br />
							Telpon : +62 31 3298631-37
							<br />
							Fax : +62 31 3295207
							<br />
							Email : info@pelindo.co.id
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
