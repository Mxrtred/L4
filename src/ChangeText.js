import React, { useState } from 'react';

function ChangeText() {
    const [text, setText] = useState("Kirill");
    function reverseText() {
        if (text == "Kirill") setText("Кирилл")
        else setText("Kirill")
    }

    return (
        <div>
            <p>Привет {text}</p>
            <button onClick={reverseText}>
                Нажми сюда
            </button>
        </div>
    );
}

export default ChangeText;