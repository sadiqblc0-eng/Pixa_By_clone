import { useState } from 'react'
import Navber from './components/Navber';
import Imgase from './components/Imgase';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navber/>
        <Imgase/>
      </div>
    </>
  );
}
export default App
