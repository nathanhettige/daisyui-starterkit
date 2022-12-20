import Container from '../components/Theme/ComponentContainer';
import { components } from '../components/Theme/Components';

const ThemePage = () => {
  return (
    <div className="p-4 w-screen">
      <div className="masonry">
        {Object.entries(components).map(([key, value]) => {
          return (
            <>
              <Container key={key} componentName={key} componentBody={value} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ThemePage;
