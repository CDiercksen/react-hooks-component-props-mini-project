import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const collection = posts.map((post) =>
    <div key={post.id}>{Article(post)}</div>
    )
    // console.log(collection)
    return <main>
        {collection}
    </main>

}

export default ArticleList