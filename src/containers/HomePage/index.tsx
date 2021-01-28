import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { HomepageApi } from '../../api';
import Loading from 'components/LoadingBar';
import './index.css';

const Index = () => {
	const [data, setData] = useState([]);
	const [data1, setData1] = useState([]);
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState('0');

	let jumlahPemohon: any = '12345';

	useEffect(() => {
		HomepageApi(($: any) => {
			let data: any = [];
			let data1: any = [];
			$('div[class="col-md-8"] > p > strong').each(function (i: any, element: any) {
				let datas = $(element).prepend().text();
				data.push(datas);
			});

			$('div[class="col-md-8"] > p:nth-child(3)').each(function (i: any, element: any) {
				let datas = $(element).prepend().text();
				data1.push(datas);
			});
			setData(data);
			setData1(data1);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		let start = 0;

		const end = parseInt(jumlahPemohon.substring(0, 3));

		if (start === end) return;

		let duration = 7;
		let incrementTime = (duration / end) * 1000;

		let timer = setInterval(() => {
			start += 1;
			setCount(String(start) + jumlahPemohon.substring(3));
			if (start === end) clearInterval(timer);
		}, incrementTime);
	}, [jumlahPemohon]);

	let icons = [
		{
			url: '/informasi-publik',
			img: 'home-icon-1.png',
			title: 'Informasi Berkala'
		},
		{
			url: '/informasi-umum',
			img: 'home-icon-2.png',
			title: 'Informasi Serta Merta'
		},
		{
			url: '/informasi-wajib',
			img: 'home-icon-3.png',
			title: 'Informasi Setiap Saat'
		}
	];

	let news = [
		{
			url: '/',
			img: 'news1.jpg',
			title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil minus obcaecati, maiores quaerat sint?'
		},
		{
			url: '/',
			img: 'news2.jpg',
			title: 'vehicle beside concrete building during daytime'
		},
		{
			url: '/',
			img: 'news3.jpg',
			title: 'red and white flag under blue sky during daytime'
		}
	];

	const renderNews = () =>
		news.map((n) => (
			<div className='overflow-hidden m-auto h-auto w-auto relative text-left pb-6'>
				<img alt='' src={require(`../../assets/img/${n.img}`).default} className='max-h-48 w-full object-cover' />
				<div className='h-36 flex flex-col justify-between w-full px-4 relative'>
					<h6 className='text-xl text-gray-900 mt-2'>
						{n.title.substring(0, 75)}
						{n.title.length > 75 && '...'}
					</h6>
					<div className=''>
						<NavLink to={n.url} className='text-base text-blue-100 hover:text-blue-300'>
							Selengkapnya
						</NavLink>
					</div>
				</div>
			</div>
		));

	const renderCarousel = () => (
		<div className='relative h-full'>
			<img className='object-cover h-full' alt='images' src={require('../../assets/img/back-carousel.png').default} />
			<div className='flex flex-col items-center justify-center absolute bottom-0 top-0 right-0 left-0 text-white'>
				<h2 className='text-xl lg:text-3xl'>Dapatkan Informasi Seputar Pelindo III</h2>
				<h1 className='text-3xl lg:text-6xl my-6'>Lebih Mudah</h1>
				<button className='uppercase font-semibold transform hover:scale-110 transition-transform delay-100 text-xs text-blue-100 bg-white px-8 py-3 rounded tracking-wider'>
					Selengkapnya
				</button>
			</div>
		</div>
	);

	const renderCarousel2 = () => (
		<div className='relative text-left h-full pb-6'>
			<img src={require('../../assets/img/back-carousel-2.png').default} alt='' className='absolute h-full w-full object-cover' />
			<div className='container mx-auto relative'>
				<div className='flex ml-12'>
					<div className='w-full xl:w-1/2 h-full hidden lg:block'>
						<img src={require('../../assets/img/ceo.png').default} alt='images' />
					</div>
					<div className='flex flex-col mt-12'>
						<h6 className='text-base lg:text-2xl font-semibold text-white mr-8 lg:mr-40'>
							"Keterbukaan informasi merupakan bagian dari komitmen perusahaan terkait dengan good corporate governance (GCG) dan kami merupakan BUMN yang taat pada aturan itu"
						</h6>
						<p className='text-blue-300 mt-8'>U Saefudin Noer</p>
						<p className='text-gray-100 mt-px'>President Director/CEO</p>
					</div>
				</div>
			</div>
		</div>
	);

	const renderInformasi = () =>
		icons.map((icon) => (
			<div className='flex flex-col items-center space-y-5'>
				<img src={require(`../../assets/img/${icon.img}`).default} alt='images' width='130' />
				<NavLink to={icon.url} className='hover:text-blue-200'>
					{icon.title}
				</NavLink>
			</div>
		));

	return (
		<div className='mx-auto text-center mb-12'>
			{loading ? (
				<Loading />
			) : (
				<div>
					<div id='carousel'>
						<Carousel
							className='carousel1'
							showArrows={true}
							showThumbs={false}
							infiniteLoop
							autoPlay={true}
							interval={5000}
							transitionTime={150}
							showStatus={false}
							emulateTouch={true}
							swipeable={true}
							stopOnHover={true}
						>
							{Array(3).fill(renderCarousel())}
						</Carousel>
					</div>

					<div className='mt-10 lg:px-0'>
						<div>
							<div className='px-12 mb-12'>
								<h4 className='text-2xl font-bold'>{data}</h4>
								<p className='mt-4 lg:w-3/4 mx-auto'>{data1}</p>
							</div>

							<div className='flex flex-col lg:flex-row space-y-7 justify-evenly mt-8 pb-12 text-sm font-bold mx-32 lg:space-y-0'>{renderInformasi()}</div>

							<div className='pt-16 pb-12 bg-gray-900 bg-opacity-10 font-bold'>
								<h5 className='text-lg text-gray-900 text-opacity-90 tracking-widest' style={{ padding: '15px' }}>
									Jumlah Pemohon Informasi
								</h5>
								<h1 className='text-7xl my-4 text-blue-200 tracking-widest'>{count}</h1>
								<NavLink to='/statistik'>
									<button className='uppercase font-semibold transform hover:scale-110 transition-transform delay-100 text-xs text-white bg-blue-100 px-8 py-3 rounded'>
										Selengkapnya
									</button>
								</NavLink>
							</div>

							<div id='carousel2'>
								<Carousel
									className='carousel2'
									showArrows={true}
									showThumbs={false}
									infiniteLoop
									autoPlay={true}
									interval={5000}
									transitionTime={150}
									showStatus={false}
									emulateTouch={true}
									swipeable={true}
									stopOnHover={true}
								>
									{Array(3).fill(renderCarousel2())}
								</Carousel>
							</div>

							<div>
								<h2 className='text-blue-200 text-4.5xl font-bold my-12'>Berita Terbaru</h2>
								<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mx-6 lg:mx-20'>{renderNews()}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Index;
