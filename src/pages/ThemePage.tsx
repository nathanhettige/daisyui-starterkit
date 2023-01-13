import { ReactNode } from 'react';
import * as components from '@theme/components';
import ComponentContainer from '@theme/ComponentContainer';

const ThemePage = () => {
  const spotlightComponets: Record<string, ReactNode> = {
    /* Add components you want shown at the top */
    /* STILL IN DEVELOPMENT */
    Buttons: components.Buttons,
    Headings: components.Headings
  };

  return (
    <div className="w-screen p-4">
      <div className="masonry">
        {Object.entries(spotlightComponets).map(([key, value]) => {
          return (
            <>
              <ComponentContainer
                key={key}
                componentName={key}
                componentBody={value}
              />
            </>
          );
        })}
        {Object.entries(components).map(([key, value]) => {
          if (!Object.values(spotlightComponets).includes(value)) {
            return (
              <>
                <ComponentContainer
                  key={key}
                  componentName={formatComponentName(key)}
                  componentBody={value}
                />
              </>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
};

function formatComponentName(name: string): string {
  return name.replace(/([A-Z])/g, ' $1').trim();
}

export default ThemePage;
