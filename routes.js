// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// user
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHAGE_PASSWORD = "/change-password";

// Vedios
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    users_details: USER_DETAIL,
    edit_profile: EDIT_PROFILE,
    change_password: CHAGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    video_detail: VIDEO_DETAIL,
    edit_video: EDIT_VIDEO,
    delete_video: DELETE_VIDEO
};

export default routes;