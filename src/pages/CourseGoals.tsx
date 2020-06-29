import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent, IonFab, IonFabButton,
    IonHeader, IonIcon,
    IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar, isPlatform,IonAlert
} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import {useParams} from 'react-router-dom';
import {DUMMY_DATA} from "./Courses";
import {add, addOutline, create, pencil, trash} from "ionicons/icons";


const CourseGoals: React.FC = () => {

    const [startDeleting,setStartDeleting]=useState(false);
    const selectedCourseID = useParams<{id:string}>().id;
    const selectedCourse = DUMMY_DATA.find(course => course.id === selectedCourseID)

const startDeleteGoalHandler = (e:React.MouseEvent) => {
        setStartDeleting(true)
}
const deleteGoalHandler = () => {
        setStartDeleting(false)
        console.log('deleting...')
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
      <React.Fragment>
          <IonAlert
              isOpen={startDeleting}
              header="Are you sure?"
              message="Do you want to delete the goal? This cannot be undone"
              buttons={[
                  {
                      text:'No',
                      role:'cancel',
                      handler: () => {
                          setStartDeleting(false)
                      }
                  },
                  {
                      text:'Yes',
                      role:'delete',
                      handler: () => {
                          deleteGoalHandler()
                      }
                  }
              ]}
          />
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
                                      <IonItemOption onClick={startDeleteGoalHandler} color="danger">
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
      </React.Fragment>
  );
};

export default CourseGoals;
