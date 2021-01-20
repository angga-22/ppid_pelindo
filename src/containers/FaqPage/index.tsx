import { FaqApi } from 'api';
import LoadingBar from 'components/LoadingBar';
import { useState, useEffect } from 'react';

const Index = () => {
	const [qa, setQa] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		FaqApi(($: any) => {
			let qa: any = [];

			//question......

			$('tbody > tr:nth-child(1), tr:nth-child(2), tr:nth-child(3), tr:nth-child(4), tr:nth-child(5), tr:nth-child(6) > td:nth-child(2)').each(function (i: any, element: any) {
				const datas = $(element).prepend().text().trim();

				const obj = { title: '' };
				obj['title'] = datas;
				qa.push(obj);
			});

			setQa(qa);
			setLoading(false);
		});
	}, []);

	//

	if (loading) {
		return <LoadingBar />
	} 

	return (
		<>
			<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
				<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>FAQ</h3>
			</div>

			<div className='container my-8 mx-auto'>
				<div className='px-2 sm:px-0'>
					<div className='border rounded-lg p-4 flex flex-col justify-between  my-4 border-gray-200 px-2 '>
						{qa.map((list: any) => (
							<div className='text-lg my-2 sm:my-0 p-4'>{list.title} </div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
