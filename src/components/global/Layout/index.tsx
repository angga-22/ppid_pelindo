import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
const index = ({ children }: any) => {
	return (
		<>
			<Header />
			<main className='min-h-screen relative'>
				<div className='sm:pt-28 pt-20'>{children}</div>
				<Footer />
			</main>
		</>
	);
};

export default index;
