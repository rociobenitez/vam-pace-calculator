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
            fontSize: '1rem',
            borderRadius: '3rem',
            border: '1px solid #475560',
            backgroundColor: '#030712',
            marginBottom: '20px',
            marginInline: 'auto',
            width: '300px',
            textAlign: 'center',
            color: 'white',
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
