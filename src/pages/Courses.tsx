import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import {useHistory} from "react-router-dom";

import './Home.css';

const Courses: React.FC = () => {
    /**
     * */
    const history = useHistory();

    const changePageHandler = () => {
        history.push('/course-goals');
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <div>
               {/* <IonButton routerLink="/course-goals">
                    To Course Goals
                </IonButton>*/}
                 <IonButton onClick={changePageHandler}>
                    To Course Goals
                </IonButton>
            </div>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
