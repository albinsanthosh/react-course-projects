import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Debit Card',
        note: '',
        amount: 10500,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 500
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if expense is not found', () => {
    const amount = 500
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});