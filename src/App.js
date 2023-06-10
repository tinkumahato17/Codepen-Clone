
import Home from './components/Home';
import DataProviver from './context/DataProvider';



function App() {
  return (
    <DataProviver>
       <Home />
    </DataProviver>
   
  );
}

export default App;
