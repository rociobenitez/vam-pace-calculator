import { MainData } from './MainData.tsx';
import { SecondaryData } from './SecondaryData.tsx';

interface Props {
    zone: string;
    description: string;
    color?: string;
}

export const Zone = ({ zone, description, color }: Props) => {
  return (
    <td>
        <MainData
            className="zone-description"
            data={zone}
            color={color}
        />
        <SecondaryData
            className="zone-label"
            data={description}
        />
    </td>
  )
}
