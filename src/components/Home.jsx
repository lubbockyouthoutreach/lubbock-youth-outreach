import React from 'react';

import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Carousel from 'grommet/components/Carousel';
import Split from 'grommet/components/Split';

function Home() {
  return (
    <Box align='start' margin='small' pad='medium'>
      <Image src='https://az616578.vo.msecnd.net/files/2016/07/17/636043845983969494-1230370740_cp1.jpg' fit='cover' />

      {/* Our Mission */}
      <Box pad='small' full='true'>
        <Paragraph size='large'>
          Our Mission
        </Paragraph>
        <Paragraph size='small' margin='none'>
          The Lubbock Youth Outreach is a volunteer organization offering Texas Tech Students the opportunity to work with Lubbock youth in need of academic assistance. Lubbock Youth Outreach primarily functions as a tutoring program, providing academic support to school-age children in the Lubbock area. However, members are also given the opportunity to serve in a mentoring capacity to the children they work with.
        </Paragraph>

        {/* Image Carousel and Events */}
        <Split>
          {/* Carousel of team doing stuff together. */}
          <Box align='center' size='large' pad='large'>
            <Carousel>
              <Image src='https://az616578.vo.msecnd.net/files/2016/07/17/636043845983969494-1230370740_cp1.jpg' />
              <Image src='https://az616578.vo.msecnd.net/files/2016/07/17/636043845983969494-1230370740_cp1.jpg' />
              <Box pad='large' colorIndex='neutral-3'>
                <Box pad='medium' colorIndex='neutral-2'>
                  Content inside of a Box element.
                </Box>
              </Box>
            </Carousel>
          </Box>

          {/* Recent news and events. */}
          <Box align='center' size='large' pad='large'>
            <Paragraph size='medium'>
              News and Events
            </Paragraph>
            <Paragraph size='small' margin='small'>
              Donec tempor lorem ipsum, vitae mattis urna semper feugiat. Phasellus libero metus, venenatis vitae semper at, hendrerit sed velit.
            </Paragraph>
            <Paragraph size='small' margin='small'>
              Donec tempor lorem ipsum, vitae mattis urna semper feugiat. Phasellus libero metus, venenatis vitae semper at, hendrerit sed velit.
            </Paragraph>
          </Box>
        </Split>
      </Box>
    </Box>
  );
}

export default Home;
