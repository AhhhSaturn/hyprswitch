import { file, which } from "bun";

export const getKontroll = async () => {
	const sysInstalled = which("kontroll");
	if (sysInstalled) return sysInstalled;
	if (await file("kontroll").exists()) return "./kontroll";
	return false;
};

export const sendCommand = (kontroll: string, command: string[]) => {
	Bun.spawn([kontroll, ...command], {
		stdout: "inherit",
		stderr: "inherit",
	});
};

export const kontroll = await getKontroll();
if (!kontroll) {
	throw new Error(
		"kontroll (https://github.com/zsa/kontroll) is required to use hyprswitch. Please install it or place the executable next to hyprswitch's",
	);
}

export const setLayer = (layer: number) => {
	sendCommand(kontroll, ["set-layer", "--index", layer.toString()]);
};
