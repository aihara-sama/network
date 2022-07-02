import React from 'react';
import { createRoot } from 'react-dom/client';

// function f(a){}

const Cmp = () => {
  const [element, setElement] = React.useState<JSX.Element>(null);

  React.useEffect(() => {
    import(`./pages${location.pathname}`)
      .then(({ default: Page }) => {
        setElement(<Page />);
      })
      .catch((err) => {
        console.log('not found!!!');
        console.log({ err });
        import('./pages/404')
          .then(({ default: NotFound }) => {
            setElement(<NotFound />);
          })
          .catch((err) => {
            console.log('Failed to load not found page!!!', { err });
          });
      });
  }, []);
  return element;
};

const O = () => {
  return (
    <div>
      <Cmp />
    </div>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<O />);
