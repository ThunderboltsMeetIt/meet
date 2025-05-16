import React, { useState } from 'react';

export default function InterpretationEditor(): React.JSX.Element {
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        console.log('Sending:', inputText);
        setInputText('');
    };

    return (
            <div style={styles.container}>
      <textarea
              style={styles.textarea}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message here..."
      />
                <button style={styles.button} onClick={handleSend}>
                    Send/Upload
                </button>
            </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
    },
    textarea: {
        resize: 'vertical',
        minHeight: '100px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontFamily: 'inherit',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};
