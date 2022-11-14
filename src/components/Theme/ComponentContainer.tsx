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
      <section className="p-5 pr-10 rounded-xl space-y-3 inline-block bg-[#D9D9D9] bg-opacity-10 mb-4 min-w-max w-full">
        <div>{componentName}</div>
        <div>{componentBody}</div>
      </section>
    </>
  );
}

export default ComponentContainer;
