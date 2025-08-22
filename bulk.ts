// MOCK REQUEST INFOBIP FORMAT
const data = {
  messages: [
    {
      destinations: [
        {
          to: "41793026727",
        },
      ],
      text: "This is a sample message",
    },
    {
      destinations: [
        {
          to: "87991281039",
        },
      ],
      text: "This is a sample message",
    },
  ],
};

const clientToHermesRequest = {
  ddi: "",
  phone: "",
  message: "",
  account: 10,
}; // optionals -> extra-fields - notifyURL(webhook)

const hermesTranslateToInfobip = {
  messages: [
    {
      destinations: [
        {
          to: process.message.ddi + process.message.phone,
        },
      ],
      text: process.message.message,
      notifyUrl: this.urlToNotify,
    },
  ],
};
