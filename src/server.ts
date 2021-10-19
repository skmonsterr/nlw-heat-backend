import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT, () =>
  console.log(`🚀 Server is running on PORT ${process.env.PORT}`)
);
