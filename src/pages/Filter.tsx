import React from 'react'
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
import {DUMMY_DATA} from './Courses';
const Filter: React.FC = () => {
    const courseFilterChangeHandler = (event:CustomEvent) => {
        console.log(event)
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
                    {DUMMY_DATA.map(course=> {
                        return (
                            <IonItem key={course.id}>
                                <IonLabel>
                                    {course.title}
                                </IonLabel>
                                <IonToggle value={course.id} onIonChange={courseFilterChangeHandler}></IonToggle>
                            </IonItem>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Filter;