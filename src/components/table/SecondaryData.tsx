interface Props {
  className?: string;
  data: string | null;
}

export const SecondaryData = ({ className, data }: Props) => {
  return (
    <span className={`secondary-data ${className}`}
      style = {{
        display: 'block',
        color: '#CFD4D6',
        fontSize: '1rem',
      }}
      >
      {data}
    </span>
  )
}
