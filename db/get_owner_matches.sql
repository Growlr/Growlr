SELECT * FROM seen as seena
INNER JOIN seen
AS  seenb
on seena.user_id = seenb.swipee
and seenb.user_id = seena.swipee
inner join user_table
	on user_table.id = seenb.user_id
where seena.user_id = $1
and seenb.liked = true
and seena.liked = true

