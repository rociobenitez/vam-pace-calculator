import { useMemo } from 'react';
import { MainData } from './MainData.tsx';
import { PERCENT_STEPS } from '../../vam/constants.ts';
import type { PercentageTableProps } from '../../vam/types.ts';
import {
  basePaceSecondsFromTest,
  baseKphFromTest,
  kphAtPercent,
  paceStrFromSeconds,
  TEST_SECONDS,
} from '../../vam/math';

export const PercentageTable = ({
    testMeters,
    timeSeconds = TEST_SECONDS,
    kphDigits = 1,
}: PercentageTableProps) => {
    const baseSec = useMemo(
        () => (testMeters > 0 ? basePaceSecondsFromTest(testMeters, timeSeconds) : 0),
        [testMeters, timeSeconds]
    );
    const baseKph = useMemo(
        () => (testMeters > 0 ? baseKphFromTest(testMeters, timeSeconds) : 0),
        [testMeters, timeSeconds]
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>%</th>
                    <th>Ritmo (min/km)</th>
                    <th>Velocidad (km/h)</th>
                </tr>
            </thead>
            <tbody>
                {PERCENT_STEPS.map(( { value, color }) => {
                    const pace = baseSec > 0 ? paceStrFromSeconds(baseSec / value) : '—:—';
                    const kph  = baseKph > 0 ? kphAtPercent(baseKph, value) : 0;
                    const pctLabel = `${Math.round(value * 100)}%`;

                    return (    
                    <tr key={value}>
                        <td>
                            <MainData 
                                className='percentage'
                                data={pctLabel} 
                                color={color} />
                        </td>
                        <td>
                            <MainData 
                                className='pace'
                                data={pace}
                                color={color} />
                        </td>
                        <td>
                            <MainData
                                className='kph'
                                data={`${kph.toFixed(kphDigits)}`}
                                color={color}
                             />
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
