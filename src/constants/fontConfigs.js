import { FontFamilies } from '../constants/fontFamilies';
// 字體配置文件
export const fontConfigs = {
    [FontFamilies.NAIKAI]: {
        200: {
            woff2: require('@fonts/naikaifont/NaikaiFont-ExtraLight.woff2'),
            woff: require('@fonts/naikaifont/NaikaiFont-ExtraLight.woff'),
        },
        300: {
            woff2: require('@fonts/naikaifont/NaikaiFont-Light.woff2'),
            woff: require('@fonts/naikaifont/NaikaiFont-Light.woff'),
        },
        400: {
            woff2: require('@fonts/naikaifont/NaikaiFont-Regular.woff2'),
            woff: require('@fonts/naikaifont/NaikaiFont-Regular.woff'),
        },
        600: {
            woff2: require('@fonts/naikaifont/NaikaiFont-SemiBold.woff2'),
            woff: require('@fonts/naikaifont/NaikaiFont-SemiBold.woff'),
        },
        700: {
            woff2: require('@fonts/naikaifont/NaikaiFont-Bold.woff2'),
            woff: require('@fonts/naikaifont/NaikaiFont-Bold.woff')
        },
    },
    [FontFamilies.NAIKAI_LITE]: {
        400: {
            woff2: require('@fonts/naikaifont/NaikaiFont-Regular-Lite.woff2'),
            woff: require('@fonts/naikaifont/NaikaiFont-Regular-Lite.woff'),
        },
    },
    [FontFamilies.OPEN_HUNINN]: {
        400: {
            woff2: require('@fonts/open-huninn-font/jf-openhuninn.woff2'),
            woff: require('@fonts/open-huninn-font/jf-openhuninn.woff'),
        },
    },
};