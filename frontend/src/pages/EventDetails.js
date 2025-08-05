import { useParams, Link } from "react-router-dom";

function EventDetailPage() {
    const params= useParams();

    return (
        <>
            <h1>Event Details!</h1>
            <p>{params.eventId}</p>
            <p><Link to='..' relative="path">Back</Link></p>
            <p><Link to='edit'>Edit Event</Link></p>
        </>
    )
};

export default EventDetailPage;