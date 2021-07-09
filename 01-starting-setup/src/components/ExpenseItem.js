import './ExpenseItem.css';

function ExpenseItem() {
   return(
   <div className="expense-item">
    <h2> August 2021</h2>
    <div className="expense-item_description">
        <h1>Car Insurance </h1>
        <div className="expense-item_price">28.99$</div>
    </div>

    </div>
   );
}

export default ExpenseItem;