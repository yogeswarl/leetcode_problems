-- solution 1 using Data Diff
SELECT w1.id FROM weather w1
INNER JOIN weather w2
ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE w1.temperature > w2.temperature


-- solution 2 using LAG
WITH PreviousWeatherData AS
(
  SELECT
    id,
    recordDate,
    temperature,
    LAG(temperature, 1) OVER (ORDER BY recordDate) AS previousTemperature
    LAG(recordDate, 1) OVER (ORDER BY recordDate) AS previousRecordDate
  FROM weather
)
SELECT id
FROM PreviousWeatherData
WHERE temperature > previousTemperature
AND recordDate = DATE_ADD(previousRecordDate, INTERVAL 1 DAY)



-- Solution 3 with Subquery
SELECT w1.id
FROM Weather w1
WHERE w1.temperature > (
  SELECT 
    w2.temperature
  FROM 
    weather w2
  WHERE 
    w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
);