import Button from '../buttons/Button';
import './ContentModal.css'
import { useState } from 'react';
import Modal from './components/modal/Modal';

const ContentModalButtons = () => {

    // Set visibility modal
    const [visible, setVisible] = useState(false)
    
    // Open modal
    const openModal = () => setVisible(true)
    
    return ( 
        <div className='App-ContentModal'>
            <Button textContent="Notificarme" widthButton="10.5" onClick={openModal} />
            <Modal visible={visible} setVisible={setVisible} />
        </div>
     );
}
 
export default ContentModalButtons;