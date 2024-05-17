import './App.css'
import HeaderAcount from './components/headerAcount/HeaderAcount'
import HeaderMain from './components/headerMain/HeaderMain'

const App = () => {
  return (
    <div className='app'>
      <div >
        <HeaderAcount/>
      </div>
      <div className='w-[100%] h-[80vh] flex items-center justify-center'>
        <HeaderMain/>
      </div>
    </div>
  )
}

export default App
