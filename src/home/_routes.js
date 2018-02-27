import React from 'react';
import LocationPage from '../workouts/LocationSearch'
import Splash from '../home/Splash'



export const routes = [
    {
        path: '/museums',
        exact: true,
        main: () => <LocationPage />
    },
    {
        path: '/splash',
        exact: true,
        main: () => <Splash sessionToken={this.sessionToken}/>
    }
    

]