
export function renderPostPage() {
    let post = placeholder_posts()[0];
    return (
        <div>
            <div style={{ border: "solid"}}>
                Post Title: {post.postTitle}
            </div>
            <div>
                Post Contents: {post.postContents}
            </div>
        </div>
    )
}

//This needs to be deleted before deployment
function placeholder_posts() {
    return [
        {
            id: 0,
            postTitle: "Placeholder Post Title",
            tags: [
                "Fantasy",
                "TestPost",
                "Dragons"
            ],
            postContents: (
                <div>
                    This is a post that is really long, and is not actually real. I don't know what to do here. Ahhhhhhhhh
                    <img src="https://robohash.org/Kenny"></img>
                    That was an Inline Image, I hope it works
                </div>
            )
        }
    ]
}