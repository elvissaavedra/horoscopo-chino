export default async (...args) => {
    const options = new Request(...args, {
        headers: new Headers({
            "Content-Type": "application/json",
            token_id: "5e335e19cd721c2ec90a5b42",
        }),
    });

    const res = await fetch(options);
    return res.json();
};
