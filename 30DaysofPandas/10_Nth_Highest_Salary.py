import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    unique_items = employee['salary'].drop_duplicates()
    sorted_items = unique_items.sort_values(ascending=False)
    if N > len(sorted_items):
        return pd.DataFrame({'Nth Highest Salary': [None]})
    nth_highest = sorted_items.iloc[N - 1]
    return pd.DataFrame({'Nth Highest Salary': [nth_highest]})