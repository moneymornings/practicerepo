import './App.css'
import SyncedInputs from './components/SyncedInputs';
import FilterList from './components/FilterList';


function App() {
  
  return (
    <>
      <h1>Prop Drilling and Lifting State</h1>
      <div className="card">
        <h2>Lab #1</h2>
        <SyncedInputs />
      </div>
      <div className="card">
        <h2>Lab #2</h2>
        <FilterList />
      </div>
    </>
  );
}

export default App
