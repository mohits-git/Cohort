import { Hono } from 'hono';

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next();
  } else {
    return c.text("You dont have acces");
  }
})

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.post('/', async (c) => {
    const body = await c.req.json();
    console.log(body);
    console.log(c.req.header('Authorization'));
    console.log(c.req.query("param"));
    
    return c.json({
        message: "Thanks you for visiting."
    });
});

export default app;
