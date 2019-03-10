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

export const postUpload = async(req, res) => {
    const { 
            body: { title, description },
            file: {path}
        } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
}
export const videoDetail = async(req, res) => {
    console.log(req.params);
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle: "Video Detail", video});
    } catch(error) {
        res.redirect(routes.home);
    }
};
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deletVideo", {pageTitle: "Delete Video"});