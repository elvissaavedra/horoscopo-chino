export default async (...args) => {

  const options = new Request(...args, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'token_id': '80669BI25E89de2F7dd09F067j08f2307h8E8h8F71',
    })
  });

  const res = await fetch(options);
  return res.json();
}