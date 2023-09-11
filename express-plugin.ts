import type { NextFunction, Request, Response } from "express";
/* used to inject express as middleware instead of using proxy when running vite in dev mode */
export default function express(path: string) {
  return {
    name: "vite-plugin-express",
    configureServer: async (server: any) => {
      server.middlewares.use(
        async (req: Request, res: Response, next: NextFunction) => {
          process.env["VITE"] = "true";
          try {
            const { app } = await server.ssrLoadModule(path);
            app(req, res, next);
          } catch (err) {
            console.error(err);
          }
        }
      );
    }
  };
}
