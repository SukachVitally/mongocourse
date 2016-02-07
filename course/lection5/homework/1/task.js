use blog
db.posts.aggregate([
    {$project: {comments: 1}},
    {$unwind: "$comments"},
    {$project: {author: "$comments.author"}},
    {
        $group: {
            _id: "$author",
            count: {$sum: 1}
        }
    },
    {$sort: {count: -1}}
])