import pymongo

# establish a connection to the database
connection = pymongo.MongoClient("mongodb://localhost")

# get a handle to the school database
db=connection.school
students = db.students

items = students.find()

for item in items:
    new_scores = []
    is_first = True
    scores = item['scores']
    scores.sort(key=lambda x: x['score'])
    for score in scores:
        if score['type']  == 'homework' and is_first:
            is_first = False
            continue
        new_scores.append(score)
    print new_scores
    students.update_one({'_id': item['_id']},  {'$set': {'scores': new_scores}})

