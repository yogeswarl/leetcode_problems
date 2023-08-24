import pandas as pd

def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    scores['rank'] = scores['score'].rank(method='dense',ascending=False)
    return scores.sort_values(by='score',ascending=False)[['score','rank']]

# Solution 2
def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    df = scores.sort_values(by='score',ascending=False)
    df['rank'] = df['score'].rank(method='dense',ascending=False)
    return df[['score','rank']]