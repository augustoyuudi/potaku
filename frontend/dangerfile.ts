import { schedule } from "danger"
import { npmOutdated } from './.danger/npmOutdated';
import { npmAudit } from './.danger/npmAudit';

schedule(npmOutdated());
schedule(npmAudit());