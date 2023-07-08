import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Home from './pages/Home';
import Errors from './pages/Errors';
import Participants from './pages/Participants';
import ParticipantsSort from './pages/ParticipantsSort';
import Results from './pages/Results';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errors />,
    children: [
      { index: true, element: <Participants />},
      { path: 'participantes', element: <Participants /> },
      { path: 'lista-ordenada', element: <ParticipantsSort /> },
      { path: 'resultados', element: <Results /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
