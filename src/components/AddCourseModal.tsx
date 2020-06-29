import React, {useRef,useState} from 'react';
import {
    IonButton,
    IonCol,
    IonContent, IonDatetime,
    IonGrid,
    IonHeader,
    IonInput, IonItem, IonLabel,
    IonModal,
    IonRow, IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {save} from "ionicons/icons";

const AddCourseModal : React.FC <{
    show:boolean;
    onCancel: ()=> void;
}> = props =>{
    const [error,setError] = useState('');
    const titleRef = useRef<HTMLIonInputElement>(null);
    const dateRef = useRef<HTMLIonDatetimeElement>(null);


    const saveHandler = () => {
        const enteredTitle = titleRef.current?.value;
        const selectedDate = dateRef.current?.value;

        if(
            !enteredTitle ||
            !selectedDate ||
            enteredTitle.toString().trim().length === 0 ||
            selectedDate.trim().length === 0
        )
        {
            setError('Please enter a valid title and selected a valid date');
            return;
        }

        setError('')
    }

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
                              <IonInput type="text" ref={titleRef} />
                          </IonItem>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonItem>
                              <IonLabel >Enrollement Date</IonLabel>
                              <IonDatetime displayFormat="MM DD YY" min="2018-06-04" ref={dateRef}/>
                          </IonItem>
                      </IonCol>
                  </IonRow>
                  {error && (
                      <IonRow className="ion-text-center">
                          <IonCol>
                              <IonText color="danger">
                                  <p>
                                      {error}
                                  </p>
                              </IonText>
                          </IonCol>
                      </IonRow>
                  )}
                  <IonRow >
                      <IonCol>
                         <IonButton color="dark" fill="clear" onClick={props.onCancel}>Cancel</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton color="secondary" expand="block" onClick={saveHandler}>Save </IonButton>
                      </IonCol>
                  </IonRow>
              </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default AddCourseModal;