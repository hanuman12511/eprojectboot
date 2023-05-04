import RouterPage from './Furniture/router'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<RouterPage/>}/>
    </Routes>

</BrowserRouter>
  );
}

export default App;
