import MainLayout from './layouts/MainLayout';
import MainPage from './pages/Home/MainPage';

function App() {
    return (
        <MainLayout>
            <MainPage />
        </MainLayout>
    );
}

export default App;

// КОД ДЛЯ ТЕСТОВ:

// import './App.css';
// import TestContainer from './test/components/TestContainer';

// function App() {
//     return (
//         <div className="App">
//             <TestContainer />
//         </div>
//     );
// }

// export default App;
