const fs = require('fs');
const log = console.log;
const { execSync } = require('child_process');
const HOME = process.env.HOME;
const apps_path = HOME+'/'+'.local/share/applications/';
const bin_path = HOME+'/'+'.local/bin/';

var cwd = process.cwd();
var appname = cwd.split('/').pop();
var flags = "--disable-features=ProcessPerSiteUpToMainFrameThreshold";

var text = `#! /bin/sh
cd ${cwd}/
nw-dev ${flags} \\
${cwd} $*`

var desktop = `[Desktop Entry]
Exec=${appname}
GenericName=${appname}
Icon=${cwd}/icon.svg
Name=${appname}
StartupNotify=true
Terminal=false
TerminalOptions=
Type=Application
SingleMainWindow=true
StartupWMClass=${appname}
`

var pkg_json = `{
	"name": "${appname}",
	"main": "pub/index.html",
	"window": {
		"icon": "icon.png"
	}
}
`

//const pkg_json_file_name = 'package.json';
//fs.writeFileSync(pkg_json_file_name, pkg_json);


log('creating PNG icon');
execSync('inkscape -w 512 -h 512 icon.svg -o pub/e.png > /dev/null 2>&1');

const sh_file_name = 'linux-dashboard';
fs.writeFileSync(sh_file_name, text);
log('making it executable');
execSync('chmod +x '+sh_file_name);
log(sh_file_name + ' copying to destination');
fs.copyFileSync(sh_file_name, bin_path+sh_file_name);


const desktop_file_name = 'linux-dashboard.desktop';
fs.writeFileSync(desktop_file_name, desktop);
log(desktop_file_name + ' copying to destination');
fs.copyFileSync(desktop_file_name, apps_path+desktop_file_name);







