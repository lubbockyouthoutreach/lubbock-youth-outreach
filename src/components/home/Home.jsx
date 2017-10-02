import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

import WBITexasTechSeal from './wbi-texas-tech-seal.jpg';

function Home() {
  return (
    <Box align='start' margin='small' pad='large'>
      <Image fit='cover' src={WBITexasTechSeal} />
      Home
      <Paragraph>
        This is the home page.
      </Paragraph>
    </Box>
  );
}

export default Home;
