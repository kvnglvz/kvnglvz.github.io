import { Box, Title, Divider, Stack } from '@mantine/core';
import React, { Fragment } from 'react';

export const BoxHeader = ({ label }: { label: string}) => {
  return (
    <Stack>
      <Divider />
      <Title order={6}>{label}</Title>
      <Divider />
    </Stack>
  );
};
