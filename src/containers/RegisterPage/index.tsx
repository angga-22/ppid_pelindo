import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Textarea from 'components/Form/Textarea';
import Banner from 'components/Banner';
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
			<Banner title='Register' />

			<div className='container my-8 mx-auto layout-background'>
				<div className='px-2 sm:px-0'>
					<h1 className='text-sm lg:text-1em mt-8 italic w-8/12 mx-auto mb-8'>
						Formulir ini digunakan untuk registrasi pemohon. Dengan mendaftar di Sistem Informasi PPID, pemohon mendapatkan kemudahan dalam mengajukan permohonan informasi maupun pengajuan
						keberatan secara online. Pemohon dinyatakan berhasil mendaftar apabila telah memenuhi semua kelengkapan yang dibutuhkan dan mendapatkan email komfirmasi dari pengelola Sistem
						Informasi PPID.
					</h1>
					<form className='w-full sm:w-1/2 mx-auto' action='https://e-ppid.pelindo.co.id/home/reg' method='POST' name='submit_form'>
						<div className='my-2'>
							<Select label='Jenis Pemohon' options={pemohon} name='jnspemohon' id='jnspemohon' />
						</div>
						<div className='my-2'>
							<Select label='Jenis Identitas' options={identitas} name='jnsidentitas' id='jnsidentitas' />
						</div>
						<div className='my-2'>
							<Input label='Nomor Identitas' placeholder='Nomor identitas' name='jnsidentitas' id='jnsidentitas' />
						</div>
						<div className='my-2'>
							<Input label='Nama Lengkap' name='nama' id='nama' />
						</div>
						<div className='my-2'>
							<Input label='NPWP' name='npwp' id='npwp' />
						</div>
						<div className='my-2'>
							<Input label='Email' type='Email' name='email' id='email' />
						</div>
						<div className='my-2'>
							<Input label='Pekerjaan' type='text' name='pekerjaan' id='pekerjaan' />
						</div>
						<div className='my-2'>
							<Textarea label='Alamat' rows={5} name='alamat' id='alamat' />
						</div>
						<div className='my-2'>
							<Input label='No. Telp' type='text' name='notelp' id='notelp' />
						</div>
						<div className='my-2'>
							<Input label='No. Fax' type='text' name='nofax' id='nofax' />
						</div>
						<div className='my-2'>
							<Input label='password' type='password' name='passw' id='passw' />
						</div>

						<div className='my-4 flex'>
							<div className='px-2'>
								<button type='submit' className=' px-4 py-2 transform hover:scale-110 motion-reduce:transform-none bg-gray-200 text-white rounded  overflow-visible'>
									Cancel
								</button>
							</div>
							<div className='px-2'>
								<button type='submit' className=' px-4 py-2 transform hover:scale-110 motion-reduce:transform-none bg-blue-100 text-white rounded  overflow-visible'>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default index;
