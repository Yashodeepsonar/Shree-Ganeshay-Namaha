import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './component/card';

const root=createRoot(document.getElementById('root'))
  function Page(){
    return(
      <>
      <Card/>
      </>
    );
  }
root.render(<Page/>)

