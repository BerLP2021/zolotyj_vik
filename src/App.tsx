import Header from './component/Header'
import UserTable from './component/UserTable'

function App() {

  return (
    <>
      <Header />  
      <main className='container m-auto'>
        <UserTable />
      </main>
    </>
  )
}

export default App
