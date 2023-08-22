import pandas as pd


# Solution 1
def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    return pd.DataFrame([{'SecondHighestSalary' : None if len(set(employee['salary'])) < 2 else sorted(set(employee['salary']),reverse = True)[1]}])

# Solution 2
def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    salaries = employee['salary'].drop_duplicates().sort_values(ascending=False)
    if len(salaries) < 2:
        return pd.DataFrame({'SecondHighestSalary': [None]})
    second_highest = salaries.iloc[1]
    return pd.DataFrame({'SecondHighestSalary':[second_highest]})