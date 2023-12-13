
export function renderAllPostPage(posts) {
    return (
        <div>
            {posts.map((cur_post, index) => (
                <div>
                    {renderSinglePost(cur_post)}
                </div>
            ))}
        </div>
    )
}

//Given an array of posts, and an index, it should render that post
export function renderSinglePostFromArray(posts, index) {
    return renderSinglePost(posts[index]);
    //possibly a way to render comments as well here
}

//Given a single post, render it
export function renderSinglePost(post){
    return (
        <div style={{ marginLeft: "30%", marginRight: "30%"}}>
            <div style={{ border: "solid" }} className="columns-2">
                <h1>
                    Post Title: {post.postTitle} (ID: {post.id})
                </h1>
                <h2>
                    Author: {post.author}
                </h2>
            </div>
            <div className="columns-2">
                <h2>
                    Date Published: {post.date_published}
                </h2>
                <h3>
                    Date of Post: {post.date}
                </h3>
            </div>
            <div>
                <p>
                    Post Contents: {post.postContents}
                </p>
            </div>
        </div>
    )
}