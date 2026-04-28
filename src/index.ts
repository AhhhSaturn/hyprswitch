import { createConnection } from "node:net";
import { join } from "node:path/posix";
import { getLayer } from "./lib/config";
import { setLayer } from "./lib/kontroll";

const socketPath = join(
	Bun.env.XDG_RUNTIME_DIR,
	"hypr",
	Bun.env.HYPRLAND_INSTANCE_SIGNATURE,
	".socket2.sock",
);

const socket = createConnection(socketPath);

socket.on("connect", () => {
	console.log("connected to hyprland ipc socket");
});

socket.on("data", (rawIpcData) => {
	const ipcData = rawIpcData.toString();
	const event = ipcData.split(">>")[0];
	const data = ipcData.split(">>")[1];
	if (!event || !data) return;
	if (event !== "activewindow") return;
	const windowClass = data.split(",")[0];
	if (!windowClass) return;

	const layerIndex = getLayer(windowClass);
	if (!layerIndex) return;
	console.log("matched", windowClass);
	setLayer(layerIndex);
});
