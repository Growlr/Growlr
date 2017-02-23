select * from 
seen as A
inner join
seen as B
on A.user_id = B.swipee
and B.user_id = A.swipee
inner join pet_data 
	on uniq_id = B.user_id
where A.user_id = 3 and B.liked = true and A.liked = true
