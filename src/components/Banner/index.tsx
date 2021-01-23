import React from 'react';
import './style.css';

interface bannerProps {
	title: String;
}

const index = ({ title }: bannerProps) => {
	return (
		<div className='bg-banner flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20 h-full sm:h-64'>
			<h1 className='text-xl lg:text-6xl'>{title}</h1>
		</div>
	);
};

export default index;
