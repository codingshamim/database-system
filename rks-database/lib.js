// Dependencies
const fs = require("fs");
// lib for database management
const lib = {};

// create new database folder
lib.createFolder = async (dir, folderName) => {
  try {
    if (!dir) {
      throw new Error("Please Enter your directory name");
    }
    if (!folderName) {
      throw new Error("Please Enter your folder name");
    }
    if (folderName.trim().length === 0) {
      throw new Error("Please Enter your folder name");
    }

    const response = await fs.mkdirSync(`${dir}/${folderName}`, {
      recursive: true,
    });
    if (response) {
      return {
        ok: true,
        message: "New Database Created !",
      };
    } else {
      return {
        ok: false,
        message: "This Folder already have",
      };
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

// create new file for database

lib.create = async (dir, schema, uniqueId) => {
  try {
    if (!dir) {
      throw new Error("Please enter your directory!");
    }
    if (!schema) {
      throw new Error("Please enter your Schema!");
    }

    // convert data schema as a strigify
    const updateSchema = {
      rksId: uniqueId,
      ...schema,
    };
    if (!updateSchema) {
      throw new Error("Something went wrong");
    }
    await fs.writeFileSync(
      `${dir}/${uniqueId}.json`,
      JSON.stringify(updateSchema)
    );
    return {
      ok: true,
      message: "New Data inserted Successfully !",
      data: {
        ...updateSchema,
      },
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

// find all data from database

lib.findAll = async (collectionName) => {
  try {
    const data = [];
    if (!collectionName) {
      throw new Error("Please write your collection name");
    }
    const directory = await fs.readdirSync(collectionName);
    if (!directory) {
      throw new Error("No directory found!");
    }
    directory.forEach((singleDir) => {
      const singleData = fs.readFileSync(
        `${collectionName}/${singleDir}`,
        "utf-8"
      );
      if (!singleData) {
        throw new Error("No single data found !");
      }
      data.push(JSON.parse(singleData));
    });
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

lib.findById = async (dir, findId) => {
  try {
    if (!dir) {
      throw new Error("No directory found");
    }
    if (!findId) {
      throw new Error("No find id found");
    }
    const directories = await fs.readdirSync(dir);
    if (!directories) {
      throw new Error("No directory found");
    }
    const findedDir = directories.find(
      (maindir) => maindir === `${findId}.json`
    );
    if (!findedDir) {
      throw new Error("No directory found");
    }
    const findedData = fs.readFileSync(dir + "/" + findedDir, "utf-8");
    if (!findedData) {
      throw new Error("No data found");
    }
    return JSON.parse(findedData);
  } catch (err) {
    throw new Error(err.message);
  }
};

lib.deleteById = async (dir, fileName) => {
  try {
    if (!dir || !fileName) {
      throw new Error("No file found with this id");
    }
    await fs.unlinkSync(dir + "/" + fileName + ".json");
    return {
      ok: true,
      message: "successfully deleted !",
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

lib.deleteDatabse = async (dir, databaseName) => {
  if (!dir) {
    throw new Error("No file found with this id");
  }
  try {
    if (!dir || !databaseName) {
      throw new Error("No file found with this id");
    }
    await fs.rmSync(dir + "/" + databaseName, { recursive: true, force: true });
    return {
      ok: true,
      message: "successfully deleted !",
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

lib.deleteAll = async (dir) => {
  try {
    const directories = fs.readdirSync(dir);
    if (!directories) {
      throw new Error("no directories found !");
    }
    directories.forEach((mainDir) => {
      fs.unlinkSync(dir + "/" + mainDir);
    });
    return {
      ok: true,
      message: "successfully deleted all !",
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = lib;
