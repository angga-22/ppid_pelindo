import { Bar } from 'react-chartjs-2';
import bgChart from 'assets/img/bgChart.jpg';

const index = () => {
	const data = {
		labels: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
		datasets: [
			{
				data: [212, 319, 453, 605, 442, 223, 312, 445, 212, 543],
				backgroundColor: [
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)',
					'rgba(54, 162, 235, .6)'
				],
				borderColor: ['rgba(54, 162, 235, 1)'],
				borderWidth: 1
			}
		]
	};

	return (
		<div className=''>
			<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
				<h3 className='text-lg lg:text-3xl w-36 lg:w-72'>Jumlah Pemohon Informasi</h3>
				<h1 className='text-xl lg:text-6xl'>Berkala</h1>
			</div>

			<div className='text-center text-blue-100 my-12 lg:my-16 mx-2 lg:mx-0'>
				<h4 className='text-xl lg:text-2xl mb-3'>Statistik Permohonan Informasi</h4>
				<h3 className='uppercase text-xl lg:text-3xl'>PT Pelabuhan Indonesia III (Persero)</h3>
			</div>
			<div className='relative mx-auto z-25'>
				<img src={bgChart} className='absolute opacity-5 -z-10 top-0 right-0' alt='' />
				<div className='mx-6 lg:mx-32 h-3/4'>
					<Bar
						data={data}
						width={100}
						height={40}
						options={{
							maintainAspectRatio: true,
							responsive: true,
							legend: {
								display: false
							}
						}}
					/>
					<p className='text-sm mt-16 mb-32 text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi dolorum culpa laboriosam natus sequi praesentium ea velit recusandae doloribus expedita aliquam tenetur
						placeat at accusamus. Nulla itaque sequi, alias nostrum molestiae sapiente eius aut earum, quo maxime reiciendis illum quos sed excepturi, est dolorem ea eos accusantium eaque
						tenetur. A corporis eveniet commodi atque.
					</p>
				</div>
				{/* <div className="">
        
        </div> */}
			</div>
		</div>
	);
};

export default index;
