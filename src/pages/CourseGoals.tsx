import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem, IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import './Home.css';
import {useParams} from 'react-router-dom';
import {DUMMY_DATA} from "./Courses";


const CourseGoals: React.FC = () => {

    const selectedCourseID = useParams<{id:string}>().id;
    const selectedCourse = DUMMY_DATA.find(course => course.id === selectedCourseID)


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton  defaultHref="/"/>
            </IonButtons>
          <IonTitle>{selectedCourse ? `${selectedCourse?.title} goals` : 'No course found here' } </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {selectedCourse &&
          <IonList>
              {selectedCourse?.goals.map(goal => {
                  return (
                      <IonItem key={goal.id} lines="full">
                          <IonLabel>{goal.text}</IonLabel>
                      </IonItem>
                  )
              })}
          </IonList>
          }
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
