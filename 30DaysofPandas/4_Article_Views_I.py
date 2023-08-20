import pandas as pd

def article_views(views: pd.DataFrame) -> pd.DataFrame:
    views = views[views.author_id == views.viewer_id]
    unique_authors = views['author_id'].unique()
    unique_authors = sorted(unique_authors)
    return pd.DataFrame({'id':unique_authors})