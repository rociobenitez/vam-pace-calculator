import type { PercentageStep, ZoneInfo } from './types';

export const PERCENT_STEPS = [
    { value: 0.80, color: '#ADFF00' },
    { value: 0.85, color: '#FFDC00' },
    { value: 0.90, color: '#FF7C00' },
    { value: 0.95, color: '#FF0063' },
    { value: 1.00, color: '#FF0063' },
    { value: 1.05, color: '#FF0048' },
    { value: 1.10, color: '#FF0048' }
] as const satisfies readonly PercentageStep[];

export const DEFAULT_ZONES: readonly ZoneInfo[] = [
  {
    id: 'Z2',
    label: 'Regenerativo',
    minPct: 0.50,
    maxPct: 0.60,
    color: '#00C2FF'
  },
  {
    id: 'Z3',
    label: 'Capacidad Aeróbica',
    minPct: 0.60,
    maxPct: 0.70,
    color: '#00FFF7'
  },
  {
    id: 'Z4',
    label: 'Umbral',
    minPct: 0.70,
    maxPct: 0.80,
    color: '#F181D8'
  },
];

