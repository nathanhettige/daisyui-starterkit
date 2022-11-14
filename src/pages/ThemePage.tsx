import { ReactNode } from 'react';
import Container from '../components/Theme/ComponentContainer';

const components: { [key: string]: ReactNode } = {
  'Text Sizes': (
    <div className="space-y-2">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  ),
  Colours: (
    <div>
      <div className="bg-primary">Primary</div>
      <div className="bg-secondary">Secondary</div>
      <div className="bg-accent">Accent</div>
      <div className="bg-neutral">Neutral</div>
      <div className="bg-base-100">base-100</div>
      <div className="bg-info">Info</div>
      <div className="bg-success">Success</div>
      <div className="bg-warning">Warning</div>
      <div className="bg-error">Error</div>
    </div>
  ),
  d: (
    <div>
      <div className="bg-primary">Primary</div>
      <div className="bg-secondary">Secondary</div>
      <div className="bg-accent">Accent</div>
      <div className="bg-neutral">Neutral</div>
      <div className="bg-base-100">base-100</div>
      <div className="bg-info">Info</div>
      <div className="bg-success">Success</div>
      <div className="bg-warning">Warning</div>
      <div className="bg-error">Error</div>
    </div>
  ),
  'd Sizes': (
    <div className="space-y-2">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  )
};

const ThemePage = () => {
  return (
    <div className="p-4 flex bg-green-600">
      <div className="columns-sm  bg-orange-500">
        {Object.entries(components).map(([key, value]) => {
          return (
            <Container key={key} componentName={key} componentBody={value} />
          );
        })}
        {Object.entries(components).map(([key, value]) => {
          return (
            <Container
              key={key + 'testing'}
              componentName={key}
              componentBody={value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemePage;
