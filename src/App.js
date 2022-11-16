 
 
import AppCopa from "./routes/index.js";

import {CopaProvidor} from "./Context/index"
import Header from "./components/Header/index.js";

function App() {
  return (
      <>
        <CopaProvidor>
          <AppCopa></AppCopa>
        </CopaProvidor>
        
      </>
  );
}

export default App;
