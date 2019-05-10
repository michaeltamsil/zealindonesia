import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '.';

storiesOf('organisms / Header', module)
    .add('example', () => {
        return (
            <Header/>
        )
    })