import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import PageNotFound from './pages/PageNotFound';
import UploadHome from './components/UploadHome';
import Singin from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Singin />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='/uploadhome' />} />
          <Route path='/uploadhome' element={<UploadHome />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
