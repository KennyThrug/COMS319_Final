import { getPostFromInput } from "./Pages/CreatePostPage";

export function getMethod(Posts, setPosts) {
    fetch("http://localhost:8081/getAllPosts")
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
            console.log(Posts);
        });
}
export function postMethod(Posts, setPosts) {
    let x = getPostFromInput();
    fetch("http://localhost:8081/post", {
        method: "POST",
        headers: {
            obj_id: getNextID(Posts),
            obj_postTitle: x.postTitle,
            obj_author: x.author,
            obj_date: x.date,
            obj_date_published: x.date_published,
            obj_genres: x.genres,
            obj_tags: x.tags,
            obj_postContents: x.postContents,
        },
    }).then((data) => {
        getMethod(Posts, setPosts);
    });
}

export function putMethod(Posts,setPosts,updatedPost){
    console.log(updatedPost);
    let x = updatedPost;
    let newPost = {
        obj_id: x.id,
        obj_postTitle: x.postTitle,
        obj_author: x.author,
        obj_date: x.date,
        obj_date_published: x.date_published,
        obj_genres: x.genres,
        obj_tags: x.tags,
        obj_postContents: x.postContents,
    };
    fetch("http://127.0.0.1:8081/api/update",{
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
}).then((data) => {
    getMethod(Posts,setPosts);
});
}

export function deleteOne(deleteid, Posts, setPosts) {
    console.log("Product to delete :", deleteid);
    console.log(JSON.stringify({ id: deleteid }));
    fetch("http://localhost:8081/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteid}),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Delete a product completed : ", deleteid);
            console.log(data);
            if (data) {
                const key = Object.keys(data);
                const value = Object.values(data);
                alert(key + value);
                getMethod(Posts,setPosts);
            }
        });
    console.log("test");
    //setChecked4(!checked4);
}

//Helper Function to assign Next ID
function getNextID(Posts){
    let largest = 0;
    for(let i = 0; i < Posts.length;i++){
        if(Posts[i].id > largest){
            largest = Posts[i].id;
        }
    }
    return largest + 1;
}