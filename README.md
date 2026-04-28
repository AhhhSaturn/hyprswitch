# hyprswitch
Automatically switch zsa keyboard layers on hyprland

# Installing

## Keymapp
[Keymapp](https://www.zsa.io/flash) is needed for the keymapp socket so we can communicate with the keyboard via kontroll.

### Arch
`yay -Sy zsa-keymapp-bin`

## Kontroll
[Kontroll](https://github.com/zsa/kontroll) is used to communicate with your keyboard so must be installed. Either place the kontroll binary next the the hyprswitch binary or install it via a package manager.

### Arch
`yay -Sy zsa-kontroll-bin`

# Running
Simply starting the hyprswitch binary will work but you can autostart it with hyprland config

Replace [PATH] with where ever hyprswitch's binary is. For example mine is `~/.local/bin/hyprswitch`
```conf
exec-once = [PATH]
```

# Configuring
hyprswitch will look for a config.json file at $XDG_CONFIG_HOME/hyprswitch/config.json or right next to it (./config.json).

## Example config
```json
{
  "layers": [
   	  {
        "windowClass": "dev.zed.Zed", 
        "layerIndex": 3 // you can find your layer index at http://configure.zsa.io. It's next to the name of the layer
      }
	]
}
```
