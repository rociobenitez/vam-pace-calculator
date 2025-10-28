interface Props {
    label: string;
    disabled?: boolean;
}

export const Button = ({ label, disabled }: Props) => {
  return (
    <button disabled={disabled}>{label}</button>
  )
}
