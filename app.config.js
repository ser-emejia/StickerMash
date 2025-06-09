export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

function getUniqueIdentifier() {
  if (IS_DEV) {
    return "com.emanuelxcodes.StickerMash.dev";
  }

  if (IS_PREVIEW) {
    return "com.emanuelxcodes.StickerMash.preview";
  }

  // Production
  return "com.emanuelxcodes.StickerMash";
}

function getAppName() {
  if (IS_DEV) {
    return "Sticker Mash (Dev)";
  }

  if (IS_PREVIEW) {
    return "Sticker Mash (Preview)";
  }

  // Production
  return "Sticker Mash: Emoji Stickers";
}
