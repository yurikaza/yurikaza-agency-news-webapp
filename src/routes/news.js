const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");
require("dotenv").config();

newsRouter.get("", async (req, res) => {
  try {
    const newsApı = await axios.get(
      `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${process.env.API_KEY}`
    );
    res.render("index", { articles: newsApı.data.news });
  } catch (err) {
    if (err.response) {
      res.render("index", { articles: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      res.render("index", { articles: null });
      console.log(err.requiest);
    } else {
      res.render("index", { articles: null });
      console.error("Error", err.message);
    }
  }
});

newsRouter.get("/sport", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://api.currentsapi.services/v1/search?language=en&category=sports&apiKey=${process.env.API_KEY}`
    );
    res.render("../views/categories/sport", {
      categories: newsAPI.data.news,
    });
  } catch (err) {
    if (err.response) {
      res.render("sport", { article: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.requiest) {
      res.render("sport", { article: null });
      console.log(err.requiest);
    } else {
      res.render("sport", { article: null });
      console.error("Error", err.message);
    }
  }
});

newsRouter.get("/finance", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://api.currentsapi.services/v1/search?language=en&category=finance&apiKey=${process.env.API_KEY}`
    );
    res.render("../views/categories/finance", {
      categories: newsAPI.data.news,
    });
  } catch (err) {
    if (err.response) {
      res.render("finance", { article: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.requiest) {
      res.render("finance", { article: null });
      console.log(err.requiest);
    } else {
      res.render("finance", { article: null });
      console.error("Error", err.message);
    }
  }
});

newsRouter.get("/technology", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://api.currentsapi.services/v1/search?language=en&category=technology&apiKey=${process.env.API_KEY}`
    );
    res.render("../views/categories/technology", {
      categories: newsAPI.data.news,
    });
  } catch (err) {
    if (err.response) {
      res.render("technology", { article: null });
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.requiest) {
      res.render("technology", { article: null });
      console.log(err.requiest);
    } else {
      res.render("technology", { article: null });
      console.error("Error", err.message);
    }
  }
});

newsRouter.get("/about", (req, res) => {
  res.render("about");
});

newsRouter.get("/contactUs", (req, res) => {
  res.render("contactUs");
});

module.exports = newsRouter;
