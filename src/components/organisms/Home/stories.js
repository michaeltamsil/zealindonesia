import React from 'react';
import { storiesOf } from '@storybook/react';

import Home from '.';

storiesOf('organisms / Home', module)
    .add('example', () => {
        return (
            <Home/>
        )
    })