import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import GEOLocationContainer from '../components/GEOLocationContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const pageName = "Location";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GEOLocationContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
