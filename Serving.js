var express = require("express");
var app = express();
var path = require("path");
app.use(express.json()); // converts frontend data into json format
const User = require("./models/user");
const Turf = require("./models/turf");
const methodOverride = require("method-override");

var mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb+srv://Ratan:iDCGun4vx9qoT3FJ@cluster0.wzcoulj.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
  app.use(express.static(__dirname));

// app.get("/", function (req, res) {
//   res.status(200).sendFile(path.join(__dirname, "index.html")); // Here after dirname their should directory name if any . In this not directory name required
// });

// app.get("/signup", function (req, res) {
//   res.status(200).sendFile(path.join(__dirname, "signup.html")); // Here after dirname their should directory name if any . In this not directory name required
// });

// app.get("/success", function (req, res) {
//   res.status(200).sendFile(path.join(__dirname, "success.html")); // Here after dirname their should directory name if any . In this not directory name required
// });

app.get("/search_data", async function (req, res) {
  const { name, location } = req.query;
  console.log(name, location);
  // const data1 = await Turf.find({ name: name });
  const data = await Turf.find({ location: location });
  console.log(data);
  res.render("booking/display",{data})
  //   const newLoc = new Turf({ name, location });
  //   await newLoc.save();
  //   res.render("<h1>Hello</h1>");
});

// app.listen(3000, function () {
//   console.log("we are listening at port 3000");
// });

// // Backend Mai data enter lane ka code

// let user = {};
// app.get("/user", (req, res) => {
//   let user = new usermodel({
//     name: "Aarush Wasnik",
//     email: "def@gmail.com",
//     password: "1234",
//     confirmpassword: "1234",
//   });
//   // let data = usermodel.create(user);
//   user.save();
//   console.log(user);
//   res.status(200).send(user);
// });

// app.post("/user", (req, res) => {
//   res.status(200);
//   console.log(req.body); // terminal/console mai print hota hai
//   user = req.body; // get mai prints karwata hai data of users -> data post se data lena hai phirr get use karna hai
//   res.send({
//     Message: "data send successfully",
//     user: req.body,
//   });
// });
// // update data in user's object. Here object is user
// app.patch("/user", (req, res) => {
//   req.status(200);
//   console.log("req.body -> data updated", req.body);
//   let datatobeupdated = req.body;

//   for (key in req.body) {
//     user[key] = datatobeupdated[key];
//   }
//   res.send({
//     Message: "Data updated successfully",
//   });
// });

// // delete the data of user obj
// app.delete("/user", (req, res) => {
//   res.status(200);
//   user = {};
//   res.send({
//     Message: "Data is delted successfully",
//   });
// });

// //parameters

// app.get("/user/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send("user id recevied successfully");
// });

// app.get("/user/:Name", (req, res) => {
//   console.log(req.params.Name);
//   //console.log(req.params);
//   res.send("user Name recevied successfully");
// });

// Authenication schema
// create user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// const User = mongoose.model('User', userSchema);

// set up body parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// serve registration form
app.get('/', (req, res) => {
  res.render('booking/index');
});

app.get('/signup', (req ,res)=>{
  res.render('booking/signup');
})

// handle registration form submission
app.post('/new', async  (req, res) => {
  // validate form data

  // create new user and save to MongoDB
const {password,cpassword}=req.body
const newuser=new User(req.body)

  if (password==cpassword){
  await newuser.save();
  res.redirect('/success')
 }
});

app.get('/success' ,(req,res)=>{
  res.render('booking/success')
})

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
