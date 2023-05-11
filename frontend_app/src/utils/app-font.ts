import localFont from "next/font/local";

const appFont = localFont({
  src: [
    {
      path: '../../public/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Pretendard-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/Pretendard-Light.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
});

export default appFont;
