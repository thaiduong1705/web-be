const CronJob = require("node-cron");
import { updateExpiredPost } from "../services/post.service";
import { updateReport } from "../services/report.service";

export const initUpdatePost = () => {
    const scheduledJobFunction = CronJob.schedule(
        "1 0 * * *",
        () => {
            console.log("I'm executed on a schedule of updatePost");
            updateExpiredPost();
        },
        {
            timezone: "Asia/Ho_Chi_Minh",
        },
    );

    scheduledJobFunction.start();
};

export const initUpdateReport = () => {
    const scheduledJobFunction = CronJob.schedule(
        "0 11 * * *",
        () => {
            console.log("I'm executed on a schedule of updateReport");
            updateReport();
        },
        {
            timezone: "Asia/Ho_Chi_Minh",
        },
    );

    scheduledJobFunction.start();
};
