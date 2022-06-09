// importando o nodemailer:
const nodemailer  = require('nodemailer');

let sendMail = nodemailer.createTransport({
    // usar um email de envio: 
    host: //Perguntar sobre se eu consigo ter um host usando um serv local!
});