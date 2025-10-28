interface Props {
    zone: string;
    description: string;
    color?: string;
}

export const Zone = ({ zone, description, color }: Props) => {
  return (
    <td style={{ textAlign: 'left' }}>
        <span
            style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                display: 'block',
                color: color || '#ffffff',
            }}
        >
            {zone}
        </span>
        <span
            style={{
                color: '#cfd4d6',
                fontSize: '1rem',
            }}
        >
            {description}
        </span>
    </td>
  )
}
