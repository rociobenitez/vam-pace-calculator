import { useMemo } from 'react'
import { Zone } from './Zone.tsx'
import { MainData } from './MainData.tsx'
import { SecondaryData } from './SecondaryData.tsx'
import { DEFAULT_ZONES } from '../../vam/constants.ts'
import { basePaceSecondsFromTest, TEST_SECONDS, calculateZones } from '../../vam/math.ts'    

export const ZoneTable = ({ 
    testMeters,
    timeSeconds = TEST_SECONDS
}: { testMeters: number, timeSeconds?: number }) => {
    const basePace = useMemo(() => basePaceSecondsFromTest(testMeters, timeSeconds), [testMeters, timeSeconds])
    
    const rows = DEFAULT_ZONES.map((zone) => {
    const { paceFast, paceSlow, paceOptimal, kphMin, kphMax, kphOptimal } =
        calculateZones(basePace, zone.minPct, zone.maxPct);

        return {
            ...zone,
            paceRange: `${paceFast} - ${paceSlow}`,
            kphRange: `${kphMax.toFixed(1)} - ${kphMin.toFixed(1)} km/h`,
            optimalPace: paceOptimal,
            optimalKph: `${kphOptimal.toFixed(1)} km/h`,
        };
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Zona</th>
                    <th>Rango de Ritmo</th>
                    <th>Ritmo Óptimo</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <Zone zone={row.id} description={row.label} color={row.color} />
                        <td>
                            <MainData className="pace-range" data={row.paceRange} color={row.color} />
                            <SecondaryData className="kph-range" data={row.kphRange} />
                        </td>
                        <td>
                            <MainData className="optimal-pace" data={row.optimalPace} color={row.color} />
                            <SecondaryData className="optimal-kph" data={row.optimalKph} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
