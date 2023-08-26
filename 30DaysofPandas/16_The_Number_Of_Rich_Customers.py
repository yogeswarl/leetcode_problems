import pandas as pd

def count_rich_customers(store: pd.DataFrame) -> pd.DataFrame:
    rich_customers = store[store['amount'] > 500]
    num_rich_customers = rich_customers['customer_id'].nunique()
    return pd.DataFrame({'rich_count':[num_rich_customers]})