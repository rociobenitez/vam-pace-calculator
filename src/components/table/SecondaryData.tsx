interface Props {
  className?: string;
  data: string | null;
}

export const SecondaryData = ({ className, data }: Props) => {
  return (
    <span className={`secondary-data ${className}`}
      style = {{
        display: 'block',
        color: '#a1a1a1',
        fontSize: '0.875rem',
        lineHeight: '1.2'
      }}
      >
      {data}
    </span>
  )
}
