import React, { ReactElement } from 'react';

interface ComponentContainerProps {
  componentName: string;
  component: React.FC | ReactElement;
}

function ComponentContainer({
  componentName,
  component
}: ComponentContainerProps): ReactElement {
  return (
    <>
      <section
        className={
          'bg-[#D9D9D9] space-y-2.5 bg-opacity-10 p-5 rounded-xl mb-5 w-full h-full break-inside-avoid-column'
        }
      >
        <p>{componentName}</p>
        <div>
          {React.isValidElement(component)
            ? component
            : React.createElement(component)}
        </div>
      </section>
    </>
  );
}

export default ComponentContainer;
