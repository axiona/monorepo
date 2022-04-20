import Dir from './dir/dir';
import PackagesPaths from './file/array/files';
import JsonRead from './json-read';
import File from './file/file';

export default function UpdateGlobalDependencies(
    packageJsonPath : string, peers: Dir[],
    changed : (dev:boolean, pkg: string, dependency : string, from : string, to : string)=>void = ()=>{}
) : File[] {

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

                if(pkg.data[key] && pkg.data[key][name]) {

                    if(pkg.data[key][name] !== version) {

                        pkg.data[key][name] = version;

                        changed(dev, pkg.name, name, pkg.data[key][name], version as string);

                    }
                }
            }
        }
    }

    return packages;

}

