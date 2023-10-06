const url = 'http://localhost:6969/posts';

const getPost = async (postId, userToken) => {
    const the_url = url + `/${postId}`;
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${userToken}`,
            "Content-Type": "application/json;charset=UTF-8",
        },
    };

    try {
        const response = await fetch(the_url, options);

        if (!response.ok) {
            console.error('Failed to fetch post:', response.statusText);
            return null;
        }

        const data = await response.json();
        return data['post'];
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

const getPostComments = async (postId, userToken) => {
    const the_url = url + `/${postId}/comments`;
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${userToken}`,
            "Content-Type": "application/json;charset=UTF-8",
        },
    };

    try {
        const response = await fetch(the_url, options);

        if (!response.ok) {
            console.error('Failed to fetch post:', response.statusText);
            return null;
        }

        const data = await response.json();
        return data['post_comments'];
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

export { getPost, getPostComments};
