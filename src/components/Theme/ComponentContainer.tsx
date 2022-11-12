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
      <section className="p-5 pr-10 space-y-3 w-max rounded-xl bg-[#D9D9D9] bg-opacity-10">
        <div>{componentName}</div>
        <div>{componentBody}</div>
      </section>
    </>
  );
}

export default ComponentContainer;
