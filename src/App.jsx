import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Comp/Category';
import Navbar from './Comp/Navbar'
import Footer from './Comp/Footer'
function App() {

  return (
    <>
    <div>
   <Navbar></Navbar>
    <Category />
    </div>
    <Footer/>
    </>
  )
}

export default App
