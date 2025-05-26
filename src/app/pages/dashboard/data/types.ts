export interface RiskData {
  name: string;
  ip: string;
  risk: 'Low' | 'Medium' | 'High' | 'Critical';
}