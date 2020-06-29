import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent, IonFab, IonFabButton,
    IonHeader, IonIcon,
    IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar, isPlatform,IonAlert,IonToast,IonModal
} from '@ionic/react';
import React, {useState,useRef} from 'react';
import './Home.css';
import {useParams} from 'react-router-dom';
import {DUMMY_DATA} from "./Courses";
import {add, addOutline, create, pencil, trash} from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";
const CourseGoals: React.FC = () => {
    const [startDeleting,setStartDeleting]=useState(false);
    const [isEditing,setIsEditing]=useState(false);
    const [toastMessage,setToastMessage]=useState('');
    const selectedCourseID = useParams<{id:string}>().id;

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const selectedCourse = DUMMY_DATA.find(course => course.id === selectedCourseID)
    const [selectedGoal,setSelectedGoal]= useState<any>();

const startDeleteGoalHandler = (e:React.MouseEvent) => {
        setStartDeleting(true)
}
const deleteGoalHandler = () => {
        setStartDeleting(false)
        setToastMessage('Deleted Goal')
}
    const startEditGoalHandler = (goalID:string,event: React.MouseEvent) => {
        event.stopPropagation();
        let goal = selectedCourse?.goals.find(g => {
            return g.id == goalID;
        });

        slidingOptionsRef.current?.closeOpened();
        if(!goal) {
            return;
        }
        console.log(goal, 'goal')
        setIsEditing(true);
        setSelectedGoal(goal);

    }
    const cancelEditGoalHandler = () => {
        setIsEditing(false);
        setSelectedGoal(null);
    }

    const startAddGoalHandler = () => {
        setIsEditing(true);
        setSelectedGoal(null)
    }
  return (
      <React.Fragment>
          <EditModal show={isEditing} onCancel={cancelEditGoalHandler} editedGoal={selectedGoal}/>
          <IonToast isOpen={!!toastMessage} message={toastMessage} duration={2000} onDidDismiss={() => {
              setToastMessage('')
          }}/>
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
                              <EditableGoalItem
                                  key={goal.id}
                                  slidingRef={slidingOptionsRef}
                                  text={goal.text}
                                  onStartDelete={startDeleteGoalHandler}
                                  onStartEdit={startEditGoalHandler.bind(null,goal.id)}
                              />
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
