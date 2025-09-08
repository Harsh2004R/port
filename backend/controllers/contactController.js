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

        // Auto-acknowledgement to the submitter
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
            to: email,
            subject: 'Thanks for reaching out! 👋',
            html: `
              <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f9; padding: 30px; color: #333;">
                <table width="100%" cellspacing="0" cellpadding="0" style="max-width: 650px; margin: auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="background: linear-gradient(135deg, #4f46e5, #2563eb); padding: 22px; text-align: center; color: #fff;">
                      <h2 style="margin: 0; font-size: 20px;">Thanks, ${name}!</h2>
                      <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">I got your message and will get back to you soon.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 22px; font-size: 15px; line-height: 1.6;">
                      <p>Meanwhile, you can also find me here:</p>
                      <ul style="padding-left: 18px;">
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/harsh-sharma-0545aa25b/" style="color:#4f46e5; text-decoration:none;">linkedin.com/in/harshsharma</a></li>
                        <li>GitHub: <a href="https://github.com/Harsh2004R" style="color:#4f46e5; text-decoration:none;">github.com/harshsharma</a></li>
                        <li>Twitter: <a href="https://x.com/Harsh2004R" style="color:#4f46e5; text-decoration:none;">@harshsharma</a></li>
                        <li>WhatsApp: <a href="https://wa.me/917454982623" style="color:#4f46e5; text-decoration:none;">Chat on WhatsApp</a></li>
                      </ul>
                      <p>If it’s urgent, feel free to reply directly to this email.</p>
                      <p style="margin-top: 20px; color:#6b7280; font-size: 13px;">— Harsh Sharma</p>
                    </td>
                  </tr>
                </table>
              </div>
            `,
          });
        } catch (ackErr) {
          console.error('Failed to send acknowledgement:', ackErr.message);
        }
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

// DELETE /api/v1/contacts/:id
exports.deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    return res.status(200).json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// POST /api/v1/contacts/:id/reply
exports.replyToContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    const transporter = createTransporter();
    const replyMessage = message && message.trim().length > 0 ? message : `Hey ${contact.name},\n\nI got your message and will get back to you soon. Meanwhile, here are my contact links:\nLinkedIn: https://linkedin.com/in/harshsharma\nGitHub: https://github.com/harshsharma\nTwitter: https://twitter.com/harshsharma\nWhatsApp: https://wa.me/15551234567\n\nBest,\nHarsh`;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: contact.email,
      subject: `Re: ${contact.subject}`,
      text: replyMessage,
    });

    return res.status(200).json({ success: true, message: 'Reply sent' });
  } catch (error) {
    next(error);
  }
};
