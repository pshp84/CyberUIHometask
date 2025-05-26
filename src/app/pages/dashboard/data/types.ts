export interface RiskData {
  name: string;
  ip: string;
  risk: 'low' | 'medium' | 'high' | 'critical';
}