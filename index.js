

const axios = require("axios");
const express = require("express");
const app = express();
const port = 3001;
const URL = "https://www.episodate.com/api/"

app.use(express.static('public'));

app.get("/",(req, res) =>{});




app.get("/search/:searchStr/:page", async (req, res) => {
    console.log(req.params)
    const searchResults=await search(req.params.searchStr, req.params.page);
    res.send(searchResults)
    // res.send(searchResults.json)
    // await res.send(searchResults);
    // //let episodateShow = await axios.get(URL+show);
    // let URL2 = `${URL}/search?q=${req.params.searchStr}&page=${page}`;
    // console.log("URL for axios: "+URL);
    // const response = await axios.get(URL2);
    // console.log(response);
});

const search =async(searchStr,page = 1)=> {
    // console.log(page)
    const episodateSearchQuery=URL+`search?q=${searchStr}&page=${page}`;
    console.log(episodateSearchQuery);
    const response = await axios.get(episodateSearchQuery);
    // console.log(response.data.tv_shows);
    let returnObj = {}
    response.data.page < response.data.pages 
    ? returnObj = {nextPage: response.data.page+1, data: response.data.tv_shows}
    : returnObj = {nextPage: 0, data: response.data.tv_shows}
    return returnObj;
}


app.listen(port)