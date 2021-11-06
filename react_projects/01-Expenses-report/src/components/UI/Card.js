import './Card.css';

const Card =(props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div> // children is a reserve word. it is the components between the Card tags
}

export default Card;