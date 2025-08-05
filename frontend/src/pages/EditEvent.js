import { useParams, Link } from "react-router-dom";

function EventEditPage() {
    const params= useParams();

    return (
        <>
            <h1>Edit Event Details!</h1>
            <p>{params.eventId}</p>
            <p><Link to='..' relative="path">Back</Link></p>
        </>
    )
};

export default EventEditPage;