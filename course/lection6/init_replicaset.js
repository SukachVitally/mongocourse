


config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27016"},
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"} ]
};

rs.initiate(config);
rs.status();