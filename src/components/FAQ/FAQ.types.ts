export interface Question {
  question: string
  answer: string
}

export interface FAQProps {
  title: string
  items: Question[]
}