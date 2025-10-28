export type ZoneId = 'Z1' | 'Z2' | 'Z3' | 'Z4' | 'Z5' | 'Z6';

export type PercentageTableProps = {
    testMeters: number;
    timeSeconds?: number;  // por si se quiere usar otro test diferente a 5'
    kphDigits?: number;    // nº decimales para km/h
}

export interface PercentageStep {
    value: number;
    color: string;
}

export interface ZoneInfo {
    id: ZoneId;
    label: string;
    minPct: number;
    maxPct: number;
    color: string;
}
