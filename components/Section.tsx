// components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  backgroundColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, backgroundColor }) => {
  return (
    <section id={id} style={{ backgroundColor, padding: '30px 20px' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;