export default async function handler(req, res) {
  try {
    const hfResponse = await fetch(
      "https://yutanakada828-nananakada.hf.space/run/judge",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: req.body.data
        })
      }
    );

    const result = await hfResponse.json();
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
