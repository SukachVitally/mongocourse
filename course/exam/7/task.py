import pymongo

# establish a connection to the database
connection = pymongo.MongoClient("mongodb://localhost")

# get a handle to the school database
db=connection['photo-sharing']
albums = db.albums
images = db.images


images_in_album = []
cursor = albums.aggregate([
    {"$unwind": "$images"}
])
for l in cursor:
    if l['images'] not in images_in_album:
        images_in_album.append(l['images'])

cursor = images.find()
for image in cursor:
    imId = image['_id']
    if image['_id'] not in images_in_album:
        print image
        images.delete_one({'_id': image['_id']})



