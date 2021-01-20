import React from 'react';

interface infoProps {
	id?: string;
	data: any;
	link: any;
}
const CardInformasi = (props: infoProps) => {
	const getPdf = (word: any) => {
		const n = word.split('.');
		return n[n.length - 1];
	};
	console.log(props);
	return (
		<div className='border rounded-lg p-4 flex justify-between items-center my-4 border-gray-200 px-2'>
			{typeof props.data.title !== 'undefined' && <div className='text-sm sm:text-base'>{props.data.title}</div>}

			{typeof props.link !== 'undefined' && (
				<a
					href={props.link.link}
					target='_blank'
					rel="noreferrer"
					className='text-sm sm:text-lg sm:w-40 w-36 rounded-lg transition duration-500 ease-in-out  bg-blue-200 hover:bg-blue-300 text-white flex justify-center items-center p-2'
				>
					{getPdf(props.link.link) === 'pdf' ? 'Download' : 'View'}
				</a>
			)}
		</div>
	);
};

export default CardInformasi;
