import React from 'react';
import LocationPage from '../workouts/LocationIndex'


export const routes = [
    {
        path: '/museums',
        exact: true,
        main: () => <LocationPage />
    },

]