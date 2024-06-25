import express, { Request, Response } from 'express';
import { Provider } from 'ims-lti';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const consumerKey = process.env.LTI_CONSUMER_KEY || 'senegroove-client-key';
const consumerSecret = process.env.LTI_CONSUMER_SECRET || 'senegroove-client-secret';

app.post('/lti/launch', (req: Request, res: Response) => {
  const provider = new Provider(consumerKey, consumerSecret);

  provider.valid_request(req, (err: Error | null, isValid: boolean) => {
    if (err || !isValid) {
      res.status(400).send('Invalid LTI request');
    } else {
      res.status(200).send('LTI Launch Successful');
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
