import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React from 'react';

const Tab2: React.FC = () => {
  const pageName = "Schedule";

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

export default Tab2;
