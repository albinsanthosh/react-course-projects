import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expenses', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});