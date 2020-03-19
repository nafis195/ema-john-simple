import React, { useContext, useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';


const usePrevious = value => {
    const prev = useRef();
    useEffect ( () => {
        console.log(value);
        prev.current = value;
    }, [value])
    return prev.current;
}

const Header = () => {
    const user = useContext(UserContext);
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    return (
        <div className="header">
            <h1>Count: {count} Previous: {previous}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            {/* <img src={logo} alt="" /> */}
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <span style={{ color: 'yellow' }}>{user}</span>
            </nav>
        </div>
    );
};

export default Header;