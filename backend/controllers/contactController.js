const Contact = require("../models/Contact");
const createTransporter = require("../config/email");

// POST /api/v1/contacts
exports.createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, subject, message });

    // Attempt to send notification email (non-blocking response)
    (async () => {
      try {
        const transporter = createTransporter();

        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `📬 New Contact Submission - ${name}`,
          html: `
					  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f9; padding: 30px; color: #333;">
						<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 650px; margin: auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.1);">
						  
						  <!-- Header -->
						  <tr>
							<td style="background: linear-gradient(135deg, #4f46e5, #2563eb); padding: 25px; text-align: center; color: #fff;">
							  <h1 style="margin: 0; font-size: 22px;">New Client Contact</h1>
							  <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">You received a new message from your website contact form</p>
							</td>
						  </tr>
						  
						  <!-- Body -->
						  <tr>
							<td style="padding: 25px;">
							  <table width="100%" cellspacing="0" cellpadding="0" style="font-size: 15px; line-height: 1.6;">
								<tr>
								  <td style="padding: 8px 0;"><strong style="color:#2563eb;">👤 Name:</strong></td>
								  <td>${name}</td>
								</tr>
								<tr>
								  <td style="padding: 8px 0;"><strong style="color:#2563eb;">📧 Email:</strong></td>
								  <td><a href="mailto:${email}" style="color:#4f46e5; text-decoration:none;">${email}</a></td>
								</tr>
								<tr>
								  <td style="padding: 8px 0;"><strong style="color:#2563eb;">📝 Subject:</strong></td>
								  <td>${subject}</td>
								</tr>
								<tr>
								  <td colspan="2" style="padding: 15px 0 5px;"><strong style="color:#2563eb;">💬 Message:</strong></td>
								</tr>
								<tr>
								  <td colspan="2">
									<div style="background: #f9fafb; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px; color: #111827; font-size: 14px; white-space: pre-wrap;">
									  ${message}
									</div>
								  </td>
								</tr>
							  </table>
							</td>
						  </tr>
						  
						  <!-- Footer -->
						  <tr>
							<td style="background: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
							  <p style="margin: 0;">This is an automated message from your <strong>Website Contact Form</strong>.</p>
							</td>
						  </tr>
						</table>
					  </div>
					`,
        });
      } catch (err) {
        console.error("Failed to send contact email:", err.message);
      }
    })();

    return res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

// GET /api/v1/contacts
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    next(error);
  }
};
