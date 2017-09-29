import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

function Home() {
  return (
    <div>
      <Box align='start' margin='small' pad='large'>
        Home
        <Paragraph>
          This is the home page.
        </Paragraph>
      </Box>
    </div>
  );
}

export default Home;
