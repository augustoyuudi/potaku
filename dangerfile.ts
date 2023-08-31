import { schedule } from "danger"
import { npmOutdated } from './.danger/npmOutdated';

schedule(npmOutdated());