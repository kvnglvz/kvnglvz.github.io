import '../css/ProfileBox.css';
import { useContext } from 'react';

import { AppContext } from '../App';
import AnimatedLayout from '@/components/AnimatedLayout';

export const BlogPage = () => {
  const { colorScheme } = useContext(AppContext);

  return (
    <AnimatedLayout>
      <section>
        <p>Coming soon.</p>
      </section>
    </AnimatedLayout>
  );
};
