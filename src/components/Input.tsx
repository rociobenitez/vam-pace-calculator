import type { ChangeEvent } from 'react';

interface Props {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    step?: number;
}

export const Input = ({ type, placeholder, value, onChange, min, step }: Props ) => {
  return (
    <input 
        style = {{
            display: 'flex',
            padding: '10px',
            fontSize: '1.5rem',
            borderRadius: '3rem',
            border: '1px solid #475560',
            marginBottom: '20px',
            marginInline: 'auto',
            width: '300px',
            textAlign: 'center',
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            outline: 'none',
            transition: 'border-color 0.3s',
            }}
        onFocus={(e) => {
            e.currentTarget.style.borderColor = 'rgb(0, 255, 247)';
        }}
        type={type}
        placeholder={placeholder}
        value={value ?? ''}
        onChange={onChange}
        min={min}
        step={step}
        inputMode='numeric' // teclado numérico en móviles
    />
  )
}
