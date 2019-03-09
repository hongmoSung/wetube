import routes from "../routes"
import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", {pageTitle: "home", videos});
    } catch(error) {
        console.log(error);
        res.render("home", {pageTitle: "home", videos: [] });
    }
}

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    console.log(req.query.term);
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To do: Upload and save Video
    res.redirect(routes.videoDetail(3332));
}
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deletVideo", {pageTitle: "Delete Video"});