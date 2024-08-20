SELECT customer_id, count(v.visit_id) AS count_no_trans 
  FROM Visits v 
  LEFT JOIN Transactions t 
    ON t.visit_id = v.visit_id 
  WHERE transaction_id IS NULL 
  GROUP BY customer_id;