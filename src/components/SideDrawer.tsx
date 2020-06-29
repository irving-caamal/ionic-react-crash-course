import React, {Component} from 'react';
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList, IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {list, options} from "ionicons/icons";

const SideDrawer: React.FC<{

}>= props => {
    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Course Goals
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle>
                        <IonItem button routerLink='/courses/all-goals' routerDirection="none">
                            <IonIcon slot="start" icon={list}></IonIcon>
                            <IonLabel>All goals</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem button routerLink='/filter'>
                            <IonIcon slot="start" icon={options}></IonIcon>
                            <IonLabel>Filter</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default SideDrawer;