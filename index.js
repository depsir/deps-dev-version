import { version } from 'deps-version';

export function devVersion(){
    return 'dev-version ' + version();
}
