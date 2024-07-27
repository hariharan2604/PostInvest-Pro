import cron from 'node-cron';

const scheduleJobs = () => {
    // Schedule a cron job
    cron.schedule('0 0 * * *', () => {
        console.log('Running a job at midnight every day');
        // Your cron job logic here
    });
};

export default scheduleJobs;
