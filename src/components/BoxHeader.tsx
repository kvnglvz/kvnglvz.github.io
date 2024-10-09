import React from 'react';
import { SegmentBox } from './SegmentBox';

export const BoxHeader = ({ label }: { label: string }) => {
  return (
    <div>
      <SegmentBox />
      <h6>{label}</h6>
      <SegmentBox />
    </div>
  );
};
