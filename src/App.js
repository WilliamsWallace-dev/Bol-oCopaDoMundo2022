 
 
import AppCopa from "./routes/index.js";

import {CopaProvidor} from "./Context/index"
import TelaInicial from "./components/TelaInicial/index.js";
function App() {

  if(window.screen.width < 540){
    return(
        <>
        <TelaInicial></TelaInicial>
        <CopaProvidor>
          <AppCopa></AppCopa>
        </CopaProvidor>
        </>
    )
  }else{
    return (
      <>
        <CopaProvidor>
          <AppCopa></AppCopa>
        </CopaProvidor>
        
        
      </>
  );
  }



  
}

export default App;
