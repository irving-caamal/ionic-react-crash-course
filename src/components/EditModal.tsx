import React, {Component} from 'react';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput, IonItem, IonLabel,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const EditModal : React.FC <{
    show:boolean;
    onCancel: ()=> void;
    editedGoal: {"id":string; "text":string} | null;
}> = props =>{
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        {props.editedGoal ? 'Edit' : 'Add'} Goal
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonGrid>
                 <IonRow>
                     <IonCol>
                         <IonItem>
                             <IonLabel position="floating">
                                 Your goal
                             </IonLabel>
                             <IonInput type="text" value={props.editedGoal?.text} />
                         </IonItem>
                     </IonCol>
                 </IonRow>
                  <IonRow className="ion-text-center">
                      <IonCol>
                          <IonButton fill="clear" color="dark" onClick={props.onCancel}>Cancel</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton color="secondary" expand="block" onClick={props.onCancel}>Save</IonButton>
                      </IonCol>
                  </IonRow>
              </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default EditModal;