import { FaqApi } from 'api';
import LoadingBar from 'components/LoadingBar';
import Banner from 'components/Banner';
import { useState, useEffect } from 'react';

const Index = () => {
	const [qa, setQa] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		FaqApi(($: any) => {
			let answer: any = [];
			let question: any = [];

			$('tbody > tr:nth-child(even) > td:nth-child(even)').each(function (i: any, element: any) {
				let answers = $(element).prepend().text().trim();
				answer.push({ answer: answers });
			});
			$('tbody > tr:nth-child(odd) > td:nth-child(even)').each(function (i: any, element: any) {
				let questions = $(element).prepend().text().trim();
				question.push({ question: questions });
			});

			let data = answer.map((item: any, i: number) => ({ ...item, ...question[i] }));
			// let data = answer.map((item: any, i: number) => Object.assign({}, item, question[i]));

			setQa(data);
			setLoading(false);
		});
	}, []);

	//

	if (loading) {
		return <LoadingBar />;
	}

	return (
		<>
			<Banner title='FAQ' />

			<div className='content-wrapper layout-background '>
				<div className='px-2 sm:px-0'>
					{qa.map((list: any, i: number) => (
						<div key={i} className='border rounded-lg p-4 flex flex-col justify-between  my-4 border-gray-200 px-2 '>
							<div className='text-lg my-2 sm:my-0 p-4'>{list.question} </div>
							<div className='text-lg my-2 sm:my-0 p-4'>{list.answer} </div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Index;
