import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<main className='min-h-screen relative'>
				<div className='pt-20'>{children}</div>
				<Footer />
			</main>
		</>
	);
};

Layout.title = (props: any) => <>{props.children}</>;
Layout.content = (props: any) => <div className='container mx-auto px-0 sm:px-8 py-0 sm:py-2'>{props.children}</div>;

export default Layout;
