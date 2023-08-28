import pandas as pd

def count_salary_categories(accounts: pd.DataFrame) -> pd.DataFrame:
    
    Low_Salary = accounts[accounts['income']<20000].shape[0]
    Average_Salary = accounts[accounts['income'].between(20000,50000)].shape[0]
    High_Salary = accounts[accounts['income']>50000].shape[0]
    return pd.DataFrame({'category':['Low Salary','Average Salary','High Salary'],
    'accounts_count':[Low_Salary,Average_Salary,High_Salary]})