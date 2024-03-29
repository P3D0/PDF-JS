import express  from "express";
import htmlToPdf from "../helpers/html-to-pdf.js";

const router = express.Router();

router.get('/',async (req, res) => {
    const pdf =  await htmlToPdf('<html><body><h1>Conversion Controller</h1></body></html>');
    res.contentType('application/pdf');
    res.send(pdf);
});

router.post('/post',async (req, res) => {
    const {html} = req.body;

    if(!html){
        res.status(400).send('Request body should contain in html property');
        return;
    }

    const pdf =  await htmlToPdf(html);
    res.contentType('application/pdf');
    res.send(pdf);
});

export default router;