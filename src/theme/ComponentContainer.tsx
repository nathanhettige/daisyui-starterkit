import { ReactElement } from 'react';

interface ComponentContainerProps {
  componentName: string;
  Component: () => JSX.Element;
}

function ComponentContainer({
  componentName,
  Component
}: ComponentContainerProps): ReactElement {
  return (
    <>
      <section
        className={
          'bg-[#D9D9D9] space-y-2.5 bg-opacity-10 p-5 rounded-xl mb-5 w-full h-full break-inside-avoid-column'
        }
      >
        <p>{componentName}</p>
        <Component />
      </section>
    </>
  );
}

export default ComponentContainer;
