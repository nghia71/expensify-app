import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <p>
            Viewing {props.expenses ? props.expenses.length : 0} totalling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}
        </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}; 

export default connect(mapStateToProps)(ExpensesSummary);
