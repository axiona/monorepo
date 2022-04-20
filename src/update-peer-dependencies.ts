import Dir from './dir/dir';
import PackagesPaths from './file/array/files';
import File from './file/file';

export default function UpdatePeerDependencies(
    paths: Dir[],
    changed : (dev:boolean, pkg: string, dependency : string, from : string, to : string)=>void = ()=>{}
) : File[] {

    const type = new Map([
        ['dependencies', false],
        ['devDependencies', true],
    ]);

    const packages = PackagesPaths('package.json', paths);

    for(const pkg of packages) {

        for(const {version, name, dir} of packages) {

            for (const [key, dev] of type) {

                if(pkg.data[key] && pkg.data[key][name]) {

                    const patchVersion = `^${version}`;

                    if(pkg.data[key][name] !== patchVersion) {

                        changed(dev, pkg.name, name, pkg.data[key][name], patchVersion);

                        pkg.data[key][name] = patchVersion;
                    }
                }
            }
        }
    }

    return packages;
}
