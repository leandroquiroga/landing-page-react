import './Button.css'

const Button = (props) => {
    const { textContent, widthButton, onClick } = props;
    const onClickHandler = () => onClick && onClick();
    
    return (
        <button onClick={onClickHandler}  
                className="App-buttons"
                style={{ width: widthButton + 'rem' }}
        >
            {textContent}
        </button>
     );
}
 
export default Button;