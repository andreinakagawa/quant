import path from "path";
import express, { Express, NextFunction, Request, Response } from "express";
import WebSocket from "ws";
import {Portfolio} from "./portfolio"

const app: Express = express();
app.use(express.json());

//app.use("/", express.static(path.join(__dirname, "../../client/dist")));

app.use(function(inRequest: Request, inResponse: Response,
  inNext: NextFunction) {
  inResponse.header("Access-Control-Allow-Origin", "*");
  inResponse.header("Access-Control-Allow-Methods",
  "GET,POST,DELETE,OPTIONS"
  );
  inResponse.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept"
  );
  inNext();
  });

app.get("/teste", async(inRequest:Request, inResponse:Response) => {
  try {
    inResponse.send("HELLO!");
  } catch(inError) {
    inResponse.send("ERRO");
  }
})

//testing a get request 
app.get("/portfolio", async(inRequest:Request, inResponse:Response) => {
  try {
    
    let p = new Portfolio(5, "Ibovespa Portfolio BR", "My Portfolio");
    
    inResponse.send(JSON.stringify(p));

  } catch(inError) {
    inResponse.sendStatus(404);
  }
})

// Start app listening.
app.listen(80, () => {
  console.log("Server listening...");
});