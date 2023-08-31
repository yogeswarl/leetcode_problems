import pandas as pd

def replace_employee_id(employees: pd.DataFrame, employee_uni: pd.DataFrame) -> pd.DataFrame:
    new_tab = employees.merge(employee_uni,how='left')
    return new_tab[['unique_id','name']]