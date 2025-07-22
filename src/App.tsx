import { ToastContainer } from 'react-toastify';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/routes';

function App() {
    return (
        <MainLayout>
            <ToastContainer />
            <AppRoutes />
        </MainLayout>
    );
}

export default App;
