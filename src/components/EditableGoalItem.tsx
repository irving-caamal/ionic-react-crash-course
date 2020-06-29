import React from 'react';
import {IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";
import {create, trash} from "ionicons/icons";

const EditableGoalItem: React.FC<{
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onStartDelete: (event:React.MouseEvent)  => void;
    onStartEdit: (event:React.MouseEvent) =>void;
    text:string
}> = props => {
    return (
        <IonItemSliding ref={props.slidingRef}>
            <IonItemOptions side="start" >
                <IonItemOption onClick={props.onStartDelete} color="danger">
                    <IonIcon icon={trash} slot="icon-only"/>
                </IonItemOption>
            </IonItemOptions>
            <IonItem  lines="full">
                <IonLabel>{props.text}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
                <IonItemOption onClick={props.onStartEdit}>
                    <IonIcon icon={create} slot="icon-only"/>
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
}
export default EditableGoalItem;