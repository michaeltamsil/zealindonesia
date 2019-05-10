import React from 'react';
import { storiesOf } from '@storybook/react';

import Register2 from '.';

storiesOf('organisms / Register', module)
    .add('example', () => {
        return (
            <Register2/>
        )
    })