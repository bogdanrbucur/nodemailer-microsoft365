import nodemailer from "nodemailer";

const mailOptions = {
	from: process.env.USER,
	to: "bogdanrbucur@gmail.com",
	subject: "Nodemailer via 365",
	text: "Nodemailer via 365",
};

export const transporter = nodemailer.createTransport({
	service: "Outlook365",
	auth: {
		user: process.env.USER,
		pass: process.env.PASSWORD,
	},
});

const info = await transporter.sendMail(mailOptions);
console.log(info.response);
