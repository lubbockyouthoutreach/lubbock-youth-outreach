import React from 'react';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

import Form from './Form.jsx';

const forms = [
  ['/temp.pdf', 'This is the first temporary file. It is very temporary'],
  ['/temp2.pdf', 'This is the second temporary file. It is very temporary'],
  ['/temp3.pdf', 'This is the third temporary file. It is very temporary'],
  ['/temp4.pdf', 'This is the fourth temporary file. It is very temporary'],
  ['/temp5.pdf', 'This is the fifth temporary file. It is very temporary'],
];

function Forms() {
  return (
    <Section
      flex
      pad='small'
      direction='column'
      responsive={false}
      colorIndex='light-2'
    >
      <Heading tag='h3'>
        Forms
      </Heading>
      {forms.map(element => <Form label={element[1]} file={element[0]} />)}
    </Section>
  );
}

export default Forms;
