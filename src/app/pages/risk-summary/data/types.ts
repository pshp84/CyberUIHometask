export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export interface RiskData {
  name: string;
  ip: string;
  risk: RiskLevel;
}