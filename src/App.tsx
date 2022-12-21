import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen justify-center gap-2 p-6 text-center">
      <h5 className="sm:text-5xl">Welcome to your new app!</h5>
      <p className="sm:text-2xl">
        This boilerplate contains React Typescript, Vite, Tailwind CSS and
        DaisyUI.
      </p>
      <Link to="/theme">
        <button className="btn btn-primary mt-5 text-md ">
          Go to Theme Page
        </button>
      </Link>
    </div>
  );
}

export default App;
