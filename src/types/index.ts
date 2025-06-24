export interface SoccerAnalyticsData {
  id: number;
  value: number;
  label: string;
  percentage: number;
  timestamp: string;
}

export interface CalculatedRow extends SoccerAnalyticsData {
  calculatedValue: number;
  analyticsResult?: number;
}

export interface DCAWeightConfig {
  rollN: number;
  alpha: number;
  minWeight: number;
}

export interface PriceData {
  date: string;
  price: number;
}
