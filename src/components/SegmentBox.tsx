import { Divider, Stack, Title } from '@mantine/core';
import { Fragment, PropsWithChildren, useContext } from 'react';
import { AppContext } from '../App';

type SegmentBoxProps = {
  label?: string;
  spacing?: string | number;
};

export const SegmentBox = ({
  label,
  spacing = 0,
  children,
}: PropsWithChildren<SegmentBoxProps>) => {
  const { isMobile } = useContext(AppContext);
  return (
    <Fragment>
      {label ? (
        <Divider
          size={isMobile ? 1 : 0}
          label={<Title order={isMobile ? 6 : 5}>{label}</Title>}
          labelPosition={isMobile ? 'center' : 'left'}
        />
      ) : null}
      {children ? (
        <Stack ml={isMobile ? 0 : 'xl'} spacing={spacing}>
          {children}
        </Stack>
      ) : null}
    </Fragment>
  );
};
