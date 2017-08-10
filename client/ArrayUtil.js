export default class ArrayUtil {
    static swap(arr,i,j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    static addAtRandomPosition(arr,elem) {
        arr.push(elem)
        ArrayUtil.swap(arr,Math.floor(Math.random()*arr.length),arr.length-1)
    }

}
