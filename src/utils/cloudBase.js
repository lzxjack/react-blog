// 腾讯云开发的一些API
import cloudbase from '@cloudbase/js-sdk';
import tcb from '@cloudbase/js-sdk';
import { env } from './constant';

export const appTcb = tcb.init({
    env,
});

export const app = cloudbase.init({
    env,
});

export const auth = app.auth({
    persistence: 'local',
});

export const db = app.database();

export const _ = db.command;
