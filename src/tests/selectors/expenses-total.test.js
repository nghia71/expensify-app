import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should sum up zero expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should sum up one expense', () => {
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
});

test('should sum up all expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
});
