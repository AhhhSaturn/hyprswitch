import { join } from "node:path/posix";
import { file } from "bun";

export const getConfig = async () => {
	if (await file("./config.json").exists())
		return (await file("./config.json").json()) as Config;

	const configPath = join(Bun.env.XDG_CONFIG_HOME, "hyprswitch/config.json");
	if (await file(configPath).exists())
		return (await file(configPath).json()) as Config;

	throw new Error("No config file found.");
};

// export const getConfig = async () => {
// 	const configFile = file("./config.json");
// 	if (!(await configFile.exists())) {
// 		console.log("Creating config.json");
// 		configFile.write(
// 			JSON.stringify({
// 				layers: [],
// 			}),
// 		);
// 	}

// 	return
// };

const config = await getConfig();

export const getLayer = (windowClass: string) => {
	const layer = config.layers.find(
		(layer) => layer.windowClass === windowClass,
	);

	if (!layer) return null;
	return layer.layerIndex;
};
