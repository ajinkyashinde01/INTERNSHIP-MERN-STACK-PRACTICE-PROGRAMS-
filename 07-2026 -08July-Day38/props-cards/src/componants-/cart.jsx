import "./Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <img src={props.image} alt={props.name} className="card-image" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Cart;