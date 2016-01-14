import pymongo

# establish a connection to the database
connection = pymongo.MongoClient("mongodb://localhost")

# get a handle to the school database
db=connection.students
grades = db.grades

for i in xrange(0, 200):
    print i
    cursor = grades.find({'student_id': i, 'type': 'homework'}).sort('score', pymongo.ASCENDING).limit(1)
    for doc in cursor:
        print doc
        grades.delete_one({'_id': doc['_id']})
