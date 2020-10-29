export async function getPost(slug) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const data = await res.json();

    return {
        post: data,
    }
}

export async function getUser() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    return {
        user: data,
    }
}