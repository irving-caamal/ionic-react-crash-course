import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp, IonContent, IonHeader,
    IonIcon, IonItem,
    IonLabel, IonList,
    IonMenu, IonMenuToggle,
    IonRouterOutlet, IonTitle,
    IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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

import {home, list, options, trophy} from "ionicons/icons";
import Filter from "./pages/Filter";
import CourseTabs from "./pages/CourseTabs";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
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
        <IonRouterOutlet id="main">
            <Route path="/filter" exact>
                <Filter />
            </Route>
            <Route path="/courses">
                <CourseTabs />
            </Route>
            <Redirect to="/courses" />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
/*<IonRouterOutlet>
    <Route path="/home" component={Home} exact={true} />
    <Route exact path="/" render={() => <Redirect to="/home" />} />
</IonRouterOutlet>*/

export default App;
