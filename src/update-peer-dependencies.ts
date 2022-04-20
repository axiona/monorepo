import Dir from './dir/dir';
import PackagesPaths from './json/array/files';
import Json from './json/json';

export default function UpdatePeerDependencies(
    paths: Dir[],
    changed : (dev:boolean, pkg: string, dependency : string, from : string, to : string)=>void = ()=>{}
) : Json[] {

    const type = new Map([
        ['dependencies', false],
        ['devDependencies', true],
    ]);

    const packages = PackagesPaths('package.json', paths);

    for(const pkg of packages) {

        for(const {version, name, dir} of packages) {

            for (const [key, dev] of type) {

                if(pkg.object[key] && pkg.object[key][name]) {

                    const patchVersion = `^${version}`;

                    if(pkg.object[key][name] !== patchVersion) {

                        changed(dev, pkg.name, name, pkg.object[key][name], patchVersion);

                        pkg.object[key][name] = patchVersion;
                    }
                }
            }
        }
    }

    return packages;
}
