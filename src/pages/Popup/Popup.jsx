import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { format } from 'date-fns';
import Zemen from 'zemen';
import { useMemo } from 'react';

const Popup = () => {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const zare = useMemo(
    () => new Zemen(Zemen.toEC(format(date, 'yyy-MM-d')).toString()),
    [date]
  );
  return (
    <Box
      bg="black"
      flexGrow={1}
      flexDirection={'column'}
      display={'flex'}
      justifyContent={'space-between'}
      p={2}
      color="white"
    >
      <div>
        <Box p={2} mt={3} rounded={'lg'} bg={'blue.900'}>
          <Text fontSize={'lg'} fontWeight={'bold'} noOfLines={1}>
            Gregorian calendar GC
          </Text>

          <Text fontSize={'xl'}>
            {format(date, 'ccc ,LLL dd yyyy')} <br />
          </Text>
        </Box>
        <Box p={2} mt={3} rounded={'lg'} bg={'green.600'}>
          <Text fontSize={'lg'} fontWeight={'bold'} noOfLines={1}>
            Ethiopian calendar 🇪🇹
          </Text>

          <Text fontSize={'xl'}>{zare.format('d ፣ MMM D YYYY E')}</Text>
        </Box>
      </div>
      <Text fontSize={'xs'} mt={3}>
        {format(date, ' hh:mm:ss aaa')} <br />
        Made with ❤️ by <a href="https://henoktsegaye.com">Henok Tsegaye</a>
      </Text>
    </Box>
  );
};

export default Popup;
