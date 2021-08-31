import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from 'react';

const Tab3: React.FC = () => {
  const pageName = "Settings";

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
        <ExploreContainer name={`${pageName} Page`} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
