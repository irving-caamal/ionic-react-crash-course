import React, {Component} from 'react';
import {
    IonButton,
    IonCol,
    IonContent, IonDatetime,
    IonGrid,
    IonHeader,
    IonInput, IonItem, IonLabel,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const AddCourseModal : React.FC <{
    show:boolean;
    onCancel: ()=> void;
}> = props =>{
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>

                    <IonTitle>
                        Add Goal
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonGrid>
                  <IonRow >
                      <IonCol>
                          <IonItem>
                              <IonLabel position="floating">Course Title</IonLabel>
                              <IonInput type="text" />
                          </IonItem>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonItem>
                              <IonLabel >Enrollement Date</IonLabel>
                              <IonDatetime displayFormat="MM DD YY" min="2018-06-04"/>
                          </IonItem>
                      </IonCol>
                  </IonRow>
                  <IonRow >
                      <IonCol>
                         <IonButton color="dark" fill="clear" onClick={props.onCancel}>Cancel</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton color="secondary" expand="block">Save </IonButton>
                      </IonCol>
                  </IonRow>
              </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default AddCourseModal;