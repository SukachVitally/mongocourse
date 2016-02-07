use test
db.zips.aggregate([
    {$match: {$or: [{state: "CA"}, {state: "NY"}]}},
    //{$match: {$or: [{state: "CT"}, {state: "NJ"}]}},
    {$match: {pop: {$gt: 25000}}},
    {$group:
        {
            _id: 0,
            population: {$avg: "$pop"}
        }
    }
])
