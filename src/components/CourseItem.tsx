import React, {useState} from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";

const CourseItem:React.FC<{
title: string;
enrolmentDate: Date;
id:string;
}> = props => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    {props.title}
                </IonCardTitle>
                <IonCardSubtitle>
                    Enrolled on {props.enrolmentDate.toLocaleDateString('es-MX', {
                    year:'numeric',
                    month:'2-digit',
                    day:'2-digit'
                })}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-center">
                <div className="ion-text-right">
                    <IonButton color="secondary" fill="clear" routerLink={`/courses/${props.id}`}>
                        See Details
                    </IonButton>
                </div>

            </IonCardContent>
        </IonCard>
    );
}

export default CourseItem;