
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
}

//Given a single post, render it
export function renderSinglePost(post) {
    let formatted_post = convertPost(post.postContents);
    return (
        <div style={{ marginLeft: "15%", marginRight: "25%" }}>
            <div> {/*Post Div*/}
                <div style={{ border: "solid" }} className="columns-2">
                    <h1>
                        Post Title: {post.postTitle}
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
                    <h3>Genres: {post.genres}</h3>
                    <h3>Tags: {post.tags}</h3>
                </div>
                <div>
                    {formatted_post.map(post_piece => interpretFormattedPost(post_piece))}
                </div>
            </div>
        </div>
    )
}

function interpretFormattedPost(formatted_post){
    if(formatted_post.type == "paragraph"){
        return (
            <p style={{display: "inline"}}>
                {formatted_post.contents}
            </p>
        )
    }
    if(formatted_post.type == "image"){
        return (
            <img src={formatted_post.contents}></img>
        )
    }
    if(formatted_post.type == "newline"){
        return (<br></br>)
    }
    if(formatted_post.type == "bolded"){
        return (
        <p style={{display: "inline"}}>
            <strong>
                {formatted_post.contents}
            </strong>
        </p>
        )
    }
}

//Takes a post and converts it into a format that is better rendered
//This is kinda a hard function to parse, so feel free to ask me if you need lmao.
//Essentially it is given a raw text string, and converts it to a group of arrays with information to be interpreted by interpretFormattedPost (above this function)
function convertPost(post){
    let formatted_post = [];
    let current_string = "";
    //Flags to say if you are currently in a bolded block or not
    let in_image = false;
    let in_bold = false;
    for(let i = 0; i < post.length;i++){
        //If it finds a newline
        if(post[i] == "\\" && post[i+1] == "n"){
            formatted_post.push({
                type: "paragraph",
                contents: current_string
            })
            current_string = "";
            i++;
            formatted_post.push({
                type: "newline",
                contents: ""
            })
        }
        //If an image is started (checking for escape character)
        else if(post[i] == '<' && (i == 0 || post[i-1] != "\\")){
            formatted_post.push({
                type: "paragraph",
                contents: current_string
            })
            current_string = "";
            in_image = true;
        }
        //If an image is ended
        else if(in_image == true && post[i] == '>' && (i == 0 || post[i-1] != "\\")){
            formatted_post.push({
                type: "image",
                contents: current_string
            })
            current_string = "";
            in_image = false;
        }
        //Escaping Escape characters
        else if(post[i] == '\\' && (!(i == 0) && post[i-1] == '\\')){
            current_string += "\\";
        }
        else if(post[i] == '*' && post[i+1] == '*' && (i != 0 && post[i-1] != "\\")){
            formatted_post.push({
                type: (in_bold == true) ? "bolded" : "paragraph",
                contents: current_string
            })
            current_string = "";
            i++;
            in_bold = !in_bold;
        }
        //If its just a regular character (ignoring escape characters)
        else if(post[i] != '\\'){
            current_string += post[i];
        }
    }
    formatted_post.push({
        type: "paragraph",
        contents: current_string
    });
    console.log(formatted_post);
    return (formatted_post);
}

export function renderComments() {

}