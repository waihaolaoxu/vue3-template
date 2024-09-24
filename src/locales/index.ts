/*
 * @Author: xushilong 
 * @Date: 2024-09-24 15:47:42 
 * @Address: 无 
 * @Description: 国际化
 */

import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import zhCN from '@/locales/zh-CN.json';

const messages = {
    'en': en,
    "zh-CN": zhCN,
};
const selectedLanguage = localStorage.getItem('selected-language') as string;
const i18n = createI18n({
    legacy: false, // 使用 Composition API
    locale: selectedLanguage, // 默认语言
    fallbackLocale: 'zhCN', // 没有匹配的语言包
    messages, // 语言包
});

export {
    i18n
} 