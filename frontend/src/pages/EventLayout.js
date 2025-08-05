import { Outlet } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";
import EventsNavigation from '../components/EventsNavigation';

function EventLayout() {
    return (
        <>
            {/* <MainNavigation /> */}
            <EventsNavigation />
            <Outlet />
        </>
    )
};

export default EventLayout;