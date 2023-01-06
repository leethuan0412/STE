import React from 'react';

import { Box, Stack } from '@chakra-ui/react';

import { InputComponent } from '@/components/Input/InputComponent';
import { IconGG } from 'public/assets/svg/icon-google';

const Login = () => (
  <Stack direction="column" spacing={{ base: 4, xl: 8 }}>
    <InputComponent
      label="Password"
      type="password"
      size="lg"
      isRequired
      placeholder="Enter your password"
    />
    <Box>
      <IconGG />
    </Box>
  </Stack>
);
export default Login;
