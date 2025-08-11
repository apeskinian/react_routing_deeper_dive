import { Link, useRouteLoaderData, useOutletContext } from "react-router-dom";

import EventForm from '../components/EventForm';

function EventEditPage() {
    // const data = useOutletContext();
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (
        <>
            <EventForm event={event}/>
            <p><Link to='..' relative="path">Back</Link></p>
        </>
    )
};

export default EventEditPage;