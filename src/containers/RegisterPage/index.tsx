import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Textarea from 'components/Form/Textarea';
import React from 'react';

const index = () => {
	const pemohon = [
		{
			value: 'Perorangan',
			name: 'Perorangan'
		},
		{
			value: 'Kelompok Orang',
			name: 'Kelompok Orang'
		},
		{
			value: 'Badan Hukum',
			name: 'Badan Hukum'
		}
	];

	const identitas = [
		{
			value: 'ktp',
			name: 'ktp'
		},
		{
			value: 'Pengesahan Badan dan Usaha',
			name: 'Pengesahan Badan dan Usaha'
		},
		{
			value: 'Surat Kuasa',
			name: 'Surat Kuasa'
		},
		{
			value: 'Badan Publik',
			name: 'Badan Publik'
		}
	];

	return (
		<>
			<div className='flex flex-col bg-blue-100 text-white p-6 lg:p-20'>
				<h3 className='text-4xl lg:text-5xl w-full '>Register</h3>
				<h1 className='text-sm lg:text-md mt-8'>
					Formulir ini digunakan untuk registrasi pemohon. Dengan mendaftar di Sistem Informasi PPID, pemohon mendapatkan kemudahan dalam mengajukan permohonan informasi maupun pengajuan
					keberatan secara online. Pemohon dinyatakan berhasil mendaftar apabila telah memenuhi semua kelengkapan yang dibutuhkan dan mendapatkan email komfirmasi dari pengelola Sistem
					Informasi PPID.
				</h1>
			</div>

			<div className='container my-8 mx-auto'>
				<div className='px-2 sm:px-0'>
					<form className='w-full sm:w-1/2 mx-auto'>
						<div className='my-2'>
							<Select label='Jenis Pemohon' options={pemohon} />
						</div>
						<div className='my-2'>
							<Select label='Jenis Identitas' options={identitas} />
						</div>
						<div className='my-2'>
							<Input label='Nomor Identitas' placeholder='tes' />
						</div>
						<div className='my-2'>
							<Input label='Nama Lengkap' />
						</div>
						<div className='my-2'>
							<Input label='NPWP' />
						</div>
						<div className='my-2'>
							<Input label='Email' type='Email' />
						</div>
						<div className='my-2'>
							<Input label='Pekerjaan' type='text' />
						</div>
						<div className='my-2'>
							<Textarea label='Alamat' rows={5} />
						</div>
						<div className='my-2'>
							<Input label='No. Telp' type='text' />
						</div>
						<div className='my-2'>
							<Input label='No. Faq' type='text' />
						</div>
						<div className='my-2'>
							<Input label='password' type='password' />
						</div>

						<div className='my-4 flex'>
							<div className='px-2 w-1/3'>
								<button className=' px-4 py-2 transform hover:scale-110 motion-reduce:transform-none bg-gray-200 text-white rounded  overflow-visible'>Cancel</button>
							</div>
							<div className='px-2 w-1/3'>
								<button className=' px-4 py-2 transform hover:scale-110 motion-reduce:transform-none bg-blue-100 text-white rounded  overflow-visible'>Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default index;
