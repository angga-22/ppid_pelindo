interface InputProps {
	label: string;
}

const Input = ({ label, ...props }: InputProps & React.HTMLProps<HTMLInputElement>) => {
	return (
		<div className='flex flex-col'>
			<label className='leading-loose'>{label}</label>
			<input {...props} className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600' />
		</div>
	);
};

export default Input;
