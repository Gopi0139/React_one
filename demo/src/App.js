import logo from './logo.svg';
import './App.css';
import './style.css';
import img1 from './images/virat.jpg'
import img2 from './images/dhoni.jpg' 
import img3 from './images/sachin.jpg'

function App() {
  return (
    <div> 
      <header> 
        <h1>Cricket World</h1> 
        <nav> 
          <a href="home.html">Home</a> 
          <a href="players.html">Players</a> 
        </nav> 
      </header> 
      <section className="players"> 
        <h2>Famous Cricket Players</h2> 
        <div className="card"> 
          <img src={img1} alt="Virat Kohli" /> 
          <h3>Virat Kohli</h3> 
          <p>One of the greatest batsmen in modern cricket and former Indian captain.</p> 
        </div> 
        <div className="card"> 
          <img src={img2} alt="MS Dhoni" /> 
          <h3>MS Dhoni</h3> 
          <p>Legendary captain known for cool and finishing matches.</p> 
        </div> 
        <div className="card"> 
          <img src={img3} alt="Sachin Tendulkar" /> 
          <h3>Sachin Tendulkar</h3> 
          <p>Known as the "God of Cricket", he holds many records.</p> 
        </div> 

        </section> 
        <footer> 
          <p>© 2026 Cricket World</p> 
          </footer> 
        </div>
  );
}

export default App;
