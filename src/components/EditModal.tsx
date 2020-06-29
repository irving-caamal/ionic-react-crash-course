import React, {useRef , useState} from 'react';
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
    IonToolbar,
    IonText
} from "@ionic/react";

const EditModal : React.FC <{
    show:boolean;
    onCancel: ()=> void;
    onSave: (goalText:string)=> void;
    editedGoal: {"id":string; "text":string} | null;
}> = props =>{
    //Refs
    const textRef = useRef<HTMLIonInputElement>(null)
    //states
    const [error,setError] = useState('');

    const addGoalHandler = () => {
        const enteredText = textRef.current?.value;
        if(!enteredText || enteredText.toString().trim().length === 0) {
            setError('Please enter a valid text!')
            return;
        }

        props.onSave(enteredText.toString())

    }
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
                             <IonInput type="text" value={props.editedGoal?.text} ref={textRef}/>
                         </IonItem>
                     </IonCol>
                 </IonRow>
                  {error && (
                      <IonRow>
                          <IonCol>
                              <IonText color="danger">
                                  <p>
                                      {error}
                                  </p>
                              </IonText>
                          </IonCol>
                      </IonRow>
                  )}
                  <IonRow className="ion-text-center">
                      <IonCol>
                          <IonButton fill="clear" color="dark" onClick={props.onCancel}>Cancel</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton color="secondary" expand="block" onClick={addGoalHandler}>Save</IonButton>
                      </IonCol>
                  </IonRow>
              </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default EditModal;