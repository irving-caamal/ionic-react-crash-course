import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent,
    IonHeader, IonIcon,
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
import {create, pencil} from "ionicons/icons";


const CourseGoals: React.FC = () => {

    const selectedCourseID = useParams<{id:string}>().id;
    const selectedCourse = DUMMY_DATA.find(course => course.id === selectedCourseID)

const deleteItemHandler = (e:React.MouseEvent) => {
    e.stopPropagation();
        console.log('deleted')
}
    const startEditGoalHandler = (e:React.MouseEvent) => {
        e.stopPropagation();
        console.log('edited')
    }
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
                      <IonItem key={goal.id} lines="full" button onClick={deleteItemHandler}>
                          <IonLabel>{goal.text}</IonLabel>
                          <IonButton slot="end" fill="clear" color="dark" onClick={startEditGoalHandler}>
                              <IonIcon slot="icon-only" icon={create} />
                          </IonButton>
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
