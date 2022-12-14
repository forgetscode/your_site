const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
    try {
        const msg = {
            to: 'michael.v.y.gergely@gmail.com',
            from: 'forgetscode@gmail.com',
            subject: `Message for Michael.`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
            <meta charset="utf-8">
            
            <title>The HTML5 Herald</title>
            <meta name="description" content="The HTML5 Herald">
            <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
            <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
            <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${req.body.message}</p>
                    <br>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
                    <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Michael Gergely<br>Software Developer<br>+1 778-789-3561</p>
                    <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                    <a href="https://michael-gergely.vercel.app/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                    </div>
                    </div>
            </body>
            </html>`
        }
        await sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })

    }

    catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });

  }
