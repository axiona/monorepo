import {SortKeyRecursiveParameters} from '@alirya/object/sort-key-recursive';

const scores = new Map<string, number>([...[
    'name',
    'version',
    'description',
    'publishConfig',
    'author',
    'license',
    'homepage',
    'repository',
    'dependencies',
    'devDependencies',
    'scripts',
].entries()].map(entry=>entry.reverse() as [string, number]));

export default function Sort<Type extends object>(object : Type) : Type {

    return SortKeyRecursiveParameters(object, (key1, key2) => {

        if(scores.has(key1 as string) && scores.has(key2 as string)) {

            const score1 = scores.get(key1 as string) as number;
            const score2 = scores.get(key2 as string) as number;

            return score1 - score2;

        }

        return key1.toString().localeCompare(key2.toString());

    });
}
