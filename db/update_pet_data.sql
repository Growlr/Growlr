UPDATE pet_data
set img_link= $1,
pet_id = $2,
gender = $3,
breed = $4,
color = $5,
age = $6,
description = $7,
pet_name = $8
where uniq_id = $9