import React from 'react';
import Banner from 'components/Banner';

const InformasiPublikPage = () => {
	return (
		<>
			<Banner title='Maklumat' />
			<div className='container my-8 mx-auto'>
				<img src='https://e-ppid.pelindo.co.id/upload/maklumat.png' alt='maklumat' className='w-60 mx-auto' />
			</div>
		</>
	);
};

export default InformasiPublikPage;
