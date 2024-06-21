import React from 'react'
import TRnobakcground from '../Images/TRlogonobackgroundpng.png';
import Navbarcomponent from './Navbarcomponent';

function Home() {


  return (
    <>
  <Navbarcomponent />
    
    <div className="App">
     <img src={TRnobakcground} alt="" /> 
    </div>

    <hr></hr>

   <div className='about'><h2> 
Tech-Refresher is an innovative yet nostalgic approach to educating and refreshing new and aspiring developers with the foundational  coding languages, frameworks, and technology concepts. <br></br> Tech Refresher is a self-study educational web application comprised of digital flash-cards.  <br></br>

<br></br>We recognized the struggle to constantly remember and retain every single coding language, concept, and framework and wanted to offer a fun and practical solution to help new and aspiring coders mentally refresh their coding skillsets.
<br></br> Tech-Refresher was developed for and by coding students.
<hr></hr>
{/* <br></br>  <a href="http://localhost:3001/api-docs/"> Click here to see our <br></br> Swagger Documentation </a> */}

 </h2>

</div> 
    
    

    </>
    
  )
}

export default Home