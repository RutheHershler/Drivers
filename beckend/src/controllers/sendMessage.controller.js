exports.addMessage = async (req, res) => {
    console.log(req.body);
    const request = await create(req.body);
    res.json(request)
  }