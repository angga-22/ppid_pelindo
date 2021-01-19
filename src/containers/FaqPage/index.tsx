import React from 'react';

const index = () => {
	const faq = [
		{
			question: 'Siapa yang dapat mengajukan permohonan informasi publik?',
			answer: 'Setiap warga negara dan/atau badan hukum Indonesia sebagaimana diatur dalam Undang-Undang Republik Indonesia Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.'
		},
		{
			question: 'Bagaimana cara mengajukan permohonan informasi?',
			answer:
				'Pemohon informasi dapat datang langsung ke kantor Pelindo III untuk melakukan pengisian formulir permintaan informasi dan/atau melakukan permohonan informasi melalui aplikasi e-ppid dengan melakukan registrasi terlebih dahulu. Pemohon informasi wajib memenuhi persyaratan yang ditentukan.'
		},
		{
			question: ' Apakah persyaratan pengajuan permohonan informasi dan pengajuan keberatan atas tanggapan PPID?',
			answer:
				'Melampirkan Kartu Tanda Penduduk untuk pemohon dari individu atau Akta Pendirian Badan Hukum untuk pemohon dari badan hukum serta formulir permohonan informasi dan jawaban PPID untuk pengajuan keberatan'
		}
	];

	return (
		<>
			<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
				<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>FAQ</h3>
			</div>

			<div className='container my-8 mx-auto'>
				<div className='px-2 sm:px-0'>
					{faq.map((list) => (
						<div className='border rounded-lg p-4 flex flex-col justify-between  my-4 border-gray-200 px-2 '>
							<div className='text-lg my-2 sm:my-0'>Q: {list.question}</div>
							<div className='text-lg my-2 sm:my-0'>A : {list.answer}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default index;
