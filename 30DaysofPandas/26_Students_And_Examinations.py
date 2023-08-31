import pandas as pd

def students_and_examinations(students: pd.DataFrame, subjects: pd.DataFrame, examinations: pd.DataFrame) -> pd.DataFrame:
    student_subjects = students.merge(subjects, how='cross')
    
    exam_group = examinations.groupby(['student_id', 'subject_name']).agg(
        attended_exams=('subject_name', 'count')
    ).reset_index()
    
    result = student_subjects.merge(exam_group, on=['student_id','subject_name'], how='left').sort_values(by = ['student_id', 'subject_name'])
    
    return result.fillna(0)[['student_id', 'student_name', 'subject_name', 'attended_exams']]