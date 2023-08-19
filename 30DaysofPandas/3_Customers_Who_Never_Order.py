# solution 1
import pandas as pd

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    df = customers[~customers['id'].isin(orders['customerId'])]
    return df[['name']].rename(columns = {'name':'Customers'})

# Solution 2
def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    customers_orders = customers.merge(orders,how='left',left_on='id',right_on='customerId')
    mask = customers_orders['customerId'].isna()
    result = customers_orders[customers_orders['customerId'].isna()]
    return result[['name']].rename(columns = {'name':'Customers'})