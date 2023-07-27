const nodeMailer = require("nodemailer");

module.exports = async(email,subject,text)=>{
   try {
    const transport = nodeMailer.createTransport({
        service:process.env.SERVICE,
        auth:{
            user: process.env.USER,      
			pass: process.env.PASS,     
        }
    })

    transport.sendMail({
        from:process.env.USER,         
        to: email,
        subject: subject,
        text: text
    },(error)=>{
      if(error)console.log("Mail has not sent",error);
      else console.log("Mail has sent successfully");
    })
   } catch (error) {
    console.log(error);
   }
}