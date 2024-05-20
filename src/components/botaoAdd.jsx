import react from 'react';

function Button(props) {
    return(
    <button onClick={props.adicionarItem}>+</button>
    );
};

export default Button;