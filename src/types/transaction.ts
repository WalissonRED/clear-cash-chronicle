export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  type: TransactionType;
  category: string;
  amount: number;
  date: string;
  description?: string;
}

export const INCOME_CATEGORIES = [
  "Salary",
  "Freelance",
  "Investment",
  "Business",
  "Gift",
  "Other Income",
];

export const EXPENSE_CATEGORIES = [
  "Groceries",
  "Rent",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Healthcare",
  "Shopping",
  "Dining",
  "Education",
  "Other Expense",
];
