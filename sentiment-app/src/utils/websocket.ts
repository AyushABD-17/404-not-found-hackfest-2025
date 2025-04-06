import { Server as WebSocketServer } from "ws";
import { Server } from "http";
import { aggregateSentiment } from "./sentiment";

export function initializeWebSocket(server: Server): WebSocketServer {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");
    ws.send(JSON.stringify({ type: "initial", data: aggregateSentiment() }));
    ws.on("close", () => console.log("WebSocket client disconnected"));
  });

  return wss;
}

export function broadcastSentiment(wss: WebSocketServer): void {
  const aggregatedData = aggregateSentiment();
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: "update", data: aggregatedData }));
    }
  });
}