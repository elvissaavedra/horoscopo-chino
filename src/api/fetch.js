export default async (...args) => {
    const options = new Request(...args, {
        headers: new Headers({
            "Content-Type": "application/json",
            token_id: process.env.REACT_APP_TOKEN_ID,
        }),
    });

    const res = await fetch(options);
    return res.json();
};
