import React from 'react';

interface ModalProps {
	title: string;
	open: boolean;
	data: any;
	onClose: any;
}

const Modal = ({ title, open, data, onClose }: ModalProps) => {
	if (!open) {
		return <></>;
	}

	return (
		<div className='fixed inset-0 overflow-auto z-50 bg-gray-100 bg-opacity-75 flex'>
			<div className='relative w-auto my-6 my-auto mx-auto max-w-3xl'>
				<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
					<div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
						<h3 className='text-3xl font-semibold'>{title}</h3>
						<button className='p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none' onClick={onClose}>
							<span className='h-6 w-6 text-2xl block outline-none focus:outline-none text-gray-900'>×</span>
						</button>
					</div>
					{/* Content */}
					<div className='relative p-8'>
						<div className='border-t-2 border-black p-4'>
							<div className='text-lg font-bold'>Tanggal Awal</div>
							{data.startStr}
						</div>
						<div className='border-t-2 border-black p-4'>
							<div className='text-lg font-bold'>Tanggal Akhir</div>
							{data.endStr}
						</div>
						<div className='border-t-2 border-black p-4'>
							<div className='text-lg font-bold'>Event</div>
							{data.title}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
