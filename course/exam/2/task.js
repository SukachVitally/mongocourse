use enron
db.messages.aggregate([
    {$unwind: "$headers.To"},
    {$project:
        {
            _id: 0,
            form: "$headers.From",
            to: "$headers.To"
        }
    },
    {$group:
        {
            _id: { from: "$form", to: "$to"},
            count: { $sum: 1 }
        }
    },
    {$sort:
        {
            count: -1
        }
    }
])
