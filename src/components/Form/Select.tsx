interface SelectProps {
	label: string;
	options: Array<{ value: string; name: string }>;
}

const Select = ({ label, options, ...props }: SelectProps & React.HTMLProps<HTMLSelectElement>) => {
	return (
		<div className='flex flex-col'>
			<label className='leading-loose'>{label}</label>
			<select {...props} className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'>
				{options && options.map((list: any) => <option value={list.value}>{list.name}</option>)}
			</select>
		</div>
	);
};

export default Select;
