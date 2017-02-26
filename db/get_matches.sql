SELECT * FROM seen as seena
INNER JOIN seen
AS  seenb
on seena.user_id = seenb.swipee
and seenb.user_id = seena.swipee
inner join pet_data
	on pet_data.uniq_id = seenb.user_id
where seena.user_id = $1
and seenb.liked = true
and seena.liked = true

