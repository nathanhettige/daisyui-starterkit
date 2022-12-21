import { ReactElement, ReactNode } from 'react';

interface ComponentContainerProps {
  componentName: string;
  componentBody: ReactNode;
}

function ComponentContainer({
  componentName,
  componentBody
}: ComponentContainerProps): ReactElement {
  return (
    <>
      <section
        className={
          'bg-[#D9D9D9] space-y-2 bg-opacity-10 p-5 rounded-xl mb-5 w-full h-full break-inside-avoid-column'
        }
      >
        <div>{componentName}</div>
        <div>{componentBody}</div>
      </section>
    </>
  );
}

export default ComponentContainer;
