import React from 'react';

interface TextareaProps {
	label: string;
}

const Textarea = ({ label, ...props }: TextareaProps & React.HTMLProps<HTMLTextAreaElement>) => {
	return (
		<div className='flex flex-col'>
			<label className='leading-loose'>{label}</label>
			<textarea {...props} className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'></textarea>
		</div>
	);
};

export default Textarea;
