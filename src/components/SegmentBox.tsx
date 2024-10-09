import { PropsWithChildren } from 'react';

type SegmentBoxProps = {
  label?: string;
  spacing?: string | number;
};

export const SegmentBox = ({
  label,
  children,
}: PropsWithChildren<SegmentBoxProps>) => {
  return (
    <section>
      {label ? <span className="header">{label}</span> : null}
      {children}
    </section>
  );
};
