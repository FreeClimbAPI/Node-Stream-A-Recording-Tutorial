# Node - Stream a Recording Tutorial

This project serves as a guide to help you build an application with FreeClimb. View this tutorial on [FreeClimb.com](https://docs.freeclimb.com/docs/stream-a-recording#section-javascript). Specifically, the project will:

- Create a file stream of a recorded file made by FreeClimb. Recordings are created when calls send a PerCL command to FreeClimb to record. They can be seen in the recordings tab in the dashboard.   

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | AUTH_TOKEN              | Authentication Token which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |

3. Provide a value for the variable `recordingId` in streamARecording.js. If you have created a recording, you will be able to get the recordingId from the recordings tab in your dashboard. To find out more about recordings, check out the [recording documentation](https://docs.freeclimb.com/docs/recordings-3)

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node streamARecording.js
   ```

