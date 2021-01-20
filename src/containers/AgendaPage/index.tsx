import React from 'react';

const index = () => {
	return (
		<>
			<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
				<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>FAQ</h3>
			</div>
			<div className='container mx-auto'>
				<div className='w-full'>
					<iframe src='https://e-ppid.pelindo.co.id/home/agenda' className='w-full h-screen -top-24' />
				</div>
			</div>
		</>
	);
};

export default index;
