export interface Client {
  id: number | string
  description?: string
  company?: {
    name: string
    logo: string
  }
}
