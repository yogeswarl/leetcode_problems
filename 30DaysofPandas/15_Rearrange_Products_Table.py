import pandas as pd

def rearrange_products_table(products: pd.DataFrame) -> pd.DataFrame:
    melted_df = pd.melt(products, id_vars=['product_id'], value_vars=['store1', 'store2', 'store3'],var_name='store', value_name='price')

    return melted_df.dropna()