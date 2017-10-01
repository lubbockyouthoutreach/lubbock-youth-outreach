import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

function Home() {
  return (
    <Box align='start' margin='small' pad='medium'>
      <Image src='https://az616578.vo.msecnd.net/files/2016/07/17/636043845983969494-1230370740_cp1.jpg' fit='cover' />
      Home
      <Paragraph>
        This is the home page.
      </Paragraph>
    </Box>
  );
}

export default Home;
