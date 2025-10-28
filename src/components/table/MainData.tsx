interface Props {
  className?: string;
  data: string | null;
  color?: string;
}

export const MainData = ({ className, data, color }: Props) => {
  return (
    <span className={`main-data ${className}`}
      style = {{
        display: 'block',
        color: color || '#fff',
        fontSize: '1.25rem',
        fontWeight: '600',
        marginTop: '0.75rem',
      }}
      >
      {data}
    </span>
  )
}
