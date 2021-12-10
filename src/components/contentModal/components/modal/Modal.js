import Title from "../../../title/Title";
import InputText from './../../../contentModal/components/input-text/Input';
import Button from './../../../buttons/Button';
import './Modal.css'
import { useState } from 'react';

const Modal = (props) => {
    const {visible, setVisible} = props;
    const [text, setText] = useState('');
    const [hasError, setHasError] = useState(false)

    // Valid input e-mail with expReg
    const validateInput = () => {
        const expEmail = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
        let input = document.getElementById('inputEmail').value;
        if (!expEmail.test(input)) {
            setHasError(false)
            setText('Ingrese un email valido')
            setTimeout(() => {
                setText('')
            }, 2500)
            return
        } else {
            setHasError(true)
            setText('Gracias ! Te has suscripto sactifactoriamente')
            setTimeout(() => {
                setText('')
            }, 2500)
        }
    }

    // Close modal
    const destroyModal = () => setVisible(false)
    
    // if visible = true return modal 
    return (visible) ? (
        <div className='App-modal--container'>
            <div className='App-modal--overlay'>
                <div className='App-modal'>
                    <div className='App-modal--destroy'>
                        <button className="App-modal--buttonClose" onClick={() => destroyModal()}></button>
                    </div>
                    <Title
                        title="Regístrate"
                        fontSizeTitle="2"
                        subTitle="Y mira antes que nadie las novedades"
                        fontSizeSubtitle="1"
                    />
                    <InputText
                        id="inputEmail"
                        textPlaceholder="Ingrese un email..."
                        typeInput="email"
                        hasError={hasError}
                        text={text}
                    />
                    <Button
                        textContent="Unirse"
                        widthButton="30"
                        onClick={validateInput}
                    />
                </div>
            </div>
        </div>
    ): null;
}
 
export default Modal;