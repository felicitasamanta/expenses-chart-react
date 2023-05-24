import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesFilter } from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ items }) => {
  const [filter, setFilter] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export { Expenses };
