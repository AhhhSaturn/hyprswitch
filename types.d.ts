declare module "bun" {
	interface Env {
		XDG_RUNTIME_DIR: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		XDG_CONFIG_HOME: string;
	}
}

type Config = {
	layers: {
		windowClass: string;
		layerIndex: number;
	}[];
};
