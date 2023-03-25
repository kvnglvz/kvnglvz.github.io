import React from 'react';
import { Title, Divider, Stack } from '@mantine/core';

export const BoxHeader = ({ label }: { label: string }) => {
  return (
    <Stack>
      <Divider />
      <Title order={6}>{label}</Title>
      <Divider />
    </Stack>
  );
};
