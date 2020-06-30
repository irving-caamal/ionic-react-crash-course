import React, {useContext} from 'react'
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonItem, IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle, IonToggle,
    IonToolbar
} from "@ionic/react";
import CoursesContext from '../data/coursesContext';

const Filter: React.FC = () => {
    const coursesCtx = useContext(CoursesContext);
    const courseFilterChangeHandler = (event:CustomEvent) => {

        coursesCtx.changeCourseFilter(event.detail.value, event.detail.checked);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Filter
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {coursesCtx.courses.map(course=> {
                        return (
                            <IonItem key={course.id}>
                                <IonLabel>
                                    {course.title}
                                </IonLabel>
                                <IonToggle
                                    value={course.id}
                                    onIonChange={courseFilterChangeHandler}
                                    checked={course.included}
                                />
                            </IonItem>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Filter;