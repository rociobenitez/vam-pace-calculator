export const TEST_SECONDS = 300; // 5 minutos

// --- Base en km/h y seg/km desde test ---

// Velocidad base (km/h) desde metros del test en 'timeSeconds'
export function baseKphFromTest(distanceMeters: number, timeSeconds: number = TEST_SECONDS): number {
  if (distanceMeters <= 0) throw new Error("La distancia debe ser mayor que cero.");
  if (timeSeconds <= 0) throw new Error("El tiempo debe ser mayor que cero.");
  return (distanceMeters / timeSeconds) * 3.6;
}

// Ritmo base (seg/km) a 100% VAM desde metros del test
export function basePaceSecondsFromTest(distanceMeters: number, timeSeconds: number = TEST_SECONDS): number {
  if (distanceMeters <= 0) throw new Error("La distancia debe ser mayor que cero.");
  if (timeSeconds <= 0) throw new Error("El tiempo debe ser mayor que cero.");
  const v_mps = distanceMeters / timeSeconds; // m/s
  return 1000 / v_mps; // seg/km
}

// --- Formateos ---
// Formateo mm:ss
export function paceStrFromSeconds(totalSeconds: number): string {
  const s = Math.round(totalSeconds); // la ref redondea a seg
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

export function paceStrFromKph(kph: number): string {
  if (kph <= 0) throw new Error("La velocidad debe ser mayor que cero.");
  const secPerKm = 3600 / kph;
  return paceStrFromSeconds(secPerKm);
}

// ---- % sobre velocidad y factores de la referencia ----

// % aplicado sobre km/h
export function kphAtPercent(baseKph: number, percent: number): number {
  return baseKph * percent;
}

// Factor redondeado a 2 decimales
export function factorFromPctRounded(pct: number): number {
  return Number((1 / pct).toFixed(2));
}


/**
 * Cálculo de zonas replicando la referencia:
 * - Se trabaja con RITMO base (seg/km) y se multiplica por factores 1/pct redondeados a 2 decimales.
 * - Óptimo = media aritmética de ritmos (en segundos), redondeado a segundo.
 */
export function calculateZones(
  baseSecPerKm: number,
  minPct: number,
  maxPct: number
): { paceFast: string; paceSlow: string; paceOptimal: string; kphMin: number; kphMax: number; kphOptimal: number } {
  const slowFactor = factorFromPctRounded(minPct); // más lento
  const fastFactor = factorFromPctRounded(maxPct); // más rápido

  const sSlow = baseSecPerKm * slowFactor;
  const sFast = baseSecPerKm * fastFactor;
  const sOpt  = (sSlow + sFast) / 2;

  return {
    paceFast: paceStrFromSeconds(sFast),
    paceSlow: paceStrFromSeconds(sSlow),
    paceOptimal: paceStrFromSeconds(sOpt),
    kphMin: 3600 / sSlow,
    kphMax: 3600 / sFast,
    kphOptimal: 3600 / sOpt,
  };
}

/**
 * Ritmo por % para la tabla de porcentajes (lógica exacta de la referencia):
 * - targetSpeed = vam_mps * pct
 * - timePerKm = 1000 / targetSpeed = baseSecPerKm / pct
 */
export function calculatePacesAtPercentages(
  baseSecPerKm: number,
  percentSteps: number[]
): { percent: number; pace: string }[] {
  return percentSteps.map((pct) => ({
    percent: pct,
    pace: paceStrFromSeconds(baseSecPerKm / pct),
  }));
}


// Velocidad por % (para la columna km/h de la tabla de porcentajes)
export function percentagesFromBaseKph(
  baseKph: number,
  percentSteps: number[]
): { percent: number; kph: number }[] {
  return percentSteps.map((pct) => ({
    percent: pct,
    kph: kphAtPercent(baseKph, pct),
  }));
}