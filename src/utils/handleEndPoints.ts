import md5 from "md5";

const ts = +new Date();
const apikey = process.env.REACT_APP_API_KEY;
const pvKey = process.env.REACT_APP_PRIVATE_KEY || "";

const hash = md5(ts + pvKey + apikey);

const generateAuth = (): String => `?ts=${ts}&apikey=${apikey}&hash=${hash}`;

export default generateAuth;
