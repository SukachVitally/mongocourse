use test
db.grades.aggregate([
    {$unwind: "$scores"},
    {$match: {"scores.type": {$ne: "quiz"}}},
    {
        $group: {
            _id: "$class_id",
            avg_score: {$avg: "$scores.score"}
        }
    },
    {$sort: {avg_score: -1}}
])
