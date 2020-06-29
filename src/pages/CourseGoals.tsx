import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent, IonFab, IonFabButton,
    IonHeader, IonIcon,
    IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar, isPlatform
} from '@ionic/react';
import React from 'react';
import './Home.css';
import {useParams} from 'react-router-dom';
import {DUMMY_DATA} from "./Courses";
import {add, addOutline, create, pencil, trash} from "ionicons/icons";


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

    const startAddGoalHandler = (e:React.MouseEvent) => {
        e.stopPropagation();
        console.log('add')
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton  defaultHref="/courses/list"/>
            </IonButtons>
          <IonTitle>{selectedCourse ? `${selectedCourse?.title} goals` : 'No course found here' } </IonTitle>
            {!isPlatform('android') && (
            <IonButtons slot="end">
                <IonButton onClick={startAddGoalHandler}>
                    <IonIcon icon={addOutline} slot="icon-only"/>
                </IonButton>
            </IonButtons>
            )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {selectedCourse &&
          <IonList>
              {selectedCourse?.goals.map(goal => {
                  return (
                      <IonItemSliding key={goal.id}>
                          <IonItemOptions side="start" >
                              <IonItemOption onClick={deleteItemHandler} color="danger">
                                  <IonIcon icon={trash} slot="icon-only"/>
                              </IonItemOption>
                          </IonItemOptions>
                          <IonItem  lines="full">
                              <IonLabel>{goal.text}</IonLabel>
                          </IonItem>
                          <IonItemOptions side="end">
                              <IonItemOption onClick={startEditGoalHandler}>
                                  <IonIcon icon={create} slot="icon-only"/>
                              </IonItemOption>
                          </IonItemOptions>
                      </IonItemSliding>
                  )
              })}
          </IonList>
          }
          {isPlatform('android') && (
              <IonFab horizontal="end" vertical="bottom" slot="fixed">
                  <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                      <IonIcon icon={addOutline} />
                  </IonFabButton>
              </IonFab>
          )
          }
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
