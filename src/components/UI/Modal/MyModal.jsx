import React from 'react';
import './MyModal.css';

const MyModal = ({children, visible, setVisible}) => {
    return (
        <div className={visible ? 'MyModal active' : 'MyModal'} onClick={() => setVisible(false)}>
            <div className="MyModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;