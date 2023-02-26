import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  console.log(req.body);
  let data = await CRUDService.createNewUser(req.body);
  return res.render("display-CRUD.ejs", {
    dataTable: data,
  });
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log(data);
  return res.render("display-CRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);

    return res.render("editCRUD", {
      userData,
    });
  } else {
    return res.send("Users not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allData = await CRUDService.updateUserData(data); //
  return res.render("display-CRUD.ejs", {
    dataTable: allData,
  });
};

let delCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    
    return res.render("display-CRUD.ejs", {
      dataTable: await CRUDService.deleteUserById(userId),
    });
  } else {
    return res.send('user not found')
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  delCRUD,
};
