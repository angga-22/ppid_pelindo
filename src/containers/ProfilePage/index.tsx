import { useState, useEffect } from 'react';
import { ProfilepageApi } from '../../api';
import Loading from 'components/LoadingBar';

const Index = () => {
	const [paragraf1, setParagraf1] = useState([]);
	const [paragraf2, setParagraf2] = useState([]);
	const [nameCompany, setNameCompany] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		ProfilepageApi(($: any) => {
			let paragraf1: any = [];
			let paragraf2: any = [];
			let nameCompany: any = [];
			$('div[class="col-md-10"] > p:nth-child(2)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text();
				paragraf1.push(datas);
			});

			$('div[class="col-md-10"] > p:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text();
				paragraf2.push(datas);
			});

			$('div[class="col-md-10"] > p:nth-child(4)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text();
				nameCompany.push(datas);
			});

			setParagraf1(paragraf1);
			setParagraf2(paragraf2);
			setNameCompany(nameCompany);
			setLoading(false);
		});
	}, []);

	return (
		<div className='profile'>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div className='profile-banner w-full h-60'>
						<div className='block sm:hidden h-full d-flex items-center'>
							<div className='text-5xl text-white h-full px-4 flex items-center'>Profile</div>
						</div>
					</div>
					<div className='mt-16 container mx-auto'>
						<div className='sm:w-8/12 mx-auto w-10/12'>
							<img src={require('../../assets/img/logo-pelindo.png').default} alt='asset' className='sm:w-1/4 w-3/4' />

							<div className='mt-8 mb-52'>
								<p className='text-md sm:text-xl my-8 leading-loose'>{paragraf1}</p>
								<p className='text-md sm:text-xl my-8 leading-loose'>{paragraf2}</p>

								<div className='font-bold text-md sm:text-xl'>{nameCompany}</div>

								<div className='text-md sm:text-xl mt-8'>
									Jl. Perak Timur No. 610
									<br />
									Surabaya 60165 - Indonesia
									<br />
									Telpon : +62 31 3298631-37
									<br />
									Fax : +62 31 3295207
									<br />
									Email : info@pelindo.co.id
									<br />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Index;
