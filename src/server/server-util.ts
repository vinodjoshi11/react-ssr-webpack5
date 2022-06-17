export const ServerUtil = {
  isMobile(ua: string) {
    if (
      /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
        ua
      )
    ) {
      return true;
    }
    return false;
  },

  getCss(locals: any) {
    const desktop = locals.assetPath('desktop.css');
    const vendor = locals.assetPath('vendor.css');
    return [desktop, vendor];
  },

  getJs(locals: any) {
    const desktop = locals.assetPath('desktop.js');
    const vendor = locals.assetPath('vendor.js');
    return [desktop, vendor];
  },
};
