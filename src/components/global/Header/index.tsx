import { Children, useState } from 'react';

import { NavLink } from 'react-router-dom';

import logoPelindo from '../../../assets/img/logo-pelindo.png';

import * as ROUTES from 'containers/App/constants';

const Header = () => {
	const menu = [
		{
			name: 'Beranda',
			route: ROUTES.HOME_PAGE,
			children: []
		},
		{
			name: 'Statistik',
			route: ROUTES.STATISTIK_PAGE,
			children: [
				{
					name: 'a',
					route: '/tes'
				},
				{
					name: 'b',
					route: '/tes'
				}
			]
		},
		{
			name: 'Profile',
			route: ROUTES.PROFIL_PAGE,
			children: []
		},
		{
			name: 'Regulasi',
			route: ROUTES.REGULASI_PAGE,
			children: []
		},
		{
			name: 'Maklumat',
			route: ROUTES.MAKLUMAT_PAGE,
			children: []
		},
		{
			name: 'Layanan Publik',
			route: '#',
			children: [
				{
					name: 'Prosedur Permohonan',
					route: ROUTES.PROSEDUR_PAGE
				}
			]
		},
		{
			name: 'Informasi Publik',
			route: ROUTES.INFORMASI_PAGE,
			children: [
				{
					name: 'tes',
					route: ROUTES.INFORMASI_PAGE
				},
				{
					name: 'tes1',
					route: '/tes2'
				}
			]
		}
	];
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<div className='fixed w-full shadow-md z-40 bg-white'>
			<nav className='flex items-center justify-between flex-wrap  mx-auto container p-6 '>
				<div className='flex mr-6 w-1/4'>
					<NavLink to='/' className='text-lg'>
						<img src={logoPelindo} alt='pelindo' className='w-none sm:w-2/4' />
					</NavLink>
				</div>
				<div className='block lg:hidden'>
					<button className='flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white' onClick={toggleMenu}>
						<svg className='h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>

				<div className={`w-full  lg:flex lg:items-center lg:w-auto ${open ? 'block sm:none' : 'hidden sm:block '} transition duration-500 ease-in-out transform`}>
					<div className='text-sm sm:flex sm:w-full justify-end'>
						{menu.map((list) => (
							<NavLink
								to={list.children.length > 0 ? '#' : list.route}
								className='group relative text-blue-100 block sm:inline-block text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-white hover:bg-blue-100 transform'
							>
								{list.name}

								{list.children.length > 0 && (
									<div className='dropdown-menu absolute hidden text-gray-700 pt-1 group-hover:block w-full left-0 shadow-lg mt-1'>
										{list.children.map((child) => {
											return (
												<NavLink
													to={child.route}
													className='text-gray-700 pt-1 group-hover:block hover:bg-blue-300 bg-blue-100 text-white text-right p-4 text-lg transition duration-500 ease-in-out  hover:text-red-600 transform'
												>
													{child.name}
												</NavLink>
											);
										})}
									</div>
								)}
							</NavLink>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
