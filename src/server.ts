import * as express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('', (req, res) => { res.send('Hello World!'); });
app.listen(PORT, () => {
    console.log("this is server.ts");
    console.log(`the server is listening from port ${PORT}`);
})



