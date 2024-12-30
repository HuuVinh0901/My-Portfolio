import React, { useEffect, useState  } from 'react';
import styles from '../pages/body/style.scss';
const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const words = ['Website', 'Back-end'];
  const speed = 150; // Thay đổi tốc độ gõ chữ
  const deleteSpeed = 100; // Thay đổi tốc độ xóa chữ

  useEffect(() => {
    const timer = setInterval(() => {
      updateText();
    }, isDeleting ? deleteSpeed : speed);

    return () => clearInterval(timer);
  }, [text, isDeleting]);

  const updateText = () => {
    const currentWord = words[index % words.length];
    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
      if (text === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      setText(currentWord.substring(0, text.length + 1));
      if (text === currentWord) {
        setIsDeleting(true);
      }
    }
  };

  return (
    <div className="typing-container">
      <p >{text}</p>
      
    </div>
  );
};

export default TypingEffect;