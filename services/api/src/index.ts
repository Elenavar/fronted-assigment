import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import postsRouter from "@app/routes/posts.router";

// [Express setup]

const app = express(), DIST_DIR = __dirname;
app.use(cors());
app.use(express.static(DIST_DIR));
app.use(express.json());
app.use(postsRouter);
app.get('/health', async (req, res) => {
  res.status(200).json({ healthy: true });
});

// [Express start]

const PORT: number | string = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
