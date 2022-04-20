import Dir from './dir/dir';
import PackagesPaths from './json/array/files';
import JsonRead from './json-read';
import Json from './json/json';

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

