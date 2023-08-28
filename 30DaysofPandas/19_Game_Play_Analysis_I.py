import pandas as pd

def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    return activity.groupby(['player_id'],as_index=False)['event_date'].min().rename(columns={'event_date':'first_login'})