import { ReactNode } from 'react';
import Container from '../components/Theme/ComponentContainer';
import * as components from '../components/Theme/components';

const ThemePage = () => {
  const spotlightComponets: Record<string, ReactNode> = {
    /* Add components you want shown at the top */
    /* STILL IN DEVELOPMENT */
    Buttons: components.Buttons,
    Headings: components.Headings
  };

  return (
    <div className="p-4 w-screen">
      <div className="masonry">
        {Object.entries(spotlightComponets).map(([key, value]) => {
          return (
            <>
              <Container key={key} componentName={key} componentBody={value} />
            </>
          );
        })}
        {Object.entries(components).map(([key, value]) => {
          if (!Object.values(spotlightComponets).includes(value)) {
            return (
              <>
                <Container
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
