export type RiskLevel = 'low' | 'medium' | 'high'

export type ScamAnalysis = {
  id: number
  message: string
  type: string
  asksForMoney: number
  asksForClick: number
  pressure: number
  risk: RiskLevel
  createdAt: string
}

export type ScamAnalysisList = {
  items: ScamAnalysis[]
  total: number
}