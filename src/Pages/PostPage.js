
export function renderPostPage() {
    //Change to a get from the database API
    let post = placeholder_posts();
    return (
        <div>
            {post.map((cur_post, index) => (
                <div>
                    <div style={{ border: "solid" }}>
                        Post Title: {cur_post.postTitle}
                    </div>
                    <div>
                        Post Contents: {cur_post.postContents}
                    </div>
                </div>
            ))}
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
                    This is a post that is really long, and is not actually real. I don't know what to do here. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    <img src="https://robohash.org/Kenny"></img>
                    That was an Inline Image, I hope it works  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </div>
            )
        },
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
                    This is a second post, which should show up
                    <img style={{float: "left"}} src="https://robohash.org/Ked"></img>
                    That was an Inline Image, It seems to work
                </div>
            )
        },
    ]
}