import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share';

function ShareBtn() {
  const shareUrl = 'https://baizid-bostami.netlify.app/'; // যে URL শেয়ার করতে চান
  const title = 'এই পেজটি দেখুন!'; // শেয়ার করার সময় যে টাইটেল দেখাবে

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
}

export default ShareBtn;