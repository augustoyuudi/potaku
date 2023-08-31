import { schedule, message } from "danger"
import { npmOutdated } from './.danger/npmOutdated';

schedule(npmOutdated());