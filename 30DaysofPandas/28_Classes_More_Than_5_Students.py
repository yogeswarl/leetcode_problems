import pandas as pd

def find_classes(courses: pd.DataFrame) -> pd.DataFrame:
    grouped =  courses.groupby('class',as_index=False).count().reset_index()
    return grouped[grouped['student'] >= 5][['class']]
    # solution 2
    # return courses.groupby('class').filter(lambda x: len(x) > 4)[['class']].drop_duplicates()
