
export function renderAllPostPage(posts) {
    return (
        <div>
            {posts.map((cur_post, index) => (
                <div style={{ marginLeft: "30%", marginRight: "30%"}}>
                    <div style={{ border: "solid" }}>
                        <h1>
                            Post Title: {cur_post.postTitle}
                        </h1>
                    </div>
                    <div>
                        <p>
                            Post Contents: {cur_post.postContents}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

//Given an array of posts, and an index, it should render that post
export function renderSinglePostFromArray(posts, index) {
    return renderSinglePost(posts[index]);
}

//Given a single post, render it
export function renderSinglePost(post){
    return (
        <div style={{ marginLeft: "30%", marginRight: "30%"}}>
            <div style={{ border: "solid" }}>
                <h1>
                    Post Title: {post.postTitle}
                </h1>
            </div>
            <div>
                <p>
                    Post Contents: {post.postContents}
                </p>
            </div>
        </div>
    )
}