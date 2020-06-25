
import Md5JS from 'js-md5'
import { Base64 as Base64JS } from 'js-base64'

const Md5 = (str: string): string => Md5JS(str)
// declare module 'js-base64' {
//     interface Base64 {
//         [key: string]: any,
//     }
// }
const Base64 = (str: string | number, mode: string = 'encodeURI'): string => {
    if (mode === 'encodeURI') return Base64JS.encodeURI(str.toString())
    else if (mode === 'encode') return Base64JS.encode(str.toString())
    else if (mode === 'decode') return Base64JS.encode(str.toString())
    else throw Error('mode 格式错误')
}
const Base64EncodeURI = (str: string | number): string => Base64JS.encodeURI(str.toString())
const Base64Encode = (str: string | number): string => Base64JS.encode(str.toString())
const Base64Decode = (str: string | number): string => Base64JS.decode(str.toString())
export = {
    Md5, Base64, Base64Encode, Base64EncodeURI, Base64Decode
}