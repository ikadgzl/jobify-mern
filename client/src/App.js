import { Landing, Error, Register } from './pages/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Stats,
  AllJobs,
  AddJob,
  Profile,
  SharedLayout
} from './pages/dashboard/';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route path='stats' element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
