import pandas as pd

def daily_leads_and_partners(daily_sales: pd.DataFrame) -> pd.DataFrame:
    daily_leads =  daily_sales.groupby(['date_id','make_name']).agg({'lead_id': 'nunique', 'partner_id': 'nunique'}).reset_index()
    daily_leads.columns = ['date_id','make_name','unique_leads','unique_partners']
    return daily_leads