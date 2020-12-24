import Md5JS from 'js-md5'
import {Base64 as Base64JS} from 'js-base64'

const Md5 = (str: string): string => Md5JS(str)
const Base64 = (str: string | number, mode: string = 'encodeURL'): string => {
    if (mode === 'encodeURL') return Base64JS.encodeURI(str.toString())
    else if (mode === 'encode') return Base64JS.encode(str.toString())
    else if (mode === 'decode') return Base64JS.encode(str.toString())
    else throw Error('mode 格式错误')
}
const Base64EncodeURL = (str: string | number): string => Base64JS.encodeURI(str.toString())
const Base64Encode = (str: string | number): string => Base64JS.encode(str.toString())
const Base64Decode = (str: string | number): string => Base64JS.decode(str.toString())

export default {
    Md5, Base64, Base64Encode, Base64EncodeURL, Base64Decode
}