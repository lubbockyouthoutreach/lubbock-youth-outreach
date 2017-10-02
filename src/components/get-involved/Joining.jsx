import React from 'react';

import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

import GivingHandsPavillion from './wbi-giving-hands-pavillion.png';

function Joining() {
  return (
    <Box
      flex
      pad='small'
      direction='row'
      responsive={false}
    >
      <Box
        flex
        direction='column'
        responsive={false}
      >
        <Heading tag='h2'>
          How to get involved
        </Heading>
        <Paragraph>
          Joining is simple, do zyx and say it six times fast.
        </Paragraph>
      </Box>
      <Sidebar
        fixed={false}
        full={false}
        size='medium'
      >
        <Image
          width='100%'
          height='100%'
          size='medium'
          src={`${GivingHandsPavillion}`}
        />
      </Sidebar>
    </Box>
  );
}

export default Joining;
