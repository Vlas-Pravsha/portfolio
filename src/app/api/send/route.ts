export{}
// import type { NextApiRequest, NextApiResponse } from "next";
// import { Resend } from "resend";

// const resendClient = new Resend("re_iGCcmofu_81TuR37etPgbn2J5JyR4yd8a");

// interface EmailData {
//   from: string;
//   to: string;
//   subject: string;
//   html: string;
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const emailData: EmailData = {
//       from: "onboarding@resend.dev",
//       to: "vlas20421@gmail.com",
//       subject: "Hello World",
//       html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
//     };

//     const data = await resendClient.emails.send(emailData);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };
