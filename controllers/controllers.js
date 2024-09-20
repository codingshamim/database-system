// Dependencies

const comparePassword = require("../helpers/comparePassword");
const hashedPassword = require("../helpers/hashedPassword");
const fs = require("fs");
const lib = require("../rks-database/lib");
const responseObject = require("../utils/responseObject");

// Controllers object
const controllers = {};

controllers.register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    // Check if any required fields are missing
    if (!email.trim() || !name.trim() || !password.trim()) {
      return responseObject(res, 401, {
        ok: false,
        message: "All fields are required!",
      });
    }

    // Hash the password and create a user object
    const hashPassword = await hashedPassword(password);
    const userObject = {
      name,
      password: hashPassword,
      email,
    };

    // Insert the user into the database
    const insertUser = await lib.create(
      process.env.SECRET_DATABASE_LOCATION + "/users/",
      userObject
    );

    // Remove the password from the response
    delete insertUser.data.password;

    // Send success response and return to stop further execution
    return responseObject(res, 200, insertUser);
  } catch (err) {
    // Handle the error and return a response to stop further execution
    return responseObject(res, 500, {
      ok: false,
      message: err.message,
    });
  }
};

controllers.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Read all users from the directory
    const readDirs = await lib.findAll(
      process.env.SECRET_DATABASE_LOCATION + "/users"
    );

    if (!readDirs || readDirs.length === 0) {
      return res.status(404).json({ ok: false, message: "No users found!" });
    }

    // Iterate over the users and compare password and email
    let isExits = null;
    for (const user of readDirs) {
      const isPasswordMatch = await comparePassword(password, user.password);
      if (isPasswordMatch && user.email === email) {
        isExits = user;
        break; // Stop iteration once the user is found
      }
    }

    // If user is not found
    if (!isExits) {
      return res.status(401).json({
        ok: false,
        message: "Invalid email or password!",
      });
    }

    // Remove sensitive info before sending response
    delete isExits.password;

    // Send the successful response with the user data
    return res.status(200).json({
      ok: true,
      message: "Login successful!",
      user: isExits,
    });
  } catch (err) {
    // Handle any errors
    return res.status(500).json({
      ok: false,
      message: err.message,
    });
  }
};

controllers.createDatabase = async (req, res) => {
  try {
    const userId = req.params.id; // get the user id from params
    const body = req.body; // parsing body
    const { databaseName, collectionName } = body; // destructing dbName and collection name
    if (
      databaseName.trim().length === 0 ||
      collectionName.trim().length === 0 // validate the db name and collection name
    ) {
      return responseObject(res, 500, {
        ok: false,
        message: "All filed required!",
      });
    }

    await lib.createFolder(
      process.env.SECRET_DATABASE_LOCATION + "/database",
      userId
    ); // create userId wise folder

    // finally create database
    const createDatabase = await lib.createFolder(
      `${process.env.SECRET_DATABASE_LOCATION}/database/${userId}`,
      databaseName.trim()
    );

    if (createDatabase.ok) {
      const createCollection = await lib.createFolder(
        `${
          process.env.SECRET_DATABASE_LOCATION
        }/database/${userId}/${databaseName.trim()}`,
        collectionName
      );
      if (createCollection) {
        return responseObject(res, 200, {
          ok: true,
          message: "New Database Created Successfully !",
        });
      }
    } else {
      return responseObject(res, 200, {
        ok: false,
        message: "This is already in the database",
      });
    }
  } catch (err) {
    return responseObject(res, 500, {
      ok: false,
      message: err.message,
    });
  }
};

controllers.createCollection = async (req, res) => {
  try {
    const userId = req.params.id;
    const body = req.body;
    const { collectionName, databaseName } = body;
    if (
      collectionName.trim().length === 0 ||
      databaseName.trim().length === 0
    ) {
      return responseObject(res, 500, {
        ok: false,
        message: "All filed required!",
      });
    }
    const databaseArray = fs.readdirSync(
      `${process.env.SECRET_DATABASE_LOCATION}/database/${userId}/${databaseName}`
    );
    const isExist = databaseArray.find((d) => d === collectionName);
    if (isExist) {
      return responseObject(res, 500, {
        ok: false,
        message: "This collection already availible !",
      });
    }
    const response = await lib.createFolder(
      `${process.env.SECRET_DATABASE_LOCATION}/database/${userId}/${databaseName}`,
      collectionName
    );
    if (response.ok) {
      return responseObject(res, 200, {
        ok: true,
        message: "Successfully created new collection",
      });
    }
  } catch (err) {
    return responseObject(res, 500, {
      ok: true,
      message: err.message,
    });
  }
};

controllers.deleteDatabase = async (req, res) => {
  try {
    const { databaseName } = req.body;
    const userId = req.params.id;
    const deleteQuery = await lib.deleteDatabse(
      `${process.env.SECRET_DATABASE_LOCATION}/database/${userId}`,
      databaseName
    );

    if (deleteQuery.ok) {
      return responseObject(res, 200, {
        ok: true,
        message: "successfully deleted database !",
      });
    }
  } catch (err) {
    return responseObject(res, 500, {
      ok: false,
      message: err.message,
    });
  }
};
controllers.deleteCollection = async (req, res) => {
  try {
    const { databaseName, collectionName } = req.body;
    const userId = req.params.id;
    const deleteQuery = await lib.deleteDatabse(
      `${process.env.SECRET_DATABASE_LOCATION}/database/${userId}/${databaseName}`,
      collectionName
    );

    if (deleteQuery.ok) {
      return responseObject(res, 200, {
        ok: true,
        message: "successfully deleted database !",
      });
    }
  } catch (err) {
    return responseObject(res, 500, {
      ok: false,
      message: err.message,
    });
  }
};
module.exports = controllers;
