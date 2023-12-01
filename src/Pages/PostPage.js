
export function renderAllPostPage(posts) {
    return (
        <div>
            <br></br><br></br><br></br><br></br>
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

//Should be a single post, not all posts
export function renderSinglePost(posts, index) {
    return (
        <div style={{ marginLeft: "30%", marginRight: "30%"}}>
                    <br></br><br></br><br></br><br></br>
            <div style={{ border: "solid" }}>
                <h1>
                    Post Title: {posts[index].postTitle}
                </h1>
            </div>
            <div>
                <p>
                    Post Contents: {posts[index].postContents}
                </p>
            </div>
        </div>
    )
}