//Implement Mongo (or other database) Later
var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "finalproj";
const client = new MongoClient(url);
const db = client.db(dbName);

app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
app.listen(port, () => {
  console.log("App listening at http://%s:%s", host, port);
});

app.get("/getAllPosts", async (req, res) => {
  await client.connect();
  console.log("Node connected successfully to GET MongoDB");
  const query = {};
  const results = await db
    .collection("blogposts")
    .find(query)
    .limit(100)
    .toArray();
  console.log(results);
  res.status(200);
  res.send(results);
});

app.post("/post", async (req, res) => {
  //console.log(req);
  console.log(req.get('obj_postTitle'));
  var myobj = { id: Number(req.get('obj_id')), postTitle: req.get('obj_postTitle'), author: req.get('obj_author'),
                date: req.get('obj_date'), date_published: req.get('obj_date_published'), genres:  req.get('obj_genres'),
                tags: req.get('obj_tags'), postContents: req.get('obj_postContents') };
  await client.connect();
  console.log("Node connected successfully to POST MongoDB");
  const query = {};
  const results = await db
    .collection("blogposts")
    .insertOne(myobj);
  console.log(results);
  res.status(200);
  res.send(results);
});

//PUT
app.put("/api/update", async (req, res) => {
  await client.connect();
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  console.log(keys);
  const id = Number(values[0]); // id
  const title = values[1]; // name
  const author = values[2]; // price
  const date = values[3]; // description
  const date_published = values[4]; // category
  const genres = values[5]; // Image
  const tags = values[6]; // Rating
  const postContents = values[7];
  const newDocument = {
    id:id,
    postTitle:title,
    author: author,
    date:date,
    date_published:date_published,
    genres:genres,
    tags: tags,
    postContents: postContents
  };
  console.log("--------------------");
  console.log(newDocument);
  console.log("--------------------");
  const results = await db.collection("blogposts")
  .replaceOne({id: Number(values[0])},newDocument);
  res.status(200);
  res.send(results);
});

// DELETE
app.delete("/api/delete", async (req, res) => {
  await client.connect();
  console.log("Delete Started");
  const values = Object.values(req.body);
  const id = values[0];
  const query = {id: Number(id)};
  console.log(query);
  const result = await db.collection("blogposts").deleteOne(query);
  res.send(result);
});
