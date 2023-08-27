import pandas as pd

def food_delivery(delivery: pd.DataFrame) -> pd.DataFrame:
    same_day = delivery[delivery["order_date"] == delivery["customer_pref_delivery_date"]]
    percentage = round(((same_day.shape[0] / delivery.shape[0]) * 100),2)
    return pd.DataFrame({"immediate_percentage":[percentage]})