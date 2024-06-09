import './App.css';
import MyForm from './Components/form';
import Counting from './Components/Counting';
import Class from './Components/Class';
import Navbarcomponent from './Components/Navbarcomponent'; 
import Carouselcomponent from './Components/Carouselcomponent';



function App() {
  return (
    <>
    <Navbarcomponent/>
    <div>
    <Carouselcomponent/>
    </div>

    <MyForm/>
  
    <div>
    <Counting />
    </div>

    <Class />

    </>
  );
}

export default App;
