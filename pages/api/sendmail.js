
const nodemailer = require("nodemailer");

export default async (req, res) => {
   
    const { USER_EMAIL, USER_PASS } = process.env

    if (req.method === "POST"){

        const {email, text, name, phone} = req.body;
       
        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com.br",
            port: 587,
            secure: false,
            auth: {
                user: `${USER_EMAIL}`,
                pass: `${USER_PASS}`
            },
          });

          const mailOption = {
            from: `${USER_EMAIL}`,
            to: `${USER_EMAIL}`,
            subject: `${email} '`,
            text: `                
            Name: ${name},
            Phone: ${phone},
            Email: ${email},

            Message:

            ${text}               
                
            `,
          };
        
          transporter.sendMail(mailOption, (err, response) => {
            if (err) {
              console.log(err);
              res.send("error" + JSON.stringify(err));
            } else {
              console.log("mail send");
              res.send("success");
            }
        });                       
            
    }    
      
}
