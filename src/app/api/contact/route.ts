// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPassword) {
      console.error("Missing environment variables");
      console.error("GMAIL_USER:", gmailUser ? "Set" : "Not set");
      console.error("GMAIL_APP_PASSWORD:", gmailPassword ? "Set" : "Not set");
      return NextResponse.json(
        { error: "Email configuration error - missing credentials" },
        { status: 500 }
      );
    }

    console.log("Environment variables loaded successfully");
    console.log("GMAIL_USER:", gmailUser);

    // Create transporter with more explicit configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("Transporter created, testing connection...");

    // Test the connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email server connection failed" },
        { status: 500 }
      );
    }

    // Email to you (notification)
    const mailToYou = {
      from: gmailUser,
      to: "brian.kidd.one@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
    };

    console.log("Sending notification email...");
    await transporter.sendMail(mailToYou);
    console.log("Notification email sent successfully");

    // Auto-reply to sender
    const mailToSender = {
      from: gmailUser,
      to: email,
      subject: "Thank you for contacting Brian Kidd",
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <br>
        <p>Best regards,<br>Brian Kidd</p>
        <p>UX Engineer & Frontend Developer</p>
      `,
    };

    console.log("Sending auto-reply email...");
    await transporter.sendMail(mailToSender);
    console.log("Auto-reply email sent successfully");

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed error sending email:", error);

    // Return more specific error information
    let errorMessage = "Failed to send email";
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
