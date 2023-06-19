export async function onRequest(context) {
  const options = {
    method: "GET",
    headers: { Authorization: "Basic cnlhdHJhYXBpOlJ5YXRyYWFwaUAxMTE=" },
  };

  let response = await fetch("https://pullapi.tracknowgps.com/api/v1/index.php/getDevPos", options);
  let data = await response.json();
  return new Response(JSON.stringify(data));
}
