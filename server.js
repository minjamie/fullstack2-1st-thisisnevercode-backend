import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});