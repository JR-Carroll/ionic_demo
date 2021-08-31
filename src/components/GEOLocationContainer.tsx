import React, { useEffect, useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';
// import './ExploreContainer.css';

// interface ContainerProps {
//   name: string;
// }

// const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
//   return (
//     <div className="container">
//       <strong>{name}</strong>
//       <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
//     </div>
//   );
// };
interface Props {
    render: boolean
}

function GEOLocationContainer<Props>( render: Props ) {
    const [coords, setCoords] = useState<Array<number>>([]); // [long, lat]
    const [lastRet, setLastRet] = useState<Date>();
    const retrievingMessage = "Retrieving...";

    useEffect(() => {
        getGEOLocation();
    }, []);

    async function getGEOLocation() {
        var coordinates = await Geolocation.getCurrentPosition().then(data => {
            var _coords = [data.coords.longitude, data.coords.latitude];

            // Leaving geo{} in console.log so the customer can see the object.
            console.log("My coords...", data);

            // Set React States so it properly shows.
            setLastRet(new Date(data.timestamp))
            setCoords(_coords);
        });
        return coordinates
    }

    return (
        <div>
            <p>long: {coords.length != 0 ? coords[0] : retrievingMessage}</p>
            <p>lat: {coords.length != 0 ? coords[1] : retrievingMessage}</p>
            <p><i>Last Retrieved:</i> {lastRet?.toLocaleString()}</p>
        </div>
    )
}

export default GEOLocationContainer;
