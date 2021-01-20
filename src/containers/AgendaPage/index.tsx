import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import Modal from 'components/Modal';
import LoadingBar from 'components/LoadingBar';

const AgendaPage = () => {
	const [data, setData] = useState<[]>([]);
	const [date, setDate] = useState({ startDate: '', endDate: '' });
	const [open, setOpen] = useState(false);
	const [detail, setDetail] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadData();
	}, [date]); // eslint-disable-line

	const loadData = async () => {
		try {
			const resp = await fetch(`https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/admin/agenda/json?bypass=1&start=${date.startDate}&end=${date.endDate}`);
			const data = await resp.json();
			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleGetData = (view: any) => {
		const startDate = new Date(view.start).toISOString().slice(0, 10);
		const endDate = new Date(view.end).toISOString().slice(0, 10);
		setDate({ startDate, endDate });
	};

	const getHeaderProps = () => ({
		left: 'prev,next,today',
		center: 'title',
		right: window.innerWidth < 765 ? '' : 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
	});

	const handleSelected = (setInfo: any) => {
		setOpen(true);
		setDetail(setInfo.event);
	};

	return (
		<>
			{loading ? (
				<LoadingBar />
			) : (
				<>
					<Modal open={open} data={detail} title='Agenda Detail' onClose={() => setOpen(false)} />

					<div className='flex items-center justify-between bg-blue-100 text-white p-6 lg:p-20'>
						<h3 className='text-lg lg:text-3xl w-1/ lg:w-1/3'>Agenda</h3>
					</div>
					<div className='container mx-auto py-8 flex'>
						<div className='w-full'>
							<FullCalendar
								headerToolbar={getHeaderProps()}
								plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
								initialView='dayGridMonth'
								weekends={false}
								events={data && data}
								datesSet={(view) => handleGetData(view)}
								dayMaxEventRows={true}
								eventClick={handleSelected}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default AgendaPage;
