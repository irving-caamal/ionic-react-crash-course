import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css'

/**
 * App Pages
 */
import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";
import AllGoals from "./pages/AllGoals";

import {home, list, trophy} from "ionicons/icons";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                {/*<Route path="/home" component={Home} exact={true} />*/}
                <Route path="/courses" exact>
                    <Courses></Courses>
                </Route>
                <Route path="/courses/:id/goals">
                    <CourseGoals></CourseGoals>
                </Route>
                <Route path="/all-goals" exact>
                    <AllGoals></AllGoals>
                </Route>
                <Redirect path='/' to='/courses' exact />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="all-goals" href="/all-goals" >
                    <IonIcon icon={list}></IonIcon>
                    <IonLabel>All Goals</IonLabel>
                </IonTabButton>
                <IonTabButton tab="courses" href="/courses">
                    <IonIcon icon={trophy}></IonIcon>
                    <IonLabel>Courses</IonLabel>
                </IonTabButton>

            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
);
/*<IonRouterOutlet>
    <Route path="/home" component={Home} exact={true} />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
</IonRouterOutlet>*/

export default App;
