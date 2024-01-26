import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Singin from './pages/SignIn';
import UploadCsv from './components/UploadCsv';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Singin />} />
        <Route element={<AppLayout />}>
          <Route path='/uploadcsv' element={<UploadCsv />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
