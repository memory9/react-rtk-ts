/* 学生扫码加入课堂 */
export const wxOAuth2RedirectUrl = (libraryId: string) =>
  `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx41647079887f1eb2&redirect_uri=https%3A%2F%2Fwww.codingstep.cn%2Fapi%2Fv1%2Fauthentication%2Fmobile&response_type=code&scope=snsapi_userinfo&state=${libraryId}&connect_redirect=1#wechat_redirect`
