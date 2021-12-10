import './Input.css'
const InputText = (props) => {
    const { id, textPlaceholder, typeInput, hasError, text } = props;
    let message;

    console.log(hasError)
    // It's mail invalid show paragraph error otherwise show paragraph text success
    if (hasError) {
        message = <p className="App-mondal--inputValidateSucces">{text}</p>
    } else {
        message = <p className="App-mondal--inputValidateErr">{text}</p>
    }
    return (
        <div>
            <input className="App-modal--inputEmail" id={id} autoFocus type={typeInput} placeholder={textPlaceholder} required />
            {message}
        </div>
    );
}
 
export default InputText;