use test
db.zips.aggregate([
    {$project:
        {
	        first_char: {$substr : ["$city",0,1]},
            pop: 1
        }
    },
    {$match: {$and: [{first_char: {$gte: "0"}},{first_char: {$lte: "9"}}]}},
    {$group:
        {
            _id: 0,
            population: {$sum: "$pop"}
        }
    }
])
