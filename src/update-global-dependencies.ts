import Dir from './dir/dir.js';
import PackagesPaths from './json/array/files.js';
import JsonRead from './json-read.js';
import Json from './json/json.js';

export default function UpdateGlobalDependencies(
    packageJsonPath : string, peers: Dir[],
    changed : (dev:boolean, pkg: string, dependency : string, from : string, to : string)=>void = ()=>{}
) : Json[] {

    const global = JsonRead(packageJsonPath);
    const globals = Object.assign({}, global.devDependencies, global.dependencies);

    const type = new Map([
        ['dependencies', false],
        ['devDependencies', true],
    ]);

    const packages = PackagesPaths('package.json', peers);

    for(const pkg of packages) {

        for(const [name, version] of Object.entries(globals)) {

            for (const [key, dev] of type) {

                if(pkg.object[key] && pkg.object[key][name]) {

                    if(pkg.object[key][name] !== version) {

                        pkg.object[key][name] = version;

                        changed(dev, pkg.name, name, pkg.object[key][name], version as string);

                    }
                }
            }
        }
    }

    return packages;

}

