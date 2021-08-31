import React, { useEffect, useState } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import { Button, Loader, Message } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-bootstrap';


interface Props {
    // Not passing any props that we honor right now...
}


function GEOLocationContainer<Props>(props : Props ) {
    const [coords, setCoords] = useState<Array<number>>([]); // [long, lat]
    const [lastRet, setLastRet] = useState<Date>();
    const [showError, setShowError] = useState<boolean>(false);
    const errorMessage = "We're sorry, we couldn't get your coords. Did you enable location sharing?";

    useEffect(() => {
        setupGEOLocation()
        getGEOLocation();
    }, []);

    async function setupGEOLocation() {
        // Check permissions first...
        var permissionSet = await Geolocation.checkPermissions();

        // If permission is not given, then let's ask for permission!
        if (permissionSet.location != 'granted') {
            Geolocation.requestPermissions();
        }
    }

    async function getGEOLocation() {
        var coordinates = await Geolocation.getCurrentPosition().then(data => {
            var _coords = [data.coords.longitude, data.coords.latitude];
            
            // Leaving geo{} in console.log so the customer can see the object.
            console.log("My coords...", data);

            // Set React states so it properly shows/interacts with the user.
            setLastRet(new Date(data.timestamp))
            setCoords(_coords);
            setShowError(false);
        }).catch( err => {
            console.error(err); // Showing the error in console for good measure.
            setShowError(true);
        });
        return coordinates
    }

    function refreshGEOLocation() {
        setCoords([]);
        getGEOLocation();
    }

    function toggleErrorMessage() {
        setShowError(!showError);
    }

    return (
            <Container>
                <Row>
                    <Col>
                        <p><strong>long:</strong> {coords.length != 0 ? coords[0] :  <Loader active inline/>}</p>
                        <p><strong>lat:</strong> {coords.length != 0 ? coords[1] :  <Loader active inline/>}</p>
                        <p><i><strong>Last Retrieved:</strong></i> {lastRet?.toLocaleString()}</p>
                        <Button primary onClick={refreshGEOLocation}>Fetch Latest Coords</Button>
                        <Button color="red" onClick={toggleErrorMessage}>Create Error on Demand</Button>
                    </Col>
                </Row>

                <Row style={{visibility: showError ? "visible" : "hidden"}}>
                    <Col>
                        <Message negative>
                            <Message.Header>Ek! Something went wrong...</Message.Header>
                            <p>{errorMessage}</p>
                        </Message>
                    </Col>
                </Row>
                
            </Container>
        )
}

export default GEOLocationContainer;
