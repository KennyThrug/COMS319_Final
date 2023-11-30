
export function renderPostPage(post) {
    //Change to a get from the database API
    return (
        <div>
            <br></br><br></br>
            {post.map((cur_post, index) => (
                <div style={{ marginLeft: "30%", marginRight: "30%", }}>
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