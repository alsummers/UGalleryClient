import React from 'react';
import LocationPage from '../workouts/LocationSearch'



export const routes = [
    {
        path: '/museums',
        exact: true,
        main: () => <LocationPage />
    },
    

]