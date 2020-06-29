import {
    IonButton, IonButtons, IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
    IonContent, IonFab, IonFabButton,
    IonGrid,
    IonHeader, IonIcon,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar, isPlatform
} from '@ionic/react';
import React ,{useState} from 'react';
import {useHistory} from "react-router-dom";

import './Home.css';



import AddCourseModal from "../components/AddCourseModal";
import {addOutline} from "ionicons/icons";

export const DUMMY_DATA = [
    {
        id: 'c1', title: 'Ionic = React Course',
        enrolled : new Date('03/22/2019'),
        goals:[
            {
                id: 'c1g1',
                text: 'Finish the course'
            },
            {
                id: 'c1g2',
                text: 'Learn a lot of the course'
            },
        ]
    },
    {
        id: 'c2', title: 'Ionic = Angular Course',
        enrolled : new Date('07/22/2019'),
        goals:[
            {
                id: 'c2g1',
                text: 'Finish the course'
            },
            {
                id: 'c2g2',
                text: 'Learn a lot of the course'
            },
        ]
    },
    {
        id: 'c3', title: 'Ionic = Vue Course',
        enrolled : new Date('09/22/2019'),
        goals:[
            {
                id: 'c3g1',
                text: 'Finish the course'
            },
            {
                id: 'c3g2',
                text: 'Learn a lot of the course'
            },
        ]
    },
];
const Courses: React.FC = () => {
    const [isAdding,setIsAdding]=useState(false);
    /**
     * */
    const history = useHistory();

    const changePageHandler = () => {
        history.push('/course-goals');
    };

    const startAddCourseHandler = () => {
        setIsAdding(true);
    }
    const cancelAddCourseHandler = () => {
        setIsAdding(false);
    }

  return (
    <React.Fragment>
        <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler}/>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                    {!isPlatform('android') && (
                        <IonButtons slot="end">
                            <IonButton onClick={startAddCourseHandler}>
                                <IonIcon icon={addOutline} slot="icon-only"/>
                            </IonButton>
                        </IonButtons>
                    )}
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
                                                    Enrolled on {course.enrolled.toLocaleDateString('es-MX', {
                                                    year:'numeric',
                                                    month:'2-digit',
                                                    day:'2-digit'
                                                })}
                                                </IonCardSubtitle>
                                            </IonCardHeader>
                                            <IonCardContent className="ion-text-center">
                                                <div className="ion-text-right">
                                                    <IonButton color="secondary" fill="clear" routerLink={`/courses/${course.id}`}>
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
            {isPlatform('android') && (
                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>
            )
            }
        </IonPage>
    </React.Fragment>
  );
};

export default Courses;
