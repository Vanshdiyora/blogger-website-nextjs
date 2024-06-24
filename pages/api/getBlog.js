import * as fs from 'fs';

export default function handler(req, res) {

  fs.readFile(`blogs/${req.query.slug}.json`, 'utf-8', (err, data) => {
    console.log(req.query.slug)

    if (err) {
      res.status(500).json({ error: "No such blog found" })

    }
    res.status(200).json(JSON.parse(data))
  })
}
