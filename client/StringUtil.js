export default class StringUtil {
    static unescape(text) {
        return text.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#039;/g,"'")
    }
}
