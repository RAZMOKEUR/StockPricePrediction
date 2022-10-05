import './App.css'

function App() {

  return (
    <div className="App">

      <section className='head'>
        <h1>Stock Price Prediction</h1>
      </section>

      <section className='body'>
        <form action="">
          <h3>Search Form</h3>
          <div id='searchbar'>
            <input type="search" name="stock" id="search" />
            <button><img src="src\assets\search.png" alt="" /></button>
          </div>


        </form>
      </section>

    </div>
  )
}

export default App

