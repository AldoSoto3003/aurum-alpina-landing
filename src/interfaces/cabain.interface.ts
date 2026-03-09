export interface FinancingPlan {
  label: string
  amount: number
  note?: string
}

export interface Cabin {
  slug: string
  name: string
  description: string
  price: number
  size: string
  images: string[]
  distribution: string [],
  equipment: string [],
  financing: {
    downPayment: number
    plans: FinancingPlan[]
    invoiceFee: number
  }
}