export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          message: string
          status: 'pending' | 'contacted' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          message: string
          status?: 'pending' | 'contacted' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          message?: string
          status?: 'pending' | 'contacted' | 'completed'
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          created_at: string
          email: string
          subscribed: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          subscribed?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          subscribed?: boolean
        }
      }
    }
  }
}