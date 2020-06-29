import {
    IonButton, IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import {useHistory} from "react-router-dom";

import './Home.css';
export const DUMMY_DATA = [
    {
      id: 'c1', title: 'Ionic = React Course'
    },
    {
        id: 'c2', title: 'Ionic = Angular Course'
    },
    {
        id: 'c3', title: 'Ionic = Vue Course'
    },
];
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
           <IonGrid>
               {DUMMY_DATA.map(course => {
                   return (
                       <IonRow key={course.id}>
                           <IonCol size-md="4" offset-md="4">
                               <IonCard>
                                   <IonCardHeader>
                                       <IonCardTitle>
                                           {course.title}
                                       </IonCardTitle>
                                       <IonCardSubtitle>
                                           {course.title}
                                       </IonCardSubtitle>
                                   </IonCardHeader>
                                   <IonCardContent className="ion-text-center">
                                       <div className="ion-text-right">
                                           <IonButton color="secondary" fill="clear" routerLink={`/courses/${course.id}/goals`}>
                                               See Details
                                           </IonButton>
                                       </div>

                                   </IonCardContent>
                               </IonCard>
                           </IonCol>
                       </IonRow>
                   )
               })}
           </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
