import './Bottle.css'

const Bottle = ({ bottle,handleClick }) => {
    console.log(bottle)
    const {name, id , img, price} =bottle;
    return (
        <div className="bottle">
            <h1>Name: {name}</h1>
            <img src={img} alt="" />
            <p>id: {id}</p>
            <p><small>{price}</small></p>
            <button onClick={handleClick}>Buy</button>
        </div>
    );
};

export default Bottle;