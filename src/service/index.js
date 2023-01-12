import axios from "axios";

const fetchStream = async () => {
    const job = await axios({
        url: "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json",
        method: "GET",
    });
    return job?.data ?? [];
};

export default fetchStream;