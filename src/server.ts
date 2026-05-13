import app from "./app.js";

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  try {
    app.listen(PORT, () => {
      console.log("Server is running ");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}



(async () => {
  await bootstrap();
})();