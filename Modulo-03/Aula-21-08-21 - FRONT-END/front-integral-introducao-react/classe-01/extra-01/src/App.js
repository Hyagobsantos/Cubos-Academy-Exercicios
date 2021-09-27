import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Get unlimited access to everything</h1>
      <h2>Total billed $50</h2>
      <p>Enter your credit card details to complete subscription</p>
      <div className="form-1">
        <label htmlFor="card-number">Card number</label>
        <input type="text" id="card-number" placeholder="1234 1234 1234 1234" />
      </div>

      <div className="form-2">
        <div className=" card card1">
          <label htmlFor="card-text1">Expiration date</label>
          <input type="text" id="card-text1" placeholder="MM/YY" />
        </div>

        <div className=" card card2">
          <label htmlFor="card-text2">Security code</label>
          <input type="text" id="card-text2" placeholder="123" />
        </div>
      </div>
      <p className="first">
        By subscribing you agree to our Use of Service. Your payment method will
        be charged with $50 and you’ll have access to all locked features until
        20 Jan 2022.
      </p>
      <button>Pay Now</button>
    </div>
  );
}

export default App;
