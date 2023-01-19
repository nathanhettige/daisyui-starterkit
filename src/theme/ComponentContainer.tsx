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
          'mb-5 h-full w-full break-inside-avoid-column space-y-2 rounded-xl bg-[#D9D9D9] bg-opacity-10 p-5'
        }
      >
        <div>{componentName}</div>
        <div>{componentBody}</div>
      </section>
    </>
  );
}

export default ComponentContainer;
