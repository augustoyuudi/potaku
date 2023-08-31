import { schedule,  markdown} from "danger"
import { npmOutdated } from './.danger/npmOutdated';

schedule(npmOutdated());

markdown('hey hey ore ga ryo daze say yeah')