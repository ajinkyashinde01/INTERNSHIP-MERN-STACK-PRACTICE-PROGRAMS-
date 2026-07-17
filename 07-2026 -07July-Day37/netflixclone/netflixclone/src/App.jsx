import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="logo">NETFLIX</div>
        <button>Sign In</button>
      </header>

      <section className="hero">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>

        <div className="email-box">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </section>

      <section className="trending">
        <h2>Trending Now</h2>

        <div className="row">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uT8nXIC2YpaOliwa7u3oIzjQRpciA0DWMQ&s"
            alt="Avengers"
          />

          <img
            src="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt="Interstellar"
          />

          <img
            src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg"
            alt="Joker"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7g2MW_GYbDXhIxnKXFyKnRCZv_yDL7lg1GQ&s"
            alt="Inception"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzzFYczgufsR1VZbadYvtIvRKYnNnb8tz9w&s"
            alt="Batman"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrytasuKrc48Eicv7CRH4SbrF-QRlucmRXw&s"
            alt="Spider-Man"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
            alt="Oppenheimer"
          />
        </div>
      </section>
    </>
  );
}

export default App;