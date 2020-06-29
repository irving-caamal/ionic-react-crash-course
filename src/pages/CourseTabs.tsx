import React from 'react';
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/react";
import {Redirect, Route} from "react-router-dom";
import Filter from "./Filter";
import Courses from "./Courses";
import CourseGoals from "./CourseGoals";
import AllGoals from "./AllGoals";
import {list, trophy} from "ionicons/icons";

const CourseTabs: React.FC= () => {
    return (
        <IonTabs>
            <IonRouterOutlet >
                <Redirect path='/courses' to='/courses/list' exact />

                {/*<Route path="/home" component={Home} exact={true} />*/}
                <Route path="/courses/list" exact>
                    <Courses />
                </Route>
                <Route path="/courses/all-goals" exact>
                    <AllGoals />
                </Route>
                <Route path="/courses/:id">
                    <CourseGoals />
                </Route>

            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="all-goals" href="/courses/all-goals" >
                    <IonIcon icon={list} />
                    <IonLabel>All Goals</IonLabel>
                </IonTabButton>
                <IonTabButton tab="courses" href="/courses/list">
                    <IonIcon icon={trophy} />
                    <IonLabel>Courses</IonLabel>
                </IonTabButton>

            </IonTabBar>
        </IonTabs>
    )
}
export default CourseTabs;